// app/(marketing)/projects/page.tsx

"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiFlashlightFill,
  RiTimeFill,
  RiCarFill,
  RiMapPinFill,
  RiGridFill,
  RiPhoneFill,
  RiVerifiedBadgeFill,
  RiStarFill,
  RiWhatsappFill,
  RiRadarFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";
import { Project } from "@/types/project";
import ProjectCard from "@/components/shared/Card/ProjectCard";
import ProjectModal from "@/components/shared/Modal/ProjectModal";
import { projectData } from "@/data/ProjectData";

/* ============================================================
   Category grouping — same grammar as Services page
   ============================================================ */
type Category = {
  id: string;
  label: string;
  blurb: string;
  icon: React.ElementType;
};

const CATEGORIES: Category[] = [
  {
    id: "Brake & Safety Systems",
    label: "Brake & safety systems",
    blurb: "ABS diagnostics, module repair, pad replacement",
    icon: RiFlashlightFill,
  },
  {
    id: "Electrical & Battery",
    label: "Electrical & battery",
    blurb: "Battery swaps, BMS resets, headlight restoration",
    icon: RiCarFill,
  },
  {
    id: "Climate Control",
    label: "Climate control",
    blurb: "AC compressors, gas refills, system overhauls",
    icon: RiTimeFill,
  },
  {
    id: "Engine Diagnostics",
    label: "Engine diagnostics",
    blurb: "No-start, misfires, cylinder head, compression",
    icon: RiRadarFill,
  },
  {
    id: "Preventative Maintenance",
    label: "Preventative maintenance",
    blurb: "Major service, cooling, routine care",
    icon: RiVerifiedBadgeFill,
  },
  {
    id: "Emergency Roadside",
    label: "Emergency roadside",
    blurb: "Belt snaps, parking-lot rescue, mobile dispatch",
    icon: RiMapPinFill,
  },
];

/* ============================================================
   Page
   ============================================================ */
export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const {
    city,
    responseTime,
    serviceAreas,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
  } = SiteConfig;

  const openProject = (project: Project) => {
    const idx = projectData.findIndex((p) => p.id === project.id);
    setCurrentIndex(idx >= 0 ? idx : 0);
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = "";
  };

  const navigateProject = (direction: "next" | "prev") => {
    if (direction === "next" && currentIndex < projectData.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedProject(projectData[currentIndex + 1]);
    }
    if (direction === "prev" && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setSelectedProject(projectData[currentIndex - 1]);
    }
  };

  const featured = projectData[0];
  const rest = projectData.slice(1);

  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
          MASTHEAD — editorial hero (same as ServiceAreas/Contact)
      ============================================================ */}
      <section
        aria-labelledby="projects-title"
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
            {/* Left — headline */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Repair log · {city}
                </span>
              </div>

              <h1
                id="projects-title"
                className="mt-6 font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.98] -tracking-[0.03em] text-foreground"
              >
                Real repairs,
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">
                    documented
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
                in full.
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {projectData.length} verified mobile repair cases from real
                drivers across {city} — each with full diagnostics, the exact
                parts used, and the outcomes we delivered.
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { icon: RiVerifiedBadgeFill, label: "Verified outcomes" },
                  { icon: RiFlashlightFill, label: "Full diagnostics" },
                  { icon: RiTimeFill, label: "Onsite repairs" },
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

            {/* Right — stat card */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-primary/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                      Log at a glance
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Live
                    </span>
                  </div>

                  <dl className="divide-y divide-border">
                    {[
                      { label: "Cases", value: String(projectData.length) },
                      { label: "Categories", value: String(CATEGORIES.length) },
                      { label: "Coverage", value: `${serviceAreas.length}+` },
                      {
                        label: "Response",
                        value: responseTime.split(" ")[0],
                        sub: "min",
                      },
                    ].map((s) => (
                      <div
                        key={s.label}
                        className="flex items-center justify-between gap-4 px-5 py-3"
                      >
                        <dt className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                          {s.label}
                        </dt>
                        <dd className="font-mono text-[15px] font-bold tabular-nums text-foreground">
                          {s.value}
                          {s.sub && (
                            <span className="ml-0.5 text-[11px] font-semibold text-muted-foreground">
                              {s.sub}
                            </span>
                          )}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  <div className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      <RiMapPinFill className="size-3 text-primary" />
                      {city}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
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
          FEATURED CASE
      ============================================================ */}
      <section className="relative w-full border-b border-border">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Featured case
                </span>
              </div>
              <h2 className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground">
                The most recent{" "}
                <span className="italic text-primary">repair</span>.
              </h2>
            </div>

            <div className="flex items-center gap-3 lg:col-span-5 lg:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <RiFlashlightFill className="size-3 text-primary" />
                <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  Latest · {featured.area}
                </span>
              </span>
            </div>
          </div>

          <div className="mt-8">
            <ProjectCard
              project={featured}
              index={0}
              variant="featured"
              className="lg:mx-auto lg:max-w-4xl"
            />
          </div>
        </div>
      </section>

      {/* ============================================================
          LOG — grouped by category
      ============================================================ */}
      <section className="relative w-full border-b border-border">
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Repair log
                </span>
              </div>
              <h2 className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground">
                Every case,{" "}
                <span className="italic text-primary">categorized</span>.
              </h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
                Grouped the same way we dispatch — brake systems first, then
                electrical, climate, engine, maintenance, and emergency.
              </p>
            </div>

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
                  Categories
                </p>
                <p className="mt-1 text-lg font-bold leading-none text-foreground">
                  {String(CATEGORIES.length).padStart(2, "0")}
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
            </div>
          </div>

          <div className="mt-12 space-y-12">
            {CATEGORIES.map((cat) => {
              const Icon = cat.icon;
              const catProjects = rest.filter((p) => p.category === cat.id);
              if (catProjects.length === 0) return null;

              return (
                <div key={cat.id}>
                  <div className="flex flex-col gap-3 border-b border-border pb-4 sm:flex-row sm:items-end sm:justify-between">
                    <div className="flex items-center gap-3">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                        <Icon className="size-4 text-primary" />
                      </span>
                      <div>
                        <h3 className="text-[13px] font-bold tracking-tight text-foreground sm:text-sm">
                          {cat.label}
                        </h3>
                        <p className="text-[11px] text-muted-foreground">
                          {cat.blurb}
                        </p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 self-start rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary sm:self-auto">
                      <span className="font-mono tabular-nums">
                        {String(catProjects.length).padStart(2, "0")}
                      </span>
                      cases
                    </span>
                  </div>

                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
                    {catProjects.map((project) => {
                      const globalIndex = projectData.findIndex(
                        (p) => p.id === project.id
                      );
                      return (
                        <ProjectCard
                          key={project.id}
                          project={project}
                          index={globalIndex}
                        />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================================
          SIGN-OFF
      ============================================================ */}
      <section className="relative w-full">
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
            </div>

            <div className="relative grid grid-cols-1 gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:items-center lg:gap-10 lg:p-12">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <RiVerifiedBadgeFill className="size-3 text-primary" />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-primary">
                    Trusted by 500+ drivers
                  </span>
                </div>

                <h2 className="mt-4 font-serif text-[clamp(1.8rem,4.6vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-background">
                  Want your case{" "}
                  <span className="italic text-primary">featured</span>?
                </h2>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-background/60 sm:text-[15px]">
                  Book a repair and join the {projectData.length} documented
                  cases from real drivers across {city}.
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          MODAL
      ============================================================ */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          currentIndex={currentIndex}
          totalProjects={projectData.length}
          onClose={closeProject}
          onNavigate={navigateProject}
        />
      )}
    </main>
  );
}