import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  Database,
  Users,
  CalendarDays,
  Clock,
  UserPlus,
  Calculator,
  Sparkles,
  Bell,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACC_PROBLEMS,
  ACC_JOURNEY,
  ACC_PIPELINE,
  ACC_QUALIFICATION,
  ACC_SERVICES,
} from "./accounting-data";

/* Hero dashboard mock */
export function AccDashboardMock() {
  const stats = [
    { icon: Users, label: "New Enquiries", value: "14" },
    { icon: CheckCircle2, label: "Qualified Leads", value: "9" },
    { icon: CalendarDays, label: "Consultations", value: "6" },
    { icon: Clock, label: "Pending Follow-Ups", value: "7" },
  ];
  return (
    <div className="glass-strong rounded-2xl p-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Calculator className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">crm.accounting.demo</span>
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
          {ACC_PIPELINE.slice(0, 5).map((stage, i) => (
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
export function AccProblems() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ACC_PROBLEMS.map((p, i) => (
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
export function AccJourneySection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = ACC_JOURNEY[active];
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr]">
      <div className="flex flex-col gap-2">
        {ACC_JOURNEY.map((s, i) => {
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
                {String(ACC_JOURNEY.length).padStart(2, "0")}
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

/* Consultation landing page + form */
export function AccLandingAndForm() {
  const [submitted, setSubmitted] = useState(false);
  const reduce = useReducedMotion();
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass-strong overflow-hidden rounded-2xl">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-glow-gold/15 via-glow-purple/5 to-transparent">
          <img
            src="https://vibe.filesafe.space/1790832248517648215/assets/e4931286-5ec9-4d75-920f-7c8253993c7a.png"
            alt="Accounting consultation landing page — fictional"
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
          <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold backdrop-blur-sm">
            Miller Consulting Ltd.
          </span>
        </div>
        <div className="p-5">
          <h3 className="font-display text-lg font-bold text-foreground">
            Get Expert Accounting Advice for Your Business
          </h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Professional accounting, bookkeeping, tax and advisory services.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {ACC_SERVICES.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2.5"
              >
                <s.icon className="h-4 w-4 text-glow-gold" />
                <span className="text-[11px] text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
          <button
            onClick={() => setSubmitted(true)}
            className="group mt-4 flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:brightness-105"
          >
            Book a Consultation
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">consultation_form.demo</span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Interactive Demo
          </span>
        </div>
        <h3 className="mt-4 font-display text-base font-bold text-foreground">
          Request a Consultation
        </h3>
        <div className="mt-4 grid grid-cols-2 gap-2.5">
          {[
            { l: "Full Name", v: "James Miller" },
            { l: "Email", v: "james@example.com" },
            { l: "Phone", v: "+1 555 010 4567" },
            { l: "Company Name", v: "Miller Consulting Ltd." },
            { l: "Business Type", v: "Limited Company" },
            { l: "Service Required", v: "Business Accounting" },
            { l: "Estimated Business Size", v: "Small / Medium" },
            { l: "Preferred Consultation Time", v: "Wednesday 2:00 PM" },
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
          Request Consultation
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
                Form Submitted
              </div>
              <div className="mt-2 flex flex-col gap-1.5">
                {[
                  "Lead Captured",
                  "CRM Created",
                  "Qualification Started",
                  "Follow-up Triggered",
                ].map((s, i) => (
                  <motion.div
                    key={s}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.2 }}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <CheckCircle2 className="h-3.5 w-3.5 text-glow-gold" /> {s}
                  </motion.div>
                ))}
              </div>
              <p className="mt-3 text-[10px] text-muted-foreground">
                Portfolio Demo — No real financial information is collected.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* CRM dashboard with pipeline + lead panel */
export function AccCrmDemo() {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Database className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">crm.accounting.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo CRM Data
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
        {[
          { icon: Users, label: "New Enquiries", value: "14" },
          { icon: CheckCircle2, label: "Qualified", value: "9" },
          { icon: CalendarDays, label: "Consultations", value: "6" },
          { icon: Clock, label: "Pending Follow-Ups", value: "7" },
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
          {ACC_PIPELINE.map((stage, i) => (
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
      <button
        onClick={() => setOpen((o) => !o)}
        className="mt-5 flex w-full items-center gap-3 rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4 text-left transition-all hover:bg-glow-gold/10"
      >
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-glow-gold/20 text-sm font-bold text-glow-gold">
          JM
        </span>
        <div className="flex-1">
          <p className="text-sm font-semibold text-foreground">James Miller</p>
          <p className="text-xs text-muted-foreground">
            Miller Consulting Ltd. · Business Accounting
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
                  { l: "Name", v: "James Miller" },
                  { l: "Company", v: "Miller Consulting Ltd." },
                  { l: "Service", v: "Business Accounting" },
                  { l: "Source", v: "Website" },
                  { l: "Status", v: "Qualified — Demo" },
                  { l: "Next Step", v: "Consultation" },
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

/* Lead qualification */
export function AccQualification() {
  const [started, setStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const reduce = useReducedMotion();
  const complete = progress >= ACC_QUALIFICATION.length;

  // Step through qualification items
  const [tick, setTick] = useState(0);
  if (started && !complete && tick === 0) {
    setTimeout(() => {
      setProgress((p) => p + 1);
      setTick(1);
      setTimeout(() => setTick(0), 700);
    }, 700);
  }

  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">qualification.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          AI Demonstration
        </span>
      </div>
      <div className="mt-5 space-y-2.5">
        {ACC_QUALIFICATION.map((item, i) => {
          const lit = started && progress > i;
          return (
            <motion.div
              key={item.q}
              initial={false}
              animate={{
                opacity: lit ? 1 : 0.4,
                borderColor: lit ? "var(--glow-gold)" : "var(--border)",
              }}
              className="rounded-lg border bg-background/50 px-3.5 py-2.5"
            >
              <p className="text-xs text-muted-foreground">{item.q}</p>
              {lit && (
                <motion.p
                  initial={reduce ? false : { opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="mt-0.5 text-sm font-semibold text-foreground"
                >
                  {item.a}
                </motion.p>
              )}
            </motion.div>
          );
        })}
      </div>
      <AnimatePresence>
        {complete && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center justify-center gap-2 rounded-lg border border-glow-gold-light/40 bg-glow-gold-light/10 px-4 py-3 text-sm font-semibold text-glow-gold-light"
          >
            <CheckCircle2 className="h-4 w-4" />
            Qualification Complete · Qualified Lead
          </motion.div>
        )}
      </AnimatePresence>
      {!started && (
        <button
          onClick={() => setStarted(true)}
          className="group mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-105"
        >
          Start Qualification
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
        </button>
      )}
      <p className="mt-4 text-[10px] text-muted-foreground">
        Demonstration only — illustrative qualification, not a real AI prediction.
      </p>
    </div>
  );
}

/* Automated response */
export function AccAutoResponse() {
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Bell className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">auto_response.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Automation Demonstration
        </span>
      </div>
      <div className="mt-5 rounded-xl border border-border bg-background/50 p-4">
        <p className="text-xs leading-relaxed text-foreground/90">
          “Hi James, thanks for contacting Miller Consulting Ltd. We've received your consultation
          request. A member of our team will be in touch shortly.”
        </p>
      </div>
      <div className="mt-4 flex items-center gap-2 rounded-lg border border-glow-gold/40 bg-glow-gold/10 px-4 py-3 text-sm font-semibold text-glow-gold">
        <CheckCircle2 className="h-4 w-4" />
        Automation Triggered
      </div>
      <div className="mt-4 grid grid-cols-2 gap-2">
        {[
          { icon: UserPlus, label: "Contact created" },
          { icon: Sparkles, label: "Lead tagged" },
          { icon: Clock, label: "Follow-up scheduled" },
          { icon: Bell, label: "Notification triggered" },
        ].map((w) => (
          <div
            key={w.label}
            className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2.5 text-xs text-muted-foreground"
          >
            <w.icon className="h-3.5 w-3.5 text-glow-gold" /> {w.label}
          </div>
        ))}
      </div>
    </div>
  );
}
