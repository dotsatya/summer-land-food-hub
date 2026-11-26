"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Heart,
  Sprout,
  Users,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import { BotanicalLeafWatermark } from "@/components/home/BrandMarks";
import { EASE_ORGANIC, Reveal } from "@/components/home/MotionPrimitives";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const TEAM_MEMBERS = [
  {
    name: "Thomas",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/40.png",
  },
  {
    name: "Celina",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/35.png",
  },
  {
    name: "Lily",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/39.png",
  },
  {
    name: "Garett",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/44.png",
  },
  {
    name: "Sean",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/45.png",
  },
  {
    name: "Cordi",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/43.png",
  },
  {
    name: "Jeffrey",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/37.png",
  },
  {
    name: "Jefferson",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/36.png",
  },
  {
    name: "Michelle",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/41.png",
  },
  {
    name: "Megan",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/47.png",
  },
  {
    name: "Michou",
    image:
      "https://summerlandfoodhub.ca/wp-content/uploads/2026/06/Michou-HeadShot-Final.png",
  },
  {
    name: "Lisa",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/49.png",
  },
  {
    name: "Magda",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/48.png",
  },
  {
    name: "Zion",
    image: "https://summerlandfoodhub.ca/wp-content/uploads/2026/04/38.png",
  },
] as const;

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export function TeamPage() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="flex-1 flex flex-col bg-[#F8F7F2] text-[#193827]">
      <main className="flex-1">
        {/* 1. Hero Header */}
        <section className="relative bg-[#F8F7F2] overflow-hidden">
          {/* Decorative blurred farm background */}
          <div className="absolute inset-0 h-[340px] sm:h-[380px] overflow-hidden">
            <Image
              src="https://summerlandfoodhub.ca/wp-content/uploads/2026/02/A-farmer-owned-co-op-formed-to-connect-producers-with-buyers-effectively.webp"
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover object-top blur-[2px] scale-105"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#F8F7F2]/60 via-[#F8F7F2]/75 to-[#F8F7F2]" />
          </div>

          <div className="relative z-10 mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 pt-28 sm:pt-32 pb-10 sm:pb-14">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.55,
                delay: 0.05,
                ease: EASE_ORGANIC,
              }}
              className="flex flex-wrap items-center gap-3 mb-5"
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
                Our People
              </span>
            </motion.div>

            <BlurText
              as="h1"
              text="Meet The Team"
              trigger="load"
              effect="focus"
              animateBy="words"
              delay={80}
              stepDuration={0.42}
              blur={8}
              className="font-serif font-semibold text-[#193827] text-[42px] sm:text-[56px] xl:text-[64px] leading-[1.04] tracking-[-0.02em]"
            />

            <motion.p
              initial={prefersReduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.65,
                delay: 0.28,
                ease: EASE_ORGANIC,
              }}
              className="mt-4 text-[16px] sm:text-[17px] leading-[1.62] text-[#4E5E52] max-w-[560px]"
            >
              The passionate growers, educators, and community builders behind
              the Summerland Food Hub — working together to strengthen our
              regional food system.
            </motion.p>
          </div>
        </section>

        {/* 2. Team Grid */}
        <section className="bg-cream-paper py-10 lg:py-16">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5 sm:gap-6">
              {TEAM_MEMBERS.map((member, idx) => (
                <Reveal key={member.name} delay={0.04 * idx} className="group">
                  <div className="relative rounded-2xl overflow-hidden border border-[#E4E0D4] bg-[#FAF9F4] hover:bg-white hover:border-[#BFD0B2] shadow-[0_6px_18px_rgba(25,56,39,0.04)] hover:shadow-[0_14px_32px_rgba(25,56,39,0.1)] transition-all duration-300">
                    <div className="relative aspect-[4/5] w-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={`${member.name} — Summerland Food Hub team member`}
                        fill
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                        className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#12291C]/18 via-transparent to-transparent" />
                    </div>

                    <div className="px-4 py-3.5 text-center">
                      <h3 className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#193827] leading-tight">
                        {member.name}
                      </h3>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* 3. CTA Banner */}
        <section className="bg-cream-paper pb-16 lg:pb-20">
          <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
            <Reveal delay={0.1}>
              <div className="relative overflow-hidden rounded-[28px] bg-[#193827] text-white px-7 py-8 sm:px-10 sm:py-10 shadow-[0_18px_46px_-22px_rgba(18,41,28,0.45)]">
                <BotanicalLeafWatermark className="hidden md:block absolute -right-8 -bottom-10 w-44 h-56 rotate-12 opacity-40 pointer-events-none select-none" />

                <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="max-w-xl">
                    <div className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.14em] text-[#C6E59F]">
                      <Heart size={14} />
                      Join Our Community
                    </div>
                    <h2 className="mt-2 font-serif text-[28px] sm:text-[34px] leading-tight font-semibold text-white">
                      Want to be part of the team?
                    </h2>
                    <p className="mt-2 text-[15px] leading-relaxed text-[#DCE6DA]">
                      We&apos;re always looking for passionate volunteers, farm
                      hands, and community supporters who believe in local food
                      systems.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 shrink-0">
                    <Magnet padding={28} magnetStrength={3.5} maxOffset={5}>
                      <Link
                        href="/contact?topic=volunteer"
                        className="inline-flex items-center gap-2 rounded-full bg-[#A3C962] hover:bg-[#B2D674] px-6 py-3 text-[14px] font-semibold text-[#12291C] transition-colors"
                      >
                        <span>Volunteer</span>
                        <Sprout size={15} />
                      </Link>
                    </Magnet>
                    <Link
                      href="/membership"
                      className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/8 hover:bg-white/15 px-5 py-3 text-[14px] font-medium text-white transition-colors"
                    >
                      <span>Become a Member</span>
                      <ArrowRight size={14} />
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
