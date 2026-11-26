"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { ArrowRight } from "pulsoicon-react";
import SpotlightCard from "@/components/SpotlightCard";
import {
  BotanicalLeafWatermark,
  FarmCraftEmblem,
  LocalMotiveEmblem,
  OkanaganCentreEmblem,
} from "./BrandMarks";
import { AnimatedStatNumber, Reveal } from "./MotionPrimitives";

export function EcosystemAndImpact({
  onOpenStory,
}: {
  onOpenStory: () => void;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <>
      {/* Our Ecosystem Sage Container */}
      <section id="ecosystem" className="py-10 lg:py-14 bg-cream-paper">
        <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
          <Reveal>
            <div className="relative overflow-hidden rounded-[28px] bg-[#EBF0E1] border border-[#DCE4CE] px-7 py-9 sm:px-10 sm:py-11 shadow-[0_10px_30px_rgba(25,56,39,0.04)]">
              {/* Right Botanical Leaf Accents */}
              <BotanicalLeafWatermark className="hidden md:block absolute -right-6 -bottom-10 w-44 h-60 rotate-12 pointer-events-none select-none" />

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
                {/* Left Intro */}
                <div className="lg:col-span-3">
                  <h2 className="font-serif text-[29px] sm:text-[32px] leading-[1.15] font-semibold text-[#193827] tracking-[-0.015em]">
                    Our Ecosystem
                  </h2>
                  <p className="mt-2.5 text-[14.5px] leading-[1.55] text-[#4E5E52]">
                    Innovating together for a stronger food system.
                  </p>
                  <a
                    href="#impact"
                    className="mt-4 inline-flex items-center gap-2 text-[14px] font-semibold text-[#193827] hover:text-[#3A6B40] transition-colors group"
                  >
                    <span>Discover More</span>
                    <ArrowRight
                      size={15}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                </div>

                {/* Right 3 Partners with SpotlightCard illumination */}
                <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <motion.div
                    whileHover={prefersReduced ? undefined : { y: -3 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SpotlightCard
                      theme="light"
                      spotlightColor="rgba(90, 142, 80, 0.18)"
                      intensity={0.3}
                      borderGlow={0.55}
                      className="!rounded-2xl !p-6 !bg-[#F8FAF3]/85 !border !border-[#D3DEC3] !shadow-none h-full flex flex-col items-center justify-center text-center"
                    >
                      <FarmCraftEmblem className="w-12 h-12 mb-3" />
                      <h3 className="font-serif text-[19px] font-semibold text-[#193827]">
                        FarmCraft
                      </h3>
                      <p className="font-mono text-[11.5px] tracking-wide uppercase text-[#526256] mt-1">
                        Agri-Food Innovation
                      </p>
                    </SpotlightCard>
                  </motion.div>

                  <motion.div
                    whileHover={prefersReduced ? undefined : { y: -3 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SpotlightCard
                      theme="light"
                      spotlightColor="rgba(90, 142, 80, 0.18)"
                      intensity={0.3}
                      borderGlow={0.55}
                      className="!rounded-2xl !p-6 !bg-[#F8FAF3]/85 !border !border-[#D3DEC3] !shadow-none h-full flex flex-col items-center justify-center text-center"
                    >
                      <LocalMotiveEmblem className="w-12 h-12 mb-3" />
                      <h3 className="font-serif text-[19px] font-semibold text-[#193827]">
                        LocalMotive
                      </h3>
                      <p className="font-mono text-[11.5px] tracking-wide uppercase text-[#526256] mt-1">
                        Farmers Network
                      </p>
                    </SpotlightCard>
                  </motion.div>

                  <motion.div
                    whileHover={prefersReduced ? undefined : { y: -3 }}
                    transition={{ duration: 0.25 }}
                  >
                    <SpotlightCard
                      theme="light"
                      spotlightColor="rgba(90, 142, 80, 0.18)"
                      intensity={0.3}
                      borderGlow={0.55}
                      className="!rounded-2xl !p-6 !bg-[#F8FAF3]/85 !border !border-[#D3DEC3] !shadow-none h-full flex flex-col items-center justify-center text-center"
                    >
                      <OkanaganCentreEmblem className="w-12 h-12 mb-3" />
                      <h3 className="font-serif text-[18px] leading-snug font-semibold text-[#193827] max-w-[200px]">
                        Okanagan Food &amp; Innovation Centre
                      </h3>
                      <p className="font-mono text-[11px] tracking-wide uppercase text-[#526256] mt-1">
                        Regional Partner
                      </p>
                    </SpotlightCard>
                  </motion.div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Why It's Important Dark Evergreen Impact Banner */}
      <section
        id="impact"
        className="relative py-4 lg:py-8 bg-cream-paper overflow-hidden"
      >
        <div className="relative bg-[#173424] text-white overflow-hidden">
          <div className="mx-auto max-w-[1320px] grid grid-cols-1 lg:grid-cols-12 items-stretch">
            {/* Left Dark Stats Panel */}
            <div className="relative z-10 lg:col-span-5 px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-20 flex flex-col justify-center">
              <Reveal>
                <div className="flex items-center gap-3.5 mb-5">
                  <span className="font-serif text-[19px] sm:text-[21px] font-medium text-[#EBF0E1]">
                    Why It&rsquo;s Important
                  </span>
                  <span className="h-[1px] w-20 bg-[#84B374]/55" />
                </div>

                <div className="flex items-center gap-5 sm:gap-6">
                  <div className="font-serif text-[56px] sm:text-[68px] font-bold leading-none tracking-tight text-white">
                    <AnimatedStatNumber target={35} suffix="%" />
                  </div>
                  <div className="border-l border-white/25 pl-5 text-[18px] sm:text-[20px] leading-[1.3] font-medium text-[#EFF4EA] max-w-[210px]">
                    of local food stays in our region
                  </div>
                </div>

                <p className="mt-6 text-[15px] sm:text-[15.5px] leading-[1.65] text-[#D7E2D5] max-w-[390px]">
                  The Food Hub helps reduce food waste, support local farmers
                  and build a resilient food system.
                </p>

                {/* Crisp Field-Note Metrics Strip */}
                <div className="mt-7 grid grid-cols-2 gap-4 pt-6 border-t border-white/15 max-w-[360px]">
                  <div>
                    <div className="font-serif text-[26px] font-semibold text-[#CFE4C5] leading-none">
                      <AnimatedStatNumber target={4} suffix="" />
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#B8CBB5] mt-1.5">
                      Core Services Under One Roof
                    </div>
                  </div>
                  <div>
                    <div className="font-serif text-[26px] font-semibold text-[#CFE4C5] leading-none">
                      15815
                    </div>
                    <div className="font-mono text-[11px] uppercase tracking-[0.12em] text-[#B8CBB5] mt-1.5">
                      Hwy 97 &middot; Summerland
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <button
                    type="button"
                    onClick={onOpenStory}
                    className="inline-flex items-center gap-2.5 text-[14.5px] font-semibold text-white hover:text-[#A4D196] transition-colors cursor-pointer group"
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={16}
                      strokeWidth={2}
                      className="transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </button>
                </div>
              </Reveal>
            </div>

            {/* Right Okanagan Lake & Vineyard Photography with Organic Curved Seam */}
            <div className="relative lg:col-span-7 min-h-[290px] sm:min-h-[360px] lg:min-h-[440px]">
              <Image
                src="/images/home/okanagan-landscape.jpg"
                alt="Sunlit vineyard rows overlooking Okanagan Lake in Summerland, BC"
                fill
                sizes="(min-width: 1024px) 60vw, 100vw"
                className="object-cover object-center"
              />
              {/* Soft edge vignette */}
              <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#173424]/45 via-transparent to-transparent" />

              {/* Sweeping Organic Dark Evergreen Mask on Desktop */}
              <svg
                viewBox="0 0 220 500"
                preserveAspectRatio="none"
                className="hidden lg:block absolute inset-y-0 -left-1 h-full w-[160px] xl:w-[210px] pointer-events-none"
                aria-hidden="true"
              >
                <path
                  d="M0 0H145C88 95 45 205 68 320C84 400 32 458 0 500H0V0Z"
                  fill="#173424"
                />
              </svg>

              {/* Soft Top Curve on Mobile */}
              <div className="lg:hidden absolute inset-x-0 top-0 h-14 bg-gradient-to-b from-[#173424] to-transparent" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
