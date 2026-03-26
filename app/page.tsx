"use client";

import { useState, useEffect, useCallback } from "react";
import type { Profile, ProfileResponse, Section } from "@/types/profile";
import type { CSSProperties } from "react";

/* ═══════════════════════════════════════════════
   SHARED STYLE CONSTANTS (module-level to avoid per-render allocation)
   ═══════════════════════════════════════════════ */

const monoLabel: CSSProperties = {
  fontFamily: "var(--font-mono)",
  fontWeight: 500,
  letterSpacing: "0.18em",
  textTransform: "uppercase",
};

const displayParagraph: CSSProperties = {
  position: "relative",
  fontFamily: "var(--font-display)",
  fontWeight: 400,
};

const heroNameBase: CSSProperties = {
  fontFamily: "var(--font-display)",
  fontSize: "clamp(48px, 9vw, 88px)",
  lineHeight: 0.95,
  display: "inline",
};

/* ═══════════════════════════════════════════════
   HELPERS
   ═══════════════════════════════════════════════ */

function formatDate(iso: string): string {
  const d = new Date(iso);
  const day = String(d.getDate()).padStart(2, "0");
  const month = d.toLocaleString("en-GB", { month: "short" }).toUpperCase();
  const year = d.getFullYear();
  const hh = String(d.getHours()).padStart(2, "0");
  const mm = String(d.getMinutes()).padStart(2, "0");
  return `${day}-${month}-${year} ${hh}:${mm}`;
}

/* ═══════════════════════════════════════════════
   LOADER
   ═══════════════════════════════════════════════ */

function Loader({ progress, done }: { progress: number; done: boolean }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 200,
        background: "var(--color-bg)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        transition: "opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
        opacity: done ? 0 : 1,
        pointerEvents: done ? "none" : "all",
      }}
    >
      {/* Warm ambient orb */}
      <div
        style={{
          position: "absolute",
          width: "360px",
          height: "360px",
          borderRadius: "50%",
          background: "radial-gradient(circle, var(--color-gold-glow) 0%, transparent 65%)",
          animation: "loaderGlow 3.5s ease-in-out infinite",
        }}
      />

      <div style={{ position: "relative", textAlign: "center" }}>
        {/* Big number */}
        <div
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(80px, 15vw, 140px)",
            fontWeight: 300,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            color: "var(--color-text)",
            fontStyle: "italic",
          }}
        >
          {progress}
        </div>

        {/* Progress track */}
        <div
          style={{
            margin: "36px auto 0",
            width: "140px",
            height: "1px",
            background: "var(--color-text-ghost)",
            position: "relative",
            borderRadius: "1px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: "0 auto 0 0",
              width: `${progress}%`,
              background: "var(--color-gold)",
              borderRadius: "1px",
              transition: "width 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              boxShadow: "0 0 12px var(--color-gold-glow)",
            }}
          />
        </div>

        <div
          style={{
            ...monoLabel,
            marginTop: "24px",
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "0.35em",
            color: "var(--color-text-ghost)",
          }}
        >
          Synthesizing
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   CARD PRIMITIVES
   ═══════════════════════════════════════════════ */

function ProjectCard({ section, delay }: { section: Section; delay: number }) {
  return (
    <div className="project-card card-in" style={{ animationDelay: `${delay}s` }}>
      <div className="card-glow-line" />
      <div className="card-corner-orb" />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "18px",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        <span
          style={{
            ...monoLabel,
            fontSize: "10px",
            letterSpacing: "0.2em",
            color: "var(--color-emerald)",
          }}
        >
          {section.label}
        </span>

        <span
          style={{
            ...monoLabel,
            display: "inline-flex",
            alignItems: "center",
            gap: "6px",
            fontSize: "9px",
            fontWeight: 400,
            letterSpacing: "0.15em",
            color: "var(--color-emerald)",
            padding: "4px 12px",
            borderRadius: "20px",
            background: "var(--color-emerald-soft)",
            border: "1px solid rgba(74, 143, 109, 0.15)",
          }}
        >
          <span
            style={{
              width: "5px",
              height: "5px",
              borderRadius: "50%",
              background: "var(--color-emerald)",
              animation: "breathe 2.5s ease-in-out infinite",
            }}
          />
          Active
        </span>
      </div>

      <p
        style={{
          ...displayParagraph,
          fontSize: "18px",
          lineHeight: 1.8,
          color: "var(--color-text)",
        }}
      >
        {section.content}
      </p>
    </div>
  );
}

function NarrativeCard({ section, delay }: { section: Section; delay: number }) {
  return (
    <div className="narrative-card card-in" style={{ animationDelay: `${delay}s` }}>
      <div className="card-inner-glow" />

      <div
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginBottom: "16px",
        }}
      >
        <span className="card-dot" />
        <span className="mono-label card-label">{section.label}</span>
      </div>

      <p
        style={{
          ...displayParagraph,
          fontSize: "15.5px",
          lineHeight: 1.75,
          color: "var(--color-text-secondary)",
        }}
      >
        {section.content}
      </p>
    </div>
  );
}

/* ═══════════════════════════════════════════════
   NAV LINK
   ═══════════════════════════════════════════════ */

function NavLink({ href, title, children }: { href: string; title: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="nav-link" title={title} aria-label={title}>
      {children}
    </a>
  );
}

const IconResume = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <line x1="10" y1="9" x2="8" y2="9" />
  </svg>
);

const IconLinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const IconMeet = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const IconGitHub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

/* ═══════════════════════════════════════════════
   PROFILE VIEW
   ═══════════════════════════════════════════════ */

function SiteNav({ updatedAt }: { updatedAt?: string }) {
  return (
    <nav
      className="fade-in"
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        height: "50px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 clamp(20px, 4vw, 40px)",
        borderBottom: "1px solid var(--color-rule)",
        backdropFilter: "blur(20px) saturate(1.4)",
        background: "rgba(17, 15, 13, 0.75)",
        animationDelay: "0.3s",
      }}
    >
      <a
        href="https://claude.ai/settings/capabilities"
        target="_blank"
        rel="noopener noreferrer"
        className="claude-link"
      >
        <span className="nav-label" style={{ ...monoLabel, fontSize: "9px", fontWeight: 400, letterSpacing: "0.1em", color: "var(--color-text-dim)" }}>
          fetched via
        </span>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/claude.svg" alt="Claude" style={{ width: "13px", height: "13px" }} />
        {updatedAt && (
          <span className="nav-label" style={{ ...monoLabel, fontSize: "9px", fontWeight: 400, letterSpacing: "0.1em", color: "var(--color-text-dim)" }}>
            memory · {formatDate(updatedAt)}
          </span>
        )}
      </a>

      <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
        {([
          { title: "Resume", href: "https://resume.ankitpandey2708.in/", icon: <IconResume /> },
          { title: "LinkedIn", href: "https://www.linkedin.com/in/ankitpandey2708", icon: <IconLinkedIn /> },
          { title: "Book a Meeting", href: "https://meet.ankitpandey2708.in/", icon: <IconMeet /> },
          { title: "GitHub", href: "https://github.com/ankitpandey2708", icon: <IconGitHub /> },
        ] as const).map((link) => (
          <NavLink key={link.title} href={link.href} title={link.title}>{link.icon}</NavLink>
        ))}
      </div>
    </nav>
  );
}

function SiteFooter() {
  return (
    <footer
      className="fade-in"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid var(--color-rule)",
        padding: "20px clamp(20px, 4vw, 40px)",
        animationDelay: "1.6s",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-mono)",
          fontSize: "10px",
          fontWeight: 300,
          letterSpacing: "0.06em",
          color: "var(--color-text-dim)",
          lineHeight: 1.6,
          textAlign: "center",
        }}
      >
        Every word on this page comes directly from what{" "}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/claude.svg" alt="Claude" style={{ width: "11px", height: "11px", verticalAlign: "middle", display: "inline" }} />
        {" "}has learned and remembered about me. No hardcoded bio, no CMS, no manual editing.
      </p>
    </footer>
  );
}

function ProfileView({ profile, updatedAt }: { profile: Profile; updatedAt: string }) {
  const [firstName = "", ...rest] = profile.name.split(" ");
  const restName = rest.join(" ");

  const projectSections = profile.sections.filter((s) => s.type === "project");
  const narrativeSections = profile.sections.filter((s) => s.type === "narrative");

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* ── Background atmosphere ── */}
      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        {/* Warm top-left wash */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-5%",
            width: "55%",
            height: "50%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(212, 148, 58, 0.04) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
        {/* Cool bottom-right wash */}
        <div
          style={{
            position: "absolute",
            bottom: "-10%",
            right: "-5%",
            width: "50%",
            height: "45%",
            borderRadius: "50%",
            background: "radial-gradient(ellipse, rgba(74, 143, 109, 0.03) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      <SiteNav updatedAt={updatedAt} />

      {/* ── Content ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "1060px",
          margin: "0 auto",
          padding: "0 clamp(20px, 4vw, 40px)",
        }}
      >
        {/* ── Hero ── */}
        <header
          style={{
            padding: "clamp(48px, 8vh, 80px) 0 clamp(32px, 5vh, 52px)",
          }}
        >
          {/* Name */}
          <div className="hero-in" style={{ animationDelay: "0.5s" }}>
            <h1
              style={{
                ...heroNameBase,
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: "var(--color-text)",
              }}
            >
              {firstName}
            </h1>
            <span style={{ display: "inline-block", width: "clamp(12px, 2vw, 20px)" }} />
            <h1
              style={{
                ...heroNameBase,
                fontWeight: 300,
                fontStyle: "italic",
                letterSpacing: "-0.015em",
                color: "var(--color-gold)",
              }}
            >
              {restName}
            </h1>
          </div>

          {/* Role + Tags row */}
          <div
            className="fade-up"
            style={{
              animationDelay: "0.8s",
              marginTop: "clamp(20px, 3vh, 32px)",
              display: "flex",
              alignItems: "center",
              gap: "clamp(12px, 2vw, 20px)",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(18px, 2.5vw, 26px)",
                fontWeight: 300,
                fontStyle: "italic",
                color: "var(--color-text-dim)",
              }}
            >
              {profile.role}
            </span>

            <span
              style={{
                width: "1px",
                height: "20px",
                background: "var(--color-text-ghost)",
              }}
            />

            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              {profile.tags.map((tag, i) => (
                <Tag key={tag} label={tag} delay={0.9 + i * 0.06} />
              ))}
            </div>
          </div>
        </header>

        {/* ── Subtle divider ── */}
        <div
          className="fade-in"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, var(--color-gold-glow), var(--color-rule) 30%, transparent 80%)",
            marginBottom: "clamp(28px, 5vh, 48px)",
            animationDelay: "1s",
          }}
        />

        {/* ── Bento Grid ── */}
        <div
          className="bento-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "14px",
            paddingBottom: "clamp(40px, 6vh, 64px)",
          }}
        >
          {projectSections.map((section, i) => (
            <ProjectCard
              key={section.label}
              section={section}
              delay={1.05 + i * 0.1}
            />
          ))}
          {narrativeSections.map((section, i) => (
            <NarrativeCard
              key={section.label}
              section={section}
              delay={1.05 + projectSections.length * 0.1 + i * 0.08}
            />
          ))}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

/* ── Tag pill ── */

function Tag({ label, delay }: { label: string; delay: number }) {
  return (
    <span className="mono-label tag-pill fade-up" style={{ animationDelay: `${delay}s` }}>
      {label}
    </span>
  );
}

/* ═══════════════════════════════════════════════
   PAGE ROOT
   ═══════════════════════════════════════════════ */

const SESSION_CACHE_KEY = "profile_cache";

export default function Home() {
  const [data, setData] = useState<ProfileResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);
  const [loaderDone, setLoaderDone] = useState(false);

  const finish = useCallback(() => {
    setProgress(100);
    setTimeout(() => setLoaderDone(true), 1000);
  }, []);

  useEffect(() => {
    // Check localStorage — skip loader if cache is less than 2 days old
    try {
      const cached = localStorage.getItem(SESSION_CACHE_KEY);
      if (cached) {
        const { data: parsed, cachedAt }: { data: ProfileResponse; cachedAt: number } = JSON.parse(cached);
        const TWO_DAYS = 2 * 24 * 60 * 60 * 1000;
        if (Date.now() - cachedAt < TWO_DAYS) {
          setData(parsed);
          setProgress(100);
          setLoaderDone(true);
          return;
        }
      }
    } catch {
      // ignore parse errors, fall through to fetch
    }

    let cur = 0;
    const tick = setInterval(() => {
      const rate =
        cur < 20 ? Math.random() * 12 :
          cur < 50 ? Math.random() * 7 :
            cur < 75 ? Math.random() * 3 :
              cur < 90 ? Math.random() * 1.2 :
                0.3;
      cur = Math.min(cur + rate, 95);
      setProgress(Math.round(cur));
    }, 160);

    fetch("/api/profile")
      .then((r) => r.json())
      .then((d: ProfileResponse) => {
        clearInterval(tick);
        if (d.error) {
          setError(d.error);
        } else {
          setData(d);
          try { localStorage.setItem(SESSION_CACHE_KEY, JSON.stringify({ data: d, cachedAt: Date.now() })); } catch { /* quota */ }
        }
        finish();
      })
      .catch((e: Error) => {
        clearInterval(tick);
        setError(e.message);
        finish();
      });

    return () => clearInterval(tick);
  }, [finish]);

  return (
    <>
      {!loaderDone && <Loader progress={progress} done={progress === 100} />}

      {error ? (
        <div style={{ position: "relative", minHeight: "100vh" }}>
          <div style={{ maxWidth: "640px", margin: "0 auto", padding: "clamp(60px, 10vh, 100px) clamp(20px, 4vw, 40px)" }}>
            <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(28px, 5vw, 42px)", fontWeight: 300, fontStyle: "italic", color: "var(--color-text)", lineHeight: 1.2, marginBottom: "48px" }}>
              {"Claude's memory seems quiet."}<br />{"Here's where to find me:"}
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "12px" }}>
              {([
                { title: "Resume", href: "https://resume.ankitpandey2708.in/", icon: <IconResume />, desc: "Work history & skills" },
                { title: "LinkedIn", href: "https://www.linkedin.com/in/ankitpandey2708", icon: <IconLinkedIn />, desc: "Connect professionally" },
                { title: "Book a Meeting", href: "https://meet.ankitpandey2708.in/", icon: <IconMeet />, desc: "Schedule time with me" },
                { title: "GitHub", href: "https://github.com/ankitpandey2708", icon: <IconGitHub />, desc: "Projects & open source" },
              ] as const).map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "18px 20px",
                    borderRadius: "12px",
                    border: "1px solid var(--color-card-border)",
                    background: "var(--color-card)",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(212, 148, 58, 0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-gold-soft)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "var(--color-card-border)";
                    (e.currentTarget as HTMLAnchorElement).style.background = "var(--color-card)";
                  }}
                >
                  <span style={{ color: "var(--color-gold)", flexShrink: 0 }}>{link.icon}</span>
                  <span>
                    <span style={{ ...monoLabel, display: "block", fontSize: "10px", color: "var(--color-text)", marginBottom: "3px" }}>{link.title}</span>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: "10px", color: "var(--color-text-dim)" }}>{link.desc}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      ) : data ? (
        <ProfileView profile={data.profile} updatedAt={data.updatedAt} />
      ) : null}
    </>
  );
}
