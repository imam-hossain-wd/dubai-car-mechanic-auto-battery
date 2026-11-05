import Link from "next/link";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiTimeFill,
  RiShieldCheckFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiWhatsappFill,
  RiStarFill,
  RiVerifiedBadgeFill,
  RiMapPinFill,
  RiPriceTag3Fill,
  RiPhoneFill,
} from "@remixicon/react";

import { SiteConfig } from "@/config/siteConfig";
import { services } from "@/data/services/services";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";


export default function ServicesPage() {
  const {
    city,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
    responseTime,
    serviceAreas,
  } = SiteConfig;

  return (
    <main className="relative w-full overflow-hidden bg-background">
      {/* ============================================================
          HERO — editorial masthead
      ============================================================ */}
      <section
        aria-labelledby="services-title"
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

        <div className="relative mx-auto w-full max-w-[1400px] px-5 md:px-8 pb-10 pt-12">
          <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Left — headline (7 cols) */}
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  Service catalog · {city}
                </span>
              </div>

              <h1
                id="services-title"
                className="mt-6 font-serif text-[clamp(2.4rem,6vw,4.6rem)] font-bold leading-[0.98] -tracking-[0.03em] text-foreground"
              >
                The whole workshop,
                <br />
                <span className="relative inline-block">
                  <span className="relative z-10 italic text-primary">
                    at your door
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
                </span>
                .
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                {services.length}+ onsite mobile services across{" "}
                <span className="font-semibold text-foreground">
                  {serviceAreas.length} Dubai districts
                </span>{" "}
                — from roadside battery rescue to full diagnostics. Certified
                mechanics, OEM parts, transparent pricing, and{" "}
                <span className="font-semibold text-foreground">
                  {responseTime}
                </span>{" "}
                response.
              </p>

              {/* Trust chips */}
              <div className="mt-6 flex flex-wrap items-center gap-2">
                {[
                  { icon: RiFlashlightFill, label: "No towing required" },
                  { icon: RiShieldCheckFill, label: "Certified mechanics" },
                  { icon: RiPriceTag3Fill, label: "Upfront pricing" },
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

            {/* Right — stat block (5 cols) */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="absolute -right-3 -top-3 hidden h-full w-full rounded-2xl border border-primary/25 sm:block" />

                <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl shadow-foreground/[0.05]">
                  {/* Head */}
                  <div className="flex items-center justify-between border-b border-border bg-muted/40 px-5 py-3">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-foreground">
                      At a glance
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.16em] text-primary">
                      <span className="relative flex size-1.5">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                        <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
                      </span>
                      Live
                    </span>
                  </div>

                  {/* Stats — divided list */}
                  <dl className="divide-y divide-border">
                    {[
                      {
                        label: "Services",
                        value: String(services.length).padStart(2, "0"),
                      },
                      {
                        label: "Coverage",
                        value: `${serviceAreas.length}+`,
                        sub: "areas",
                      },
                      {
                        label: "Response",
                        value: responseTime.split(" ")[0],
                        sub: "min",
                      },
                      {
                        label: "Availability",
                        value: "24/7",
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

                  {/* Footer */}
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
          ALL SERVICES — single continuous grid
      ============================================================ */}
      <section
        aria-labelledby="all-services-title"
        className="relative w-full border-b border-border"
      >
        <div className="mx-auto w-full max-w-[1400px] px-5 py-10">
          {/* Header */}
          <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
            <div className="lg:col-span-7">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-primary" />
                <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                  All services
                </span>
              </div>
              <h2
                id="all-services-title"
                className="mt-5 font-serif text-[clamp(1.9rem,4vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-foreground"
              >
                Every service,{" "}
                <span className="italic text-primary">one place</span>.
              </h2>
              <p className="mt-4 max-w-xl text-[14.5px] leading-relaxed text-muted-foreground">
                Certified mechanics, dealer-grade tools, and genuine OEM parts —
                delivered onsite, anywhere in {city}.
              </p>
            </div>

            {/* Stat rail */}
            <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur lg:col-span-5">
              <div className="px-4 py-4 sm:px-5">
                <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                  Services
                </p>
                <p className="mt-1 text-lg font-bold leading-none text-foreground">
                  {String(services.length).padStart(2, "0")}
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

          {/* All-services grid */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                name={service.name}
                slug={service.slug}
                features={service.features}
                image={service.service_banner?.src}
                intro={service.intro}
                index={index}
              />
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
                    Trusted by 500+ drivers
                  </span>
                </div>

                <h2
                  id="signoff-title"
                  className="mt-4 font-serif text-[clamp(1.8rem,4.6vw,3rem)] font-bold leading-[1.04] -tracking-[0.025em] text-background"
                >
                  Need a service?{" "}
                  <span className="italic text-primary">
                    We&apos;re one call away
                  </span>
                  .
                </h2>

                <p className="mt-3 max-w-2xl text-[14px] leading-relaxed text-background/60 sm:text-[15px]">
                  Certified mechanics, genuine parts, and a {responseTime}{" "}
                  response — anywhere in {city}.
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
                  <RiCustomerServiceFill className="size-3 text-primary" />
                  Round-the-clock · {SiteConfig.country}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}