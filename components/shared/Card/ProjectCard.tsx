import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiMapPinFill,
  RiTimeFill,
} from "@remixicon/react";

import { Project } from "@/types/project";
import { cn } from "@/lib/utils";

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
  const href = `/projects/${project.slug ?? project.id ?? ""}`;

  const preview =
    project.description ||
    (project.problemAnalysis
      ? project.problemAnalysis.split(". ").slice(0, 2).join(". ") + "."
      : "");

  return (
    <Link
      href={href}
      aria-label={`View ${project.title}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card",
        "transition-colors duration-200 hover:border-primary/50",
        className
      )}
    >
      {/* ============================================================
          MEDIA
      ============================================================ */}
      <div
        className={cn(
          "relative w-full overflow-hidden bg-muted",
          isFeatured ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[4/3]"
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
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
        )}

        {/* Subtle bottom wash for the category kicker legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Folio — top-left */}
        <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-black/50 px-2 py-1 font-mono text-[10px] font-bold tabular-nums text-white backdrop-blur-sm">
          <span className="size-1 rounded-full bg-primary" />
          {folio}
        </span>

        {/* Category — bottom-left */}
        <div className="absolute inset-x-0 bottom-0 p-3">
          <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-primary">
            {project.category ?? "Case study"}
          </p>
        </div>
      </div>

      {/* ============================================================
          BODY — editorial title + preview
      ============================================================ */}
      <div className="flex flex-1 flex-col p-4 sm:p-5">
        <h3
          className={cn(
            "font-serif font-bold leading-tight tracking-tight text-foreground transition-colors group-hover:text-primary",
            isFeatured
              ? "text-lg sm:text-xl lg:text-2xl"
              : "text-[15px] sm:text-base"
          )}
        >
          {project.title}
        </h3>

        {preview && (
          <p
            className={cn(
              "mt-2 line-clamp-2 leading-relaxed text-muted-foreground",
              isFeatured ? "text-[13px]" : "text-[12px]"
            )}
          >
            {preview}
          </p>
        )}

        {/* Spacer for footer alignment */}
        <div className="flex-1" />

        {/* Meta footer — area + response */}
        <div className="mt-4 flex items-center gap-3 border-t border-border pt-3 text-[10.5px] font-semibold text-muted-foreground">
          <span className="inline-flex min-w-0 items-center gap-1.5">
            <RiMapPinFill className="size-3 shrink-0 text-primary" />
            <span className="truncate">{project.area}</span>
          </span>
          <span className="size-1 rounded-full bg-border" />
          <span className="inline-flex shrink-0 items-center gap-1.5">
            <RiTimeFill className="size-3 text-primary" />
            {project.clientOverview?.responseTimeMinutes ?? 30} min
          </span>

          {/* Arrow — slides on hover */}
          <span className="ml-auto flex size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}