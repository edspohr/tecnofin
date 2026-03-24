import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const ARTICLES_DIR = path.join(process.cwd(), "content/blog");

export interface ArticleMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  author: string;
  category: string;
  tags: string[];
  readingTime: string;
  featured?: boolean;
}

export interface Article extends ArticleMeta {
  content: string;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(ARTICLES_DIR)) return [];

  const files = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".mdx"));

  const articles = files.map((filename) => {
    const slug = filename.replace(/\.mdx$/, "");
    const filePath = path.join(ARTICLES_DIR, filename);
    const raw = fs.readFileSync(filePath, "utf-8");
    const { data, content } = matter(raw);
    const rt = readingTime(content);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      author: data.author || "Edison Santiago Saavedra",
      category: data.category || "Fintech",
      tags: data.tags || [],
      readingTime: rt.text.replace("min read", "min de lectura"),
      featured: data.featured || false,
    } as ArticleMeta;
  });

  return articles.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getArticleBySlug(slug: string): Article | null {
  const filePath = path.join(ARTICLES_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) return null;

  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const rt = readingTime(content);

  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author || "Edison Santiago Saavedra",
    category: data.category || "Fintech",
    tags: data.tags || [],
    readingTime: rt.text.replace("min read", "min de lectura"),
    featured: data.featured || false,
    content,
  };
}

export function getRelatedArticles(
  currentSlug: string,
  category: string,
  limit = 3
): ArticleMeta[] {
  return getAllArticles()
    .filter((a) => a.slug !== currentSlug && a.category === category)
    .slice(0, limit);
}
