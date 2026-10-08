import { useState, useEffect } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  UserPlus,
  Bell,
  CheckCircle2,
  Sparkles,
  CalendarCheck,
  Workflow,
  Smartphone,
  Repeat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SALON_JOURNEY,
  SALON_SERVICES,
  SALON_PIPELINE,
  SALON_AUTO_STEPS,
  SALON_AI_CHAT,
} from "./salon-data";

/* Hero dashboard mockup */
export function SalonDashboardMock() {
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
          <span className="ml-2 font-mono text-xs text-muted-foreground">salon.crm.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <div className="p-5">
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: UserPlus, label: "New Leads", tone: "var(--glow-gold)" },
            { icon: CalendarCheck, label: "Today's Appts", tone: "var(--glow-gold-light)" },
            { icon: Bell, label: "Pending Follow-Ups", tone: "var(--glow-amber)" },
            { icon: Repeat, label: "Returning Clients", tone: "var(--glow-gold)" },
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
              <span className="text-xs font-medium text-foreground">Emma Wilson</span>
            </div>
            <span className="rounded-full bg-glow-gold/15 px-2 py-0.5 text-[9px] font-semibold text-glow-gold">
              Booking Requested
            </span>
          </div>
          <div className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2.5">
            <div className="flex items-center gap-2.5">
              <CalendarCheck className="h-4 w-4 text-glow-gold-light" />
              <span className="text-xs font-medium text-foreground">Hair Coloring · 2:00 PM</span>
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
export function SalonJourneySection() {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const step = SALON_JOURNEY[active];
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
      <div className="flex flex-col gap-2">
        {SALON_JOURNEY.map((j, i) => (
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

/* Salon landing page demo + booking form (interactive flow) */
export function SalonLandingAndForm() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
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
          <span className="font-mono text-xs text-muted-foreground">luxe.beauty.studio</span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Demo Landing Page
          </span>
        </div>
        <div className="mt-4">
          <p className="font-display text-lg font-bold text-foreground">
            Feel Your Best. Book Your Next Appointment.
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Select a service to continue to the booking form.
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            {SALON_SERVICES.map((s) => {
              const sel = selectedService === s.name;
              return (
                <button
                  key={s.name}
                  onClick={() => setSelectedService(s.name)}
                  className={cn(
                    "flex flex-col items-start gap-1.5 rounded-xl border p-3 text-left transition-all",
                    sel
                      ? "border-glow-gold/50 bg-glow-gold/10"
                      : "border-border bg-background/40 hover:bg-secondary/50",
                  )}
                >
                  <span
                    className={cn(
                      "flex h-8 w-8 items-center justify-center rounded-lg",
                      sel ? "bg-glow-gold/20 text-glow-gold" : "bg-secondary text-muted-foreground",
                    )}
                  >
                    <s.icon className="h-4 w-4" />
                  </span>
                  <span className="text-xs font-semibold text-foreground">{s.name}</span>
                  <span className="text-[10px] leading-relaxed text-muted-foreground">
                    {s.desc}
                  </span>
                  <span
                    className={cn(
                      "mt-1 text-[10px] font-bold",
                      sel ? "text-glow-gold" : "text-muted-foreground",
                    )}
                  >
                    Book Now →
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="glass-strong rounded-2xl p-6">
        <div className="flex items-center justify-between">
          <span className="font-mono text-xs text-muted-foreground">booking_form.demo</span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Interactive Portfolio Demo
          </span>
        </div>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3">
            <div className="grid grid-cols-2 gap-3">
              <SalonField label="First Name" placeholder="Emma" />
              <SalonField label="Last Name" placeholder="Wilson" />
            </div>
            <SalonField label="Phone" placeholder="(555) 020-5678" type="tel" />
            <SalonField label="Email" placeholder="emma@example.com" type="email" />
            <div>
              <label className="mb-1.5 block text-xs font-semibold text-foreground">
                Select Service
              </label>
              <select
                className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-glow-gold/50"
                defaultValue={selectedService ?? ""}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {SALON_SERVICES.map((s) => (
                  <option key={s.name}>{s.name}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <SalonField label="Preferred Date" type="date" />
              <div>
                <label className="mb-1.5 block text-xs font-semibold text-foreground">
                  Preferred Time
                </label>
                <select
                  className="w-full rounded-lg border border-border bg-background/60 px-3 py-2.5 text-sm text-foreground outline-none focus:border-glow-gold/50"
                  defaultValue=""
                >
                  <option value="" disabled>
                    Select time
                  </option>
                  <option>10:00 AM</option>
                  <option>2:00 PM</option>
                  <option>4:30 PM</option>
                </select>
              </div>
            </div>
            <button
              type="submit"
              className="group mt-2 flex items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:brightness-105"
            >
              Request Appointment
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
          </form>
        ) : (
          <div className="mt-5 flex flex-1 flex-col gap-3">
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-2 rounded-lg bg-glow-gold/15 px-3 py-2.5 text-sm font-semibold text-glow-gold"
            >
              <CheckCircle2 className="h-4 w-4" />
              Appointment Request Received
            </motion.div>
            <div className="flex flex-col gap-2.5">
              {SALON_AUTO_STEPS.map((s, i) => (
                <SalonAutoStep
                  key={s.label}
                  step={s}
                  index={i}
                  progress={progress}
                  setProgress={setProgress}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function SalonField({
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

function SalonAutoStep({
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

/* CRM demo — clickable lead + detail panel */
export function SalonCrmDemo() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="glass-strong overflow-hidden rounded-2xl">
        <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
          <span className="font-mono text-xs text-muted-foreground">crm.salon.demo</span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Demo Interface
          </span>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-7">
            {SALON_PIPELINE.map((s, i) => (
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
                EW
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Emma Wilson</p>
                <p className="text-xs text-muted-foreground">Hair Coloring</p>
              </div>
            </div>
            <span className="flex items-center gap-2 rounded-full bg-glow-gold/15 px-3 py-1.5 text-[10px] font-semibold text-glow-gold">
              Booking Requested
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
                  EW
                </span>
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">Emma Wilson</h3>
                  <p className="text-xs text-muted-foreground">
                    Fictional demo customer — not a real person
                  </p>
                </div>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-3">
                {[
                  { label: "Customer Name", value: "Emma Wilson" },
                  { label: "Service", value: "Hair Coloring" },
                  { label: "Contact", value: "(555) 020-5678" },
                  { label: "Lead Source", value: "Instagram" },
                  { label: "Appointment", value: "Wed · 2:00 PM" },
                  { label: "Status", value: "Booking Requested" },
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
                  Next action: confirm appointment → send reminder → rebooking follow-up
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

/* Automated response chat */
export function SalonAiChat() {
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">ai_assistant.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Automation Demonstration
        </span>
      </div>
      <div className="mt-5 space-y-3">
        {SALON_AI_CHAT.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className={cn("flex", m.from === "customer" ? "justify-start" : "justify-end")}
          >
            <div
              className={cn(
                "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm",
                m.from === "customer"
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
          View Available Times
        </button>
      </div>
      <p className="mt-4 text-[10px] text-muted-foreground">
        Automation demonstration — illustrative interaction, not a live AI system.
      </p>
    </div>
  );
}

/* Appointment calendar */
export function SalonBookingDemo() {
  const [slot, setSlot] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const days = ["Wednesday", "Thursday"];
  const slots: Record<string, string[]> = {
    Wednesday: ["10:00 AM", "2:00 PM", "4:30 PM"],
    Thursday: ["11:00 AM", "3:00 PM"],
  };
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">calendar.salon.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo Calendar
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold text-foreground">Service: Hair Coloring</p>
        <p className="mt-3 text-xs font-semibold text-foreground">Select a day</p>
        <div className="mt-2 grid grid-cols-2 gap-2">
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
              <p className="mt-5 text-xs font-semibold text-foreground">Available slots — {day}</p>
              <div className="mt-2 grid grid-cols-3 gap-2">
                {slots[day].map((s) => (
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
              Appointment Confirmed — {day}, {slot}
              <span className="rounded-full bg-glow-gold/20 px-2.5 py-1 text-[10px]">
                Pipeline → Booked
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
