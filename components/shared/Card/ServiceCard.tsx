// components/shared/Card/ServiceCard.tsx

import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCheckDoubleFill,
  RiTimeFill,
  RiRadarFill,
} from "@remixicon/react";

import { cn } from "@/lib/utils";
import { ServiceCardProps } from "@/types/card";
import { SiteConfig } from "@/config/siteConfig";

export function ServiceCard({
  name,
  slug,
  features = [],
  image,
  intro,
  className,
  index = 0,
}: ServiceCardProps) {
  const displayFeatures = features.slice(0, 4);
  const folio = String(index + 1).padStart(2, "0");
  const description =
    intro?.content?.split(".")[0]?.slice(0, 96)?.trim() + "…" || "";

  return (
    <article
      className={cn(
        "group relative isolate flex flex-col overflow-hidden  border  bg-card",
        "transition-colors duration-200",
        "border-primary/40",
        className
      )}
    >
      {/* ============================================================
          BACKDROP — hairline rules for the "manifest" feel
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
            {/* {folio} */}
          </span>
          <span className="size-1 rounded-full bg-primary/40" />
          <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            24/7 Onsite Available
          </span>
        </div>

        <span className="inline-flex items-center gap-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-primary">
          <span className="relative flex size-1.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
          </span>
          Live
        </span>
      </div>

      {/* ============================================================
          MEDIA — slim landscape strip
      ============================================================ */}
      <Link
        href={`/services/${slug}`}
        aria-label={`View ${name}`}
        className="relative block aspect-[16/10] w-full overflow-hidden bg-muted"
      >
        {image ? (
          <Image
            src={image}
            alt={`${name} in ${SiteConfig.city}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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

        {/* Bottom title strip inside image */}
        <div className="absolute inset-x-0 bottom-0 p-4">
          <h3 className="line-clamp-2 text-[15px] font-bold leading-tight tracking-tight text-white drop-shadow-lg sm:text-base">
            {name}
          </h3>
          {description && (
            <p className="mt-1 line-clamp-1 text-[10.5px] font-medium text-white/70">
              {description}
            </p>
          )}
        </div>
      </Link>

      {/* ============================================================
          BODY — feature ledger + ETA
      ============================================================ */}
      <div className="relative flex flex-1 flex-col p-4">
        {/* Feature ledger */}
        {displayFeatures.length > 0 && (
          <ul className="space-y-2">
            {displayFeatures.map((feature, i) => (
              <li
                key={i}
                className="flex items-start gap-2.5 text-[11.5px] leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground/85"
              >
                <RiCheckDoubleFill className="mt-0.5 size-3 shrink-0 text-primary" />
                <span className="line-clamp-1 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {/* Spacer */}
        {/* <div className="flex-1 py-3" /> */}

        {/* ETA row */}
        {/* <div className="flex items-center gap-2 rounded-lg border border-border bg-background px-2.5 py-1.5 text-[10.5px] font-semibold">
          <RiTimeFill className="size-3 shrink-0 text-primary" />
          <span className="text-foreground">{SiteConfig.responseTime}</span>
          <span className="size-1 rounded-full bg-border" />
          <span className="text-muted-foreground">Onsite</span>
        </div> */}
      </div>

      {/* ============================================================
          FOOTER — action rail
      ============================================================ */}
      <div className="relative flex items-center justify-between gap-2 border-t border-border px-4 py-3">
        <Link
          href={`/services/${slug}`}
          className="group/link inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary/80"
        >
          View service
          <RiArrowRightLine className="size-3.5 transition-transform group-hover/link:translate-x-0.5" />
        </Link>

        <Link
          href={`/services/${slug}`}
          aria-label={`Open ${name}`}
          className="flex size-8 items-center justify-center  border border-border transition-colors bg-primary text-primary-foreground"
        >
          <RiArrowRightUpLine className="size-3.5" />
        </Link>
      </div>

      {/* Hover corner mark (top-right) */}
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