import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  UserPlus,
  Database,
  GitBranch,
  Mail,
  Clock,
  MessageSquare,
  Bell,
  CheckCircle2,
  Users,
  Workflow,
  Target,
  Calendar,
  ArrowRight,
  Cpu,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Cinematic GoHighLevel demo — scene components.                      */
/* Each scene receives `local` (0..1 progress within that scene).      */
/* ------------------------------------------------------------------ */

function WindowChrome({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </span>
          <span className="ml-1 font-mono text-[10px] text-muted-foreground">{label}</span>
        </div>
        <span className="rounded-full bg-glow-blue/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-glow-blue">
          Demonstration
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden p-4">{children}</div>
    </div>
  );
}

export function Scene1({ local }: { local: number }) {
  const reduce = useReducedMotion();
  return (
    <WindowChrome label="crm.izzankhan.demo">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-glow-blue/15 text-glow-blue shadow-[0_0_40px_-8px_var(--glow-blue)]"
        >
          <Workflow className="h-8 w-8" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: local > 0.1 ? 1 : 0, y: local > 0.1 ? 0 : 12 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl font-bold text-foreground sm:text-2xl"
        >
          GoHighLevel Automation Demo
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: local > 0.25 ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground"
        >
          A complete automated customer journey — from a new lead to a booked appointment — built
          inside a CRM and workflow system.
        </motion.p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["Lead", "CRM", "Workflow", "Follow-Up", "Appointment"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: local > 0.4 + i * 0.08 ? 1 : 0,
                y: local > 0.4 + i * 0.08 ? 0 : 8,
              }}
              className="rounded-full glass px-3 py-1 text-[10px] font-medium text-muted-foreground"
            >
              {t}
            </motion.span>
          ))}
        </div>
      </div>
    </WindowChrome>
  );
}

export function Scene2({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const show = local > 0.15;
  return (
    <WindowChrome label="crm.izzankhan.demo">
      <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background/50 p-4">
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: -20, scale: 0.85 }}
            animate={show ? { opacity: 1, y: 0, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="w-full max-w-[220px] rounded-xl border border-glow-blue/30 bg-glow-blue/5 p-3.5"
          >
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-glow-blue/20 text-xs font-bold text-glow-blue">
                SM
              </span>
              <div>
                <p className="text-sm font-semibold text-foreground">Sarah M.</p>
                <p className="text-[10px] text-muted-foreground">Dental Inquiry</p>
              </div>
            </div>
            <div className="mt-3 space-y-1 text-[10px] text-muted-foreground">
              <p>Phone: +1 (555) 014-2231</p>
              <p>Email: sarah.m@email.com</p>
              <p>Source: Meta Ads</p>
            </div>
          </motion.div>
          <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-glow-blue">
            New Lead
          </p>
        </div>
        <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background/50 p-4">
          <AnimatePresence mode="wait">
            {show && (
              <motion.div
                key="contact"
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex w-full max-w-[220px] flex-col items-center rounded-xl border border-glow-cyan/30 bg-glow-cyan/5 p-3.5"
              >
                <Database className="h-7 w-7 text-glow-cyan" />
                <p className="mt-2 text-sm font-semibold text-foreground">CRM Contact</p>
                <p className="mt-1 text-[10px] text-muted-foreground">Captured & organized</p>
                <div className="mt-3 flex w-full items-center justify-between rounded-md bg-background/60 px-2.5 py-1.5">
                  <span className="text-[10px] text-muted-foreground">Status</span>
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-glow-cyan">
                    <CheckCircle2 className="h-3 w-3" /> Created
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 sm:block"
        animate={show ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 1.2, repeat: show ? Infinity : 0, repeatDelay: 0.5 }}
      >
        <ArrowRight className="h-5 w-5 text-glow-blue" />
      </motion.div>
    </WindowChrome>
  );
}

const PIPELINE_STAGES = ["New Lead", "Contacted", "Qualified", "Follow-Up", "Appointment", "Won"];

export function Scene3({ local }: { local: number }) {
  const activeStage = Math.min(
    PIPELINE_STAGES.length - 1,
    Math.floor(local * PIPELINE_STAGES.length),
  );
  return (
    <WindowChrome label="crm_pipeline.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Pipeline — Demo Data
        </p>
        <div className="grid flex-1 grid-cols-3 gap-2 sm:grid-cols-6">
          {PIPELINE_STAGES.map((stage, i) => {
            const lit = i <= activeStage;
            const isCurrent = i === activeStage;
            return (
              <div key={stage} className="flex flex-col">
                <div className="mb-2 flex items-center gap-1.5" style={{ opacity: lit ? 1 : 0.4 }}>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: lit ? "var(--glow-blue)" : "var(--border)",
                      boxShadow: lit ? "0 0 8px var(--glow-blue)" : "none",
                    }}
                  />
                  <span className="text-[9px] font-semibold text-foreground">{stage}</span>
                </div>
                <div className="flex flex-1 flex-col gap-1.5">
                  <AnimatePresence>
                    {i === 0 && (
                      <motion.div
                        key="lead"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="rounded-md border border-glow-blue/30 bg-glow-blue/5 p-1.5"
                      >
                        <p className="text-[9px] font-medium text-foreground">Sarah M.</p>
                        <p className="text-[8px] text-muted-foreground">Dental</p>
                      </motion.div>
                    )}
                    {lit && i > 0 && (
                      <motion.div
                        key={`card-${i}`}
                        initial={{ opacity: 0, x: -16, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 0.4 }}
                        className="rounded-md border p-1.5"
                        style={{
                          borderColor: isCurrent ? "var(--glow-blue)" : "var(--border)",
                          background: isCurrent ? "var(--glow-blue)1a" : "var(--background)",
                        }}
                      >
                        <p className="text-[9px] font-medium text-foreground">Sarah M.</p>
                        <p className="text-[8px] text-muted-foreground">Dental</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {PIPELINE_STAGES.map((s, i) => (
            <span
              key={s}
              className={`h-1 rounded-full transition-all duration-300 ${
                i <= activeStage ? "bg-glow-blue" : "bg-border"
              }`}
              style={{ width: i === activeStage ? 24 : 8 }}
            />
          ))}
        </div>
      </div>
    </WindowChrome>
  );
}

const WORKFLOW_NODES = [
  { icon: UserPlus, label: "Trigger: New Lead Created", tone: "var(--glow-blue)" },
  { icon: Database, label: "Create / Update Contact", tone: "var(--glow-cyan)" },
  { icon: GitBranch, label: "Add to Pipeline", tone: "var(--glow-purple)" },
  { icon: Mail, label: "Send Message", tone: "var(--glow-blue)" },
  { icon: Clock, label: "Wait", tone: "var(--glow-cyan)" },
  { icon: MessageSquare, label: "Follow Up", tone: "var(--glow-purple)" },
  { icon: Bell, label: "Notify Team", tone: "var(--glow-cyan)" },
];

export function Scene4({ local }: { local: number }) {
  const activeIdx = Math.min(WORKFLOW_NODES.length - 1, Math.floor(local * WORKFLOW_NODES.length));
  return (
    <WindowChrome label="workflow_builder.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Workflow Builder — Demonstration
        </p>
        <div className="flex flex-1 flex-col items-center gap-0 overflow-y-auto">
          {WORKFLOW_NODES.map((node, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={node.label} className="flex w-full flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: lit ? 1 : 0.35, scale: lit ? 1 : 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full max-w-[280px] items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2"
                  style={{
                    borderColor: lit ? node.tone : "var(--border)",
                    boxShadow: lit && i === activeIdx ? `0 0 20px -6px ${node.tone}` : "none",
                  }}
                >
                  <span
                    className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                    style={{ background: `${node.tone}22`, color: node.tone }}
                  >
                    <node.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11px] font-medium text-foreground">{node.label}</span>
                  {i === 0 && (
                    <span className="ml-auto rounded-full bg-glow-blue/15 px-2 py-0.5 text-[8px] font-bold uppercase text-glow-blue">
                      Trigger
                    </span>
                  )}
                </motion.div>
                {i < WORKFLOW_NODES.length - 1 && (
                  <motion.div
                    className="my-0.5 h-4 w-px"
                    animate={{ backgroundColor: lit ? node.tone : "var(--border)" }}
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </WindowChrome>
  );
}

export function Scene5({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showMsg = local > 0.2;
  const showReply = local > 0.55;
  return (
    <WindowChrome label="conversations.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Automated Follow-Up — Demonstration
        </p>
        <div className="flex-1 space-y-2.5 overflow-y-auto rounded-xl border border-border bg-background/50 p-3">
          <div className="flex justify-end">
            <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-glow-blue/15 px-3 py-2">
              <p className="text-[11px] text-foreground">
                Hi, I'd like to book a dental consultation.
              </p>
              <p className="mt-0.5 text-right text-[8px] text-muted-foreground">Sarah • 10:24</p>
            </div>
          </div>
          <AnimatePresence>
            {showMsg && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-start"
              >
                <div className="max-w-[75%] rounded-2xl rounded-tl-sm border border-glow-purple/30 bg-glow-purple/5 px-3 py-2">
                  <div className="mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-2.5 w-2.5 text-glow-purple" />
                    <span className="text-[8px] font-semibold uppercase tracking-wider text-glow-purple">
                      Automated
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground">
                    Hi Sarah! Thanks for your inquiry. Would you like to book a consultation? We
                    have openings this week.
                  </p>
                  <p className="mt-0.5 text-[8px] text-muted-foreground">System • 10:24</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showReply && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-end"
              >
                <div className="max-w-[75%] rounded-2xl rounded-tr-sm bg-glow-blue/15 px-3 py-2">
                  <p className="text-[11px] text-foreground">Yes, that works for me.</p>
                  <p className="mt-0.5 text-right text-[8px] text-muted-foreground">
                    Sarah • 10:25
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </WindowChrome>
  );
}

export function Scene6({ local }: { local: number }) {
  const fields = [
    { label: "Name", value: "Sarah Mitchell", lit: 0 },
    { label: "Source", value: "Meta Ads — Dental", lit: 0.12 },
    { label: "Interest", value: "Consultation", lit: 0.24 },
    { label: "Budget", value: "Standard Plan", lit: 0.36 },
    { label: "Timeline", value: "This Week", lit: 0.48 },
    { label: "Status", value: "Qualified", lit: 0.6 },
  ];
  return (
    <WindowChrome label="lead_qualification.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Lead Qualification — Demo Data
        </p>
        <div className="flex flex-1 gap-3">
          <div className="flex w-24 flex-col items-center justify-center rounded-xl border border-border bg-background/50 p-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-glow-blue/20 text-sm font-bold text-glow-blue">
              SM
            </span>
            <p className="mt-2 text-center text-[10px] font-semibold text-foreground">Sarah M.</p>
            <p className="text-center text-[8px] text-muted-foreground">Demo Lead</p>
          </div>
          <div className="flex-1 space-y-1.5">
            {fields.map((f) => {
              const lit = local > f.lit;
              return (
                <motion.div
                  key={f.label}
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.35,
                    borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                  }}
                  className="flex items-center justify-between rounded-lg border bg-background/50 px-3 py-1.5"
                >
                  <span className="text-[10px] text-muted-foreground">{f.label}</span>
                  <span
                    className="text-[10px] font-medium"
                    style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                  >
                    {f.value}
                  </span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function Scene7({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showCalendar = local > 0.15;
  const showConfirm = local > 0.6;
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri"];
  const selectedDay = Math.min(days.length - 1, Math.floor((local - 0.2) * 5));
  return (
    <WindowChrome label="appointments.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Appointment Journey — Demonstration
        </p>
        <div className="flex flex-1 flex-col items-center justify-center gap-3">
          <div className="flex items-center gap-2 text-[10px]">
            <span className="rounded-full bg-glow-blue/15 px-2.5 py-1 font-medium text-glow-blue">
              Follow-Up
            </span>
            <ArrowRight className="h-3 w-3 text-glow-blue/50" />
            <span className="rounded-full bg-glow-cyan/15 px-2.5 py-1 font-medium text-glow-cyan">
              Appointment
            </span>
          </div>
          <AnimatePresence>
            {showCalendar && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[260px] rounded-xl border border-border bg-background/50 p-3"
              >
                <div className="mb-2 flex items-center justify-between">
                  <Calendar className="h-3.5 w-3.5 text-glow-blue" />
                  <span className="text-[10px] font-semibold text-foreground">Select a Day</span>
                </div>
                <div className="grid grid-cols-5 gap-1.5">
                  {days.map((d, i) => {
                    const sel = i === selectedDay && local > 0.2;
                    return (
                      <motion.div
                        key={d}
                        animate={{
                          borderColor: sel ? "var(--glow-blue)" : "var(--border)",
                          backgroundColor: sel ? "var(--glow-blue)1a" : "transparent",
                        }}
                        className="flex flex-col items-center rounded-md border py-1.5"
                      >
                        <span className="text-[8px] text-muted-foreground">{d}</span>
                        <span
                          className="text-[11px] font-semibold"
                          style={{ color: sel ? "var(--glow-blue)" : "var(--foreground)" }}
                        >
                          {14 + i}
                        </span>
                      </motion.div>
                    );
                  })}
                </div>
                <AnimatePresence>
                  {showConfirm && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2.5 flex items-center gap-1.5 rounded-md border border-glow-cyan/30 bg-glow-cyan/5 px-2.5 py-1.5"
                    >
                      <CheckCircle2 className="h-3 w-3 text-glow-cyan" />
                      <span className="text-[10px] font-medium text-foreground">
                        Appointment confirmed
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </WindowChrome>
  );
}

export function Scene8({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const stages = [
    { icon: UserPlus, label: "Lead" },
    { icon: Database, label: "CRM" },
    { icon: Workflow, label: "Workflow" },
    { icon: Mail, label: "Follow-Up" },
    { icon: Calendar, label: "Appointment" },
  ];
  const activeIdx = Math.min(stages.length - 1, Math.floor(local * stages.length));
  return (
    <WindowChrome label="crm_dashboard.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Dashboard — Complete Customer Journey
        </p>
        <div className="mb-3 grid grid-cols-3 gap-2">
          {[
            { icon: UserPlus, label: "New Lead", value: "Captured" },
            { icon: Workflow, label: "Workflow", value: "Active" },
            { icon: Target, label: "Pipeline", value: "Moving" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
              animate={{ opacity: local > i * 0.1 ? 1 : 0, y: local > i * 0.1 ? 0 : 8 }}
              className="rounded-lg border border-border bg-background/50 p-2.5"
            >
              <m.icon className="h-3.5 w-3.5 text-glow-blue" />
              <p className="mt-1 font-display text-[11px] font-bold text-foreground">{m.value}</p>
              <p className="text-[9px] text-muted-foreground">{m.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-wrap items-center justify-center gap-1.5">
            {stages.map((s, i) => {
              const lit = i <= activeIdx;
              return (
                <div key={s.label} className="flex items-center gap-1.5">
                  <motion.div
                    animate={{
                      borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                      backgroundColor: lit ? "var(--glow-blue)1a" : "transparent",
                      scale: i === activeIdx ? 1.08 : 1,
                    }}
                    className="flex items-center gap-1.5 rounded-lg border px-2.5 py-1.5"
                  >
                    <s.icon
                      className="h-3 w-3"
                      style={{ color: lit ? "var(--glow-blue)" : "var(--muted-foreground)" }}
                    />
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                  {i < stages.length - 1 && (
                    <ArrowRight
                      className="h-3 w-3"
                      style={{ color: lit ? "var(--glow-blue)" : "var(--border)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

const SYSTEM_FLOW = [
  { icon: UserPlus, label: "Lead" },
  { icon: Database, label: "CRM" },
  { icon: Cpu, label: "Automation" },
  { icon: Mail, label: "Follow-Up" },
  { icon: GitBranch, label: "Pipeline" },
  { icon: Calendar, label: "Appointment" },
  { icon: CheckCircle2, label: "Customer" },
];

export function Scene9({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(SYSTEM_FLOW.length - 1, Math.floor(local * SYSTEM_FLOW.length));
  return (
    <WindowChrome label="complete_system.demo">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[200px] flex-col items-center">
          {SYSTEM_FLOW.map((s, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={s.label} className="flex w-full flex-col items-center">
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10 }}
                  animate={{ opacity: lit ? 1 : 0.3, y: 0, scale: i === activeIdx ? 1.08 : 1 }}
                  transition={{ duration: 0.4 }}
                  className="flex w-full items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2"
                  style={{
                    borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                    boxShadow: i === activeIdx ? "0 0 20px -6px var(--glow-blue)" : "none",
                  }}
                >
                  <span className="flex h-7 w-7 items-center justify-center rounded-md bg-glow-blue/15 text-glow-blue">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-foreground">{s.label}</span>
                </motion.div>
                {i < SYSTEM_FLOW.length - 1 && (
                  <motion.div
                    className="my-0.5 h-4 w-px"
                    animate={{ backgroundColor: lit ? "var(--glow-blue)" : "var(--border)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <AnimatePresence>
          {local > 0.92 && (
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-4 text-center text-[11px] font-semibold text-glow-blue"
            >
              Build connected systems. Automate the follow-up. Manage your leads.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </WindowChrome>
  );
}

export const SCENE_COMPONENTS = [
  Scene1,
  Scene2,
  Scene3,
  Scene4,
  Scene5,
  Scene6,
  Scene7,
  Scene8,
  Scene9,
];
