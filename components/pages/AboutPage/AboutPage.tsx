// app/(marketing)/about/page.tsx

import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiUserStarFill,
  RiMapPinFill,
  RiCheckDoubleFill,
  RiBatteryChargeFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiToolsFill,
  RiAwardFill,
  RiFocus3Fill,
  RiHeartFill,
  RiRadarFill,
  RiCompass3Line,
  RiQuillPenLine,
  RiRouteFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";
import { aboutUs } from "@/data/businessInfo";
import { heroBanner } from "@/config/imageConfig";

/* ------------------------------------------------------------------ */
/*  Page metadata                                                     */
/* ------------------------------------------------------------------ */
export const metadata: Metadata = {
  title: `About Us — ${SiteConfig.brandName}`,
  description: `The story behind ${SiteConfig.brandName}: certified mobile mechanics serving ${SiteConfig.city} since ${SiteConfig.foundedYear}.`,
};

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */
const RECORDS = [
  { label: "Founded", value: SiteConfig.foundedYear, unit: "" },
  { label: "Response", value: "5–30", unit: "min" },
  { label: "Drivers served", value: "500", unit: "+" },
  { label: "Service areas", value: SiteConfig.serviceAreas.length, unit: "" },
  { label: "Availability", value: "24/7", unit: "" },
] as const;

const CHARTER = [
  {
    icon: RiFocus3Fill,
    title: "Customer first",
    description:
      "Every decision starts with the driver. Transparent pricing, honest diagnostics, and no surprises at the invoice.",
    tag: "Principle",
  },
  {
    icon: RiAwardFill,
    title: "Certified excellence",
    description:
      "Multi-brand ASE-trained technicians using dealer-grade equipment for every repair — from jump-starts to full diagnostics.",
    tag: "Standard",
  },
  {
    icon: RiShieldCheckFill,
    title: "Guaranteed work",
    description:
      "Every job is backed by our workmanship warranty. If it isn't right, we come back — free, without argument.",
    tag: "Promise",
  },
  {
    icon: RiHeartFill,
    title: "Genuine care",
    description:
      "We treat every vehicle like our own — from a 20-year-old sedan to a brand-new luxury SUV, on every dispatch.",
    tag: "Culture",
  },
] as const;

const TRUST_RAIL = [
  { icon: RiToolsFill, title: "ASE certified", subtitle: "Multi-brand specialists" },
  { icon: RiBatteryChargeFill, title: "OEM parts", subtitle: "100% genuine only" },
  { icon: RiTimeFill, title: "24/7 dispatch", subtitle: "Round-the-clock" },
  { icon: RiShieldCheckFill, title: "Warranty backed", subtitle: "12–24 months" },
] as const;

const MILESTONES = [
  {
    year: "2014",
    title: "Founded",
    description:
      "Started in Jebel Ali with one mobile van and a mission to eliminate towing headaches.",
    tag: "Origin",
  },
  {
    year: "2018",
    title: "Expanded coverage",
    description:
      "Grew to cover 10+ Dubai districts with a fleet of fully-equipped rescue vans.",
    tag: "Growth",
  },
  {
    year: "2022",
    title: "500+ happy drivers",
    description:
      "Crossed 500 verified customer reviews with a consistent 5.0-star rating.",
    tag: "Milestone",
  },
  {
    year: "2024",
    title: "24/7 across Dubai",
    description:
      "Now serving 16+ areas round-the-clock with certified mechanics on every dispatch.",
    tag: "Scale",
  },
] as const;

const FEATURE_LEDGER = [
  "Certified multi-brand technicians",
  "Dealer-grade diagnostic equipment",
  "Transparent upfront pricing",
  "24/7 emergency availability",
] as const;

export default function AboutPage() {
  const { city, displayNumber, numberCallLink, whatsappCallLink, foundedYear } =
    SiteConfig;

  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
          MASTHEAD — editorial hero
      ============================================================ */}
      <section
        aria-labelledby="about-title"
        className="relative isolate overflow-hidden border-b border-border"
      >
        {/* Backdrop */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          {/* Ruled columns */}
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
          {/* Route line */}
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
          {/* Glow */}
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
                  The dossier · About us
                </span>
              </div>

              {/* Headline */}
              <h1
                id="about-title"
                className="mt-6 font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.98] -tracking-[0.03em] text-foreground"
              >
                The mobile garage
                <br />
                that{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">
                    comes to you
                  </span>
                  <svg
                    aria-hidden
                    viewBox="0 0 320 24"
                    className="absolute -bottom-1 left-0 z-0 h-2.5 w-full text-primary/25"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 16 C 60 4, 120 22, 180 12 S 260 4, 318 14"
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
                Founded in {foundedYear} in {city}, we eliminate towing costs
                and workshop delays by bringing certified mechanics and
                dealer-grade tools directly to your location — 24/7, across{" "}
                {SiteConfig.serviceAreas.length}+ areas.
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { icon: RiTimeFill, label: "Since " + foundedYear },
                  { icon: RiUserStarFill, label: "500+ happy drivers" },
                  { icon: RiShieldCheckFill, label: "Workmanship warranty" },
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

            {/* Right — records card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                {/* Offset accent frame */}
                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-primary/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                  {/* Head */}
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
                    <div className="flex items-center gap-2">
                      <RiRadarFill className="size-3.5 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                        Record card
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Verified
                    </span>
                  </div>

                  {/* Records list */}
                  <dl className="divide-y divide-border">
                    {RECORDS.map((r) => (
                      <div
                        key={r.label}
                        className="flex items-center justify-between gap-4 px-5 py-3.5"
                      >
                        <dt className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          {r.label}
                        </dt>
                        <dd className="font-mono text-[15px] font-bold tabular-nums text-foreground">
                          {r.value}
                          {r.unit && (
                            <span className="ml-0.5 text-[11px] font-semibold text-muted-foreground">
                              {r.unit}
                            </span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Footer */}
                  <div className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      <RiCompass3Line className="size-3 text-primary" />
                      {city}, {SiteConfig.country}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-primary">
                      <RiVerifiedBadgeFill className="size-3" />
                      100% verified
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ORIGIN — story + media + ledger
      ============================================================ */}
      <section className="relative w-full border-b border-border">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Left — media dossier (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -left-3 -top-3 hidden h-full w-full rounded-[26px] border border-primary/25 sm:block" />

                <figure className="relative overflow-hidden rounded-[26px] border border-border bg-muted shadow-2xl shadow-foreground/[0.08]">
                  <div className="relative aspect-[4/5] w-full">
                    <Image
                      src={heroBanner?.hero}
                      alt={`Certified mobile car mechanic team in ${city}`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    {/* Corner crop marks */}
                    <div className="pointer-events-none absolute left-4 top-4 size-8">
                      <span className="absolute left-0 top-0 h-px w-6 bg-primary/80" />
                      <span className="absolute left-0 top-0 h-6 w-px bg-primary/80" />
                    </div>

                    {/* Top-right chip */}
                    <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
                      <RiVerifiedBadgeFill className="size-3 text-primary" />
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                        Certified team
                      </span>
                    </div>

                    {/* Bottom caption */}
                    <figcaption className="absolute inset-x-0 bottom-0 p-5">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                        On the road since {foundedYear}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold text-white/95">
                        Battery · Diagnostics · Repairs · Roadside
                      </p>
                    </figcaption>
                  </div>

                  {/* Ledger footer */}
                  <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-card">
                    <div className="px-3.5 py-3.5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Rating
                      </p>
                      <p className="mt-1 flex items-center gap-1 text-sm font-bold text-foreground">
                        5.0 <RiStarFill className="size-2.5 text-primary" />
                      </p>
                    </div>
                    <div className="px-3.5 py-3.5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Since
                      </p>
                      <p className="mt-1 text-sm font-bold text-foreground">
                        {foundedYear}
                      </p>
                    </div>
                    <div className="px-3.5 py-3.5">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                        Coverage
                      </p>
                      <p className="mt-1 text-sm font-bold text-foreground">
                        {city}
                      </p>
                    </div>
                  </div>
                </figure>
              </div>
            </div>

            {/* Right — narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Origin · Our story
                </span>
              </div>

              <h2 className="mt-5 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.06] -tracking-[0.025em] text-foreground">
                Built to eliminate{" "}
                <span className="italic text-primary">towing headaches</span>.
              </h2>

              {/* Dropcap narrative */}
              <p className="mt-6 text-[15px] leading-[1.75] text-muted-foreground first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.4rem] first-letter:font-bold first-letter:leading-[0.85] first-letter:text-primary">
                {aboutUs.para1}
              </p>

              <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                {aboutUs.para2}
              </p>

              {/* Pull quote */}
              <figure className="mt-8 border-l-2 border-primary/60 pl-5">
                <RiQuillPenLine className="size-4 text-primary" />
                <blockquote className="mt-2 font-serif text-lg italic leading-snug text-foreground sm:text-xl">
                  &ldquo;We don&apos;t tow your car to a garage. We bring the
                  garage to your car — same tools, same standards, wherever you
                  are.&rdquo;
                </blockquote>
                <figcaption className="mt-3 text-[10.5px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  — Rescue doctrine · {SiteConfig.brandName}
                </figcaption>
              </figure>

              {/* Feature ledger */}
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {FEATURE_LEDGER.map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-4 py-3.5 transition-colors hover:bg-primary/[0.03]"
                  >
                    <span className="font-mono text-[10.5px] font-bold tabular-nums text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <RiCheckDoubleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span className="text-[13.5px] font-semibold text-foreground">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA row */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-11 items-center gap-2.5 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90"
                >
                  <RiPhoneFill className="size-4" />
                  Talk to a mechanic
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-card px-5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Browse services
                  <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          RECORDS MANIFEST — stat rail
      ============================================================ */}
      <section
        aria-labelledby="records-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-2 border-b border-border/60 py-8 sm:flex-row sm:items-end sm:justify-between sm:py-10">
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                Records manifest
              </p>
              <h2
                id="records-title"
                className="mt-2 font-serif text-xl font-bold leading-tight -tracking-tight text-foreground sm:text-2xl"
              >
                The numbers that define every dispatch.
              </h2>
            </div>
            <p className="max-w-sm text-[12.5px] leading-relaxed text-muted-foreground">
              Every record below is a policy we publish — not a claim we print.
            </p>
          </div>

          <div className="grid grid-cols-2 divide-y divide-border sm:grid-cols-3 sm:divide-y-0 lg:grid-cols-5">
            {RECORDS.map((r, i) => (
              <div
                key={r.label}
                className={[
                  "flex flex-col gap-2 px-4 py-6 transition-colors hover:bg-primary/[0.02] sm:px-5 sm:py-7",
                  // vertical rules
                  i > 0 && "sm:border-l sm:border-border",
                  i > 2 && "sm:border-t sm:border-border",
                  "lg:border-t-0",
                  i > 0 && "lg:border-l lg:border-border",
                  "lg:border-y-0",
                ]
                  .filter(Boolean)
                  .join(" ")}
              >
                <span className="text-[9.5px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {r.label}
                </span>
                <span className="font-mono text-3xl font-black tabular-nums leading-none text-foreground sm:text-4xl">
                  {r.value}
                  {r.unit && (
                    <span className="ml-0.5 text-base font-semibold text-muted-foreground">
                      {r.unit}
                    </span>
                  )}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================
          CHARTER — core values ledger
      ============================================================ */}
      <section
        aria-labelledby="charter-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          {/* Header */}
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Charter · Core principles
              </span>
            </div>
            <h2
              id="charter-title"
              className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
            >
              The principles that{" "}
              <span className="italic text-primary">drive us</span>.
            </h2>
            <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
              Every repair, every call, every dispatch — backed by four
              principles we never compromise on.
            </p>
          </div>

          {/* Ledger rows */}
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {CHARTER.map((c, i) => {
              const Icon = c.icon;
              return (
                <li
                  key={c.title}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-6 transition-colors hover:bg-primary/[0.03] sm:items-center sm:gap-6 sm:py-7"
                >
                  {/* Index */}
                  <span className="font-mono text-xl font-bold tabular-nums text-primary/40 transition-colors group-hover:text-primary sm:text-2xl">
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Icon + body */}
                  <div className="flex min-w-0 items-start gap-4 sm:items-center">
                    <span className="hidden size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15 sm:flex">
                      <Icon className="size-5 text-primary" />
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                          {c.title}
                        </h3>
                        <span className="rounded-full border border-border bg-background px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                          {c.tag}
                        </span>
                      </div>
                      <p className="mt-1 max-w-xl text-[12.5px] leading-relaxed text-muted-foreground sm:text-sm">
                        {c.description}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <RiArrowRightUpLine className="mt-1 size-4 shrink-0 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:mt-0" />
                </li>
              );
            })}
          </ol>

          {/* Trust rail — merges the standalone trust strip here */}
          <div className="mt-10 grid grid-cols-2 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
            {TRUST_RAIL.map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.title}
                  className="flex items-center gap-3 px-4 py-4 sm:px-5 sm:py-5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <Icon className="size-4 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[12.5px] font-bold leading-tight text-foreground">
                      {t.title}
                    </p>
                    <p className="mt-0.5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {t.subtitle}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          TIMELINE — journal spine
      ============================================================ */}
      <section
        aria-labelledby="timeline-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Sticky intro (4 cols) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                    Journal · Our journey
                  </span>
                </div>
                <h2
                  id="timeline-title"
                  className="mt-5 font-serif text-[clamp(1.9rem,4vw,2.8rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
                >
                  A decade of{" "}
                  <span className="italic text-primary">growth</span>.
                </h2>
                <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                  From a single mobile van in Jebel Ali to a 24/7 fleet across
                  Dubai — four milestones that shaped the way we operate.
                </p>

                <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                  <RiRouteFill className="size-3 text-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    {MILESTONES.length} milestones
                  </span>
                </div>
              </div>
            </div>

            {/* Timeline spine (8 cols) */}
            <div className="lg:col-span-8">
              <ol className="relative border-l border-border pl-6 sm:pl-8">
                {MILESTONES.map((m, i) => (
                  <li key={m.year} className="relative pb-8 last:pb-0 sm:pb-10">
                    {/* Node */}
                    <span className="absolute -left-[7px] top-1.5 flex size-3.5 items-center justify-center">
                      <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/40" />
                      <span className="relative inline-flex size-3.5 rounded-full border-2 border-background bg-primary" />
                    </span>

                    {/* Content */}
                    <div className="group">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-base font-black tabular-nums text-primary sm:text-lg">
                          {m.year}
                        </span>
                        <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                        <span className="rounded-full border border-border bg-background px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                          {m.tag}
                        </span>
                      </div>

                      <h3 className="mt-2 text-base font-bold tracking-tight text-foreground sm:text-lg">
                        {m.title}
                      </h3>
                      <p className="mt-1.5 max-w-xl text-[13px] leading-relaxed text-muted-foreground sm:text-[13.5px]">
                        {m.description}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          SIGN-OFF — dark terminal close
      ============================================================ */}
      <section
        aria-labelledby="signoff-title"
        className="relative w-full"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground">
            {/* Backdrop accents */}
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
              {/* Left — statement */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-primary">
                    Trusted by 500+ drivers
                  </span>
                </div>

                <h2
                  id="signoff-title"
                  className="mt-4 font-serif text-[clamp(1.8rem,4.6vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-background"
                >
                  Experience the{" "}
                  <span className="italic text-primary">difference</span>.
                </h2>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-background/60 sm:text-[15px]">
                  Wherever your car is, we&apos;ll meet you there — with the
                  same certified mechanics and dealership-level expertise that
                  thousands of Dubai drivers already trust.
                </p>

                {/* Meta row */}
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
                    All {SiteConfig.serviceAreas.length} areas · {city}
                  </span>
                  <span className="size-1 rounded-full bg-background/25" />
                  <span className="inline-flex items-center gap-1.5 text-background/70">
                    <RiFlashlightFill className="size-3 text-primary" />
                    {SiteConfig.responseTime} response
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
                    Call now
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
                  Round-the-clock support · {SiteConfig.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}