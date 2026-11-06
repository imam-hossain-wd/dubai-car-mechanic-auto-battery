// components/shared/Modal/ProjectModal.tsx

"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  RiCloseLine,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiMapPinFill,
  RiToolsFill,
  RiTimeFill,
  RiVerifiedBadgeFill,
  RiStarFill,
  RiFileCopyLine,
  RiShareLine,
  RiCheckDoubleFill,
  RiRadarFill,
  RiAlertLine,
  RiQuestionLine,
} from "@remixicon/react";

import { Project } from "@/types/project";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";

/* ============================================================================
   PROJECT MODAL — "Field Report" document view
   ============================================================================ */

interface Props {
  project: Project;
  currentIndex: number;
  totalProjects: number;
  onClose: () => void;
  onNavigate: (direction: "next" | "prev") => void;
}

export default function ProjectModal({
  project,
  currentIndex,
  totalProjects,
  onClose,
  onNavigate,
}: Props) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [copied, setCopied] = useState(false);
  const folio = String(currentIndex + 1).padStart(2, "0");
  const totalFolio = String(totalProjects).padStart(2, "0");

  /* ---------- ESC + arrow nav ---------- */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNavigate("next");
      if (e.key === "ArrowLeft") onNavigate("prev");
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose, onNavigate]);

  const handleCopy = useCallback(() => {
    if (typeof window === "undefined") return;
    navigator.clipboard?.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  }, []);

  const handleShare = useCallback(() => {
    if (typeof window === "undefined") return;
    if (navigator.share) {
      navigator
        .share({
          title: project.title,
          text: `${project.title} — ${project.area}, Dubai`,
          url: window.location.href,
        })
        .catch(() => {});
    }
  }, [project]);

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md"
        onClick={onClose}
        aria-hidden
      />

      {/* Modal wrapper */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
        onClick={(e) => e.target === e.currentTarget && onClose()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
      >
        <div className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-foreground/[0.15]">
          {/* ============================================================
              MASTHEAD RAIL — same as page masthead
          ============================================================ */}
          <div className="flex shrink-0 items-center justify-between gap-3 border-b border-border bg-muted/40 px-4 py-3 sm:px-5">
            <div className="flex min-w-0 items-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                <RiVerifiedBadgeFill className="size-3" />
                Case {folio} / {totalFolio}
              </span>
              <span className="hidden truncate font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground sm:inline">
                {project.category ?? "Case study"}
              </span>
            </div>

            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => onNavigate("prev")}
                disabled={currentIndex === 0}
                aria-label="Previous case"
                className={cn(
                  "flex size-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors",
                  currentIndex === 0
                    ? "cursor-not-allowed opacity-40"
                    : "hover:border-primary/40 hover:text-primary"
                )}
              >
                <RiArrowLeftLine className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate("next")}
                disabled={currentIndex === totalProjects - 1}
                aria-label="Next case"
                className={cn(
                  "flex size-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors",
                  currentIndex === totalProjects - 1
                    ? "cursor-not-allowed opacity-40"
                    : "hover:border-primary/40 hover:text-primary"
                )}
              >
                <RiArrowRightLine className="size-3.5" />
              </button>
              <span className="mx-1 h-4 w-px bg-border" />
              <button
                type="button"
                onClick={onClose}
                aria-label="Close"
                className="flex size-8 items-center justify-center rounded-lg border border-border bg-background text-foreground transition-colors hover:border-destructive/40 hover:text-destructive"
              >
                <RiCloseLine className="size-3.5" />
              </button>
            </div>
          </div>

          {/* ============================================================
              SCROLLABLE BODY
          ============================================================ */}
          <div className="flex-1 overflow-y-auto">
            {/* MEDIA — bordered figure */}
            <figure className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-muted">
                  <RiRadarFill className="size-6 animate-pulse text-primary/60" />
                </div>
              )}

              {project.image && (
                <Image
                  src={project.image}
                  alt={`${project.title} — ${project.area}, Dubai`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className={cn(
                    "object-cover transition-opacity duration-700",
                    imageLoaded ? "opacity-100" : "opacity-0"
                  )}
                  onLoad={() => setImageLoaded(true)}
                  priority
                />
              )}

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

              {/* Corner crop marks */}
              <div className="pointer-events-none absolute left-4 top-4 size-7">
                <span className="absolute left-0 top-0 h-px w-5 bg-primary" />
                <span className="absolute left-0 top-0 h-5 w-px bg-primary" />
              </div>

              {/* Verified chip */}
              <div className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/50 px-2.5 py-1 backdrop-blur-md">
                <RiVerifiedBadgeFill className="size-3 text-primary" />
                <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                  Verified repair
                </span>
              </div>

              {/* Bottom info */}
              <figcaption className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-primary">
                  Case {folio} · {project.category ?? "Repair"}
                </p>
                <h2
                  id="project-modal-title"
                  className="mt-1.5 font-serif text-lg font-bold leading-tight -tracking-tight text-white sm:text-xl lg:text-2xl"
                >
                  {project.title}
                </h2>
              </figcaption>
            </figure>

            {/* SPEC LEDGER — 3 columns */}
            <dl className="grid grid-cols-1 divide-y divide-border border-b border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
              <SpecCell
                icon={RiMapPinFill}
                label="Location"
                value={project.area}
              />
              <SpecCell
                icon={RiToolsFill}
                label="Service"
                value={project.service}
              />
              <SpecCell
                icon={RiTimeFill}
                label="Response"
                value={
                  project.clientOverview?.responseTimeMinutes
                    ? `${project.clientOverview.responseTimeMinutes} min`
                    : "Onsite"
                }
              />
            </dl>

            {/* CLIENT OVERVIEW — 2x2 grid if available */}
            {project.clientOverview && (
              <section className="border-b border-border bg-muted/20 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                  Client overview
                </p>
                <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                  <SpecRow label="Vehicle" value={project.clientOverview.carModel} />
                  <SpecRow
                    label="Issue reported"
                    value={project.clientOverview.issueReported}
                  />
                  <SpecRow
                    label="Response time"
                    value={`${project.clientOverview.responseTimeMinutes} minutes`}
                  />
                  <SpecRow
                    label="Completion"
                    value={project.clientOverview.completionTimeHours}
                  />
                </dl>
              </section>
            )}

            {/* DIAGNOSIS SECTION */}
            {(project.problemAnalysis || project.diagnosticSteps) && (
              <section className="border-b border-border p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                  Diagnosis
                </p>

                {project.problemAnalysis && (
                  <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-foreground/85">
                    {project.problemAnalysis}
                  </p>
                )}

                {project.diagnosticSteps && project.diagnosticSteps.length > 0 && (
                  <ol className="mt-5 divide-y divide-border border-y border-border">
                    {project.diagnosticSteps.map((step, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 py-3 transition-colors hover:bg-primary/[0.03]"
                      >
                        <span className="mt-0.5 font-mono text-[10.5px] font-bold tabular-nums text-primary/70">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <RiCheckDoubleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span className="text-[13px] leading-relaxed text-foreground/85">
                          {step}
                        </span>
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            )}

            {/* SOLUTION SECTION */}
            {project.solutionDetails && (
              <section className="border-b border-border p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                  Solution
                </p>
                <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-foreground/85">
                  {project.solutionDetails}
                </p>

                {project.partsReplaced && project.partsReplaced.length > 0 && (
                  <div className="mt-5">
                    <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                      Parts replaced
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-1.5">
                      {project.partsReplaced.map((part, i) => (
                        <li
                          key={i}
                          className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-2 py-1 text-[11px] font-semibold text-foreground"
                        >
                          <RiCheckDoubleFill className="size-2.5 text-primary" />
                          {part}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* RESULT */}
            {project.resultsSummary && (
              <section className="border-b border-border bg-muted/20 p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                  Result
                </p>
                <p className="mt-3 max-w-3xl text-[14px] leading-relaxed text-foreground/85">
                  {project.resultsSummary}
                </p>
              </section>
            )}

            {/* FAQ */}
            {project.faqs && project.faqs.length > 0 && (
              <section className="border-b border-border p-6 sm:p-8">
                <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                  Common question
                </p>
                <div className="mt-3 divide-y divide-border border-y border-border">
                  {project.faqs.map((faq, i) => (
                    <details key={i} className="group">
                      <summary className="flex cursor-pointer items-start gap-3 py-4 [&::-webkit-details-marker]:hidden">
                        <RiQuestionLine className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <span className="flex-1 text-[13.5px] font-bold leading-snug text-foreground">
                          {faq.question}
                        </span>
                        <RiArrowRightLine className="mt-0.5 size-3.5 shrink-0 rotate-90 text-muted-foreground transition-transform group-open:-rotate-90" />
                      </summary>
                      <p className="pb-4 pl-6.5 text-[13px] leading-relaxed text-muted-foreground">
                        {faq.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            {/* ACTION ROW */}
            <div className="flex flex-wrap items-center gap-2.5 p-6 sm:p-8">
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-[11.5px] font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <RiFileCopyLine className="size-3.5" />
                {copied ? "Copied" : "Copy link"}
              </button>

              <button
                type="button"
                onClick={handleShare}
                className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-[11.5px] font-bold text-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <RiShareLine className="size-3.5" />
                Share
              </button>

              <Link
                href={`/projects/${project.slug ?? project.id ?? ""}`}
                className="ml-auto hidden items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-primary hover:text-primary/80 sm:inline-flex"
              >
                Full case page
                <RiArrowRightLine className="size-3.5" />
              </Link>
            </div>
          </div>

          {/* ============================================================
              PROGRESS FOOTER
          ============================================================ */}
          <div className="h-1 w-full shrink-0 bg-muted">
            <div
              className="h-full bg-primary transition-all duration-500"
              style={{
                width: `${((currentIndex + 1) / totalProjects) * 100}%`,
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

/* ============================================================================
   SUB-COMPONENTS
   ============================================================================ */

function SpecCell({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 px-5 py-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
        <Icon className="size-4 text-primary" />
      </span>
      <div className="min-w-0">
        <dt className="text-[9px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
          {label}
        </dt>
        <dd className="mt-0.5 truncate text-[13px] font-bold text-foreground">
          {value}
        </dd>
      </div>
    </div>
  );
}

function SpecRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
        {label}
      </dt>
      <dd className="mt-0.5 text-[13.5px] font-semibold text-foreground">
        {value}
      </dd>
    </div>
  );
}