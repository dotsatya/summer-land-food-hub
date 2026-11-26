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
  ExternalLink,
  MapPin,
  Share2,
  Sprout,
  Ticket,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { Reveal } from "@/components/home/MotionPrimitives";
import type { Event as HubEvent } from "@/lib/events";

function formatEventDate(isoDate: string): string {
  const parsed = new Date(`${isoDate}T12:00:00`);
  if (Number.isNaN(parsed.getTime())) return isoDate;
  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  }).format(parsed);
}

export function EventDetailsPage({
  event,
  relatedEvents,
}: {
  event: HubEvent;
  relatedEvents: HubEvent[];
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
          {/* Event Navigation & Meta */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/events"
                className="inline-flex items-center gap-2 text-[13px] font-medium text-[#526256] hover:text-[#193827] transition-colors"
              >
                <ArrowLeft size={14} />
                <span>Back to Upcoming Events</span>
              </Link>

              <div className="flex flex-wrap items-center gap-3 text-[12.5px] text-[#526256]">
                <span className="rounded-full bg-[#EAF0E2] border border-[#CFE0C0] px-3 py-1 font-medium text-[#2B5836]">
                  {event.category}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#5A8E50]" />
                  {formatEventDate(event.date)}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock size={13} className="text-[#5A8E50]" />
                  {event.startTime} &ndash; {event.endTime}
                </span>
              </div>
            </div>

            {/* Event Title */}
            <div className="mt-6 max-w-4xl">
              <BlurText
                as="h1"
                text={event.title}
                trigger="load"
                effect="focus"
                animateBy="words"
                delay={70}
                stepDuration={0.38}
                blur={8}
                className="font-serif font-semibold text-[#193827] text-[34px] sm:text-[46px] lg:text-[52px] leading-[1.07] tracking-[-0.02em]"
              />
              <p className="mt-4 text-[17px] sm:text-[19px] leading-[1.6] text-[#4E5E52] max-w-3xl">
                {event.excerpt}
              </p>
            </div>
          </Reveal>

          {/* Hero Photography */}
          <Reveal delay={0.08} className="mt-8">
            <div className="relative aspect-[16/10] sm:aspect-[16/9] max-h-[500px] w-full overflow-hidden rounded-[28px] border border-[#E4E0D4] bg-[#FAF9F4] shadow-[0_20px_50px_-24px_rgba(25,56,39,0.22)]">
              <Image
                src={event.image}
                alt={event.imageAlt}
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

          {/* Two-Column Event Content + Sidebar */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* Editorial Overview + Highlights */}
            <Reveal delay={0.12} className="lg:col-span-8 space-y-6">
              <article className="rounded-[26px] border border-[#E4E0D4] bg-white/85 p-7 sm:p-10 shadow-[0_10px_30px_rgba(25,56,39,0.04)] space-y-5">
                {event.description.map((paragraph, idx) => (
                  <p
                    key={`${event.id}-desc-${idx}`}
                    className={`leading-[1.78] text-[#2B4234] ${
                      idx === 0
                        ? "text-[17px] sm:text-[18px] font-medium text-[#193827]"
                        : "text-[15.5px] sm:text-[16px]"
                    }`}
                  >
                    {paragraph}
                  </p>
                ))}
              </article>

              {event.highlights.length > 0 && (
                <div className="rounded-[26px] border border-[#DCE4CE] bg-[#EBF0E1] p-7 sm:p-8">
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2B5836]">
                    <Sprout size={14} />
                    What to Expect
                  </div>
                  <h2 className="mt-2 font-serif text-[24px] font-semibold text-[#193827]">
                    Event Highlights
                  </h2>
                  <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {event.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2.5 text-[14.5px] text-[#193827]"
                      >
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCE7CE] text-[#2B5836]">
                          <Check size={12} strokeWidth={2.4} />
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Reveal>

            {/* Right Event Schedule & Registration Sidebar */}
            <aside className="lg:col-span-4 space-y-5 lg:sticky lg:top-28">
              <Reveal delay={0.16}>
                <SpotlightCard
                  theme="light"
                  spotlightColor="rgba(90, 142, 80, 0.14)"
                  intensity={0.25}
                  className="!rounded-[24px] !p-6 !bg-[#FAF9F4] !border !border-[#E4E0D4]"
                >
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#5A8E50]">
                    <Calendar size={14} />
                    Event Details
                  </div>

                  <dl className="mt-4 space-y-3 text-[14px]">
                    <div className="flex items-center justify-between gap-3 border-b border-[#E4E0D4] pb-2.5">
                      <dt className="text-[#526256]">Date</dt>
                      <dd className="font-semibold text-[#193827]">
                        {formatEventDate(event.date)}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-b border-[#E4E0D4] pb-2.5">
                      <dt className="text-[#526256]">Time</dt>
                      <dd className="font-semibold text-[#193827]">
                        {event.startTime} &ndash; {event.endTime}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-3 border-b border-[#E4E0D4] pb-2.5">
                      <dt className="inline-flex items-center gap-1.5 text-[#526256]">
                        <Ticket size={14} className="text-[#5A8E50]" />
                        Admission
                      </dt>
                      <dd className="font-semibold text-[#193827]">
                        {event.price}
                      </dd>
                    </div>
                    <div className="pt-0.5 flex items-start gap-2 text-[#193827]">
                      <MapPin
                        size={15}
                        className="mt-0.5 shrink-0 text-[#5A8E50]"
                      />
                      <span className="text-[13.5px] leading-snug">
                        {event.location}
                      </span>
                    </div>
                  </dl>

                  <div className="mt-5 space-y-2.5">
                    {event.registrationUrl ? (
                      <Magnet padding={24} magnetStrength={3.5} maxOffset={5}>
                        <a
                          href={event.registrationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors"
                        >
                          <span>Register Now</span>
                          <ExternalLink size={14} />
                        </a>
                      </Magnet>
                    ) : (
                      <Magnet padding={24} magnetStrength={3.5} maxOffset={5}>
                        <Link
                          href="/contact"
                          className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors"
                        >
                          <span>Inquire About Event</span>
                          <ArrowRight size={14} />
                        </Link>
                      </Magnet>
                    )}

                    <button
                      type="button"
                      onClick={handleCopyLink}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-white hover:bg-[#F3F1E8] border border-[#D8D3C4] px-4 py-2.5 text-[13px] font-semibold text-[#193827] transition-colors cursor-pointer"
                    >
                      {copied ? (
                        <>
                          <Check size={14} className="text-[#5A8E50]" />
                          <span>Link Copied</span>
                        </>
                      ) : (
                        <>
                          <Share2 size={14} className="text-[#5A8E50]" />
                          <span>Share Event Link</span>
                        </>
                      )}
                    </button>
                  </div>
                </SpotlightCard>
              </Reveal>
            </aside>
          </div>

          {/* Related Events Strip */}
          {relatedEvents.length > 0 && (
            <section className="mt-14 pt-10 border-t border-[#E4E0D4]">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <h2 className="font-serif text-[26px] sm:text-[30px] font-semibold text-[#193827]">
                  More Upcoming Events
                </h2>
                <Link
                  href="/events"
                  className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#5A8E50] hover:text-[#193827] transition-colors"
                >
                  <span>View all events</span>
                  <ArrowRight size={14} />
                </Link>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedEvents.map((related) => (
                  <SpotlightCard
                    key={related.id}
                    theme="light"
                    spotlightColor="rgba(90, 142, 80, 0.16)"
                    intensity={0.26}
                    className="!rounded-[22px] !p-4 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] transition-all"
                  >
                    <Link
                      href={`/events/${related.slug}`}
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
                          {formatEventDate(related.date)}
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
