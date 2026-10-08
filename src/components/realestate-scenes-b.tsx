import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  CalendarCheck,
  Clock,
  Bell,
  ArrowRight,
  CheckCircle2,
  Home,
  Send,
  Repeat,
  MessageSquare,
  LayoutTemplate,
  UserPlus,
  Database,
  UserCheck,
  Megaphone,
  MapPin,
  PoundSterling,
  BedDouble,
  Bath,
  Trees,
  Car,
} from "lucide-react";
import { ReWindowChrome } from "./realestate-scenes-a";

/* ------------------------------------------------------------------ */
/* Complete Real Estate Lead Automation Workflow — scenes 7–12.       */
/* Fictional "Modern 3-Bedroom Family Home" / "Daniel Carter" demo.     */
/* ------------------------------------------------------------------ */

/* Scene 7 — Property Match */
export function ReScene7({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showButton = local > 0.55;
  const clicked = local > 0.8;
  const features = [
    { icon: BedDouble, label: "3 Beds" },
    { icon: Bath, label: "2 Baths" },
    { icon: Trees, label: "Garden" },
    { icon: Car, label: "Parking" },
  ];
  return (
    <ReWindowChrome label="property_match.demo">
      <div className="flex h-full flex-col items-center justify-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-[260px] overflow-hidden rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-3.5"
        >
          <div className="mb-2 flex items-center gap-1.5">
            <Sparkles className="h-3 w-3 text-glow-gold" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
              Recommended Property Match
            </span>
          </div>
          <p className="text-sm font-bold text-foreground">Modern 3-Bedroom Family Home</p>
          <div className="mt-1 flex items-center gap-2 text-[9px] text-muted-foreground">
            <span className="flex items-center gap-1">
              <MapPin className="h-2.5 w-2.5" /> Manchester
            </span>
            <span className="flex items-center gap-1">
              <PoundSterling className="h-2.5 w-2.5" /> 450,000
            </span>
          </div>
          <div className="mt-2 grid grid-cols-4 gap-1">
            {features.map((f) => (
              <div
                key={f.label}
                className="flex flex-col items-center gap-0.5 rounded-md border border-border bg-background/50 py-1.5"
              >
                <f.icon className="h-3 w-3 text-glow-gold" />
                <span className="text-[8px] text-muted-foreground">{f.label}</span>
              </div>
            ))}
          </div>
          <AnimatePresence>
            {showButton && (
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  borderColor: clicked ? "var(--glow-gold)" : "var(--glow-gold)",
                  backgroundColor: clicked ? "var(--glow-gold)22" : "transparent",
                }}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold/40 py-2 text-[10px] font-semibold text-glow-gold"
              >
                Request Viewing <ArrowRight className="h-3 w-3" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Property Matched — Demo
        </p>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 8 — Agent Notification */
export function ReScene8({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const show = local > 0.2;
  return (
    <ReWindowChrome label="agent_notification.demo">
      <div className="flex h-full flex-col items-center justify-center">
        <AnimatePresence>
          {show && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full max-w-[260px] rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4"
            >
              <div className="mb-3 flex items-center gap-1.5">
                <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-glow-gold" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
                  New Qualified Property Lead
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-glow-gold/20 text-xs font-bold text-glow-gold">
                  DC
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Daniel Carter</p>
                  <p className="text-[10px] text-muted-foreground">3-Bedroom Family Home</p>
                </div>
              </div>
              <div className="mt-3 space-y-1.5 text-[10px]">
                {[
                  { l: "Budget", v: "£450,000" },
                  { l: "Location", v: "Manchester" },
                  { l: "Status", v: "Qualified" },
                ].map((r) => (
                  <div
                    key={r.l}
                    className="flex items-center justify-between rounded-md border border-border bg-background/50 px-2 py-1.5"
                  >
                    <span className="text-[8px] uppercase tracking-wider text-muted-foreground">
                      {r.l}
                    </span>
                    <span className="font-medium text-foreground">{r.v}</span>
                  </div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: local > 0.6 ? 1 : 0, y: 0 }}
                className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold/40 bg-glow-gold/10 py-2 text-[10px] font-semibold text-glow-gold"
              >
                Open Lead <ArrowRight className="h-3 w-3" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Agent Notified — Demo
        </p>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 9 — Viewing Calendar */
export function ReScene9({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const slots = [
    { day: "Tuesday", time: "11:00 AM" },
    { day: "Tuesday", time: "3:00 PM" },
    { day: "Wednesday", time: "1:30 PM" },
  ];
  const selectedIdx = Math.min(slots.length - 1, Math.floor((local - 0.25) * 3));
  const confirmed = local > 0.8;
  return (
    <ReWindowChrome label="calendar.realestate.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Schedule Property Viewing — Demo Calendar
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
              <span className="text-[10px] font-semibold text-foreground">Available Slots</span>
            </div>
            <div className="space-y-1.5">
              {slots.map((s, i) => {
                const sel = i === selectedIdx && local > 0.25;
                return (
                  <motion.div
                    key={`${s.day}-${s.time}`}
                    animate={{
                      borderColor: sel ? "var(--glow-gold)" : "var(--border)",
                      backgroundColor: sel ? "var(--glow-gold)1a" : "transparent",
                    }}
                    className="flex items-center justify-between rounded-md border px-3 py-2 text-[10px] font-semibold"
                    style={{ color: sel ? "var(--glow-gold)" : "var(--foreground)" }}
                  >
                    <span>{s.day}</span>
                    <span>{s.time}</span>
                  </motion.div>
                );
              })}
            </div>
            <AnimatePresence>
              {confirmed && (
                <motion.div
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold-light/40 bg-glow-gold-light/10 py-2 text-[10px] font-semibold text-glow-gold-light"
                >
                  <CheckCircle2 className="h-3.5 w-3.5" /> Viewing Confirmed — Wed 1:30 PM
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 10 — CRM Pipeline Update */
const RE_PIPELINE_STAGES = ["New Lead", "Contacted", "Qualified", "Matched", "Booked"];

export function ReScene10({ local }: { local: number }) {
  const activeStage = Math.min(
    RE_PIPELINE_STAGES.length - 1,
    Math.floor(local * RE_PIPELINE_STAGES.length),
  );
  return (
    <ReWindowChrome label="crm_pipeline.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Pipeline Update — Demo Data
        </p>
        <div className="grid flex-1 grid-cols-2 gap-2 sm:grid-cols-5">
          {RE_PIPELINE_STAGES.map((stage, i) => {
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
                        <p className="text-[9px] font-medium text-foreground">Daniel C.</p>
                        <p className="text-[8px] text-muted-foreground">3-Bed Home</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
        {activeStage === 4 && (
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold/40 bg-glow-gold/10 py-2 text-[10px] font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> Viewing Booked
          </motion.div>
        )}
      </div>
    </ReWindowChrome>
  );
}

/* Scene 11 — Reminders */
const RE_REMINDERS = [
  {
    icon: CalendarCheck,
    label: "Viewing Booked",
    msg: "Your property viewing is booked for Wednesday, 1:30 PM.",
  },
  {
    icon: Clock,
    label: "24 Hours Before",
    msg: "Reminder: your property viewing is tomorrow at 1:30 PM.",
  },
  {
    icon: Bell,
    label: "2 Hours Before",
    msg: "Your property viewing is coming up today at 1:30 PM.",
  },
  { icon: Home, label: "Viewing Time", msg: "Pipeline stage → Viewing Completed." },
];

export function ReScene11({ local }: { local: number }) {
  const activeIdx = Math.min(RE_REMINDERS.length - 1, Math.floor(local * RE_REMINDERS.length));
  return (
    <ReWindowChrome label="reminders.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Automated Reminders — Demonstration
        </p>
        <div className="flex flex-1 flex-col gap-0">
          {RE_REMINDERS.map((r, i) => {
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
                  {i < RE_REMINDERS.length - 1 && (
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
    </ReWindowChrome>
  );
}

/* Scene 12 — Post-Viewing Follow-Up */
const POST_VIEWING_FLOW = [
  { icon: CheckCircle2, label: "Viewing Completed" },
  { icon: Send, label: "Thank You Message" },
  { icon: MessageSquare, label: "Next Step Offered" },
  { icon: Repeat, label: "Ongoing Follow-Up" },
];

export function ReScene12({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(
    POST_VIEWING_FLOW.length - 1,
    Math.floor(local * POST_VIEWING_FLOW.length),
  );
  return (
    <ReWindowChrome label="followup.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Post-Viewing Follow-Up — Demonstration
        </p>
        <div className="flex flex-1 flex-col gap-0">
          {POST_VIEWING_FLOW.map((f, i) => {
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
                  {i < POST_VIEWING_FLOW.length - 1 && (
                    <motion.div
                      className="my-0.5 w-px flex-1"
                      animate={{ backgroundColor: lit ? "var(--glow-gold)" : "var(--border)" }}
                    />
                  )}
                </div>
                <div className="pb-3">
                  <p className="text-[11px] font-bold text-foreground">{f.label}</p>
                  {i === 1 && lit && (
                    <motion.p
                      initial={reduce ? false : { opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="mt-0.5 font-mono text-[9px] text-muted-foreground"
                    >
                      "Thanks for viewing — would you like more information?"
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
              <Repeat className="h-3.5 w-3.5" /> Follow-Up Sequence Active
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 13 — Complete Workflow */
const RE_SYSTEM_FLOW = [
  { icon: Megaphone, label: "Property Ad" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: UserPlus, label: "Enquiry Form" },
  { icon: Database, label: "CRM" },
  { icon: UserCheck, label: "Qualification" },
  { icon: Home, label: "Property Match" },
  { icon: Bell, label: "Agent" },
  { icon: CalendarCheck, label: "Viewing" },
  { icon: Clock, label: "Reminder" },
  { icon: Repeat, label: "Follow-Up" },
];

export function ReScene13({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(RE_SYSTEM_FLOW.length - 1, Math.floor(local * RE_SYSTEM_FLOW.length));
  return (
    <ReWindowChrome label="complete_system.demo">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[200px] flex-col items-center">
          {RE_SYSTEM_FLOW.map((s, i) => {
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
                {i < RE_SYSTEM_FLOW.length - 1 && (
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
                From Property Enquiry to Viewing
              </p>
              <p className="mt-1 text-[9px] text-muted-foreground">
                Real Estate Automation Portfolio Demonstration — Fictional data
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ReWindowChrome>
  );
}

export const RE_SCENES_B = [
  ReScene7,
  ReScene8,
  ReScene9,
  ReScene10,
  ReScene11,
  ReScene12,
  ReScene13,
];
