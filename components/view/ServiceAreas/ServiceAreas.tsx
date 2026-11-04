import Link from "next/link";
import {
  RiMapPinFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiTimeFill,
  RiFlashlightFill,
  RiShieldCheckFill,
  RiRadarLine,
  RiCompass3Line,
  RiRouteFill,
  RiMapPin2Line,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";

/* ------------------------------------------------------------------ */
/*  Zone taxonomy — derives from existing slugs, no data duplication  */
/* ------------------------------------------------------------------ */
type Zone = {
  id: string;
  label: string;
  blurb: string;
  slugs: string[]; // matches SiteConfig.serviceAreas[].slug
};

const ZONES: Zone[] = [
  {
    id: "industrial",
    label: "Industrial & Freezones",
    blurb: "High-volume fleet & workshop coverage",
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
    label: "Residential Communities",
    blurb: "Doorstep repairs for villas & apartments",
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
    label: "Waterfront & Marina",
    blurb: "Marina-side & beachfront response",
    slugs: [
      "jumeirah-lakes-towers",
      "dubai-marina",
      "jumeirah-beach-residence",
    ],
  },
  {
    id: "south",
    label: "Dubai South",
    blurb: "Expo corridor & new developments",
    slugs: ["dubai-south"],
  },
];

/* Featured hero area — top-of-board highlight */
const FEATURED_SLUG = "jebel-ali-industrial-area";

export function ServiceAreas() {
  const { serviceAreas, responseTime, city } = SiteConfig;

  // Build a slug → area lookup so zone grouping survives config reorderings
  const bySlug = new Map(serviceAreas.map((a) => [a.slug, a]));
  const featured = bySlug.get(FEATURED_SLUG) ?? serviceAreas[0];

  // Track which slugs the zone schema covers (safety net for new areas)
  const mappedSlugs = new Set(ZONES.flatMap((z) => z.slugs));
  const unmapped = serviceAreas.filter((a) => !mappedSlugs.has(a.slug));

  return (
    <section
      aria-labelledby="areas-title"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      {/* Decorative map grid (subtle) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.25] dark:opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-border) 1px, transparent 1px)",
          backgroundSize: "22px 22px",
          maskImage:
            "radial-gradient(ellipse 90% 80% at 50% 0%, black 20%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 90% 80% at 50% 0%, black 20%, transparent 90%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">
        {/* ============================================================
            HEADER — live coverage meter + legend
        ============================================================ */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Coverage Map · {city}
              </span>
            </div>

            <h2
              id="areas-title"
              className="mt-5 font-serif text-[clamp(2rem,4.4vw,3.4rem)] font-bold leading-[1.02] -tracking-[0.025em] text-foreground"
            >
              We&apos;re already{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">near you</span>
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
              </span>
              .
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {serviceAreas.length} service zones across Dubai — dispatched from
              our Jebel Ali base with a{" "}
              <span className="font-semibold text-foreground">
                {responseTime}
              </span>{" "}
              response window, 24/7.
            </p>
          </div>

          {/* Coverage meter — a premium stat cluster */}
          <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur lg:min-w-[360px]">
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Zones
              </p>
              <p className="mt-1 text-2xl font-bold leading-none text-foreground">
                {serviceAreas.length}
              </p>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Response
              </p>
              <p className="mt-1 text-2xl font-bold leading-none text-foreground">
                24<span className="text-xs font-semibold text-muted-foreground">/7</span>
              </p>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                ETA
              </p>
              <p className="mt-1 text-2xl font-bold leading-none text-foreground">
                {responseTime.split(" ")[0]}
                <span className="ml-0.5 text-xs font-semibold text-muted-foreground">min</span>
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            FEATURED ZONE — dispatch focal point
        ============================================================ */}
        <div className="mt-10 grid grid-cols-1 gap-4 lg:grid-cols-12">
          {/* Featured card */}
          <Link
            href={`/area-we-serve/${featured.slug}`}
            className="group relative isolate overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.09] via-primary/[0.03] to-transparent p-6 transition-colors hover:border-primary/45 lg:col-span-5 lg:p-8"
          >
            {/* Corner radar accent */}
            <div aria-hidden className="absolute right-4 top-4 flex size-16 items-center justify-center opacity-60">
              <RiRadarLine className="size-16 text-primary/25" />
            </div>

            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
              <RiFlashlightFill className="size-3" />
              Fastest response zone
            </div>

            <h3 className="mt-4 font-serif text-2xl font-bold leading-tight -tracking-tight text-foreground sm:text-3xl">
              {featured.name}
            </h3>

            <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-muted-foreground">
              Our home base. Same-team dispatch, shortest travel time, most
              on-site repairs completed without a workshop visit.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-primary">
                <RiMapPin2Line className="size-3" />
                Base coverage
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1 text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">
                <RiTimeFill className="size-3 text-primary" />
                {responseTime}
              </span>
            </div>

            <div className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
              Explore zone
              <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>

          {/* Zone grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-7">
            {ZONES.filter((z) => z.id !== "industrial").map((zone) => {
              // resolve slugs → areas, keep insertion order
              const areas = zone.slugs
                .map((s) => bySlug.get(s))
                .filter((a): a is NonNullable<typeof a> => Boolean(a));

              return (
                <div
                  key={zone.id}
                  className="rounded-2xl border border-border bg-card/70 p-5 backdrop-blur"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-[13px] font-bold tracking-tight text-foreground">
                        {zone.label}
                      </h4>
                      <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
                        {zone.blurb}
                      </p>
                    </div>
                    <span className="shrink-0 rounded-md bg-primary/10 px-1.5 py-0.5 text-[10px] font-bold tabular-nums text-primary">
                      {areas.length}
                    </span>
                  </div>

                  <ul className="mt-4 flex flex-wrap gap-1.5">
                    {areas.map((area, i) => (
                      <li key={area.slug}>
                        <Link
                          href={`/area-we-serve/${area.slug}`}
                          className="group/link inline-flex items-center gap-1.5 rounded-md border border-transparent bg-muted/60 px-2 py-1 text-[11.5px] font-semibold text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.08] hover:text-primary"
                        >
                          <span className="font-mono text-[9px] tabular-nums text-primary/60 group-hover/link:text-primary">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="whitespace-nowrap">{area.name}</span>
                          <RiArrowRightUpLine className="size-2.5 -ml-1 opacity-0 transition-all group-hover/link:ml-0 group-hover/link:opacity-100" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================
            INDUSTRIAL ZONE — full-width, since it's the biggest group
        ============================================================ */}
        {(() => {
          const industrial = ZONES.find((z) => z.id === "industrial")!;
          const areas = industrial.slugs
            .map((s) => bySlug.get(s))
            .filter((a): a is NonNullable<typeof a> => Boolean(a));
          return (
            <div className="mt-4 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur sm:p-6">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-8 items-center justify-center rounded-lg bg-primary/10">
                    <RiRouteFill className="size-4 text-primary" />
                  </span>
                  <div>
                    <h4 className="text-sm font-bold tracking-tight text-foreground">
                      {industrial.label}
                    </h4>
                    <p className="text-[11px] text-muted-foreground">
                      {industrial.blurb}
                    </p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary/10 px-2.5 py-1 text-[10.5px] font-bold uppercase tracking-wider text-primary sm:self-auto">
                  <RiCompass3Line className="size-3" />
                  {areas.length} zones · highest density
                </span>
              </div>

              <ul className="mt-4 grid grid-cols-2 gap-1.5 sm:grid-cols-3 lg:grid-cols-6">
                {areas.map((area, i) => (
                  <li key={area.slug}>
                    <Link
                      href={`/area-we-serve/${area.slug}`}
                      className="group/link flex items-center gap-1.5 rounded-md border border-transparent bg-muted/60 px-2 py-1.5 text-[11.5px] font-semibold text-muted-foreground transition-all duration-200 hover:border-primary/40 hover:bg-primary/[0.08] hover:text-primary"
                    >
                      <span className="font-mono text-[9px] tabular-nums text-primary/60 group-hover/link:text-primary">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="truncate">{area.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          );
        })()}

        {/* Safety net — any config area not yet zoned */}
        {unmapped.length > 0 && (
          <div className="mt-4 rounded-2xl border border-dashed border-border bg-muted/30 p-5">
            <p className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
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

        {/* ============================================================
            FOOTER — trust + link
        ============================================================ */}
        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10.5px] font-bold uppercase tracking-wider text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              Live dispatch
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiShieldCheckFill className="size-3 text-primary" />
              Certified mechanics
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiTimeFill className="size-3 text-primary" />
              {responseTime} window
            </span>
          </div>

          <Link
            href="/area-we-serve"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80"
          >
            Browse all areas
            <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default ServiceAreas;