import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleDetailsPage } from "@/components/news/ArticleDetailsPage";
import { newsArticles, type NewsArticle } from "@/lib/news";

function resolveArticleImage(article: NewsArticle): NewsArticle {
  if (!article.image.startsWith("/")) return article;
  const diskPath = path.join(
    process.cwd(),
    "public",
    article.image.replace(/^\//, "")
  );
  if (fs.existsSync(diskPath)) return article;
  return { ...article, image: "/images/home/offer-retail.jpg" };
}

export function generateStaticParams() {
  return newsArticles
    .filter((article) => article.published)
    .map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = newsArticles.find(
    (item) => item.slug === slug && item.published
  );
  if (!article) {
    return { title: "Story Not Found | Summerland Food Hub" };
  }
  return {
    title: `${article.title} | Summerland Food Hub`,
    description: article.excerpt,
  };
}

export default async function NewsArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const rawArticle = newsArticles.find(
    (item) => item.slug === slug && item.published
  );

  if (!rawArticle) {
    notFound();
  }

  const article = resolveArticleImage(rawArticle);
  const relatedArticles = newsArticles
    .filter((item) => item.published && item.slug !== slug)
    .map(resolveArticleImage);

  return (
    <ArticleDetailsPage article={article} relatedArticles={relatedArticles} />
  );
}
