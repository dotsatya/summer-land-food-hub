"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "pulsoicon-react";
import Magnet from "@/components/Magnet";
import { BotanicalLeafWatermark } from "./BrandMarks";
import { Reveal } from "./MotionPrimitives";

export function AboutSection({
  onLearnMore,
}: {
  onLearnMore: () => void;
}) {
  return (
    <section
      id="about"
      className="relative py-20 lg:py-24 overflow-hidden bg-cream-paper"
    >
      {/* Subtle Botanical Leaf Watermark on left margin */}
      <BotanicalLeafWatermark className="hidden md:block absolute -left-8 top-10 w-44 h-64 pointer-events-none select-none" />

      <div className="relative mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-9 items-center">
          {/* Left Photo with Mindora-inspired inner hairline border */}
          <Reveal className="lg:col-span-4" delay={0.05}>
            <div className="relative aspect-[4/3] w-full rounded-[24px] overflow-hidden shadow-[0_18px_42px_rgba(25,56,39,0.1)] border border-[#E4E0D4] group">
              <Image
                src="/images/home/about-carrots.jpg"
                alt="Fresh harvested Okanagan carrots tied with twine beside a Local Food chalkboard"
                fill
                sizes="(min-width: 1024px) 33vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-3 rounded-[16px] border border-white/40"
              />
            </div>
          </Reveal>

          {/* Center Editorial Copy */}
          <Reveal className="lg:col-span-5 lg:px-3" delay={0.12}>
            <h2 className="font-serif text-[32px] sm:text-[38px] leading-[1.12] font-semibold text-[#193827] tracking-[-0.015em]">
              A thriving local food ecosystem{" "}
              <span className="italic text-[#5A8E50] font-medium">
                in Summerland.
              </span>
            </h2>

            <p className="mt-4 text-[15.5px] leading-[1.68] text-[#4E5E52]">
              The Summerland Food Hub brings together agriculture, innovation
              and community to support local food systems and create a
              healthier, more resilient community.
            </p>

            <div className="mt-6">
              <Magnet padding={44} magnetStrength={4} maxOffset={7}>
                <button
                  type="button"
                  onClick={onLearnMore}
                  className="inline-flex items-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-5.5 py-2.5 shadow-[0_8px_20px_rgba(25,56,39,0.18)] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer group"
                >
                  <span>Learn More</span>
                  <ArrowRight
                    size={15}
                    strokeWidth={2}
                    className="transition-transform duration-200 group-hover:translate-x-0.5"
                  />
                </button>
              </Magnet>
            </div>
          </Reveal>

          {/* Right Testimonial Pull Quote */}
          <Reveal
            className="lg:col-span-3 lg:border-l lg:border-[#E2DED1] lg:pl-8"
            delay={0.2}
          >
            <div className="relative">
              <span
                aria-hidden="true"
                className="block font-serif text-[52px] leading-none text-[#84B374] select-none -mb-2"
              >
                &ldquo;
              </span>

              <blockquote className="font-serif italic text-[20px] sm:text-[21px] leading-[1.45] text-[#224130]">
                &ldquo;A place where local food, people and ideas grow
                together.&rdquo;
              </blockquote>

              <div className="mt-6 flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-[#193827]/15 p-0.5 bg-white shadow-sm shrink-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image
                      src="/images/home/thomas-turnbull.jpg"
                      alt="Thomas Turnbull, Local Food Advocate"
                      fill
                      sizes="48px"
                      className="object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="text-[14.5px] font-semibold text-[#193827]">
                    Thomas Turnbull
                  </div>
                  <div className="font-mono text-[11.5px] text-[#526256]">
                    Local Food Advocate
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
