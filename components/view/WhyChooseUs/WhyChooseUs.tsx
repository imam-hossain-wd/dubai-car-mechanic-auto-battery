import Link from "next/link";
import {
  RiTimeLine,
  RiComputerLine,
  RiMoneyDollarCircleLine,
  Ri24HoursLine,
  RiShieldCheckLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiPhoneFill,
  RiFlashlightFill,
  RiAwardFill,
  RiStarFill,
  RiCheckDoubleFill,
  RiCloseLine,
  RiEqualizerLine,
  RiLoopLeftLine,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";
import { whyChooseUs } from "@/data/businessInfo";

/* ------------------------------------------------------------------ */
/*  Icon mapping + "audit" metadata                                    */
/* ------------------------------------------------------------------ */
const ICONS = [
  RiTimeLine,
  RiComputerLine,
  RiMoneyDollarCircleLine,
  Ri24HoursLine,
  RiShieldCheckLine,
] as const;

/* For each reason: what "them" looks like vs. what "us" looks like.
   This is the credibility engine of the new design. */
const CONTRASTS: Array<{ them: string; us: string }> = [
  { them: "Hours-long wait or tow", us: "5–30 min on-site dispatch" },
  { them: "Generic OBD-II scanner", us: "Dealer-grade diagnostic kit" },
  { them: "Surprise line-items", us: "Itemized quote, upfront" },
  { them: "Business-hours only", us: "24/7/365 emergency coverage" },
  { them: "No warranty on labour", us: "Workmanship warranty, insured" },
];

const TRUST_RIBBON = [
  { icon: RiShieldCheckLine, label: "Workmanship guaranteed" },
  { icon: RiAwardFill, label: "Certified technicians" },
  { icon: RiFlashlightFill, label: "Rapid dispatch" },
  { icon: RiStarFill, label: "Rated 5.0 by drivers" },
] as const;

export function WhyChooseUs() {
  const { displayNumber, numberCallLink, city } = SiteConfig;
  const reasons = whyChooseUs.slice(0, 5);
  const finalWord = whyChooseUs[5];

  return (
    <section
      aria-labelledby="why-title"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      {/* ==============================================================
          BACKDROP — ruled columns + diagonal accent (ledger feel)
      ============================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Vertical ruled columns */}
        <div
          className="absolute inset-0 opacity-[0.4] dark:opacity-[0.2]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--border) 60%, transparent) 1px, transparent 1px)",
            backgroundSize: "96px 100%",
            maskImage:
              "radial-gradient(ellipse 110% 80% at 100% 0%, black 20%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 110% 80% at 100% 0%, black 20%, transparent 85%)",
          }}
        />
        {/* Diagonal primary accent */}
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-1/3 text-primary/30 lg:block"
          viewBox="0 0 400 800"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M320 -20 L100 820"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray="4 8"
          />
          <path
            d="M360 -20 L140 820"
            stroke="currentColor"
            strokeOpacity="0.4"
            strokeWidth="1"
          />
        </svg>
        {/* Soft glow bottom-right */}
        <div className="absolute -bottom-24 right-0 h-[420px] w-[420px] rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-10">
        {/* ============================================================
            MAIN — asymmetric editorial split (intro | ledger)
        ============================================================ */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
          {/* ----------------------------------------------------------
              LEFT — sticky intro column (4/12)
          ---------------------------------------------------------- */}
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-24">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Field audit · {city}
                </span>
              </div>

              {/* Headline */}
              <h2
                id="why-title"
                className="mt-5 font-serif text-[clamp(2rem,4.4vw,3.2rem)] font-bold leading-[1.02] -tracking-[0.028em] text-foreground"
              >
                Built for drivers
                <br />
                who value{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">time</span>
                  <svg
                    aria-hidden
                    viewBox="0 0 200 20"
                    className="absolute -bottom-0.5 left-0 z-0 h-2 w-full text-primary/25"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M2 14 C 50 4, 100 18, 150 10 S 190 4, 198 12"
                      stroke="currentColor"
                      strokeWidth="5"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </h2>

              <p className="mt-5 max-w-md text-[14.5px] leading-relaxed text-muted-foreground">
                Six reasons thousands of Dubai drivers trust us — measured
                line-by-line against what a typical garage offers.
              </p>

              {/* Audit stat block */}
              <div className="mt-8 rounded-2xl border border-border bg-card/70 p-5 backdrop-blur">
                <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  <RiEqualizerLine className="size-3 text-primary" />
                  Audit summary
                </div>
                <div className="mt-3 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-2xl font-black leading-none text-foreground">
                      6<span className="ml-0.5 text-xs font-semibold text-muted-foreground">/6</span>
                    </p>
                    <p className="mt-1 text-[9.5px] font-bold uppercase tracking-wider text-muted-foreground">
                      Reasons proven
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-black leading-none text-foreground">
                      0<span className="ml-0.5 text-xs font-semibold text-muted-foreground">hid.</span>
                    </p>
                    <p className="mt-1 text-[9.5px] font-bold uppercase tracking-wider text-muted-foreground">
                      Hidden fees
                    </p>
                  </div>
                </div>
                <div className="mt-4 h-px bg-border" />
                <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                  Every reason below is backed by a policy we publish — not a
                  slogan we print.
                </p>
              </div>

              {/* Sticky CTA */}
              <Link
                href={numberCallLink}
                className="group mt-4 flex items-center gap-4 rounded-2xl border border-primary/25 bg-primary text-primary-foreground p-4 shadow-lg shadow-primary/25 transition-colors hover:bg-primary/90"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary-foreground/15">
                  <RiPhoneFill className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-primary-foreground/70">
                    Call now · 24/7
                  </span>
                  <span className="block truncate text-base font-bold">
                    {displayNumber}
                  </span>
                </span>
                <RiArrowRightLine className="size-4 shrink-0 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* ----------------------------------------------------------
              RIGHT — comparison ledger (8/12)
          ---------------------------------------------------------- */}
          <div className="lg:col-span-8">
            {/* Ledger header row (columns) */}
            <div className="mb-2 hidden grid-cols-[auto_1fr_1fr] items-center gap-5 pb-3 sm:grid sm:gap-6">
              <span className="text-[9.5px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                #
              </span>
              <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.24em] text-muted-foreground">
                <RiCloseLine className="size-3 text-muted-foreground/60" />
                Typical garage
              </span>
              <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.24em] text-primary">
                <RiCheckDoubleFill className="size-3" />
                {SiteConfig.brandName.split(" ")[0]} standard
              </span>
            </div>

            {/* Ledger rows */}
            <ol className="divide-y divide-border border-y border-border">
              {reasons.map((reason, i) => {
                const Icon = ICONS[i];
                const cleanName = reason.name.replace(/:$/, "");
                const contrast = CONTRASTS[i];
                const num = String(i + 1).padStart(2, "0");

                return (
                  <li
                    key={cleanName}
                    className="group relative grid grid-cols-1 items-start gap-4 py-6 transition-colors hover:bg-primary/[0.03] sm:grid-cols-[auto_1fr_1fr] sm:gap-6 sm:py-7"
                  >
                    {/* Index column */}
                    <div className="flex items-center gap-3 sm:flex-col sm:items-start sm:gap-2">
                      <span className="font-mono text-xl font-bold tabular-nums text-primary/40 transition-colors group-hover:text-primary sm:text-2xl">
                        {num}
                      </span>
                      <span className="hidden size-8 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/15 sm:flex">
                        <Icon className="size-4 text-primary" />
                      </span>
                    </div>

                    {/* Them column */}
                    <div className="sm:pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/70 sm:hidden">
                        Typical garage
                      </p>
                      <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground line-through decoration-muted-foreground/30">
                        {contrast.them}
                      </p>
                      {/* Title (mobile under them-col so relationship reads) */}
                      <h3 className="mt-3 text-sm font-bold leading-tight tracking-tight text-foreground sm:hidden">
                        {cleanName}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground sm:hidden">
                        {reason.description}
                      </p>
                    </div>

                    {/* Us column */}
                    <div className="sm:pt-1">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary sm:hidden">
                        Our standard
                      </p>
                      <div className="mt-0.5 flex items-start gap-2">
                        <RiCheckDoubleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                        <div className="min-w-0">
                          <p className="text-sm font-semibold leading-snug text-foreground">
                            {contrast.us}
                          </p>
                          {/* Desktop-only title + description shown under the "us" claim */}
                          <h3 className="mt-2 hidden text-[13px] font-bold tracking-tight text-foreground/90 sm:block">
                            {cleanName}
                          </h3>
                          <p className="mt-1 hidden text-[12.5px] leading-relaxed text-muted-foreground sm:block">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Hover arrow — top-right corner */}
                    <RiArrowRightUpLine className="pointer-events-none absolute right-0 top-4 hidden size-4 text-muted-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:block" />
                  </li>
                );
              })}
            </ol>

            {/* ============================================================
                FINAL WORD — dark band at ledger bottom
            ============================================================ */}
            {finalWord && (() => {
              const cleanName = finalWord.name.replace(/:$/, "");
              return (
                <div className="relative mt-6 overflow-hidden rounded-2xl border border-border bg-foreground">
                  {/* Ambient accents */}
                  <div aria-hidden className="pointer-events-none absolute inset-0">
                    <div className="absolute -left-20 -top-20 h-48 w-48 rounded-full bg-primary/25 blur-[80px]" />
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px)",
                        backgroundSize: "40px 100%",
                        maskImage:
                          "radial-gradient(ellipse at right, black 20%, transparent 80%)",
                        WebkitMaskImage:
                          "radial-gradient(ellipse at right, black 20%, transparent 80%)",
                      }}
                    />
                  </div>

                  <div className="relative grid grid-cols-1 gap-6 p-6 sm:p-7 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-7 lg:p-8">
                    {/* Icon */}
                    <div className="flex items-center gap-3">
                      <span className="flex size-12 items-center justify-center rounded-xl bg-primary/20">
                        <RiShieldCheckLine className="size-6 text-primary" />
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                        <span className="relative flex size-1.5">
                          <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                          <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                        </span>
                        <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                          Final word
                        </span>
                      </span>
                    </div>

                    {/* Content */}
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg font-bold leading-snug -tracking-tight text-background sm:text-xl">
                        {cleanName}
                      </h3>
                      <p className="mt-1.5 text-[13px] leading-relaxed text-background/60">
                        {finalWord.description}
                      </p>
                    </div>

                    {/* CTA */}
                    <Link
                      href="/about"
                      className="group/btn inline-flex h-11 shrink-0 items-center justify-center gap-2 rounded-xl border border-primary/40 bg-primary/10 px-5 text-sm font-bold text-primary backdrop-blur-sm transition-colors hover:bg-primary hover:text-primary-foreground"
                    >
                      Our story
                      <RiArrowRightUpLine className="size-4 transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              );
            })()}

            {/* Trust ribbon */}
            <div className="mt-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-border bg-card/70 px-5 py-4 backdrop-blur">
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2.5">
                {TRUST_RIBBON.map((t) => {
                  const Icon = t.icon;
                  return (
                    <span
                      key={t.label}
                      className="inline-flex items-center gap-2 text-[11.5px] font-semibold text-foreground"
                    >
                      <span className="flex size-6 items-center justify-center rounded-md bg-primary/10">
                        <Icon className="size-3.5 text-primary" />
                      </span>
                      {t.label}
                    </span>
                  );
                })}
              </div>
              <Link
                href="/services"
                className="group inline-flex items-center gap-1.5 text-[10.5px] font-bold uppercase tracking-wider text-primary hover:text-primary/80"
              >
                See services
                <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;