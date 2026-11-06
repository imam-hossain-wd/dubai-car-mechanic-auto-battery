// app/(marketing)/_components/projects.tsx

import Link from "next/link";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiFlashlightFill,
  RiTimeFill,
  RiMapPinFill,
  RiGridFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiRadarFill,
  RiVerifiedBadgeFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import { projectData } from "@/data/ProjectData";

/* ============================================================
   Section — homepage "Recent Work Manifest"
   ============================================================ */
export function Projects() {
  const { city, responseTime, serviceAreas, displayNumber, numberCallLink, whatsappCallLink } =
    SiteConfig;

  /* Featured = newest case · 4-recent strip = next 4 */
  const featured = projectData[0];
  const recent = projectData.slice(1, 5);

  return (
    <section
      aria-labelledby="recent-projects-title"
      className="relative w-full overflow-hidden border-t border-border bg-background"
    >
      {/* ============================================================
          BACKDROP — ruled columns + route + glows (matches every page)
      ============================================================ */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "96px 100%",
            maskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 25%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 25%, transparent 90%)",
          }}
        />
        <svg
          aria-hidden
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 text-primary/25 lg:block"
          viewBox="0 0 600 800"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M-40 660 C 140 600, 260 520, 340 360 S 520 80, 700 40"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="6 10"
          />
          <circle cx="340" cy="360" r="4" fill="currentColor" />
        </svg>
        <div className="absolute -top-24 right-0 h-[460px] w-[460px] rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* ============================================================
            HEADER — editorial + stat rail
        ============================================================ */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Recent work · {city}
              </span>
            </div>

            <h2
              id="recent-projects-title"
              className="mt-5 font-serif text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.02] -tracking-[0.028em] text-foreground"
            >
              Real cases,
              <br className="hidden sm:block" />{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">
                  documented
                </span>
                <svg
                  aria-hidden
                  viewBox="0 0 260 24"
                  className="absolute -bottom-1 left-0 z-0 h-2.5 w-full text-primary/25"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 16 C 60 4, 120 22, 180 12 S 240 4, 258 14"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              in full.
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Every case below is a verified repair from our mobile units across{" "}
              {city} — with real diagnostics, the exact parts used, and the
              outcomes we delivered.
            </p>
          </div>

          {/* Stat rail */}
          <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur lg:col-span-5">
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Cases
              </p>
              <p className="mt-1 text-lg font-bold leading-none text-foreground">
                {String(projectData.length).padStart(2, "0")}
              </p>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Areas
              </p>
              <p className="mt-1 text-lg font-bold leading-none text-foreground">
                {serviceAreas.length}+
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

        {/* ============================================================
            FEATURED CASE — asymmetric editorial split
        ============================================================ */}
        <div className="mt-10 grid grid-cols-1 gap-5 lg:grid-cols-12 lg:gap-6">
          {/* Featured card (5 cols on lg) */}
          <div className="lg:col-span-5">
            <ProjectCard
              project={featured}
              index={0}
              variant="featured"
              className="h-full"
            />
          </div>

          {/* Featured narrative card (7 cols) */}
          <div className="lg:col-span-7">
            <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8">
              {/* Corner crop marks */}
              <div className="pointer-events-none absolute right-3 top-3 size-6">
                <span className="absolute right-0 top-0 h-px w-4 bg-primary/50" />
                <span className="absolute right-0 top-0 h-4 w-px bg-primary/50" />
              </div>

              {/* Label */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <RiFlashlightFill className="size-3 text-primary" />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-primary">
                    Featured case · Case 01
                  </span>
                </div>

                {/* Heading */}
                <h3 className="mt-4 font-serif text-xl font-bold leading-tight -tracking-tight text-foreground sm:text-2xl">
                  {featured.title}
                </h3>

                {/* Preview */}
                {featured.problemAnalysis && (
                  <p className="mt-3 max-w-2xl text-[13.5px] leading-relaxed text-muted-foreground">
                    {featured.problemAnalysis.split(". ").slice(0, 2).join(". ")}
                    .
                  </p>
                )}
              </div>

              {/* Spec ledger */}
              <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 border-t border-border pt-5 sm:grid-cols-4">
                <div>
                  <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Vehicle
                  </dt>
                  <dd className="mt-0.5 truncate text-[12.5px] font-bold text-foreground">
                    {featured.clientOverview?.carModel ?? "—"}
                  </dd>
                </div>
                <div>
                  <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Area
                  </dt>
                  <dd className="mt-0.5 truncate text-[12.5px] font-bold text-foreground">
                    {featured.area}
                  </dd>
                </div>
                <div>
                  <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Response
                  </dt>
                  <dd className="mt-0.5 truncate text-[12.5px] font-bold text-foreground">
                    {featured.clientOverview?.responseTimeMinutes ?? 30} min
                  </dd>
                </div>
                <div>
                  <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Completed
                  </dt>
                  <dd className="mt-0.5 truncate text-[12.5px] font-bold text-foreground">
                    {featured.clientOverview?.completionTimeHours ?? "Same day"}
                  </dd>
                </div>
              </dl>

              {/* CTA row */}
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/projects/${featured.slug ?? featured.id ?? ""}`}
                  className="group inline-flex h-11 items-center gap-2.5 rounded-xl bg-primary px-5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                >
                  Read full case
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex h-11 items-center gap-2 rounded-xl border border-border bg-background px-5 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  All projects
                  <RiArrowRightUpLine className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            RECENT LOG — 4-card strip
        ============================================================ */}
        <div className="mt-12">
          {/* Log header */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <RiGridFill className="size-3.5 text-primary" />
              <h3 className="text-[13px] font-bold tracking-tight text-foreground">
                More recent cases
              </h3>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[9.5px] font-bold tabular-nums text-primary">
                {String(recent.length).padStart(2, "0")}
              </span>
            </div>

            <Link
              href="/projects"
              className="group inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-primary hover:text-primary/80"
            >
              Full repair log
              <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Recent cards grid */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
            {recent.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx + 1}
              />
            ))}
          </div>
        </div>

        {/* ============================================================
            SIGN-OFF — manifest footer (replaces banner)
        ============================================================ */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
          <div className="flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
            {/* Left — narrative */}
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                <RiRadarFill className="size-3" />
                Full manifest · {projectData.length} documented cases
              </div>
              <h3 className="mt-2 font-serif text-xl font-bold leading-snug -tracking-tight text-foreground sm:text-2xl">
                See every repair{" "}
                <span className="italic text-primary">we&apos;ve completed</span>.
              </h3>
              <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                Documented mobile car repair cases from real drivers across{" "}
                {city} — with diagnostics, parts used, and outcomes.
              </p>
            </div>

            {/* Right — dual CTA */}
            <div className="flex flex-col gap-2.5 sm:flex-row">
              <Link
                href="/projects"
                className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
              >
                View all projects
                <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href={numberCallLink}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-border bg-background px-6 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
              >
                <RiPhoneFill className="size-4" />
                {displayNumber}
              </Link>
            </div>
          </div>

          {/* Trust rail */}
          <div className="grid grid-cols-2 divide-x divide-border border-t border-border sm:grid-cols-4">
            {[
              { icon: RiTimeFill, label: `${responseTime} response` },
              { icon: RiVerifiedBadgeFill, label: "Verified outcomes" },
              { icon: RiFlashlightFill, label: "Onsite repairs" },
              { icon: RiMapPinFill, label: `All ${serviceAreas.length} areas` },
            ].map((t) => {
              const Icon = t.icon;
              return (
                <div
                  key={t.label}
                  className="flex items-center gap-2.5 px-4 py-3.5"
                >
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                    <Icon className="size-3.5 text-primary" />
                  </span>
                  <span className="truncate text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {t.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;