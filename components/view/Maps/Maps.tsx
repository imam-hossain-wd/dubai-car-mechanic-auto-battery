"use client";

import { useId, useState } from "react";
import Link from "next/link";
import {
  RiMapPinFill,
  RiNavigationFill,
  RiTimeFill,
  RiShieldCheckFill,
  RiRoadMapFill,
  RiUserFill,
  RiMailFill,
  RiPhoneFill,
  RiMessageFill,
  RiArrowRightLine,
  RiArrowRightUpLine,
  RiCheckboxCircleFill,
  RiFlashlightFill,
  RiSendPlaneFill,
  RiWhatsappFill,
  RiLoader4Line,
  RiBatteryChargeFill,
  RiComputerLine,
  RiKey2Fill,
  RiFlashlightLine,
  RiSnowflakeFill,
  RiAlertFill,
  RiCompass3Line,
  RiArrowDownSLine,
  RiRadarFill,
  RiCloseLine,
  RiBracketsFill,
} from "@remixicon/react";

import { cn } from "@/lib/utils";
import { SiteConfig, streetAddress } from "@/config/siteConfig";

/* ------------------------------------------------------------------ */
/*  Quick-select service chips — fast path into the form              */
/* ------------------------------------------------------------------ */
const QUICK_SERVICES = [
  { value: "Battery Replacement", icon: RiBatteryChargeFill, label: "Battery" },
  { value: "Jump Start", icon: RiFlashlightLine, label: "Jump start" },
  { value: "Computer Diagnostic", icon: RiComputerLine, label: "Diagnostic" },
  { value: "AC Repair", icon: RiSnowflakeFill, label: "AC repair" },
  { value: "Brake Pad Repair", icon: RiBracketsFill, label: "Brakes" },
  { value: "Other Emergency", icon: RiAlertFill, label: "Emergency" },
] as const;

const SERVICE_OPTIONS = [
  "Battery Replacement",
  "Jump Start",
  "Computer Diagnostic",
  "Alternator Repair",
  "Fuel Pump Repair",
  "Starter Motor Repair",
  "AC Repair",
  "Brake Pad Repair",
  "Other Emergency",
] as const;

export function Maps() {
  const {
    GMB,
    serviceAreas,
    brandName,
    city,
    responseTime,
    location,
    displayNumber,
    numberCallLink,
    whatsappCallLink,
  } = SiteConfig;

  const formId = useId();
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const selectService = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setIsSubmitting(false);
    setTicketId(
      `DCM-${new Date().getFullYear().toString().slice(-2)}${String(
        Math.floor(Math.random() * 9000) + 1000
      )}`
    );
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setTicketId("");
    setFormData({ name: "", phone: "", email: "", service: "", message: "" });
  };

  return (
    <section
      aria-labelledby="map-title"
      className="relative overflow-hidden border-t border-border bg-background"
    >
      {/* ==============================================================
          BACKDROP — blueprint grid + route lines + corner glow
      ============================================================== */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.32] dark:opacity-[0.16]"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--border) 55%, transparent) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 120% 90% at 50% 0%, black 30%, transparent 85%)",
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
        <div className="absolute -top-24 right-0 h-[460px] w-[460px] rounded-full bg-primary/[0.07] blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 h-[360px] w-[360px] rounded-full bg-primary/[0.05] blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
        {/* ============================================================
            HEADER — editorial + live KPI rail
        ============================================================ */}
        <div className="grid grid-cols-1 items-end gap-6 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3">
              <span className="h-px w-8 bg-primary" />
              <span className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary">
                Dispatch terminal · {city}
              </span>
            </div>

            <h2
              id="map-title"
              className="mt-5 font-serif text-[clamp(2.1rem,5vw,3.6rem)] font-bold leading-[1.02] -tracking-[0.028em] text-foreground"
            >
              Book a mechanic —
              <br className="hidden sm:block" />{" "}
              track us{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic text-primary">
                  live
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
              .
            </h2>

            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-muted-foreground">
              Mobile mechanics positioned across every major Dubai district
              with a guaranteed{" "}
              <span className="font-semibold text-foreground">
                {responseTime} response
              </span>
              , 24/7.
            </p>
          </div>

          {/* KPI rail */}
          <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl border border-border bg-card/70 backdrop-blur lg:col-span-5">
            <KPI
              icon={<RiTimeFill className="size-3.5" />}
              value={responseTime}
              label="Response"
            />
            <KPI
              icon={<RiMapPinFill className="size-3.5" />}
              value={`${serviceAreas.length}+`}
              label="Areas"
            />
            <KPI
              icon={<RiShieldCheckFill className="size-3.5" />}
              value="24/7"
              label="Coverage"
            />
          </div>
        </div>

        {/* ============================================================
            TERMINAL — unified frame around map + form
        ============================================================ */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-xl shadow-foreground/[0.05] sm:mt-12">
          {/* ---- Terminal header rail ---- */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border bg-muted/40 px-5 py-3.5 sm:px-6">
            <div className="flex items-center gap-2.5">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              <span className="text-[10.5px] font-bold uppercase tracking-[0.2em] text-foreground">
                Live dispatch
              </span>
              <span className="hidden h-3 w-px bg-border sm:block" />
              <span className="hidden items-center gap-1.5 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:inline-flex">
                <RiRadarFill className="size-3 text-primary" />
                {location} · {city}
              </span>
            </div>

            <div className="flex items-center gap-4 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              <span className="hidden items-center gap-1.5 sm:inline-flex">
                <RiCompass3Line className="size-3 text-primary" />
                <span className="font-mono">
                  {GMB.latitude.slice(0, 7)}, {GMB.longitude.slice(0, 7)}
                </span>
              </span>
              <span className="hidden size-1 rounded-full bg-border sm:inline-block" />
              <span className="inline-flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Systems online
              </span>
            </div>
          </div>

          {/* ---- Split panel: map (7) + form (5) ---- */}
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* ==================================================
                LEFT — Map panel (7/12)
            ================================================== */}
            <div className="relative lg:col-span-7 lg:border-r lg:border-border">
              {/* Map viewport */}
              <div className="relative aspect-[4/3] w-full bg-muted sm:aspect-[16/11] lg:aspect-[4/3]">
                {/* Loading */}
                {!isMapLoaded && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 bg-muted">
                    <RiRoadMapFill className="size-8 animate-pulse text-primary/60" />
                    <span className="text-[11px] font-medium text-muted-foreground">
                      Connecting to dispatch grid…
                    </span>
                  </div>
                )}

                <iframe
                  title={`${brandName} Location Map`}
                  src={GMB.embedMap}
                  width="100%"
                  height="100%"
                  className={cn(
                    "size-full transition-opacity duration-700",
                    isMapLoaded ? "opacity-100" : "opacity-0"
                  )}
                  style={{
                    border: 0,
                    filter: "grayscale(0.15) contrast(1.05)",
                  }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  onLoad={() => setIsMapLoaded(true)}
                />

                {/* Corner crop marks (over map) */}
                <div className="pointer-events-none absolute left-4 top-4 z-20 size-8">
                  <span className="absolute left-0 top-0 h-px w-6 bg-primary/90" />
                  <span className="absolute left-0 top-0 h-6 w-px bg-primary/90" />
                </div>
                <div className="pointer-events-none absolute bottom-4 right-4 z-20 size-8">
                  <span className="absolute bottom-0 right-0 h-px w-6 bg-primary/90" />
                  <span className="absolute bottom-0 right-0 h-6 w-px bg-primary/90" />
                </div>

                {/* Floating "base pin" card — overlaps into the form on desktop */}
                <div className="pointer-events-none absolute -bottom-6 left-4 z-30 hidden max-w-xs lg:block">
                  <div className="rounded-2xl border border-border bg-card/95 p-3.5 shadow-xl backdrop-blur-md">
                    <div className="flex items-start gap-3">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-md shadow-primary/30">
                        <RiMapPinFill className="size-4" />
                      </span>
                      <div className="min-w-0">
                        <p className="text-[9.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                          Dispatch base
                        </p>
                        <p className="mt-0.5 text-[12.5px] font-bold text-foreground">
                          {streetAddress}
                        </p>
                        <p className="text-[10.5px] text-muted-foreground">
                          {location} · {city}
                        </p>
                      </div>
                    </div>
                    <div className="mt-3 flex items-center gap-3 border-t border-border pt-2.5">
                      <Link
                        href={GMB.mapsLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="pointer-events-auto inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-primary hover:text-primary/80"
                      >
                        Directions
                        <RiArrowRightUpLine className="size-3" />
                      </Link>
                      <span className="size-1 rounded-full bg-border" />
                      <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                        <RiTimeFill className="size-3 text-primary" />
                        {responseTime}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map footer strip */}
              <div className="border-t border-border bg-muted/30 px-5 py-3.5 sm:px-6">
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <RiMapPinFill className="size-3 text-primary" />
                    GPS verified
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <RiNavigationFill className="size-3 text-primary" />
                    Live tracking
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <RiShieldCheckFill className="size-3 text-primary" />
                    Authorized workshop
                  </span>
                </div>
              </div>
            </div>

            {/* ==================================================
                RIGHT — Booking form (5/12)
            ================================================== */}
            <div className="relative lg:col-span-5">
              <div className="p-5 sm:p-6 lg:p-7">
                {isSubmitted ? (
                  <TicketReceipt
                    ticketId={ticketId}
                    responseTime={responseTime}
                    onReset={resetForm}
                  />
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    aria-labelledby={`${formId}-title`}
                  >
                    {/* Form header */}
                    <div>
                      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                        <RiFlashlightFill className="size-3" />
                        Book a mechanic
                      </div>
                      <h3
                        id={`${formId}-title`}
                        className="mt-2 font-serif text-xl font-bold leading-tight -tracking-tight text-foreground sm:text-2xl"
                      >
                        Fast response in {responseTime}.
                      </h3>
                      <p className="mt-1.5 text-[12.5px] leading-relaxed text-muted-foreground">
                        Fill in the essentials. Our dispatch team confirms in
                        under 1 minute.
                      </p>
                    </div>

                    {/* Step 01 — quick service selector */}
                    <div>
                      <StepLabel n="01" title="What do you need?" />
                      <div className="mt-2.5 flex flex-wrap gap-1.5">
                        {QUICK_SERVICES.map((s) => {
                          const Icon = s?.icon;
                          const active = formData.service === s.value;
                          return (
                            <button
                              key={s.value}
                              type="button"
                              onClick={() => selectService(s.value)}
                              aria-pressed={active}
                              className={cn(
                                "inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5 text-[11px] font-bold transition-colors",
                                active
                                  ? "border-primary bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                                  : "border-border bg-background text-foreground hover:border-primary/50 hover:text-primary"
                              )}
                            >
                              <Icon className="size-3" />
                              {s?.label}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Step 02 — contact */}
                    <div>
                      <StepLabel n="02" title="How can we reach you?" />
                      <div className="mt-2.5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                        <Field icon={RiUserFill} label="Full name" id={`${formId}-name`}>
                          <input
                            id={`${formId}-name`}
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="Ahmed Al Maktoum"
                            autoComplete="name"
                            className="h-10 w-full border-0 bg-transparent text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                          />
                        </Field>
                        <Field icon={RiPhoneFill} label="Phone" id={`${formId}-phone`}>
                          <input
                            id={`${formId}-phone`}
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+971 50 000 0000"
                            autoComplete="tel"
                            className="h-10 w-full border-0 bg-transparent text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                          />
                        </Field>
                        <div className="sm:col-span-2">
                          <Field icon={RiMailFill} label="Email (optional)" id={`${formId}-email`}>
                            <input
                              id={`${formId}-email`}
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="you@example.com"
                              autoComplete="email"
                              className="h-10 w-full border-0 bg-transparent text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                            />
                          </Field>
                        </div>
                      </div>
                    </div>

                    {/* Step 03 — full service + message */}
                    <div>
                      <StepLabel n="03" title="Details" />
                      <div className="mt-2.5 space-y-2.5">
                        <Field
                          icon={RiKey2Fill}
                          label="Service (if not selected above)"
                          id={`${formId}-service`}
                        >
                          <div className="relative">
                            <select
                              id={`${formId}-service`}
                              name="service"
                              value={formData.service}
                              onChange={handleChange}
                              required
                              className="h-10 w-full cursor-pointer appearance-none border-0 bg-transparent pr-6 text-[13.5px] font-medium text-foreground outline-none"
                            >
                              <option value="">Select a service</option>
                              {SERVICE_OPTIONS.map((s) => (
                                <option key={s} value={s}>
                                  {s}
                                </option>
                              ))}
                            </select>
                            <RiArrowDownSLine className="pointer-events-none absolute right-0 top-1/2 size-3.5 -translate-y-1/2 text-muted-foreground" />
                          </div>
                        </Field>

                        <Field icon={RiMessageFill} label="Message" id={`${formId}-message`}>
                          <textarea
                            id={`${formId}-message`}
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={2}
                            placeholder="Describe the issue or your exact location…"
                            className="w-full resize-none border-0 bg-transparent pt-2.5 text-[13.5px] font-medium text-foreground outline-none placeholder:text-muted-foreground/60"
                          />
                        </Field>
                      </div>
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group inline-flex h-12 w-full items-center justify-center gap-2.5 rounded-xl bg-primary text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-200 hover:bg-primary/90 hover:shadow-primary/40 disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <RiLoader4Line className="size-4 animate-spin" />
                          Dispatching…
                        </>
                      ) : (
                        <>
                          <RiSendPlaneFill className="size-4" />
                          Request mechanic
                          <RiArrowRightLine className="size-4 transition-transform group-hover:translate-x-0.5" />
                        </>
                      )}
                    </button>

                    {/* Quick contact row */}
                    <div className="grid grid-cols-2 gap-2.5">
                      <Link
                        href={numberCallLink}
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background text-[11.5px] font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <RiPhoneFill className="size-3.5" />
                        Call now
                      </Link>
                      <Link
                        href={whatsappCallLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg border border-border bg-background text-[11.5px] font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
                      >
                        <RiWhatsappFill className="size-3.5" />
                        WhatsApp
                      </Link>
                    </div>

                    <p className="text-center text-[10.5px] leading-relaxed text-muted-foreground">
                      Or call{" "}
                      <span className="font-bold text-foreground">
                        {displayNumber}
                      </span>{" "}
                      · 24/7 emergency line
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
    SUB-COMPONENTS
============================================================ */

function KPI({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="px-4 py-4 sm:px-5">
      <p className="inline-flex items-center gap-1.5 text-[9.5px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-primary">{icon}</span>
        {label}
      </p>
      <p className="mt-1 truncate text-base font-bold leading-none text-foreground sm:text-lg">
        {value}
      </p>
    </div>
  );
}

function StepLabel({ n, title }: { n: string; title: string }) {
  return (
    <div className="flex items-center gap-2">
      <span className="font-mono text-[10.5px] font-bold tabular-nums text-primary">
        {n}
      </span>
      <span className="h-px w-4 bg-border" />
      <span className="text-[10.5px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
        {title}
      </span>
    </div>
  );
}

function Field({
  icon: Icon,
  label,
  id,
  children,
}: {
  icon: React.ElementType;
  label: string;
  id: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-lg border border-border bg-background transition-colors focus-within:border-primary/60 focus-within:bg-primary/[0.02]">
      <label
        htmlFor={id}
        className="absolute left-10 top-1.5 text-[9px] font-bold uppercase tracking-[0.14em] text-muted-foreground/70 transition-colors group-focus-within:text-primary"
      >
        {label}
      </label>
      <div className="flex items-start">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center pt-3.5">
          <Icon className="size-3.5 text-muted-foreground transition-colors group-focus-within:text-primary" />
        </div>
        <div className="min-w-0 flex-1 pt-4">{children}</div>
      </div>
    </div>
  );
}

function TicketReceipt({
  ticketId,
  responseTime,
  onReset,
}: {
  ticketId: string;
  responseTime: string;
  onReset: () => void;
}) {
  return (
    <div className="relative">
      {/* Ticket body */}
      <div className="overflow-hidden rounded-2xl border border-border bg-card">
        {/* Header */}
        <div className="border-b border-dashed border-border p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                <RiCheckboxCircleFill className="size-3" />
                Ticket confirmed
              </p>
              <p className="mt-2 font-mono text-xl font-bold tracking-tight text-foreground">
                {ticketId}
              </p>
              <p className="mt-1 text-[11px] text-muted-foreground">
                Reference · keep for follow-up
              </p>
            </div>
            <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
              <RiSendPlaneFill className="size-5 text-primary" />
            </div>
          </div>
        </div>

        {/* Timeline */}
        <ol className="divide-y divide-border">
          <ReceiptStep
            n="01"
            title="Dispatch received"
            detail="Our team has your request."
            status="done"
          />
          <ReceiptStep
            n="02"
            title="Mechanic assigned"
            detail={`Target arrival: ${responseTime}.`}
            status="active"
          />
          <ReceiptStep
            n="03"
            title="On-site repair"
            detail="You'll be called before arrival."
            status="pending"
          />
        </ol>

        {/* Footer */}
        <div className="border-t border-dashed border-border p-5">
          <p className="text-[11.5px] leading-relaxed text-muted-foreground">
            A dispatch coordinator will contact you within 1 minute to confirm
            vehicle details and pricing.
          </p>
          <button
            type="button"
            onClick={onReset}
            className="mt-4 inline-flex h-10 w-full items-center justify-center gap-2 rounded-lg border border-border bg-background text-[11.5px] font-bold text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            <RiCloseLine className="size-3.5" />
            Close ticket
          </button>
        </div>
      </div>
    </div>
  );
}

function ReceiptStep({
  n,
  title,
  detail,
  status,
}: {
  n: string;
  title: string;
  detail: string;
  status: "done" | "active" | "pending";
}) {
  return (
    <li className="flex items-start gap-3 px-5 py-3.5">
      <span
        className={cn(
          "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full text-[9.5px] font-bold tabular-nums",
          status === "done" && "bg-primary text-primary-foreground",
          status === "active" &&
            "bg-primary/15 text-primary ring-2 ring-primary/30",
          status === "pending" && "bg-muted text-muted-foreground"
        )}
      >
        {status === "done" ? (
          <RiCheckboxCircleFill className="size-3.5" />
        ) : (
          n
        )}
      </span>
      <div className="min-w-0">
        <p
          className={cn(
            "text-[12.5px] font-bold leading-tight",
            status === "pending" ? "text-muted-foreground" : "text-foreground"
          )}
        >
          {title}
        </p>
        <p className="mt-0.5 text-[11px] leading-relaxed text-muted-foreground">
          {detail}
        </p>
      </div>
    </li>
  );
}