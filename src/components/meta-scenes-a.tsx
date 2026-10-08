import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Megaphone,
  Target,
  Users,
  MapPin,
  Image as ImageIcon,
  MousePointerClick,
  LayoutTemplate,
  CheckCircle2,
  Filter,
  Layers,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Cinematic Meta Ads demo — scenes 1 to 6.                            */
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

export function MetaScene1({ local }: { local: number }) {
  const reduce = useReducedMotion();
  return (
    <WindowChrome label="meta_ads.izzankhan.demo">
      <div className="flex h-full flex-col items-center justify-center text-center">
        <motion.div
          initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-glow-blue/15 text-glow-blue shadow-[0_0_40px_-8px_var(--glow-blue)]"
        >
          <Megaphone className="h-8 w-8" />
        </motion.div>
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: local > 0.1 ? 1 : 0, y: local > 0.1 ? 0 : 12 }}
          transition={{ duration: 0.6 }}
          className="font-display text-xl font-bold text-foreground sm:text-2xl"
        >
          Meta Ads Campaign Walkthrough
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: local > 0.25 ? 1 : 0 }}
          transition={{ duration: 0.6 }}
          className="mt-3 max-w-sm text-xs leading-relaxed text-muted-foreground"
        >
          The journey from campaign strategy to lead generation and optimization — built as a
          connected performance-marketing system.
        </motion.p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-2">
          {["Strategy", "Audience", "Creative", "Lead", "CRM"].map((t, i) => (
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

const OBJECTIVES = [
  { label: "Awareness", desc: "Reach & impressions" },
  { label: "Traffic", desc: "Link clicks" },
  { label: "Leads", desc: "Lead generation", active: true },
  { label: "Engagement", desc: "Interactions" },
  { label: "Sales", desc: "Conversions" },
];

export function MetaScene2({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const activeIdx = 2;
  const showSelect = local > 0.2;
  const showConfirm = local > 0.6;
  return (
    <WindowChrome label="campaign_setup.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Campaign Objective — Demo Setup
        </p>
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            {OBJECTIVES.map((o, i) => {
              const lit = showSelect && (i <= activeIdx || o.active);
              const selected = o.active && showSelect;
              return (
                <motion.div
                  key={o.label}
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.4,
                    borderColor: selected ? "var(--glow-blue)" : "var(--border)",
                    backgroundColor: selected ? "var(--glow-blue)1a" : "transparent",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center justify-between rounded-lg border bg-background/50 px-3 py-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span
                      className="flex h-6 w-6 items-center justify-center rounded-md"
                      style={{
                        background: selected ? "var(--glow-blue)22" : "transparent",
                        color: selected ? "var(--glow-blue)" : "var(--muted-foreground)",
                      }}
                    >
                      {selected ? (
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      ) : (
                        <Target className="h-3.5 w-3.5" />
                      )}
                    </span>
                    <div>
                      <p className="text-[11px] font-semibold text-foreground">{o.label}</p>
                      <p className="text-[9px] text-muted-foreground">{o.desc}</p>
                    </div>
                  </div>
                  {selected && (
                    <span className="rounded-full bg-glow-blue/20 px-2 py-0.5 text-[8px] font-bold uppercase text-glow-blue">
                      Selected
                    </span>
                  )}
                </motion.div>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background/50 p-4">
            <AnimatePresence mode="wait">
              {showConfirm ? (
                <motion.div
                  key="confirm"
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-glow-blue/15 text-glow-blue">
                    <Target className="h-6 w-6" />
                  </span>
                  <p className="mt-3 text-sm font-semibold text-foreground">Leads Objective</p>
                  <p className="mt-1 max-w-[180px] text-[10px] leading-relaxed text-muted-foreground">
                    The objective tells the platform to optimize for people likely to submit their
                    information.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-[10px] text-muted-foreground"
                >
                  Selecting objective…
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function MetaScene3({ local }: { local: number }) {
  const fields = [
    { icon: MapPin, label: "Location", value: "City + 25 km radius", lit: 0.05 },
    { icon: Users, label: "Age", value: "25 – 55", lit: 0.2 },
    { icon: Filter, label: "Gender", value: "All", lit: 0.35 },
    { icon: Target, label: "Interests", value: "Dental, wellness, local services", lit: 0.5 },
    { icon: Layers, label: "Audience Type", value: "Lookalike + Detailed", lit: 0.65 },
  ];
  const showSize = local > 0.75;
  return (
    <WindowChrome label="audience_setup.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Audience Setup — Demo Settings
        </p>
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-[1.3fr_1fr]">
          <div className="space-y-1.5">
            {fields.map((f) => {
              const lit = local > f.lit;
              return (
                <motion.div
                  key={f.label}
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.4,
                    borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                  }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center gap-2.5 rounded-lg border bg-background/50 px-3 py-2"
                >
                  <f.icon
                    className="h-3.5 w-3.5"
                    style={{ color: lit ? "var(--glow-blue)" : "var(--muted-foreground)" }}
                  />
                  <span className="w-[90px] text-[10px] text-muted-foreground">{f.label}</span>
                  <span
                    className="flex-1 text-[11px] font-medium"
                    style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                  >
                    {f.value}
                  </span>
                </motion.div>
              );
            })}
          </div>
          <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-background/50 p-4">
            <AnimatePresence>
              {showSize && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center"
                >
                  <Users className="h-7 w-7 text-glow-blue" />
                  <p className="mt-2 font-display text-lg font-bold text-foreground">320K – 410K</p>
                  <p className="text-[10px] text-muted-foreground">Estimated audience size</p>
                  <div className="mt-3 h-1.5 w-32 overflow-hidden rounded-full bg-secondary">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-glow-blue to-glow-purple"
                      initial={{ width: 0 }}
                      animate={{ width: "62%" }}
                      transition={{ duration: 0.6 }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

export function MetaScene4({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showFeed = local > 0.45;
  const fields = [
    { label: "Primary Text", value: "Book your consultation today…", lit: 0.05 },
    { label: "Headline", value: "Premium Dental Care", lit: 0.2 },
    { label: "Creative", value: "Image / Video", lit: 0.35 },
    { label: "Call-to-Action", value: "Learn More", lit: 0.5 },
  ];
  return (
    <WindowChrome label="ad_creative.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Ad Creative — Demonstration
        </p>
        <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-2">
          <div className="space-y-1.5">
            {fields.map((f) => {
              const lit = local > f.lit;
              return (
                <motion.div
                  key={f.label}
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.4,
                    borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                  }}
                  className="rounded-lg border bg-background/50 px-3 py-2"
                >
                  <p className="text-[9px] uppercase tracking-wider text-muted-foreground">
                    {f.label}
                  </p>
                  <p
                    className="mt-0.5 text-[11px] font-medium"
                    style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                  >
                    {f.value}
                  </p>
                </motion.div>
              );
            })}
          </div>
          <div className="flex items-center justify-center">
            <AnimatePresence>
              {showFeed && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="w-full max-w-[230px] rounded-xl border border-border bg-background/60 p-3"
                >
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-glow-blue/20 text-[9px] font-bold text-glow-blue">
                      AD
                    </span>
                    <div>
                      <p className="text-[10px] font-semibold text-foreground">Your Brand</p>
                      <p className="text-[8px] text-muted-foreground">Sponsored</p>
                    </div>
                  </div>
                  <p className="mt-2 text-[10px] leading-relaxed text-foreground/90">
                    Book your consultation today — premium dental care in your area.
                  </p>
                  <div className="mt-2 flex h-20 items-center justify-center rounded-md bg-gradient-to-br from-glow-blue/20 to-glow-purple/10">
                    <ImageIcon className="h-5 w-5 text-glow-blue/60" />
                  </div>
                  <div className="mt-2 flex items-center justify-between rounded-md border border-border bg-background/50 px-2.5 py-1.5">
                    <span className="text-[9px] font-medium text-foreground">
                      Premium Dental Care
                    </span>
                    <span className="rounded bg-glow-blue/20 px-2 py-0.5 text-[8px] font-bold uppercase text-glow-blue">
                      Learn More
                    </span>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}

const STRUCTURE = [
  { icon: Megaphone, label: "Campaign", desc: "Objective & budget", tone: "var(--glow-blue)" },
  { icon: Layers, label: "Ad Set", desc: "Audience & placement", tone: "var(--glow-cyan)" },
  { icon: ImageIcon, label: "Ad", desc: "Creative & copy", tone: "var(--glow-purple)" },
];

export function MetaScene5({ local }: { local: number }) {
  const activeIdx = Math.min(STRUCTURE.length - 1, Math.floor(local * STRUCTURE.length));
  return (
    <WindowChrome label="campaign_structure.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Campaign Structure — Demonstration
        </p>
        <div className="flex flex-1 flex-col items-center justify-center gap-2">
          {STRUCTURE.map((s, i) => {
            const lit = i <= activeIdx;
            return (
              <div key={s.label} className="flex flex-col items-center">
                <motion.div
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.4,
                    borderColor: lit ? s.tone : "var(--border)",
                    boxShadow: lit && i === activeIdx ? `0 0 20px -6px ${s.tone}` : "none",
                  }}
                  transition={{ duration: 0.35 }}
                  className="flex w-full max-w-[260px] items-center gap-2.5 rounded-lg border bg-background/60 px-3 py-2.5"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md"
                    style={{ background: `${s.tone}22`, color: s.tone }}
                  >
                    <s.icon className="h-4 w-4" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold text-foreground">{s.label}</p>
                    <p className="text-[9px] text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
                {i < STRUCTURE.length - 1 && (
                  <motion.div
                    className="my-1 h-4 w-px"
                    animate={{ backgroundColor: lit ? s.tone : "var(--border)" }}
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

export function MetaScene6({ local }: { local: number }) {
  const reduce = useReducedMotion();
  const showClick = local > 0.15;
  const showPage = local > 0.4;
  return (
    <WindowChrome label="landing_page.demo">
      <div className="flex h-full flex-col">
        <p className="mb-3 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
          Meta Ad → Landing Page
        </p>
        <div className="flex flex-1 items-center justify-center">
          <div className="flex w-full max-w-[280px] flex-col items-center gap-3">
            <AnimatePresence>
              {showClick && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 rounded-lg border border-glow-blue/30 bg-glow-blue/5 px-3 py-2"
                >
                  <MousePointerClick className="h-3.5 w-3.5 text-glow-blue" />
                  <span className="text-[10px] font-medium text-foreground">
                    User clicks the ad
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.div
              className="h-5 w-px"
              animate={{ backgroundColor: showPage ? "var(--glow-blue)" : "var(--border)" }}
            />
            <AnimatePresence>
              {showPage && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45 }}
                  className="w-full rounded-xl border border-border bg-background/60 p-3"
                >
                  <div className="h-16 rounded-md bg-gradient-to-br from-glow-blue/25 to-glow-purple/15" />
                  <p className="mt-2 text-[11px] font-bold text-foreground">Premium Dental Care</p>
                  <p className="text-[9px] leading-relaxed text-muted-foreground">
                    Book your consultation with a trusted local clinic.
                  </p>
                  <div className="mt-2 flex h-7 items-center justify-center rounded-md bg-glow-blue/20 text-[9px] font-bold uppercase text-glow-blue">
                    Book Now
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </WindowChrome>
  );
}
