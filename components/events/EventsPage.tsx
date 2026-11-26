"use client";

import React, { useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  MapPin,
  Search,
  Ticket,
  X,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { BotanicalLeafWatermark } from "@/components/home/BrandMarks";
import { Reveal } from "@/components/home/MotionPrimitives";
import type { Event as HubEvent } from "@/lib/events";

function formatEventDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(parsed);
}

export function EventsPage({ events }: { events: HubEvent[] }) {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const categories = useMemo(() => {
    const unique = Array.from(new Set(events.map((item) => item.category)));
    return ["All", ...unique];
  }, [events]);

  const filteredEvents = useMemo(() => {
    const normalized = searchQuery.trim().toLowerCase();
    return events.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;
      if (!matchesCategory) return false;
      if (!normalized) return true;
      return (
        item.title.toLowerCase().includes(normalized) ||
        item.excerpt.toLowerCase().includes(normalized) ||
        item.category.toLowerCase().includes(normalized) ||
        item.location.toLowerCase().includes(normalized) ||
        item.description.some((p) => p.toLowerCase().includes(normalized))
      );
    });
  }, [events, activeCategory, searchQuery]);

  const featuredEvent = useMemo(() => {
    if (filteredEvents.length === 0) return null;
    return filteredEvents.find((item) => item.featured) ?? filteredEvents[0];
  }, [filteredEvents]);

  const remainingEvents = useMemo(() => {
    if (!featuredEvent) return [];
    return filteredEvents.filter((item) => item.id !== featuredEvent.id);
  }, [filteredEvents, featuredEvent]);

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
                <Calendar size={13} className="text-[#5A8E50]" />
                Summerland Food Hub Calendar
              </span>
            </div>

            <div className="mt-6">
              <BlurText
                as="h1"
                text="Upcoming Events"
                trigger="load"
                effect="focus"
                animateBy="words"
                delay={80}
                stepDuration={0.42}
                blur={8}
                className="font-serif font-semibold text-[#193827] text-[44px] sm:text-[56px] leading-[1.03] tracking-[-0.02em]"
              />
              <p className="mt-3 text-[16px] sm:text-[17px] leading-[1.6] text-[#4E5E52] max-w-xl">
                Workshops, facility tours, and seasonal market gatherings
                connecting farmers, food makers, and neighbours across the
                Okanagan.
              </p>

              {/* Toolbar: Search Box + Button on Left, Category Filter Pills beside it */}
              {events.length > 0 && (
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
                      aria-label="Search events"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-[#EAF0E2] text-[#2B5836] hover:bg-[#193827] hover:text-white transition-colors cursor-pointer"
                    >
                      <Search size={15} strokeWidth={2} />
                    </button>
                    <label htmlFor="events-search" className="sr-only">
                      Search events
                    </label>
                    <input
                      ref={searchInputRef}
                      id="events-search"
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Search events..."
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
                    aria-label="Filter events by category"
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
              )}
            </div>
          </Reveal>

          {/* Empty Calendar Notice When No Events Are Published Yet */}
          {events.length === 0 && (
            <Reveal delay={0.08} className="mt-8">
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90, 142, 80, 0.14)"
                intensity={0.25}
                borderGlow={0.5}
                className="!rounded-[26px] !p-8 sm:!p-10 !bg-[#FAF9F4] !border !border-[#E4E0D4] !shadow-[0_12px_32px_rgba(25,56,39,0.05)]"
              >
                <div className="max-w-2xl">
                  <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#EAF0E2] text-[#2B5836]">
                    <Calendar size={21} strokeWidth={1.75} />
                  </div>
                  <h2 className="mt-4 font-serif text-[28px] sm:text-[32px] font-semibold text-[#193827] leading-tight">
                    Seasonal workshops &amp; market days are coming soon.
                  </h2>
                  <p className="mt-2.5 text-[15.5px] leading-[1.65] text-[#4E5E52]">
                    We are confirming dates for upcoming FarmCraft facility
                    tours, harvest gatherings, and Meet the Farmers market days
                    at 15815 Hwy 97. Read the latest stories in Recent News or
                    sign up to volunteer when schedules open.
                  </p>
                  <div className="mt-6 flex flex-wrap items-center gap-3.5">
                    <Magnet padding={28} magnetStrength={3.5} maxOffset={5}>
                      <Link
                        href="/news"
                        className="inline-flex items-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-6 py-2.5 shadow-[0_8px_20px_rgba(25,56,39,0.18)] transition-colors group"
                      >
                        <span>Read Recent News</span>
                        <ArrowRight
                          size={15}
                          className="transition-transform duration-200 group-hover:translate-x-0.5"
                        />
                      </Link>
                    </Magnet>
                    <Link
                      href="/contact?topic=volunteer"
                      className="inline-flex items-center gap-2 rounded-full border border-[#D8D3C4] bg-white hover:bg-[#F3F1E8] px-5 py-2.5 text-[14px] font-medium text-[#193827] transition-colors"
                    >
                      <span>Volunteer for Events</span>
                    </Link>
                  </div>
                </div>
              </SpotlightCard>
            </Reveal>
          )}

          {/* Empty State When Search/Filter Matches Nothing */}
          {events.length > 0 && filteredEvents.length === 0 && (
            <div className="mt-8 rounded-[24px] border border-[#E4E0D4] bg-[#FAF9F4] p-8 text-center">
              <p className="font-serif text-[22px] font-semibold text-[#193827]">
                No matching events found
              </p>
              <p className="mt-1.5 text-[14.5px] text-[#4E5E52]">
                No published events matched &ldquo;{searchQuery}&rdquo;.
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

          {/* Featured Event Card */}
          {featuredEvent && (
            <Reveal delay={0.08} className="mt-8">
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90, 142, 80, 0.16)"
                intensity={0.28}
                borderGlow={0.55}
                className="!rounded-[26px] !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_14px_38px_-16px_rgba(25,56,39,0.1)] transition-all duration-200 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
                  {/* Left Stretched Photo */}
                  <Link
                    href={`/events/${featuredEvent.slug}`}
                    className="relative lg:col-span-5 h-52 sm:h-60 lg:h-full lg:min-h-[260px] overflow-hidden group block"
                  >
                    <Image
                      src={featuredEvent.image}
                      alt={featuredEvent.imageAlt}
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

                  {/* Right Event Details */}
                  <div className="lg:col-span-7 p-6 sm:p-7 flex flex-col justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-[#526256]">
                        <span className="rounded-full bg-[#EAF0E2] border border-[#CFE0C0] px-3 py-1 font-medium text-[#2B5836]">
                          {featuredEvent.category}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar size={13} className="text-[#5A8E50]" />
                          {formatEventDate(featuredEvent.date)}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Clock size={13} className="text-[#5A8E50]" />
                          {featuredEvent.startTime} &ndash;{" "}
                          {featuredEvent.endTime}
                        </span>
                      </div>

                      <h2 className="mt-3.5 font-serif text-[26px] sm:text-[32px] leading-[1.14] font-semibold text-[#193827]">
                        <Link
                          href={`/events/${featuredEvent.slug}`}
                          className="hover:text-[#3A6B40] transition-colors"
                        >
                          {featuredEvent.title}
                        </Link>
                      </h2>

                      <p className="mt-2.5 text-[15px] leading-[1.6] text-[#4E5E52]">
                        {featuredEvent.excerpt}
                      </p>

                      <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-1.5 text-[13px] text-[#526256]">
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin size={13} className="text-[#5A8E50]" />
                          {featuredEvent.location}
                        </span>
                        <span className="inline-flex items-center gap-1.5">
                          <Ticket size={13} className="text-[#5A8E50]" />
                          {featuredEvent.price}
                        </span>
                      </div>
                    </div>

                    <div>
                      <Magnet padding={32} magnetStrength={3.5} maxOffset={6}>
                        <Link
                          href={`/events/${featuredEvent.slug}`}
                          className="inline-flex items-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-6 py-2.5 shadow-[0_8px_20px_rgba(25,56,39,0.2)] transition-all duration-200 group"
                        >
                          <span>View Event Details</span>
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

          {/* More Events Grid */}
          {remainingEvents.length > 0 && (
            <div className="mt-10">
              <Reveal>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#193827]">
                    More Upcoming Events
                  </h2>
                  <span className="font-mono text-[12px] text-[#526256]">
                    {remainingEvents.length}{" "}
                    {remainingEvents.length === 1 ? "event" : "events"}
                  </span>
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {remainingEvents.map((item, idx) => (
                  <Reveal key={item.id} delay={0.07 * idx} className="h-full">
                    <SpotlightCard
                      theme="light"
                      spotlightColor="rgba(90, 142, 80, 0.16)"
                      intensity={0.28}
                      borderGlow={0.55}
                      className="!rounded-[24px] !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_10px_28px_rgba(25,56,39,0.04)] hover:!shadow-[0_16px_36px_rgba(25,56,39,0.09)] transition-all duration-200 h-full overflow-hidden flex flex-col"
                    >
                      <Link
                        href={`/events/${item.slug}`}
                        className="relative h-40 sm:h-44 w-full overflow-hidden block group"
                      >
                        <Image
                          src={item.image}
                          alt={item.imageAlt}
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
                              {item.category}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={12} className="text-[#5A8E50]" />
                              {formatEventDate(item.date)}
                            </span>
                          </div>

                          <h3 className="mt-3 font-serif text-[21px] leading-snug font-semibold text-[#193827]">
                            <Link
                              href={`/events/${item.slug}`}
                              className="hover:text-[#3A6B40] transition-colors"
                            >
                              {item.title}
                            </Link>
                          </h3>

                          <p className="mt-2 text-[14.5px] leading-[1.6] text-[#4E5E52]">
                            {item.excerpt}
                          </p>
                        </div>

                        <div className="mt-5 pt-4 border-t border-[#E4E0D4] flex items-center justify-between gap-3">
                          <Link
                            href={`/events/${item.slug}`}
                            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#193827] hover:text-[#3A6B40] transition-colors group"
                          >
                            <span>Event details</span>
                            <ArrowRight
                              size={14}
                              className="text-[#5A8E50] transition-transform duration-200 group-hover:translate-x-1"
                            />
                          </Link>
                          <span className="text-[12px] text-[#526256]">
                            {item.startTime}
                          </span>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                ))}
              </div>
            </div>
          )}

          {/* Host / Community Gathering CTA Banner */}
          <Reveal delay={0.12} className="mt-12">
            <div className="relative overflow-hidden rounded-[28px] bg-[#193827] text-white px-7 py-8 sm:px-10 sm:py-10 shadow-[0_18px_46px_-22px_rgba(18,41,28,0.45)]">
              <BotanicalLeafWatermark className="hidden md:block absolute -right-8 -bottom-10 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

              <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div className="max-w-xl">
                  <h2 className="font-serif text-[28px] sm:text-[32px] leading-tight font-semibold text-white">
                    Interested in hosting a workshop or market gathering?
                  </h2>
                  <p className="mt-2 text-[15px] leading-relaxed text-[#DCE6DA]">
                    Connect with the Summerland Food Hub to partner on community
                    dinners, tasting sessions, or grower education days.
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
