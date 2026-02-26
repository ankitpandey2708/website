import { NextResponse } from "next/server";
import type { Profile } from "@/types/profile";

const SYSTEM_PROMPT = `
Profile extraction engine for personal websites. Read an AI memory document, produce structured JSON.

## Rules
- Extract by meaning, not by heading/format patterns
- Factual only — never infer, embellish, or invent. Preserve exact names, numbers, quoted phrases
- No duplication — each fact in exactly one section
- Strip all markdown formatting. Plain text only
- Never return null/undefined. Use "" for missing strings, [] for missing arrays

## Tone
Sharp editorial bio — confident, specific, human. No corporate jargon, no generic filler. Every sentence adds new information.

## Fixed fields
- name: Full name from anywhere in memory
- role: Most specific current title (not a list)
- tags: 3–5 short title-case labels (1–3 words) from recurring themes

## Dynamic sections (3–7)
Each section: { type: "project" | "narrative", label: "1–4 word title-case nav label", content: "2–4 sentences, third person" }

- Scale count with memory richness
- Each section covers a distinct facet
- Lead with current/interesting; active projects before background
- "project" type: named active product/venture with enough detail
- "narrative" type: everything else
- Sparse memory (<3 facts): exactly 3 sections noting limited info

## Output
Return ONLY valid JSON. No markdown, no fences. Directly parseable by JSON.parse().

{"name":"","role":"","tags":[],"sections":[{"type":"project | narrative","label":"","content":""}]}
`.trim();

/* ── In-memory cache ── */
let cache: {
  data: { profile: Profile; updatedAt: string };
  expiresAt: number;
} | null = null;

const CACHE_TTL_MS = 60 * 60 * 1000; // 1 hour

export async function GET() {
  const sessionKey = process.env.CLAUDE_SESSION_KEY;
  const orgId = process.env.CLAUDE_ORG_ID;
  const geminiApiKey = process.env.GEMINI_API_KEY;
  const geminiModel = process.env.GEMINI_MODEL;

  // Return cached data if still fresh
  if (cache && Date.now() < cache.expiresAt) {
    return NextResponse.json(cache.data);
  }

  if (!sessionKey || !orgId) {
    return NextResponse.json(
      { error: "CLAUDE_SESSION_KEY or CLAUDE_ORG_ID not set in .env.local" },
      { status: 500 }
    );
  }

  if (!geminiApiKey) {
    return NextResponse.json(
      { error: "GEMINI_API_KEY not set in .env.local" },
      { status: 500 }
    );
  }

  const t0 = Date.now();
  console.log("[profile] start");

  // Step 1: fetch memory from claude.ai
  let memoryText: string;
  let updatedAt: string;

  try {
    const claudeStart = Date.now();
    const memRes = await fetch(
      `https://claude.ai/api/organizations/${orgId}/memory`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:148.0) Gecko/20100101 Firefox/148.0",
          Cookie: `sessionKey=${sessionKey}`,
        },
      }
    );
    console.log(`[profile] claude.ai → ${memRes.status} in ${Date.now() - claudeStart}ms`);

    if (!memRes.ok) {
      const text = await memRes.text();
      return NextResponse.json(
        { error: `claude.ai responded with ${memRes.status}: ${text}` },
        { status: memRes.status }
      );
    }

    const memData = await memRes.json();
    memoryText = memData.memory;
    updatedAt = memData.updated_at;

    if (!memoryText || typeof memoryText !== "string") {
      return NextResponse.json(
        { error: "No memory text returned from claude.ai" },
        { status: 500 }
      );
    }
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to fetch memory";
    return NextResponse.json({ error: message }, { status: 502 });
  }

  // Step 2: extract structured profile via Gemini
  try {
    const endpoint = `https://generativelanguage.googleapis.com/v1beta/${geminiModel}:generateContent?key=${geminiApiKey}`;

    const geminiStart = Date.now();
    const geminiRes = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: [
          {
            parts: [{ text: memoryText }],
          },
        ],
        generationConfig: {
          temperature: 0,
          responseMimeType: "application/json",
          maxOutputTokens: 2048,
          thinkingConfig: {
            thinkingLevel: "MINIMAL",
          },
        },
      }),
    });
    console.log(`[profile] gemini → ${geminiRes.status} in ${Date.now() - geminiStart}ms`);

    if (!geminiRes.ok) {
      const text = await geminiRes.text();
      return NextResponse.json(
        { error: `Gemini responded with ${geminiRes.status}: ${text}` },
        { status: geminiRes.status }
      );
    }

    const geminiData = await geminiRes.json();
    const raw = geminiData?.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!raw) {
      return NextResponse.json(
        { error: "No content in Gemini response" },
        { status: 500 }
      );
    }

    const profile: Profile = JSON.parse(raw);
    const result = { profile, updatedAt };
    cache = { data: result, expiresAt: Date.now() + CACHE_TTL_MS };
    console.log(`[profile] total → ${Date.now() - t0}ms`);
    return NextResponse.json(result);
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : "Failed to parse profile";
    return NextResponse.json({ error: message }, { status: 502 });
  }
}
