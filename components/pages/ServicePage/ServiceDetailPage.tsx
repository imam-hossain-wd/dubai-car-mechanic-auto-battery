// components/pages/ServicePage/ServiceDetailPage.tsx

import Link from "next/link";
import Image from "next/image";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCheckDoubleFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiWhatsappFill,
  RiMapPinFill,
  RiToolsFill,
  RiQuestionLine,
  RiAlertLine,
  RiArrowDownSLine,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiPhoneFill,
  RiRadarFill,
  RiCompass3Line,
  RiRouteFill,
  RiFocus3Fill,
  RiFlashlightFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";

/* ============ Service Type ============ */
type ServiceType = {
  title: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  features: string[];
  slug: string;
  service_banner?: { src?: string };
  intro: { heading: string; subheading: string; content: string };
  whyChooseUs: { heading: string; points: string[] };
  problemSignsSection: { heading: string; description: string; signs: string[] };
  ourProcess: { heading: string; steps: { title: string; description: string }[] };
  toolsOrProducts: { heading: string; brands: string[]; note: string };
  ctaSection: { heading: string; description: string; buttonText: string };
  faq: { question: string; answer: string }[];
};

export default function ServiceDetailPage({
  service,
  slug,
}: {
  service: ServiceType;
  slug: string;
}) {
  const {
    city,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    responseTime,
    serviceAreas,
    location,
    country,
  } = SiteConfig;

  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
          MASTHEAD — service dossier
      ============================================================ */}
      <section
        aria-labelledby="service-title"
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
            aria-hidden
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
              href="/services"
              className="transition-colors hover:text-primary"
            >
              Services
            </Link>
            <span className="size-1 rounded-full bg-border" />
            <span className="text-primary">{service.name}</span>
          </nav>

          <div className="mt-8 grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left — headline block (7 cols) */}
            <div className="lg:col-span-7">
              {/* Kicker */}
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Service dossier · {city}
                </span>
              </div>

              {/* Headline */}
              <h1
                id="service-title"
                className="mt-5 font-serif text-[clamp(2.2rem,5.4vw,4rem)] font-bold leading-[1.02] -tracking-[0.028em] text-foreground"
              >
                {service.name} —{" "}
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">
                    onsite
                  </span>
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
                , 24/7.
              </h1>

              {/* Subheading (from intro) */}
              <p className="mt-4 text-[13px] font-bold uppercase tracking-[0.16em] text-primary">
                {service.intro.subheading}
              </p>

              {/* Description */}
              <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
                {service.intro.content}
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { icon: RiTimeFill, label: responseTime + " response" },
                  { icon: RiShieldCheckFill, label: "Workmanship warranty" },
                  { icon: RiFlashlightFill, label: "No towing required" },
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

            {/* Right — service dossier card (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-primary/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                  {/* Media — slim landscape */}
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                    {service.service_banner?.src ? (
                      <Image
                        src={service.service_banner.src}
                        alt={`${service.name} in ${city}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        className="object-cover"
                        priority
                      />
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background" />
                    )}

                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                    {/* Corner crop marks */}
                    <div className="pointer-events-none absolute left-3 top-3 size-6">
                      <span className="absolute left-0 top-0 h-px w-4 bg-primary/80" />
                      <span className="absolute left-0 top-0 h-4 w-px bg-primary/80" />
                    </div>

                    {/* Certified chip */}
                    <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/40 px-2.5 py-1 backdrop-blur-md">
                      <RiVerifiedBadgeFill className="size-3 text-primary" />
                      <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-white">
                        Certified service
                      </span>
                    </div>

                    {/* Bottom label */}
                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-primary">
                        Onsite · {city}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-white/95">
                        Battery · Diagnostics · Repairs
                      </p>
                    </div>
                  </div>

                  {/* Ledger footer */}
                  <dl className="divide-y divide-border">
                    <div className="flex items-center justify-between gap-3 px-5 py-3">
                      <dt className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Response
                      </dt>
                      <dd className="font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                        {responseTime}
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-5 py-3">
                      <dt className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Availability
                      </dt>
                      <dd className="font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                        24/7
                      </dd>
                    </div>
                    <div className="flex items-center justify-between gap-3 px-5 py-3">
                      <dt className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                        Coverage
                      </dt>
                      <dd className="font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                        {serviceAreas.length} areas
                      </dd>
                    </div>
                  </dl>

                  {/* Status beacon footer */}
                  <div className="flex items-center justify-between border-t border-border bg-muted/40 px-5 py-3">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Live dispatch
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
          FEATURE LEDGER
      ============================================================ */}
      <section
        aria-labelledby="included-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  What&apos;s included
                </span>
              </div>
              <h2
                id="included-title"
                className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                Everything in this{" "}
                <span className="italic text-primary">service package</span>.
              </h2>
            </div>

            {/* Count badge */}
            <div className="flex items-center gap-3 lg:col-span-5 lg:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <RiCheckDoubleFill className="size-3 text-primary" />
                <span className="font-mono text-[10.5px] font-bold tabular-nums text-foreground">
                  {String(service.features.length).padStart(2, "0")}
                </span>
                <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  items
                </span>
              </span>
            </div>
          </div>

          {/* Ledger */}
          <ol className="mt-10 divide-y divide-border border-y border-border">
            {service.features.map((feature, i) => (
              <li
                key={i}
                className="group flex items-start gap-4 py-4 transition-colors hover:bg-primary/[0.03] sm:gap-5"
              >
                <span className="mt-0.5 font-mono text-[10.5px] font-bold tabular-nums text-primary/70">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <RiCheckDoubleFill className="mt-0.5 size-3.5 shrink-0 text-primary" />
                <span className="text-[13.5px] font-semibold text-foreground sm:text-sm">
                  {feature}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          WHY CHOOSE US — protocol ledger
      ============================================================ */}
      <section
        aria-labelledby="why-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Sticky intro (4 cols) */}
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <div className="flex items-center gap-3">
                  <span className="h-px w-8 bg-primary" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                    Why choose us
                  </span>
                </div>
                <h2
                  id="why-title"
                  className="mt-5 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
                >
                  Built for{" "}
                  <span className="italic text-primary">serious</span> repairs.
                </h2>

                {/* Rating dossier */}
                <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
                  <div className="flex items-center gap-3 border-b border-border px-4 py-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <RiStarFill key={i} className="size-3 text-primary" />
                      ))}
                    </div>
                    <span className="font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                      5.0
                    </span>
                    <span className="text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      · 500+ drivers
                    </span>
                  </div>
                  <div className="flex items-center justify-between px-4 py-3">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                      <RiRadarFill className="size-3 text-primary" />
                      {service.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <RiShieldCheckFill className="size-3" />
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Protocol ledger (8 cols) */}
            <div className="lg:col-span-8">
              <ol className="divide-y divide-border border-y border-border">
                {service.whyChooseUs.points.map((point, i) => (
                  <li
                    key={i}
                    className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-4 transition-colors hover:bg-primary/[0.03] sm:gap-5 sm:py-5"
                  >
                    <span className="mt-0.5 font-mono text-base font-bold tabular-nums text-primary/50 group-hover:text-primary sm:text-lg">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 hidden size-6 shrink-0 items-center justify-center rounded-md bg-primary/10 sm:flex">
                        <RiCheckDoubleFill className="size-3.5 text-primary" />
                      </span>
                      <p className="text-[13.5px] font-medium leading-relaxed text-foreground sm:text-sm">
                        {point}
                      </p>
                    </div>
                    <RiArrowRightUpLine className="mt-0.5 size-4 shrink-0 text-muted-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          DIAGNOSTIC BOARD — problem signs
      ============================================================ */}
      <section
        aria-labelledby="signs-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Intro (5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-destructive/70" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-destructive">
                  Warning signs
                </span>
              </div>
              <h2
                id="signs-title"
                className="mt-5 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                {service.problemSignsSection.heading}
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                {service.problemSignsSection.description}
              </p>

              {/* Alert card */}
              <div className="mt-6 flex items-start gap-3 rounded-xl border border-destructive/25 bg-destructive/[0.04] px-4 py-3.5">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-destructive/15">
                  <RiAlertLine className="size-3.5 text-destructive" />
                </span>
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-destructive">
                    Safety critical
                  </p>
                  <p className="mt-1 text-[12px] leading-relaxed text-foreground/80">
                    If you notice any of these signs, book a repair immediately.
                  </p>
                </div>
              </div>
            </div>

            {/* Signs ledger (7 cols) */}
            <div className="lg:col-span-7">
              <ol className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
                {service.problemSignsSection.signs.map((sign, i) => (
                  <li
                    key={i}
                    className="group flex items-start gap-4 px-5 py-4 transition-colors hover:bg-destructive/[0.03] sm:py-4.5"
                  >
                    <span className="mt-0.5 font-mono text-[10.5px] font-bold tabular-nums text-destructive/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <RiAlertLine className="mt-0.5 size-3.5 shrink-0 text-destructive/80" />
                    <span className="text-[13px] font-medium leading-relaxed text-foreground">
                      {sign}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FIELD PROTOCOL — our process
      ============================================================ */}
      <section
        aria-labelledby="process-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          {/* Header */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Field protocol
                </span>
              </div>
              <h2
                id="process-title"
                className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                {service.ourProcess.heading}
              </h2>
            </div>

            <div className="flex items-center gap-3 lg:col-span-5 lg:justify-end">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5">
                <RiRouteFill className="size-3 text-primary" />
                <span className="font-mono text-[10.5px] font-bold tabular-nums text-foreground">
                  {String(service.ourProcess.steps.length).padStart(2, "0")}
                </span>
                <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  steps
                </span>
              </span>
            </div>
          </div>

          {/* Step ledger */}
          <ol className="relative mt-10 divide-y divide-border border-y border-border">
            {service.ourProcess.steps.map((step, i) => (
              <li
                key={i}
                className="group grid grid-cols-[auto_1fr_auto] items-start gap-4 py-6 transition-colors hover:bg-primary/[0.03] sm:gap-6 sm:py-7"
              >
                <span className="font-mono text-xl font-bold tabular-nums text-primary/40 transition-colors group-hover:text-primary sm:text-2xl">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold tracking-tight text-foreground sm:text-base">
                    {step.title}
                  </h3>
                  <p className="mt-1 max-w-xl text-[12.5px] leading-relaxed text-muted-foreground sm:text-[13.5px]">
                    {step.description}
                  </p>
                </div>

                <RiArrowRightUpLine className="mt-1 size-4 shrink-0 text-muted-foreground/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary sm:mt-0" />
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ============================================================
          PARTS & TOOLS MANIFEST
      ============================================================ */}
      <section
        aria-labelledby="tools-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-14">
            {/* Intro (5 cols) */}
            <div className="lg:col-span-5">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Parts & tools
                </span>
              </div>
              <h2
                id="tools-title"
                className="mt-5 font-serif text-[clamp(1.8rem,3.6vw,2.6rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                {service.toolsOrProducts.heading}
              </h2>
              <p className="mt-4 max-w-md text-[14px] leading-relaxed text-muted-foreground">
                {service.toolsOrProducts.note}
              </p>

              {/* Tools dossier */}
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-border bg-card/70 px-4 py-3 backdrop-blur">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <RiToolsFill className="size-4 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                    Onboard every van
                  </p>
                  <p className="mt-0.5 font-mono text-[12.5px] font-bold tabular-nums text-foreground">
                    {String(service.toolsOrProducts.brands.length).padStart(2, "0")}{" "}
                    <span className="text-[10px] font-semibold text-muted-foreground">
                      brands & tools
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* Brands ledger (7 cols) */}
            <div className="lg:col-span-7">
              <ol className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur">
                {service.toolsOrProducts.brands.map((brand, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-primary/[0.03]"
                  >
                    <span className="font-mono text-[10.5px] font-bold tabular-nums text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[13px] font-semibold text-foreground">
                      {brand}
                    </span>
                    <RiCheckDoubleFill className="ml-auto size-3.5 shrink-0 text-primary" />
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* ============================================================
          FAQ — editorial Q&A ledger
      ============================================================ */}
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
                  {String(service.faq.length).padStart(2, "0")}
                </span>
                <span className="text-[9.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                  answers
                </span>
              </span>
            </div>
          </div>

          {/* FAQ ledger */}
          <div className="mt-10 divide-y divide-border border-y border-border">
            {service.faq.map((faq, i) => (
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
              {/* Left */}
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1">
                  <RiVerifiedBadgeFill className="size-3 text-primary" />
                  <span className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-primary">
                    Available 24/7 · {country}
                  </span>
                </div>

                <h2
                  id="signoff-title"
                  className="mt-4 font-serif text-[clamp(1.8rem,4.6vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-background"
                >
                  {service.ctaSection.heading}
                </h2>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-background/60 sm:text-[15px]">
                  {service.ctaSection.description}
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

              {/* Right — CTAs */}
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

            {/* Coverage footer inside dark panel */}
            <div className="relative flex flex-wrap items-center justify-between gap-3 border-t border-background/10 px-7 py-4 sm:px-10 lg:px-12">
              <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10px] font-bold uppercase tracking-[0.16em] text-background/55">
                <span className="inline-flex items-center gap-1.5">
                  <RiCheckDoubleFill className="size-3 text-primary" />
                  {service.name} across all {serviceAreas.length} areas
                </span>
                <span className="hidden size-1 rounded-full bg-background/25 sm:inline-block" />
                <span className="hidden items-center gap-1.5 sm:inline-flex">
                  <RiFocus3Fill className="size-3 text-primary" />
                  Same-day dispatch
                </span>
              </div>
              <Link
                href="/area-we-serve"
                className="group inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-primary hover:text-primary/80"
              >
                View all areas
                <RiArrowRightLine className="size-3 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}