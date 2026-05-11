import fs from "fs";
import path from "path";
import matter from "gray-matter";

interface PostMeta {
  slug: string;
  title: string;
  date: string;
}

const postsDir = path.join(process.cwd(), "app/blog/posts");

export function getAllPosts(): PostMeta[] {
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith(".mdx"))
    .map((filename) => {
      const slug = filename.replace(/\.mdx$/, "");
      const file = fs.readFileSync(path.join(postsDir, filename), "utf8");
      const { data } = matter(file);
      return { slug, ...data } as PostMeta;
    })
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): { meta: PostMeta; content: string } {
  const file = fs.readFileSync(path.join(postsDir, `${slug}.mdx`), "utf8");
  const { data, content } = matter(file);
  return { meta: { slug, ...data } as PostMeta, content };
}

export function formatPostDate(iso: string): string {
  const d = new Date(iso);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const month = d.toLocaleString("en-GB", { month: "short", timeZone: "UTC" }).toUpperCase();
  const year = d.getUTCFullYear();
  return `${day}-${month}-${year}`;
}
