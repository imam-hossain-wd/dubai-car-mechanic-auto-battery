// app/(marketing)/service-areas/page.tsx

import Link from "next/link";
import type { Metadata } from "next";
import {
  RiMapPinFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiTimeFill,
  RiShieldCheckFill,
  RiBatteryChargeFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiRidingFill,
  RiRoadMapFill,
  RiCheckDoubleFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiBuildingFill,
  RiHome4Fill,
  RiStoreFill,
  RiMap2Fill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiRadarFill,
  RiCompass3Line,
  RiNavigationFill,
  RiRouteFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";

/* ============ Zone grouping (slug-based) ============ */
type Zone = {
  id: string;
  label: string;
  blurb: string;
  icon: React.ElementType;
  slugs: string[];
};

const ZONES: Zone[] = [
  {
    id: "industrial",
    label: "Industrial & Freezones",
    blurb: "High-volume fleet, workshop, and business park coverage",
    icon: RiBuildingFill,
    slugs: [
      "jebel-ali-industrial-area",
      "jabal-ali-industrial-second",
      "jebel-ali-freezone",
      "dubai-investment-park-first",
      "dubai-investment-park-second",
      "dubai-production-city",
    ],
  },
  {
    id: "residential",
    label: "Residential communities",
    blurb: "Doorstep repairs for villas, townhouses, and apartments",
    icon: RiHome4Fill,
    slugs: [
      "discovery-gardens",
      "al-furjan",
      "jumeirah-park",
      "jumeirah-islands",
      "dubai-sports-city",
      "madinat-latifa",
    ],
  },
  {
    id: "waterfront",
    label: "Waterfront & marina",
    blurb: "Marina-side, beachfront, and tower-parking response",
    icon: RiRidingFill,
    slugs: [
      "jumeirah-lakes-towers",
      "dubai-marina",
      "jumeirah-beach-residence",
    ],
  },
  {
    id: "south",
    label: "Dubai South & Expo corridor",
    blurb: "Expo district and new development coverage",
    icon: RiRouteFill,
    slugs: ["dubai-south"],
  },
];

/* ============ Trust row ============ */
const TRUST = [
  { icon: RiTimeFill, value: SiteConfig.responseTime, label: "Response" },
  { icon: RiShieldCheckFill, value: "100%", label: "Verified" },
  { icon: RiBatteryChargeFill, value: "OEM", label: "Parts only" },
  { icon: RiCustomerServiceFill, value: "24/7", label: "Available" },
] as const;

export default function ServiceAreasPage() {
  const {
    serviceAreas,
    city,
    responseTime,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    GMB,
    location,
    country,
  } = SiteConfig;

  const bySlug = new Map(serviceAreas.map((a) => [a.slug, a]));
  const mapped = new Set(ZONES.flatMap((z) => z.slugs));
  const unmapped = serviceAreas.filter((a) => !mapped.has(a.slug));

  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
          MASTHEAD — editorial hero
      ============================================================ */}
      <section
        aria-labelledby="areas-title"
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
            {/* Left — headline (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Coverage atlas · {city}
                </span>
              </div>

              <h1
                id="areas-title"
                className="mt-6 font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.98] -tracking-[0.03em] text-foreground"
              >
                24/7 mobile help,
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">
                    everywhere
                  </span>
                  <svg
                    aria-hidden
                    viewBox="0 0 360 24"
                    className="absolute -bottom-1 left-0 z-0 h-2.5 w-full text-primary/25"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 16 C 60 4, 120 22, 180 12 S 260 4, 358 14"
                      stroke="currentColor"
                      strokeWidth="6"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>{" "}
                in {city}.
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                Strategically positioned rescue vans across{" "}
                <span className="font-semibold text-foreground">
                  {serviceAreas.length}+ areas
                </span>{" "}
                — from Jebel Ali and DIP to Marina, JLT, and Jumeirah. Guaranteed{" "}
                <span className="font-semibold text-foreground">
                  {responseTime}
                </span>{" "}
                onsite, 24/7.
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { icon: RiFlashlightFill, label: "No towing required" },
                  { icon: RiShieldCheckFill, label: "Onsite diagnostics" },
                  { icon: RiBatteryChargeFill, label: "Genuine OEM parts" },
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

            {/* Right — coverage atlas (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-primary/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                  {/* Head */}
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
                    <div className="flex items-center gap-2">
                      <RiRadarFill className="size-3.5 text-primary" />
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                        Coverage atlas
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Live
                    </span>
                  </div>

                  {/* Zone list */}
                  <ul className="divide-y divide-border">
                    {ZONES.map((z) => {
                      const Icon = z.icon;
                      const count = z.slugs.filter((s) => bySlug.has(s)).length;
                      return (
                        <li
                          key={z.id}
                          className="flex items-center gap-3 px-5 py-3"
                        >
                          <span className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                            <Icon className="size-3.5 text-primary" />
                          </span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-[12px] font-bold text-foreground">
                              {z.label}
                            </p>
                            <p className="truncate text-[10px] text-muted-foreground">
                              {z.blurb}
                            </p>
                          </div>
                          <span className="shrink-0 font-mono text-[11px] font-bold tabular-nums text-primary">
                            {String(count).padStart(2, "0")}
                          </span>
                        </li>
                      );
                    })}
                  </ul>

                  {/* Footer meta */}
                  <div className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      <RiCompass3Line className="size-3 text-primary" />
                      {serviceAreas.length} areas · {city}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <RiTimeFill className="size-3" />
                      {responseTime}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          ZONE LEDGER — grouped coverage
      ============================================================ */}
      <section
        aria-labelledby="zones-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          {/* Header */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Coverage zones
                </span>
              </div>
              <h2
                id="zones-title"
                className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                Where we{" "}
                <span className="italic text-primary">already are</span>.
              </h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
                Grouped by driving distance from our Jebel Ali base — the
                closest zones consistently hit the fastest response times.
              </p>
            </div>

            {/* Stat rail */}
            <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur lg:col-span-5">
              <div className="px-4 py-4 sm:px-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Zones
                </p>
                <p className="mt-1 text-lg font-bold leading-none text-foreground">
                  {String(ZONES.length).padStart(2, "0")}
                </p>
              </div>
              <div className="px-4 py-4 sm:px-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Areas
                </p>
                <p className="mt-1 text-lg font-bold leading-none text-foreground">
                  {serviceAreas.length}
                </p>
              </div>
              <div className="px-4 py-4 sm:px-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  ETA
                </p>
                <p className="mt-1 text-lg font-bold leading-none text-foreground">
                  {responseTime.split(" ")[0]}
                  <span className="ml-0.5 text-xs font-semibold text-muted-foreground">
                    min
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* Zone blocks */}
          <div className="mt-12 space-y-6">
            {ZONES.map((zone) => {
              const Icon = zone.icon;
              const areas = zone.slugs
                .map((s) => bySlug.get(s))
                .filter((a): a is NonNullable<typeof a> => Boolean(a));

              if (areas.length === 0) return null;

              return (
                <div
                  key={zone.id}
                  className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur"
                >
                  {/* Zone header */}
                  <div className="flex flex-col gap-3 border-b border-border p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </span>
                      <div>
                        <h3 className="text-[13px] font-bold tracking-tight text-foreground sm:text-sm">
                          {zone.label}
                        </h3>
                        <p className="text-[11px] text-muted-foreground">
                          {zone.blurb}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary sm:self-auto">
                      <RiMapPinFill className="size-3" />
                      {String(areas.length).padStart(2, "0")} areas
                    </span>
                  </div>

                  {/* Area ledger */}
                  <ol className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-3">
                    {areas.map((area, i) => (
                      <li key={area.slug}>
                        <Link
                          href={`/area-we-serve/${area.slug}`}
                          className="group flex items-center gap-3 border-b border-border px-5 py-3.5 transition-colors last:border-b-0 hover:bg-primary/[0.03] sm:border-b-0 sm:border-r sm:border-border sm:[&:nth-child(2n)]:border-r-0 lg:[&:nth-child(2n)]:border-r lg:[&:nth-child(3n)]:border-r-0"
                        >
                          <span className="font-mono text-[10px] font-bold tabular-nums text-primary/60">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="min-w-0 flex-1 truncate text-[12.5px] font-semibold text-foreground">
                            {area.name}
                          </span>
                          <RiArrowRightUpLine className="size-3.5 shrink-0 text-muted-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                        </Link>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}

            {/* Safety net — any config area not yet zoned */}
            {unmapped.length > 0 && (
              <div className="rounded-2xl border border-dashed border-border bg-muted/30 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Other coverage
                </p>
                <ul className="mt-3 flex flex-wrap gap-1.5">
                  {unmapped.map((area) => (
                    <li key={area.slug}>
                      <Link
                        href={`/area-we-serve/${area.slug}`}
                        className="inline-flex items-center gap-1.5 rounded-md bg-background px-2 py-1 text-[11.5px] font-semibold text-muted-foreground hover:text-primary"
                      >
                        <RiMapPinFill className="size-2.5 text-primary" />
                        {area.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ============================================================
          BASE + COVERAGE — map panel with copy
      ============================================================ */}
      <section
        aria-labelledby="base-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Narrative (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Ops base · Onsite network
                </span>
              </div>
              <h2
                id="base-title"
                className="mt-5 font-serif text-[clamp(1.8rem,3.8vw,2.8rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                One base.{" "}
                <span className="italic text-primary">
                  Every corner
                </span>{" "}
                of {city}.
              </h2>
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                Our fully equipped vans leave from{" "}
                <span className="font-semibold text-foreground">
                  {location}
                </span>
                , which is why the surrounding zones consistently hit the
                fastest response times. But every area we serve is covered by a
                live dispatch at every hour.
              </p>
              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                No towing, no waiting rooms, no lost hours. Just certified
                mechanics, dealer-grade tools, and transparent pricing — right
                where your car is parked.
              </p>

              {/* Service list — replaces feature-card grid */}
              <ul className="mt-7 divide-y divide-border border-y border-border">
                {[
                  "Battery replacement & jump start",
                  "Computer diagnostics (OBD-II)",
                  "Alternator & starter repair",
                  "AC gas refill & repair",
                  "Brake pads & rotors",
                  "Fuel pump service",
                ].map((f, i) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 py-3 transition-colors hover:bg-primary/[0.03]"
                  >
                    <span className="mt-0.5 font-mono text-[10px] font-bold tabular-nums text-primary/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <RiCheckDoubleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                    <span className="text-[13.5px] font-semibold text-foreground">
                      {f}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Coordinates panel (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                {/* Head rail */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-3">
                  <div className="flex items-center gap-2.5">
                    <RiRoadMapFill className="size-3.5 text-primary" />
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                      Ops base · Coordinates
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
                <div className="relative aspect-[4/3] w-full bg-muted">
                  <div className="pointer-events-none absolute left-4 top-4 z-10 size-6">
                    <span className="absolute left-0 top-0 h-px w-5 bg-primary/80" />
                    <span className="absolute left-0 top-0 h-5 w-px bg-primary/80" />
                  </div>
                  <div className="pointer-events-none absolute bottom-4 right-4 z-10 size-6">
                    <span className="absolute bottom-0 right-0 h-px w-5 bg-primary/80" />
                    <span className="absolute bottom-0 right-0 h-5 w-px bg-primary/80" />
                  </div>

                  <iframe
                    title={`${SiteConfig.brandName} base location`}
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
                </div>

                {/* Footer meta */}
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-border bg-muted/30 px-5 py-3 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <RiMapPinFill className="size-3 text-primary" />
                    {location}, {city}
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

              {/* Trust mini-grid */}
              <div className="mt-4 grid grid-cols-2 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur sm:grid-cols-4 sm:divide-y-0 sm:divide-x">
                {TRUST.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div
                      key={t.label}
                      className="flex items-center gap-2 px-3 py-3"
                    >
                      <span className="flex size-8 shrink-0 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="size-3.5 text-primary" />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[12px] font-bold leading-tight text-foreground">
                          {t.value}
                        </p>
                        <p className="truncate text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
                          {t.label}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
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
                    Trusted by 500+ drivers
                  </span>
                </div>

                <h2
                  id="signoff-title"
                  className="mt-4 font-serif text-[clamp(1.8rem,4.6vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-background"
                >
                  Car trouble?{" "}
                  <span className="italic text-primary">
                    We&apos;ll come to you
                  </span>
                  .
                </h2>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-background/60 sm:text-[15px]">
                  Wherever you&apos;re parked in {city} — highway shoulder,
                  basement, or office parking — our mobile mechanics will meet
                  you there.
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