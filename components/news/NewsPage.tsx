"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  Newspaper,
  Search,
  X,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { BotanicalLeafWatermark } from "@/components/home/BrandMarks";
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

export function NewsPage({ articles }: { articles: NewsArticle[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(articles.map((item) => item.category)));
    return ["All", ...unique];
  }, [articles]);

  const filteredArticles = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();
    return articles.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!normalized) return true;
      return (
        item.title.toLowerCase().includes(normalized) ||
        item.excerpt.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized) ||
        item.content.some((p) => p.toLowerCase().includes(normalized))
      );
    });
  }, [articles, activeCategory, searchQuery]);

  const featuredArticle = useMemo(() => {
    if (filteredArticles.length === 0) return null;
    return (
      filteredArticles.find((item) => item.featured) ?? filteredArticles[0]
    );
  }, [filteredArticles]);

  const remainingArticles = useMemo(() => {
    if (!featuredArticle) return [];
    return filteredArticles.filter((item) => item.id !== featuredArticle.id);
  }, [filteredArticles, featuredArticle]);

  return (
    <div className="flex-1 flex flex-col bg-[#F8F7F2] text-[#193827]">
      <main className="flex-1 bg-cream-paper pt-28 pb-16 lg:pt-36 lg:pb-20">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          {/* Editorial Top Header */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#526256] hover:text-[#193827] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Home</span>
              </Link>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#193827]/12 bg-white/80 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-[#193827]/80">
                <Newspaper size={13} className="text-[#5A8E50]" />
                Summerland Food Hub Journal
              </span>
            </div>

            <div className="mt-6">
              <BlurText
                as="h1"
                text="Recent News"
                trigger="load"
                effect="focus"
                animateBy="words"
                delay={80}
                stepDuration={0.42}
                blur={8}
                className="font-serif font-semibold text-[#193827] text-[44px] sm:text-[56px] leading-[1.03] tracking-[-0.02em]"
              />
              <p className="mt-3 text-[16px] sm:text-[17px] leading-[1.6] text-[#4E5E52] max-w-xl">
                Stories from our harvest markets, cooperative milestones, and
                local food makers across the Okanagan Valley.
              </p>

              {/* Toolbar: Search Box + Button on Left, Category Filter Pills beside it */}
              <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-3">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    searchInputRef.current?.focus();
                  }}
                  className="flex items-center rounded-2xl border border-[#E4E0D4] bg-[#FAF9F4] focus-within:border-[#5A8E50] focus-within:bg-white p-1.5 pl-3 transition-colors sm:w-72"
                >
                  <button
                    type="submit"
                    aria-label="Search articles"
                    className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF0E2] text-[#2B5836] hover:bg-[#193827] hover:text-white transition-colors cursor-pointer"
                  >
                    <Search size={15} strokeWidth={2} />
                  </button>
                  <label htmlFor="news-search" className="sr-only">
                    Search news articles
                  </label>
                  <input
                    ref={searchInputRef}
                    id="news-search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search news..."
                    className="w-full min-w-0 bg-transparent px-2.5 text-[13.5px] text-[#193827] placeholder:text-[#5E6D61] outline-none"
                  />
                  {searchQuery && (
                    <button
                      type="button"
                      onClick={() => setSearchQuery("")}
                      aria-label="Clear search"
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[#526256] hover:bg-[#E9EFE1] hover:text-[#193827] transition-colors cursor-pointer"
                    >
                      <X size={14} />
                    </button>
                  )}
                </form>

                <div
                  role="group"
                  aria-label="Filter news by category"
                  className="inline-flex flex-wrap items-center gap-1.5 rounded-2xl border border-[#E4E0D4] bg-[#FAF9F4] p-1.5 w-fit"
                >
                  {categories.map((category) => {
                    const active = activeCategory === category;
                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() => setActiveCategory(category)}
                        className={`rounded-xl px-4 py-2 text-[13px] font-medium transition-all cursor-pointer ${
                          active
                            ? "bg-[#193827] text-white shadow-xs"
                            : "text-[#4E5E52] hover:text-[#193827] hover:bg-white/70"
                        }`}
                      >
                        {category}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>

          {/* Empty State if Search/Filter Matches Nothing */}
          {filteredArticles.length === 0 && (
            <div className="mt-8 rounded-[24px] border border-[#E4E0D4] bg-[#FAF9F4] p-8 text-center">
              <p className="font-serif text-[22px] font-semibold text-[#193827]">
                No stories found
              </p>
              <p className="mt-1.5 text-[14.5px] text-[#4E5E52]">
                No published articles matched &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("All");
                }}
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#193827] px-5 py-2 text-[13px] font-medium text-white hover:bg-[#234D36] transition-colors cursor-pointer"
              >
                Reset filters
              </button>
            </div>
          )}

          {/* Featured Story Spotlight */}
          {featuredArticle && (
            <Reveal delay={0.08} className="mt-8">
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90, 142, 80, 0.16)"
                intensity={0.28}
                borderGlow={0.55}
                className="!rounded-[26px] !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_14px_38px_-16px_rgba(25,56,39,0.1)] transition-all duration-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Compact Photo */}
                  <Link
                    href={`/news/${featuredArticle.slug}`}
                    className="relative lg:col-span-5 h-52 sm:h-60 lg:h-full lg:min-h-[260px] overflow-hidden group block"
                  >
                    <Image
                      src={featuredArticle.image}
                      alt={featuredArticle.imageAlt}
                      fill
                      priority
                      sizes="(max-width: 1024px) 100vw, 42vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12291C]/24 via-transparent to-transparent" />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-3 rounded-xl border border-white/35"
                    />
                  </Link>

                  {/* Right Story Summary */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-[#526256]">
                        <span className="rounded-full bg-[#EAF0E2] border border-[#CFE0C0] px-3 py-1 font-medium text-[#2B5836]">
                          {featuredArticle.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#5A8E50]" />
                          {formatArticleDate(featuredArticle.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={13} className="text-[#5A8E50]" />
                          {estimateReadMinutes(featuredArticle)} min read
                        </span>
                      </div>

                      <h2 className="mt-3.5 font-serif text-[26px] sm:text-[32px] leading-[1.14] font-semibold text-[#193827]">
                        <Link
                          href={`/news/${featuredArticle.slug}`}
                          className="hover:text-[#3A6B40] transition-colors"
                        >
                          {featuredArticle.title}
                        </Link>
                      </h2>

                      <p className="mt-2.5 text-[15px] leading-[1.6] text-[#4E5E52]">
                        {featuredArticle.excerpt}
                      </p>

                      {featuredArticle.content[1] && (
                        <p className="mt-2 text-[14.5px] leading-[1.6] text-[#5E6D61] line-clamp-3">
                          {featuredArticle.content[1]}
                        </p>
                      )}
                    </div>

                    <div>
                      <Magnet padding={32} magnetStrength={3.5} maxOffset={6}>
                        <Link
                          href={`/news/${featuredArticle.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-6 py-2.5 shadow-[0_8px_20px_rgba(25,56,39,0.2)] transition-all duration-200 group"
                        >
                          <span>Read Full Story</span>
                          <ArrowRight
                            size={15}
                            strokeWidth={2}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </Magnet>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          )}

          {/* More Stories Grid */}
          {remainingArticles.length > 0 && (
            <div className="mt-10">
              <Reveal>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#193827]">
                    More from the Hub
                  </h2>
                  <span className="font-mono text-[12px] text-[#526256]">
                    {remainingArticles.length}{" "}
                    {remainingArticles.length === 1 ? "article" : "articles"}
                  </span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingArticles.map((article, idx) => (
                  <Reveal key={article.id} delay={0.07 * idx} className="h-full">
                    <SpotlightCard
                      theme="light"
                      spotlightColor="rgba(90, 142, 80, 0.16)"
                      intensity={0.28}
                      borderGlow={0.55}
                      className="!rounded-[24px] !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_10px_28px_rgba(25,56,39,0.04)] hover:!shadow-[0_16px_36px_rgba(25,56,39,0.09)] transition-all duration-200 h-full overflow-hidden flex flex-col"
                    >
                      <Link
                        href={`/news/${article.slug}`}
                        className="relative h-40 sm:h-44 w-full overflow-hidden block group"
                      >
                        <Image
                          src={article.image}
                          alt={article.imageAlt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12291C]/20 via-transparent to-transparent" />
                      </Link>

                      <div className="flex-1 flex flex-col justify-between p-6">
                        <div>
                          <div className="flex flex-wrap items-center gap-2.5 text-[12px] text-[#526256]">
                            <span className="rounded-full bg-[#EAF0E2] px-2.5 py-0.5 font-medium text-[#2B5836]">
                              {article.category}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={12} className="text-[#5A8E50]" />
                              {formatArticleDate(article.date)}
                            </span>
                          </div>

                          <h3 className="mt-3 font-serif text-[21px] leading-snug font-semibold text-[#193827]">
                            <Link
                              href={`/news/${article.slug}`}
                              className="hover:text-[#3A6B40] transition-colors"
                            >
                              {article.title}
                            </Link>
                          </h3>

                          <p className="mt-2 text-[14.5px] leading-[1.6] text-[#4E5E52]">
                            {article.excerpt}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-[#E4E0D4]">
                          <Link
                            href={`/news/${article.slug}`}
                            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#193827] hover:text-[#3A6B40] transition-colors group"
                          >
                            <span>Read story</span>
                            <ArrowRight
                              size={14}
                              className="text-[#5A8E50] transition-transform duration-200 group-hover:translate-x-1"
                            />
                          </Link>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Community Story & Press Invite */}
          <Reveal delay={0.12} className="mt-12">
            <div className="relative overflow-hidden rounded-[28px] bg-[#193827] text-white px-7 py-8 sm:px-10 sm:py-10 shadow-[0_18px_46px_-22px_rgba(18,41,28,0.45)]">
              <BotanicalLeafWatermark className="hidden md:block absolute -right-8 -bottom-10 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-xl">
                  <h2 className="font-serif text-[28px] sm:text-[32px] leading-tight font-semibold text-white">
                    Have harvest news or a maker milestone to share?
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#DCE6DA]">
                    Connect with the Summerland Food Hub team for event
                    announcements, market spotlights, and community partnerships.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3 shrink-0">
                  <Link
                    href="/membership"
                    className="inline-flex items-center gap-2 rounded-full bg-[#A3C962] hover:bg-[#B2D674] px-5 py-2.5 text-[13.5px] font-semibold text-[#12291C] transition-colors"
                  >
                    Become a Member
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 hover:bg-white/15 px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors"
                  >
                    <span>Contact Us</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
