import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Home,
  MapPin,
  PoundSterling,
  CheckCircle2,
  Database,
  Users,
  CalendarDays,
  Clock,
  Megaphone,
  LayoutTemplate,
  ClipboardList,
  Sparkles,
  Bell,
  Repeat,
  Mail,
  Phone,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RE_PROBLEMS, RE_JOURNEY, RE_PIPELINE, RE_PROPERTY_FEATURES } from "./realestate-data";

/* Hero dashboard mock */
export function ReDashboardMock() {
  const stats = [
    { icon: Users, label: "New Leads", value: "12" },
    { icon: CheckCircle2, label: "Qualified", value: "8" },
    { icon: CalendarDays, label: "Viewings Today", value: "5" },
    { icon: Clock, label: "Pending Follow-Ups", value: "9" },
  ];
  return (
    <div className="glass-strong rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Home className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">crm.realestate.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="rounded-xl border border-border bg-background/40 p-3"
          >
            <s.icon className="h-4 w-4 text-glow-gold" />
            <p className="mt-2 font-display text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
      <div className="mt-4">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Pipeline
        </p>
        <div className="flex flex-wrap gap-1.5">
          {RE_PIPELINE.slice(0, 5).map((stage, i) => (
            <span
              key={stage}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                i === 2
                  ? "border-glow-gold/50 bg-glow-gold/10 text-glow-gold"
                  : "border-border bg-background/40 text-muted-foreground",
              )}
            >
              {stage}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Problem cards */
export function ReProblems() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {RE_PROBLEMS.map((p, i) => (
        <motion.div
          key={p.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.08 }}
          className="group glass rounded-2xl p-5 transition-all hover:border-glow-gold/30 hover:bg-secondary/30"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-gold/10 text-glow-gold transition-transform group-hover:scale-110">
            <p.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-base font-bold text-foreground">{p.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* Interactive journey */
export function ReJourneySection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = RE_JOURNEY[active];
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="flex flex-col gap-2">
        {RE_JOURNEY.map((s, i) => {
          const lit = i === active;
          return (
            <button
              key={s.label}
              onClick={() => setActive(i)}
              className={cn(
                "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all",
                lit
                  ? "border-glow-gold/50 bg-glow-gold/10"
                  : "border-border bg-background/40 hover:bg-secondary/50",
              )}
            >
              <span
                className={cn(
                  "flex h-9 w-9 items-center justify-center rounded-lg transition-colors",
                  lit ? "bg-glow-gold/20 text-glow-gold" : "bg-background/60 text-muted-foreground",
                )}
              >
                <s.icon className="h-4 w-4" />
              </span>
              <div className="flex-1">
                <p
                  className={cn(
                    "text-sm font-semibold",
                    lit ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {String(i + 1).padStart(2, "0")} — {s.label}
                </p>
              </div>
              <ArrowRight
                className={cn(
                  "h-4 w-4 transition-all",
                  lit ? "text-glow-gold" : "text-muted-foreground/40",
                )}
              />
            </button>
          );
        })}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? undefined : { opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="glass-strong rounded-2xl p-6"
        >
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
              <step.icon className="h-6 w-6" />
            </span>
            <div>
              <p className="font-mono text-xs text-muted-foreground">
                Stage {String(active + 1).padStart(2, "0")} /{" "}
                {String(RE_JOURNEY.length).padStart(2, "0")}
              </p>
              <h3 className="font-display text-lg font-bold text-foreground">{step.label}</h3>
            </div>
          </div>
          <div className="mt-5 space-y-3">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
                What happens
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{step.what}</p>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
                Why it matters
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{step.why}</p>
            </div>
            <div className="rounded-xl border border-border bg-background/50 p-3">
              <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Example action
              </p>
              <p className="mt-1 font-mono text-xs text-foreground/90">{step.action}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* Property landing page + enquiry form */
export function ReLandingAndForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Property card */}
      <div className="glass-strong overflow-hidden rounded-2xl">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-glow-gold/15 via-glow-purple/5 to-transparent">
          <img
            src="https://vibe.filesafe.space/1790832248517648215/assets/97a01009-48e4-4862-a5eb-0b1971275587.png"
            alt="Modern 3-bedroom family home in Manchester — fictional property listing"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold backdrop-blur-sm">
            Featured Listing
          </span>
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold text-glow-gold backdrop-blur-sm">
            <Home className="h-3 w-3" /> Manchester
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-bold text-foreground">
            Modern 3-Bedroom Family Home
          </h3>
          <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-3 w-3" /> Manchester
            </span>
            <span className="flex items-center gap-1">
              <PoundSterling className="h-3 w-3" /> 450,000
            </span>
          </div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            {RE_PROPERTY_FEATURES.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-1 rounded-lg border border-border bg-background/40 py-2.5"
              >
                <f.icon className="h-4 w-4 text-glow-gold" />
                <span className="text-[10px] text-muted-foreground">{f.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              onClick={() => setSubmitted(true)}
              className="group flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-105"
            >
              Request Information
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => setSubmitted(true)}
              className="rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Book a Viewing
            </button>
          </div>
        </div>
      </div>

      {/* Enquiry form */}
      <div className="glass-strong rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">enquiry_form.demo</span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Interactive Demo
          </span>
        </div>
        <h3 className="mt-4 font-display text-base font-bold text-foreground">Property Enquiry</h3>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {[
            { l: "First Name", v: "Daniel" },
            { l: "Last Name", v: "Carter" },
            { l: "Email", v: "daniel@example.com" },
            { l: "Phone", v: "+1 555 010 9876" },
            { l: "Buying or Renting", v: "Buying" },
            { l: "Preferred Location", v: "Manchester" },
            { l: "Property Type", v: "3-Bedroom Home" },
            { l: "Budget", v: "£450,000" },
            { l: "Preferred Viewing Date", v: "Wednesday" },
          ].map((f) => (
            <div key={f.l} className="col-span-2 sm:col-span-1">
              <p className="mb-1 text-[10px] uppercase tracking-wider text-muted-foreground">
                {f.l}
              </p>
              <div className="rounded-md border border-border bg-background/40 px-3 py-2 text-xs font-medium text-foreground">
                {f.v}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setSubmitted(true)}
          className="group mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-105"
        >
          Submit Enquiry
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4"
            >
              <div className="flex items-center gap-2 rounded-lg border border-glow-gold/40 bg-glow-gold/10 px-4 py-3 text-sm font-semibold text-glow-gold">
                <CheckCircle2 className="h-4 w-4" />
                Property Enquiry Received
              </div>
              <div className="mt-2 flex flex-col gap-1.5">
                {["Form Submitted", "Lead Created", "CRM Updated", "Qualification Started"].map(
                  (s, i) => (
                    <motion.div
                      key={s}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="flex items-center gap-2 text-xs text-muted-foreground"
                    >
                      <CheckCircle2 className="h-3.5 w-3.5 text-glow-gold" /> {s}
                    </motion.div>
                  ),
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* CRM dashboard with pipeline + lead panel */
export function ReCrmDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">crm.realestate.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo System
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Users, label: "New Leads", value: "12" },
          { icon: CheckCircle2, label: "Qualified", value: "8" },
          { icon: CalendarDays, label: "Viewings Today", value: "5" },
          { icon: Clock, label: "Pending Follow-Ups", value: "9" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-background/40 p-3">
            <s.icon className="h-4 w-4 text-glow-gold" />
            <p className="mt-2 font-display text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Pipeline
        </p>
        <div className="flex flex-wrap gap-1.5">
          {RE_PIPELINE.map((stage, i) => (
            <span
              key={stage}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[10px] font-medium",
                i === 2
                  ? "border-glow-gold/50 bg-glow-gold/10 text-glow-gold"
                  : "border-border bg-background/40 text-muted-foreground",
              )}
            >
              {stage}
            </span>
          ))}
        </div>
      </div>
      {/* Lead card */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-5 flex w-full items-center gap-3 rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4 text-left transition-all hover:bg-glow-gold/10"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-glow-gold/20 text-sm font-bold text-glow-gold">
          DC
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">Daniel Carter</p>
          <p className="text-xs text-muted-foreground">
            3-Bedroom Family Home · Manchester · £450,000
          </p>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold text-glow-gold">
          Qualified — Demo
        </span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-3 rounded-xl border border-border bg-background/40 p-4">
              <p className="text-xs font-semibold text-glow-gold">Lead Details</p>
              <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                {[
                  { l: "Name", v: "Daniel Carter" },
                  { l: "Interest", v: "3-Bedroom Family Home" },
                  { l: "Location", v: "Manchester" },
                  { l: "Budget", v: "£450,000" },
                  { l: "Source", v: "Property Landing Page" },
                  { l: "Status", v: "Qualified — Demo" },
                ].map((r) => (
                  <div
                    key={r.l}
                    className="rounded-md border border-border bg-background/50 px-3 py-2"
                  >
                    <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                      {r.l}
                    </p>
                    <p className="mt-0.5 font-medium text-foreground">{r.v}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
