// components/shared/Card/ProjectCard.tsx

import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightUpLine,
  RiArrowRightLine,
  RiMapPinFill,
  RiTimeFill,
  RiVerifiedBadgeFill,
  RiCheckDoubleFill,
} from "@remixicon/react";

import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/*  Props — reuse your ProjectCardProps but track `variant`            */
/* ------------------------------------------------------------------ */
interface Props {
  project: Project;
  index: number;
  className?: string;
  variant?: "featured" | "default" | "compact";
}

export default function ProjectCard({
  project,
  index,
  className,
  variant = "default",
}: Props) {
  const isFeatured = variant === "featured";
  const folio = String(index + 1).padStart(2, "0");

  const preview =
    project.description ||
    (project.problemAnalysis
      ? project.problemAnalysis.split(". ")[0] + "."
      : "");

  return (
    <article
      className={cn(
        "group relative isolate flex flex-col overflow-hidden rounded-2xl border border-border bg-card",
        "transition-colors duration-200 hover:border-primary/40",
        className
      )}
    >
      {/* ============================================================
          BACKDROP — hairline ruling for the "log" feel
      ============================================================ */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
          backgroundSize: "100% 32px",
          maskImage:
            "radial-gradient(ellipse 120% 90% at 100% 0%, black 25%, transparent 90%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 120% 90% at 100% 0%, black 25%, transparent 90%)",
        }}
      />

      {/* Top accent bar */}
      <span className="absolute inset-x-0 top-0 h-[2px] bg-primary/0 transition-colors duration-200 group-hover:bg-primary" />

      {/* ============================================================
          HEADER RAIL — index + status
      ============================================================ */}
      <div className="relative flex items-center justify-between gap-2 border-b border-border bg-muted/40 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="font-mono text-[10px] font-bold tabular-nums text-primary/70">
            {folio}
          </span>
          <span className="size-1 rounded-full bg-primary/40" />
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Case study
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-primary">
          <RiVerifiedBadgeFill className="size-3" />
          Completed
        </span>
      </div>

      {/* ============================================================
          MEDIA — aspect depends on variant
      ============================================================ */}
      <Link
        href={`/projects/${project.slug ?? project.id ?? ""}`}
        aria-label={`View ${project.title}`}
        className={cn(
          "relative block w-full overflow-hidden bg-muted",
          isFeatured ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[16/10]"
        )}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.title} — ${project.area}, Dubai`}
            fill
            sizes={
              isFeatured
                ? "(max-width: 1024px) 100vw, 50vw"
                : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            }
            className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
        )}

        {/* Gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

        {/* Corner crop marks */}
        <div className="pointer-events-none absolute left-3 top-3 size-6">
          <span className="absolute left-0 top-0 h-px w-4 bg-primary/80" />
          <span className="absolute left-0 top-0 h-4 w-px bg-primary/80" />
        </div>

        {/* Bottom label */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <p className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-primary">
            {project.category ?? "Repair"}
          </p>
          <h3
            className={cn(
              "mt-1 line-clamp-2 font-bold leading-tight tracking-tight text-white drop-shadow-lg",
              isFeatured
                ? "text-lg sm:text-xl lg:text-2xl"
                : "text-[14px] sm:text-[15px]"
            )}
          >
            {project.title}
          </h3>
        </div>
      </Link>

      {/* ============================================================
          SPEC LEDGER — area · response · vehicle
      ============================================================ */}
      <div className="relative flex-1 p-4">
        {preview && !isFeatured && (
          <p className="line-clamp-2 text-[11.5px] leading-relaxed text-muted-foreground">
            {preview}
          </p>
        )}

        <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2.5 border-t border-border pt-3 text-[10.5px]">
          <div className="flex items-center gap-1.5">
            <RiMapPinFill className="size-3 shrink-0 text-primary" />
            <dt className="sr-only">Area</dt>
            <dd className="truncate font-semibold text-foreground">
              {project.area}
            </dd>
          </div>
          <div className="flex items-center gap-1.5">
            <RiTimeFill className="size-3 shrink-0 text-primary" />
            <dt className="sr-only">Response</dt>
            <dd className="truncate font-semibold text-foreground">
              {project.clientOverview?.responseTimeMinutes ?? 30} min
            </dd>
          </div>
          {project.clientOverview?.carModel && (
            <div className="col-span-2 flex items-center gap-1.5 border-t border-border pt-2.5">
              <RiCheckDoubleFill className="size-3 shrink-0 text-primary" />
              <dt className="sr-only">Vehicle</dt>
              <dd className="truncate font-semibold text-foreground/80">
                {project.clientOverview.carModel}
              </dd>
            </div>
          )}
        </dl>
      </div>

      {/* ============================================================
          ACTION RAIL
      ============================================================ */}
      <div className="relative flex items-center justify-between gap-2 border-t border-border px-4 py-3">
        <Link
          href={`/projects/${project.slug ?? project.id ?? ""}`}
          className="group/link inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary/80"
        >
          Read case
          <RiArrowRightLine className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
        </Link>

        <Link
          href={`/projects/${project.slug ?? project.id ?? ""}`}
          aria-label={`Open ${project.title}`}
          className="flex size-8 items-center justify-center rounded-lg border border-border bg-background text-muted-foreground transition-colors group-hover:border-primary/40 group-hover:text-primary hover:bg-primary hover:text-primary-foreground"
        >
          <RiArrowRightUpLine className="size-3.5" />
        </Link>
      </div>

      {/* Hover corner mark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-3 top-[44px] size-5 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
      >
        <span className="absolute right-0 top-0 h-px w-4 bg-primary/70" />
        <span className="absolute right-0 top-0 h-4 w-px bg-primary/70" />
      </div>
    </article>
  );
}