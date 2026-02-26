# <img src="public/claude.svg" width="28" height="28" style="vertical-align:middle;" /> Personal Website — Powered by Claude Memory

This is a personal "about page" that renders entirely from [Claude's](https://claude.ai) AI memory. There is no hardcoded bio, no CMS, no manual content editing. Every word on the page comes directly from what Claude has learned and remembered about the person.

## How it works

```
Claude Memory → Gemini (structured extraction) → Next.js frontend
```

1. **Claude** stores and maintains a memory of the person across conversations at [claude.ai](https://claude.ai)
2. On page load, the server fetches that memory via the Claude.ai internal memory API
3. **Gemini** parses the raw memory text into structured JSON — extracting name, role, tags, and dynamic sections
4. The **Next.js** frontend renders the profile as a bento-grid about page

The <img src="public/claude.svg" width="14" height="14" style="vertical-align:middle;" /> icon in the top-left of the live page links back to claude.ai and signals that the content is sourced directly from Claude's memory.

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS 4**
- **Gemini API** — structured JSON extraction from memory text
- **Claude.ai memory API** — source of truth for all profile content

## Environment variables

```env
CLAUDE_SESSION_KEY=   # sessionKey cookie from claude.ai
CLAUDE_ORG_ID=        # your Claude organization ID
GEMINI_API_KEY=       # Google AI Studio API key
GEMINI_MODEL=         # e.g. models/gemini-3-flash-preview
```

## Running locally

```bash
npm install
npm run dev
```

## Key design decisions

- **No static content** — if Claude's memory changes, the page changes on next load
- **1-hour server cache** — avoids hammering the Claude/Gemini APIs on every visit
- **localStorage cache** — repeat visitors skip the loader entirely; page appears instantly
- **Dynamic sections** — Gemini decides how many sections to create and what to call them based on the richness of the memory
