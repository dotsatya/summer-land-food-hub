"use client";

import React from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowRight,
  ExternalLink,
  Heart,
  Leaf,
  ShoppingCart,
  Users,
} from "pulsoicon-react";
import SpotlightCard from "@/components/SpotlightCard";
import { Footer } from "@/components/layout/Footer";
import { INVOLVE_PATHWAYS } from "./hubData";
import { EASE_ORGANIC, Reveal } from "./MotionPrimitives";

const INVOLVE_ICONS = {
  member: Users,
  wholesale: ShoppingCart,
  volunteer: Heart,
  "farm-direct": Leaf,
};

export function GetInvolvedSection() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="get-involved" className="py-14 lg:py-16 bg-cream-paper">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-7 items-center">
          {/* Left Intro */}
          <Reveal className="lg:col-span-3" delay={0.05}>
            <h2 className="font-serif text-[32px] sm:text-[36px] leading-[1.15] font-semibold text-[#193827] tracking-[-0.015em]">
              Get Involved
            </h2>
            <p className="mt-2.5 text-[15px] text-[#4E5E52]">
              Be part of the movement.
            </p>
          </Reveal>

          {/* Right 4 Pathway Cards wrapped with React Bits SpotlightCard */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
            {INVOLVE_PATHWAYS.map((item, idx) => {
              const Icon = INVOLVE_ICONS[item.id];
              const cardInner = (
                <>
                  <div className="mb-3.5 text-[#5A8E50]">
                    <Icon size={24} strokeWidth={1.75} />
                  </div>

                  <div className="flex items-end justify-between gap-2 w-full">
                    <div>
                      <h3 className="text-[15.5px] font-semibold text-[#193827] leading-snug">
                        {item.title}
                      </h3>
                      <p className="text-[13px] text-[#5E6D61] mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                    <span className="text-[#5A8E50] group-hover:translate-x-1 transition-transform shrink-0 pb-0.5">
                      {item.external ? (
                        <ExternalLink size={15} strokeWidth={2} />
                      ) : (
                        <ArrowRight size={16} strokeWidth={2} />
                      )}
                    </span>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={item.id}
                  initial={prefersReduced ? false : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.55,
                    delay: 0.07 * idx,
                    ease: EASE_ORGANIC,
                  }}
                  whileHover={prefersReduced ? undefined : { y: -3 }}
                  className="h-full"
                >
                  <SpotlightCard
                    theme="light"
                    spotlightColor="rgba(90, 142, 80, 0.18)"
                    intensity={0.3}
                    borderGlow={0.65}
                    spotlightSize={220}
                    className="!rounded-2xl !p-0 !bg-[#FAF9F4] hover:!bg-white !border !border-[#E4E0D4] hover:!border-[#BFD0B2] !shadow-[0_6px_18px_rgba(25,56,39,0.04)] hover:!shadow-[0_14px_28px_rgba(25,56,39,0.09)] transition-all duration-200 h-full"
                  >
                    {item.external ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-icon-trigger
                        className="group w-full h-full flex flex-col justify-between text-left px-5 py-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A8E50] rounded-2xl"
                      >
                        {cardInner}
                      </a>
                    ) : (
                      <Link
                        href={item.href}
                        data-icon-trigger
                        className="group w-full h-full flex flex-col justify-between text-left px-5 py-5 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5A8E50] rounded-2xl"
                      >
                        {cardInner}
                      </Link>
                    )}
                  </SpotlightCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export function GetInvolvedAndFooter() {
  return (
    <>
      <GetInvolvedSection />
      <Footer />
    </>
  );
}
