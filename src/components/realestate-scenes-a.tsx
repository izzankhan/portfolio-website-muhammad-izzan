import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  LayoutTemplate,
  UserPlus,
  Database,
  GitBranch,
  Bell,
  CheckCircle2,
  ArrowRight,
  Workflow,
  Home,
  CalendarCheck,
  UserCheck,
  BedDouble,
  Bath,
  Trees,
  Car,
  MapPin,
  PoundSterling,
  Sparkles,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Complete Real Estate Lead Automation Workflow — scenes 1–6.        */
/* Fictional "Modern 3-Bedroom Family Home" / "Daniel Carter" demo.     */
/* Themed to match the real estate project page (gold + blue glow).    */
/* ------------------------------------------------------------------ */

export function ReWindowChrome({ label, children }: { label: string; children: React.ReactNode }) {
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
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-glow-gold">
          Demonstration
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden p-4">{children}</div>
    </div>
  );
}

/* Scene 1 — Intro */
export function ReScene1({ local }: { local: number }) {
  const reduce = useReducedMotion();
  return (
    <ReWindowChrome label="realestate.automation.demo">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-glow-gold/15 text-glow-gold shadow-[0_0_40px_-8px_var(--glow-gold)]"
        >
          <Home className="h-8 w-8" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: local > 0.1 ? 1 : 0, y: local > 0.1 ? 0 : 12 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl font-bold text-foreground sm:text-2xl"
        >
          Complete Real Estate Lead Automation Workflow
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: local > 0.25 ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground"
        >
          From Property Enquiry to Scheduled Viewing — a fictional demonstration of an automated
          real estate lead journey.
        </motion.p>
        <div className="mt-6 h-px w-3/4 overflow-hidden rounded-full bg-border">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: local > 0.3 ? "100%" : "0%" }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="h-full rounded-full bg-gradient-to-r from-glow-gold via-glow-amber to-glow-gold-light"
          />
        </div>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 2 — Property Landing Page */
export function ReScene2({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showCursor = local > 0.45 && local < 0.85;
  const clicked = local > 0.8;
  return (
    <ReWindowChrome label="manchester.family.home">
      <div className="flex h-full flex-col items-center justify-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: 14, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-[280px] overflow-hidden rounded-xl border border-border bg-background/60"
        >
          <div className="relative h-20 bg-gradient-to-br from-glow-gold/20 via-glow-amber/10 to-transparent">
            <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
            <div className="absolute bottom-2 left-3 flex items-center gap-1.5">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-glow-gold/20 text-glow-gold">
                <Home className="h-3.5 w-3.5" />
              </span>
              <span className="font-display text-[11px] font-bold text-foreground">
                Modern 3-Bedroom Home
              </span>
            </div>
          </div>
          <div className="p-3.5">
            <p className="font-display text-sm font-bold text-foreground">
              Modern 3-Bedroom Family Home
            </p>
            <div className="mt-1 flex items-center gap-2 text-[9px] text-muted-foreground">
              <span className="flex items-center gap-1">
                <MapPin className="h-2.5 w-2.5" /> Manchester
              </span>
              <span className="flex items-center gap-1">
                <PoundSterling className="h-2.5 w-2.5" /> 450,000
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {["3 Beds", "2 Baths", "Garden", "Parking"].map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border bg-background/40 px-2 py-0.5 text-[8px] text-muted-foreground"
                >
                  {s}
                </span>
              ))}
            </div>
            <motion.div
              animate={{
                borderColor: clicked ? "var(--glow-gold)" : "var(--border)",
                backgroundColor: clicked ? "var(--glow-gold)22" : "transparent",
              }}
              className="mt-3 flex items-center justify-center gap-1.5 rounded-lg border py-2 text-[10px] font-semibold text-glow-gold"
            >
              Request Information
              <ArrowRight className="h-3 w-3" />
            </motion.div>
          </div>
          <AnimatePresence>
            {showCursor && (
              <motion.div
                initial={{ opacity: 0, x: 40, y: 30 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                exit={{ opacity: 0, scale: 0.6 }}
                transition={{ duration: 0.5 }}
                className="pointer-events-none absolute"
                style={{ left: "62%", top: "78%" }}
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground/90">
                  <ArrowRight className="h-3 w-3 rotate-45 text-background" />
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Property Landing Page — Fictional Listing
        </p>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 3 — Enquiry Form */
const RE_FORM_FIELDS = [
  { label: "First Name", value: "Daniel", lit: 0.05 },
  { label: "Last Name", value: "Carter", lit: 0.14 },
  { label: "Email", value: "daniel@example.com", lit: 0.23 },
  { label: "Phone", value: "+1 555 010 9876", lit: 0.32 },
  { label: "Looking For", value: "Buying", lit: 0.41 },
  { label: "Location", value: "Manchester", lit: 0.5 },
  { label: "Property Type", value: "3-Bedroom Home", lit: 0.59 },
  { label: "Budget", value: "£450,000", lit: 0.68 },
];

export function ReScene3({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const submitted = local > 0.9;
  return (
    <ReWindowChrome label="enquiry_form.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Property Enquiry Form — Demo
        </p>
        <div className="flex-1 space-y-1.5 overflow-y-auto">
          {RE_FORM_FIELDS.map((f) => {
            const lit = local > f.lit;
            return (
              <motion.div
                key={f.label}
                initial={false}
                animate={{
                  opacity: lit ? 1 : 0.4,
                  borderColor: lit ? "var(--glow-gold)" : "var(--border)",
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
        <AnimatePresence>
          {local > 0.78 && !submitted && (
            <motion.div
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold/40 bg-glow-gold/10 py-2 text-[10px] font-semibold text-glow-gold"
            >
              Submit Enquiry <ArrowRight className="h-3 w-3" />
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold-light/40 bg-glow-gold-light/10 py-2 text-[10px] font-semibold text-glow-gold-light"
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> Enquiry Received
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 4 — CRM Lead */
export function ReScene4({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const show = local > 0.15;
  return (
    <ReWindowChrome label="crm.realestate.demo">
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
                  New Property Lead
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
              <div className="mt-3 grid grid-cols-2 gap-1.5 text-[10px]">
                {[
                  { l: "Budget", v: "£450,000" },
                  { l: "Location", v: "Manchester" },
                  { l: "Source", v: "Landing Page" },
                  { l: "Status", v: "New Lead" },
                ].map((r) => (
                  <div
                    key={r.l}
                    className="rounded-md border border-border bg-background/50 px-2 py-1.5"
                  >
                    <p className="text-[8px] uppercase tracking-wider text-muted-foreground">
                      {r.l}
                    </p>
                    <p className="font-medium text-foreground">{r.v}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <p className="mt-3 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Lead Captured in CRM
        </p>
      </div>
    </ReWindowChrome>
  );
}

/* Scene 5 — Automation */
const RE_AUTO_NODES = [
  { icon: UserPlus, label: "Form Submitted", tone: "var(--glow-gold)" },
  { icon: Database, label: "Create Contact", tone: "var(--glow-gold-light)" },
  { icon: GitBranch, label: "Add to Pipeline", tone: "var(--glow-amber)" },
  { icon: UserCheck, label: "Qualify Lead", tone: "var(--glow-gold)" },
  { icon: Home, label: "Property Match", tone: "var(--glow-gold-light)" },
  { icon: Bell, label: "Notify Agent", tone: "var(--glow-amber)" },
];

export function ReScene5({ local }: { local: number }) {
  const activeIdx = Math.min(RE_AUTO_NODES.length - 1, Math.floor(local * RE_AUTO_NODES.length));
  return (
    <ReWindowChrome label="workflow_builder.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Automation Workflow — Demonstration
        </p>
        <div className="flex flex-1 flex-col items-center gap-0 overflow-y-auto">
          {RE_AUTO_NODES.map((node, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={node.label} className="flex w-full flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: lit ? 1 : 0.35, scale: lit ? 1 : 0.95 }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full max-w-[260px] items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2"
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
                    <span className="ml-auto rounded-full bg-glow-gold/15 px-2 py-0.5 text-[8px] font-bold uppercase text-glow-gold">
                      Trigger
                    </span>
                  )}
                </motion.div>
                {i < RE_AUTO_NODES.length - 1 && (
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
    </ReWindowChrome>
  );
}

/* Scene 6 — Lead Qualification */
export function ReScene6({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const questions = [
    "Buying or Renting?",
    "Preferred Location?",
    "Budget?",
    "Property Type?",
    "Moving Timeline?",
  ];
  const answers = ["Buying", "Manchester", "£450,000", "3-Bedroom Home", "Within 3 months"];
  const activeIdx = Math.min(questions.length - 1, Math.floor(local * questions.length));
  const complete = local > 0.85;
  return (
    <ReWindowChrome label="qualification.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Lead Qualification — Demo Data
        </p>
        <div className="flex-1 space-y-1.5 overflow-y-auto">
          {questions.map((q, i) => {
            const lit = i <= activeIdx;
            return (
              <motion.div
                key={q}
                initial={false}
                animate={{
                  opacity: lit ? 1 : 0.4,
                  borderColor: lit ? "var(--glow-gold)" : "var(--border)",
                }}
                className="rounded-lg border bg-background/50 px-3 py-1.5"
              >
                <p className="text-[10px] text-muted-foreground">{q}</p>
                {lit && (
                  <motion.p
                    initial={reduce ? false : { opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mt-0.5 text-[11px] font-semibold text-foreground"
                  >
                    {answers[i]}
                  </motion.p>
                )}
              </motion.div>
            );
          })}
        </div>
        <AnimatePresence>
          {complete && (
            <motion.div
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-2.5 flex items-center justify-center gap-1.5 rounded-lg border border-glow-gold-light/40 bg-glow-gold-light/10 py-2 text-[10px] font-semibold text-glow-gold-light"
            >
              <CheckCircle2 className="h-3.5 w-3.5" /> Qualification Complete · High Priority
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ReWindowChrome>
  );
}

export const RE_SCENES_A = [ReScene1, ReScene2, ReScene3, ReScene4, ReScene5, ReScene6];
