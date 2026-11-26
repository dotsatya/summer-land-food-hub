"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Check, Mail, MapPin, Sparkles, X } from "pulsoicon-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { OFFER_SERVICES, type OfferService } from "./hubData";

export function StoryModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-2xl rounded-3xl bg-[#F8F7F2] border border-[#E4E0D4] p-0 gap-0 overflow-hidden shadow-2xl"
      >
        <DialogClose
          render={
            <button
              type="button"
              aria-label="Close story modal"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#193827] flex items-center justify-center shadow-md cursor-pointer"
            />
          }
        >
          <X size={18} />
        </DialogClose>

        <div className="relative h-56 sm:h-64 w-full">
          <Image
            src="/images/home/okanagan-landscape.jpg"
            alt="Okanagan Valley orchards and lake in Summerland, BC"
            fill
            sizes="(max-width: 768px) 100vw, 672px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12291C]/88 via-[#12291C]/30 to-transparent" />
          <DialogHeader className="absolute bottom-5 left-6 right-6 text-white text-left gap-1">
            <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#BEE0B3]">
              <Sparkles size={13} /> Our Story &bull; Summerland, BC
            </span>
            <DialogTitle className="font-serif text-[26px] sm:text-[30px] font-semibold leading-tight text-white">
              Rooted in the Okanagan Food System
            </DialogTitle>
          </DialogHeader>
        </div>

        <div className="p-6 sm:p-8 space-y-4 text-[#4E5E52] text-[15px] leading-relaxed">
          <DialogDescription className="text-[#4E5E52] text-[15px] leading-relaxed">
            Located at{" "}
            <strong className="text-[#193827]">15815 Hwy 97</strong>{" "}
            in Summerland, the Summerland Food Hub unites local growers, artisan
            makers, and regional partners including{" "}
            <strong className="text-[#193827]">LocalMotive</strong>,{" "}
            <strong className="text-[#193827]">FarmCraft</strong>, and the{" "}
            <strong className="text-[#193827]">
              Okanagan Food &amp; Innovation Centre
            </strong>
            .
          </DialogDescription>
          <p>
            By sharing pay-per-use commercial kitchens, cold storage, and
            regional distribution, we help reduce post-harvest food waste while
            keeping 35% of local food circulating within our region.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-[13.5px] text-[#193827] font-medium">
            <span className="inline-flex items-center gap-1.5 bg-[#EBF0E1] px-3.5 py-1.5 rounded-full">
              <MapPin size={15} className="text-[#5A8E50]" />
              15815 Hwy 97, Summerland, BC
            </span>
            <a
              href="mailto:foodhub@localmotive.ca"
              className="inline-flex items-center gap-1.5 bg-[#EBF0E1] hover:bg-[#DCE7CE] px-3.5 py-1.5 rounded-full transition-colors"
            >
              <Mail size={15} className="text-[#5A8E50]" />
              foodhub@localmotive.ca
            </a>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export function ServiceDetailModal({
  service,
  onSelectService,
  onClose,
}: {
  service: OfferService | null;
  onSelectService: (s: OfferService) => void;
  onClose: () => void;
}) {
  return (
    <Dialog open={Boolean(service)} onOpenChange={(isOpen) => !isOpen && onClose()}>
      <DialogContent
        showCloseButton={false}
        className="sm:max-w-2xl rounded-3xl bg-[#F8F7F2] border border-[#E4E0D4] p-0 gap-0 overflow-hidden shadow-2xl"
      >
        {service && (
          <>
            <DialogClose
              render={
                <button
                  type="button"
                  aria-label="Close service modal"
                  className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 hover:bg-white text-[#193827] flex items-center justify-center shadow-md cursor-pointer"
                />
              }
            >
              <X size={18} />
            </DialogClose>

            <div className="grid grid-cols-1 sm:grid-cols-12">
              <div className="relative sm:col-span-5 min-h-[220px]">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 280px"
                  className="object-cover"
                />
              </div>

              <div className="sm:col-span-7 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  {/* Service Switcher Pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4 pr-8">
                    {OFFER_SERVICES.map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => onSelectService(item)}
                        className={`px-3 py-1 rounded-full text-[12px] font-medium transition-colors cursor-pointer ${
                          item.id === service.id
                            ? "bg-[#193827] text-white"
                            : "bg-[#EAE7DC] text-[#4E5E52] hover:bg-[#DFDBD0]"
                        }`}
                      >
                        {item.title}
                      </button>
                    ))}
                  </div>

                  <DialogHeader className="text-left gap-1.5">
                    <DialogTitle className="font-serif text-[26px] font-semibold text-[#193827] leading-tight">
                      {service.title}
                    </DialogTitle>
                    <DialogDescription className="text-[14.5px] leading-relaxed text-[#4E5E52]">
                      {service.summary}
                    </DialogDescription>
                  </DialogHeader>

                  <ul className="mt-4 space-y-2">
                    {service.highlights.map((bullet) => (
                      <li
                        key={bullet}
                        className="flex items-start gap-2.5 text-[13.5px] text-[#193827]"
                      >
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-[#E3ECDA] text-[#3B6C3E] flex items-center justify-center shrink-0">
                          <Check size={12} strokeWidth={2.4} />
                        </span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#E4E0D4] flex items-center justify-between gap-3">
                  <span className="font-mono text-[12px] text-[#526256]">
                    foodhub@localmotive.ca
                  </span>
                  <Link
                    href="/contact"
                    onClick={onClose}
                    className="rounded-full bg-[#193827] hover:bg-[#234D36] text-white text-[13.5px] font-medium px-4.5 py-2 transition-colors"
                  >
                    Inquire Now
                  </Link>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
