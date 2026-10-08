import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Megaphone,
  UserPlus,
  Database,
  Bell,
  CheckCircle2,
  Sparkles,
  CalendarCheck,
  Mail,
  Workflow,
  Smartphone,
  Activity,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { DentalCinematicDemo } from "@/components/dental-cinematic-demo";
import {
  JOURNEY,
  PIPELINE_STAGES,
  AUTO_STEPS,
  AI_CHAT,
  REMINDERS,
  WORKFLOW_DIAGRAM,
} from "./dental-data";

/* Hero dashboard mockup */
export function DentalDashboardMock() {
  return (
    <div className="glass-strong relative overflow-hidden rounded-2xl">
      <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-glow-gold/15 blur-3xl" />
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </span>
          <span className="ml-2 font-mono text-xs text-muted-foreground">dental.crm.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-3 gap-3">
          {[
            { icon: UserPlus, label: "New Leads", tone: "var(--glow-gold)" },
            { icon: CalendarCheck, label: "Booked", tone: "var(--glow-gold-light)" },
            { icon: Activity, label: "Active", tone: "var(--glow-amber)" },
          ].map((s) => (
            <div key={s.label} className="glass rounded-xl p-3">
              <s.icon className="h-4 w-4" style={{ color: s.tone }} />
              <div className="mt-2 flex items-center gap-1.5">
                <span
                  className="h-1.5 w-1.5 animate-pulse rounded-full"
                  style={{ background: s.tone }}
                />
                <span className="text-[10px] font-medium text-muted-foreground">{s.label}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 space-y-2">
          <div className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <Smartphone className="h-4 w-4 text-glow-gold" />
              <span className="text-xs font-medium text-foreground">Sarah Johnson</span>
            </div>
            <span className="rounded-full bg-glow-gold/15 px-2 py-0.5 text-[9px] font-semibold text-glow-gold">
              New Lead
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <CalendarCheck className="h-4 w-4 text-glow-gold-light" />
              <span className="text-xs font-medium text-foreground">Implant Consultation</span>
            </div>
            <span className="rounded-full bg-glow-gold-light/15 px-2 py-0.5 text-[9px] font-semibold text-glow-gold-light">
              Booked
            </span>
          </div>
        </div>
        <div className="mt-4 rounded-lg bg-glow-gold/5 p-3">
          <div className="flex items-center gap-2 text-[10px] text-muted-foreground">
            <Workflow className="h-3.5 w-3.5 text-glow-gold" />
            <span className="font-mono">automation.active · Demo workflow</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* Interactive journey */
export function JourneySection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = JOURNEY[active];
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col gap-2">
        {JOURNEY.map((j, i) => (
          <button
            key={j.label}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-150",
              active === i
                ? "border-glow-gold/40 bg-secondary glow-ring"
                : "border-border bg-background/40 hover:bg-secondary/50",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <j.icon
              className={cn(
                "h-4 w-4 shrink-0",
                active === i ? "text-glow-gold" : "text-muted-foreground",
              )}
            />
            <span
              className={cn(
                "text-sm font-medium",
                active === i ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {j.label}
            </span>
          </button>
        ))}
      </div>
      <div className="glass-strong flex flex-col rounded-2xl p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
            <step.icon className="h-5 w-5" />
          </span>
          <div>
            <span className="font-mono text-[10px] text-muted-foreground">
              Step {String(active + 1).padStart(2, "0")} / 10
            </span>
            <h3 className="font-display text-lg font-bold text-foreground">{step.label}</h3>
          </div>
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduce ? undefined : { opacity: 0, y: -8 }}
            transition={{ duration: 0.15 }}
            className="mt-5 flex flex-col gap-4"
          >
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
                What happens
              </p>
              <p className="mt-1 text-sm leading-relaxed text-foreground/90">{step.what}</p>
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
                Why it matters
              </p>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.why}</p>
            </div>
            <div className="rounded-lg border border-border bg-background/40 p-3">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-glow-gold-light">
                Example action
              </p>
              <p className="mt-1 font-mono text-xs text-foreground/80">{step.example}</p>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-muted-foreground">Handled by</span>
              <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold text-glow-gold">
                {step.system}
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

/* CRM demo — clickable lead + detail panel */
export function CrmDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="glass-strong overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <span className="font-mono text-xs text-muted-foreground">crm.dental.demo</span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Demo Interface
          </span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
            {PIPELINE_STAGES.map((s, i) => (
              <div key={s.key} className="text-center">
                <div className="mb-1.5 flex items-center justify-center gap-1">
                  <span
                    className="h-2 w-2 rounded-full"
                    style={{ background: s.color, boxShadow: `0 0 8px ${s.color}` }}
                  />
                  <span className="hidden text-[9px] font-semibold text-foreground sm:inline">
                    {s.label}
                  </span>
                </div>
                <div
                  className={cn(
                    "rounded-md border px-1 py-1 text-[8px] font-medium sm:text-[9px]",
                    i === 3
                      ? "border-glow-gold/40 bg-glow-gold/15 text-glow-gold"
                      : "border-border bg-background/40 text-muted-foreground",
                  )}
                >
                  {s.label.split(" ")[0]}
                </div>
              </div>
            ))}
          </div>
          <button
            onClick={() => setOpen(true)}
            className="group mt-4 flex w-full items-center justify-between rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4 text-left transition-all hover:border-glow-gold/50 hover:bg-glow-gold/10"
          >
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glow-gold/15 font-display text-sm font-bold text-glow-gold">
                SJ
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">Dental Implant Consultation</p>
              </div>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-glow-gold/15 px-3 py-1.5 text-[10px] font-semibold text-glow-gold">
              Appointment Booked
              <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
            </span>
          </button>
          <p className="mt-3 text-center text-[10px] text-muted-foreground">
            Click the lead to open the detail panel
          </p>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 p-4 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-strong relative w-full max-w-md rounded-2xl p-6"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-glow-gold/15 font-display text-base font-bold text-glow-gold">
                  SJ
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">Sarah Johnson</h3>
                  <p className="text-xs text-muted-foreground">
                    Fictional demo patient — not a real person
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { label: "Lead Source", value: "Instagram Ad" },
                  { label: "Phone", value: "(555) 010-2048" },
                  { label: "Email", value: "sarah.d@demo.com" },
                  { label: "Treatment", value: "Dental Implant" },
                  { label: "Lead Status", value: "Qualified" },
                  { label: "Appointment", value: "Oct 16 · 2:30 PM" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="rounded-lg border border-border bg-background/40 p-3"
                  >
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
                      {row.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-foreground">{row.value}</p>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 rounded-lg bg-glow-gold/10 p-3">
                <Workflow className="h-4 w-4 shrink-0 text-glow-gold" />
                <span className="text-xs text-foreground/80">
                  Active workflow: follow-up · reminders · no-show reactivation
                </span>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="mt-5 w-full rounded-full border border-border bg-background/40 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* Form submission + automation simulation */
export function FormDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setProgress(0);
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="glass-strong rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">appointment_form.demo</span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Demo Form
          </span>
        </div>
        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
          <div className="grid grid-cols-2 gap-3">
            <Field label="First Name" placeholder="Sarah" />
            <Field label="Last Name" placeholder="Johnson" />
          </div>
          <Field label="Email" placeholder="sarah.d@demo.com" type="email" />
          <Field label="Phone" placeholder="(555) 010-2048" type="tel" />
          <div>
            <label className="mb-1.5 block text-xs font-semibold text-foreground">
              Treatment Needed
            </label>
            <select
              className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-glow-gold/50"
              defaultValue=""
            >
              <option value="" disabled>
                Select a treatment
              </option>
              <option>Dental Implant Consultation</option>
              <option>Teeth Whitening</option>
              <option>General Check-up</option>
              <option>Orthodontic Consultation</option>
            </select>
          </div>
          <Field label="Preferred Appointment Date" type="date" />
          <button
            type="submit"
            className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-105"
          >
            Submit Appointment Request
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
        </form>
      </div>

      <div className="glass-strong flex flex-col rounded-2xl p-6">
        <span className="font-mono text-xs text-muted-foreground">automation_log.demo</span>
        <div className="mt-5 flex flex-1 flex-col gap-3">
          {!submitted ? (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <Mail className="h-10 w-10 text-muted-foreground/40" />
              <p className="mt-3 text-sm text-muted-foreground">
                Submit the form to watch the automation trigger.
              </p>
            </div>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-2 rounded-lg bg-glow-gold/15 px-3 py-2.5 text-sm font-semibold text-glow-gold"
              >
                <CheckCircle2 className="h-4 w-4" />
                New Lead Received
              </motion.div>
              <div className="flex flex-col gap-2.5">
                {AUTO_STEPS.map((s, i) => (
                  <AutoStep
                    key={s.label}
                    step={s}
                    index={i}
                    progress={progress}
                    setProgress={setProgress}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
}: {
  label: string;
  placeholder: string;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-semibold text-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground/50 focus:border-glow-gold/50"
      />
    </div>
  );
}

function AutoStep({
  step,
  index,
  progress,
  setProgress,
}: {
  step: { icon: typeof UserPlus; label: string; tone: string };
  index: number;
  progress: number;
  setProgress: (n: number) => void;
}) {
  const reduce = useReducedMotion();
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (progress < index) return;
    if (progress === index && !done) {
      const t = setTimeout(() => {
        setDone(true);
        setProgress(index + 1);
      }, 650);
      return () => clearTimeout(t);
    }
  }, [progress, index, done, setProgress]);

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0.3, x: -8 }}
      animate={progress >= index ? { opacity: 1, x: 0 } : { opacity: 0.3 }}
      className="flex items-center gap-3 rounded-lg border border-border bg-background/40 px-3.5 py-2.5"
    >
      <span
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors"
        style={{
          background: done ? `${step.tone}22` : "var(--secondary)",
          color: done ? step.tone : "var(--muted-foreground)",
        }}
      >
        {done ? <CheckCircle2 className="h-4 w-4" /> : <step.icon className="h-4 w-4" />}
      </span>
      <span
        className={cn("text-sm font-medium", done ? "text-foreground" : "text-muted-foreground")}
      >
        {step.label}
      </span>
      {done && <CheckCircle2 className="ml-auto h-4 w-4" style={{ color: step.tone }} />}
    </motion.div>
  );
}

/* AI chat */
export function AiChat() {
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">ai_assistant.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          AI Demonstration
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {AI_CHAT.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={cn("flex", m.from === "patient" ? "justify-start" : "justify-end")}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                m.from === "patient"
                  ? "rounded-bl-sm border border-border bg-background/60 text-foreground"
                  : "rounded-br-sm bg-glow-gold/15 text-foreground",
              )}
            >
              {m.text}
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-2">
        <button className="rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition hover:brightness-105">
          Request Appointment
        </button>
        <button className="rounded-full border border-border bg-background/40 px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-secondary">
          Ask Another Question
        </button>
      </div>
      <p className="mt-4 text-[10px] text-muted-foreground">
        Demo conversation — illustrative interaction, not a live AI system.
      </p>
    </div>
  );
}

/* Booking demo */
export function BookingDemo() {
  const [slot, setSlot] = useState<string | null>(null);
  const slots = ["9:00 AM", "10:30 AM", "1:00 PM", "2:30 PM", "4:00 PM"];
  const days = [14, 15, 16, 17, 18];
  const [day, setDay] = useState<number | null>(null);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">calendar.dental.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo Calendar
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold text-foreground">Select a day — October 2026</p>
        <div className="mt-2 grid grid-cols-5 gap-2">
          {days.map((d) => (
            <button
              key={d}
              onClick={() => setDay(d)}
              className={cn(
                "rounded-lg border py-3 text-sm font-semibold transition-all",
                day === d
                  ? "border-glow-gold/50 bg-glow-gold/15 text-glow-gold"
                  : "border-border bg-background/40 text-muted-foreground hover:bg-secondary/50",
              )}
            >
              {d}
            </button>
          ))}
        </div>
        <AnimatePresence>
          {day && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden"
            >
              <p className="mt-5 text-xs font-semibold text-foreground">
                Available slots — Oct {day}
              </p>
              <div className="mt-2 grid grid-cols-3 gap-2 sm:grid-cols-5">
                {slots.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSlot(s)}
                    className={cn(
                      "rounded-lg border px-2 py-2.5 text-xs font-semibold transition-all",
                      slot === s
                        ? "border-glow-gold/50 bg-glow-gold/15 text-glow-gold"
                        : "border-border bg-background/40 text-muted-foreground hover:bg-secondary/50",
                    )}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {slot && day && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-5 flex flex-wrap items-center gap-2 rounded-lg bg-glow-gold/15 px-4 py-3 text-sm font-semibold text-glow-gold"
            >
              <CheckCircle2 className="h-4 w-4" />
              Appointment Request Received — Oct {day}, {slot}
              <span className="rounded-full bg-glow-gold/20 px-2.5 py-1 text-[10px]">
                Pipeline → Appointment Booked
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Video demo — cinematic 11-scene walkthrough */
export function VideoDemo() {
  return <DentalCinematicDemo />;
}

/* Workflow diagram */
export function WorkflowDiagram() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), {
      threshold: 0.2,
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return (
    <div ref={ref} className="glass-strong rounded-2xl p-6 sm:p-8">
      <div className="mx-auto flex max-w-xl flex-col items-center">
        {WORKFLOW_DIAGRAM.map((n, i) => (
          <div key={n.label} className="flex flex-col items-center">
            <motion.div
              initial={reduce ? false : { opacity: 0, scale: 0.85 }}
              animate={visible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex items-center gap-3 rounded-xl border border-glow-gold/25 bg-glow-gold/5 px-5 py-3"
            >
              <n.icon className="h-4 w-4 text-glow-gold" />
              <span className="font-mono text-xs font-semibold tracking-wider text-foreground">
                {n.label}
              </span>
            </motion.div>
            {i < WORKFLOW_DIAGRAM.length - 1 && (
              <motion.div
                initial={reduce ? false : { scaleY: 0, opacity: 0 }}
                animate={visible ? { scaleY: 1, opacity: 1 } : {}}
                transition={{ delay: i * 0.1 + 0.08, duration: 0.3 }}
                className="h-6 w-px origin-top bg-gradient-to-b from-glow-gold/60 to-glow-amber/60"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* Reminders timeline */
export function RemindersTimeline() {
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex flex-col gap-0">
        {REMINDERS.map((r, i) => (
          <div key={r.time} className="flex gap-4">
            <div className="flex flex-col items-center">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-glow-gold/15 text-glow-gold">
                <Bell className="h-4 w-4" />
              </span>
              {i < REMINDERS.length - 1 && (
                <div className="h-10 w-px bg-gradient-to-b from-glow-gold/50 to-glow-amber/50" />
              )}
            </div>
            <div className="pb-6">
              <p className="font-display text-sm font-bold text-foreground">{r.time}</p>
              <p className="mt-1 font-mono text-xs text-muted-foreground">{r.msg}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
