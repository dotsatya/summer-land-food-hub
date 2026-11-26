"use client";

import React from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  Box,
  ShoppingBag,
  Truck,
  Utensils,
} from "pulsoicon-react";
import Magnet from "@/components/Magnet";
import { OFFER_SERVICES, type OfferService } from "./hubData";
import { EASE_ORGANIC, Reveal } from "./MotionPrimitives";

const OFFER_ICONS = {
  storage: Box,
  kitchens: Utensils,
  distribution: Truck,
  retail: ShoppingBag,
};

export function OfferSection({
  onSelectService,
}: {
  onSelectService: (service: OfferService) => void;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <section
      id="offer"
      className="relative py-14 lg:py-20 bg-cream-paper border-t border-[#E4E0D4]/60"
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          {/* Left Intro Block */}
          <Reveal className="lg:col-span-3" delay={0.05}>
            <h2 className="font-serif text-[32px] sm:text-[36px] leading-[1.14] font-semibold text-[#193827] tracking-[-0.015em]">
              What We Offer
            </h2>
            <p className="mt-3 text-[15px] leading-[1.6] text-[#4E5E52] max-w-[260px]">
              From farm to table &mdash; everything you need under one roof.
            </p>
            <div className="mt-6">
              <Magnet padding={44} magnetStrength={4} maxOffset={7}>
                <button
                  type="button"
                  onClick={() => onSelectService(OFFER_SERVICES[0])}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-5.5 py-2.5 shadow-[0_8px_20px_rgba(25,56,39,0.18)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Explore Services</span>
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </Magnet>
            </div>
          </Reveal>

          {/* Right 4 Photographic Cards with Mindora-inspired frosted glass window frames */}
          <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-5">
            {OFFER_SERVICES.map((service, index) => {
              const Icon = OFFER_ICONS[service.id];
              const indexLabel = String(index + 1).padStart(2, "0");
              return (
                <motion.button
                  key={service.id}
                  type="button"
                  data-icon-trigger
                  onClick={() => onSelectService(service)}
                  initial={
                    prefersReduced ? false : { opacity: 0, y: 18 }
                  }
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 * index,
                    ease: EASE_ORGANIC,
                  }}
                  whileHover={prefersReduced ? undefined : { y: -5 }}
                  className="relative aspect-[4/4.7] w-full rounded-[22px] overflow-hidden text-left shadow-[0_12px_30px_rgba(18,41,28,0.12)] border border-[#DED9CA] group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A8E50]"
                >
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    sizes="(min-width: 1024px) 20vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />

                  {/* Deep atmospheric gradient scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2116]/90 via-[#0D2116]/28 to-black/15 transition-opacity duration-300 group-hover:from-[#0D2116]/95" />

                  {/* Mindora-inspired frosted inner border frame */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-2.5 rounded-[14px] border border-white/35 transition-colors duration-300 group-hover:border-white/60"
                  />

                  {/* Halden Stories-inspired monospace index badge */}
                  <span className="absolute top-4.5 left-4.5 font-mono text-[10.5px] font-medium tracking-[0.14em] text-white/90 bg-[#12291C]/45 backdrop-blur-md px-2 py-0.5 rounded-full border border-white/25">
                    {indexLabel}
                  </span>

                  {/* Centered Icon + Label at bottom */}
                  <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col items-center text-center">
                    <div className="mb-2 text-white/95 drop-shadow-sm">
                      <Icon size={28} strokeWidth={1.6} />
                    </div>
                    <span className="font-serif text-[17px] sm:text-[18px] font-semibold text-white tracking-tight">
                      {service.title}
                    </span>
                    <span className="mt-1 text-[11.5px] font-medium text-[#CFE4C5] opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-200 inline-flex items-center gap-1">
                      View details <ArrowRight size={11} />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
