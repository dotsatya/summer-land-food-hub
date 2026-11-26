"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Handshake,
  Leaf,
  Leaf2,
  MapPin,
  Sprout,
  SproutIcon,
  Users,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import {
  BotanicalLeafWatermark,
  LocalMotiveEmblem,
} from "@/components/home/BrandMarks";
import { EASE_ORGANIC, Reveal } from "@/components/home/MotionPrimitives";


const FARMER_PILLARS = [
  {
    icon: SproutIcon,
    title: "Grow Together",
    subtitle:
      "Supporting local growers, organic farms & new agricultural opportunities",
  },
  {
    icon: Handshake,
    title: "Connect",
    subtitle:
      "Bringing farmers, producers & buyers together through cooperation",
  },
  {
    icon: Leaf2,
    title: "Sustain",
    subtitle:
      "Building a resilient local food system through shared resources & community",
  },
] as const;


/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const FARMERS = [
  {
    id: "garnet-hollow",
    name: "Garnet Hollow – That's Us!",
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/02/lm_group.webp",
    location: "Summerland, BC",
    description:
      "Our home base organic farm where we grow a variety of vegetables, fruits, and flowers on 12 acres. We choose what we grow with you, our CSA customers in mind.",
    width: 650,
    height: 450,
  },
  {
    id: "kaleidoscope",
    name: "Kaleidoscope Fruit Ranch",
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/Kaleidoscope.png",
    location: "Okanagan, BC",
    description:
      "Kaleidoscope Fruit Ranch is a 10 acres, family-scale orchard, specializing in certified organic Spartan, Ambrosia, Gala, and Pink Lady apples. Katie and Devon also grow small quantities of certified organic cherries, apricots, peaches, table grapes, hardy kiwi, quince, and pears.",
    width: 2000,
    height: 1800,
  },
  {
    id: "what-the-fungus",
    name: "What The Fungus",
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/34.png",
    location: "Summerland, BC",
    description:
      "What The Fungus, based in Summerland, BC, is a Canadian company specializing in supplying gourmet mushrooms to the culinary industry in the Okanagan. Brian provides fresh and dried mushrooms, DIY kits, and products for small mushroom farms nationwide. Additionally, WTF offers a week-long Mentoring Workshop on mushroom cultivation and mycology.",
    width: 2000,
    height: 1800,
  },
  {
    id: "okanagan-wildbrush",
    name: "Okanagan Wildbrush Honey",
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/33.png",
    location: "Penticton, BC",
    description:
      "Okanagan Wildbrush Honey is a family-owned apiary in Penticton, BC. We specialize in pure wildflower honey from Okanagan flowers. We also provide bees for fruit growers during the pollination season. We support local agriculture and food sustainability.",
    width: 2000,
    height: 1800,
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function FarmersPage() {
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
                  src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/A-farmer-owned-co-op-formed-to-connect-producers-with-buyers-effectively.webp"
                  alt="LocalMotive Farmers Network Cooperative members posing together at the farm"
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
                    text="LOCALMOTIVE · FARMERS · COOPERATIVE · "
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
                      <Leaf size={15} strokeWidth={1.8} />
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
                  <Link
                    href="/about"
                    className="inline-flex items-center gap-1.5 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#4B5B4E] hover:text-[#193827] transition-colors"
                  >
                    <ArrowLeft size={12} className="text-[#5A8E50]" />
                    <span>About Overview</span>
                  </Link>
                  <span className="h-[1.5px] w-10 bg-[#75A761]/65 rounded-full" />
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] font-medium tracking-[0.14em] uppercase text-[#5A8E50]">
                    <Users size={12} />
                    Farmer-Led Co-op
                  </span>
                </motion.div>

                <BlurText
                  as="h1"
                  text="LocalMotive Farmers Network Cooperative"
                  trigger="load"
                  effect="focus"
                  animateBy="words"
                  delay={80}
                  stepDuration={0.42}
                  blur={8}
                  className="font-serif font-semibold text-[#193827] text-[36px] sm:text-[48px] xl:text-[54px] leading-[1.04] tracking-[-0.02em]"
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
                  Cultivating connections that sustain and nourish our community.
                  A farmer-owned cooperative formed to connect producers with
                  buyers effectively.
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
                    href="#our-farmers"
                    className="nav-link-underline py-2 text-[14.5px] font-medium text-[#193827] hover:text-[#3A6B40] transition-colors"
                  >
                    Meet the farmers
                  </a>
                </motion.div>
              </div>

              {/* Mobile / Tablet Hero Image */}
              <div className="mt-8 lg:hidden relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(25,56,39,0.14)] border border-[#E4E0D4]">
                <Image
                  src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/A-farmer-owned-co-op-formed-to-connect-producers-with-buyers-effectively.webp"
                  alt="LocalMotive Farmers Network Cooperative members"
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
                  {FARMER_PILLARS.map((item) => {
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

        {/* 2. Dark Curved Cooperative Mission Band */}
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
                <Leaf size={14} />
                Community-Driven Cooperative
              </div>

              <p className="mt-5 font-serif text-[20px] sm:text-[24px] leading-[1.52] text-[#EFF4EA]">
                LocalMotive Farmers Network Cooperative is a community-driven
                network of growers strengthening the regional food system. Their
                support for small producers and processors, new farmers, and
                marginalized groups is vital to building a resilient and
                sustainable future for local agriculture — one rooted in shared
                values, community connection, and fresh, regional food.
              </p>

              <div className="mt-8 flex items-center justify-center">
                <LocalMotiveEmblem className="w-16 h-16 opacity-70" />
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

        {/* 3. Our Farmers & Producers Grid */}
        <section
          id="our-farmers"
          className="bg-cream-paper py-14 lg:py-20 scroll-mt-24"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal className="max-w-2xl">
              <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.12] font-semibold text-[#193827] tracking-[-0.015em]">
                Meet the Farmers{" "}
                <span className="italic text-[#5A8E50] font-medium">
                  &amp; Producers
                </span>
              </h2>
              <p className="mt-2.5 text-[15.5px] sm:text-[16px] text-[#4E5E52]">
                Our cooperative brings together passionate local growers who
                share a commitment to organic, sustainable farming and fresh
                regional food.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 ">
              {FARMERS.map((farmer, idx) => (
                <Reveal key={farmer.id} delay={0.07 * idx} className="h-full">
                  <SpotlightCard
                    theme="light"
                    spotlightColor="rgba(90, 142, 80, 0.16)"
                    intensity={0.28}
                    borderGlow={0.55}
                    className="!rounded-[24px] !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_10px_28px_rgba(25,56,39,0.04)] hover:!shadow-[0_16px_36px_rgba(25,56,39,0.09)] transition-all duration-200 
                    h-full overflow-hidden flex flex-col"
                  >
                    <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                      <Image
                        src={farmer.image}
                        alt={farmer.name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12291C]/22 via-transparent to-transparent" />
                    </div>

                    <div className="relative flex-1 p-6 pt-5 flex flex-col">
                      <h3 className="font-serif text-[21px] font-semibold text-[#193827] leading-snug">
                        {farmer.name}
                      </h3>
                      <div className="mt-1 inline-flex items-center gap-1.5 text-[13px] text-[#5A8E50] font-medium">
                        <MapPin size={13} strokeWidth={2} />
                        {farmer.location}
                      </div>
                      <p className="mt-2 text-[14.5px] leading-[1.6] text-[#4E5E52] flex-1">
                        {farmer.description}
                      </p>
                    </div>
                  </SpotlightCard>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 4. What is a CSA Box? */}
        <section className="bg-cream-paper pb-14 lg:pb-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal>
              <div className="rounded-[28px] border border-[#E4E0D4] bg-[#FAF9F4] p-7 sm:p-10 lg:p-12 shadow-[0_14px_40px_-20px_rgba(25,56,39,0.08)]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
                  {/* Text */}
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="font-serif text-[28px] sm:text-[36px] leading-[1.15] font-semibold text-[#193827]">
                      What is a{" "}
                      <span className="italic text-[#5A8E50] font-medium">
                        CSA Box?
                      </span>
                    </h2>

                    <p className="text-[15.5px] sm:text-[16px] leading-[1.7] text-[#4E5E52]">
                      Our CSA box is an organic, seasonal box of vegetables and
                      fruits. The produce is sourced firstly from our own organic
                      farm in Summerland BC, then from other local farmers.
                      During the shoulder seasons, we supplement the boxes with
                      high quality, imported organic produce through a reputable,
                      ethical wholesaler in Vancouver. This helps us extend our
                      delivery period while still providing a varied, high
                      quality hamper. Canada only box options are available.
                    </p>

                    <p className="text-[15px] leading-[1.7] text-[#4E5E52]">
                      CSA stands for Community Supported Agriculture. These box
                      services are a popular model that help small-scale organic
                      farmers stay viable in the face of global systems. CSA
                      models help to guarantee the farmer a customer base for
                      their produce and cover expenses throughout the year, not
                      only during the growing season.
                    </p>

                    <div className="pt-2 flex flex-wrap items-center gap-4">
                      <Magnet padding={30} magnetStrength={3.5} maxOffset={5}>
                        <a
                          href="https://localmotive.ca/csa-box"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-6 py-2.5 shadow-[0_8px_20px_rgba(25,56,39,0.18)] transition-colors group"
                        >
                          <span>Buy a CSA Box</span>
                          <ExternalLink
                            size={14}
                            className="transition-transform duration-200 group-hover:translate-x-0.5"
                          />
                        </a>
                      </Magnet>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="lg:col-span-5">
                    <div className="relative aspect-[700/606] w-full max-w-[500px] mx-auto rounded-2xl overflow-hidden border border-[#E4E0D4] shadow-[0_14px_32px_-16px_rgba(25,56,39,0.14)]">
                      <Image
                        src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/csa_box.webp"
                        alt="A CSA box filled with fresh organic vegetables and produce from local Okanagan farms"
                        fill
                        sizes="(max-width: 1024px) 100vw, 500px"
                        className="object-cover"
                      />
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-3 rounded-xl border border-white/40"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* 5. CTA Banner */}
        <section className="bg-cream-paper pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[28px] bg-[#193827] text-white px-7 py-8 sm:px-10 sm:py-10 shadow-[0_18px_46px_-22px_rgba(18,41,28,0.45)]">
                <BotanicalLeafWatermark className="hidden md:block absolute -right-8 -bottom-10 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C6E59F]">
                      <Sprout size={14} />
                      Join the Movement
                    </div>
                    <h2 className="mt-2 font-serif text-[28px] sm:text-[34px] leading-tight font-semibold text-white">
                      Want to sell through the cooperative?
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#DCE6DA]">
                      Enhance community access to food, support local farmers,
                      and improve sustainability by joining the LocalMotive
                      Farmers Network.
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
