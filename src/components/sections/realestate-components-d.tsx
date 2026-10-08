import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { CalendarCheck, CheckCircle2, MessageSquare, CalendarDays } from "lucide-react";
import { cn } from "@/lib/utils";
import { RE_REMINDERS, RE_SYSTEM_FLOW } from "./realestate-data";

/* Viewing calendar */
export function ReViewingCalendar() {
  const [selected, setSelected] = useState<string | null>(null);
  const slots = [
    { day: "Tuesday", time: "11:00 AM" },
    { day: "Tuesday", time: "3:00 PM" },
    { day: "Wednesday", time: "1:30 PM" },
    { day: "Thursday", time: "4:00 PM" },
  ];
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <CalendarDays className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">viewing_calendar.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <h3 className="mt-5 font-display text-base font-bold text-foreground">
        Schedule Property Viewing
      </h3>
      <p className="mt-1 text-xs text-muted-foreground">
        Modern 3-Bedroom Family Home · Manchester
      </p>
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
            <CalendarCheck className="h-4 w-4" />
            Viewing Confirmed — {selected}
          </motion.div>
        )}
      </AnimatePresence>
      <p className="mt-4 text-[10px] text-muted-foreground">
        CRM pipeline updated: Viewing Requested → Viewing Booked
      </p>
    </div>
  );
}

/* Viewing reminder timeline */
export function ReReminders() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">reminders.demo</span>
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
  const [action, setAction] = useState<string | null>(null);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <MessageSquare className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">post_viewing.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demonstration
        </span>
      </div>
      <div className="mt-5 flex items-center gap-2 rounded-lg border border-glow-gold/30 bg-glow-gold/5 px-4 py-2.5 text-sm font-semibold text-glow-gold">
        <CheckCircle2 className="h-4 w-4" />
        Viewing Completed
      </div>
      <div className="mt-4 rounded-xl border border-border bg-background/50 p-4">
        <p className="text-sm leading-relaxed text-foreground/90">
          “Hi Daniel, thanks for viewing the property today. Would you like more information or
          would you like to discuss the next step?”
        </p>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        {["Request More Information", "Speak With Agent", "View Another Property"].map((b) => (
          <button
            key={b}
            onClick={() => setAction(b)}
            className={cn(
              "rounded-full border px-3 py-2.5 text-xs font-semibold transition-all",
              action === b
                ? "border-glow-gold/60 bg-glow-gold/15 text-glow-gold"
                : "border-border bg-background/40 text-foreground hover:bg-secondary/50",
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
            className="mt-3 flex items-center gap-2 rounded-lg bg-glow-gold/10 px-3 py-2.5 text-xs font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-4 w-4" />
            Follow-up triggered — {action}
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
