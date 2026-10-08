import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Smartphone,
  Megaphone,
  MousePointerClick,
  LayoutTemplate,
  UserPlus,
  Database,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Cinematic Lead Journey demo — scenes 1 to 5.                        */
/* "From Click to Customer" — a fictional demonstration business.      */
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
        <span className="rounded-full bg-glow-purple/15 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-glow-purple">
          Demo Project
        </span>
      </div>
      <div className="relative flex-1 overflow-hidden p-4">{children}</div>
    </div>
  );
}

/* Scene 1 — The Customer */
export function JourneyScene1({ local }: { local: number }) {
  const reduce = useReducedMotion();
  return (
    <WindowChrome label="customer_journey.demo">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-glow-blue/15 text-glow-blue shadow-[0_0_40px_-8px_var(--glow-blue)]"
        >
          <Smartphone className="h-8 w-8" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: local > 0.1 ? 1 : 0, y: local > 0.1 ? 0 : 12 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl font-bold text-foreground sm:text-2xl"
        >
          From Click to Customer
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: local > 0.25 ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground"
        >
          A potential customer sees a business advertisement on social media — the start of a
          connected journey from attention to a qualified customer.
        </motion.p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["Ad", "Click", "Landing Page", "Lead", "CRM", "Customer"].map((t, i) => (
            <motion.span
              key={t}
              initial={{ opacity: 0, y: 8 }}
              animate={{
                opacity: local > 0.4 + i * 0.07 ? 1 : 0,
                y: local > 0.4 + i * 0.07 ? 0 : 8,
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

/* Scene 2 — The Ad */
export function JourneyScene2({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showAd = local > 0.1;
  const showClick = local > 0.55;
  return (
    <WindowChrome label="social_feed.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          The Ad — Demonstration
        </p>
        <div className="flex flex-1 items-center justify-center">
          <AnimatePresence>
            {showAd && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.45 }}
                className="w-full max-w-[260px] rounded-xl border border-border bg-background/60 p-3"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-glow-blue/20 text-[9px] font-bold text-glow-blue">
                    AD
                  </span>
                  <div>
                    <p className="text-[10px] font-semibold text-foreground">Bright Smile Dental</p>
                    <p className="text-[8px] text-muted-foreground">Sponsored</p>
                  </div>
                </div>
                <p className="mt-2 text-[10px] leading-relaxed text-foreground/90">
                  Book your consultation today — premium dental care in your area.
                </p>
                <div className="mt-2 flex h-20 items-center justify-center rounded-md bg-gradient-to-br from-glow-blue/20 to-glow-purple/10">
                  <Megaphone className="h-5 w-5 text-glow-blue/60" />
                </div>
                <motion.div
                  className="mt-2 flex items-center justify-between rounded-md border px-2.5 py-1.5"
                  animate={{
                    borderColor: showClick ? "var(--glow-blue)" : "var(--border)",
                    backgroundColor: showClick ? "var(--glow-blue)1a" : "transparent",
                  }}
                >
                  <span className="text-[9px] font-medium text-foreground">Learn More</span>
                  <AnimatePresence>
                    {showClick && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex items-center gap-1 text-[8px] font-bold uppercase text-glow-blue"
                      >
                        <MousePointerClick className="h-3 w-3" />
                        Click
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <div className="mt-3 flex items-center justify-center gap-2 text-[10px]">
          <span className="rounded-full bg-glow-blue/15 px-2.5 py-1 font-medium text-glow-blue">
            Ad
          </span>
          <ArrowRight
            className="h-3 w-3"
            style={{ color: showClick ? "var(--glow-blue)" : "var(--border)" }}
          />
          <span
            className="rounded-full px-2.5 py-1 font-medium"
            style={{
              background: showClick ? "var(--glow-cyan)1a" : "transparent",
              color: showClick ? "var(--glow-cyan)" : "var(--muted-foreground)",
            }}
          >
            Click
          </span>
        </div>
      </div>
    </WindowChrome>
  );
}

/* Scene 3 — Landing Page */
export function JourneyScene3({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showPage = local > 0.15;
  const showCta = local > 0.6;
  const blocks = [
    { label: "Headline", value: "A confident smile starts here", lit: 0.25 },
    { label: "Service", value: "Consultation & treatment", lit: 0.4 },
    { label: "Benefits", value: "Trusted • Local • Professional", lit: 0.55 },
  ];
  return (
    <WindowChrome label="landing_page.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Landing Page — Demonstration
        </p>
        <div className="flex flex-1 items-center justify-center">
          <AnimatePresence>
            {showPage && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="w-full max-w-[280px] rounded-xl border border-border bg-background/60 p-3"
              >
                <div className="h-14 rounded-md bg-gradient-to-br from-glow-blue/25 to-glow-purple/15" />
                <motion.p
                  initial={false}
                  animate={{ opacity: local > 0.25 ? 1 : 0.4 }}
                  className="mt-2 text-[11px] font-bold text-foreground"
                >
                  Premium Dental Care
                </motion.p>
                {blocks.map((b) => (
                  <motion.div
                    key={b.label}
                    initial={false}
                    animate={{
                      opacity: local > b.lit ? 1 : 0.4,
                      borderColor: local > b.lit ? "var(--glow-blue)" : "var(--border)",
                    }}
                    className="mt-1.5 rounded-md border bg-background/50 px-2.5 py-1.5"
                  >
                    <p className="text-[8px] uppercase tracking-wider text-muted-foreground">
                      {b.label}
                    </p>
                    <p className="text-[10px] text-foreground/80">{b.value}</p>
                  </motion.div>
                ))}
                <motion.div
                  className="mt-2.5 flex h-8 items-center justify-center rounded-md text-[9px] font-bold uppercase"
                  animate={{
                    backgroundColor: showCta ? "var(--glow-blue)" : "var(--glow-blue)20",
                    color: showCta ? "var(--primary-foreground)" : "var(--glow-blue)",
                  }}
                >
                  Book Now
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </WindowChrome>
  );
}

/* Scene 4 — Lead Capture */
export function JourneyScene4({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showForm = local > 0.1;
  const showSubmit = local > 0.55;
  const showLead = local > 0.8;
  const fields = [
    { label: "Name", value: "Sarah Mitchell", lit: 0.2 },
    { label: "Email", value: "sarah.m@email.com", lit: 0.32 },
    { label: "Phone", value: "+1 (555) 014-2231", lit: 0.44 },
    { label: "Service", value: "Consultation", lit: 0.56 },
  ];
  return (
    <WindowChrome label="lead_form.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Lead Capture — Demonstration
        </p>
        <div className="flex flex-1 items-center justify-center">
          <AnimatePresence>
            {showForm && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full max-w-[260px] rounded-xl border border-border bg-background/60 p-3.5"
              >
                {fields.map((f) => (
                  <motion.div
                    key={f.label}
                    initial={false}
                    animate={{
                      opacity: local > f.lit ? 1 : 0.4,
                      borderColor: local > f.lit ? "var(--glow-blue)" : "var(--border)",
                    }}
                    className="mb-2 rounded-md border bg-background/50 px-2.5 py-1.5"
                  >
                    <p className="text-[8px] uppercase tracking-wider text-muted-foreground">
                      {f.label}
                    </p>
                    <p className="text-[10px] font-medium text-foreground/90">{f.value}</p>
                  </motion.div>
                ))}
                <motion.div
                  className="mt-2 flex h-8 items-center justify-center rounded-md text-[9px] font-bold uppercase"
                  animate={{
                    backgroundColor: showSubmit ? "var(--glow-blue)" : "var(--glow-blue)20",
                    color: showSubmit ? "var(--primary-foreground)" : "var(--glow-blue)",
                  }}
                >
                  Submit
                </motion.div>
                <AnimatePresence>
                  {showLead && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="mt-2.5 flex items-center gap-1.5 rounded-md border border-glow-cyan/30 bg-glow-cyan/5 px-2.5 py-1.5"
                    >
                      <CheckCircle2 className="h-3 w-3 text-glow-cyan" />
                      <span className="text-[10px] font-medium text-foreground">
                        Form submitted → Lead created
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

/* Scene 5 — CRM */
const CRM_STAGES = ["New Lead", "Contacted", "Qualified"];

export function JourneyScene5({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showLead = local > 0.15;
  const activeStage = Math.min(CRM_STAGES.length - 1, Math.floor((local - 0.2) * 3));
  return (
    <WindowChrome label="crm_dashboard.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          CRM — Lead Appears Automatically
        </p>
        <div className="flex flex-1 flex-col items-center justify-center gap-4">
          <AnimatePresence>
            {showLead && (
              <motion.div
                initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                className="flex w-full max-w-[240px] items-center gap-2.5 rounded-xl border border-glow-blue/30 bg-glow-blue/5 p-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-glow-blue/20 text-xs font-bold text-glow-blue">
                  SM
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">Sarah M.</p>
                  <p className="text-[10px] text-muted-foreground">New lead • from Meta Ads</p>
                </div>
                <CheckCircle2 className="ml-auto h-4 w-4 text-glow-blue" />
              </motion.div>
            )}
          </AnimatePresence>
          <div className="flex w-full max-w-[260px] items-center justify-between gap-1.5">
            {CRM_STAGES.map((s, i) => {
              const lit = i <= activeStage && local > 0.2;
              return (
                <div key={s} className="flex flex-1 items-center gap-1.5">
                  <motion.div
                    initial={false}
                    animate={{
                      borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                      backgroundColor: lit ? "var(--glow-blue)1a" : "transparent",
                    }}
                    className="flex-1 rounded-md border px-2 py-1.5 text-center"
                  >
                    <span
                      className="text-[9px] font-medium"
                      style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                    >
                      {s}
                    </span>
                  </motion.div>
                  {i < CRM_STAGES.length - 1 && (
                    <ArrowRight
                      className="h-3 w-3 shrink-0"
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
