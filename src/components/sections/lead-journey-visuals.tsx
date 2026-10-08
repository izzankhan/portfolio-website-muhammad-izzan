import { motion, useReducedMotion } from "framer-motion";
import {
  Megaphone,
  Smartphone,
  CheckCircle2,
  Bell,
  Sparkles,
  CalendarCheck,
  ArrowDown,
} from "lucide-react";
import type { Stage } from "./lead-journey-data";
import { cn } from "@/lib/utils";

/* Per-stage mini visual rendered inside the active stage card. */
export function StageVisual({ stage }: { stage: Stage }) {
  const reduce = useReducedMotion();

  switch (stage.num) {
    case "01":
      return (
        <div className="flex w-full flex-col gap-2">
          <div className="flex items-center gap-2 rounded-lg border border-border bg-background/60 p-2.5">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-glow-blue/15 text-glow-blue">
              <Megaphone className="h-3.5 w-3.5" />
            </span>
            <div className="h-2 w-16 rounded-full bg-foreground/15" />
            <span className="ml-auto h-2 w-8 rounded-full bg-glow-gold/40" />
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex items-center gap-1.5 rounded-lg border border-glow-gold/30 bg-glow-gold/10 p-2"
          >
            <Smartphone className="h-3.5 w-3.5 text-glow-gold" />
            <span className="text-[10px] font-medium text-foreground">Ad seen · click</span>
            <motion.span
              className="ml-auto h-3 w-3 rounded-full bg-glow-gold"
              animate={reduce ? {} : { scale: [1, 1.4, 1], opacity: [1, 0.5, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
            />
          </motion.div>
        </div>
      );
    case "02":
      return (
        <div className="w-full space-y-1.5">
          <div className="h-2 w-3/4 rounded-full bg-foreground/20" />
          <div className="h-1.5 w-full rounded-full bg-foreground/10" />
          <div className="h-1.5 w-2/3 rounded-full bg-foreground/10" />
          <div className="flex gap-1.5 pt-1">
            {["Offer", "Trust", "CTA"].map((t, i) => (
              <motion.span
                key={t}
                initial={reduce ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                className="rounded-md bg-glow-gold/15 px-2 py-1 text-[9px] font-semibold text-glow-gold"
              >
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      );
    case "03":
      return (
        <div className="w-full space-y-1.5">
          {["Name · Alex Morgan", "Email · alex@example.com", "Interest · Consultation"].map(
            (f) => (
              <div
                key={f}
                className="flex items-center gap-1.5 rounded-md border border-border bg-background/60 px-2 py-1.5"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-glow-gold/60" />
                <span className="text-[10px] text-muted-foreground">{f}</span>
              </div>
            ),
          )}
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 rounded-md bg-glow-gold/15 px-2 py-1.5 text-[10px] font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-3 w-3" /> New Lead Captured
          </motion.div>
        </div>
      );
    case "04":
      return (
        <div className="w-full">
          <div className="mb-1.5 flex items-center justify-between">
            <span className="font-mono text-[9px] text-muted-foreground">crm.demo</span>
            <span className="rounded-full bg-glow-blue/15 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-glow-blue">
              Demo
            </span>
          </div>
          <div className="flex gap-1">
            {["New", "Contacted", "Qualified", "Appt", "Won"].map((s, i) => (
              <div
                key={s}
                className={cn(
                  "flex-1 rounded-md border px-1 py-1 text-center text-[8px] font-medium",
                  i === 0
                    ? "border-glow-gold/40 bg-glow-gold/15 text-glow-gold"
                    : "border-border bg-background/40 text-muted-foreground",
                )}
              >
                {s}
              </div>
            ))}
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-1.5 flex items-center gap-1.5 rounded-md bg-glow-gold/10 px-2 py-1 text-[10px] font-semibold text-glow-gold"
          >
            <Bell className="h-3 w-3" /> New Lead Added
          </motion.div>
        </div>
      );
    case "05":
      return (
        <div className="w-full space-y-1.5">
          <div className="rounded-md rounded-bl-none border border-border bg-background/60 px-2 py-1.5 text-[10px] text-muted-foreground">
            I'm interested in booking a consultation.
          </div>
          <div className="flex items-start gap-1.5">
            <Sparkles className="mt-0.5 h-3 w-3 shrink-0 text-glow-purple" />
            <div className="flex-1 rounded-md rounded-br-none border border-glow-purple/30 bg-glow-purple/10 px-2 py-1.5 text-[10px] text-foreground">
              Absolutely. I can help you with that.
            </div>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-1.5 text-[10px] font-semibold text-glow-purple"
          >
            <span className="flex gap-0.5">
              {[0, 1, 2].map((d) => (
                <motion.span
                  key={d}
                  className="h-1.5 w-1.5 rounded-full bg-glow-purple"
                  animate={reduce ? {} : { opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1, repeat: Infinity, delay: d * 0.2 }}
                />
              ))}
            </span>
            Lead Qualified ✓
          </motion.div>
        </div>
      );
    case "06":
      return (
        <div className="w-full space-y-1.5">
          <div className="flex gap-1.5">
            {["SMS", "EMAIL", "WHATSAPP"].map((c, i) => (
              <motion.div
                key={c}
                initial={reduce ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.12 }}
                className="flex-1 rounded-md border border-border bg-background/60 px-1.5 py-1.5 text-center text-[9px] font-semibold text-foreground"
              >
                {c}
              </motion.div>
            ))}
          </div>
          <div className="rounded-md bg-glow-gold/10 px-2 py-1 text-[10px] text-foreground">
            “Hi Alex, thanks for your interest.”
          </div>
          <div className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
            <Bell className="h-3 w-3" /> Follow-Up #2 Scheduled
          </div>
        </div>
      );
    case "07": {
      const days = ["S", "M", "T", "W", "T", "F", "S"];
      const cells = Array.from({ length: 35 });
      const selected = 16; // the selected day number (demo)
      return (
        <div className="w-full">
          {/* Calendar header */}
          <div className="mb-2 flex items-center justify-between">
            <span className="text-[10px] font-bold text-foreground">October 2026</span>
            <span className="rounded-full bg-glow-gold/15 px-1.5 py-0.5 text-[8px] font-semibold uppercase text-glow-gold">
              Demo
            </span>
          </div>
          {/* Day labels */}
          <div className="grid grid-cols-7 gap-0.5">
            {days.map((d, i) => (
              <div
                key={i}
                className="text-center text-[7px] font-semibold uppercase text-muted-foreground/60"
              >
                {d}
              </div>
            ))}
          </div>
          {/* Calendar grid */}
          <div className="mt-1 grid grid-cols-7 gap-0.5">
            {cells.map((_, i) => {
              const day = i - 2; // start offset so the 1st lands on a Thursday
              const isValid = day >= 1 && day <= 31;
              const isSelected = day === selected;
              return (
                <motion.div
                  key={i}
                  initial={reduce ? false : { scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: Math.min(i * 0.01, 0.3) }}
                  className={cn(
                    "flex aspect-square items-center justify-center rounded-md text-[8px] font-medium",
                    !isValid
                      ? "bg-transparent text-transparent"
                      : isSelected
                        ? "bg-glow-gold font-bold text-background shadow-[0_0_12px_-2px_var(--glow-gold)]"
                        : "bg-foreground/8 text-muted-foreground",
                  )}
                >
                  {isValid ? day : ""}
                </motion.div>
              );
            })}
          </div>
          {/* Selected slot + confirmation */}
          <div className="mt-2 flex items-center gap-1.5 rounded-md border border-glow-gold/30 bg-glow-gold/10 px-2 py-1.5">
            <CalendarCheck className="h-3 w-3 shrink-0 text-glow-gold" />
            <span className="text-[10px] font-semibold text-glow-gold">Oct 16 · 2:30 PM</span>
          </div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-1.5 flex items-center gap-1.5 rounded-md bg-glow-gold/15 px-2 py-1 text-[10px] font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-3 w-3" /> Consultation Confirmed ✓
          </motion.div>
        </div>
      );
    }
    case "08":
      return (
        <div className="flex w-full flex-col items-center gap-1.5">
          <motion.div
            initial={reduce ? false : { scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative flex h-12 w-12 items-center justify-center rounded-full bg-glow-gold/15"
          >
            <motion.span
              className="absolute inset-0 rounded-full border border-glow-gold/40"
              animate={reduce ? {} : { scale: [1, 1.6], opacity: [0.6, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
            />
            <CheckCircle2 className="h-7 w-7 text-glow-gold" />
          </motion.div>
          <div className="flex items-center gap-1 text-[9px] font-medium text-muted-foreground">
            Lead <ArrowDown className="h-2.5 w-2.5" /> Qualified
            <ArrowDown className="h-2.5 w-2.5" /> Appt
            <ArrowDown className="h-2.5 w-2.5" /> Customer
          </div>
        </div>
      );
    default:
      return null;
  }
}
