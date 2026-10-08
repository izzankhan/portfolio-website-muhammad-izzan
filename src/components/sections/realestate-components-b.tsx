import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  Bell,
  CheckCircle2,
  Send,
  MessageSquare,
  Repeat,
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Database,
  UserCheck,
  ArrowRight,
  Smartphone,
  ClipboardList,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  RE_REMINDERS,
  RE_POST_VIEWING,
  RE_SYSTEM_FLOW,
  RE_BENEFITS,
  RE_TECH,
  RE_PROBLEMS,
} from "./realestate-data";

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

/* Viewing calendar */
export function ReViewingCalendar() {
  const [slot, setSlot] = useState<string | null>(null);
  const [day, setDay] = useState<string | null>(null);
  const days = ["Tuesday", "Wednesday", "Thursday"];
  const slots: Record<string, string[]> = {
    Tuesday: ["11:00 AM", "3:00 PM"],
    Wednesday: ["1:30 PM"],
    Thursday: ["4:00 PM"],
  };
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">calendar.realestate.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo Calendar
        </span>
      </div>
      <div className="mt-5">
        <p className="text-xs font-semibold text-foreground">
          Property: Modern 3-Bedroom Family Home
        </p>
        <p className="mt-3 text-xs font-semibold text-foreground">Select a day</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
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
              Viewing Confirmed — {day}, {slot}
              <span className="rounded-full bg-glow-gold/20 px-2.5 py-1 text-[10px]">
                Pipeline → Viewing Booked
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Viewing reminder timeline */
export function ReReminders() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">reminders.realestate.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demonstration
        </span>
      </div>
      <div className="mt-5 flex flex-col">
        {RE_REMINDERS.map((r, i) => (
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
              {i < RE_REMINDERS.length - 1 && (
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
    </div>
  );
}

/* Post-viewing follow-up */
export function RePostViewing() {
  const reduce = useReducedMotion();
  const [action, setAction] = useState<string | null>(null);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">followup.realestate.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demonstration
        </span>
      </div>
      <div className="mt-5 flex flex-col">
        {RE_POST_VIEWING.map((s, i) => (
          <div key={s.label} className="flex gap-4">
            <div className="flex flex-col items-center">
              <motion.span
                initial={reduce ? false : { scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-glow-gold/15 text-glow-gold"
              >
                <s.icon className="h-5 w-5" />
              </motion.span>
              {i < RE_POST_VIEWING.length - 1 && (
                <div className="my-1 w-px flex-1 bg-gradient-to-b from-glow-gold/40 to-border" />
              )}
            </div>
            <div className="pb-6">
              <p className="text-sm font-bold text-foreground">{s.label}</p>
              <p className="mt-1 font-mono text-xs leading-relaxed text-muted-foreground">
                {s.msg}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-2 flex flex-wrap gap-2">
        {["Request More Information", "Speak With Agent", "View Another Property"].map((b) => (
          <button
            key={b}
            onClick={() => setAction(b)}
            className={cn(
              "rounded-full border px-4 py-2 text-xs font-semibold transition-all",
              action === b
                ? "border-glow-gold/50 bg-glow-gold/15 text-glow-gold"
                : "border-border bg-background/40 text-foreground hover:bg-secondary",
            )}
          >
            {b}
          </button>
        ))}
      </div>
      <AnimatePresence>
        {action && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center gap-2 rounded-lg bg-glow-gold/15 px-3 py-2.5 text-xs font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-4 w-4" />
            {action} — follow-up triggered
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Real GoHighLevel proof — realistic screenshot previews */
export function ReGhlProof() {
  const cards = [
    {
      title: "CRM Opportunity Pipeline",
      desc: "Kanban pipeline tracking property leads from enquiry to follow-up.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/6f6fa220-ac58-4479-b360-33959eadfebe.png",
    },
    {
      title: "Workflow Automation",
      desc: "Trigger-based qualification, property match & agent notification flows.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/f99f24f6-92de-4a58-9952-97283b50ded4.png",
    },
    {
      title: "Lead Capture & Form Builder",
      desc: "Property enquiry form wired directly into the CRM pipeline.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/541a850f-68e6-4777-bc9c-58ba70946505.png",
    },
    {
      title: "Viewing Calendar",
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
              className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
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
export function ReWorkflowDiagram() {
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
          {RE_SYSTEM_FLOW.map((s, i) => (
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
              {i < RE_SYSTEM_FLOW.length - 1 && (
                <div className="my-1 h-5 w-px bg-gradient-to-b from-glow-gold/40 to-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Benefits grid */
export function ReBenefits() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {RE_BENEFITS.map((b, i) => (
        <motion.div
          key={b.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.08 }}
          className="glass rounded-2xl p-5"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-gold/10 text-glow-gold">
            <b.icon className="h-5 w-5" />
          </span>
          <h3 className="mt-4 font-display text-base font-bold text-foreground">{b.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

/* Technology badges */
export function ReTech() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {RE_TECH.map((t, i) => (
        <motion.span
          key={t}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="rounded-full border border-border bg-background/40 px-4 py-2 text-sm font-medium text-foreground/90"
        >
          {t}
        </motion.span>
      ))}
    </div>
  );
}
