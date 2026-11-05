// app/(marketing)/contact/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import {
  RiMapPinFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiTimeFill,
  RiShieldCheckFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiMailFill,
  RiWhatsappFill,
  RiNavigationFill,
  RiFlashlightFill,
  RiCheckDoubleFill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiRoadMapFill,
  RiMessageFill,
  RiUserFill,
  RiServiceFill,
  RiArrowDownSLine,
  RiRadarFill,
  RiCompass3Line,
  RiQuillPenLine,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";

/* ============ SEO ============ */
export const metadata: Metadata = {
  title: `Contact Us — ${SiteConfig.brandName}`,
  description: `Contact ${SiteConfig.brandName} for 24/7 mobile car repair in ${SiteConfig.city}. Call ${SiteConfig.displayNumber}, WhatsApp us, or book online — we respond within minutes.`,
  alternates: { canonical: `${SiteConfig.url}/contact` },
};

/* ============ Channels ============ */
const CHANNELS = [
  {
    icon: RiPhoneFill,
    label: "Emergency line",
    value: SiteConfig.displayNumber,
    href: SiteConfig.numberCallLink,
    description: "Instant dispatch · average response under 1 minute",
    primary: true,
  },
  {
    icon: RiWhatsappFill,
    label: "WhatsApp",
    value: "Chat now",
    href: SiteConfig.whatsappCallLink,
    description: "Send your location and issue for immediate help",
    external: true,
  },
  {
    icon: RiMailFill,
    label: "Email",
    value: SiteConfig.email,
    href: `mailto:${SiteConfig.email}`,
    description: "For non-urgent inquiries and quotations",
  },
  {
    icon: RiMapPinFill,
    label: "Dispatch base",
    value: SiteConfig.location,
    href: SiteConfig.GMB.mapsLink,
    description: "Jasmine Rd, Jabal Ali First · The Garden, Dubai",
    external: true,
  },
] as const;

const SERVICE_OPTIONS = [
  "Battery Replacement",
  "Jump Start",
  "Computer Diagnostic",
  "Alternator Repair",
  "Fuel Pump Repair",
  "Starter Motor Repair",
  "AC Repair",
  "Brake Pad Repair",
  "Other Emergency",
] as const;

export default function ContactPage() {
  const {
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    email,
    location,
    city,
    country,
    responseTime,
    GMB,
    serviceAreas,
    foundedYear,
  } = SiteConfig;

  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
          MASTHEAD — editorial hero
      ============================================================ */}
      <section
        aria-labelledby="contact-title"
        className="relative isolate overflow-hidden border-b border-border"
      >
        {/* Backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16]"
            style={{
              backgroundImage:
                "linear-gradient(to right, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
              backgroundSize: "96px 100%",
              maskImage:
                "radial-gradient(ellipse 120% 90% at 0% 0%, black 25%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 120% 90% at 0% 0%, black 25%, transparent 90%)",
            }}
          />
          <svg
            className="absolute inset-y-0 right-0 hidden h-full w-1/2 text-primary/25 lg:block"
            viewBox="0 0 600 800"
            fill="none"
            preserveAspectRatio="xMaxYMid slice"
          >
            <path
              d="M-40 620 C 140 560, 260 500, 340 340 S 520 60, 700 20"
              stroke="currentColor"
              strokeWidth="1.25"
              strokeDasharray="6 10"
            />
            <circle cx="340" cy="340" r="4" fill="currentColor" />
          </svg>
          <div className="absolute -top-24 right-0 h-[460px] w-[460px] rounded-full bg-primary/[0.08] blur-[130px]" />
          <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-[110px]" />
        </div>

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:px-12 lg:pb-24 lg:pt-20">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left — headline block (7 cols) */}
            <div className="lg:col-span-7">
              {/* Kicker */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  The switchboard · Contact
                </span>
              </div>

              {/* Headline */}
              <h1
                id="contact-title"
                className="mt-6 font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.98] -tracking-[0.03em] text-foreground"
              >
                One call.
                <br />
                A mechanic is{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">
                    on the way
                  </span>
                  <svg
                    aria-hidden
                    viewBox="0 0 340 24"
                    className="absolute -bottom-1 left-0 z-0 h-2.5 w-full text-primary/25"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 16 C 60 4, 120 22, 180 12 S 260 4, 338 14"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h1>

              {/* Subtitle */}
              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Reach our emergency dispatch center in seconds. We send the
                nearest fully-equipped mobile repair van directly to your GPS
                location — anywhere in {city}, within{" "}
                <span className="font-semibold text-foreground">
                  {responseTime}
                </span>
                .
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { icon: RiTimeFill, label: "24/7 emergency line" },
                  { icon: RiShieldCheckFill, label: "No call-out fees" },
                  { icon: RiStarFill, label: "5.0 rated · 500+ drivers" },
                ].map((b) => {
                  const Icon = b.icon;
                  return (
                    <span
                      key={b.label}
                      className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-semibold text-foreground"
                    >
                      <Icon className="size-3 text-primary" />
                      {b.label}
                    </span>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                >
                  <RiPhoneFill className="size-4" />
                  Call {displayNumber}
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border-2 border-border bg-background px-6 text-sm font-bold text-foreground transition-all duration-200 hover:border-primary hover:text-primary"
                >
                  <RiWhatsappFill className="size-4" />
                  WhatsApp us
                  <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Right — switchboard card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-primary/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                  {/* Head */}
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
                    <div className="flex items-center gap-2">
                      <RiRadarFill className="size-3.5 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                        Live switchboard
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Online
                    </span>
                  </div>

                  {/* Primary call */}
                  <Link
                    href={numberCallLink}
                    className="group flex items-center gap-4 border-b border-border px-5 py-4 transition-colors hover:bg-primary/[0.05]"
                  >
                    <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25 transition-transform group-hover:scale-105">
                      <RiPhoneFill className="size-4" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Emergency line · 24/7
                      </p>
                      <p className="mt-0.5 truncate text-base font-bold text-foreground">
                        {displayNumber}
                      </p>
                    </div>
                    <RiArrowRightLine className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </Link>

                  {/* WhatsApp */}
                  <Link
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-3 border-b border-border px-5 py-3 transition-colors hover:bg-primary/[0.05]"
                  >
                    <RiWhatsappFill className="size-4 text-primary" />
                    <span className="text-[12.5px] font-semibold text-foreground">
                      WhatsApp dispatch
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      ~1 min
                    </span>
                  </Link>

                  {/* Email */}
                  <Link
                    href={`mailto:${email}`}
                    className="group flex items-center gap-3 border-b border-border px-5 py-3 transition-colors hover:bg-primary/[0.05]"
                  >
                    <RiMailFill className="size-4 text-primary" />
                    <span className="truncate text-[12.5px] font-semibold text-foreground">
                      {email}
                    </span>
                    <RiArrowRightUpLine className="ml-auto size-3.5 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </Link>

                  {/* Footer meta */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 px-5 py-3 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <RiCompass3Line className="size-3 text-primary" />
                      {city}, {country}
                    </span>
                    <span className="size-1 rounded-full bg-border" />
                    <span className="inline-flex items-center gap-1.5">
                      <RiTimeFill className="size-3 text-primary" />
                      {responseTime} onsite
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CHANNEL LEDGER + COORDINATES
      ============================================================ */}
      <section
        aria-labelledby="channels-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left — channel ledger (5 cols) */}
            <div className="lg:col-span-5">
              {/* Header */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Reach us · Channels
                </span>
              </div>
              <h2
                id="channels-title"
                className="mt-5 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                Reach us{" "}
                <span className="italic text-primary">instantly</span>.
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                Every channel reaches a live dispatcher — no IVR, no bots, no
                queues.
              </p>

              {/* Ledger */}
              <ol className="mt-8 divide-y divide-border border-y border-border">
                {CHANNELS.map((c, i) => {
                  const Icon = c.icon;
                  const isPrimary = "primary" in c && c.primary;

                  return (
                    <li key={c.label}>
                      <Link
                        href={c.href}
                        {...("external" in c && c.external
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                        className={
                          isPrimary
                            ? "group grid grid-cols-[auto_1fr_auto] items-center gap-4 -mx-3 rounded-xl border border-primary/40 bg-primary/[0.06] px-4 py-4 transition-colors hover:bg-primary/[0.10]"
                            : "group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-4 transition-colors hover:bg-primary/[0.03]"
                        }
                      >
                        <span className="font-mono text-[10.5px] font-bold tabular-nums text-primary/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>

                        <div className="flex min-w-0 items-start gap-3">
                          <span
                            className={
                              isPrimary
                                ? "flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/25"
                                : "flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10"
                            }
                          >
                            <Icon
                              className={
                                isPrimary
                                  ? "size-4 text-primary-foreground"
                                  : "size-4 text-primary"
                              }
                            />
                          </span>
                          <div className="min-w-0">
                            <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                              {c.label}
                            </p>
                            <p
                              className={
                                isPrimary
                                  ? "mt-0.5 truncate text-[14px] font-bold text-primary"
                                  : "mt-0.5 truncate text-[14px] font-bold text-foreground"
                              }
                            >
                              {c.value}
                            </p>
                            <p className="mt-0.5 line-clamp-1 text-[11px] leading-relaxed text-muted-foreground">
                              {c.description}
                            </p>
                          </div>
                        </div>

                        <RiArrowRightUpLine className="size-4 shrink-0 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                      </Link>
                    </li>
                  );
                })}
              </ol>

              {/* Response note */}
              <div className="mt-6 flex items-start gap-2.5 rounded-xl border border-border bg-muted/40 px-3.5 py-3">
                <RiFlashlightFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <p className="text-[11.5px] leading-relaxed text-muted-foreground">
                  <span className="font-bold text-foreground">
                    Average response:
                  </span>{" "}
                  Under 1 minute on WhatsApp · {responseTime} onsite.
                </p>
              </div>
            </div>

            {/* Right — coordinates panel (7 cols) */}
            <div className="lg:col-span-7">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                {/* Head rail */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <RiRoadMapFill className="size-3.5 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                      Dispatch base · Coordinates
                    </span>
                  </div>
                  <div className="hidden items-center gap-1.5 text-[10px] text-muted-foreground sm:flex">
                    <RiNavigationFill className="size-3 text-primary" />
                    <span className="font-mono tabular-nums">
                      {GMB.latitude}, {GMB.longitude}
                    </span>
                  </div>
                </div>

                {/* Map viewport */}
                <div className="relative aspect-[4/3] w-full bg-muted sm:aspect-[16/11]">
                  {/* Corner crop marks */}
                  <div className="pointer-events-none absolute left-4 top-4 z-10 size-6">
                    <span className="absolute left-0 top-0 h-px w-5 bg-primary/80" />
                    <span className="absolute left-0 top-0 h-5 w-px bg-primary/80" />
                  </div>
                  <div className="pointer-events-none absolute bottom-4 right-4 z-10 size-6">
                    <span className="absolute bottom-0 right-0 h-px w-5 bg-primary/80" />
                    <span className="absolute bottom-0 right-0 h-5 w-px bg-primary/80" />
                  </div>

                  <iframe
                    title={`${SiteConfig.brandName} location map`}
                    src={GMB.embedMap}
                    width="100%"
                    height="100%"
                    className="size-full"
                    style={{
                      border: 0,
                      filter: "grayscale(0.15) contrast(1.05)",
                    }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />

                  {/* Floating base pin (desktop) */}
                  <div className="pointer-events-none absolute -bottom-6 left-4 z-20 hidden max-w-xs lg:block">
                    <div className="rounded-xl border border-border bg-card/95 p-3 shadow-xl backdrop-blur-md">
                      <div className="flex items-start gap-2.5">
                        <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/25">
                          <RiMapPinFill className="size-3.5" />
                        </span>
                        <div className="min-w-0">
                          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                            Base
                          </p>
                          <p className="mt-0.5 truncate text-[11.5px] font-bold text-foreground">
                            {location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Footer meta */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border bg-muted/30 px-5 py-3 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <RiMapPinFill className="size-3 text-primary" />
                    {location}, {city}
                  </span>
                  <span className="size-1 rounded-full bg-border" />
                  <span className="inline-flex items-center gap-1.5">
                    <RiTimeFill className="size-3 text-primary" />
                    24/7 · {responseTime}
                  </span>
                  <span className="ml-auto">
                    <Link
                      href={GMB.mapsLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center gap-1.5 text-primary hover:text-primary/80"
                    >
                      Directions
                      <RiArrowRightUpLine className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DISPATCH TERMINAL — form + right rail
      ============================================================ */}
      <section
        aria-labelledby="book-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:px-12 lg:py-24">
          {/* Section header */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Book online · Dispatch terminal
                </span>
              </div>
              <h2
                id="book-title"
                className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                Book a mechanic{" "}
                <span className="italic text-primary">in minutes</span>.
              </h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
                Fill in the form — our dispatch team contacts you within one
                minute to confirm vehicle details, pricing, and ETA.
              </p>
            </div>

            {/* Stat rail */}
            <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur lg:col-span-5">
              <div className="px-4 py-4 sm:px-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Response
                </p>
                <p className="mt-1 text-base font-bold leading-none text-foreground sm:text-lg">
                  {responseTime}
                </p>
              </div>
              <div className="px-4 py-4 sm:px-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Coverage
                </p>
                <p className="mt-1 text-base font-bold leading-none text-foreground sm:text-lg">
                  {serviceAreas.length}+
                </p>
              </div>
              <div className="px-4 py-4 sm:px-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Since
                </p>
                <p className="mt-1 text-base font-bold leading-none text-foreground sm:text-lg">
                  {foundedYear}
                </p>
              </div>
            </div>
          </div>

          {/* Terminal frame */}
          <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Form (7 cols on lg) */}
              <div className="relative lg:col-span-7 lg:border-r lg:border-border">
                {/* Form head */}
                <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3 sm:px-6">
                  <div className="flex items-center gap-2">
                    <RiMessageFill className="size-3.5 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                      Send us a message
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    <span className="size-1.5 rounded-full bg-emerald-500" />
                    1-min reply
                  </span>
                </div>

                <form className="space-y-5 p-5 sm:p-6 lg:p-7">
                  {/* Name + Phone */}
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <Field icon={RiUserFill} label="Full name" id="name">
                      <input
                        id="name"
                        type="text"
                        name="name"
                        required
                        autoComplete="name"
                        placeholder="Ahmed Al Maktoum"
                        className="h-10 w-full border-0 bg-transparent text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                      />
                    </Field>
                    <Field icon={RiPhoneFill} label="Phone" id="phone">
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        required
                        autoComplete="tel"
                        placeholder="+971 50 000 0000"
                        className="h-10 w-full border-0 bg-transparent text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                      />
                    </Field>
                  </div>

                  {/* Email */}
                  <Field icon={RiMailFill} label="Email (optional)" id="email">
                    <input
                      id="email"
                      type="email"
                      name="email"
                      autoComplete="email"
                      placeholder="you@example.com"
                      className="h-10 w-full border-0 bg-transparent text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                    />
                  </Field>

                  {/* Service */}
                  <Field icon={RiServiceFill} label="Service needed" id="service">
                    <div className="relative">
                      <select
                        id="service"
                        name="service"
                        required
                        className="h-10 w-full cursor-pointer appearance-none border-0 bg-transparent pr-6 text-[13.5px] font-medium text-foreground outline-none"
                      >
                        <option value="">Select a service</option>
                        {SERVICE_OPTIONS.map((s) => (
                          <option key={s} value={s}>
                            {s}
                          </option>
                        ))}
                      </select>
                      <RiArrowDownSLine className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                    </div>
                  </Field>

                  {/* Message */}
                  <Field icon={RiMessageFill} label="Message" id="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      placeholder="Describe the issue or your exact location…"
                      className="w-full resize-none border-0 bg-transparent pt-2.5 text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                    />
                  </Field>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                  >
                    <RiFlashlightFill className="size-4" />
                    Request mechanic
                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </button>

                  <p className="text-center text-[10.5px] leading-relaxed text-muted-foreground">
                    Or call{" "}
                    <span className="font-bold text-foreground">
                      {displayNumber}
                    </span>{" "}
                    · 24/7 emergency line
                  </p>
                </form>
              </div>

              {/* Side rail (5 cols on lg) */}
              <aside className="relative lg:col-span-5">
                <div className="flex h-full flex-col">
                  {/* Field report quote */}
                  <figure className="border-b border-border p-5 sm:p-6">
                    <RiQuillPenLine className="size-4 text-primary" />
                    <blockquote className="mt-2 font-serif text-[15px] italic leading-snug text-foreground">
                      &ldquo;Fast, professional, and honest. The mechanic
                      arrived within 15 minutes and fixed everything on the
                      spot.&rdquo;
                    </blockquote>
                    <figcaption className="mt-3 flex items-center gap-2">
                      <div className="flex items-center gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <RiStarFill key={i} className="size-2.5 text-primary" />
                        ))}
                      </div>
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        Ahmed A. · Dubai Marina
                      </span>
                    </figcaption>
                  </figure>

                  {/* Guarantee list */}
                  <div className="border-b border-border p-5 sm:p-6">
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      What every booking includes
                    </p>
                    <ul className="mt-3 space-y-2">
                      {[
                        "Instant confirmation within 1 minute",
                        "No call-out or hidden fees",
                        "Genuine parts · 12–24 mo warranty",
                        "ASE-certified multi-brand mechanics",
                      ].map((f, i) => (
                        <li
                          key={f}
                          className="flex items-start gap-2.5 text-[12px] leading-relaxed"
                        >
                          <span className="mt-0.5 font-mono text-[9.5px] font-bold tabular-nums text-primary/60">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <RiCheckDoubleFill className="mt-0.5 size-3 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Alternate CTAs */}
                  <div className="grid grid-cols-2 divide-x divide-border border-b border-border">
                    <Link
                      href={numberCallLink}
                      className="group flex flex-col gap-1.5 p-5 transition-colors hover:bg-primary/[0.04]"
                    >
                      <RiPhoneFill className="size-4 text-primary" />
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Prefer to call?
                      </span>
                      <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-foreground">
                        Call now
                        <RiArrowRightUpLine className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                    <Link
                      href={whatsappCallLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex flex-col gap-1.5 p-5 transition-colors hover:bg-primary/[0.04]"
                    >
                      <RiWhatsappFill className="size-4 text-primary" />
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Prefer to chat?
                      </span>
                      <span className="inline-flex items-center gap-1 text-[12.5px] font-bold text-foreground">
                        WhatsApp
                        <RiArrowRightUpLine className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                      </span>
                    </Link>
                  </div>

                  {/* Live dispatch footer */}
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-1.5 bg-muted/40 px-5 py-3.5 sm:px-6">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-foreground">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Live dispatch
                    </span>
                    <span className="ml-auto inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      <RiShieldCheckFill className="size-3 text-primary" />
                      100% verified
                    </span>
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SIGN-OFF — dark terminal
      ============================================================ */}
      <section
        aria-labelledby="signoff-title"
        className="relative w-full"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-primary/25 blur-[100px]" />
              <div className="absolute -bottom-24 -right-20 h-[300px] w-[300px] rounded-full bg-primary/10 blur-[90px]" />
              <div
                className="absolute inset-0 opacity-[0.14]"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px)",
                  backgroundSize: "56px 100%",
                  maskImage:
                    "radial-gradient(ellipse at center, black 20%, transparent 80%)",
                  WebkitMaskImage:
                    "radial-gradient(ellipse at center, black 20%, transparent 80%)",
                }}
              />
              <div className="absolute left-4 top-4 size-6">
                <span className="absolute left-0 top-0 h-px w-6 bg-primary/70" />
                <span className="absolute left-0 top-0 h-6 w-px bg-primary/70" />
              </div>
              <div className="absolute bottom-4 right-4 size-6">
                <span className="absolute bottom-0 right-0 h-px w-6 bg-primary/70" />
                <span className="absolute bottom-0 right-0 h-6 w-px bg-primary/70" />
              </div>
            </div>

            <div className="relative grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-12">
              {/* Left */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <RiVerifiedBadgeFill className="size-3 text-primary" />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-primary">
                    Available 24/7
                  </span>
                </div>

                <h2
                  id="signoff-title"
                  className="mt-4 font-serif text-[clamp(1.8rem,4.6vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-background"
                >
                  Need help now?{" "}
                  <span className="italic text-primary">We&apos;re ready</span>
                  .
                </h2>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-background/60 sm:text-[15px]">
                  Our dispatch team is on standby around the clock. Your car,
                  our mechanics — anywhere in {city}.
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] font-semibold">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="size-3 text-primary" />
                      ))}
                    </span>
                    <span className="text-background/80">5.0 rated</span>
                  </span>
                  <span className="size-1 rounded-full bg-background/25" />
                  <span className="inline-flex items-center gap-1.5 text-background/70">
                    <RiMapPinFill className="size-3 text-primary" />
                    All {serviceAreas.length} areas · {city}
                  </span>
                  <span className="size-1 rounded-full bg-background/25" />
                  <span className="inline-flex items-center gap-1.5 text-background/70">
                    <RiTimeFill className="size-3 text-primary" />
                    {responseTime} response
                  </span>
                </div>
              </div>

              {/* Right — CTAs */}
              <div className="lg:col-span-4 lg:justify-self-end">
                <div className="flex flex-col gap-2.5 sm:flex-row lg:flex-col">
                  <Link
                    href={numberCallLink}
                    className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90"
                  >
                    <RiPhoneFill className="size-4" />
                    {displayNumber}
                    <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <Link
                    href={whatsappCallLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-background/20 bg-transparent px-6 text-sm font-bold text-background transition-colors hover:border-primary hover:text-primary"
                  >
                    <RiWhatsappFill className="size-4" />
                    WhatsApp
                  </Link>
                </div>

                <p className="mt-4 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-background/50">
                  <RiCustomerServiceFill className="size-3 text-primary" />
                  Round-the-clock · {country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
    SUB-COMPONENT: Field
============================================================ */
function Field({
  icon: Icon,
  label,
  id,
  children,
}: {
  icon: React.ElementType;
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-lg border border-border bg-background transition-colors focus-within:border-primary/60 focus-within:bg-primary/[0.02]">
      <label
        htmlFor={id}
        className="absolute left-10 top-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70 transition-colors group-focus-within:text-primary"
      >
        {label}
      </label>
      <div className="flex items-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center pt-3.5">
          <Icon className="size-3.5 text-muted-foreground transition-colors group-focus-within:text-primary" />
        </div>
        <div className="min-w-0 flex-1 pt-4">{children}</div>
      </div>
    </div>
  );
}