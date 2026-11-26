import fs from "node:fs";
import path from "node:path";
import type { Metadata } from "next";
import { NewsPage as NewsPageView } from "@/components/news/NewsPage";
import { newsArticles, type NewsArticle } from "@/lib/news";

export const metadata: Metadata = {
  title: "Recent News | Summerland Food Hub",
  description:
    "Stories, announcements, and community updates from the Summerland Food Hub and LocalMotive Farmers Network Cooperative.",
};

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

export default function NewsPage() {
  const published = newsArticles
    .filter((article) => article.published)
    .map(resolveArticleImage);

  return <NewsPageView articles={published} />;
}
