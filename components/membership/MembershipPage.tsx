"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Check,
  Download,
  Handshake,
  MapPin,
  Settings,
  Sprout,
  Tractor,
  Users,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import CircularText from "@/components/CircularText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { BotanicalLeafWatermark } from "@/components/home/BrandMarks";
import { EASE_ORGANIC, Reveal } from "@/components/home/MotionPrimitives";

const MEMBERSHIP_PATHS = [
  {
    id: "community-support",
    title: "Community Support Member",
    icon: Users,
    image: "/images/home/hero-market.jpg",
    alt: "Community members gathered inside the Summerland Food Hub market",
    description:
      "For individuals, businesses and government organizations who believe in our mission and want to support the cooperative.",
    pdfUrl:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/06/Community-Supporter-Membership_LocalMotive-Farmers-Network-Cooperative-1.pdf",
  },
  {
    id: "farmer-member",
    title: "Farmer Member",
    icon: Tractor,
    image: "/images/home/about-carrots.jpg",
    alt: "Okanagan growers holding freshly harvested heirloom carrots and greens",
    description:
      "For growers and producers involved in farming, storing and supplying produce through the cooperative.",
    pdfUrl:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/05/Farmer-Membership_LocalMotive-Farmers-Network-Cooperative.pdf",
  },
  {
    id: "facility-use",
    title: "Facility Use Member",
    icon: Settings,
    image: "/images/home/offer-kitchens.jpg",
    alt: "Food makers preparing artisanal batches inside a commercial kitchen",
    description:
      "For buyers, suppliers and processors who actively use and support cooperative facilities.",
    pdfUrl:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/05/Facility-Use-Membership_LocalMotive-Farmers-Network-Cooperative.pdf",
  },
] as const;

const COLLABORATION_PILLARS = [
  {
    icon: Sprout,
    label: "Farmer-led",
    subtitle: "Guided by local Okanagan growers",
  },
  {
    icon: Handshake,
    label: "Shared resources",
    subtitle: "Kitchens, cold storage & equipment",
  },
  {
    icon: Users,
    label: "Stronger together",
    subtitle: "Collaborating across our food system",
  },
] as const;

export function MembershipPage() {
  const prefersReduced = useReducedMotion();
  const [selectedPath, setSelectedPath] = useState<string>(
    MEMBERSHIP_PATHS[1].title,
  );
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [business, setBusiness] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8F7F2] text-[#193827]">
      <main className="flex-1">
        {/* 1. Split Hero Matching Homepage Design DNA */}
        <section className="relative bg-[#F8F7F2] pt-20 lg:pt-0">
          <div className="relative overflow-hidden lg:min-h-[540px] xl:min-h-[580px] flex items-center">
            {/* Right-side Photography with organic S-curve transition */}
            <div className="hidden lg:block absolute inset-y-0 right-0 w-[62%] xl:w-[60%]">
              <div className="relative w-full h-full">
                <Image
                  src="/images/home/thomas-turnbull.jpg"
                  alt="Okanagan grower and LocalMotive cooperative member holding fresh harvest"
                  fill
                  priority
                  sizes="(min-width: 1024px) 62vw, 100vw"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#F8F7F2]/42 via-transparent to-black/15" />

                {/* Mindora frosted inner frame border */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute top-24 right-8 bottom-20 left-32 rounded-[26px] border border-white/40 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.12)]"
                />

                {/* Rotating cooperative seal */}
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
                    text="LOCALMOTIVE COOPERATIVE · OKANAGAN · "
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

            {/* Left Content Container */}
            <div className="relative z-10 mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10 pt-6 pb-8 lg:pt-28 lg:pb-20">
              <div className="max-w-[560px]">
                {/* Eyebrow */}
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
                    Grow Together. Build Local.
                  </span>
                  <span className="h-[1.5px] w-12 bg-[#75A761]/65 rounded-full" />
                </motion.div>

                {/* Headline */}
                <BlurText
                  as="h1"
                  text="Membership "
                  trigger="load"
                  effect="focus"
                  animateBy="words"
                  delay={85}
                  stepDuration={0.44}
                  blur={8}
                  className="font-serif font-semibold text-[#193827] text-[42px] sm:text-[54px] xl:text-[62px] leading-[1.03] tracking-[-0.02em]"
                />

                {/* Supporting copy */}
                <motion.p
                  initial={prefersReduced ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.65,
                    delay: 0.28,
                    ease: EASE_ORGANIC,
                  }}
                  className="mt-5 text-[16px] sm:text-[17px] leading-[1.6] text-[#4E5E52] max-w-[450px]"
                >
                  Join a non-profit, farmer-led cooperative connecting growers,
                  producers, local businesses and community members across the
                  Okanagan.
                </motion.p>

                {/* Action Buttons */}
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
                  <Magnet padding={48} magnetStrength={3.5} maxOffset={8}>
                    <a
                      href="#membership-application"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14.5px] font-medium px-6 py-3.5 shadow-[0_10px_24px_rgba(25,56,39,0.22)] transition-all duration-200 hover:-translate-y-0.5 group"
                    >
                      <span>Become a Member</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </a>
                  </Magnet>

                  <a
                    href="#membership-paths"
                    className="nav-link-underline py-2 text-[14.5px] font-medium text-[#193827] hover:text-[#3A6B40] transition-colors"
                  >
                    Explore membership options
                  </a>
                </motion.div>
              </div>

              {/* Mobile / Tablet Hero Image */}
              <div className="mt-8 lg:hidden relative aspect-[16/10] w-full rounded-3xl overflow-hidden shadow-[0_18px_40px_rgba(25,56,39,0.14)] border border-[#E4E0D4]">
                <Image
                  src="/images/home/thomas-turnbull.jpg"
                  alt="Okanagan grower holding fresh produce harvest"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-top"
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
                  {COLLABORATION_PILLARS.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        data-icon-trigger
                        className="flex items-center justify-start md:justify-center gap-4 px-6 py-4.5 sm:py-5 hover:bg-[#F3F0E6]/65 transition-colors cursor-default group"
                      >
                        <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-[#EAF0E2] text-[#2B5836] shrink-0 group-hover:bg-[#DCE7CE] transition-colors">
                          <Icon size={22} strokeWidth={1.75} />
                        </div>
                        <div>
                          <h2 className="font-serif text-[18px] font-semibold text-[#193827] leading-tight">
                            {item.label}
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

        {/* 2. Find Your Place in the Cooperative — 3 Membership Cards + Direct PDF Downloads */}
        <section
          id="membership-paths"
          className="bg-cream-paper pt-10 pb-10 lg:pt-14 lg:pb-12 scroll-mt-24"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal className="text-center max-w-4xl mx-auto">
              <h2 className="font-serif text-[32px] sm:text-[40px] leading-[1.12] font-semibold text-[#193827] tracking-[-0.015em]">
                Find your place in the cooperative
              </h2>
              <p className="mt-2.5 text-[15.5px] sm:text-[16px] text-[#4E5E52]">
                Choose the membership type that fits your role in our local food
                system.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
              {MEMBERSHIP_PATHS.map((path, idx) => {
                const Icon = path.icon;
                return (
                  <Reveal key={path.id} delay={0.07 * idx} className="h-full">
                    <SpotlightCard
                      theme="light"
                      spotlightColor="rgba(90, 142, 80, 0.16)"
                      intensity={0.28}
                      borderGlow={0.55}
                      className="!rounded-[26px] !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_10px_28px_rgba(25,56,39,0.05)] hover:!shadow-[0_18px_38px_rgba(25,56,39,0.09)] transition-all duration-200 h-full overflow-hidden flex flex-col"
                    >
                      {/* Top Editorial Image */}
                      <div className="relative h-36 sm:h-40 w-full overflow-hidden">
                        <Image
                          src={path.image}
                          alt={path.alt}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-500 hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#12291C]/20 via-transparent to-transparent" />
                      </div>

                      {/* Card Body */}
                      <div className="relative flex-1 flex flex-col items-center text-center px-5 pt-4 pb-5">
                        {/* Floating Circular Sage Icon Badge */}
                        <div className="relative z-10 -mt-9 mb-2.5 w-10 h-10 rounded-full bg-[#FAF9F4] border border-[#E4E0D4] shadow-sm flex items-center justify-center text-[#3B6C3E]">
                          <Icon size={19} strokeWidth={1.75} />
                        </div>

                        <h3 className="font-serif text-[19px] sm:text-[20px] xl:text-[21px] font-semibold text-[#193827] leading-snug lg:whitespace-nowrap">
                          {path.title}
                        </h3>

                        <p className="mt-1.5 text-[14px] leading-[1.55] text-[#4E5E52] flex-1">
                          {path.description}
                        </p>

                        {/* Direct Download Benefits PDF */}
                        <div className="mt-4 w-full flex justify-center">
                          <Magnet
                            padding={28}
                            magnetStrength={3.5}
                            maxOffset={5}
                          >
                            <a
                              href={path.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              download
                              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[13.5px] font-medium px-6 py-2.5 shadow-[0_8px_18px_rgba(25,56,39,0.18)] transition-all duration-200 group"
                            >
                              <Download
                                size={15}
                                strokeWidth={2}
                                className="text-[#C6E59F] transition-transform duration-200 group-hover:translate-y-0.5"
                              />
                              <span>Download benefits PDF</span>
                            </a>
                          </Magnet>
                        </div>
                      </div>
                    </SpotlightCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        {/* 3. Dark Organic Curved CTA Band: "Ready to grow with us?" */}
        <section className="relative bg-[#193827] text-white overflow-hidden">
          {/* Top Subtle Organic Wave Cutout */}
          <svg
            viewBox="0 0 1440 54"
            preserveAspectRatio="none"
            className="w-full h-5 sm:h-7 block text-[#F8F7F2]"
            aria-hidden="true"
          >
            <path
              d="M0,0 L1440,0 L1440,22 C1120,56 760,0 420,28 C210,45 90,34 0,18 Z"
              fill="currentColor"
            />
          </svg>

          {/* Botanical Leaf Watermarks Matching Homepage */}
          <BotanicalLeafWatermark className="hidden md:block absolute -left-8 top-2 w-40 h-52 -rotate-12 opacity-40 pointer-events-none select-none" />
          <BotanicalLeafWatermark className="hidden md:block absolute -right-6 -bottom-6 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

          <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 py-8 sm:py-10 lg:py-11">
            <Reveal>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-10">
                <div className="max-w-xl">
                  <h2 className="font-serif text-[32px] sm:text-[42px] leading-[1.1] font-semibold text-white">
                    Ready to grow with us?
                  </h2>
                  <p className="mt-2.5 text-[15.5px] sm:text-[16px] leading-[1.6] text-[#DCE6DA]">
                    Become part of a collaborative, farmer-led network building
                    a stronger local food system.
                  </p>
                </div>

                <span
                  aria-hidden="true"
                  className="hidden lg:block h-14 w-px bg-white/18 shrink-0"
                />

                <div className="shrink-0">
                  <Magnet padding={40} magnetStrength={3.5} maxOffset={8}>
                    <a
                      href="#membership-application"
                      className="inline-flex items-center gap-2.5 rounded-full bg-[#A3C962] hover:bg-[#B2D674] text-[#12291C] text-[14.5px] font-semibold px-7 py-3.5 shadow-[0_14px_30px_-10px_rgba(163,201,98,0.55)] transition-colors group"
                    >
                      <span>Start your membership application</span>
                      <ArrowRight
                        size={16}
                        strokeWidth={2.2}
                        className="transition-transform duration-200 group-hover:translate-x-0.5"
                      />
                    </a>
                  </Magnet>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Bottom Subtle Organic Wave Cutout */}
          <svg
            viewBox="0 0 1440 54"
            preserveAspectRatio="none"
            className="w-full h-5 sm:h-7 block text-[#F8F7F2]"
            aria-hidden="true"
          >
            <path
              d="M0,28 C340,-4 680,52 1040,18 C1220,2 1340,16 1440,30 L1440,54 L0,54 Z"
              fill="currentColor"
            />
          </svg>
        </section>

        {/* 4. A Community Built on Collaboration Strip */}
        <section className="relative bg-cream-paper py-7 lg:py-9 overflow-hidden">
          <BotanicalLeafWatermark className="hidden lg:block absolute -left-10 bottom-0 w-36 h-48 opacity-40 pointer-events-none select-none" />
          <BotanicalLeafWatermark className="hidden lg:block absolute -right-10 top-0 w-36 h-48 rotate-12 opacity-40 pointer-events-none select-none" />

          <div className="relative z-10 mx-auto max-w-[1040px] px-5 sm:px-8 text-center">
            <Reveal>
              <h2 className="font-serif text-[28px] sm:text-[34px] font-semibold text-[#193827]">
                A community built on collaboration
              </h2>

              <p className="mt-2.5 text-[14.5px] text-[#4E5E52]">
                Membership is not required to volunteer &mdash;{" "}
                <Link
                  href="/contact?topic=volunteer"
                  className="font-medium text-[#193827] underline decoration-[#5A8E50]/55 underline-offset-4 hover:text-[#3A6B40] transition-colors"
                >
                  but you&apos;re always welcome to get involved.
                </Link>
              </p>
            </Reveal>
          </div>
        </section>

        {/* 5. Membership Application Section */}
        <section
          id="membership-application"
          className="bg-cream-paper pt-2 pb-12 lg:pb-16 scroll-mt-24"
        >
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <Reveal className="lg:col-span-5" delay={0.08}>
                <div className="rounded-3xl bg-[#EBF0E1] border border-[#DCE4CE] p-7 sm:p-8 space-y-5">
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] font-medium tracking-[0.16em] uppercase text-[#2B5836]">
                    <Sprout size={14} />
                    LocalMotive Farmers Network Cooperative
                  </div>
                  <h2 className="font-serif text-[28px] leading-[1.16] font-semibold text-[#193827]">
                    Built to help local makers{" "}
                    <span className="italic text-[#5A8E50] font-medium">
                      grow safely.
                    </span>
                  </h2>
                  <p className="text-[14.5px] leading-[1.65] text-[#4E5E52]">
                    We are welcoming key members across growers, food
                    processors, wholesale buyers, and community supporters.
                  </p>
                  <ul className="space-y-3 text-[14.5px] text-[#193827]">
                    {[
                      "Scheduled commercial kitchen bookings & food-safety guidance",
                      "Cold, frozen, and dry storage pallet bays",
                      "Wholesale aggregation & Okanagan retail shelf placement",
                      "Access to FarmCraft & LocalMotive producer networks",
                    ].map((point) => (
                      <li key={point} className="flex items-start gap-2.5">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-[#DCE7CE] text-[#2B5836] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={2.4} />
                        </span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-3 border-t border-[#D3DEC3] flex flex-wrap items-center gap-3 text-[13px] text-[#4E5E52]">
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-[#5A8E50]" />
                      15815 Hwy 97, Summerland, BC
                    </span>
                  </div>
                </div>
              </Reveal>

              <Reveal className="lg:col-span-7" delay={0.12}>
                <div className="rounded-3xl bg-white border border-[#E4E0D4] shadow-[0_14px_38px_rgba(25,56,39,0.06)] p-7 sm:p-9">
                  {submitted ? (
                    <div className="py-8 text-center">
                      <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-[#5A8E50] text-white flex items-center justify-center">
                        <Check size={24} />
                      </div>
                      <h2 className="font-serif text-[26px] font-semibold text-[#193827]">
                        Membership Request Received
                      </h2>
                      <p className="mt-2 text-[15px] text-[#4E5E52] max-w-md mx-auto">
                        Thank you,{" "}
                        <strong className="text-[#193827]">{name}</strong>. Our
                        coordinator will follow up with{" "}
                        <strong className="text-[#193827]">{email}</strong>{" "}
                        regarding{" "}
                        <strong className="text-[#193827]">
                          {selectedPath}
                        </strong>{" "}
                        membership and next steps.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setName("");
                          setEmail("");
                          setBusiness("");
                          setNotes("");
                        }}
                        className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#D8D3C4] px-5 py-2.5 text-[13.5px] font-medium text-[#193827] hover:bg-[#F8F7F2] transition-colors cursor-pointer"
                      >
                        Submit another inquiry
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#5A8E50]">
                          Start Your Application
                        </span>
                        <h2 className="mt-1 font-serif text-[26px] font-semibold text-[#193827]">
                          Membership Inquiry Form
                        </h2>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="member-name"
                            className="block text-[12.5px] font-semibold text-[#193827] mb-1.5"
                          >
                            Full Name
                          </label>
                          <input
                            id="member-name"
                            type="text"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Full name"
                            className="w-full rounded-xl border border-[#D8D3C4] bg-[#FAF9F4] px-3.5 py-2.5 text-[14px] text-[#193827] focus:outline-none focus:border-[#5A8E50] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="member-email"
                            className="block text-[12.5px] font-semibold text-[#193827] mb-1.5"
                          >
                            Email Address
                          </label>
                          <input
                            id="member-email"
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.ca"
                            className="w-full rounded-xl border border-[#D8D3C4] bg-[#FAF9F4] px-3.5 py-2.5 text-[14px] text-[#193827] focus:outline-none focus:border-[#5A8E50] focus:bg-white"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label
                            htmlFor="member-business"
                            className="block text-[12.5px] font-semibold text-[#193827] mb-1.5"
                          >
                            Farm or Organization Name
                          </label>
                          <input
                            id="member-business"
                            type="text"
                            value={business}
                            onChange={(e) => setBusiness(e.target.value)}
                            placeholder="Okanagan Orchard Co."
                            className="w-full rounded-xl border border-[#D8D3C4] bg-[#FAF9F4] px-3.5 py-2.5 text-[14px] text-[#193827] focus:outline-none focus:border-[#5A8E50] focus:bg-white"
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="member-track"
                            className="block text-[12.5px] font-semibold text-[#193827] mb-1.5"
                          >
                            Membership Type
                          </label>
                          <select
                            id="member-track"
                            value={selectedPath}
                            onChange={(e) => setSelectedPath(e.target.value)}
                            className="w-full rounded-xl border border-[#D8D3C4] bg-[#FAF9F4] px-3.5 py-2.5 text-[14px] text-[#193827] focus:outline-none focus:border-[#5A8E50] focus:bg-white"
                          >
                            {MEMBERSHIP_PATHS.map((option) => (
                              <option key={option.id} value={option.title}>
                                {option.title}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="member-notes"
                          className="block text-[12.5px] font-semibold text-[#193827] mb-1.5"
                        >
                          Tell us about what you grow, make, or support
                        </label>
                        <textarea
                          id="member-notes"
                          rows={3}
                          value={notes}
                          onChange={(e) => setNotes(e.target.value)}
                          placeholder="Kitchen hours needed, storage volume, produce supply, or community support goals..."
                          className="w-full rounded-xl border border-[#D8D3C4] bg-[#FAF9F4] px-3.5 py-2.5 text-[14px] text-[#193827] focus:outline-none focus:border-[#5A8E50] focus:bg-white resize-y"
                        />
                      </div>

                      <div className="pt-2">
                        <Magnet padding={40} magnetStrength={4} maxOffset={6}>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14.5px] font-medium px-7 py-3 shadow-[0_8px_20px_rgba(25,56,39,0.2)] transition-all duration-200 cursor-pointer group"
                          >
                            <span>Submit Membership Request</span>
                            <ArrowRight
                              size={15}
                              className="transition-transform duration-200 group-hover:translate-x-0.5"
                            />
                          </button>
                        </Magnet>
                      </div>
                    </form>
                  )}
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
