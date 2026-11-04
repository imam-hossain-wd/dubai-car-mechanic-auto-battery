import Link from "next/link";
import Image from "next/image";
import {
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiBatteryChargeFill,
  RiMapPinFill,
  RiFlashlightFill,
  RiCheckDoubleFill,
  RiSteering2Fill,
} from "@remixicon/react";

import { heroBanner } from "@/config/imageConfig";
import { SiteConfig } from "@/config/siteConfig";


const STATS = [
  { icon: RiTimeFill, value: "5–30", unit: "min", label: "Response" },
  { icon: RiBatteryChargeFill, value: "100", unit: "%", label: "Genuine parts" },
  { icon: RiSteering2Fill, value: "90", unit: "%", label: "Onsite fix rate" },
] as const;

const TRUST = [
  "24/7 dispatch across Dubai",
  "No towing required",
  "Transparent upfront pricing",
] as const;

export function Hero() {
  const {
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    city,
    serviceAreas,
  } = SiteConfig;

  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-background"
    >
      {/* ==============================================================
          BACKGROUND — blueprint grid + route lines (CSS/SVG only)
      ============================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Blueprint grid */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--border) 60%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--border) 60%, transparent) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 30%, transparent 85%)",
          }}
        />
        {/* Route path accent */}
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 text-primary/40 lg:block"
          viewBox="0 0 600 800"
          fill="none"
          preserveAspectRatio="xMidYMid slice"
        >
          <path
            d="M-40 620 C 140 560, 260 500, 340 340 S 520 60, 700 20"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="6 10"
          />
          <path
            d="M-40 700 C 180 660, 320 560, 420 380 S 560 120, 760 60"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
          <circle cx="340" cy="340" r="4" fill="currentColor" />
          <circle cx="420" cy="380" r="3" fill="currentColor" fillOpacity="0.6" />
        </svg>
        {/* Warm corner glow */}
        <div className="absolute -top-24 right-0 h-[520px] w-[520px] rounded-full bg-primary/[0.10] blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-primary/[0.06] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
        {/* ============================================================
            TOP BAR — live status rail (mobile-first, inline)
        ============================================================ */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border/70 py-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/[0.06] px-3 py-1.5">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-primary">
              Live dispatch · {city}
            </span>
          </div>

          <div className="hidden items-center gap-5 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted-foreground sm:flex">
            <span className="inline-flex items-center gap-1.5">
              <RiFlashlightFill className="size-3 text-primary" />
              5–30 min arrival
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiShieldCheckFill className="size-3 text-primary" />
              Certified mechanics
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiMapPinFill className="size-3 text-primary" />
              {serviceAreas.length}+ areas
            </span>
          </div>
        </div>

        {/* ============================================================
            MAIN — editorial 12-col grid
        ============================================================ */}
        <div className="grid grid-cols-1 gap-12 py-12 md:py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
          {/* ---------------------------------------------------------
              LEFT — oversized typographic stack
          --------------------------------------------------------- */}
          <div className="lg:col-span-7 lg:pr-6">
            {/* Kicker */}
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Dubai Car Mechanic &amp; Auto Battery
              </span>
            </div>

            {/* Headline — oversized, editorial */}
            <h1
              id="hero-title"
              className="mt-6 font-serif text-[clamp(2.6rem,6.4vw,5.2rem)] font-bold leading-[0.98] -tracking-[0.03em] text-foreground"
            >
              Roadside{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">
                  rescue
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 300 24"
                  className="absolute -bottom-1 left-0 z-0 h-3 w-full text-primary/25"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 16 C 60 4, 120 22, 180 12 S 260 4, 298 14"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              delivered to
              <br />
              your <span className="text-primary">doorstep.</span>
            </h1>

            <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground md:text-base">
              Fast, certified mobile car repair &amp; battery replacement across
              Dubai. We come to you in{" "}
              <span className="font-semibold text-foreground">
                5–30 minutes
              </span>{" "}
              — anywhere, any hour, no towing.
            </p>

            {/* Trust row */}
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
              {TRUST.map((t) => (
                <li
                  key={t}
                  className="inline-flex items-center gap-2 text-[12.5px] font-medium text-foreground sm:text-sm"
                >
                  <RiCheckDoubleFill className="size-3.5 text-primary" />
                  {t}
                </li>
              ))}
            </ul>

            {/* Command bar — dual CTA + inline stats */}
            <div className="mt-9 overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
                {/* Primary — call */}
                <Link
                  href={numberCallLink}
                  className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-primary/[0.06] sm:px-6"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition-transform group-hover:scale-105">
                    <RiPhoneFill className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Call now · 24/7
                    </span>
                    <span className="block truncate text-base font-bold text-foreground sm:text-lg">
                      {displayNumber}
                    </span>
                  </span>
                  <RiArrowRightLine className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                </Link>

                {/* Secondary — WhatsApp */}
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 border-t border-border bg-background/40 px-5 py-4 transition-colors hover:bg-primary/[0.06] sm:border-l sm:border-t-0 sm:px-6"
                >
                  <RiWhatsappFill className="size-5 text-primary" />
                  <span className="text-sm font-semibold text-foreground">
                    WhatsApp us
                  </span>
                  <RiArrowRightUpLine className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </div>

              {/* Stats footer */}
              <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                {STATS.map((s) => {
                  const Icon = s.icon;
                  return (
                    <div
                      key={s.label}
                      className="flex items-center gap-2.5 px-4 py-3 sm:px-5"
                    >
                      <Icon className="size-4 shrink-0 text-primary" />
                      <div className="min-w-0">
                        <p className="text-sm font-bold leading-none text-foreground">
                          {s.value}
                          <span className="ml-0.5 text-[10px] font-semibold text-muted-foreground">
                            {s.unit}
                          </span>
                        </p>
                        <p className="mt-1 truncate text-[9.5px] font-bold uppercase tracking-wider text-muted-foreground">
                          {s.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ---------------------------------------------------------
              RIGHT — "ticket" media card + overlapping dispatch chip
          --------------------------------------------------------- */}
          <div className="relative lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset accent frame */}
              <div className="absolute -right-3 -top-3 h-full w-full rounded-[26px] border border-primary/30" />

              {/* Ticket card */}
              <div className="relative overflow-hidden rounded-[26px] border border-border bg-muted shadow-2xl shadow-foreground/[0.08]">
                <div className="relative aspect-[4/5] w-full sm:aspect-[3/4]">
                  <Image
                    src={heroBanner?.hero}
                    alt="Certified mobile car mechanic repairing a vehicle on-site in Dubai"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />

                  {/* Gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />

                  {/* Corner crop marks */}
                  <div className="pointer-events-none absolute left-4 top-4 size-8">
                    <span className="absolute left-0 top-0 h-px w-6 bg-primary/80" />
                    <span className="absolute left-0 top-0 h-6 w-px bg-primary/80" />
                  </div>

                  {/* Top-right chip */}
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
                    <span className="relative flex size-1.5">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400/70" />
                      <span className="relative inline-flex size-1.5 rounded-full bg-emerald-400" />
                    </span>
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                      Onsite now
                    </span>
                  </div>

                  {/* Bottom caption */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                      Certified onsite service
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-white/95">
                      Battery · Diagnostics · Repairs
                    </p>
                  </div>
                </div>

                {/* Punch-line divider (ticket motif) */}
                <div className="relative h-px bg-border">
                  <span className="absolute -left-3 top-1/2 size-5 -translate-y-1/2 rounded-full bg-background" />
                  <span className="absolute -right-3 top-1/2 size-5 -translate-y-1/2 rounded-full bg-background" />
                </div>

                {/* Ticket stub */}
                <div className="flex items-center justify-between gap-3 bg-card px-5 py-4">
                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Avg. response
                    </p>
                    <p className="mt-0.5 text-base font-bold text-foreground">
                      5–30{" "}
                      <span className="text-xs font-semibold text-muted-foreground">
                        min
                      </span>
                    </p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Availability
                    </p>
                    <p className="mt-0.5 text-base font-bold text-foreground">
                      24/7
                    </p>
                  </div>
                  <div className="h-8 w-px bg-border" />
                  <div>
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Coverage
                    </p>
                    <p className="mt-0.5 text-base font-bold text-foreground">
                      {serviceAreas.length}+
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


       
      </div>
    </section>
  );
}

export default Hero;