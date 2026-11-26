"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, type FormEvent } from "react";
import {
  ArrowLeft,
  ArrowRight,
  BrandFacebook,
  BrandInstagram,
  Check,
  ExternalLink,
  Heart,
  Mail,
  MapPin,
  Phone,
  ShoppingCart,
} from "pulsoicon-react";
import BlurText from "@/components/BlurText";
import Magnet from "@/components/Magnet";
import SpotlightCard from "@/components/SpotlightCard";
import { Reveal } from "@/components/home/MotionPrimitives";

type TopicKey = "wholesale" | "volunteer" | "general";

const TOPICS: Array<{
  key: TopicKey;
  label: string;
  helper: string;
  placeholder: string;
}> = [
  {
    key: "wholesale",
    label: "Buy Wholesale",
    helper: "Sourcing Okanagan produce & regional food products for your business.",
    placeholder:
      "Tell us about your restaurant, market, or kitchen and the volume/items you'd like to source...",
  },
  {
    key: "volunteer",
    label: "Volunteer",
    helper: "Helping at the hub, community market days, or regional food events.",
    placeholder:
      "Share your availability, interests, and how you'd love to support the Food Hub...",
  },
  {
    key: "general",
    label: "General Inquiry",
    helper: "Questions about memberships, partnerships, or visiting Summerland Food Hub.",
    placeholder: "Enter your message",
  },
];

const PLACE_ID = "ChIJAQwtMBdlglQR-3_Z279G0kY";
const HUB_ADDRESS = "9311 Jones Flat Road, Summerland, BC, V0H 1Z5";
const MAP_EMBED_URL =
  "https://maps.google.com/maps?q=9311+Jones+Flat+Road,+Summerland,+BC,+V0H+1Z5&t=&z=15&ie=UTF8&iwloc=&output=embed";
const MAP_OPEN_URL = `https://www.google.com/maps/search/?api=1&query=9311+Jones+Flat+Road,+Summerland,+BC,+V0H+1Z5&query_place_id=${PLACE_ID}`;
const MAP_DIRECTIONS_URL = `https://www.google.com/maps/dir/?api=1&destination=9311+Jones+Flat+Road,+Summerland,+BC,+V0H+1Z5&destination_place_id=${PLACE_ID}`;

export function ContactPage() {
  const [topic, setTopic] = useState<TopicKey>("general");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const raw = new URLSearchParams(window.location.search).get("topic");
    const nextTopic: TopicKey =
      raw === "wholesale" || raw === "volunteer" ? raw : "general";

    const frameId = requestAnimationFrame(() => {
      setTopic(nextTopic);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  const activeTopic = TOPICS.find((item) => item.key === topic) ?? TOPICS[2];

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!firstName.trim() || !email.trim() || !message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="flex-1 bg-[#F8F7F2] text-[#193827]">
      <main className="bg-cream-paper pt-32 pb-20 lg:pt-38 lg:pb-24">
        <div className="mx-auto max-w-[1400px] px-6 sm:px-10 lg:px-14">
          {/* Editorial Top Header */}
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#5A8E50] transition-colors hover:text-[#193827]"
              >
                <ArrowLeft className="h-3.5 w-3.5" />
                Back to Home
              </Link>

              <span className="inline-flex items-center gap-2 rounded-full border border-[#193827]/12 bg-white/75 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#193827]/75">
                <MapPin className="h-3.5 w-3.5 text-[#5A8E50]" />
                {HUB_ADDRESS}
              </span>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-12 lg:items-end">
              <div className="lg:col-span-8">
                <h1 className="font-serif text-[2.65rem] leading-[1.03] tracking-tight text-[#193827] sm:text-6xl">
                  <BlurText
                    text="Connect with the Summerland Food Hub."
                    as="span"
                    trigger="load"
                    effect="focus"
                    animateBy="words"
                    delay={50}
                    stepDuration={0.35}
                    className="inline-flex flex-wrap"
                  />
                </h1>
              </div>

              <p className="text-base leading-relaxed text-[#193827]/78 lg:col-span-4 lg:text-right">
                Wholesale sourcing, volunteer shifts, or general questions — send a
                note directly to our team or plan your visit along Jones Flat Road.
              </p>
            </div>
          </Reveal>

          {/* Split Showcase: Dark Orchard Form + Interactive Google Map */}
          <Reveal delay={0.08}>
            <section className="mt-10 overflow-hidden rounded-[32px] border border-[#193827]/15 bg-[#12291C] shadow-[0_28px_70px_-32px_rgba(18,41,28,0.45)]">
              <div className="grid lg:grid-cols-12">
                {/* Left Column: Dark Orchard Backdrop & 2-Column Form */}
                <div className="relative overflow-hidden p-7 sm:p-10 lg:col-span-7 lg:p-12">
                  <Image
                    src="/images/home/okanagan-landscape.jpg"
                    alt="Okanagan orchard rows surrounding Summerland Food Hub"
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="object-cover object-center opacity-50"
                    priority
                  />
                  {/* Deep organic evergreen overlay matching the demo warmth + brand contrast */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-br from-[#0F2318]/92 via-[#152E20]/84 to-[#193827]/88"
                  />
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-4 rounded-[22px] border border-[#C6E59F]/15"
                  />

                  <div className="relative z-10">
                    {/* Topic Selector Pills */}
                    <div className="flex flex-wrap items-center gap-2">
                      {TOPICS.map((item) => {
                        const active = topic === item.key;
                        return (
                          <button
                            key={item.key}
                            type="button"
                            onClick={() => {
                              setTopic(item.key);
                              setSubmitted(false);
                            }}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-wide transition-all ${
                              active
                                ? "bg-[#9AD158] text-[#12291C] shadow-sm"
                                : "border border-white/20 bg-white/10 text-white/85 backdrop-blur-sm hover:border-[#C6E59F]/50 hover:bg-white/15"
                            }`}
                          >
                            {item.label}
                          </button>
                        );
                      })}
                    </div>

                    <div className="mt-6">
                      <h2 className="font-serif text-3xl tracking-tight text-white sm:text-4xl">
                        Get In Touch
                      </h2>
                      <p className="mt-2 max-w-xl text-sm leading-relaxed text-[#E9EFE1]/80">
                        {activeTopic.helper}
                      </p>
                    </div>

                    {submitted ? (
                      <div className="mt-8 rounded-2xl border border-[#C6E59F]/30 bg-[#12291C]/80 p-7 text-center backdrop-blur-md">
                        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#9AD158] text-[#12291C]">
                          <Check className="h-6 w-6" />
                        </div>
                        <h3 className="mt-4 font-serif text-2xl text-white">
                          Message received, {firstName}.
                        </h3>
                        <p className="mx-auto mt-2 max-w-md text-sm leading-relaxed text-[#E9EFE1]/80">
                          Your <strong className="text-white">{activeTopic.label}</strong>{" "}
                          note is ready for our coordinators at{" "}
                          <span className="font-medium text-[#C6E59F]">
                            foodhub@localmotive.ca
                          </span>
                          . We look forward to connecting with you soon.
                        </p>
                        <button
                          type="button"
                          onClick={() => {
                            setSubmitted(false);
                            setFirstName("");
                            setLastName("");
                            setPhone("");
                            setEmail("");
                            setMessage("");
                          }}
                          className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-white/20"
                        >
                          Send another message
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="mt-7 space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="contact-first-name" className="sr-only">
                              First name
                            </label>
                            <input
                              id="contact-first-name"
                              type="text"
                              required
                              value={firstName}
                              onChange={(e) => setFirstName(e.target.value)}
                              placeholder="First name"
                              className="w-full rounded-xl border border-white/15 bg-white px-4 py-3.5 text-sm text-[#193827] placeholder:text-[#193827]/50 shadow-sm outline-none transition-all focus:border-[#9AD158] focus:ring-2 focus:ring-[#9AD158]/40"
                            />
                          </div>

                          <div>
                            <label htmlFor="contact-last-name" className="sr-only">
                              Last name
                            </label>
                            <input
                              id="contact-last-name"
                              type="text"
                              value={lastName}
                              onChange={(e) => setLastName(e.target.value)}
                              placeholder="Last name"
                              className="w-full rounded-xl border border-white/15 bg-white px-4 py-3.5 text-sm text-[#193827] placeholder:text-[#193827]/50 shadow-sm outline-none transition-all focus:border-[#9AD158] focus:ring-2 focus:ring-[#9AD158]/40"
                            />
                          </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                          <div>
                            <label htmlFor="contact-phone" className="sr-only">
                              Phone number
                            </label>
                            <input
                              id="contact-phone"
                              type="tel"
                              value={phone}
                              onChange={(e) => setPhone(e.target.value)}
                              placeholder="Enter your number"
                              className="w-full rounded-xl border border-white/15 bg-white px-4 py-3.5 text-sm text-[#193827] placeholder:text-[#193827]/50 shadow-sm outline-none transition-all focus:border-[#9AD158] focus:ring-2 focus:ring-[#9AD158]/40"
                            />
                          </div>

                          <div>
                            <label htmlFor="contact-email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="contact-email"
                              type="email"
                              required
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              placeholder="Enter your email"
                              className="w-full rounded-xl border border-white/15 bg-white px-4 py-3.5 text-sm text-[#193827] placeholder:text-[#193827]/50 shadow-sm outline-none transition-all focus:border-[#9AD158] focus:ring-2 focus:ring-[#9AD158]/40"
                            />
                          </div>
                        </div>

                        <div>
                          <label htmlFor="contact-message" className="sr-only">
                            Message
                          </label>
                          <textarea
                            id="contact-message"
                            rows={5}
                            required
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder={activeTopic.placeholder}
                            className="w-full rounded-xl border border-white/15 bg-white px-4 py-3.5 text-sm text-[#193827] placeholder:text-[#193827]/50 shadow-sm outline-none transition-all focus:border-[#9AD158] focus:ring-2 focus:ring-[#9AD158]/40"
                          />
                        </div>

                        <div className="pt-1">
                          <Magnet padding={40} magnetStrength={0.18} maxOffset={12}>
                            <button
                              type="submit"
                              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#9AD158] px-6 py-4 text-sm font-semibold tracking-wide text-[#12291C] shadow-[0_14px_30px_-10px_rgba(154,209,88,0.55)] transition-colors hover:bg-[#A9DE69]"
                            >
                              Send Message
                              <ArrowRight className="h-4 w-4" />
                            </button>
                          </Magnet>
                        </div>
                      </form>
                    )}
                  </div>
                </div>

                {/* Right Column: Interactive Google Map + Place Details Card */}
                <div className="relative min-h-[420px] bg-[#E9EFE1] lg:col-span-5 lg:min-h-[600px]">
                  <iframe
                    title="Summerland Food Hub location map — 9311 Jones Flat Road, Summerland, BC"
                    src={MAP_EMBED_URL}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full min-h-[420px] w-full border-0 lg:min-h-[600px]"
                    allowFullScreen
                  />

                  {/* Floating Google Place Card matching gmp-place-details-compact */}
                  <div className="pointer-events-auto absolute top-4 left-4 right-4 max-w-[300px] rounded-2xl border border-[#193827]/12 bg-[#F8F7F2]/96 p-4 shadow-[0_16px_38px_-14px_rgba(18,41,28,0.35)] backdrop-blur-md">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#5A8E50]">
                          Summerland Food Hub
                        </p>
                        <h3 className="mt-0.5 text-sm font-semibold text-[#193827]">
                          9311 Jones Flat Rd
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-[#193827]/72">
                          9311 Jones Flat Road, Summerland, BC V0H 1Z5, Canada
                        </p>
                      </div>
                    </div>

                    <div className="mt-3.5 flex items-center gap-2">
                      <a
                        href={MAP_OPEN_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full bg-[#193827] px-3.5 py-2 text-xs font-semibold text-[#F8F7F2] transition-colors hover:bg-[#5A8E50]"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                        Open in Maps
                      </a>

                      <a
                        href={MAP_DIRECTIONS_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Get directions to 9311 Jones Flat Road"
                        title="Get Directions"
                        className="inline-flex h-8.5 w-8.5 shrink-0 items-center justify-center rounded-full border border-[#193827]/15 bg-white text-[#193827] transition-colors hover:border-[#5A8E50] hover:bg-[#E9EFE1]"
                      >
                        <ArrowRight className="h-4 w-4 -rotate-45 text-[#5A8E50]" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </Reveal>

          {/* Direct Contact Details Strip */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Reveal delay={0.1}>
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90, 142, 80, 0.14)"
                className="flex h-full flex-col justify-between rounded-[24px] border border-[#193827]/10 bg-white/85 p-7 shadow-sm"
              >
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9EFE1] text-[#193827]">
                    <MapPin className="h-5 w-5 text-[#5A8E50]" />
                  </span>
                  <h2 className="mt-4 font-serif text-2xl text-[#193827]">
                    Address
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#193827]/80">
                    {HUB_ADDRESS}
                  </p>
                </div>
                <a
                  href={MAP_OPEN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#5A8E50] transition-colors hover:text-[#193827]"
                >
                  View on Google Maps
                  <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.16}>
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90, 142, 80, 0.14)"
                className="flex h-full flex-col justify-between rounded-[24px] border border-[#193827]/10 bg-white/85 p-7 shadow-sm"
              >
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9EFE1] text-[#193827]">
                    <Mail className="h-5 w-5 text-[#5A8E50]" />
                  </span>
                  <h2 className="mt-4 font-serif text-2xl text-[#193827]">
                    Email Us
                  </h2>
                  <p className="mt-2 text-sm leading-relaxed text-[#193827]/80">
                    For wholesale orders, grower onboarding, volunteers, and
                    general hub inquiries.
                  </p>
                </div>
                <a
                  href="mailto:foodhub@localmotive.ca"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-[#193827] underline decoration-[#5A8E50]/50 underline-offset-4 transition-colors hover:text-[#5A8E50]"
                >
                  foodhub@localmotive.ca
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </SpotlightCard>
            </Reveal>

            <Reveal delay={0.22}>
              <SpotlightCard
                theme="light"
                spotlightColor="rgba(90, 142, 80, 0.14)"
                className="flex h-full flex-col justify-between rounded-[24px] border border-[#193827]/10 bg-white/85 p-7 shadow-sm"
              >
                <div>
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-[#E9EFE1] text-[#193827]">
                    <Phone className="h-5 w-5 text-[#5A8E50]" />
                  </span>
                  <h2 className="mt-4 font-serif text-2xl text-[#193827]">
                    Call &amp; Follow
                  </h2>
                  <a
                    href="tel:+12504887615"
                    className="mt-2 inline-block text-sm font-semibold text-[#193827] transition-colors hover:text-[#5A8E50]"
                  >
                    +1 250-488-7615
                  </a>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2.5">
                  <a
                    href="https://www.instagram.com/okanaganfoodhub/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#193827]/12 bg-[#F8F7F2] px-3.5 py-2 text-xs font-medium text-[#193827] transition-colors hover:border-[#5A8E50] hover:bg-[#E9EFE1]"
                  >
                    <BrandInstagram className="h-3.5 w-3.5 text-[#5A8E50]" />
                    @okanaganfoodhub
                  </a>
                  <a
                    href="https://www.facebook.com/people/Okanagan-Food-Hub/61583374157939/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[#193827]/12 bg-[#F8F7F2] px-3.5 py-2 text-xs font-medium text-[#193827] transition-colors hover:border-[#5A8E50] hover:bg-[#E9EFE1]"
                  >
                    <BrandFacebook className="h-3.5 w-3.5 text-[#5A8E50]" />
                    Facebook
                  </a>
                </div>
              </SpotlightCard>
            </Reveal>
          </div>

          {/* Quick Pathway Strip */}
          <Reveal delay={0.26}>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-[24px] border border-[#193827]/10 bg-[#E9EFE1]/65 px-7 py-5">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#193827] text-[#C6E59F]">
                  <Heart className="h-4 w-4" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[#193827]">
                    Looking to join the hub or shop farm-direct CSA boxes?
                  </p>
                  <p className="text-xs text-[#193827]/72">
                    Explore our co-op membership options or order fresh weekly produce.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="/membership"
                  className="inline-flex items-center gap-2 rounded-full border border-[#193827]/20 bg-white px-4 py-2 text-xs font-semibold text-[#193827] transition-colors hover:border-[#5A8E50] hover:bg-[#F8F7F2]"
                >
                  Become a Member
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
                <a
                  href="https://localmotive.ca/csa-box"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#193827] px-4 py-2 text-xs font-semibold text-[#F8F7F2] transition-colors hover:bg-[#5A8E50]"
                >
                  <ShoppingCart className="h-3.5 w-3.5 text-[#C6E59F]" />
                  Buy Farm Direct
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>
    </div>
  );
}
