# CLAUDE.md

## Rendering Patterns

### Home page (`app/page.tsx`) — Dynamic SSR
Calls `getAllPosts()` at request time via `fs.readdirSync` + `gray-matter`. No `generateStaticParams`, no `"use client"` — pure async Server Component rendered on each request. Acceptable because the list page is lightweight (no MDX compilation).

### Blog post page (`app/blog/[slug]/page.tsx`) — Static SSG
Uses `generateStaticParams` to pre-render every post at build time. At request time Next.js serves the pre-built HTML with no server work. The compile path (`getPost` → `gray-matter` → `@mdx-js/mdx` `compile` + `run`) only runs during `next build`, not on each visit.

**Why this matters:** `@mdx-js/mdx` `compile()` is expensive. Without `generateStaticParams` it would run on every navigation, causing noticeable latency. SSG eliminates that entirely in production.

### MDX rendering approach
MDX files live in `app/blog/posts/[slug].mdx` with YAML frontmatter. The slug is inferred from the filename — no `slug` field needed in frontmatter. They are **not** imported via webpack — instead:
1. `gray-matter` reads the raw file and strips frontmatter into `{ meta, content }`
2. `@mdx-js/mdx` `compile()` + `run()` renders the content string at build time

This avoids the Next.js 16 webpack loader serialization error that occurs when passing remark plugin functions (non-JSON-serializable) through `@next/mdx`.

### No `@next/mdx`
`next.config.ts` is intentionally minimal. `@next/mdx` was removed because it requires remark plugins to be passed as serializable options to its webpack loader — functions are not serializable, causing a build error in Next.js 15+.
