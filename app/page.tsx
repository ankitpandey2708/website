import Link from "next/link";
import { getAllPosts, formatPostDate } from "@/lib/blog";

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

const navLinks = [
  { title: "Resume", href: "https://resume.ankitpandey2708.in/", icon: <IconResume /> },
  { title: "LinkedIn", href: "https://www.linkedin.com/in/ankitpandey2708", icon: <IconLinkedIn /> },
  { title: "Book a Meeting", href: "https://meet.ankitpandey2708.in/", icon: <IconMeet /> },
  { title: "GitHub", href: "https://github.com/ankitpandey2708", icon: <IconGitHub /> },
] as const;

export default function Home() {
  const posts = getAllPosts();

  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      <nav
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
        }}
      >
        <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "var(--color-text-dim)" }}>
          Ankit Pandey
        </span>

        <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              title={link.title}
              aria-label={link.title}
              className="nav-link"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </nav>

      <div className="page-content">

        {posts.length === 0 ? (
          <p style={{ fontFamily: "var(--font-display)", fontSize: "17px", fontWeight: 300, fontStyle: "italic", color: "var(--color-text-dim)" }}>
            Coming soon.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column" }}>
            {posts.map((post, i) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <article
                  className="post-row"
                  style={{
                    padding: "clamp(20px, 3vh, 28px) 0",
                    borderTop: "1px solid var(--color-rule)",
                    borderBottom: i === posts.length - 1 ? "1px solid var(--color-rule)" : "none",
                  }}
                >
                  <time
                    dateTime={post.date}
                    className="post-date"
                    style={{ marginBottom: "8px" }}
                  >
                    {formatPostDate(post.date)}
                  </time>

                  <h2
                    style={{
                      fontFamily: "var(--font-display)",
                      fontSize: "clamp(18px, 2.5vw, 24px)",
                      fontWeight: 400,
                      color: "var(--color-text)",
                      lineHeight: 1.3,
                      marginBottom: "8px",
                    }}
                  >
                    {post.title}
                  </h2>

                </article>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
