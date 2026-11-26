"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Heart,
  Lightbulb,
  MapPin,
  Play,
  Sprout,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { PILLARS } from "./hubData";
import { EASE_ORGANIC } from "./MotionPrimitives";

const PILLAR_ICONS = {
  grow: Sprout,
  nurture: Heart,
  innovate: Lightbulb,
};

export function HeroSection({
  onWatchStory,
}: {
  onWatchStory: () => void;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative bg-[#F8F7F2] pt-20 lg:pt-0">
      {/* Main Hero Canvas */}
      <div className="relative overflow-hidden lg:min-h-[660px] xl:min-h-[700px] flex items-center">
        {/* Right-side Photography with organic sweeping S-curve transition */}
        <div className="hidden lg:block absolute inset-y-0 right-0 w-[62%] xl:w-[60%]">
          <div className="relative w-full h-full">
            <Image
              src="/images/home/hero-market.jpg"
              alt="Inside the Summerland Food Hub indoor local market with wooden produce crates and shoppers"
              fill
              priority
              sizes="(min-width: 1024px) 62vw, 100vw"
              className="object-cover object-center"
            />
            {/* Warm subtle top & left tone harmonization */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F2]/38 via-transparent to-black/15" />

            {/* Mindora-inspired frosted inner frame border */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-24 right-8 bottom-20 left-32 rounded-[26px] border border-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
            />

            {/* Halden Stories-inspired rotating field-note seal */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.55, ease: EASE_ORGANIC }}
              className="hidden xl:flex absolute right-14 bottom-24 z-10 items-center justify-center rounded-full bg-[#F8F7F2]/88 backdrop-blur-md p-1.5 shadow-[0_14px_34px_rgba(18,41,28,0.22)] border border-white/70"
            >
              <CircularText
                text="SUMMERLAND FOOD HUB · OKANAGAN · "
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

          {/* Sweeping Organic Cream Curve Mask on the left edge of the photo */}
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

        {/* Left Content Container */}
        <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10 pt-8 pb-10 lg:pt-32 lg:pb-28">
          <div className="max-w-[550px]">
            {/* Field-note coordinates & Eyebrow (Halden Stories editorial cue) */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.05, ease: EASE_ORGANIC }}
              className="flex flex-wrap items-center gap-3 mb-4"
            >
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#4B5B4E]">
                <MapPin size={12} className="text-[#5A8E50]" />
                49°36&prime;N · 119°40&prime;W &mdash; Okanagan Valley
              </span>
              <span className="h-[1.5px] w-12 bg-[#75A761]/65 rounded-full" />
            </motion.div>

            {/* Headline with BlurText soft-focus reveal (Mindora cue) */}
            <BlurText
              as="h1"
              text="Summerland Food Hub"
              trigger="load"
              effect="focus"
              animateBy="words"
              delay={95}
              stepDuration={0.46}
              blur={8}
              className="font-serif font-semibold text-[#193827] text-[48px] sm:text-[60px] xl:text-[68px] leading-[1.01] tracking-[-0.02em]"
            />

            {/* Sub-headline with organic sage brush underline */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.22, ease: EASE_ORGANIC }}
              className="mt-4 font-serif text-[25px] sm:text-[29px] leading-snug text-[#193827] font-medium"
            >
              Eat. Drink. Make.{" "}
              <span className="relative inline-block italic text-[#5A8E50] font-semibold pr-1">
                Here.
                <svg
                  viewBox="0 0 110 12"
                  fill="none"
                  className="absolute -bottom-1 left-0 w-full h-2.5 overflow-visible"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 8.5C28 3.2 76 2.5 106 6.5"
                    stroke="#75A761"
                    strokeWidth="2.8"
                    strokeLinecap="round"
                    initial={prefersReduced ? { pathLength: 1 } : { pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.85, delay: 0.48, ease: EASE_ORGANIC }}
                  />
                </svg>
              </span>
            </motion.p>

            {/* Supporting copy */}
            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.3, ease: EASE_ORGANIC }}
              className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[#4E5E52] max-w-[430px]"
            >
              A vibrant destination for local food, agriculture and community in
              Summerland &mdash; connecting growers, makers, and neighbours.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.38, ease: EASE_ORGANIC }}
              className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5"
            >
              <Magnet padding={48} magnetStrength={3.5} maxOffset={8}>
                <a
                  href="#offer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14.5px] font-medium px-6 py-3.5 shadow-[0_10px_24px_rgba(25,56,39,0.22)] transition-all duration-200 hover:-translate-y-0.5 group"
                >
                  <span>Explore the Hub</span>
                  <ArrowRight
                    size={16}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </a>
              </Magnet>

              <button
                type="button"
                onClick={onWatchStory}
                className="inline-flex items-center gap-2.5 px-2 py-2 rounded-full text-[14.5px] font-medium text-[#193827] hover:text-[#3A6B40] transition-colors cursor-pointer group"
              >
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-[#C6C1B0] bg-white/80 group-hover:border-[#5A8E50] group-hover:bg-white transition-colors shadow-xs">
                  <Play size={14} className="text-[#193827] translate-x-[1px]" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </motion.div>
          </div>

          {/* Mobile / Tablet Hero Image */}
          <div className="mt-8 lg:hidden relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(25,56,39,0.14)] border border-[#E4E0D4]">
            <Image
              src="/images/home/hero-market.jpg"
              alt="Inside the Summerland Food Hub indoor local market"
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

      {/* Overlapping 3-Pillar Floating Bar with SpotlightCard luminescence */}
      <div className="relative z-20 mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10 -mt-2 lg:-mt-12">
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
              {PILLARS.map((pillar) => {
                const Icon = PILLAR_ICONS[pillar.id];
                return (
                  <div
                    key={pillar.id}
                    data-icon-trigger
                    className="flex items-center justify-start md:justify-center gap-4 px-7 py-5 sm:py-6 hover:bg-[#F3F0E6]/65 transition-colors cursor-default group"
                  >
                    <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EAF0E2] text-[#2B5836] shrink-0 group-hover:bg-[#DCE7CE] transition-colors">
                      <Icon size={24} strokeWidth={1.65} />
                    </div>
                    <div>
                      <h2 className="font-serif text-[19px] font-semibold text-[#193827] leading-tight">
                        {pillar.title}
                      </h2>
                      <p className="text-[13.5px] text-[#526256] mt-0.5">
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
  );
}
