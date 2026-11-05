// components/layout/navbar.tsx
"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  RiMenuLine,
  RiCloseLine,
  RiMapPinLine,
  RiPhoneFill,
  RiWhatsappFill,
  RiArrowDownSLine,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiToolsFill,
  RiFlashlightFill,
  RiCustomerServiceFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiStarFill,
  RiBatteryChargeFill,
  RiMailFill,
  RiRadarFill,
  RiCompass3Line,
} from "@remixicon/react";

import { services } from "@/data/services/services";
import { cn } from "@/lib/utils";
import { SiteConfig } from "@/config/siteConfig";
import Logo from "../Logo/Logo";

/* ============ Service Categories for Mega Menu ============ */
const serviceCategories = [
  {
    name: "Emergency Services",
    description: "Fast roadside rescue",
    icon: RiFlashlightFill,
    range: [0, 4] as const,
  },
  {
    name: "Repair & Diagnostics",
    description: "Onsite professional fixes",
    icon: RiToolsFill,
    range: [4, 8] as const,
  },
  {
    name: "Maintenance & Care",
    description: "Keep your car running",
    icon: RiCustomerServiceFill,
    range: [8, 12] as const,
  },
];

/* ============ Nav Items ============ */
interface NavItem {
  name: string;
  href: string;
  hasDropdown?: boolean;
}

const navItems: NavItem[] = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services", hasDropdown: true },
  { name: "Service Area", href: "/service-areas" },
  { name: "About", href: "/about-us" },
  { name: "Contact", href: "/contact-us" },
];

/* ============ Client-only live clock (stable SSR) ============ */
function useLiveClock() {
  const [time, setTime] = useState<string>("--:--");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      setTime(
        d.toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: false,
        })
      );
    };
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const pathname = usePathname();
  const clock = useLiveClock();
  const megaTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  /* ============ Scroll detection ============ */
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ============ Close menus on route change ============ */
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsMobileServicesOpen(false);
  }, [pathname]);

  /* ============ Lock body scroll when mobile menu is open ============ */
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  /* ============ Escape closes overlays ============ */
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMegaMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  /* ============ Debounced hover intent for the mega panel ============ */
  const openMega = useCallback(() => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    setIsMegaMenuOpen(true);
  }, []);
  const closeMega = useCallback(() => {
    if (megaTimeout.current) clearTimeout(megaTimeout.current);
    megaTimeout.current = setTimeout(() => setIsMegaMenuOpen(false), 120);
  }, []);

  const isActive = useCallback(
    (href: string) =>
      pathname === href || (href !== "/" && pathname.startsWith(href)),
    [pathname]
  );

  return (
    <>
      {/* ==============================================================
          COMMAND RAIL (desktop-only) — live status strip
      ============================================================== */}
      <div className="hidden bg-foreground text-background lg:block">
        <div className="mx-auto flex h-9 max-w-[1400px] items-center justify-between px-12 text-[10.5px] font-semibold uppercase tracking-[0.16em]">
          {/* Left — live beacon + address + hours */}
          <div className="flex items-center gap-5">
            <span className="inline-flex items-center gap-1.5">
              <span className="relative flex size-1.5">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/70" />
                <span className="relative inline-flex size-1.5 rounded-full bg-primary" />
              </span>
              <span className="text-primary">Dispatch online</span>
            </span>

            <span className="h-3 w-px bg-background/20" />

            <span className="inline-flex items-center gap-1.5 text-background/60">
              <RiMapPinLine className="size-3 text-primary" />
              {SiteConfig.location} · {SiteConfig.city}
            </span>

            <span className="h-3 w-px bg-background/20" />

            <span className="inline-flex items-center gap-1.5 text-background/60">
              <RiTimeFill className="size-3 text-primary" />
              24/7 ·{" "}
              <span className="font-mono tabular-nums text-background/80">
                {clock}
              </span>{" "}
              GST
            </span>
          </div>

          {/* Right — email + rating */}
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${SiteConfig.email}`}
              className="inline-flex items-center gap-1.5 text-background/60 transition-colors hover:text-primary"
            >
              <RiMailFill className="size-3 text-primary" />
              {SiteConfig.email}
            </a>

            <span className="h-3 w-px bg-background/20" />

            <span className="inline-flex items-center gap-1.5 text-background/60">
              <span className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <RiStarFill key={i} className="size-2.5 text-primary" />
                ))}
              </span>
              <span className="text-background/80">5.0</span>
              <span className="text-background/50">· 500+ reviews</span>
            </span>
          </div>
        </div>
      </div>

      {/* ==============================================================
          COMMAND BAR — sticky header
      ============================================================== */}
      <header
        className={cn(
          "sticky top-0 z-50 bg-background/95 backdrop-blur-xl transition-[border-color,box-shadow] duration-300",
          isScrolled
            ? "border-b border-border shadow-[0_1px_0_0_color-mix(in_oklab,var(--color-primary)_15%,transparent)]"
            : "border-b border-transparent"
        )}
      >
        {/* Bottom hairline (fades out on scroll) */}
        <div
          className={cn(
            "pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent transition-opacity duration-300",
            isScrolled ? "opacity-0" : "opacity-100"
          )}
        />

        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-12">
          <div className="flex h-16 items-center justify-between gap-4 lg:h-[4.5rem]">
            {/* ============ Brand lockup ============ */}
            <div className="flex shrink-0 items-center">
              <Link href="/" aria-label={SiteConfig.brandName} className="block">
                <div className="mt-1 h-auto w-44 sm:w-52 lg:mt-0 lg:w-56">
                  <Logo />
                </div>
              </Link>
            </div>

            {/* ============ Desktop nav (indexed tabs) ============ */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
              {navItems.map((item, idx) => {
                const active = isActive(item.href);
                return (
                  <div
                    key={item.name}
                    className="relative"
                    onMouseEnter={() => item.hasDropdown && openMega()}
                    onMouseLeave={() => item.hasDropdown && closeMega()}
                  >
                    <Link
                      href={item.href}
                      aria-haspopup={item.hasDropdown || undefined}
                      aria-expanded={
                        item.hasDropdown ? isMegaMenuOpen : undefined
                      }
                      className={cn(
                        "group flex items-center gap-1.5 rounded-lg px-3 py-2 text-[13px] font-semibold transition-colors",
                        active
                          ? "text-primary"
                          : "text-foreground/70 hover:text-foreground"
                      )}
                    >
                      <span
                        className={cn(
                          "font-mono text-[9.5px] tabular-nums transition-colors",
                          active
                            ? "text-primary/70"
                            : "text-muted-foreground/60 group-hover:text-primary/60"
                        )}
                      >
                      </span>
                      <span>{item.name}</span>
                      {item.hasDropdown && (
                        <RiArrowDownSLine
                          className={cn(
                            "size-3.5 transition-transform duration-200",
                            isMegaMenuOpen && "rotate-180"
                          )}
                        />
                      )}
                    </Link>

                    {/* Active bar */}
                    {active && (
                      <span className="absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full bg-primary" />
                    )}

                    {/* ============ MEGA PANEL ============ */}
                    {item.hasDropdown && (
                      <div
                        className={cn(
                          "absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200",
                          isMegaMenuOpen
                            ? "pointer-events-auto translate-y-0 opacity-100"
                            : "pointer-events-none -translate-y-1 opacity-0"
                        )}
                        role="region"
                        aria-label="Services menu"
                      >
                        <div className="relative w-[min(94vw,980px)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-black/[0.08] dark:shadow-black/30">
                          {/* Top accent */}
                          <div className="h-[3px] w-full bg-gradient-to-r from-primary/30 via-primary to-primary/30" />

                          {/* Body — 3 categories + featured spotlight */}
                          <div className="grid grid-cols-12 gap-0">
                            {serviceCategories.map((cat, i) => {
                              const Icon = cat.icon;
                              const [start, end] = cat.range;
                              const catServices = services.slice(start, end);

                              return (
                                <div
                                  key={cat.name}
                                  className={cn(
                                    "col-span-3 p-6",
                                    i > 0 && "border-l border-border"
                                  )}
                                >
                                  {/* Category head */}
                                  <div className="mb-4 flex items-start gap-2.5">
                                    <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                                      <Icon className="size-4 text-primary" />
                                    </span>
                                    <div>
                                      <h4 className="text-[11.5px] font-bold uppercase tracking-[0.14em] text-foreground">
                                        {cat.name}
                                      </h4>
                                      <p className="mt-0.5 text-[10.5px] text-muted-foreground">
                                        {cat.description}
                                      </p>
                                    </div>
                                  </div>

                                  {/* Services */}
                                  <ul className="space-y-0.5">
                                    {catServices.map((service:any) => (
                                      <li key={service.slug}>
                                        <Link
                                          href={`/services/${service.slug}`}
                                          className="group flex items-center gap-2 rounded-md px-2 py-1.5 text-[12px] text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                                        >
                                          <RiArrowRightUpLine className="size-3 shrink-0 text-primary/50 transition-colors group-hover:text-primary" />
                                          <span className="truncate">
                                            {service.name}
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              );
                            })}

                            {/* Featured spotlight */}
                            <div className="col-span-3 border-l border-border bg-gradient-to-b from-primary/[0.06] to-transparent p-6">
                              <span className="inline-flex items-center gap-1 rounded-full border border-primary/30 bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.16em] text-primary">
                                <RiFlashlightFill className="size-2.5" />
                                Fast track
                              </span>
                              <h4 className="mt-3 font-serif text-lg font-bold leading-tight -tracking-tight text-foreground">
                                Battery or breakdown? Start here.
                              </h4>
                              <p className="mt-1.5 text-[11.5px] leading-relaxed text-muted-foreground">
                                One tap to book a certified mechanic at your
                                location in {SiteConfig.responseTime}.
                              </p>
                              <Link
                                href={SiteConfig.numberCallLink}
                                className="group mt-4 flex items-center gap-2.5 rounded-xl border border-primary/25 bg-background px-3 py-2 text-[12px] font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                              >
                                <span className="flex size-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                                  <RiPhoneFill className="size-3" />
                                </span>
                                <span className="min-w-0 flex-1 truncate">
                                  {SiteConfig.displayNumber}
                                </span>
                                <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                              </Link>

                              <Link
                                href="/services"
                                className="mt-3 inline-flex items-center gap-1 text-[10.5px] font-bold uppercase tracking-wider text-primary hover:text-primary/80"
                              >
                                Browse all services
                                <RiArrowRightUpLine className="size-3" />
                              </Link>
                            </div>
                          </div>

                          {/* Footer strip */}
                          <div className="flex items-center justify-between gap-4 border-t border-border bg-muted/40 px-6 py-3">
                            <div className="flex items-center gap-5 text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                              <span className="inline-flex items-center gap-1.5">
                                <RiTimeFill className="size-3 text-primary" />
                                24/7 dispatch
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <RiShieldCheckFill className="size-3 text-primary" />
                                Workmanship warranty
                              </span>
                              <span className="inline-flex items-center gap-1.5">
                                <RiBatteryChargeFill className="size-3 text-primary" />
                                Genuine OEM parts
                              </span>
                            </div>
                            <Link
                              href="/services"
                              className="group inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-primary"
                            >
                              All services
                              <RiArrowRightLine className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* ============ Action cluster ============ */}
            <div className="flex items-center gap-2">
              {/* Call pill */}
              <Link
                href={SiteConfig.numberCallLink}
                aria-label={`Call ${SiteConfig.displayNumber}`}
                className="group hidden items-center gap-2.5 rounded-xl border border-primary/25 bg-primary/[0.06] px-3 py-1.5 transition-colors hover:border-primary/60 hover:bg-primary/10 sm:inline-flex"
              >
                <span className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                  <RiPhoneFill className="size-3.5" />
                </span>
                <span className="hidden flex-col leading-none lg:flex">
                  <span className="text-[9px] font-bold uppercase tracking-[0.14em] text-primary">
                    Call 24/7
                  </span>
                  <span className="mt-0.5 text-[11.5px] font-bold text-foreground">
                    {SiteConfig.displayNumber}
                  </span>
                </span>
              </Link>

              {/* WhatsApp */}
              <Link
                href={SiteConfig.whatsappCallLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Chat on WhatsApp"
                className="hidden size-10 items-center justify-center rounded-xl border border-border bg-background text-muted-foreground transition-colors hover:border-primary/40 hover:bg-primary/5 hover:text-primary sm:inline-flex"
              >
                <RiWhatsappFill className="size-4" />
              </Link>

              {/* Divider */}
              <div className="mx-1 hidden h-6 w-px bg-border sm:block" />

              {/* Menu pill (mobile/tablet) */}
              <button
                type="button"
                onClick={() => setIsMobileMenuOpen((v) => !v)}
                aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-dispatch-menu"
                className="inline-flex h-10 items-center gap-2 rounded-xl border border-border bg-background px-3 text-foreground transition-colors hover:border-primary/40 hover:text-primary lg:hidden"
              >
                {isMobileMenuOpen ? (
                  <RiCloseLine className="size-4" />
                ) : (
                  <RiMenuLine className="size-4" />
                )}
                <span className="hidden text-[10.5px] font-bold uppercase tracking-[0.14em] sm:inline">
                  {isMobileMenuOpen ? "Close" : "Menu"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ==============================================================
          MOBILE DISPATCH MENU
      ============================================================== */}
      <div
        id="mobile-dispatch-menu"
        className={cn(
          "fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto bg-background transition-opacity duration-200 lg:hidden",
          isMobileMenuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        )}
      >
        {/* Backdrop ruling (matching site tone) */}
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div
            className="absolute inset-0 opacity-[0.35] dark:opacity-[0.18]"
            style={{
              backgroundImage:
                "linear-gradient(to bottom, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
              backgroundSize: "100% 64px",
              maskImage:
                "radial-gradient(ellipse 120% 90% at 50% 0%, black 30%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(ellipse 120% 90% at 50% 0%, black 30%, transparent 90%)",
            }}
          />
          <div className="absolute -top-24 left-1/2 h-[420px] w-[520px] -translate-x-1/2 rounded-full bg-primary/[0.05] blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-[1400px] px-5 py-6 sm:px-8">
          {/* Nav list */}
          <nav aria-label="Mobile" className="space-y-1">
            {navItems.map((item, idx) => {
              const active = isActive(item.href);
              const index = String(idx + 1).padStart(2, "0");

              if (item.hasDropdown) {
                return (
                  <div key={item.name}>
                    <button
                      type="button"
                      onClick={() => setIsMobileServicesOpen((v) => !v)}
                      aria-expanded={isMobileServicesOpen}
                      aria-controls="mobile-services-panel"
                      className={cn(
                        "flex w-full items-center justify-between gap-3 rounded-xl border px-4 py-3.5 text-left transition-colors",
                        isMobileServicesOpen
                          ? "border-primary/40 bg-primary/5"
                          : "border-border bg-card"
                      )}
                    >
                      <span className="flex items-center gap-3">
                        <span className="font-mono text-[10px] font-bold tabular-nums text-primary/60">
                        </span>
                        <span
                          className={cn(
                            "text-sm font-semibold",
                            isMobileServicesOpen
                              ? "text-primary"
                              : "text-foreground"
                          )}
                        >
                          {item.name}
                        </span>
                      </span>
                      <RiArrowDownSLine
                        className={cn(
                          "size-4 text-primary transition-transform duration-200",
                          isMobileServicesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <div
                      id="mobile-services-panel"
                      className={cn(
                        "grid overflow-hidden transition-[grid-template-rows,opacity] duration-200",
                        isMobileServicesOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      )}
                    >
                      <div className="min-h-0">
                        <div className="mt-2 space-y-3 rounded-xl border border-border bg-muted/40 p-3">
                          {serviceCategories.map((cat) => {
                            const Icon = cat.icon;
                            const [start, end] = cat.range;
                            const catServices = services.slice(start, end);

                            return (
                              <div key={cat.name}>
                                <div className="mb-2 flex items-center gap-2 px-2 pt-1">
                                  <Icon className="size-3 text-primary" />
                                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
                                    {cat.name}
                                  </span>
                                </div>
                                <ul className="space-y-0.5">
                                  {catServices.map((service:any) => (
                                    <li key={service.slug}>
                                      <Link
                                        href={`/services/${service.slug}`}
                                        onClick={() =>
                                          setIsMobileMenuOpen(false)
                                        }
                                        className="flex items-center gap-2 rounded-lg px-2.5 py-2 text-[12.5px] text-muted-foreground transition-colors hover:bg-primary/5 hover:text-foreground"
                                      >
                                        <RiArrowRightUpLine className="size-3 shrink-0 text-primary/60" />
                                        <span className="truncate">
                                          {service.name}
                                        </span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            );
                          })}

                          <Link
                            href="/services"
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="mt-1 flex items-center justify-between rounded-lg border border-primary/30 bg-primary/5 px-3 py-2.5 text-[11.5px] font-bold uppercase tracking-wider text-primary"
                          >
                            View all services
                            <RiArrowRightLine className="size-3.5" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-colors",
                    active
                      ? "border-primary/40 bg-primary/5 text-primary"
                      : "border-border bg-card text-foreground hover:border-primary/30 hover:text-primary"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "font-mono text-[10px] font-bold tabular-nums",
                        active ? "text-primary/80" : "text-muted-foreground/70"
                      )}
                    >
                      {/* {index} */}
                    </span>
                    {item.name}
                  </span>
                  <RiArrowRightUpLine
                    className={cn(
                      "size-4",
                      active ? "text-primary" : "text-muted-foreground"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Trust chips */}
          <div className="my-6 flex flex-wrap gap-2">
            <MiniChip
              icon={<RiTimeFill className="size-3" />}
              label="24/7 available"
            />
            <MiniChip
              icon={<RiShieldCheckFill className="size-3" />}
              label="Guaranteed"
            />
            <MiniChip
              icon={<RiStarFill className="size-3" />}
              label="5.0 rated"
            />
            <MiniChip
              icon={<RiBatteryChargeFill className="size-3" />}
              label="Genuine parts"
            />
          </div>

          {/* Location + status footer */}
          <div className="mb-4 flex items-center justify-between gap-3 border-t border-border pt-4 text-[11px]">
            <span className="inline-flex items-center gap-1.5 text-muted-foreground">
              <RiMapPinLine className="size-3.5 text-primary" />
              {SiteConfig.location} · {SiteConfig.city}
            </span>
            <span className="inline-flex items-center gap-1.5 text-primary">
              <RiRadarFill className="size-3" />
              <span className="font-mono tabular-nums">{clock}</span> GST
            </span>
          </div>

          {/* Dual CTA */}
          <div className="grid grid-cols-2 gap-3">
            <Link
              href={SiteConfig.numberCallLink}
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-primary/30 bg-primary/5 text-sm font-bold text-primary transition-colors hover:bg-primary/10"
            >
              <RiPhoneFill className="size-4" />
              Call now
            </Link>
            <Link
              href={SiteConfig.whatsappCallLink}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              <RiWhatsappFill className="size-4" />
              WhatsApp
            </Link>
          </div>

          <p className="mt-6 text-center text-[10.5px] font-bold uppercase tracking-[0.16em] text-muted-foreground">
            {SiteConfig.brandName}
          </p>
        </div>
      </div>
    </>
  );
}

/* ============ Sub-component ============ */
function MiniChip({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-muted-foreground">
      <span className="text-primary">{icon}</span>
      {label}
    </span>
  );
}