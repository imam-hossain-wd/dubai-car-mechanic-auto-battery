// components/sections/FeaturedServices.tsx
"use client";

import Link from "next/link";
import {
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiFlashlightFill,
  RiShieldCheckFill,
  RiTimeFill,
  RiGridFill,
  RiPhoneFill,
  RiWhatsappFill,
  RiRadarFill,
  RiSparklingFill,
  RiCompass3Line,
} from "@remixicon/react";

import { services } from "@/data/services/services";
import { SiteConfig } from "@/config/siteConfig";
import { ServiceCard } from "@/components/shared/Card/ServiceCard";

const FEATURED_SERVICE_SLUGS = [
  "battery-replacement",
  "jump-start",
  "computer-diagnostic",
  "alternator-repair",
  "fuel-pump-repair",
  "starter-motor-repair",
  "ac-repair",
  "brake-pad-repair",
];

interface FeaturedServicesProps {
  title?: string;
  subtitle?: string;
  limit?: number;
  showAll?: boolean;
}

export function FeaturedServices({
  title = "Featured Services",
  subtitle = "Our most popular mobile repair services, delivered to your doorstep with transparent pricing.",
  limit = 8,
  showAll = false,
}: FeaturedServicesProps) {
  const { responseTime, serviceAreas, displayNumber, numberCallLink, whatsappCallLink } =
    SiteConfig;

  const featuredServices = services.filter((service) =>
    FEATURED_SERVICE_SLUGS.some(
      (slug) =>
        service.slug === slug ||
        service.slug.includes(slug) ||
        slug.includes(service.slug)
    )
  );

  const baseServices = featuredServices.length > 0 ? featuredServices : services;
  const displayServices = showAll ? baseServices : baseServices.slice(0, limit);

  const titleParts = title.split(" ");
  const titleLead = titleParts.slice(0, -1).join(" ");
  const titleAccent = titleParts.slice(-1).join(" ");

  return (
    <section
      aria-labelledby="services-title"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      {/* ==============================================================
          BACKDROP — ruled + route + glow (matches site)
      ============================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "96px 100%",
            maskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 25%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 25%, transparent 90%)",
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
            d="M-40 660 C 140 600, 260 520, 340 360 S 520 80, 700 40"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="6 10"
          />
          <circle cx="340" cy="360" r="4" fill="currentColor" />
        </svg>
        <div className="absolute -top-24 right-0 h-[460px] w-[460px] rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-[320px] w-[320px] rounded-full bg-primary/[0.05] blur-[110px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-8">
        {/* ============================================================
            HEADER — editorial + stat rail
        ============================================================ */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Service manifest · {SiteConfig.city}
              </span>
            </div>

            <h2
              id="services-title"
              className="mt-5 font-serif text-[clamp(2.1rem,4.8vw,3.6rem)] font-bold leading-[1.02] -tracking-[0.028em] text-foreground"
            >
              {titleLead}{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">
                  {titleAccent}
                </span>
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

          {/* Stat rail */}
          <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur lg:col-span-5">
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Response
              </p>
              <p className="mt-1 text-base font-bold leading-none text-foreground sm:text-lg">
                {responseTime.split(" ")[0]}
                <span className="ml-0.5 text-[11px] font-semibold text-muted-foreground">
                  min
                </span>
              </p>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Services
              </p>
              <p className="mt-1 text-base font-bold leading-none text-foreground sm:text-lg">
                {String(displayServices.length).padStart(2, "0")}
              </p>
            </div>
            <div className="px-4 py-4 sm:px-5">
              <p className="text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                Coverage
              </p>
              <p className="mt-1 text-base font-bold leading-none text-foreground sm:text-lg">
                {serviceAreas.length}+
              </p>
            </div>
          </div>
        </div>

        {/* ============================================================
            GRID — editorial, balanced
        ============================================================ */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5 xl:grid-cols-4">
          {displayServices.map((service, index) => (
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

        {/* ============================================================
            MANIFEST FOOTER — sign-off strip (replaces banner)
        ============================================================ */}
        {!showAll && (
          <div className="mt-12 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="flex flex-col gap-6 p-6 sm:p-7 lg:flex-row lg:items-center lg:justify-between">
              {/* Left — narrative */}
              <div className="max-w-xl">
                <div className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                  <RiSparklingFill className="size-3" />
                  Full manifest · {services.length} services
                </div>
                <h3 className="mt-2 font-serif text-xl font-bold leading-snug -tracking-tight text-foreground sm:text-2xl">
                  Need something{" "}
                  <span className="italic text-primary">not listed</span>?
                </h3>
                <p className="mt-2 text-[13.5px] leading-relaxed text-muted-foreground">
                  We handle{" "}
                  <span className="font-semibold text-foreground">
                    {services.length}+ mobile services
                  </span>{" "}
                  across {SiteConfig.city} — AC, alternator, brakes, batteries,
                  and everything between. If it&apos;s on your car, we can fix
                  it onsite.
                </p>
              </div>

              {/* Right — dual CTA */}
              <div className="flex flex-col gap-2.5 sm:flex-row">
                <Link
                  href={numberCallLink}
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl bg-primary px-6 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40"
                >
                  <RiPhoneFill className="size-4" />
                  {displayNumber}
                  <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                </Link>
                <Link
                  href="/services"
                  className="group inline-flex h-12 items-center justify-center gap-2.5 rounded-xl border border-border bg-background px-6 text-sm font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  Full service catalog
                  <RiArrowRightUpLine className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>

            {/* Trust rail */}
            <div className="grid grid-cols-2 divide-x divide-border border-t border-border sm:grid-cols-4">
              {[
                { icon: RiTimeFill, label: `${responseTime} response` },
                { icon: RiShieldCheckFill, label: "Workmanship warranty" },
                { icon: RiFlashlightFill, label: "24/7 dispatch" },
                { icon: RiCompass3Line, label: `All ${serviceAreas.length} areas` },
              ].map((t) => {
                const Icon = t.icon;
                return (
                  <div
                    key={t.label}
                    className="flex items-center gap-2.5 px-4 py-3.5"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-md bg-primary/10">
                      <Icon className="size-3.5 text-primary" />
                    </span>
                    <span className="truncate text-[10.5px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                      {t.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default FeaturedServices;