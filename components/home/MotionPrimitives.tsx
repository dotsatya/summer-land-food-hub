"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import CountUp from "@/components/CountUp";

export const EASE_ORGANIC = [0.22, 1, 0.36, 1] as const;
export const EASE_SETTLE = [0.3, 0, 0.05, 1] as const;

export function Reveal({
  children,
  className = "",
  delay = 0,
  y = 18,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      initial={prefersReduced ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{
        duration: 0.7,
        delay,
        ease: EASE_ORGANIC,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function AnimatedStatNumber({
  target,
  suffix = "%",
  className = "",
}: {
  target: number;
  suffix?: string;
  className?: string;
}) {
  return (
    <CountUp
      to={target}
      suffix={suffix}
      duration={1.5}
      easing="expo"
      className={className}
    />
  );
}
