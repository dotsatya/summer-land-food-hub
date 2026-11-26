"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BrandFacebook,
  BrandInstagram,
  Check,
  Leaf,
  Mail,
  MapPin,
  Phone,
} from "pulsoicon-react";
import { FoodHubLogoMark } from "@/components/home/BrandMarks";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#12291C] text-white border-t border-white/10">
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10">
        {/* Primary Compact Row */}
        <div className="py-6 lg:py-7 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Brand Lockup matching Header */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
            aria-label="Summerland Food Hub Home"
          >
            <FoodHubLogoMark
              variant="light"
              className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105"
            />
            <Image
              src="/images/food-hub-logo-green.png"
              alt="Summerland Food Hub — Eat. Drink. Make. Here."
              width={762}
              height={208}
              className="h-8 sm:h-9 w-auto object-contain brightness-0 invert"
            />
          </Link>

          {/* Centered Editorial Nav Links */}
          <nav
            aria-label="Footer Navigation"
            className="flex flex-wrap items-center gap-x-1 sm:gap-x-2 gap-y-1 text-[13.5px] text-[#D7E3D4]"
          >
            <Link
              href="/#about"
              className="nav-link-underline px-3 py-1.5 hover:text-white transition-colors"
            >
              About
            </Link>
            <Link
              href="/#offer"
              className="nav-link-underline px-3 py-1.5 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="/membership"
              className="nav-link-underline px-3 py-1.5 hover:text-white transition-colors"
            >
              Membership
            </Link>
            <Link
              href="/#impact"
              className="nav-link-underline px-3 py-1.5 hover:text-white transition-colors"
            >
              Impact
            </Link>
            <Link
              href="/contact"
              className="nav-link-underline px-3 py-1.5 hover:text-white transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Right Social Pills (Instagram & Facebook) + Inline Pill Newsletter */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-3.5">
            <div className="flex items-center gap-2">
              <a
                href="https://www.instagram.com/okanaganfoodhub/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Okanagan Food Hub on Instagram"
                className="w-8 h-8 rounded-full bg-white/6 hover:bg-white/14 border border-white/10 flex items-center justify-center text-[#DCE6DA] hover:text-white transition-colors"
              >
                <BrandInstagram size={15} strokeWidth={1.75} />
              </a>
              <a
                href="https://www.facebook.com/people/Okanagan-Food-Hub/61583374157939/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Okanagan Food Hub on Facebook"
                className="w-8 h-8 rounded-full bg-white/6 hover:bg-white/14 border border-white/10 flex items-center justify-center text-[#DCE6DA] hover:text-white transition-colors"
              >
                <BrandFacebook size={15} strokeWidth={1.75} />
              </a>
            </div>

            <span
              aria-hidden="true"
              className="hidden sm:block h-5 w-px bg-white/12"
            />

            <form
              onSubmit={handleSubscribe}
              className="flex items-center rounded-full bg-white/8 border border-white/14 focus-within:border-[#8EC07C]/70 focus-within:bg-white/12 p-1 pl-3.5 transition-colors w-full sm:w-[238px]"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Join our newsletter
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (subscribed) setSubscribed(false);
                }}
                placeholder={subscribed ? "Subscribed!" : "Join newsletter..."}
                className="w-full min-w-0 text-[13px] text-white placeholder:text-[#A9BBA6] focus:outline-none bg-transparent pr-2"
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="w-7 h-7 rounded-full bg-[#75A761] hover:bg-[#669753] text-white flex items-center justify-center transition-colors shrink-0 cursor-pointer"
              >
                {subscribed ? (
                  <Check size={14} strokeWidth={2.3} />
                ) : (
                  <ArrowRight size={14} strokeWidth={2} />
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Contact, Legal & Mission Strip */}
        <div className="border-t border-white/10 py-3.5 flex flex-col lg:flex-row items-center justify-between gap-3 text-[12px] text-[#B8CBB5]">
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-4 gap-y-1.5">
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={13} className="text-[#8EC07C] shrink-0" />
              <span>15815 Hwy 97, Summerland, BC</span>
            </span>
            <a
              href="tel:+12504887615"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={13} className="text-[#8EC07C] shrink-0" />
              <span>+1 250-488-7615</span>
            </a>
            <a
              href="mailto:foodhub@localmotive.ca"
              className="inline-flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Mail size={13} className="text-[#8EC07C] shrink-0" />
              <span>foodhub@localmotive.ca</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-[#A8BEA4]">
            <p>&copy; 2026 Summerland Food Hub</p>
            <span aria-hidden="true" className="text-white/25">
              &bull;
            </span>
            <p className="inline-flex items-center gap-1.5">
              <span>Okanagan Food Hub</span>
              <Leaf size={13} className="text-[#8EC07C] shrink-0" />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
