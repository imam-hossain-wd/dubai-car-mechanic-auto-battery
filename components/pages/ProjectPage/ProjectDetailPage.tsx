// "use client";
import Image from "next/image";
import Link from "next/link";
import { SiteConfig } from "@/config/siteConfig";
import { projectData } from "@/data/ProjectData";


import {
  RiVerifiedBadgeFill,
  RiTimeFill,
  RiCheckDoubleFill,
  RiPhoneFill,
  RiArrowRightLine,
  RiWhatsappFill,
  RiArrowRightUpLine,
  RiCompass3Line,
  RiRadarFill,
  RiCarFill,
  RiAlertLine,
  RiToolsFill,
  RiQuestionLine,
  RiArrowDownSLine,
  RiFlashlightFill,
  RiStarFill,
  RiMapPinFill,
} from "@remixicon/react";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import { ReactNode } from "react";

/* ============================================================
   PROJECT TYPES
============================================================ */

type Project = (typeof projectData)[number];

type ProjectDetailPageProps = {
  project: Project;
};

/* ============================================================
   PROJECT DETAIL PAGE
============================================================ */

export default function ProjectDetailPage({
  project,
}: ProjectDetailPageProps) {

  const {
    city,
    country,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    responseTime,
    serviceAreas,
    location,
  } = SiteConfig;

  const currentIndex = projectData.findIndex(
    (item) => item.slug === project.slug
  );

  const folio = String(currentIndex + 1).padStart(2, "0");
  const totalFolio = String(projectData.length).padStart(2, "0");

  /* ============================================================
     RELATED PROJECTS
  ============================================================ */

  const sameCategory = projectData.filter(
    (item) =>
      item.slug !== project.slug &&
      item.category === project.category
  );

  const filler = projectData.filter(
    (item) =>
      item.slug !== project.slug &&
      !sameCategory.some(
        (related) => related.slug === item.slug
      )
  );

  const relatedFinal = [
    ...sameCategory,
    ...filler,
  ].slice(0, 3);


  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
          MASTHEAD — field report
      ============================================================ */}
      <section
        aria-labelledby="project-title"
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

        <div className="relative mx-auto w-full max-w-[1400px] px-5 pb-16 pt-10 sm:px-8 sm:pb-20 sm:pt-14 lg:px-12 lg:pb-24 lg:pt-16">
          {/* Breadcrumb rail */}
          <nav
            aria-label="Breadcrumb"
            className="flex flex-wrap items-center gap-2 border-b border-border pb-4 text-[10.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground"
          >
            <Link href="/" className="transition-colors hover:text-primary">
              Home
            </Link>
            <span className="size-1 rounded-full bg-border" />
            <Link
              href="/projects"
              className="transition-colors hover:text-primary"
            >
              Projects
            </Link>
            <span className="size-1 rounded-full bg-border" />
            <span className="text-primary">
              Case {folio} / {totalFolio}
            </span>
          </nav>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left — headline block (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Field report · {project.category ?? "Repair"}
                </span>
              </div>

              <h1
                id="project-title"
                className="mt-5 font-serif text-[clamp(2rem,5vw,3.6rem)] font-bold leading-[1.04] -tracking-[0.028em] text-foreground"
              >
                {project.title}
              </h1>

              <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-primary">
                {project.service} · {project.area}, {city}
              </p>

              {project.problemAnalysis && (
                <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                  {project.problemAnalysis.split(". ").slice(0, 2).join(". ")}.
                </p>
              )}

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { icon: RiVerifiedBadgeFill, label: "Verified repair" },
                  {
                    icon: RiTimeFill,
                    label: `${
                      project.clientOverview?.responseTimeMinutes ?? 30
                    } min response`,
                  },
                  { icon: RiCheckDoubleFill, label: "Warranty-backed" },
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
                  Book a repair
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

            {/* Right — case dossier (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-primary/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    {project.image ? (
                      <Image
                        src={project.image}
                        alt={`${project.title} — ${project.area}, Dubai`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

                    <div className="pointer-events-none absolute left-3 top-3 size-6">
                      <span className="absolute left-0 top-0 h-px w-4 bg-primary/80" />
                      <span className="absolute left-0 top-0 h-4 w-px bg-primary/80" />
                    </div>

                    <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
                      <RiVerifiedBadgeFill className="size-3 text-primary" />
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                        Verified case
                      </span>
                    </div>

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                        Case {folio} · {project.area}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white/95">
                        {project.clientOverview?.carModel ?? "Onsite repair"}
                      </p>
                    </div>
                  </div>

                  <dl className="divide-y divide-border">
                    {project.clientOverview?.responseTimeMinutes && (
                      <div className="flex items-center justify-between gap-3 px-5 py-3">
                        <dt className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Response
                        </dt>
                        <dd className="font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                          {project.clientOverview.responseTimeMinutes} min
                        </dd>
                      </div>
                    )}
                    {project.clientOverview?.completionTimeHours && (
                      <div className="flex items-center justify-between gap-3 px-5 py-3">
                        <dt className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Completed in
                        </dt>
                        <dd className="font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                          {project.clientOverview.completionTimeHours}
                        </dd>
                      </div>
                    )}
                    <div className="flex items-center justify-between gap-3 px-5 py-3">
                      <dt className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Location
                      </dt>
                      <dd className="font-mono text-[12.5px] font-bold text-foreground">
                        {project.area}
                      </dd>
                    </div>
                  </dl>

                  <div className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Closed
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      <RiCompass3Line className="size-3 text-primary" />
                      {location}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          CLIENT OVERVIEW — spec sheet
      ============================================================ */}
      {project.clientOverview && (
        <section
          aria-labelledby="overview-title"
          className="relative w-full border-b border-border"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                    Client overview
                  </span>
                </div>
                <h2
                  id="overview-title"
                  className="mt-4 font-serif text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-tight -tracking-tight text-foreground"
                >
                  The vehicle &amp; the brief.
                </h2>
              </div>
              <span className="inline-flex items-center gap-1.5 self-start rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary sm:self-auto">
                <RiRadarFill className="size-3" />
                Case {folio}
              </span>
            </div>

            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              <SpecBlock
                label="Vehicle"
                value={project.clientOverview.carModel}
                icon={RiCarFill}
              />
              <SpecBlock
                label="Reported issue"
                value={project.clientOverview.issueReported}
                icon={RiAlertLine}
              />
              <SpecBlock
                label="Response time"
                value={`${project.clientOverview.responseTimeMinutes} minutes`}
                icon={RiTimeFill}
              />
              <SpecBlock
                label="Completion"
                value={project.clientOverview.completionTimeHours}
                icon={RiCheckDoubleFill}
              />
            </dl>
          </div>
        </section>
      )}

      {/* ============================================================
          PROTOCOL — problem → diagnosis → solution → result
      ============================================================ */}
      <section
        aria-labelledby="protocol-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                    Field protocol
                  </span>
                </div>
                <h2
                  id="protocol-title"
                  className="mt-5 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
                >
                  How this case{" "}
                  <span className="italic text-primary">was solved</span>.
                </h2>
                <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-muted-foreground">
                  A step-by-step breakdown of what we found, what we tested,
                  what we replaced, and what we measured at the end.
                </p>

                <div className="mt-6 space-y-2">
                  <span className="block text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    In this report
                  </span>
                  {[
                    { n: "01", label: "Problem" },
                    { n: "02", label: "Diagnosis" },
                    { n: "03", label: "Solution" },
                    { n: "04", label: "Result" },
                  ].map((s) => (
                    <div
                      key={s.n}
                      className="flex items-center gap-3 text-[11.5px] font-semibold"
                    >
                      <span className="font-mono text-[10px] font-bold tabular-nums text-primary/70">
                        {s.n}
                      </span>
                      <span className="text-muted-foreground">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <ol className="divide-y divide-border border-y border-border">
                {project.problemAnalysis && (
                  <ProtocolRow n="01" title="Problem">
                    <p className="text-[13.5px] leading-relaxed text-foreground/85">
                      {project.problemAnalysis}
                    </p>
                  </ProtocolRow>
                )}

                {project.diagnosticSteps &&
                  project.diagnosticSteps.length > 0 && (
                    <ProtocolRow n="02" title="Diagnosis">
                      <ol className="space-y-2">
                        {project.diagnosticSteps.map((step, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2.5 text-[13px] leading-relaxed text-foreground/85"
                          >
                            <span className="mt-0.5 font-mono text-[10px] font-bold tabular-nums text-primary/70">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            <RiCheckDoubleFill className="mt-0.5 size-3 shrink-0 text-primary" />
                            <span>{step}</span>
                          </li>
                        ))}
                      </ol>
                    </ProtocolRow>
                  )}

                {project.solutionDetails && (
                  <ProtocolRow n="03" title="Solution">
                    <p className="text-[13.5px] leading-relaxed text-foreground/85">
                      {project.solutionDetails}
                    </p>
                  </ProtocolRow>
                )}

                {project.resultsSummary && (
                  <ProtocolRow n="04" title="Result">
                    <p className="text-[13.5px] leading-relaxed text-foreground/85">
                      {project.resultsSummary}
                    </p>
                  </ProtocolRow>
                )}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          PARTS MANIFEST
      ============================================================ */}
      {project.partsReplaced && project.partsReplaced.length > 0 && (
        <section
          aria-labelledby="parts-title"
          className="relative w-full border-b border-border"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="lg:col-span-5">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                    Parts manifest
                  </span>
                </div>
                <h2
                  id="parts-title"
                  className="mt-5 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
                >
                  What we{" "}
                  <span className="italic text-primary">replaced</span>.
                </h2>
                <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                  Only OEM or dealership-equivalent parts are used. Every part
                  below was installed onsite and is covered by our 12–24 month
                  warranty.
                </p>

                <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-3 backdrop-blur">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <RiToolsFill className="size-4 text-primary" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      Total parts
                    </p>
                    <p className="mt-0.5 font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                      {String(project.partsReplaced.length).padStart(2, "0")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <ol className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
                  {project.partsReplaced.map((part, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-primary/[0.03]"
                    >
                      <span className="font-mono text-[10.5px] font-bold tabular-nums text-primary/70">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1 text-[13px] font-semibold text-foreground">
                        {part}
                      </span>
                      <RiCheckDoubleFill className="size-3.5 shrink-0 text-primary" />
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          FAQ
      ============================================================ */}
      {project.faqs && project.faqs.length > 0 && (
        <section
          aria-labelledby="faq-title"
          className="relative w-full border-b border-border"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
              <div className="lg:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                    Questions · Answers
                  </span>
                </div>
                <h2
                  id="faq-title"
                  className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
                >
                  Frequently asked{" "}
                  <span className="italic text-primary">questions</span>.
                </h2>
              </div>

              <div className="flex items-center gap-3 lg:col-span-5 lg:justify-end">
                <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                  <RiQuestionLine className="size-3 text-primary" />
                  <span className="font-mono text-[10.5px] font-bold tabular-nums text-foreground">
                    {String(project.faqs.length).padStart(2, "0")}
                  </span>
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    answers
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-10 divide-y divide-border border-y border-border">
              {project.faqs.map((faq, i) => (
                <details
                  key={i}
                  className="group overflow-hidden transition-colors open:bg-primary/[0.02]"
                >
                  <summary className="flex cursor-pointer items-start gap-4 py-5 [&::-webkit-details-marker]:hidden sm:gap-6">
                    <span className="mt-0.5 font-mono text-base font-bold tabular-nums text-primary/50 transition-colors group-hover:text-primary sm:text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="flex-1 text-[14px] font-bold leading-snug text-foreground sm:text-[15px]">
                      {faq.question}
                    </span>
                    <RiArrowDownSLine className="mt-0.5 size-4 shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180 group-open:text-primary" />
                  </summary>
                  <div className="pb-5 pl-9 sm:pl-12">
                    <p className="max-w-3xl text-[13px] leading-relaxed text-muted-foreground sm:text-[13.5px]">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          LOG CONTINUES — related cases
      ============================================================ */}
      {relatedFinal.length > 0 && (
        <section
          aria-labelledby="related-title"
          className="relative w-full border-b border-border"
        >
          <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
            <div className="flex flex-col gap-2 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                    Log continues
                  </span>
                </div>
                <h2
                  id="related-title"
                  className="mt-4 font-serif text-[clamp(1.5rem,3vw,2.2rem)] font-bold leading-tight -tracking-tight text-foreground"
                >
                  More{" "}
                  <span className="italic text-primary">
                    {project.category ?? "cases"}
                  </span>
                  .
                </h2>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 self-start text-[10.5px] font-bold uppercase tracking-[0.16em] text-primary hover:text-primary/80 sm:self-auto"
              >
                Full repair log
                <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
              {relatedFinal.map((p) => {
                const idx = projectData.findIndex((x) => x.slug === p.slug);
                return <ProjectCard key={p.slug} project={p} index={idx} />;
              })}
            </div>
          </div>
        </section>
      )}

      {/* ============================================================
          SIGN-OFF — dark terminal
      ============================================================ */}
      <section aria-labelledby="signoff-title" className="relative w-full">
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
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <RiFlashlightFill className="size-3 text-primary" />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-primary">
                    Available 24/7 · {country}
                  </span>
                </div>

                <h2
                  id="signoff-title"
                  className="mt-4 font-serif text-[clamp(1.8rem,4.6vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-background"
                >
                  Need the same{" "}
                  <span className="italic text-primary">repair</span>?
                </h2>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-background/60 sm:text-[15px]">
                  Our mobile mechanics handle{" "}
                  {project.service.toLowerCase()} and 18+ other repairs onsite,
                  anywhere in {city}. Call and we dispatch the nearest van.
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
                  <RiCompass3Line className="size-3 text-primary" />
                  {location} · {city}
                </p>
              </div>
            </div>

            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-background/10 px-7 py-4 sm:px-10 lg:px-12">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-background/55">
                <span className="inline-flex items-center gap-1.5">
                  <RiCheckDoubleFill className="size-3 text-primary" />
                  Warranty-backed workmanship
                </span>
                <span className="hidden size-1 rounded-full bg-background/25 sm:inline-block" />
                <span className="hidden items-center gap-1.5 sm:inline-flex">
                  <RiVerifiedBadgeFill className="size-3 text-primary" />
                  500+ verified repairs
                </span>
              </div>
              <Link
                href="/projects"
                className="group inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary hover:text-primary/80"
              >
                Browse more cases
                <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

/* ============================================================
   SUB-COMPONENTS
   ============================================================ */

function SpecBlock({
  label,
  value,
  icon: Icon,
}: {
  label: string;
  value: string;
  icon: React.ElementType;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        <Icon className="size-3 text-primary" />
        {label}
      </div>
      <p className="mt-2 text-[14px] font-semibold leading-relaxed text-foreground">
        {value}
      </p>
    </div>
  );
}

function ProtocolRow({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <li className="grid grid-cols-[auto_1fr] items-start gap-4 py-6 transition-colors hover:bg-primary/[0.03] sm:gap-6 sm:py-7">
      <span className="font-mono text-xl font-bold tabular-nums text-primary/40 sm:text-2xl">
        {n}
      </span>

      <div className="min-w-0">
        <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
          {title}
        </h3>

        <div className="mt-2">{children}</div>
      </div>
    </li>
  );
}