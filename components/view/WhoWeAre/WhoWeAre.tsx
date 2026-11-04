import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiShieldCheckFill,
  RiTimeFill,
  RiUserStarFill,
  RiMapPinFill,
  RiBatteryChargeFill,
  RiVerifiedBadgeFill,
  RiFlashlightFill,
  RiPhoneFill,
  RiStarFill,
  RiToolsFill,
  RiCustomerServiceFill,
  RiCheckDoubleFill,
  RiQuillPenLine,
  RiRoadMapLine,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";
import { heroBanner } from "@/config/imageConfig";
import { aboutUs } from "@/data/businessInfo";

/* ------------------------------------------------------------------ */
/*  Local data — the "field protocol" ledger                          */
/* ------------------------------------------------------------------ */
const PROTOCOLS = [
  {
    n: "01",
    icon: RiToolsFill,
    title: "Certified technicians",
    description:
      "Multi-brand ASE-trained mechanics with years of hands-on, on-site expertise.",
    tag: "Team",
  },
  {
    n: "02",
    icon: RiFlashlightFill,
    title: "Dealer-grade equipment",
    description:
      "State-of-the-art diagnostic scanners and specialized tools ride on every van.",
    tag: "Tools",
  },
  {
    n: "03",
    icon: RiBatteryChargeFill,
    title: "Genuine OEM parts",
    description:
      "Only authentic Varta, Amaron & ACDelco batteries and matching components.",
    tag: "Parts",
  },
  {
    n: "04",
    icon: RiCustomerServiceFill,
    title: "24/7 emergency coverage",
    description:
      "Dedicated rescue teams operating round-the-clock, across all of Dubai.",
    tag: "Service",
  },
] as const;

const HIGHLIGHTS = [
  { icon: RiTimeFill, value: "5–30", unit: "min", label: "Response" },
  { icon: RiUserStarFill, value: "500+", unit: "", label: "Happy drivers" },
  { icon: RiMapPinFill, value: "16+", unit: "", label: "Service areas" },
  { icon: RiShieldCheckFill, value: "100", unit: "%", label: "Guaranteed" },
] as const;

export function WhoWeAre() {
  const { foundedYear, city, displayNumber, numberCallLink } = SiteConfig;

  return (
    <section
      aria-labelledby="who-title"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      {/* ==============================================================
          BACKDROP — horizontal rulings + margin spine (magazine feel)
      ============================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Horizontal ruling lines */}
        <div
          className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "100% 72px",
            maskImage:
              "radial-gradient(ellipse 120% 90% at 0% 50%, black 20%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 120% 90% at 0% 50%, black 20%, transparent 90%)",
          }}
        />
        {/* Vertical "margin spine" — visible on desktop */}
        <div className="absolute inset-y-0 left-8 hidden w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block xl:left-12" />
        <div className="absolute inset-y-0 left-10 hidden w-px bg-primary/15 lg:block xl:left-[3.25rem]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-10">
        {/* ============================================================
            HEADER — eyebrow + manifesto headline
        ============================================================ */}
        <header className="max-w-3xl">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-primary" />
            <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
              Who we are · Field Notes
            </span>
          </div>

          <h2
            id="who-title"
            className="mt-5 font-serif text-[clamp(2.1rem,5vw,3.9rem)] font-bold leading-[1.02] -tracking-[0.028em] text-foreground"
          >
            A rescue team{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-primary">built</span>
              <svg
                aria-hidden
                viewBox="0 0 300 24"
                className="absolute -bottom-1 left-0 z-0 h-2.5 w-full text-primary/25"
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
            </span>{" "}
            for the road — not just the workshop.
          </h2>

          <p className="mt-6 max-w-2xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
            {aboutUs.para1}
          </p>
        </header>

        {/* ============================================================
            MAIN — editorial manifesto + media dossier
        ============================================================ */}
        <div className="mt-12 grid grid-cols-1 gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-14">
          {/* ----------------------------------------------------------
              LEFT — dropcap continuation + pull quote
          ---------------------------------------------------------- */}
          <div className="lg:col-span-7">
            {/* Dropcap paragraph — magazine device */}
            <p className="text-[15px] leading-[1.75] text-muted-foreground first-letter:float-left first-letter:mr-3 first-letter:font-serif first-letter:text-[3.6rem] first-letter:font-bold first-letter:leading-[0.85] first-letter:text-primary">
              {aboutUs.para2}
            </p>

            {/* Pull quote — italic serif, wide */}
            <figure className="mt-8 border-l-2 border-primary/60 pl-5 sm:pl-6">
              <RiQuillPenLine className="size-4 text-primary" />
              <blockquote className="mt-2 font-serif text-lg italic leading-snug text-foreground sm:text-xl">
                &ldquo;We don&apos;t tow your car to a garage. We bring the
                garage to your car — with the same tools and the same
                standards.&rdquo;
              </blockquote>
              <figcaption className="mt-3 text-[10.5px] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                — {SiteConfig.brandName} · Rescue Doctrine
              </figcaption>
            </figure>

            {/* Split CTA bar */}
            <div className="mt-9 overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
              <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto]">
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

                <Link
                  href="/about"
                  className="group flex items-center gap-3 border-t border-border bg-background/40 px-5 py-4 transition-colors hover:bg-primary/[0.06] sm:border-l sm:border-t-0 sm:px-6"
                >
                  <span className="text-sm font-semibold text-foreground">
                    More about us
                  </span>
                  <RiArrowRightUpLine className="size-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </Link>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------
              RIGHT — media dossier card
          ---------------------------------------------------------- */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Offset accent frame */}
              <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-[26px] border border-primary/30 sm:block" />

              {/* Dossier card */}
              <div className="relative overflow-hidden rounded-[26px] border border-border bg-muted shadow-2xl shadow-foreground/[0.08]">
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={heroBanner?.hero}
                    alt={`Certified mobile car mechanic team in ${city}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />

                  {/* Gradient wash */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                  {/* Corner crop marks */}
                  <div className="pointer-events-none absolute left-4 top-4 size-8">
                    <span className="absolute left-0 top-0 h-px w-6 bg-primary/80" />
                    <span className="absolute left-0 top-0 h-6 w-px bg-primary/80" />
                  </div>

                  {/* Top-right credential chip */}
                  <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
                    <RiVerifiedBadgeFill className="size-3 text-primary" />
                    <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                      Certified team
                    </span>
                  </div>

                  {/* Bottom caption inside media */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                      On the road since {foundedYear}
                    </p>
                    <p className="mt-1.5 text-sm font-semibold text-white/95">
                      Battery · Diagnostics · Repairs · Roadside
                    </p>
                  </div>
                </div>

                {/* Dossier footer — anchored credentials */}
                <div className="grid grid-cols-3 divide-x divide-border border-t border-border bg-card">
                  <div className="px-3.5 py-3.5">
                    <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                      Rating
                    </p>
                    <p className="mt-1 flex items-center gap-1 text-sm font-bold text-foreground">
                      5.0
                      <RiStarFill className="size-2.5 text-primary" />
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
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            PROTOCOL LEDGER — numbered field protocols (unique to this)
        ============================================================ */}
        <div className="mt-16 lg:mt-24">
          {/* Sub-header */}
          <div className="flex items-end justify-between gap-6 border-b border-border pb-4">
            <div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                Field Protocol
              </p>
              <h3 className="mt-2 font-serif text-2xl font-bold leading-tight -tracking-tight text-foreground sm:text-3xl">
                What every dispatch guarantees.
              </h3>
            </div>
            <span className="hidden shrink-0 items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-primary sm:inline-flex">
              <RiRoadMapLine className="size-3.5" />
              4 protocols
            </span>
          </div>

          {/* Ledger rows — tactile, index-driven */}
          <ol className="divide-y divide-border">
            {PROTOCOLS.map((p) => {
              const Icon = p.icon;
              return (
                <li
                  key={p.n}
                  className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-6 transition-colors hover:bg-primary/[0.03] sm:items-center sm:gap-6 sm:py-7"
                >
                  {/* Index */}
                  <span className="font-mono text-xl font-bold tabular-nums text-primary/40 transition-colors group-hover:text-primary sm:text-2xl">
                    {p.n}
                  </span>

                  {/* Icon + text */}
                  <div className="flex min-w-0 items-start gap-4 sm:items-center">
                    <span className="hidden size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/15 sm:flex">
                      <Icon className="size-5 text-primary" />
                    </span>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                          {p.title}
                        </h4>
                        <span className="rounded-full border border-border bg-background px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                          {p.tag}
                        </span>
                      </div>
                      <p className="mt-1 max-w-xl text-[12.5px] leading-relaxed text-muted-foreground sm:text-sm">
                        {p.description}
                      </p>
                    </div>
                  </div>

                  {/* Hover arrow */}
                  <RiArrowRightUpLine className="mt-1 size-4 shrink-0 text-muted-foreground/40 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:mt-0" />
                </li>
              );
            })}
          </ol>
        </div>

        {/* ============================================================
            STATUS BOARD — dark mission panel (asymmetric, not a stat bar)
        ============================================================ */}
        <div className="mt-16 lg:mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-foreground">
            {/* Ambient accents */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-primary/25 blur-[90px]" />
              <div className="absolute -bottom-24 -right-16 h-[280px] w-[280px] rounded-full bg-primary/10 blur-[80px]" />

              {/* Ruling lines */}
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
              {/* Corner marks */}
              <div className="absolute left-4 top-4 size-6">
                <span className="absolute left-0 top-0 h-px w-6 bg-primary/70" />
                <span className="absolute left-0 top-0 h-6 w-px bg-primary/70" />
              </div>
              <div className="absolute bottom-4 right-4 size-6">
                <span className="absolute bottom-0 right-0 h-px w-6 bg-primary/70" />
                <span className="absolute bottom-0 right-0 h-6 w-px bg-primary/70" />
              </div>
            </div>

            {/* Content grid — asymmetric split */}
            <div className="relative grid grid-cols-1 gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
              {/* Left — title block */}
              <div className="lg:col-span-4">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/15 px-2.5 py-1">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-primary">
                    Live dispatch status
                  </span>
                </div>

                <p className="mt-4 font-serif text-xl font-bold leading-snug -tracking-tight text-background sm:text-2xl">
                  Numbers that define every call-out.
                </p>

                <p className="mt-3 text-[12.5px] leading-relaxed text-background/60 sm:text-[13.5px]">
                  Every dispatch is measured against the same four metrics — no
                  exceptions, no shortcuts.
                </p>
              </div>

              {/* Right — 4 stats in a 2×2 / row layout */}
              <div className="grid grid-cols-2 gap-y-6 divide-y divide-background/10 lg:col-span-8 lg:grid-cols-4 lg:divide-y-0 lg:divide-x lg:pl-6">
                {HIGHLIGHTS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.label}
                      className="flex items-start gap-3 px-1 pt-4 first:pt-0 lg:px-5 lg:pt-0"
                    >
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                        <Icon className="size-4 text-primary" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-2xl font-black leading-none text-background sm:text-[1.7rem]">
                          {item.value}
                          {item.unit && (
                            <span className="ml-0.5 text-sm font-semibold text-background/45">
                              {item.unit}
                            </span>
                          )}
                        </p>
                        <p className="mt-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-background/50">
                          {item.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Footer strip — trust line inside the dark panel */}
            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-background/10 px-6 py-4 sm:px-8 lg:px-10">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.18em] text-background/55">
                <span className="inline-flex items-center gap-1.5">
                  <RiCheckDoubleFill className="size-3 text-primary" />
                  Certified mechanics
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <RiCheckDoubleFill className="size-3 text-primary" />
                  Genuine OEM parts
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <RiCheckDoubleFill className="size-3 text-primary" />
                  Warranty-backed work
                </span>
              </div>
              <Link
                href="/about"
                className="group inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.18em] text-primary transition-colors hover:text-primary/80"
              >
                Our story
                <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;