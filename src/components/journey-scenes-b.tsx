import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  UserPlus,
  Database,
  GitBranch,
  Mail,
  MessageSquare,
  CheckCircle2,
  ArrowRight,
  Users,
  Target,
  Calendar,
  Cpu,
  Megaphone,
  MousePointerClick,
  LayoutTemplate,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Cinematic Lead Journey demo — scenes 6 to 10.                       */
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
        <span className="rounded-full bg-glow-purple/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-glow-purple">
          Demo Project
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden p-4">{children}</div>
    </div>
  );
}

/* Scene 6 — Automation */
const AUTO_NODES = [
  { icon: UserPlus, label: "New Lead", tone: "var(--glow-blue)" },
  { icon: Database, label: "CRM Contact", tone: "var(--glow-cyan)" },
  { icon: MessageSquare, label: "Automated Message", tone: "var(--glow-purple)" },
  { icon: Mail, label: "Follow-Up", tone: "var(--glow-blue)" },
  { icon: Target, label: "Qualification", tone: "var(--glow-cyan)" },
];

export function JourneyScene6({ local }: { local: number }) {
  const activeIdx = Math.min(AUTO_NODES.length - 1, Math.floor(local * AUTO_NODES.length));
  return (
    <WindowChrome label="workflow_automation.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Automation — Workflow Activates
        </p>
        <div className="flex flex-1 flex-col items-center justify-center gap-0">
          {AUTO_NODES.map((node, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={node.label} className="flex w-full flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.35,
                    borderColor: lit ? node.tone : "var(--border)",
                    boxShadow: lit && i === activeIdx ? `0 0 20px -6px ${node.tone}` : "none",
                  }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full max-w-[280px] items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2"
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
                {i < AUTO_NODES.length - 1 && (
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

/* Scene 7 — Conversation */
export function JourneyScene7({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showMsg1 = local > 0.2;
  const showReply = local > 0.5;
  const showMsg2 = local > 0.75;
  return (
    <WindowChrome label="conversations.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Conversation — Automated Follow-Up
        </p>
        <div className="flex-1 space-y-2.5 overflow-y-auto rounded-xl border border-border bg-background/50 p-3">
          <AnimatePresence>
            {showMsg1 && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-start"
              >
                <div className="max-w-[78%] rounded-2xl rounded-tl-sm border border-glow-purple/30 bg-glow-purple/5 px-3 py-2">
                  <div className="mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-2.5 w-2.5 text-glow-purple" />
                    <span className="text-[8px] font-semibold uppercase tracking-wider text-glow-purple">
                      Automated
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground">
                    Hi Sarah! Thanks for your inquiry. Would you like to book a consultation?
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
                <div className="max-w-[78%] rounded-2xl rounded-tr-sm bg-glow-blue/15 px-3 py-2">
                  <p className="text-[11px] text-foreground">
                    Yes, please. What times are available?
                  </p>
                  <p className="mt-0.5 text-right text-[8px] text-muted-foreground">
                    Sarah • 10:25
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <AnimatePresence>
            {showMsg2 && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 10, x: -10 }}
                animate={{ opacity: 1, y: 0, x: 0 }}
                transition={{ duration: 0.4 }}
                className="flex justify-start"
              >
                <div className="max-w-[78%] rounded-2xl rounded-tl-sm border border-glow-purple/30 bg-glow-purple/5 px-3 py-2">
                  <div className="mb-1 flex items-center gap-1.5">
                    <Sparkles className="h-2.5 w-2.5 text-glow-purple" />
                    <span className="text-[8px] font-semibold uppercase tracking-wider text-glow-purple">
                      Automated
                    </span>
                  </div>
                  <p className="text-[11px] text-foreground">
                    We have openings this week. I can hold a slot for you — shall I confirm?
                  </p>
                  <p className="mt-0.5 text-[8px] text-muted-foreground">System • 10:25</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <p className="mt-2 text-center text-[9px] text-muted-foreground">
          Automation keeps the conversation moving — it does not guarantee a sale.
        </p>
      </div>
    </WindowChrome>
  );
}

/* Scene 8 — Pipeline */
const PIPE_STAGES = ["New Lead", "Contacted", "Qualified", "Appointment", "Won"];

export function JourneyScene8({ local }: { local: number }) {
  const activeStage = Math.min(PIPE_STAGES.length - 1, Math.floor(local * PIPE_STAGES.length));
  return (
    <WindowChrome label="pipeline.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Pipeline — Lead Moves Through Stages
        </p>
        <div className="grid flex-1 grid-cols-3 gap-2 sm:grid-cols-5">
          {PIPE_STAGES.map((stage, i) => {
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
                <AnimatePresence>
                  {lit && (
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
            );
          })}
        </div>
        <div className="mt-3 flex items-center justify-center gap-1.5">
          {PIPE_STAGES.map((s, i) => (
            <span
              key={s}
              className="h-1 rounded-full transition-all duration-300"
              style={{
                width: i === activeStage ? 24 : 8,
                background: i <= activeStage ? "var(--glow-blue)" : "var(--border)",
              }}
            />
          ))}
        </div>
      </div>
    </WindowChrome>
  );
}

/* Scene 9 — Business Dashboard */
export function JourneyScene9({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const metrics = [
    { icon: Users, label: "Leads", value: "48", lit: 0.1 },
    { icon: GitBranch, label: "In Pipeline", value: "29", lit: 0.25 },
    { icon: Calendar, label: "Appointments", value: "12", lit: 0.4 },
    { icon: CheckCircle2, label: "Won", value: "7", lit: 0.55 },
  ];
  return (
    <WindowChrome label="business_dashboard.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Business Dashboard — Demo Data
        </p>
        <div className="mb-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          {metrics.map((m) => {
            const lit = local > m.lit;
            return (
              <motion.div
                key={m.label}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                animate={{ opacity: lit ? 1 : 0.4, y: 0 }}
                transition={{ duration: 0.35 }}
                className="rounded-lg border border-border bg-background/50 p-2.5"
              >
                <m.icon className="h-3.5 w-3.5 text-glow-blue" />
                <p className="mt-1 font-display text-sm font-bold text-foreground">{m.value}</p>
                <p className="text-[9px] text-muted-foreground">{m.label}</p>
              </motion.div>
            );
          })}
        </div>
        <div className="flex flex-1 items-center justify-center rounded-xl border border-border bg-background/50 p-3">
          <div className="w-full">
            <p className="mb-2 text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
              Where leads are in the journey
            </p>
            <div className="space-y-1.5">
              {PIPE_STAGES.map((s, i) => {
                const lit = local > 0.6 + i * 0.06;
                const pct = [100, 72, 54, 30, 15][i];
                return (
                  <div key={s} className="flex items-center gap-2">
                    <span className="w-20 text-[9px] text-muted-foreground">{s}</span>
                    <div className="h-2 flex-1 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        className="h-full rounded-full bg-gradient-to-r from-glow-blue to-glow-purple"
                        initial={{ width: 0 }}
                        animate={{ width: lit ? `${pct}%` : 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

/* Scene 10 — Complete Journey */
const FULL_FLOW = [
  { icon: Megaphone, label: "Meta Ad" },
  { icon: MousePointerClick, label: "Click" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: UserPlus, label: "Form" },
  { icon: Database, label: "CRM" },
  { icon: Cpu, label: "Automation" },
  { icon: Mail, label: "Follow-Up" },
  { icon: Calendar, label: "Appointment" },
  { icon: CheckCircle2, label: "Customer" },
];

export function JourneyScene10({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(FULL_FLOW.length - 1, Math.floor(local * FULL_FLOW.length));
  return (
    <WindowChrome label="complete_journey.demo">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[200px] flex-col items-center">
          {FULL_FLOW.map((s, i) => {
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
                {i < FULL_FLOW.length - 1 && (
                  <motion.div
                    className="my-0.5 h-3 w-px"
                    animate={{ backgroundColor: lit ? "var(--glow-blue)" : "var(--border)" }}
                  />
                )}
              </div>
            );
          })}
        </div>
        <AnimatePresence>
          {local > 0.85 && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-3 text-center"
            >
              <p className="text-[11px] font-semibold text-glow-blue">
                Every lead deserves a clear journey.
              </p>
              <p className="mt-1 text-[10px] font-medium text-muted-foreground">
                GoHighLevel + Meta Ads + Automation
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </WindowChrome>
  );
}
