"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Check,
  Clock,
  MapPin,
  Share2,
  Sprout,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { Reveal } from "@/components/home/MotionPrimitives";
import type { NewsArticle } from "@/lib/news";

function formatArticleDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(parsed);
}

function estimateReadMinutes(article: NewsArticle): number {
  const words = [article.title, article.excerpt, ...article.content]
    .join(" ")
    .trim()
    .split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 180));
}

export function ArticleDetailsPage({
  article,
  relatedArticles,
}: {
  article: NewsArticle;
  relatedArticles: NewsArticle[];
}) {
  const [copied, setCopied] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2400);
    } catch {
      // Clipboard API unavailable in restricted contexts
    }
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8F7F2] text-[#193827]">
      <main className="flex-1 bg-cream-paper pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10">
          {/* Article Navigation & Meta */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#526256] hover:text-[#193827] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Recent News</span>
              </Link>

              <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-[#526256]">
                <span className="rounded-full bg-[#EAF0E2] border border-[#CFE0C0] px-3 py-1 font-medium text-[#2B5836]">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#5A8E50]" />
                  {formatArticleDate(article.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-[#5A8E50]" />
                  {estimateReadMinutes(article)} min read
                </span>
              </div>
            </div>

            {/* Article Title */}
            <div className="mt-6 max-w-4xl">
              <BlurText
                as="h1"
                text={article.title}
                trigger="load"
                effect="focus"
                animateBy="words"
                delay={70}
                stepDuration={0.38}
                blur={8}
                className="font-serif font-semibold text-[#193827] text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.07] tracking-[-0.02em]"
              />
              <p className="mt-4 text-[17px] sm:text-[19px] leading-[1.6] text-[#4E5E52] max-w-3xl">
                {article.excerpt}
              </p>
            </div>
          </Reveal>

          {/* Featured Photography */}
          <Reveal delay={0.08} className="mt-8">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[540px] w-full overflow-hidden rounded-[28px] border border-[#E4E0D4] bg-[#FAF9F4] shadow-[0_20px_50px_-24px_rgba(25,56,39,0.22)]">
              <Image
                src={article.image}
                alt={article.imageAlt}
                fill
                priority
                sizes="(max-width: 1160px) 100vw, 1100px"
                className="object-cover"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 rounded-2xl border border-white/35"
              />
            </div>
          </Reveal>

          {/* Two-Column Article Content + Sidebar */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Editorial Story Body */}
            <Reveal delay={0.12} className="lg:col-span-8">
              <article className="rounded-[26px] border border-[#E4E0D4] bg-white/85 p-7 sm:p-10 shadow-[0_10px_30px_rgba(25,56,39,0.04)] space-y-5">
                {article.content.map((paragraph, idx) => {
                  const isSignoff =
                    paragraph.length <= 36 && idx >= article.content.length - 2;

                  if (isSignoff) {
                    return (
                      <p
                        key={`${article.id}-p-${idx}`}
                        className={`font-serif ${
                          paragraph.toLowerCase().includes("eat. drink.")
                            ? "text-[22px] font-semibold italic text-[#193827] pt-1"
                            : "text-[17px] font-semibold text-[#5A8E50] pt-2 border-t border-[#E4E0D4]"
                        }`}
                      >
                        {paragraph}
                      </p>
                    );
                  }

                  return (
                    <p
                      key={`${article.id}-p-${idx}`}
                      className={`leading-[1.78] text-[#2B4234] ${
                        idx === 0
                          ? "text-[17px] sm:text-[18px] font-medium text-[#193827]"
                          : "text-[15.5px] sm:text-[16px]"
                      }`}
                    >
                      {paragraph}
                    </p>
                  );
                })}
              </article>
            </Reveal>

            {/* Right Story Details Sidebar */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
              <Reveal delay={0.16}>
                <SpotlightCard
                  theme="light"
                  spotlightColor="rgba(90, 142, 80, 0.14)"
                  intensity={0.25}
                  className="!rounded-[24px] !p-6 !bg-[#EBF0E1] !border !border-[#DCE4CE]"
                >
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2B5836]">
                    <Sprout size={14} />
                    Story Highlights
                  </div>

                  <dl className="mt-4 space-y-3 text-[14px]">
                    <div className="flex items-center justify-between gap-3 border-b border-[#D3DEC3] pb-2.5">
                      <dt className="text-[#526256]">Published</dt>
                      <dd className="font-semibold text-[#193827]">
                        {formatArticleDate(article.date)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-b border-[#D3DEC3] pb-2.5">
                      <dt className="text-[#526256]">Category</dt>
                      <dd className="font-semibold text-[#193827]">
                        {article.category}
                      </dd>
                    </div>
                    <div className="pt-0.5 flex items-start gap-2 text-[#193827]">
                      <MapPin
                        size={15}
                        className="mt-0.5 shrink-0 text-[#5A8E50]"
                      />
                      <span className="text-[13.5px] leading-snug">
                        Summerland Food Hub, 15815 Hwy 97, Summerland, BC
                      </span>
                    </div>
                  </dl>

                  <div className="mt-5">
                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#FAF9F4] border border-[#D3DEC3] px-4 py-2.5 text-[13px] font-semibold text-[#193827] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-[#5A8E50]" />
                          <span>Link Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 size={14} className="text-[#5A8E50]" />
                          <span>Share Story Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </SpotlightCard>
              </Reveal>

              <Reveal delay={0.2}>
                <div className="rounded-[24px] border border-[#E4E0D4] bg-[#FAF9F4] p-6 space-y-3">
                  <h2 className="font-serif text-[20px] font-semibold text-[#193827]">
                    Get Involved at the Hub
                  </h2>
                  <p className="text-[13.5px] leading-relaxed text-[#4E5E52]">
                    Join our grower cooperative or reach out about market shelf
                    opportunities and seasonal events.
                  </p>
                  <div className="pt-1 flex flex-col gap-2.5">
                    <Magnet padding={24} magnetStrength={3.5} maxOffset={5}>
                      <Link
                        href="/membership"
                        className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors"
                      >
                        <span>Explore Membership</span>
                        <ArrowRight size={14} />
                      </Link>
                    </Magnet>
                    <Link
                      href="/contact"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full border border-[#D8D3C4] bg-white hover:bg-[#F3F1E8] px-5 py-2.5 text-[13.5px] font-medium text-[#193827] transition-colors"
                    >
                      <span>Contact Our Team</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </aside>
          </div>

          {/* Related Stories Strip */}
          {relatedArticles.length > 0 && (
            <section className="mt-14 pt-10 border-t border-[#E4E0D4]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#193827]">
                  More Stories
                </h2>
                <Link
                  href="/news"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#5A8E50] hover:text-[#193827] transition-colors"
                >
                  <span>View all news</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedArticles.map((related) => (
                  <SpotlightCard
                    key={related.id}
                    theme="light"
                    spotlightColor="rgba(90, 142, 80, 0.16)"
                    intensity={0.26}
                    className="!rounded-[22px] !p-4 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] transition-all"
                  >
                    <Link
                      href={`/news/${related.slug}`}
                      className="flex items-center gap-4 group"
                    >
                      <div className="relative h-24 w-28 sm:h-28 sm:w-32 shrink-0 overflow-hidden rounded-xl border border-[#E4E0D4]">
                        <Image
                          src={related.image}
                          alt={related.imageAlt}
                          fill
                          sizes="140px"
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[11.5px] font-medium text-[#5A8E50]">
                          {related.category} &bull;{" "}
                          {formatArticleDate(related.date)}
                        </span>
                        <h3 className="mt-1 font-serif text-[18px] leading-snug font-semibold text-[#193827] group-hover:text-[#3A6B40] transition-colors">
                          {related.title}
                        </h3>
                        <p className="mt-1 text-[13px] text-[#4E5E52] line-clamp-2">
                          {related.excerpt}
                        </p>
                      </div>
                    </Link>
                  </SpotlightCard>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>
    </div>
  );
}
