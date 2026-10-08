import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  Bell,
  ArrowRight,
  CheckCircle2,
  Heart,
  Repeat,
  Scissors,
  Mail,
  Sparkles,
  LayoutTemplate,
  UserPlus,
  Database,
  Cpu,
} from "lucide-react";
import { SalonWindowChrome } from "./salon-scenes-a";

/* ------------------------------------------------------------------ */
/* Complete Salon Automation Workflow — scenes 7–11.                 */
/* Fictional "Luxe Beauty Studio" / "Emma Wilson" demo data only.     */
/* ------------------------------------------------------------------ */

/* Scene 7 — Appointment Calendar */
export function SScene7({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const slots = ["10:00 AM", "2:00 PM", "4:30 PM"];
  const selectedIdx = Math.min(slots.length - 1, Math.floor((local - 0.3) * 3));
  const confirmed = local > 0.8;
  return (
    <SalonWindowChrome label="calendar.salon.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Hair Coloring — Demo Calendar
        </p>
        <div className="flex flex-1 flex-col items-center justify-center">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full max-w-[260px] rounded-xl border border-border bg-background/50 p-3.5"
          >
            <div className="mb-2 flex items-center justify-between">
              <CalendarCheck className="h-3.5 w-3.5 text-glow-gold" />
              <span className="text-[10px] font-semibold text-foreground">
                Wednesday — Available Slots
              </span>
            </div>
            <div className="grid grid-cols-3 gap-1.5">
              {slots.map((s, i) => {
                const sel = i === selectedIdx && local > 0.3;
                return (
                  <motion.div
                    key={s}
                    animate={{
                      borderColor: sel ? "var(--glow-gold)" : "var(--border)",
                      backgroundColor: sel ? "var(--glow-gold)1a" : "transparent",
                    }}
                    className="rounded-md border py-2 text-center text-[10px] font-semibold"
                    style={{ color: sel ? "var(--glow-gold)" : "var(--foreground)" }}
                  >
                    {s}
                  </motion.div>
                );
              })}
            </div>
            <AnimatePresence>
              {local > 0.65 && !confirmed && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold/40 bg-glow-gold/10 py-2 text-[10px] font-semibold text-glow-gold"
                >
                  Confirm Appointment <ArrowRight className="h-3 w-3" />
                </motion.div>
              )}
            </AnimatePresence>
            <AnimatePresence>
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold-light/40 bg-glow-gold-light/10 py-2 text-[10px] font-semibold text-glow-gold-light"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" /> Appointment Confirmed
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </SalonWindowChrome>
  );
}

/* Scene 8 — CRM Pipeline Update */
const SALON_PIPELINE_STAGES = ["New Lead", "Contacted", "Qualified", "Booked"];

export function SScene8({ local }: { local: number }) {
  const activeStage = Math.min(
    SALON_PIPELINE_STAGES.length - 1,
    Math.floor(local * SALON_PIPELINE_STAGES.length),
  );
  return (
    <SalonWindowChrome label="crm_pipeline.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Pipeline Update — Demo Data
        </p>
        <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-4">
          {SALON_PIPELINE_STAGES.map((stage, i) => {
            const lit = i <= activeStage;
            const isCurrent = i === activeStage;
            return (
              <div key={stage} className="flex flex-col">
                <div className="mb-2 flex items-center gap-1.5" style={{ opacity: lit ? 1 : 0.4 }}>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: lit ? "var(--glow-gold)" : "var(--border)",
                      boxShadow: lit ? "0 0 8px var(--glow-gold)" : "none",
                    }}
                  />
                  <span className="text-[9px] font-semibold text-foreground">{stage}</span>
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <AnimatePresence>
                    {lit && (
                      <motion.div
                        key={`card-${i}`}
                        initial={{ opacity: 0, x: -16, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-md border p-1.5"
                        style={{
                          borderColor: isCurrent ? "var(--glow-gold)" : "var(--border)",
                          background: isCurrent ? "var(--glow-gold)1a" : "var(--background)",
                        }}
                      >
                        <p className="text-[9px] font-medium text-foreground">Emma W.</p>
                        <p className="text-[8px] text-muted-foreground">Hair Coloring</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
        {activeStage === 3 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold/40 bg-glow-gold/10 py-2 text-[10px] font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> Booked
          </motion.div>
        )}
      </div>
    </SalonWindowChrome>
  );
}

/* Scene 9 — Automated Reminders */
const SALON_REMINDERS = [
  {
    icon: CalendarCheck,
    label: "Appointment Booked",
    msg: "Your hair coloring is booked for Wed, 2:00 PM.",
  },
  {
    icon: Clock,
    label: "24 Hours Before",
    msg: "Reminder: your hair coloring is tomorrow at 2:00 PM.",
  },
  {
    icon: Bell,
    label: "2 Hours Before",
    msg: "Your appointment at Luxe Beauty Studio is today at 2:00 PM.",
  },
  { icon: Heart, label: "Appointment Time", msg: "Pipeline stage → Confirmed → Completed." },
];

export function SScene9({ local }: { local: number }) {
  const activeIdx = Math.min(
    SALON_REMINDERS.length - 1,
    Math.floor(local * SALON_REMINDERS.length),
  );
  return (
    <SalonWindowChrome label="reminders.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Automated Reminders — Demonstration
        </p>
        <div className="flex flex-1 flex-col gap-0">
          {SALON_REMINDERS.map((r, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={r.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <motion.span
                    animate={{
                      backgroundColor: lit ? "var(--glow-gold)22" : "var(--secondary)",
                      color: lit ? "var(--glow-gold)" : "var(--muted-foreground)",
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                  >
                    <r.icon className="h-4 w-4" />
                  </motion.span>
                  {i < SALON_REMINDERS.length - 1 && (
                    <motion.div
                      className="my-0.5 w-px flex-1"
                      animate={{ backgroundColor: lit ? "var(--glow-gold)" : "var(--border)" }}
                    />
                  )}
                </div>
                <div className="pb-3">
                  <p className="text-[11px] font-bold text-foreground">{r.label}</p>
                  <p className="mt-0.5 font-mono text-[9px] text-muted-foreground">{r.msg}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SalonWindowChrome>
  );
}

/* Scene 10 — Post-Visit Follow-Up & Rebooking */
const FOLLOWUP_FLOW = [
  { icon: CheckCircle2, label: "Appointment Completed" },
  { icon: Mail, label: "Thank You Message" },
  { icon: Bell, label: "Feedback Request" },
  { icon: Repeat, label: "Rebooking Follow-Up" },
];

export function SScene10({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(FOLLOWUP_FLOW.length - 1, Math.floor(local * FOLLOWUP_FLOW.length));
  return (
    <SalonWindowChrome label="followup.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Post-Visit Follow-Up — Demonstration
        </p>
        <div className="flex flex-1 flex-col gap-0">
          {FOLLOWUP_FLOW.map((f, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={f.label} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <motion.span
                    animate={{
                      backgroundColor: lit ? "var(--glow-gold)22" : "var(--secondary)",
                      color: lit ? "var(--glow-gold)" : "var(--muted-foreground)",
                    }}
                    className="flex h-8 w-8 items-center justify-center rounded-full"
                  >
                    <f.icon className="h-4 w-4" />
                  </motion.span>
                  {i < FOLLOWUP_FLOW.length - 1 && (
                    <motion.div
                      className="my-0.5 w-px flex-1"
                      animate={{ backgroundColor: lit ? "var(--glow-gold)" : "var(--border)" }}
                    />
                  )}
                </div>
                <div className="pb-3">
                  <p className="text-[11px] font-bold text-foreground">{f.label}</p>
                  {i === 3 && lit && (
                    <motion.p
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-0.5 font-mono text-[9px] text-muted-foreground"
                    >
                      "Hi Emma, it's been a while — book your next visit?"
                    </motion.p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        <AnimatePresence>
          {local > 0.85 && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold/40 bg-glow-gold/10 py-2 text-[10px] font-semibold text-glow-gold"
            >
              <Repeat className="h-3.5 w-3.5" /> Customer Rebooked
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SalonWindowChrome>
  );
}

/* Scene 11 — Complete Workflow */
const SALON_SYSTEM_FLOW = [
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: Scissors, label: "Service Selection" },
  { icon: UserPlus, label: "Form" },
  { icon: Database, label: "CRM" },
  { icon: Cpu, label: "Automation" },
  { icon: Sparkles, label: "AI Response" },
  { icon: CalendarCheck, label: "Calendar" },
  { icon: CalendarCheck, label: "Appointment" },
  { icon: Bell, label: "Reminders" },
  { icon: Heart, label: "Salon Visit" },
  { icon: Repeat, label: "Rebooking" },
];

export function SScene11({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(
    SALON_SYSTEM_FLOW.length - 1,
    Math.floor(local * SALON_SYSTEM_FLOW.length),
  );
  return (
    <SalonWindowChrome label="complete_system.demo">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[200px] flex-col items-center">
          {SALON_SYSTEM_FLOW.map((s, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={`${s.label}-${i}`} className="flex w-full flex-col items-center">
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: lit ? 1 : 0.3, y: 0, scale: i === activeIdx ? 1.06 : 1 }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-1.5"
                  style={{
                    borderColor: lit ? "var(--glow-gold)" : "var(--border)",
                    boxShadow: i === activeIdx ? "0 0 18px -6px var(--glow-gold)" : "none",
                  }}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-glow-gold/15 text-glow-gold">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[10px] font-semibold text-foreground">{s.label}</span>
                </motion.div>
                {i < SALON_SYSTEM_FLOW.length - 1 && (
                  <motion.div
                    className="my-0.5 h-3 w-px"
                    animate={{ backgroundColor: lit ? "var(--glow-gold)" : "var(--border)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <AnimatePresence>
          {local > 0.9 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center"
            >
              <p className="text-[11px] font-bold text-foreground">
                From First Enquiry to Repeat Customer
              </p>
              <p className="mt-1 text-[9px] text-muted-foreground">
                Salon Automation Portfolio Demonstration — Fictional data
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </SalonWindowChrome>
  );
}

export const SALON_SCENES_B = [SScene7, SScene8, SScene9, SScene10, SScene11];
