"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ArrowLeft,
  ExternalLink,
  Handshake,
  Heart,
  Leaf,
  Sprout,
  Users,
  Building2,
} from "pulsoicon-react";

import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";

import {
  BotanicalLeafWatermark,
  LocalMotiveEmblem,
} from "@/components/home/BrandMarks";

import { EASE_ORGANIC, Reveal } from "@/components/home/MotionPrimitives";
import CircularText from "../CircularText";

const HERO_IMAGE =
  "https://summerlandfoodhub.ca/wp-content/uploads/2026/06/Okanagan-Food-Hub-Ground-Breaking-2025-37-1024x769.jpg";

const PARTNERS_IMAGE =
  "https://summerlandfoodhub.ca/wp-content/uploads/2026/06/Our-Partners-1.png";

const VALUES = [
  {
    icon: Handshake,
    title: "Shared Vision",
    subtitle: "Working together for a stronger local food system.",
  },
  {
    icon: Sprout,
    title: "Community Impact",
    subtitle: "Creating opportunities through collaboration.",
  },
  {
    icon: Heart,
    title: "Grateful Partnership",
    subtitle: "Celebrating those who make this possible.",
  },
];

export function PartnersPageView() {
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
                  src={HERO_IMAGE}
                  alt="Summerland Food Hub groundbreaking ceremony"
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
                    text="Our Partners & Supporters · "
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
                      <Handshake size={15} strokeWidth={1.8} />
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
                    <Handshake size={13} />
                    Our Community
                  </span>
                </motion.div>

                <BlurText
                  as="h1"
                  text="Our Partners & Supporters"
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
                  Strong communities grow together. Discover the partners,
                  supporters and changemakers who helped bring the Summerland
                  Food Hub vision to life.
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
                      href="#our-partners"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14.5px] font-medium px-6 py-3.5 shadow-[0_10px_24px_rgba(25,56,39,0.22)] transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                      <span>Meet Our Partners</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </Link>
                  </Magnet>

                  <Link
                    href="/contact"
                    className="nav-link-underline py-2 text-[14px] font-medium text-[#193827]"
                  >
                    Get in Touch
                  </Link>
                </motion.div>
              </div>

              {/* Mobile / Tablet Hero Image */}
              <div className="mt-8 lg:hidden relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(25,56,39,0.14)] border border-[#E4E0D4]">
                <Image
                  src={HERO_IMAGE}
                  alt="Summerland Food Hub groundbreaking ceremony"
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
                  {VALUES.map((pillar) => {
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

        {/* 03. APPRECIATION SECTION */}

        <section className="relative mt-14 overflow-hidden bg-[#173424] text-white lg:mt-20">
          <svg
            viewBox="0 0 1440 54"
            preserveAspectRatio="none"
            className="block h-6 w-full text-[#F8F7F2] sm:h-8"
            aria-hidden="true"
          >
            <path
              d="M0 0H1440V22C1120 56 760 0 420 28C210 45 90 34 0 18Z"
              fill="currentColor"
            />
          </svg>

          <BotanicalLeafWatermark className="pointer-events-none absolute -left-8 top-8 hidden h-56 w-44 -rotate-12 opacity-30 md:block" />

          <BotanicalLeafWatermark className="pointer-events-none absolute -right-8 bottom-8 hidden h-56 w-44 rotate-12 opacity-30 md:block" />

          <div className="relative z-10 mx-auto max-w-[1160px] px-5 sm:px-8 lg:px-10 py-10 sm:py-14">
            <Reveal className="mx-auto max-w-5xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#84B374]/40 bg-white/5 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#CFE4C5]">
                <Heart size={14} />
                With Gratitude
              </div>

              <h2 className="mt-6 font-serif text-[32px] font-semibold leading-tight text-white sm:text-[42px]">
                A Shared Vision.
                <span className="block italic font-medium text-[#A8CA86]">
                  A Collective Achievement.
                </span>
              </h2>

              <p className="mx-auto mt-6 max-w-5xl text-[16px] leading-[1.85] text-[#E1EADF] sm:text-[17px]">
                The Summerland Food Hub is the result of a shared vision and the
                collective efforts of farmers, community members, funders,
                government partners, Indigenous leaders, businesses, volunteers,
                and champions who believed in the power of local food. We are
                grateful to everyone who helped bring this project to life.
              </p>

              <div className="mt-9 flex justify-center">
                <LocalMotiveEmblem className="h-16 w-16 opacity-75" />
              </div>
            </Reveal>
          </div>

          <svg
            viewBox="0 0 1440 54"
            preserveAspectRatio="none"
            className="block h-6 w-full text-[#F8F7F2] sm:h-8"
            aria-hidden="true"
          >
            <path
              d="M0 28C340 -4 680 52 1040 18C1220 2 1340 16 1440 30V54H0Z"
              fill="currentColor"
            />
          </svg>
        </section>

        {/* 04. PARTNERS SHOWCASE */}

        <section
          id="our-partners"
          className="bg-cream-paper pt-12 pb-16 lg:pt-16 lg:pb-20 scroll-mt-24"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal className="max-w-2xl ">
         

              <h2 className="mt-4 font-serif text-[34px] font-semibold leading-[1.15] tracking-[-0.02em] text-[#193827] sm:text-[44px]">
                The People Behind
                <span className="block italic font-medium text-[#5A8E50]">
                  The Food Hub
                </span>   
              </h2>

              <p className="mt-4 text-[15.5px] leading-[1.8] text-[#4E5E52] sm:text-[16px]">
                Every partnership represents a shared commitment to
                strengthening local agriculture, supporting producers and
                building a more sustainable regional food system.
              </p>
            </Reveal>

            {/* Partner logos */}

            <Reveal delay={0.12} className="mt-12 sm:mt-16">
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90,142,80,0.12)"
                intensity={0.2}
                borderGlow={0.4}
                spotlightSize={380}
                className="!overflow-hidden !rounded-[28px] !border !border-[#E4E0D4] !bg-[#FFFFFF] !p-3 sm:!p-6 lg:!p-10 !shadow-[0_18px_55px_rgba(25,56,39,0.06)]"
              >
                <div className="relative w-full overflow-hidden rounded-[18px] bg-white">
                  <Image
                    src={PARTNERS_IMAGE}
                    alt="Organizations, partners and supporters of the Summerland Food Hub"
                    width={2000}
                    height={1400}
                    sizes="(max-width: 768px) 100vw, 1200px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.18} className="mt-8 text-center">
              <p className="font-serif text-[19px] italic text-[#526256]">
                Together, we make local food stronger.
              </p>

              <div className="mx-auto mt-4 h-[2px] w-16 rounded-full bg-[#75A761]" />
            </Reveal>
          </div>
        </section>

        {/* 05. FINAL CTA */}

        <section className="bg-[#F8F7F2] px-5 pb-16 sm:px-8 lg:px-10 lg:pb-24">
          <div className="mx-auto max-w-[1320px]">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[28px] bg-[#193827] px-7 py-9 text-white shadow-[0_18px_46px_-22px_rgba(18,41,28,0.45)] sm:px-10 sm:py-12">
                <BotanicalLeafWatermark className="pointer-events-none absolute -right-8 -bottom-10 hidden h-56 w-44 rotate-12 opacity-30 md:block" />

                <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C6E59F]">
                      <Sprout size={14} />
                      Growing Together
                    </div>

                    <h2 className="mt-3 font-serif text-[29px] font-semibold leading-tight text-white sm:text-[36px]">
                      Become Part of Our Community
                    </h2>

                    <p className="mt-3 text-[15px] leading-[1.75] text-[#DCE6DA]">
                      Have a shared vision for local food? Join us in supporting
                      farmers, connecting communities and building a stronger
                      regional food system.
                    </p>
                  </div>

                  <div className="flex shrink-0 flex-wrap items-center gap-3">
                    <Magnet padding={28} magnetStrength={3.5} maxOffset={5}>
                      <Link
                        href="/membership"
                        className="inline-flex items-center gap-2 rounded-full bg-[#A3C962] px-6 py-3 text-[14px] font-semibold text-[#12291C] transition-colors hover:bg-[#B2D674]"
                      >
                        Become a Member
                        <ArrowRight size={15} />
                      </Link>
                    </Magnet>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-white/15"
                    >
                      Contact Us
                      <ExternalLink size={14} />
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
