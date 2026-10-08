import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  Bell,
  Store,
  CheckCircle2,
  Send,
  MessageSquare,
  Repeat,
  Smartphone,
  LayoutTemplate,
  Scissors,
  ClipboardList,
  Database,
  ArrowRight,
  Image as ImageIcon,
  Upload,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  SALON_REMINDERS,
  SALON_TODAY,
  SALON_POST_VISIT,
  SALON_SYSTEM_FLOW,
  SALON_BENEFITS,
  SALON_TECH,
  SALON_PROBLEMS,
} from "./salon-data";

/* Problem cards */
export function SalonProblems() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SALON_PROBLEMS.map((p, i) => (
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

/* Reminder timeline */
export function SalonReminders() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">reminders.salon.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demonstration
        </span>
      </div>
      <div className="mt-5 flex flex-col">
        {SALON_REMINDERS.map((r, i) => (
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
              {i < SALON_REMINDERS.length - 1 && (
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

/* Today's appointments dashboard */
export function SalonDayDashboard() {
  const [selected, setSelected] = useState<number | null>(null);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="font-display text-base font-bold text-foreground">Today's Appointments</h3>
          <p className="text-xs text-muted-foreground">Fictional demo data</p>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo
        </span>
      </div>
      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {SALON_TODAY.map((a, i) => {
          const sel = selected === i;
          const tone =
            a.status === "Completed"
              ? "var(--muted-foreground)"
              : a.status === "Confirmed"
                ? "var(--glow-gold)"
                : "var(--glow-gold-light)";
          return (
            <button
              key={a.name}
              onClick={() => setSelected(sel ? null : i)}
              className={cn(
                "flex flex-col gap-2 rounded-xl border p-4 text-left transition-all",
                sel
                  ? "border-glow-gold/50 bg-glow-gold/10"
                  : "border-border bg-background/40 hover:bg-secondary/50",
              )}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold text-foreground">{a.time}</span>
                <span
                  className="rounded-full px-2 py-0.5 text-[9px] font-semibold"
                  style={{ background: `${tone}22`, color: tone }}
                >
                  {a.status}
                </span>
              </div>
              <p className="text-sm font-semibold text-foreground">{a.service}</p>
              <p className="text-xs text-muted-foreground">{a.name}</p>
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden"
          >
            <div className="mt-4 rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4">
              <p className="text-xs font-semibold text-glow-gold">Appointment Details</p>
              <div className="mt-2 grid grid-cols-2 gap-2 text-xs">
                <div>
                  <span className="text-muted-foreground">Customer: </span>
                  <span className="font-medium text-foreground">{SALON_TODAY[selected].name}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Service: </span>
                  <span className="font-medium text-foreground">
                    {SALON_TODAY[selected].service}
                  </span>
                </div>
                <div>
                  <span className="text-muted-foreground">Time: </span>
                  <span className="font-medium text-foreground">{SALON_TODAY[selected].time}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Status: </span>
                  <span className="font-medium text-foreground">
                    {SALON_TODAY[selected].status}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* Post-appointment follow-up */
export function SalonPostVisit() {
  const reduce = useReducedMotion();
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">follow_up.salon.demo</span>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demonstration
        </span>
      </div>
      <div className="mt-5 flex flex-col">
        {SALON_POST_VISIT.map((s, i) => (
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
              {i < SALON_POST_VISIT.length - 1 && (
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
    </div>
  );
}

/* Rebooking automation */
export function SalonRebooking() {
  const [booked, setBooked] = useState(false);
  return (
    <div className="glass-strong rounded-2xl p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Repeat className="h-4 w-4 text-glow-gold" />
          <span className="font-mono text-xs text-muted-foreground">rebooking.salon.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Unique Feature
        </span>
      </div>
      <div className="mt-5">
        <div className="rounded-xl border border-border bg-background/40 p-4">
          <p className="text-xs font-semibold text-muted-foreground">System status</p>
          <p className="mt-1 text-sm font-medium text-foreground">Customer has not booked again.</p>
        </div>
        <div className="mt-3 flex items-center justify-center">
          <ArrowRight className="h-5 w-5 rotate-90 text-glow-gold" />
        </div>
        <div className="mt-3 rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4">
          <p className="text-xs font-semibold text-glow-gold">Rebooking Follow-Up</p>
          <p className="mt-2 text-sm leading-relaxed text-foreground/90">
            "Hi Emma, it's been a while since your last visit. Would you like to book your next
            appointment?"
          </p>
        </div>
        <AnimatePresence mode="wait">
          {!booked ? (
            <motion.div
              key="buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-4 flex gap-2"
            >
              <button
                onClick={() => setBooked(true)}
                className="flex-1 rounded-full bg-primary py-2.5 text-sm font-semibold text-primary-foreground transition hover:brightness-105"
              >
                Book Appointment
              </button>
              <button className="flex-1 rounded-full border border-border bg-background/40 py-2.5 text-sm font-semibold text-muted-foreground transition hover:text-foreground">
                Not Now
              </button>
            </motion.div>
          ) : (
            <motion.div
              key="confirmed"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 flex items-center gap-2 rounded-lg bg-glow-gold/15 px-4 py-3 text-sm font-semibold text-glow-gold"
            >
              <CheckCircle2 className="h-4 w-4" />
              Rebooking triggered → calendar opened
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

/* Real GoHighLevel proof — realistic screenshot previews */
export function SalonGhlProof() {
  const cards = [
    {
      title: "Workflow Builder",
      desc: "Visual trigger & multi-step follow-up automation builder.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/7add1638-9116-404c-97af-a3f8eb6c7964.png",
    },
    {
      title: "CRM Opportunity Pipeline",
      desc: "Kanban pipeline tracking leads from Enquiry to Rebooked.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/4296cfaf-6a4f-4664-a669-b09b546f3f0c.png",
    },
    {
      title: "Lead Capture & Funnel Builder",
      desc: "Custom booking form wired directly into automated sequences.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/5304491c-f874-44db-9a0f-1df262016353.png",
    },
    {
      title: "Appointment Calendar",
      desc: "Online calendar sync with automatic SMS & email reminders.",
      img: "https://vibe.filesafe.space/1790832248517648215/assets/b1b8060c-b47a-4dfc-aede-e6326b4759a4.png",
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
export function SalonWorkflowDiagram() {
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
          {SALON_SYSTEM_FLOW.map((s, i) => (
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
              {i < SALON_SYSTEM_FLOW.length - 1 && (
                <div className="my-1 h-5 w-px bg-gradient-to-b from-glow-gold/40 to-border" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* Video demo — placeholder player */
export function SalonVideoDemo() {
  const [playing, setPlaying] = useState(false);
  return (
    <div className="glass-strong overflow-hidden rounded-2xl">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-glow-gold/10 via-glow-purple/5 to-transparent">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        {!playing ? (
          <button
            onClick={() => setPlaying(true)}
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
          >
            <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-6px_var(--glow-gold)] transition-transform hover:scale-110">
              <svg className="h-6 w-6 translate-x-0.5 fill-current" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <span className="rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">
              Play Demo · ~2 min
            </span>
          </button>
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
            <div className="flex h-10 items-center gap-1">
              {Array.from({ length: 7 }).map((_, i) => (
                <motion.span
                  key={i}
                  className="w-1 rounded-full bg-glow-gold"
                  animate={{ height: [6, 18 + ((i * 7) % 14), 6] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.08 }}
                />
              ))}
            </div>
            <p className="text-sm font-semibold text-foreground">
              Complete Salon Automation Workflow
            </p>
            <p className="max-w-xs text-xs text-muted-foreground">
              Video placeholder — upload the actual walkthrough to replace this preview.
            </p>
          </div>
        )}
        <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold backdrop-blur-sm">
          Portfolio Demonstration
        </span>
      </div>
      <div className="flex items-center gap-3 border-t border-border px-4 py-3">
        <button
          onClick={() => setPlaying((p) => !p)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground"
        >
          {playing ? (
            <svg className="h-3.5 w-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          ) : (
            <svg className="h-3.5 w-3.5 translate-x-0.5 fill-current" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
        <div className="h-1.5 flex-1 rounded-full bg-secondary">
          <div className="h-full w-0 rounded-full bg-gradient-to-r from-glow-gold to-glow-gold-light" />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">0:00 / 2:00</span>
      </div>
    </div>
  );
}

/* Benefits grid */
export function SalonBenefits() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {SALON_BENEFITS.map((b, i) => (
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
export function SalonTech() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {SALON_TECH.map((t, i) => (
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
