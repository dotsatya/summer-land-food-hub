"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  Leaf,
  Lightbulb,
  MapPin,
  Sprout,
  Truck,
  Users,
  Utensils,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import {
  BotanicalLeafWatermark,
  FarmCraftEmblem,
  LocalMotiveEmblem,
  OkanaganCentreEmblem,
} from "@/components/home/BrandMarks";
import {
  AnimatedStatNumber,
  EASE_ORGANIC,
  Reveal,
} from "@/components/home/MotionPrimitives";

const OVERVIEW_PILLARS = [
  {
    icon: Sprout,
    title: "Scale",
    subtitle: "Shared kitchens & equipment from concept to market",
  },
  {
    icon: Lightbulb,
    title: "Innovate",
    subtitle: "Crop trials, research & value-added food crafting",
  },
  {
    icon: Leaf,
    title: "Reclaim",
    subtitle: "Turning surplus Okanagan produce into local staples",
  },
] as const;

const IMPACT_METRICS = [
  {
    value: 35,
    suffix: "%",
    label: "Regional Retention",
    detail:
      "Of local food stays circulating within the Okanagan food economy rather than leaving the valley.",
  },
  {
    value: 80,
    suffix: "%",
    label: "Lower Shipping Footprint",
    detail:
      "Co-shipping for local farms significantly reduces environmental pollution and distribution costs.",
  },
  {
    value: 8.5,
    suffix: " ac",
    isStaticDecimal: true,
    label: "Integrated Campus",
    detail:
      "Shared facility uniting commercial kitchens, processing, packaging, cold storage, and retail.",
  },
  {
    value: 5,
    suffix: " ac",
    label: "Orchard Test Grounds",
    detail:
      "Dedicated agricultural land for polyculture research, crop trials, and hands-on learning.",
  },
] as const;

const MISSION_HIGHLIGHTS = [
  "Health-inspected commercial kitchens & wet, cold, and dry processing zones",
  "Shared storage bays, vacuum & MAP packaging, and aggregated cold-chain routes",
  "Collaborative home uniting FarmCraft, LocalMotive Co-op, and OFIC",
  "Community-built alongside growers, Indigenous leaders, funders, and educators",
];

const ECOSYSTEM_HUB_ANCHORS = [
  {
    id: "farmcraft",
    title: "FarmCraft",
    role: "Land, Processing & Education",
    description:
      "Connects food production, processing, marketing, and product development on the 8.5-acre property with 5-acre orchard test trials.",
    Emblem: FarmCraftEmblem,
  },
  {
    id: "localmotive",
    title: "LocalMotive Co-op",
    role: "Farmer-Led Cooperative",
    description:
      "A non-profit, community-driven cooperative supporting small-scale farmers, new growers, and buyers across seasonal CSA and wholesale channels.",
    Emblem: LocalMotiveEmblem,
  },
  {
    id: "ofic",
    title: "Okanagan Food & Innovation Centre",
    role: "Strategic R&D Partner",
    description:
      "Provides access to HACCP-ready processing zones, technical expertise, and commercial kitchens empowering regional food entrepreneurs.",
    Emblem: OkanaganCentreEmblem,
  },
] as const;

const UPCOMING_ANCHORS = [
  {
    name: "The Market",
    note: "Local produce, wine & culinary gathering place",
  },
  { name: "Crowsnest Bakery", note: "Handcrafted breads & seasonal pastries" },
  { name: "Narrative Wines", note: "Okanagan Valley tastings & pairings" },
  { name: "Crush Dynamics", note: "Patented natural polyphenol fermentation" },
] as const;

export function AboutPage() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex-1 flex flex-col bg-[#F8F7F2] text-[#193827]">
      <main className="flex-1">
        {/* 1. Split Hero Story */}
        <section className="relative bg-[#F8F7F2] pt-20 lg:pt-0">
          <div className="relative overflow-hidden lg:min-h-[580px] xl:min-h-[620px] flex items-center">
            {/* Right-side Photography with organic S-curve transition */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-[62%] xl:w-[60%]">
              <div className="relative w-full h-full">
                <Image
                  src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/about_farmcraft.webp"
                  alt="FarmCraft and Summerland Food Hub campus and agricultural grounds"
                  fill
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F2]/42 via-transparent to-black/15" />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-24 right-8 bottom-20 left-32 rounded-[26px] border border-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                />

                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.55,
                    ease: EASE_ORGANIC,
                  }}
                  className="hidden xl:flex absolute right-14 bottom-24 z-10 items-center justify-center rounded-full bg-[#F8F7F2]/88 backdrop-blur-md p-1.5 shadow-[0_14px_34px_rgba(18,41,28,0.22)] border border-white/70"
                >
                  <CircularText
                    text="EAT · DRINK · MAKE · HERE · OKANAGAN · "
                    size={112}
                    fontSize={9}
                    fontWeight={600}
                    letterSpacing={0.04}
                    color="#193827"
                    spinDuration={20}
                    onHover="slowDown"
                    ring
                    ringColor="rgba(25,56,39,0.2)"
                    className="font-mono tracking-wider"
                  >
                    <span className="flex items-center justify-center w-8 h-8 rounded-full bg-[#193827] text-[#F8F7F2]">
                      <Sprout size={15} strokeWidth={1.8} />
                    </span>
                  </CircularText>
                </motion.div>
              </div>

              {/* Sweeping Organic Cream Curve Mask */}
              <svg
                viewBox="0 0 260 800"
                preserveAspectRatio="none"
                className="absolute inset-y-0 -left-1 h-full w-[220px] xl:w-[270px] pointer-events-none"
                aria-hidden="true"
              >
                <path
                  d="M0 0H185C120 155 68 310 92 475C110 600 45 710 0 800H0V0Z"
                  fill="#F8F7F2"
                />
                <path
                  d="M185 0C120 155 68 310 92 475C110 600 45 710 0 800"
                  stroke="rgba(255,255,255,0.48)"
                  strokeWidth="4"
                  fill="none"
                />
              </svg>
            </div>

            {/* Left Editorial Content */}
            <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10 pt-6 pb-8 lg:pt-28 lg:pb-20">
              <div className="max-w-[560px]">
                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.05,
                    ease: EASE_ORGANIC,
                  }}
                  className="flex flex-wrap items-center gap-3 mb-4"
                >
                  <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#4B5B4E]">
                    <MapPin size={12} className="text-[#5A8E50]" />
                    About Summerland Food Hub
                  </span>
                  <span className="h-[1.5px] w-12 bg-[#75A761]/65 rounded-full" />
                </motion.div>

                <BlurText
                  as="h1"
                  text="The catalyst for transformative agriculture."
                  trigger="load"
                  effect="focus"
                  animateBy="words"
                  delay={85}
                  stepDuration={0.44}
                  blur={8}
                  className="font-serif font-semibold text-[#193827] text-[40px] sm:text-[52px] xl:text-[58px] leading-[1.03] tracking-[-0.02em]"
                />

                <motion.p
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.28,
                    ease: EASE_ORGANIC,
                  }}
                  className="mt-5 text-[16px] sm:text-[17px] leading-[1.62] text-[#4E5E52] max-w-[470px]"
                >
                  Rooted in the heart of Summerland on an 8.5-acre campus, the
                  Food Hub brings together growers, artisans, food-tech
                  pioneers, and community partners to keep fresh local food
                  thriving across the Okanagan.
                </motion.p>

                <motion.div
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.36,
                    ease: EASE_ORGANIC,
                  }}
                  className="mt-7 flex flex-wrap items-center gap-5"
                >
                  <Magnet padding={44} magnetStrength={3.5} maxOffset={8}>
                    <Link
                      href="/membership"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14.5px] font-medium px-6 py-3.5 shadow-[0_10px_24px_rgba(25,56,39,0.22)] transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                      <span>Join the Cooperative</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </Magnet>

                  <a
                    href="#mission-impact"
                    className="nav-link-underline py-2 text-[14.5px] font-medium text-[#193827] hover:text-[#3A6B40] transition-colors"
                  >
                    Our mission &amp; impact
                  </a>
                </motion.div>
              </div>

              {/* Mobile / Tablet Hero Image */}
              <div className="mt-8 lg:hidden relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(25,56,39,0.14)] border border-[#E4E0D4]">
                <Image
                  src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/about_farmcraft.webp"
                  alt="FarmCraft and Summerland Food Hub campus and agricultural grounds"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-3 rounded-2xl border border-white/40"
                />
              </div>
            </div>
          </div>

          {/* Overlapping 3-Pillar Floating Bar */}
          <div className="relative z-20 mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10 -mt-2 lg:-mt-10">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.44, ease: EASE_ORGANIC }}
            >
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90, 142, 80, 0.16)"
                intensity={0.28}
                borderGlow={0.45}
                spotlightSize={320}
                className="!rounded-2xl !p-0 !bg-[#FAF8F2]/96 backdrop-blur-sm !border !border-[#E4E0D4] !shadow-[0_18px_45px_rgba(25,56,39,0.08)]"
              >
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#E4E0D4]">
                  {OVERVIEW_PILLARS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.title}
                        data-icon-trigger
                        className="flex items-center justify-start md:justify-center gap-4 px-6 py-4.5 sm:py-5 hover:bg-[#F3F0E6]/65 transition-colors cursor-default group"
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EAF0E2] text-[#2B5836] shrink-0 group-hover:bg-[#DCE7CE] transition-colors">
                          <Icon size={22} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h2 className="font-serif text-[18px] font-semibold text-[#193827] leading-tight">
                            {item.title}
                          </h2>
                          <p className="text-[13px] text-[#526256] mt-0.5">
                            {item.subtitle}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </section>

        {/* 2. Summerland Food Security Mission */}
        <section
          id="mission-impact"
          className="bg-cream-paper py-14 lg:py-20 scroll-mt-24 overflow-hidden"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Framed Photography */}
              <Reveal className="lg:col-span-5" delay={0.05}>
                <div className="relative">
                  <BotanicalLeafWatermark className="hidden sm:block absolute -left-8 -bottom-10 w-36 h-48 -rotate-12 opacity-60 pointer-events-none select-none" />
                  <div className="relative aspect-[4/5] w-full max-w-[440px] mx-auto rounded-[28px] overflow-hidden border border-[#E4E0D4] shadow-[0_20px_48px_-20px_rgba(25,56,39,0.22)]">
                    <Image
                      src="/images/home/okanagan-landscape.jpg"
                      alt="Okanagan farmers holding freshly harvested heirloom carrots"
                      fill
                      sizes="(max-width: 1024px) 100vw, 440px"
                      className="object-cover"
                    />
                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-4 rounded-2xl border border-white/40"
                    />
                  </div>
                </div>
              </Reveal>

              {/* Right Food Security Mission Narrative */}
              <Reveal className="lg:col-span-7 space-y-5" delay={0.12}>
                <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.12] font-semibold text-[#193827] tracking-[-0.015em]">
                  Strengthening Okanagan{" "}
                  <span className="italic text-[#5A8E50] font-medium">
                    food security
                  </span>{" "}
                  together.
                </h2>

                <p className="text-[15.5px] sm:text-[16px] leading-[1.7] text-[#4E5E52]">
                  Our mission is rooted in collaboration, shared infrastructure,
                  and the belief that local agriculture thrives when farmers and
                  makers support one another. By bringing food production,
                  processing, education, and community gathering spaces under
                  one roof, the Hub lowers capital barriers for small-scale
                  growers while expanding year-round access to fresh regional
                  food.
                </p>

                <p className="text-[15px] leading-[1.7] text-[#4E5E52]">
                  The Summerland Food Hub is the result of a shared vision and
                  the collective efforts of farmers, community members, funders,
                  government partners, Indigenous leaders, local businesses, and
                  volunteers who believed in the power of regional food systems.
                </p>

                <ul className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-[14px] text-[#193827]">
                  {MISSION_HIGHLIGHTS.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 rounded-2xl border border-[#E4E0D4] bg-[#FAF9F4] p-3.5"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DCE7CE] text-[#2B5836]">
                        <Check size={12} strokeWidth={2.4} />
                      </span>
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            </div>
          </div>
        </section>

        {/* 3. 35% Local Food Impact Narrative & Key Impact Metrics Band */}
        <section className="relative bg-[#173424] text-white overflow-hidden">
          <svg
            viewBox="0 0 1440 54"
            preserveAspectRatio="none"
            className="w-full h-5 sm:h-8 block text-[#F8F7F2]"
            aria-hidden="true"
          >
            <path
              d="M0,0 L1440,0 L1440,22 C1120,56 760,0 420,28 C210,45 90,34 0,18 Z"
              fill="currentColor"
            />
          </svg>

          <BotanicalLeafWatermark className="hidden md:block absolute -left-8 top-8 w-44 h-56 -rotate-12 opacity-40 pointer-events-none select-none" />
          <BotanicalLeafWatermark className="hidden md:block absolute -right-6 bottom-8 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

          <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 py-10 sm:py-14 lg:py-16">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left 35% Narrative */}
              <Reveal className="lg:col-span-5">
                <div className="flex items-center gap-3.5 mb-4">
                  <span className="font-serif text-[19px] sm:text-[21px] font-medium text-[#EBF0E1]">
                    35% Local Food Impact
                  </span>
                  <span className="h-[1px] w-16 bg-[#84B374]/55" />
                </div>

                <div className="flex items-center gap-5">
                  <div className="font-serif text-[58px] sm:text-[70px] font-bold leading-none tracking-tight text-white">
                    <AnimatedStatNumber target={35} suffix="%" />
                  </div>
                  <div className="border-l border-white/25 pl-5 text-[18px] sm:text-[20px] leading-[1.3] font-medium text-[#EFF4EA] max-w-[230px]">
                    of local food stays within our region
                  </div>
                </div>

                <p className="mt-5 text-[15px] sm:text-[15.5px] leading-[1.7] text-[#D7E2D5]">
                  When growers share cold storage, processing lines, and
                  refrigerated delivery trucks, far less harvest spoils or gets
                  shipped out of valley for low wholesale returns. Co-shipping
                  and local value-adding turn seasonal abundance into lasting
                  community wealth.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-3">
                  <Link
                    href="/contact?topic=wholesale"
                    className="inline-flex items-center gap-2 rounded-full bg-[#A3C962] hover:bg-[#B2D674] px-5 py-2.5 text-[13.5px] font-semibold text-[#12291C] transition-colors"
                  >
                    <Truck size={15} />
                    <span>Partner on Distribution</span>
                  </Link>
                  <Link
                    href="/news"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/8 hover:bg-white/15 px-5 py-2.5 text-[13.5px] font-medium text-white transition-colors"
                  >
                    <span>Read Hub Updates</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </Reveal>

              {/* Right 2x2 Key Impact Metrics */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                {IMPACT_METRICS.map((metric, idx) => (
                  <Reveal key={metric.label} delay={0.07 * idx}>
                    <div className="h-full rounded-2xl border border-white/15 bg-white/[0.06] backdrop-blur-xs p-6 transition-colors hover:bg-white/[0.1]">
                      <div className="font-serif text-[36px] sm:text-[42px] font-bold leading-none text-[#CFE4C5]">
                        {"isStaticDecimal" in metric &&
                        metric.isStaticDecimal ? (
                          <span>
                            {metric.value}
                            {metric.suffix}
                          </span>
                        ) : (
                          <AnimatedStatNumber
                            target={metric.value}
                            suffix={metric.suffix}
                          />
                        )}
                      </div>
                      <h3 className="mt-3 font-serif text-[19px] font-semibold text-white">
                        {metric.label}
                      </h3>
                      <p className="mt-1.5 text-[13.5px] leading-[1.58] text-[#DCE6DA]/88">
                        {metric.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>

          <svg
            viewBox="0 0 1440 54"
            preserveAspectRatio="none"
            className="w-full h-5 sm:h-8 block text-[#F8F7F2]"
            aria-hidden="true"
          >
            <path
              d="M0,28 C340,-4 680,52 1040,18 C1220,2 1340,16 1440,30 L1440,54 L0,54 Z"
              fill="currentColor"
            />
          </svg>
        </section>

        {/* 4. Ecosystem Anchors & Upcoming 2026 Makers */}
        <section className="bg-cream-paper py-14 lg:py-18">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 space-y-12">
            <div>
              <Reveal className="text-center max-w-2xl mx-auto">
                <h2 className="font-serif text-[30px] sm:text-[38px] leading-[1.12] font-semibold text-[#193827]">
                  Three pillars sharing one roof
                </h2>
                <p className="mt-2.5 text-[15.5px] text-[#4E5E52]">
                  The Hub is powered by complementary organizations aligning
                  agriculture, cooperative trade, and food innovation.
                </p>
              </Reveal>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                {ECOSYSTEM_HUB_ANCHORS.map((partner, idx) => {
                  const Emblem = partner.Emblem;
                  return (
                    <Reveal
                      key={partner.id}
                      delay={0.07 * idx}
                      className="h-full"
                    >
                      <SpotlightCard
                        theme="light"
                        spotlightColor="rgba(90, 142, 80, 0.16)"
                        intensity={0.28}
                        borderGlow={0.55}
                        className="!rounded-[24px] !p-7 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] !shadow-[0_8px_24px_rgba(25,56,39,0.04)] h-full flex flex-col"
                      >
                        <Emblem className="w-12 h-12 mb-4" />
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5A8E50]">
                          {partner.role}
                        </span>
                        <h3 className="mt-1 font-serif text-[21px] font-semibold text-[#193827]">
                          {partner.title}
                        </h3>
                        <p className="mt-2 text-[14.5px] leading-[1.6] text-[#4E5E52] flex-1">
                          {partner.description}
                        </p>
                      </SpotlightCard>
                    </Reveal>
                  );
                })}
              </div>
            </div>

            {/* Destination Market & Makers Preview (Fall / October 2026) */}
            <Reveal delay={0.1}>
              <div className="rounded-[28px] border border-[#DCE4CE] bg-[#EBF0E1] p-7 sm:p-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2B5836]">
                      <Utensils size={14} />
                      Opening Fall 2026 &bull; Eat. Drink. Make. Here.
                    </div>
                    <h2 className="mt-2 font-serif text-[28px] sm:text-[34px] font-semibold text-[#193827] leading-tight">
                      A year-round gathering place at 15815 Hwy 97
                    </h2>
                  </div>

                  <div className="flex flex-wrap items-center gap-3">
                    <Link
                      href="/news/welcome-to-the-market-at-summerland-food-hub"
                      className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[#193827] hover:text-[#3A6B40] transition-colors"
                    >
                      <span>Read The Market announcement</span>
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {UPCOMING_ANCHORS.map((anchor) => (
                    <div
                      key={anchor.name}
                      className="rounded-2xl border border-[#D3DEC3] bg-white/85 p-5"
                    >
                      <h3 className="font-serif text-[18px] font-semibold text-[#193827]">
                        {anchor.name}
                      </h3>
                      <p className="mt-1 text-[13px] leading-relaxed text-[#4E5E52]">
                        {anchor.note}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center justify-between gap-4 pt-5 border-t border-[#D3DEC3]">
                  <div className="inline-flex items-center gap-2 text-[14px] text-[#2B5836]">
                    <Users size={16} className="text-[#5A8E50]" />
                    <span>
                      Membership is open for growers, makers, buyers, and
                      community supporters.
                    </span>
                  </div>
                  <div className="flex flex-wrap items-center gap-3">
                    <Magnet padding={28} magnetStrength={3.5} maxOffset={5}>
                      <Link
                        href="/membership"
                        className="inline-flex items-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] px-5.5 py-2.5 text-[13.5px] font-medium text-white transition-colors"
                      >
                        <span>Become a Member</span>
                        <ArrowRight size={14} />
                      </Link>
                    </Magnet>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-[#193827]/20 bg-white hover:bg-[#FAF9F4] px-5 py-2.5 text-[13.5px] font-medium text-[#193827] transition-colors"
                    >
                      <span>Contact Us</span>
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    </div>
  );
}
