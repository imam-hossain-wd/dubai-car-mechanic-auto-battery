// components/shared/FloatingActions/FloatingActions.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import {
  RiWhatsappFill,
  RiPhoneFill,
  RiArrowUpLine,
  RiCloseLine,
  RiRadarFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiMessageFill,
} from "@remixicon/react";

import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";

export default function FloatingButtons() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);

  const { numberCallLink, whatsappCallLink, displayNumber, responseTime } =
    SiteConfig;

  /* ============ Scroll detection ============ */
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 300;
      setIsVisible(scrolled);
      if (!scrolled) setIsOpen(false);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============ Auto-open once on desktop (helps conversion) ============ */
  useEffect(() => {
    if (hasAutoOpened || !isVisible) return;
    const isDesktop =
      typeof window !== "undefined" &&
      window.matchMedia("(min-width: 1024px)").matches;
    if (!isDesktop) return;
    const t = setTimeout(() => {
      setIsOpen(true);
      setHasAutoOpened(true);
    }, 2200);
    return () => clearTimeout(t);
  }, [isVisible, hasAutoOpened]);

  /* ============ Escape closes the console ============ */
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  }, []);

  const responseShort = responseTime.split(" ")[0] + " min";

  return (
    <>
      {/* ============================================================
          MOBILE / TABLET — bottom dispatch dock
      ============================================================ */}
      <div
        className={cn(
          "fixed inset-x-0 bottom-0 z-40 lg:hidden",
          "transition-transform duration-300 ease-out",
          isVisible ? "translate-y-0" : "translate-y-full"
        )}
      >
        {/* Soft backdrop gradient above the dock */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-t from-background via-background/80 to-transparent"
        />

        {/* Closed state — compact dual CTA */}
        <div
          className={cn(
            "relative border-t border-border bg-background/95 shadow-[0_-8px_30px_-12px] shadow-primary/25 backdrop-blur-xl transition-opacity duration-200",
            isOpen ? "pointer-events-none opacity-0" : "opacity-100"
          )}
        >
          <div className="mx-auto flex max-w-2xl items-center gap-2 px-3 py-2.5 sm:px-4">
            {/* Call */}
            <a
              href={numberCallLink}
              aria-label={`Call ${displayNumber}`}
              className="group flex h-12 flex-1 items-center gap-2.5 rounded-xl border border-primary/25 bg-primary/[0.06] pl-2.5 pr-3.5 text-left transition-colors active:scale-[0.98]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/30">
                <RiPhoneFill className="size-3.5" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
                  Call 24/7
                </span>
                <span className="block truncate text-[11.5px] font-bold text-foreground">
                  {displayNumber}
                </span>
              </span>
            </a>

            {/* WhatsApp */}
            <a
              href={whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="flex h-12 flex-1 items-center gap-2.5 rounded-xl bg-primary pl-2.5 pr-3.5 text-left shadow-lg shadow-primary/25 transition-colors active:scale-[0.98]"
            >
              <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
                <RiWhatsappFill className="size-3.5 text-primary-foreground" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-[9px] font-bold uppercase tracking-[0.16em] text-primary-foreground/70">
                  Chat now
                </span>
                <span className="block truncate text-[11.5px] font-bold text-primary-foreground">
                  WhatsApp
                </span>
              </span>
            </a>

            {/* Expand toggle */}
            <button
              type="button"
              onClick={() => setIsOpen(true)}
              aria-label="More contact options"
              aria-expanded={isOpen}
              className="flex size-12 shrink-0 items-center justify-center rounded-xl border border-border bg-card text-foreground transition-colors active:scale-[0.95]"
            >
              <RiArrowUpLine className="size-4" />
            </button>
          </div>
        </div>

        {/* Expanded state — dispatch sheet */}
        <div
          className={cn(
            "absolute inset-x-0 bottom-0 border-t border-border bg-background/98 shadow-[0_-10px_40px_-12px] shadow-primary/25 backdrop-blur-xl",
            "transition-transform duration-300 ease-out",
            isOpen ? "translate-y-0" : "translate-y-full"
          )}
          role="dialog"
          aria-label="Contact options"
          aria-hidden={!isOpen}
        >
          {/* Head rail */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-foreground">
                Dispatch · live
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="flex size-7 items-center justify-center rounded-md border border-border bg-background text-muted-foreground"
            >
              <RiCloseLine className="size-3.5" />
            </button>
          </div>

          {/* Contact ledger */}
          <ol className="divide-y divide-border">
            {/* Primary call */}
            <li>
              <a
                href={numberCallLink}
                className="flex items-center gap-3.5 px-4 py-3.5 transition-colors active:bg-primary/[0.05]"
              >
                <span className="font-mono text-[10px] font-bold tabular-nums text-primary/60">
                  01
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/25">
                  <RiPhoneFill className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Emergency line · 24/7
                  </p>
                  <p className="truncate text-[13.5px] font-bold text-foreground">
                    {displayNumber}
                  </p>
                </div>
              </a>
            </li>

            {/* WhatsApp */}
            <li>
              <a
                href={whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3.5 px-4 py-3.5 transition-colors active:bg-primary/[0.05]"
              >
                <span className="font-mono text-[10px] font-bold tabular-nums text-primary/60">
                  02
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <RiWhatsappFill className="size-4 text-primary" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    WhatsApp · ~1 min
                  </p>
                  <p className="truncate text-[13.5px] font-bold text-foreground">
                    Chat instantly
                  </p>
                </div>
              </a>
            </li>

            {/* Back to top */}
            <li>
              <button
                type="button"
                onClick={scrollToTop}
                className="flex w-full items-center gap-3.5 px-4 py-3.5 text-left transition-colors active:bg-primary/[0.05]"
              >
                <span className="font-mono text-[10px] font-bold tabular-nums text-primary/60">
                  03
                </span>
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <RiArrowUpLine className="size-4 text-primary" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                    Navigation
                  </p>
                  <p className="truncate text-[13.5px] font-bold text-foreground">
                    Back to top
                  </p>
                </div>
              </button>
            </li>
          </ol>

          {/* Trust footer */}
          <div className="flex items-center justify-between gap-3 border-t border-border bg-muted/30 px-4 py-2.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <RiTimeFill className="size-3 text-primary" />
              {responseShort} response
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiShieldCheckFill className="size-3 text-primary" />
              100% verified
            </span>
          </div>
        </div>
      </div>

      {/* ============================================================
          DESKTOP — dispatch console
      ============================================================ */}
      <div
        className={cn(
          "fixed bottom-8 right-6 z-40 hidden flex-col items-end gap-3 lg:flex xl:right-8",
          "transition-all duration-500 ease-out",
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0"
        )}
      >
        {/* Expanded console panel (sits above the toggle) */}
        <div
          className={cn(
            "w-[300px] origin-bottom-right overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-foreground/[0.10] backdrop-blur-xl",
            "transition-all duration-300 ease-out",
            isOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "pointer-events-none translate-y-2 scale-95 opacity-0"
          )}
          role="dialog"
          aria-label="Dispatch console"
          aria-hidden={!isOpen}
        >
          {/* Head rail */}
          <div className="flex items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-2.5">
            <div className="flex items-center gap-2">
              <RiRadarFill className="size-3.5 text-primary" />
              <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-foreground">
                Dispatch console
              </span>
            </div>
            <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Live
            </span>
          </div>

          {/* Call row — primary */}
          <a
            href={numberCallLink}
            className="group flex items-center gap-3 border-b border-border px-4 py-3.5 transition-colors hover:bg-primary/[0.05]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/25">
              <RiPhoneFill className="size-4" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Emergency line · 24/7
              </p>
              <p className="mt-0.5 truncate text-[13px] font-bold text-foreground">
                {displayNumber}
              </p>
            </div>
            <RiArrowUpLine className="size-3.5 rotate-45 text-muted-foreground/50 transition-all group-hover:text-primary" />
          </a>

          {/* WhatsApp row */}
          <a
            href={whatsappCallLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 border-b border-border px-4 py-3.5 transition-colors hover:bg-primary/[0.05]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <RiWhatsappFill className="size-4 text-primary" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                WhatsApp · ~1 min
              </p>
              <p className="mt-0.5 truncate text-[13px] font-bold text-foreground">
                Chat instantly
              </p>
            </div>
            <RiArrowUpLine className="size-3.5 rotate-45 text-muted-foreground/50 transition-all group-hover:text-primary" />
          </a>

          {/* Booking row */}
          <a
            href="/contact"
            className="group flex items-center gap-3 border-b border-border px-4 py-3.5 transition-colors hover:bg-primary/[0.05]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <RiMessageFill className="size-4 text-primary" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Book online
              </p>
              <p className="mt-0.5 truncate text-[13px] font-bold text-foreground">
                Book a mechanic
              </p>
            </div>
            <RiArrowUpLine className="size-3.5 rotate-45 text-muted-foreground/50 transition-all group-hover:text-primary" />
          </a>

          {/* Back to top row */}
          <button
            type="button"
            onClick={scrollToTop}
            className="group flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-primary/[0.05]"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
              <RiArrowUpLine className="size-4 text-primary" />
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                Navigation
              </p>
              <p className="mt-0.5 truncate text-[13px] font-bold text-foreground">
                Back to top
              </p>
            </div>
          </button>

          {/* Trust footer */}
          <div className="flex items-center justify-between gap-3 border-t border-border bg-muted/30 px-4 py-2.5 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <RiTimeFill className="size-3 text-primary" />
              {responseShort}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiShieldCheckFill className="size-3 text-primary" />
              100% verified
            </span>
          </div>
        </div>

        {/* Toggle button */}
        <button
          type="button"
          onClick={() => setIsOpen((v) => !v)}
          aria-label={isOpen ? "Close dispatch console" : "Open dispatch console"}
          aria-expanded={isOpen}
          className={cn(
            "group relative flex h-14 items-center gap-3 rounded-2xl pl-3 pr-4 shadow-xl transition-all duration-300",
            "hover:-translate-y-0.5",
            isOpen
              ? "bg-foreground text-background shadow-black/25"
              : "bg-primary text-primary-foreground shadow-primary/40"
          )}
        >
          {/* Pulsing ring (closed state only) */}
          {!isOpen && (
            <span
              aria-hidden
              className="absolute inset-0 -z-10 animate-ping rounded-2xl bg-primary/30"
            />
          )}

          {/* Icon slot */}
          <span className="relative flex size-9 items-center justify-center rounded-xl bg-primary-foreground/15">
            <span
              className={cn(
                "absolute transition-all duration-300",
                isOpen
                  ? "rotate-90 scale-0 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              )}
            >
              <RiRadarFill className="size-4" />
            </span>
            <span
              className={cn(
                "absolute transition-all duration-300",
                isOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-0 opacity-0"
              )}
            >
              <RiCloseLine className="size-4" />
            </span>
          </span>

          {/* Label */}
          <span className="flex flex-col items-start leading-none">
            <span
              className={cn(
                "text-[9px] font-bold uppercase tracking-[0.18em]",
                isOpen ? "text-background/60" : "text-primary-foreground/70"
              )}
            >
              {isOpen ? "Close" : "Contact"}
            </span>
            <span className="mt-1 text-[12px] font-bold">
              {isOpen ? "Console" : "24/7 dispatch"}
            </span>
          </span>
        </button>
      </div>
    </>
  );
}