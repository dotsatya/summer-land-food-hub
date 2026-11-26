"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Droplet,
  Factory,
  Lightbulb,
  Package,
  ShieldCheck,
  Snowflake,
  Sprout,
  Store,
  TrendingUp,
  Utensils,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { BotanicalLeafWatermark } from "@/components/home/BrandMarks";
import { EASE_ORGANIC, Reveal } from "@/components/home/MotionPrimitives";

const OFIC_PILLARS = [
  {
    icon: Factory,
    title: "Process",
    subtitle: "Equipment & facilities",
  },
  {
    icon: Lightbulb,
    title: "Innovate",
    subtitle: "Research & development",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    subtitle: "Market readiness",
  },
] as const;

const FACILITY_BADGES = [
  { label: "~50% Building Footprint", note: "Dedicated shared hub wing" },
  { label: "HACCP Certified Facility", note: "Food-safety ready zones" },
  { label: "R&D & Technical Expertise", note: "Concept-to-shelf support" },
] as const;

const CORE_PROCESSING_ZONES = [
  {
    id: "commercial-kitchen",
    title: "Commercial Kitchen",
    icon: Utensils,
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/05/Bakery-1.png",
    alt: "Bakers and culinary makers preparing artisan batches inside the commercial bakery kitchen",
    description: "Roasting, frying, and baking at an industrial scale.",
  },
  {
    id: "wet-processing",
    title: "Wet Processing Zone",
    icon: Droplet,
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/05/Steam-Kettle-1024x682.png",
    alt: "Commercial steam kettle equipment in the wet processing zone",
    description: "Soups, beverages, fermented products, and juicing.",
  },
  {
    id: "cold-processing",
    title: "Cold Processing Zone",
    icon: Snowflake,
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/05/Sausage-walk-1024x682.png",
    alt: "Food processor inspecting chilled racks in the cold processing zone",
    description: "Extrusion/cooking of meats and alternative protein-forming.",
  },
  {
    id: "retail-zone",
    title: "Retail Zone",
    icon: Store,
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/03/retail_large.webp",
    alt: "Shelves stocked with locally made preserves, produce, and artisanal foods",
    description: "For clients to position and showcase products.",
  },
  {
    id: "packaging-zone",
    title: "Packaging Zone",
    icon: Package,
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/03/marketing.webp",
    alt: "Dried local Okanagan produce and packaged food pouches ready for market",
    description:
      "Specialized packaging solutions with the availability of MAP (Modified Atmosphere Packaging) & Vacuum Packing.",
  },
] as const;

export function OkanaganInnovationPage() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex-1 flex flex-col bg-[#F8F7F2] text-[#193827]">
      <main className="flex-1">
        {/* 1. Split Editorial Hero */}
        <section className="relative bg-[#F8F7F2] pt-20 lg:pt-0">
          <div className="relative overflow-hidden lg:min-h-[580px] xl:min-h-[620px] flex items-center">
            {/* Right Photography with Sweeping Cream S-Curve */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-[62%] xl:w-[60%]">
              <div className="relative w-full h-full">
                <Image
                  src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/services_product.webp"
                  alt="Culinary chefs and food entrepreneurs collaborating in a bright commercial test kitchen"
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
                    text="OKANAGAN FOOD & INNOVATION CENTRE · "
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
                      <Utensils size={15} strokeWidth={1.8} />
                    </span>
                  </CircularText>
                </motion.div>
              </div>

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

            {/* Left Editorial Copy */}
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
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#4B5B4E] hover:text-[#193827] transition-colors"
                  >
                    <ArrowLeft size={12} className="text-[#5A8E50]" />
                    <span>About Overview</span>
                  </Link>
                  <span className="h-[1.5px] w-10 bg-[#75A761]/65 rounded-full" />
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-[#5A8E50]">
                    <ShieldCheck size={12} />
                    Strategic Partner
                  </span>
                </motion.div>

                <BlurText
                  as="h1"
                  text="Okanagan Food & Innovation Centre"
                  trigger="load"
                  effect="focus"
                  animateBy="words"
                  delay={80}
                  stepDuration={0.42}
                  blur={8}
                  className="font-serif font-semibold text-[#193827] text-[38px] sm:text-[50px] xl:text-[56px] leading-[1.04] tracking-[-0.02em]"
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
                  Increasing access to specialized food processing equipment,
                  HACCP-certified zones, and market-readiness support for local
                  growers and emerging regional processors.
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
                      <span>Become a Member</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </Magnet>

                  <a
                    href="#processing-zones"
                    className="nav-link-underline py-2 text-[14.5px] font-medium text-[#193827] hover:text-[#3A6B40] transition-colors"
                  >
                    Explore processing zones
                  </a>
                </motion.div>
              </div>

              {/* Mobile / Tablet Hero Image */}
              <div className="mt-8 lg:hidden relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(25,56,39,0.14)] border border-[#E4E0D4]">
                <Image
                  src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/services_product.webp"
                  alt="Culinary chefs and food entrepreneurs working at the Okanagan Food & Innovation Centre"
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

          {/* Overlapping 3-Pillar Strip: Scale / Innovate / Reclaim */}
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
                  {OFIC_PILLARS.map((pillar) => {
                    const Icon = pillar.icon;
                    return (
                      <div
                        key={pillar.title}
                        data-icon-trigger
                        className="flex items-start gap-4 px-6 py-5 hover:bg-[#F3F0E6]/65 transition-colors cursor-default group"
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EAF0E2] text-[#2B5836] shrink-0 group-hover:bg-[#DCE7CE] transition-colors">
                          <Icon size={22} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h2 className="font-serif text-[19px] font-semibold text-[#193827] leading-tight">
                            {pillar.title}
                          </h2>
                          <p className="text-[13.5px] leading-snug text-[#526256] mt-1">
                            {pillar.subtitle}
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

        {/* 2. Non-Profit Innovation Overview */}
        <section className="bg-cream-paper py-12 lg:py-16">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal>
              <div className="rounded-[28px] border border-[#E4E0D4] bg-[#FAF9F4] p-7 sm:p-10 lg:p-12 shadow-[0_14px_40px_-20px_rgba(25,56,39,0.08)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Official OFIC Wordmark Card */}
                  <div className="lg:col-span-5">
                    <div className="relative rounded-2xl border border-[#E4E0D4] bg-white p-8 sm:p-10 shadow-xs flex items-center justify-center">
                      <Image
                        src="https://summerlandfoodhub.ca/wp-content/uploads/2026/06/INNOVATION-CENTRE-1024x512.png"
                        alt="Okanagan Food & Innovation Centre official mark"
                        width={525}
                        height={263}
                        className="w-full max-w-[340px] h-auto object-contain"
                      />
                    </div>
                  </div>

                  {/* Mission Copy */}
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="font-serif text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-[#193827]">
                      Empowering regional food{" "}
                      <span className="italic text-[#5A8E50] font-medium">
                        makers &amp; processors.
                      </span>
                    </h2>

                    <p className="text-[15.5px] sm:text-[16px] leading-[1.7] text-[#4E5E52]">
                      The OFIC is a non-profit project focused on increasing
                      access to equipment and services for existing and aspiring
                      food processors in the region. The OFIC will provide
                      support for the development and marketing of new and
                      emerging food products, with a focus on locally grown
                      products &amp; opportunities for collaboration with local
                      producers.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Magnet padding={30} magnetStrength={3.5} maxOffset={5}>
                        <Link
                          href="/membership"
                          className="inline-flex items-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-6 py-2.5 shadow-[0_8px_20px_rgba(25,56,39,0.18)] transition-colors group"
                        >
                          <span>Apply for Facility Access</span>
                          <ArrowRight
                            size={15}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </Link>
                      </Magnet>
                      <Link
                        href="/contact"
                        className="text-[14px] font-medium text-[#193827] hover:text-[#3A6B40] transition-colors nav-link-underline py-1"
                      >
                        Schedule a facility inquiry
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 3. Dark Curved Partner Band: Strategic Partnership & HACCP Facility */}
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

          <BotanicalLeafWatermark className="hidden md:block absolute -left-8 top-6 w-44 h-56 -rotate-12 opacity-40 pointer-events-none select-none" />
          <BotanicalLeafWatermark className="hidden md:block absolute -right-6 bottom-6 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

          <div className="relative z-10 mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10 py-10 sm:py-14">
            <Reveal className="text-center max-w-5xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#84B374]/40 bg-white/8 px-3.5 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] text-[#CFE4C5]">
                <ShieldCheck size={14} />
                Strategic Partner within Okanagan Food Hub
              </div>

              <p className="mt-5 font-serif text-[20px] sm:text-[24px] leading-[1.52] text-[#EFF4EA]">
                The Okanagan Food and Innovation Centre (OFIC), a Strategic
                Partner, will serve as a key member of the Okanagan Food Hub.
                OFIC will occupy approximately half of the building and provide
                members with access to a HACCP certified facility designed to
                support a range of processing applications. Members and clients
                will benefit from specialized processing zones, technical
                expertise, and commercial kitchens that enable research and
                development of innovative food products for the local community.
              </p>

              <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-left">
                {FACILITY_BADGES.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-white/15 bg-white/[0.06] px-5 py-4"
                  >
                    <div className="font-serif text-[17px] font-semibold text-[#C6E59F]">
                      {item.label}
                    </div>
                    <div className="mt-0.5 text-[13px] text-[#DCE6DA]/85">
                      {item.note}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
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

        {/* 4. Core Processing Zones Showcase */}
        <section
          id="processing-zones"
          className="bg-cream-paper pt-12 pb-16 lg:pt-16 lg:pb-20 scroll-mt-24"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal className="max-w-2xl">
              <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.12] font-semibold text-[#193827] tracking-[-0.015em]">
                Core Processing Zones
              </h2>
              <p className="mt-2.5 text-[15.5px] sm:text-[16px] text-[#4E5E52]">
                Purpose-built, inspected rooms supporting small-batch trials,
                scale-up manufacturing, packaging, and direct market showcase.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              {CORE_PROCESSING_ZONES.map((zone, idx) => {
                const Icon = zone.icon;
                const spanClass =
                  idx < 3
                    ? "lg:col-span-2"
                    : idx === 3
                      ? "lg:col-span-3"
                      : "md:col-span-2 lg:col-span-3";
                return (
                  <Reveal
                    key={zone.id}
                    delay={0.06 * idx}
                    className={`h-full ${spanClass}`}
                  >
                    <SpotlightCard
                      theme="light"
                      spotlightColor="rgba(90, 142, 80, 0.16)"
                      intensity={0.28}
                      borderGlow={0.55}
                      className="!rounded-[24px] !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_10px_28px_rgba(25,56,39,0.04)] hover:!shadow-[0_16px_36px_rgba(25,56,39,0.09)] transition-all duration-200 h-full overflow-hidden flex flex-col"
                    >
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={zone.image}
                          alt={zone.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12291C]/22 via-transparent to-transparent" />
                      </div>

                      <div className="relative flex-1 p-6 pt-5 flex flex-col">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF0E2] text-[#2B5836]">
                            <Icon size={18} strokeWidth={1.8} />
                          </span>
                          <h3 className="font-serif text-[20px] font-semibold text-[#193827] leading-snug">
                            {zone.title}
                          </h3>
                        </div>

                        <p className="mt-3 text-[14.5px] leading-[1.6] text-[#4E5E52] flex-1">
                          {zone.description}
                        </p>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                );
              })}
            </div>

            {/* 5. Standalone Facility Access CTA Banner */}
            <Reveal delay={0.14} className="mt-12">
              <div className="relative overflow-hidden rounded-[28px] bg-[#193827] text-white px-7 py-8 sm:px-10 sm:py-10 shadow-[0_18px_46px_-22px_rgba(18,41,28,0.45)]">
                <BotanicalLeafWatermark className="hidden md:block absolute -right-8 -bottom-10 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C6E59F]">
                      <Sprout size={14} />
                      Facility Access &amp; R&amp;D
                    </div>
                    <h2 className="mt-2 font-serif text-[28px] sm:text-[34px] leading-tight font-semibold text-white">
                      Ready to test or scale a new food product?
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#DCE6DA]">
                      Apply as a Facility Use Member or book a consultation to
                      explore equipment scheduling and R&amp;D support.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Magnet padding={28} magnetStrength={3.5} maxOffset={5}>
                      <Link
                        href="/membership"
                        className="inline-flex items-center gap-2 rounded-full bg-[#A3C962] hover:bg-[#B2D674] px-6 py-3 text-[14px] font-semibold text-[#12291C] transition-colors"
                      >
                        <span>Become a Member</span>
                        <ArrowRight size={15} />
                      </Link>
                    </Magnet>
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 hover:bg-white/15 px-5 py-3 text-[14px] font-medium text-white transition-colors"
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
