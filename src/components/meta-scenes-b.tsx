import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Megaphone,
  MousePointerClick,
  LayoutTemplate,
  UserPlus,
  Database,
  Mail,
  Eye,
  Layers,
  Users,
  TrendingUp,
  RefreshCw,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Cinematic Meta Ads demo — scenes 7 to 11.                           */
/* Each scene receives `local` (0..1 progress within that scene).       */
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

export function MetaScene7({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showForm = local > 0.15;
  const showSubmit = local > 0.55;
  const showLead = local > 0.8;
  return (
    <WindowChrome label="lead_capture.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Visitor → Lead
        </p>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-[260px] flex-col items-center gap-3">
            <AnimatePresence>
              {showForm && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="w-full rounded-xl border border-border bg-background/60 p-3"
                >
                  <p className="mb-2 text-[10px] font-semibold text-foreground">Lead Form</p>
                  {["Name", "Phone", "Email"].map((f, i) => (
                    <motion.div
                      key={f}
                      initial={false}
                      animate={{
                        opacity: local > 0.25 + i * 0.1 ? 1 : 0.4,
                        borderColor: local > 0.25 + i * 0.1 ? "var(--glow-blue)" : "var(--border)",
                      }}
                      className="mb-1.5 rounded-md border bg-background/50 px-2.5 py-1.5"
                    >
                      <p className="text-[8px] text-muted-foreground">{f}</p>
                      <div className="mt-0.5 h-2 w-3/4 rounded bg-muted-foreground/20" />
                    </motion.div>
                  ))}
                  <AnimatePresence>
                    {showSubmit && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="mt-1 flex h-7 items-center justify-center rounded-md bg-glow-blue/20 text-[9px] font-bold uppercase text-glow-blue"
                      >
                        Submit
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="h-5 w-px"
              animate={{ backgroundColor: showLead ? "var(--glow-blue)" : "var(--border)" }}
            />
            <AnimatePresence>
              {showLead && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 rounded-lg border border-glow-blue/30 bg-glow-blue/5 px-3 py-2"
                >
                  <UserPlus className="h-4 w-4 text-glow-blue" />
                  <span className="text-[10px] font-semibold text-foreground">Lead captured</span>
                  <CheckCircle2 className="ml-1 h-3.5 w-3.5 text-glow-blue" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

const CRM_FLOW = [
  { icon: Megaphone, label: "Meta Ads" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: UserPlus, label: "Lead" },
  { icon: Database, label: "CRM" },
];

export function MetaScene8({ local }: { local: number }) {
  const activeIdx = Math.min(CRM_FLOW.length - 1, Math.floor(local * CRM_FLOW.length));
  return (
    <WindowChrome label="crm_connection.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Meta Ads → Landing Page → Lead → CRM
        </p>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          {CRM_FLOW.map((s, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={s.label} className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.35,
                    borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                    backgroundColor: lit ? "var(--glow-blue)1a" : "transparent",
                    scale: i === activeIdx ? 1.06 : 1,
                  }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2"
                >
                  <s.icon
                    className="h-4 w-4"
                    style={{ color: lit ? "var(--glow-blue)" : "var(--muted-foreground)" }}
                  />
                  <span className="text-[11px] font-semibold text-foreground">{s.label}</span>
                  {i === CRM_FLOW.length - 1 && lit && (
                    <CheckCircle2 className="h-3.5 w-3.5 text-glow-blue" />
                  )}
                </motion.div>
                {i < CRM_FLOW.length - 1 && (
                  <motion.div
                    className="my-0.5 h-4 w-px"
                    animate={{ backgroundColor: lit ? "var(--glow-blue)" : "var(--border)" }}
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

const CAMPAIGN_STRUCTURE = [
  { icon: Megaphone, label: "Campaign" },
  { icon: Layers, label: "Ad Set" },
  { icon: Users, label: "Audience" },
  { icon: Sparkles, label: "Creative" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: UserPlus, label: "Lead Capture" },
];

export function MetaScene9({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(
    CAMPAIGN_STRUCTURE.length - 1,
    Math.floor(local * CAMPAIGN_STRUCTURE.length),
  );
  return (
    <WindowChrome label="campaign_dashboard.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Campaign Structure — Demo Campaign
        </p>
        <div className="flex flex-1 flex-col items-center justify-center gap-0">
          {CAMPAIGN_STRUCTURE.map((s, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={s.label} className="flex w-full flex-col items-center">
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
                  animate={{ opacity: lit ? 1 : 0.35, y: 0 }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full max-w-[260px] items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2"
                  style={{
                    borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                    backgroundColor: lit ? "var(--glow-blue)1a" : "transparent",
                  }}
                >
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-glow-blue/15 text-glow-blue">
                    <s.icon className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-[11px] font-semibold text-foreground">{s.label}</span>
                  {lit && i === CAMPAIGN_STRUCTURE.length - 1 && (
                    <CheckCircle2 className="ml-auto h-3.5 w-3.5 text-glow-blue" />
                  )}
                </motion.div>
                {i < CAMPAIGN_STRUCTURE.length - 1 && (
                  <motion.div
                    className="my-0.5 h-4 w-px"
                    animate={{ backgroundColor: lit ? "var(--glow-blue)" : "var(--border)" }}
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

const OPT_STEPS = [
  { icon: RefreshCw, label: "Test Creative" },
  { icon: Eye, label: "Monitor Data" },
  { icon: TrendingUp, label: "Identify Better Performance" },
  { icon: Sparkles, label: "Optimize" },
  { icon: RefreshCw, label: "Continue Testing" },
];

export function MetaScene10({ local }: { local: number }) {
  const activeIdx = Math.min(OPT_STEPS.length - 1, Math.floor(local * OPT_STEPS.length));
  return (
    <WindowChrome label="optimization.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Optimization Loop — Demonstration
        </p>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-[260px] flex-col items-center gap-1.5">
            {OPT_STEPS.map((s, i) => {
              const lit = i <= activeIdx;
              return (
                <div key={s.label} className="flex w-full flex-col items-center">
                  <motion.div
                    initial={false}
                    animate={{
                      opacity: lit ? 1 : 0.35,
                      borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                      backgroundColor: lit ? "var(--glow-blue)1a" : "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                    className="flex w-full items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2"
                  >
                    <s.icon
                      className="h-3.5 w-3.5"
                      style={{ color: lit ? "var(--glow-blue)" : "var(--muted-foreground)" }}
                    />
                    <span
                      className="text-[10px] font-medium"
                      style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                  {i < OPT_STEPS.length - 1 && (
                    <motion.div
                      className="my-0.5 h-3 w-px"
                      animate={{ backgroundColor: lit ? "var(--glow-blue)" : "var(--border)" }}
                    />
                  )}
                </div>
              );
            })}
            <motion.div
              className="mt-1 flex items-center gap-1.5 text-[9px] text-glow-blue"
              animate={{ opacity: local > 0.9 ? 1 : 0 }}
            >
              <RefreshCw className="h-3 w-3" />
              <span>Repeat the loop</span>
            </motion.div>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

const JOURNEY = [
  { icon: Megaphone, label: "Meta Ad" },
  { icon: MousePointerClick, label: "Click" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: UserPlus, label: "Lead" },
  { icon: Database, label: "CRM" },
  { icon: Mail, label: "Follow-Up" },
];

export function MetaScene11({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = Math.min(JOURNEY.length - 1, Math.floor(local * JOURNEY.length));
  return (
    <WindowChrome label="complete_journey.demo">
      <div className="flex h-full flex-col items-center justify-center">
        <div className="flex w-full max-w-[200px] flex-col items-center">
          {JOURNEY.map((s, i) => {
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
                {i < JOURNEY.length - 1 && (
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
              From attention to a followed-up lead.
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </WindowChrome>
  );
}
