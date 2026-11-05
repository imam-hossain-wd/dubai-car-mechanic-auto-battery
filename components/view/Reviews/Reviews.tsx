"use client";

import { useCallback, useId, useEffect, useMemo, useRef, useState } from "react";
import {
  RiStarFill,
  RiShieldCheckFill,
  RiArrowLeftLine,
  RiArrowRightLine,
  RiVerifiedBadgeFill,
  RiTimeFill,
  RiUserStarFill,
  RiDoubleQuotesL,
  RiArrowRightUpLine,
  RiMapPinLine,
  RiCarFill,
  RiToolsFill,
  RiCheckDoubleFill,
  RiSparklingFill,
} from "@remixicon/react";

import { cn } from "@/lib/utils";
import {  Review, ReviewsProps } from "@/types/review";
import { generatePlaceholderReviews } from "@/data/review";


function buildDistribution(reviews: Review[]) {
  const counts: Record<number, number> = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
  for (const r of reviews) counts[r.rating] = (counts[r.rating] || 0) + 1;
  return counts;
}

export default function Reviews({
  reviews = generatePlaceholderReviews(),
  subtitle = "Real experiences from real customers across Dubai — verified, documented, and 100% authentic.",
}: ReviewsProps) {
  const railId = useId();
  const railRef = useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [activePage, setActivePage] = useState(0);
  const [perPage, setPerPage] = useState(3);

  /* -------- Featured (first review) + rest -------- */
  const featured = reviews[0];
  const rest = reviews.slice(1);

  /* -------- Stats -------- */
  const averageRating = useMemo(
    () => reviews.reduce((a, r) => a + r.rating, 0) / reviews.length,
    [reviews]
  );
  const distribution = useMemo(() => buildDistribution(reviews), [reviews]);
  const totalReviews = reviews.length;

  /* -------- Responsive per-page count -------- */
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w >= 1280) setPerPage(3);
      else if (w >= 768) setPerPage(2);
      else setPerPage(1);
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  /* -------- Scroll sync -------- */
  const updateScroll = useCallback(() => {
    const el = railRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    const card = el.firstElementChild as HTMLElement | null;
    if (card) {
      const cardW = card.offsetWidth + 16; // gap-4
      setActivePage(Math.round(el.scrollLeft / (cardW * perPage)));
    }
  }, [perPage]);

  useEffect(() => {
    const el = railRef.current;
    if (!el) return;
    updateScroll();
    el.addEventListener("scroll", updateScroll, { passive: true });
    return () => el.removeEventListener("scroll", updateScroll);
  }, [updateScroll]);

  const scrollBy = (dir: 1 | -1) => {
    const el = railRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const cardW = card.offsetWidth + 16;
    el.scrollBy({ left: dir * cardW * perPage, behavior: "smooth" });
  };

  const totalPages = Math.ceil(rest.length / perPage);
  const ratingStars = Array.from({ length: 5 });

  return (
    <section
      aria-labelledby="reviews-title"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      {/* ==============================================================
          BACKDROP — ruled columns + route line + glows
      ============================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "96px 100%",
            maskImage:
              "radial-gradient(ellipse 120% 90% at 100% 0%, black 25%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 120% 90% at 100% 0%, black 25%, transparent 90%)",
          }}
        />
        <svg
          aria-hidden
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 text-primary/30 lg:block"
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
        <div className="absolute -top-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* ============================================================
            HEADER
        ============================================================ */}
        <div className="grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Field reports · Dubai
              </span>
            </div>

            <h2
              id="reviews-title"
              className="mt-5 font-serif text-[clamp(2.1rem,4.8vw,3.6rem)] font-bold leading-[1.02] -tracking-[0.028em] text-foreground"
            >
              Verified drivers,
              <br className="hidden sm:block" />{" "}
              documented{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">rescues</span>
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
              </span>
              .
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              {subtitle}
            </p>
          </div>

          {/* Trust dossier — right side (5 cols) */}
          <div className="lg:col-span-5">
            <div className="overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
              <div className="grid grid-cols-[auto_1fr] gap-0 divide-x divide-border">
                {/* Big rating cell */}
                <div className="flex flex-col justify-center gap-1 px-5 py-5">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Avg. rating
                  </p>
                  <p className="text-4xl font-black leading-none text-foreground">
                    {averageRating.toFixed(1)}
                  </p>
                  <div className="flex items-center gap-0.5">
                    {ratingStars.map((_, i) => (
                      <RiStarFill
                        key={i}
                        className={cn(
                          "size-3",
                          i < Math.round(averageRating)
                            ? "text-primary"
                            : "text-muted-foreground/20"
                        )}
                      />
                    ))}
                  </div>
                  <p className="mt-1 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {totalReviews} reviews
                  </p>
                </div>

                {/* Histogram */}
                <div className="flex flex-col justify-center gap-1.5 px-5 py-5">
                  {[5, 4, 3, 2, 1].map((r) => {
                    const count = distribution[r] || 0;
                    const pct = (count / totalReviews) * 100;
                    return (
                      <div key={r} className="flex items-center gap-2">
                        <span className="font-mono text-[10px] font-bold tabular-nums text-muted-foreground">
                          {r}
                        </span>
                        <RiStarFill className="size-2 text-primary/70" />
                        <div className="h-1 flex-1 overflow-hidden rounded-full bg-muted">
                          <div
                            className="h-full rounded-full bg-primary transition-[width] duration-700"
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                        <span className="w-6 text-right font-mono text-[9.5px] font-bold tabular-nums text-muted-foreground">
                          {count}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Verified seal row */}
              <div className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3">
                <div className="flex items-center gap-2">
                  <span className="flex size-7 items-center justify-center rounded-lg bg-primary/10">
                    <RiVerifiedBadgeFill className="size-3.5 text-primary" />
                  </span>
                  <span className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-foreground">
                    100% verified
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="relative flex size-1.5">
                    <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                  </span>
                  Live feed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            FEATURED REPORT — editorial pull
        ============================================================ */}
        <figure className="relative mt-12 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.07] via-primary/[0.02] to-transparent p-6 sm:mt-14 sm:p-8 lg:p-10">
          {/* Corner crop marks */}
          <div aria-hidden className="pointer-events-none absolute left-4 top-4 size-8">
            <span className="absolute left-0 top-0 h-px w-6 bg-primary/70" />
            <span className="absolute left-0 top-0 h-6 w-px bg-primary/70" />
          </div>
          <div aria-hidden className="pointer-events-none absolute bottom-4 right-4 size-8">
            <span className="absolute bottom-0 right-0 h-px w-6 bg-primary/70" />
            <span className="absolute bottom-0 right-0 h-6 w-px bg-primary/70" />
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-10">
            {/* Quote */}
            <div className="lg:col-span-9">
              <RiDoubleQuotesL className="size-7 text-primary/70" />
              <blockquote className="mt-3 font-serif text-lg italic leading-snug text-foreground sm:text-xl lg:text-2xl">
                &ldquo;{featured.text}&rdquo;
              </blockquote>

              {/* Meta row */}
              <figcaption className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground text-[12px] font-bold shadow-md shadow-primary/25">
                    {featured.name.charAt(0)}
                  </span>
                  <div>
                    <p className="text-[12.5px] font-bold text-foreground">
                      {featured.name}
                    </p>
                    <p className="text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                      {featured.area}
                    </p>
                  </div>
                </div>
                <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <RiCarFill className="size-3 text-primary" />
                  {featured?.vehicle}
                </span>
                <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
                <span className="inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                  <RiToolsFill className="size-3 text-primary" />
                  {featured.service}
                </span>
              </figcaption>
            </div>

            {/* Stars + date */}
            <div className="flex flex-col items-start gap-2 lg:col-span-3 lg:items-end">
              <div className="flex items-center gap-0.5">
                {ratingStars.map((_, i) => (
                  <RiStarFill
                    key={i}
                    className={cn(
                      "size-4",
                      i < featured.rating
                        ? "text-primary"
                        : "text-muted-foreground/20"
                    )}
                  />
                ))}
              </div>
              <p className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                {featured?.date}
              </p>
              <span className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-background px-2.5 py-1 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                <RiCheckDoubleFill className="size-2.5" />
                Verified
              </span>
            </div>
          </div>
        </figure>

        {/* ============================================================
            RAIL — reports carousel (no library)
        ============================================================ */}
        <div className="mt-10">
          {/* Rail header — title + nav + page tabs */}
          <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <h3 className="text-[13px] font-bold tracking-tight text-foreground">
                More reports
              </h3>
              <span className="inline-flex items-center rounded-full bg-primary/10 px-2 py-0.5 font-mono text-[9.5px] font-bold tabular-nums text-primary">
                {String(rest.length).padStart(2, "0")}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {/* Page tabs */}
              <div className="hidden items-center gap-1.5 sm:flex">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to page ${i + 1}`}
                    onClick={() => {
                      const el = railRef.current;
                      if (!el) return;
                      const card = el.firstElementChild as HTMLElement | null;
                      if (!card) return;
                      const cardW = card.offsetWidth + 16;
                      el.scrollTo({
                        left: i * cardW * perPage,
                        behavior: "smooth",
                      });
                    }}
                    className={cn(
                      "font-mono text-[10px] font-bold tabular-nums transition-colors",
                      activePage === i
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </button>
                ))}
              </div>

              <span className="hidden size-3 w-px bg-border sm:block" />

              {/* Arrows */}
              <button
                type="button"
                onClick={() => scrollBy(-1)}
                disabled={!canPrev}
                aria-label="Previous reports"
                className={cn(
                  "flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors",
                  canPrev
                    ? "hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    : "cursor-not-allowed opacity-40"
                )}
              >
                <RiArrowLeftLine className="size-3.5" />
              </button>
              <button
                type="button"
                onClick={() => scrollBy(1)}
                disabled={!canNext}
                aria-label="Next reports"
                className={cn(
                  "flex size-9 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors",
                  canNext
                    ? "hover:border-primary/40 hover:bg-primary/5 hover:text-primary"
                    : "cursor-not-allowed opacity-40"
                )}
              >
                <RiArrowRightLine className="size-3.5" />
              </button>
            </div>
          </div>

          {/* Rail */}
          <div
            id={railId}
            ref={railRef}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {rest.map((review, i) => (
              <article
                key={`${review.name}-${i}`}
                className="group relative min-w-0 shrink-0 grow-0 basis-full snap-start overflow-hidden rounded-2xl border border-border bg-card p-5 transition-colors hover:border-primary/30 sm:basis-1/2 xl:basis-1/3"
              >
                {/* Corner crop */}
                <div aria-hidden className="pointer-events-none absolute right-3 top-3 size-6">
                  <span className="absolute right-0 top-0 h-px w-4 bg-primary/40" />
                  <span className="absolute right-0 top-0 h-4 w-px bg-primary/40" />
                </div>

                {/* Header — avatar + name + stars */}
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-[12px] font-bold text-primary">
                      {review.name.charAt(0)}
                    </span>
                    <div className="min-w-0">
                      <p className="truncate text-[12.5px] font-bold text-foreground">
                        {review.name}
                      </p>
                      <p className="truncate text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                        {review.area}
                      </p>
                    </div>
                  </div>

                  <div className="flex shrink-0 items-center gap-0.5">
                    {ratingStars.map((_, idx) => (
                      <RiStarFill
                        key={idx}
                        className={cn(
                          "size-2.5",
                          idx < review.rating
                            ? "text-primary"
                            : "text-muted-foreground/20"
                        )}
                      />
                    ))}
                  </div>
                </div>

                {/* Body */}
                <p className="mt-4 line-clamp-4 text-[12.5px] leading-relaxed text-muted-foreground">
                  {review.text}
                </p>

                {/* Footer meta */}
                <div className="mt-4 flex flex-wrap items-center gap-1.5 border-t border-border pt-3 text-[9.5px] font-bold uppercase tracking-[0.14em]">
                  <span className="inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-muted-foreground">
                    <RiCarFill className="size-2.5 text-primary" />
                    {review.vehicle}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-md bg-primary/10 px-1.5 py-0.5 text-primary">
                    <RiToolsFill className="size-2.5" />
                    {review.service}
                  </span>
                  <span className="ml-auto text-muted-foreground/70">
                    {review.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* ============================================================
            DISPATCH PROOF FOOTER — replaces redundant trust strip
        ============================================================ */}
        <div className="mt-10 flex flex-col items-start gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <RiShieldCheckFill className="size-3 text-primary" />
              Verified reviews
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiTimeFill className="size-3 text-primary" />
              Updated weekly
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiUserStarFill className="size-3 text-primary" />
              {totalReviews}+ real cases
            </span>
            <span className="inline-flex items-center gap-1.5">
              <RiMapPinLine className="size-3 text-primary" />
              Across Dubai
            </span>
          </div>

          <a
            href="/reviews"
            className="group inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-[0.16em] text-primary hover:text-primary/80"
          >
            <RiSparklingFill className="size-3" />
            Read all reviews
            <RiArrowRightUpLine className="size-3 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}