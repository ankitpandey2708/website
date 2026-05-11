import Link from "next/link";
import { notFound } from "next/navigation";
import { compile, run } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";
import { formatPostDate, getAllPosts, getPost } from "@/lib/blog";

export function generateStaticParams() {
  return getAllPosts().map((post) => ({ slug: post.slug }));
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  let post: ReturnType<typeof getPost>;
  try {
    post = getPost(slug);
  } catch {
    notFound();
  }

  const compiled = await compile(post.content, { outputFormat: "function-body" });
  const { default: Content } = await run(String(compiled), {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return (
    <div className="page-content">
      <Link
        href="/"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "var(--font-mono)",
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: "var(--color-text-dim)",
          textDecoration: "none",
          marginBottom: "48px",
        }}
      >
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </Link>

      <time
        dateTime={post.meta.date}
        className="post-date"
        style={{ marginBottom: "16px" }}
      >
        {formatPostDate(post.meta.date)}
      </time>

      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(28px, 5vw, 42px)",
          fontWeight: 300,
          fontStyle: "italic",
          color: "var(--color-text)",
          lineHeight: 1.2,
          marginBottom: "clamp(32px, 5vh, 56px)",
        }}
      >
        {post.meta.title}
      </h1>

      <div className="prose">
        <Content />
      </div>
    </div>
  );
}
