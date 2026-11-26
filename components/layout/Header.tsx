"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, ChevronDown, Menu, X } from "pulsoicon-react";
import Magnet from "@/components/Magnet";
import { FoodHubLogoMark } from "@/components/home/BrandMarks";
import { NAV_ITEMS, type NavDropdownItem, type NavItem } from "./navData";
import { EASE_ORGANIC } from "@/components/home/MotionPrimitives";

const SECTION_TO_NAV_LABEL: Array<{ id: string; label: string }> = [
  { id: "about", label: "About" },
  { id: "offer", label: "Services" },
  { id: "ecosystem", label: "About" },
  { id: "market", label: "The Market" },
  { id: "get-involved", label: "Community" },
];

function matchRouteToNav(pathname: string, item: NavItem): boolean {
  if (pathname === "/") return false;
  if (pathname.startsWith("/membership") || pathname.startsWith("/contact")) {
    return item.label === "Community";
  }
  if (
    item.items?.some(
      (sub) =>
        !sub.external &&
        sub.href !== "/" &&
        !sub.href.startsWith("/#") &&
        pathname === sub.href.split("?")[0],
    )
  ) {
    return true;
  }
  const slug = `/${item.label.toLowerCase().replace(/\s+/g, "-")}`;
  return (
    pathname === item.href ||
    pathname === slug ||
    pathname.startsWith(`${slug}/`)
  );
}

function isSubItemActive(
  sub: NavDropdownItem,
  pathname: string,
  search: string,
  hash: string,
): boolean {
  if (sub.external) return false;

  const [rawPath, rawHash] = sub.href.split("#");
  if (rawHash) {
    return pathname === "/" && hash === `#${rawHash}`;
  }

  const [subPath, subQuery] = rawPath.split("?");
  if (subQuery) {
    return pathname === subPath && search === `?${subQuery}`;
  }

  if (subPath === "/about") {
    return pathname === "/about";
  }

  return pathname === subPath || pathname.startsWith(`${subPath}/`);
}

export function Header() {
  const pathname = usePathname();
  const prefersReduced = useReducedMotion();
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSectionLabel, setActiveSectionLabel] = useState<string | null>(
    null,
  );
  const [activeSearch, setActiveSearch] = useState("");
  const [activeHash, setActiveHash] = useState("");
  const isManualScrollRef = useRef(false);
  const lockTimerRef = useRef<number | null>(null);

  const lockScrollSpy = (ms = 800) => {
    isManualScrollRef.current = true;
    if (lockTimerRef.current !== null) {
      window.clearTimeout(lockTimerRef.current);
    }
    lockTimerRef.current = window.setTimeout(() => {
      isManualScrollRef.current = false;
    }, ms);
  };

  const routeActiveLabel =
    NAV_ITEMS.find((item) => matchRouteToNav(pathname, item))?.label ?? null;
  const activeLabel = routeActiveLabel ?? activeSectionLabel;

  useEffect(() => {
    const syncFromScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      if (pathname !== "/" || isManualScrollRef.current) return;

      if (y < 220) {
        setActiveSectionLabel(null);
        return;
      }

      const triggerLine = window.innerHeight * 0.36;
      let currentLabel: string | null = null;

      for (const { id, label } of SECTION_TO_NAV_LABEL) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerLine && rect.bottom > 100) {
          currentLabel = label;
        }
      }

      if (
        window.innerHeight + y >=
        document.documentElement.scrollHeight - 40
      ) {
        currentLabel = "Community";
      }

      setActiveSectionLabel(currentLabel);
    };

    const syncFromHash = () => {
      setActiveSearch(window.location.search);
      setActiveHash(window.location.hash);
      if (pathname !== "/") return;
      const hash = window.location.hash;
      if (!hash) return;
      const matched = SECTION_TO_NAV_LABEL.find((s) => `#${s.id}` === hash);
      if (matched) {
        lockScrollSpy(750);
        setActiveSectionLabel(matched.label);
      }
    };

    const frameId = requestAnimationFrame(() => {
      syncFromScroll();
      syncFromHash();
    });
    window.addEventListener("scroll", syncFromScroll, { passive: true });
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", syncFromScroll);
      window.removeEventListener("hashchange", syncFromHash);
      if (lockTimerRef.current !== null) {
        window.clearTimeout(lockTimerRef.current);
      }
    };
  }, [pathname]);

  const handleNavClick = (label: string, href: string) => {
    setOpenDropdown(null);
    setMobileOpen(false);
    const [, query] = href.split("#")[0].split("?");
    setActiveSearch(query ? `?${query}` : "");
    const [, hashPart] = href.split("#");
    setActiveHash(hashPart ? `#${hashPart}` : "");
    if (href.startsWith("#") || href.startsWith("/#")) {
      lockScrollSpy(800);
      setActiveSectionLabel(label);
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F8F7F2]/92 backdrop-blur-md border-b border-[#E4E0D4]/90 shadow-[0_4px_24px_rgba(25,56,39,0.05)] py-3"
          : "bg-gradient-to-b from-[#F8F7F2]/95 via-[#F8F7F2]/75 to-transparent py-4"
      }`}
    >
      <div className="mx-auto max-w-[1320px] px-5 sm:px-8 lg:px-10 flex items-center justify-between gap-4">
        {/* Brand Logo */}
        <Link
          href="/"
          onClick={() => {
            lockScrollSpy(650);
            setActiveSectionLabel(null);
          }}
          className="flex items-center gap-2.5 shrink-0 group focus:outline-none"
          aria-label="Summerland Food Hub Home"
        >
          <FoodHubLogoMark className="w-10 h-10 shrink-0 transition-transform duration-300 group-hover:scale-105" />
          <Image
            src="/images/food-hub-logo-green.png"
            alt="Summerland Food Hub — Eat. Drink. Make. Here."
            width={762}
            height={208}
            priority
            className="h-9 sm:h-10 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <nav
          aria-label="Primary Navigation"
          className="hidden lg:flex items-center gap-1"
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {NAV_ITEMS.map((item) => {
            const hasDropdown = Boolean(item.items?.length);
            const isOpen = openDropdown === item.label;
            const isActive = activeLabel === item.label;

            return (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() =>
                  hasDropdown
                    ? setOpenDropdown(item.label)
                    : setOpenDropdown(null)
                }
              >
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => handleNavClick(item.label, item.href)}
                  className={`relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full text-[14.5px] transition-colors duration-200 ${
                    isActive
                      ? "font-semibold text-[#193827]"
                      : "nav-link-underline font-medium text-[#193827]/80 hover:text-[#193827] hover:bg-[#193827]/[0.04]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-nav-pill"
                      transition={
                        prefersReduced
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 380, damping: 32 }
                      }
                      className="absolute inset-0 rounded-full bg-[#E9EFE1] border border-[#5A8E50]/35 shadow-[0_2px_10px_rgba(25,56,39,0.06)] -z-10"
                      aria-hidden="true"
                    />
                  )}

                  <span>{item.label}</span>
                  {hasDropdown && (
                    <ChevronDown
                      size={14}
                      strokeWidth={2}
                      className={`transition-transform duration-200 ${
                        isActive ? "text-[#193827]" : "text-[#526256]"
                      } ${isOpen ? "rotate-180" : ""}`}
                    />
                  )}
                </Link>

                <AnimatePresence>
                  {hasDropdown && isOpen && item.items && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.98 }}
                      transition={{ duration: 0.18, ease: EASE_ORGANIC }}
                      className="absolute left-0 top-full pt-2 w-72 z-50"
                    >
                      <div className="rounded-2xl bg-[#FFFFFF] border border-[#E4E0D4] shadow-[0_18px_40px_rgba(18,41,28,0.12)] p-2 space-y-0.5">
                        {item.items.map((sub) => {
                          const isSubActive = isSubItemActive(
                            sub,
                            pathname,
                            activeSearch,
                            activeHash,
                          );

                          return sub.external ? (
                            <a
                              key={sub.label}
                              href={sub.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={() => setOpenDropdown(null)}
                              className="block rounded-xl px-3.5 py-2.5 hover:bg-[#F3F1E8] transition-colors group"
                            >
                              <div className="text-[13.5px] font-semibold text-[#193827] group-hover:text-[#2D5E3F]">
                                {sub.label}
                              </div>
                              {sub.description && (
                                <div className="text-[12px] text-[#526256] mt-0.5 leading-snug">
                                  {sub.description}
                                </div>
                              )}
                            </a>
                          ) : (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              aria-current={isSubActive ? "page" : undefined}
                              onClick={() =>
                                handleNavClick(item.label, sub.href)
                              }
                              className={`block rounded-xl px-3.5 py-2.5 transition-colors group ${
                                isSubActive
                                  ? "bg-[#E9EFE1] border border-[#5A8E50]/35 shadow-[0_2px_10px_rgba(25,56,39,0.06)]"
                                  : "border border-transparent hover:bg-[#F3F1E8]"
                              }`}
                            >
                              <div className="flex items-center gap-2 text-[13.5px] font-semibold text-[#193827] group-hover:text-[#2D5E3F]">
                                {isSubActive && (
                                  <span
                                    className="w-1.5 h-1.5 rounded-full bg-[#5A8E50] shrink-0"
                                    aria-hidden="true"
                                  />
                                )}
                                <span>{sub.label}</span>
                              </div>
                              {sub.description && (
                                <div className="text-[12px] text-[#526256] mt-0.5 leading-snug">
                                  {sub.description}
                                </div>
                              )}
                            </Link>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </nav>

        {/* Right CTA & Mobile Trigger */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block">
            <Magnet padding={36} magnetStrength={4} maxOffset={7}>
              <Link
                href="/membership"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[14px] font-medium px-5 py-2.5 shadow-[0_6px_18px_rgba(25,56,39,0.2)] transition-all duration-200 hover:-translate-y-0.5 group"
              >
                <span>Get Involved</span>
                <ArrowRight
                  size={15}
                  strokeWidth={2}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </Link>
            </Magnet>
          </div>

          <button
            type="button"
            aria-label={
              mobileOpen ? "Close navigation menu" : "Open navigation menu"
            }
            onClick={() => setMobileOpen((prev) => !prev)}
            className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#D8D3C4] bg-white/80 text-[#193827] hover:bg-white transition-colors cursor-pointer"
          >
            {mobileOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: EASE_ORGANIC }}
            className="lg:hidden overflow-hidden bg-[#F8F7F2] border-b border-[#E4E0D4]"
          >
            <div className="px-6 py-5 space-y-1.5">
              {NAV_ITEMS.map((item) => {
                const isActive = activeLabel === item.label;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    onClick={() => handleNavClick(item.label, item.href)}
                    className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-[16px] transition-colors ${
                      isActive
                        ? "bg-[#E9EFE1] border border-[#5A8E50]/30 font-semibold text-[#193827]"
                        : "font-medium text-[#193827] hover:bg-[#EFECE2]/60"
                    }`}
                  >
                    <span className="inline-flex items-center gap-2">
                      {isActive && (
                        <span
                          className="w-1.5 h-1.5 rounded-full bg-[#5A8E50]"
                          aria-hidden="true"
                        />
                      )}
                      <span>{item.label}</span>
                    </span>
                    <ArrowRight size={15} className="text-[#5A8E50]" />
                  </Link>
                );
              })}
              <div className="pt-3">
                <Link
                  href="/membership"
                  onClick={() => setMobileOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-[#193827] text-white text-[14.5px] font-medium px-5 py-3"
                >
                  <span>Become a Member</span>
                  <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
