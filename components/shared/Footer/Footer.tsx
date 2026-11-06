// components/layout/Footer.tsx
import Link from "next/link";
import {
  RiMapPinFill,
  RiPhoneFill,
  RiMailFill,
  RiShieldCheckFill,
  RiTimeFill,
  RiStarFill,
  RiArrowUpLine,
  RiWhatsappFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiFlashlightFill,
  RiBatteryChargeFill,
  RiVerifiedBadgeFill,
  RiGlobalLine,
  RiCustomerServiceFill,
  RiRadarFill,
  RiCompass3Line,
  RiCheckDoubleFill,
} from "@remixicon/react";

import { SiteConfig} from "@/config/siteConfig";
import { services } from "@/data/services/services";
import Logo from "../Logo/Logo";

const QUICK_LINKS = [
  { title: "Services", href: "/services" },
  { title: "Areas We Serve", href: "/area-we-serve" },
  { title: "About", href: "/about" },
  { title: "Contact", href: "/contact" },
  { title: "Projects", href: "/projects" },
] as const;

const LEGAL_LINKS = [
  { title: "Privacy", href: "/privacy" },
  { title: "Terms", href: "/terms" },
  { title: "Sitemap", href: "/sitemap.xml" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const {
    brandName,
    displayNumber,
    email,
    location,
    city,
    country,
    serviceAreas,
    numberCallLink,
    whatsappCallLink,
    GMB,
    socialLinks,
    responseTime,
    foundedYear,
  } = SiteConfig;

  return (
    <footer
      aria-labelledby="footer-title"
      className="relative overflow-hidden bg-foreground text-background"
    >
      {/* ==============================================================
          BACKDROP — ruled columns + diagonal route + top glow
      ============================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* Ruled columns */}
        <div
          className="absolute inset-0 opacity-[0.10]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0) 1px, transparent 1px)",
            backgroundSize: "96px 100%",
            maskImage:
              "radial-gradient(ellipse 110% 90% at 50% 0%, black 30%, transparent 90%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 110% 90% at 50% 0%, black 30%, transparent 90%)",
          }}
        />
        {/* Diagonal route */}
        <svg
          className="absolute inset-y-0 right-0 hidden h-full w-1/2 text-primary/40 lg:block"
          viewBox="0 0 600 900"
          fill="none"
          preserveAspectRatio="xMaxYMid slice"
        >
          <path
            d="M-40 760 C 160 700, 260 560, 360 380 S 540 60, 720 20"
            stroke="currentColor"
            strokeWidth="1.25"
            strokeDasharray="6 10"
          />
          <circle cx="360" cy="380" r="4" fill="currentColor" />
        </svg>
        {/* Top glow */}
        <div className="absolute left-1/2 top-0 h-[520px] w-[1000px] -translate-x-1/2 rounded-full bg-primary/[0.10] blur-[140px]" />
        {/* Bottom-left glow */}
        <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-primary/[0.06] blur-[120px]" />
        {/* Top hairline */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      </div>

 
      {/* ==============================================================
          MAIN — 12-col editorial grid
      ============================================================== */}
      <div className="relative mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 py-8 lg:grid-cols-12 lg:gap-8 ">
          {/* ----------------------------------------------------------
              COL 1 — Brand dossier (4/12)
          ---------------------------------------------------------- */}
          <div className="lg:col-span-4">
            {/* Logo */}
            <div className="w-fit rounded bg-white p-2">
              <div className="">
                <Logo />
              </div>
            </div>

            {/* Mission line */}
            <p className="mt-5 max-w-sm text-[13px] leading-relaxed text-background/55">
              {SiteConfig.description}
            </p>

            {/* Meta row */}
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-background/45">
              <span className="inline-flex items-center gap-1.5">
                <RiFlashlightFill className="size-2.5 text-primary" />
                Since {foundedYear}
              </span>
              <span className="size-1 rounded-full bg-background/20" />
              <span className="inline-flex items-center gap-1.5">
                <RiShieldCheckFill className="size-2.5 text-primary" />
                Verified business
              </span>
              <span className="size-1 rounded-full bg-background/20" />
              <span className="inline-flex items-center gap-1.5">
                <RiStarFill className="size-2.5 text-primary" />
                5.0 rated
              </span>
            </div>

            {/* Contact block */}
            <ul className="mt-6 space-y-1">
              <ContactRow
                icon={RiPhoneFill}
                href={numberCallLink}
                label="Call"
                value={displayNumber}
                highlight
              />
              <ContactRow
                icon={RiMailFill}
                href={`mailto:${email}`}
                label="Email"
                value={email}
              />
              <ContactRow
                icon={RiMapPinFill}
                href={GMB.mapsLink}
                label="Base"
                value={`${location}`}
                external
              />
            </ul>

            {/* Social rail */}
            <div className="mt-6">
              <p className="mb-2 text-[9.5px] font-bold uppercase tracking-[0.2em] text-background/40">
                Follow
              </p>
              <div className="flex flex-wrap items-center gap-1.5">
                {socialLinks
                  .filter((s) => s.href)
                  .map((social) => {
                    const Icon = social.icon;
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.name}
                        className="group flex size-9 items-center justify-center rounded-lg border border-background/10 bg-background/[0.03] text-background/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                      >
                        <Icon className="size-3.5" />
                      </Link>
                    );
                  })}
                <Link
                  href={whatsappCallLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="group flex size-9 items-center justify-center rounded-lg border border-background/10 bg-background/[0.03] text-background/60 transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-primary/10 hover:text-primary"
                >
                  <RiWhatsappFill className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>

          {/* ----------------------------------------------------------
              COL 2 — Services ledger (3/12)
          ---------------------------------------------------------- */}
          <div className="lg:col-span-3">
            <ColumnHead title="Services" count={services.length} />

            <ul className="mt-4 divide-y divide-background/[0.06] border-y border-background/[0.06]">
              {services.map((service, i) => (

                    <li key={service.slug}>
                  <Link
                    href={`/area-we-serve/${service.slug}`}
                    className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-[11.5px] font-medium text-background/60 transition-colors hover:bg-background/[0.04] hover:text-background"
                  >
                    <span className="size-1 shrink-0 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
                    <span className="truncate">{service.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------------------------------------------------------
              COL 3 — Coverage index (2/12)
          ---------------------------------------------------------- */}
          <div className="lg:col-span-2">
            <ColumnHead title="Coverage" count={serviceAreas.length} />

            <ul className="mt-4 flex flex-col gap-0.5">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/area-we-serve/${area.slug}`}
                    className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-[11.5px] font-medium text-background/60 transition-colors hover:bg-background/[0.04] hover:text-background"
                  >
                    <span className="size-1 shrink-0 rounded-full bg-primary/50 transition-colors group-hover:bg-primary" />
                    <span className="truncate">{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ----------------------------------------------------------
              COL 4 — Company + status card (3/12)
          ---------------------------------------------------------- */}
          <div className="lg:col-span-3">
            <ColumnHead title="Company" />

            <ul className="mt-4 space-y-0.5">
              {QUICK_LINKS.map((link, i) => (
                <li key={link.title}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-3 rounded-md px-2 py-1.5 text-[12.5px] font-medium text-background/60 transition-colors hover:bg-background/[0.04] hover:text-background"
                  >
                    <span className="font-mono text-[9px] tabular-nums text-background/30 transition-colors group-hover:text-primary/70">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="truncate">{link.title}</span>
                    <RiArrowRightUpLine className="ml-auto size-3 shrink-0 text-background/20 opacity-0 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100 group-hover:text-primary" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Status card — 24/7 coverage */}
            <div className="relative mt-6 overflow-hidden rounded-2xl border border-primary/25 bg-gradient-to-br from-primary/[0.12] to-transparent p-4">
              {/* Corner marks */}
              <div className="pointer-events-none absolute right-3 top-3 size-6">
                <span className="absolute right-0 top-0 h-px w-4 bg-primary/60" />
                <span className="absolute right-0 top-0 h-4 w-px bg-primary/60" />
              </div>

              <div className="flex items-start gap-3">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                  <RiCustomerServiceFill className="size-4 text-primary" />
                </span>
                <div className="min-w-0">
                  <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-primary">
                    24/7 support
                  </p>
                  <p className="mt-1 text-[11.5px] leading-relaxed text-background/80">
                    Round-the-clock emergency dispatch, {country}-wide.
                  </p>
                </div>
              </div>

              <div className="mt-3 flex items-center gap-3 border-t border-background/[0.08] pt-3 text-[9.5px] font-bold uppercase tracking-[0.16em] text-background/50">
                <span className="inline-flex items-center gap-1.5">
                  <RiCompass3Line className="size-3 text-primary" />
                  {city}
                </span>
                <span className="size-1 rounded-full bg-background/20" />
                <span className="inline-flex items-center gap-1.5">
                  <RiTimeFill className="size-3 text-primary" />
                  {responseTime}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ==============================================================
            SIGN-OFF STRIP
        ============================================================== */}
        <div className="relative border-t border-background/[0.08]">
          <div className="flex flex-col gap-5 py-6 lg:flex-row lg:items-center lg:justify-between">
            {/* Left — copyright */}
            <div className="flex flex-col gap-1.5 text-[11.5px] text-background/45">
              <p>
                © {currentYear}{" "}
                <span className="font-bold text-background">{brandName}</span>.
                All rights reserved.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-[10px]">
                <span>Mobile car repair</span>
                <span className="size-1 rounded-full bg-background/25" />
                <span>
                  {city}, {country}
                </span>
                <span className="hidden size-1 rounded-full bg-background/25 sm:inline-block" />
                <span className="hidden items-center gap-1 sm:inline-flex">
                  <RiVerifiedBadgeFill className="size-3 text-primary" />
                  Verified business
                </span>
              </div>
            </div>

            {/* Center — legal */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              {LEGAL_LINKS.map((l) => (
                <Link
                  key={l.title}
                  href={l.href}
                  className="text-[11.5px] font-semibold text-background/50 transition-colors hover:text-primary"
                >
                  {l.title}
                </Link>
              ))}
            </div>

            {/* Right — back to top */}
            <Link
              href="#top"
              aria-label="Back to top"
              className="group inline-flex items-center gap-2 self-start text-[10px] font-bold uppercase tracking-[0.18em] text-background/55 transition-colors hover:text-primary lg:self-auto"
            >
              Back to top
              <span className="flex size-8 items-center justify-center rounded-lg border border-background/15 bg-background/[0.03] transition-colors group-hover:border-primary/40 group-hover:bg-primary/10">
                <RiArrowUpLine className="size-3.5 transition-transform group-hover:-translate-y-0.5" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
    SUB-COMPONENTS
============================================================ */

function ColumnHead({ title, count }: { title: string; count?: number }) {
  return (
    <div className="flex items-center justify-between border-b border-background/[0.08] pb-3">
      <h3 className="text-[10px] font-bold uppercase tracking-[0.22em] text-background/85">
        {title}
      </h3>
      {count !== undefined && (
        <span className="inline-flex items-center rounded-md border border-primary/30 bg-primary/10 px-1.5 py-0.5 font-mono text-[9.5px] font-bold tabular-nums text-primary">
          {count}
        </span>
      )}
    </div>
  );
}

function ContactRow({
  icon: Icon,
  href,
  label,
  value,
  highlight,
  external,
}: {
  icon: React.ElementType;
  href: string;
  label: string;
  value: string;
  highlight?: boolean;
  external?: boolean;
}) {
  return (
    <li>
      <Link
        href={href}
        {...(external
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        className="group flex items-center gap-3 rounded-lg border border-transparent px-1.5 py-1.5 transition-colors hover:border-background/[0.08] hover:bg-background/[0.03]"
      >
        <span
          className={
            highlight
              ? "flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-md shadow-primary/25"
              : "flex size-8 shrink-0 items-center justify-center rounded-lg bg-primary/10"
          }
        >
          <Icon
            className={
              highlight ? "size-3.5 text-primary-foreground" : "size-3.5 text-primary"
            }
          />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-background/40">
            {label}
          </p>
          <p
            className={
              highlight
                ? "truncate text-[13px] font-bold text-primary"
                : "truncate text-[13px] font-semibold text-background"
            }
          >
            {value}
          </p>
        </div>
        <RiArrowRightUpLine className="size-3.5 shrink-0 text-background/20 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
      </Link>
    </li>
  );
}