import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CheckCircle2,
  CalendarDays,
  Clock,
  UserPlus,
  Briefcase,
  Building2,
  Users,
  Bell,
  Mail,
  Repeat,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ACC_FOLLOWUP, ACC_ONBOARDING, ACC_SYSTEM_FLOW } from "./accounting-data";

/* Consultation calendar */
export function AccCalendar() {
  const [selected, setSelected] = useState<string | null>(null);
  const slots = [
    { day: "Tuesday", time: "10:00 AM" },
    { day: "Tuesday", time: "2:00 PM" },
    { day: "Wednesday", time: "11:00 AM" },
    { day: "Wednesday", time: "2:00 PM" },
    { day: "Thursday", time: "3:30 PM" },
  ];
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">calendar.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <h3 className="mt-5 font-display text-base font-bold text-foreground">
        30-Minute Business Accounting Consultation
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">Miller Consulting Ltd.</p>
      <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
        {slots.map((s) => {
          const key = `${s.day} — ${s.time}`;
          const sel = selected === key;
          return (
            <button
              key={key}
              onClick={() => setSelected(sel ? null : key)}
              className={cn(
                "flex items-center justify-between rounded-xl border p-3.5 text-left transition-all",
                sel
                  ? "border-glow-gold/60 bg-glow-gold/10"
                  : "border-border bg-background/40 hover:bg-secondary/50",
              )}
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{s.day}</p>
                <p className="text-xs text-muted-foreground">{s.time}</p>
              </div>
              {sel && <CheckCircle2 className="h-4 w-4 text-glow-gold" />}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 flex items-center gap-2 rounded-lg bg-glow-gold/15 px-4 py-3 text-sm font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-4 w-4" />
            Consultation Reserved — {selected}
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-4 text-[10px] text-muted-foreground">
        CRM pipeline updated: Qualified → Consultation Booked
      </p>
    </div>
  );
}

/* Follow-up automation timeline */
export function AccFollowUp() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">followup_sequence.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demonstration
        </span>
      </div>
      <div className="mt-5 flex flex-col">
        {ACC_FOLLOWUP.map((r, i) => (
          <div key={r.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <motion.span
                initial={reduce ? false : { scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-glow-gold/15 text-glow-gold"
              >
                <r.icon className="h-5 w-5" />
              </motion.span>
              {i < ACC_FOLLOWUP.length - 1 && (
                <div className="my-1 w-px flex-1 bg-gradient-to-b from-glow-gold/40 to-border" />
              )}
            </div>
            <div className="pb-6">
              <p className="text-sm font-bold text-foreground">{r.label}</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                {r.msg}
              </p>
            </div>
          </div>
        ))}
      </div>
      <p className="rounded-lg border border-glow-gold/30 bg-glow-gold/5 px-4 py-2.5 text-center text-xs font-semibold text-glow-gold">
        Never let a qualified enquiry go unnoticed.
      </p>
    </div>
  );
}

/* Client onboarding */
export function AccOnboarding() {
  const done = ACC_ONBOARDING.filter((o) => o.done).length;
  const pct = Math.round((done / ACC_ONBOARDING.length) * 100);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <UserPlus className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">onboarding.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <div className="mt-5 flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-glow-gold/20 text-sm font-bold text-glow-gold">
          JM
        </span>
        <div>
          <p className="text-sm font-semibold text-foreground">James Miller — Onboarding</p>
          <p className="text-xs text-muted-foreground">Miller Consulting Ltd.</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="mb-2 flex items-center justify-between text-[10px] text-muted-foreground">
          <span>Onboarding progress</span>
          <span className="font-semibold text-glow-gold">{pct}%</span>
        </div>
        <div className="h-1.5 rounded-full bg-secondary">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${pct}%` }}
            viewport={{ once: true }}
            className="h-full rounded-full bg-gradient-to-r from-glow-gold to-glow-gold-light"
          />
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {ACC_ONBOARDING.map((o, i) => (
          <motion.div
            key={o.label}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex items-center gap-2.5 rounded-lg border border-border bg-background/40 px-3 py-2.5"
          >
            {o.done ? (
              <CheckCircle2 className="h-4 w-4 text-glow-gold" />
            ) : (
              <span className="flex h-4 w-4 items-center justify-center rounded-full border border-border text-[10px] text-muted-foreground">
                ○
              </span>
            )}
            <span className={cn("text-sm", o.done ? "text-foreground" : "text-muted-foreground")}>
              {o.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* Client status dashboard */
export function AccStatusDashboard() {
  const stats = [
    { icon: Users, label: "Total Enquiries", value: "42" },
    { icon: CheckCircle2, label: "Qualified Leads", value: "28" },
    { icon: CalendarDays, label: "Consultations", value: "18" },
    { icon: UserPlus, label: "Onboarding", value: "7" },
    { icon: Briefcase, label: "Active Clients", value: "12" },
  ];
  const recent = [
    { name: "James Miller", service: "Business Accounting", status: "Qualified" },
    { name: "Sarah Lee", service: "Bookkeeping", status: "Consultation Booked" },
    { name: "David Chen", service: "Tax Support", status: "New Enquiry" },
  ];
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Building2 className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">dashboard.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo Dashboard
        </span>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
        {stats.map((s) => (
          <div key={s.label} className="rounded-xl border border-border bg-background/40 p-3">
            <s.icon className="h-4 w-4 text-glow-gold" />
            <p className="mt-2 font-display text-xl font-bold text-foreground">{s.value}</p>
            <p className="text-[10px] uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Recent Enquiries
        </p>
        <div className="space-y-2">
          {recent.map((r) => (
            <div
              key={r.name}
              className="flex items-center justify-between rounded-lg border border-border bg-background/40 px-3 py-2.5"
            >
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.service}</p>
              </div>
              <span className="rounded-full border border-glow-gold/30 bg-glow-gold/10 px-2.5 py-1 text-[10px] font-semibold text-glow-gold">
                {r.status}
              </span>
            </div>
          ))}
        </div>
      </div>
      <p className="mt-4 text-[10px] text-muted-foreground">
        Demo Dashboard — fictional numbers, not real business results.
      </p>
    </div>
  );
}

/* Real GoHighLevel proof — realistic screenshot previews */
export function AccGhlProof() {
  const cards = [
    {
      title: "CRM / Pipeline",
      desc: "Kanban pipeline tracking accounting leads from enquiry to active client.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/6f6fa220-ac58-4479-b360-33959eadfebe.png",
    },
    {
      title: "Workflow Automation",
      desc: "Trigger-based qualification, follow-up and onboarding flows.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/f99f24f6-92de-4a58-9952-97283b50ded4.png",
    },
    {
      title: "Form / Funnel",
      desc: "Consultation enquiry form wired directly into the CRM pipeline.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/541a850f-68e6-4777-bc9c-58ba70946505.png",
    },
    {
      title: "Calendar / Appointment",
      desc: "Online calendar sync with automated SMS & email reminders.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/95282e47-2b2a-4bbc-8054-e64572126b11.png",
    },
  ];
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {cards.map((c, i) => (
        <motion.div
          key={c.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.08 }}
          className="glass group overflow-hidden rounded-2xl p-4 transition-all hover:border-glow-gold/40"
        >
          <div className="relative aspect-video overflow-hidden rounded-xl border border-border bg-background/60">
            <img
              src={c.img}
              alt={c.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
            <span className="absolute right-2 top-2 rounded-full bg-background/70 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-glow-gold backdrop-blur-sm">
              Demo
            </span>
          </div>
          <div className="mt-3.5 flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-foreground">{c.title}</h3>
              <p className="mt-0.5 text-xs text-muted-foreground">{c.desc}</p>
            </div>
            <span className="shrink-0 rounded-full bg-glow-gold/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wider text-glow-gold">
              Implementation
            </span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

/* Complete system workflow diagram */
export function AccWorkflowDiagram() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">complete_system.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <div className="mt-6 flex flex-col items-center">
        <div className="flex w-full max-w-xs flex-col items-center gap-0">
          {ACC_SYSTEM_FLOW.map((s, i) => (
            <motion.div
              key={`${s.label}-${i}`}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex w-full flex-col items-center"
            >
              <div className="flex w-full items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-glow-gold/15 text-glow-gold">
                  <s.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-foreground">{s.label}</span>
              </div>
              {i < ACC_SYSTEM_FLOW.length - 1 && (
                <div className="my-1 h-5 w-px bg-gradient-to-b from-glow-gold/40 to-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
