import { useState, useEffect, useRef } from "react";
import { motion, useReducedMotion, useInView, AnimatePresence } from "framer-motion";

/* Preload a list of image URLs so swaps are instant (no flash/reload). */
function usePreloadImages(urls: string[]) {
  useEffect(() => {
    urls.forEach((u) => {
      if (!u) return;
      const img = new Image();
      img.src = u;
    });
  }, [urls.join("|")]);
}
import {
  Users,
  GitBranch,
  Workflow,
  MessageSquare,
  Clock,
  Target,
  ArrowRight,
  ArrowDown,
  Sparkles,
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Layers,
  Database,
  Cpu,
  Mail,
  Bell,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Reveal helper — hydration-safe (visible by default, animates on    */
/* scroll into view). Prevents content getting stuck at opacity 0.    */
/* ------------------------------------------------------------------ */
function useReveal<T extends Element>(ref: React.RefObject<T | null>, once = true) {
  const inView = useInView(ref, { once, margin: "-40px" });
  return inView;
}

/* ------------------------------------------------------------------ */
/* Flow chain — horizontal on desktop, vertical on mobile             */
/* ------------------------------------------------------------------ */
export function FlowChain({
  steps,
  className,
}: {
  steps: { icon: typeof Users; label: string }[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref);
  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0", className)}
    >
      {steps.map((s, i) => (
        <motion.div
          key={s.label}
          initial={false}
          animate={show ? { opacity: 1, x: 0 } : reduce ? { opacity: 0 } : { opacity: 0, x: -12 }}
          transition={{ delay: i * 0.08, duration: 0.5 }}
          className="flex items-center gap-3 lg:gap-0"
        >
          <div className="glass flex items-center gap-2.5 rounded-xl px-4 py-3">
            <s.icon className="h-4 w-4 text-glow-blue" />
            <span className="text-sm font-medium text-foreground">{s.label}</span>
          </div>
          {i < steps.length - 1 && (
            <ArrowRight className="mx-2 hidden h-4 w-4 shrink-0 text-glow-blue/50 lg:block" />
          )}
          {i < steps.length - 1 && (
            <ArrowDown className="my-1 h-4 w-4 shrink-0 text-glow-blue/50 lg:hidden" />
          )}
        </motion.div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CRM Pipeline — demo data, clearly labeled                          */
/* ------------------------------------------------------------------ */
const PIPELINE = [
  {
    title: "New Lead",
    color: "var(--glow-blue)",
    cards: [
      { name: "Sarah M.", tag: "Dental Inquiry", value: "—" },
      { name: "James T.", tag: "Salon Booking", value: "—" },
    ],
  },
  {
    title: "Contacted",
    color: "var(--glow-cyan)",
    cards: [{ name: "Olivia R.", tag: "Real Estate", value: "—" }],
  },
  {
    title: "Qualified",
    color: "var(--glow-purple)",
    cards: [{ name: "Daniel K.", tag: "Accounting", value: "—" }],
  },
  {
    title: "Follow-Up",
    color: "var(--glow-blue)",
    cards: [{ name: "Aisha P.", tag: "Salon", value: "—" }],
  },
  {
    title: "Appointment",
    color: "var(--glow-cyan)",
    cards: [{ name: "Marco V.", tag: "Dental", value: "—" }],
  },
  {
    title: "Won",
    color: "var(--chart-4)",
    cards: [{ name: "Lena F.", tag: "Real Estate", value: "—" }],
  },
];

export function CrmPipeline() {
  return (
    <div className="glass-strong overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <div className="flex items-center gap-2">
          <span className="flex h-2.5 w-2.5 gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          </span>
          <span className="ml-2 font-mono text-xs text-muted-foreground">crm.izzankhan.demo</span>
        </div>
        <span className="rounded-full bg-glow-blue/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-blue">
          Demo Interface
        </span>
      </div>
      <div className="grid grid-cols-2 gap-2.5 p-3 sm:grid-cols-3 sm:gap-3 sm:p-4 lg:grid-cols-6">
        {PIPELINE.map((col, ci) => (
          <div key={col.title} className="min-w-0">
            <div className="mb-2.5 flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ background: col.color, boxShadow: `0 0 8px ${col.color}` }}
              />
              <span className="text-xs font-semibold text-foreground">{col.title}</span>
            </div>
            <div className="flex flex-col gap-2">
              {col.cards.map((c, ri) => (
                <div
                  key={c.name}
                  className="rounded-lg border border-border bg-background/60 p-2.5"
                >
                  <p className="text-xs font-medium text-foreground">{c.name}</p>
                  <p className="mt-0.5 text-[10px] text-muted-foreground">{c.tag}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Automation workflow builder                                         */
/* ------------------------------------------------------------------ */
const WORKFLOW = [
  { icon: UserPlus, label: "Trigger: New Lead", tone: "var(--glow-blue)" },
  { icon: Database, label: "Create Contact", tone: "var(--glow-cyan)" },
  { icon: GitBranch, label: "Add to Pipeline", tone: "var(--glow-purple)" },
  { icon: Mail, label: "Send Follow-Up", tone: "var(--glow-blue)" },
  { icon: Clock, label: "Wait 24 Hours", tone: "var(--glow-cyan)" },
  { icon: MessageSquare, label: "Follow-Up Message", tone: "var(--glow-purple)" },
  { icon: Bell, label: "Notify Team", tone: "var(--glow-cyan)" },
];

export function WorkflowBuilder() {
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref);
  return (
    <div className="glass-strong rounded-2xl p-5 sm:p-7">
      <div className="mb-5 flex items-center justify-between">
        <span className="font-mono text-xs text-muted-foreground">workflow_builder.demo</span>
        <span className="rounded-full bg-glow-purple/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-purple">
          Automation
        </span>
      </div>
      <div ref={ref} className="flex flex-col items-center gap-0">
        {WORKFLOW.map((node, i) => (
          <div key={node.label} className="flex flex-col items-center">
            <motion.div
              initial={false}
              animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3.5"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                style={{ background: `${node.tone}22`, color: node.tone }}
              >
                <node.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{node.label}</span>
            </motion.div>
            {i < WORKFLOW.length - 1 && (
              <motion.div
                initial={false}
                animate={show ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                transition={{ delay: i * 0.1 + 0.05, duration: 0.3 }}
                className="h-6 w-px origin-top bg-gradient-to-b from-glow-blue/60 to-glow-purple/60"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Meta Ads campaign dashboard mockup (demo data)                     */
/* ------------------------------------------------------------------ */
export function MetaAdsDashboard() {
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref);
  const structure = [
    { icon: Megaphone, label: "Campaign" },
    { icon: Layers, label: "Ad Set" },
    { icon: Users, label: "Audience" },
    { icon: Sparkles, label: "Creative" },
    { icon: LayoutTemplate, label: "Landing Page" },
    { icon: UserPlus, label: "Lead Capture" },
  ];
  return (
    <div className="glass-strong overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="font-mono text-xs text-muted-foreground">meta_campaigns.demo</span>
        <span className="rounded-full bg-glow-blue/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-blue">
          Demo Campaign
        </span>
      </div>
      <div ref={ref} className="flex flex-col items-center gap-0 p-5">
        {structure.map((s, i) => (
          <div key={s.label} className="flex w-full flex-col items-center">
            <motion.div
              initial={false}
              animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex w-full max-w-sm items-center gap-3 rounded-xl border border-border bg-background/60 px-4 py-3"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-glow-blue/15 text-glow-blue">
                <s.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{s.label}</span>
            </motion.div>
            {i < structure.length - 1 && (
              <motion.div
                initial={false}
                animate={show ? { scaleY: 1, opacity: 1 } : { scaleY: 0, opacity: 0 }}
                transition={{ delay: i * 0.08 + 0.05, duration: 0.3 }}
                className="h-5 w-px origin-top bg-gradient-to-b from-glow-blue/60 to-glow-purple/60"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Interactive lead journey — clickable steps                          */
/* ------------------------------------------------------------------ */
const JOURNEY = [
  {
    icon: Megaphone,
    label: "Person sees Ad",
    desc: "A targeted Meta Ad reaches the right audience based on interests, location and behavior.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/655e3e7d-b557-48ff-baff-3264ce687547.png",
  },
  {
    icon: ArrowRight,
    label: "Clicks",
    desc: "The ad creative drives a qualified click through to a dedicated landing page.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/4520702a-7c7e-40bd-b71d-d291da510ad3.png",
  },
  {
    icon: LayoutTemplate,
    label: "Visits Landing Page",
    desc: "A conversion-focused page presents the offer and captures attention.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/f12fdba5-82d5-41a4-a79e-fd07e2f64ae6.png",
  },
  {
    icon: UserPlus,
    label: "Submits Information",
    desc: "The visitor fills a form — name, phone, need — and becomes a lead.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/ef2aca0c-1c53-4db3-a1c0-917b91b6057c.png",
  },
  {
    icon: Database,
    label: "Enters CRM",
    desc: "The lead is instantly created in the CRM with full source tracking.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/ebad8171-ed11-4826-8d99-0ca096064dbd.png",
  },
  {
    icon: Mail,
    label: "Receives Follow-up",
    desc: "Automated SMS and email follow-up begins within seconds.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/c48db681-cc0b-4971-a3c1-71ecfe886dda.png",
  },
  {
    icon: GitBranch,
    label: "Moves Through Pipeline",
    desc: "The lead advances through pipeline stages as they engage.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/bb4bb66f-7a94-446c-8b23-1a5be9137bfe.png",
  },
  {
    icon: CheckCircle2,
    label: "Becomes Customer",
    desc: "Consistent follow-up and automation convert the lead into a customer.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/406d8b77-8a52-4462-83b7-27d293ce9ebc.png",
  },
];

export function LeadJourney() {
  const [active, setActive] = useState(0);
  usePreloadImages(JOURNEY.map((j) => j.image));
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="flex flex-col gap-2">
        {JOURNEY.map((step, i) => (
          <button
            key={step.label}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-4 py-3 text-left transition-all duration-150",
              active === i
                ? "border-glow-blue/40 bg-secondary glow-ring"
                : "border-border bg-background/40 hover:bg-secondary/50",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                active === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <step.icon
              className={cn("h-4 w-4", active === i ? "text-glow-blue" : "text-muted-foreground")}
            />
            <span
              className={cn(
                "text-sm font-medium",
                active === i ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {step.label}
            </span>
          </button>
        ))}
      </div>
      <div className="glass-strong flex flex-col overflow-hidden rounded-2xl">
        <div className="relative aspect-video w-full overflow-hidden border-b border-border">
          <AnimatePresence initial={false}>
            <motion.img
              key={active}
              src={JOURNEY[active].image}
              alt={`${JOURNEY[active].label} — visual demonstration`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-blue backdrop-blur-sm">
            Step {String(active + 1).padStart(2, "0")} / 08
          </span>
        </div>
        <div className="flex flex-col justify-center p-7">
          <h3 className="font-display text-2xl font-bold text-foreground">
            {JOURNEY[active].label}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {JOURNEY[active].desc}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Interactive "Why this matters" — clickable problems with visuals   */
/* ------------------------------------------------------------------ */
const PROBLEMS = [
  {
    label: "Leads are missed",
    desc: "When leads arrive with no system to capture and organize them, many slip through the cracks before anyone can respond.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/3e62c454-7cb0-4600-b164-a37770165023.png",
  },
  {
    label: "Follow-ups are inconsistent",
    desc: "Without automation, follow-up depends on memory and manual effort — so messages get sent late, or never at all.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/350cd67b-31e4-4127-b516-b6766632fbce.png",
  },
  {
    label: "Customer data is scattered",
    desc: "Contacts live across spreadsheets, inboxes and apps, so no one has a single, reliable view of the customer journey.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/a5ba19f2-33ea-4489-a292-7bec518b1140.png",
  },
  {
    label: "Manual processes waste time",
    desc: "Repetitive tasks — logging leads, sending reminders, updating stages — eat hours that could go into growth.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/26ee2b1f-88bc-4cb6-a875-5ecccd09f14e.png",
  },
  {
    label: "Advertising and CRM are disconnected",
    desc: "Ads run on one platform and leads land somewhere else, so spend and follow-up never connect into one system.",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/ec7e1990-faa4-4e52-8541-304cb27acffb.png",
  },
];

export function WhyMattersInteractive() {
  const [active, setActive] = useState(0);
  usePreloadImages(PROBLEMS.map((p) => p.image));
  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
      <div className="flex flex-col gap-2">
        {PROBLEMS.map((p, i) => (
          <button
            key={p.label}
            onClick={() => setActive(i)}
            className={cn(
              "flex items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-150",
              active === i
                ? "border-destructive/40 bg-secondary glow-ring"
                : "border-border bg-background/40 hover:bg-secondary/50",
            )}
          >
            <span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold",
                active === i ? "bg-destructive text-white" : "bg-secondary text-muted-foreground",
              )}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <AlertTriangle
              className={cn(
                "h-4 w-4 shrink-0",
                active === i ? "text-destructive" : "text-muted-foreground",
              )}
            />
            <span
              className={cn(
                "text-sm font-medium",
                active === i ? "text-foreground" : "text-muted-foreground",
              )}
            >
              {p.label}
            </span>
          </button>
        ))}
      </div>
      <div className="glass-strong flex flex-col overflow-hidden rounded-2xl">
        <div className="relative aspect-video w-full overflow-hidden border-b border-border">
          <AnimatePresence initial={false}>
            <motion.img
              key={active}
              src={PROBLEMS[active].image}
              alt={`${PROBLEMS[active].label} — visual demonstration`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.12 }}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </AnimatePresence>
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
          <span className="absolute left-4 top-4 rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-destructive backdrop-blur-sm">
            Problem {String(active + 1).padStart(2, "0")} / 05
          </span>
        </div>
        <div className="flex flex-col justify-center p-7">
          <h3 className="font-display text-2xl font-bold text-foreground">
            {PROBLEMS[active].label}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {PROBLEMS[active].desc}
          </p>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CRM dashboard mini — for GoHighLevel section                       */
/* ------------------------------------------------------------------ */
export function CrmDashboardMini() {
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref);
  return (
    <div className="glass-strong overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-3.5">
        <span className="font-mono text-xs text-muted-foreground">crm_dashboard.demo</span>
        <span className="rounded-full bg-glow-blue/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-blue">
          Demo Interface
        </span>
      </div>
      <div ref={ref} className="grid gap-3 p-4 sm:grid-cols-2 lg:grid-cols-3">
        {[
          { icon: UserPlus, label: "New Lead", value: "Captured" },
          { icon: MessageSquare, label: "Contacted", value: "In Progress" },
          { icon: CheckCircle2, label: "Qualified", value: "Ready" },
          { icon: Clock, label: "Follow-Up", value: "Automated" },
          { icon: Target, label: "Appointment", value: "Scheduled" },
          { icon: Users, label: "Customer", value: "Won" },
        ].map((m, i) => (
          <motion.div
            key={m.label}
            initial={false}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}
            className="rounded-xl border border-border bg-background/50 p-4"
          >
            <m.icon className="h-4 w-4 text-glow-blue" />
            <p className="mt-2 font-display text-base font-bold text-foreground">{m.value}</p>
            <p className="text-[11px] text-muted-foreground">{m.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Vertical system flow — animates on viewport entry                  */
/* ------------------------------------------------------------------ */
export function SystemFlow({ steps }: { steps: { icon: typeof Users; label: string }[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref);
  return (
    <div ref={ref} className="mx-auto flex max-w-md flex-col items-center">
      {steps.map((s, i) => (
        <div key={s.label} className="flex flex-col items-center">
          <motion.div
            initial={false}
            animate={show ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="flex w-full items-center gap-3 rounded-xl glass px-5 py-4"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-glow-blue/15 text-glow-blue">
              <s.icon className="h-5 w-5" />
            </span>
            <span className="font-display text-sm font-semibold tracking-tight text-foreground">
              {s.label}
            </span>
          </motion.div>
          {i < steps.length - 1 && (
            <motion.div
              initial={false}
              animate={show ? { scaleY: 1 } : { scaleY: 0 }}
              transition={{ delay: i * 0.12 + 0.1, duration: 0.4 }}
              className="h-8 w-px origin-top bg-gradient-to-b from-glow-blue/60 to-glow-purple/60"
            />
          )}
        </div>
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* AI automation environment — flowing particles                      */
/* ------------------------------------------------------------------ */
const AI_STEPS = [
  { icon: UserPlus, label: "New Lead" },
  { icon: Database, label: "CRM" },
  { icon: Cpu, label: "Qualification" },
  { icon: Mail, label: "Follow-up" },
  { icon: Bell, label: "Reminder" },
  { icon: Users, label: "Sales Team" },
  { icon: CheckCircle2, label: "Customer" },
];

export function AiAutomationFlow() {
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref);
  return (
    <div className="glass-strong rounded-2xl p-6 sm:p-8">
      <div className="mb-6 flex items-center gap-2">
        <Sparkles className="h-4 w-4 text-glow-purple" />
        <span className="font-mono text-xs text-muted-foreground">ai_automation.demo</span>
      </div>
      <div ref={ref} className="flex flex-col gap-0">
        {AI_STEPS.map((step, i) => (
          <div key={step.label} className="flex flex-col">
            <motion.div
              initial={false}
              animate={show ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
              transition={{ delay: i * 0.1, duration: 0.45 }}
              className="flex items-center gap-3"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow-purple/15 text-glow-purple">
                <step.icon className="h-4 w-4" />
              </span>
              <span className="text-sm font-medium text-foreground">{step.label}</span>
              {i === 2 && (
                <span className="ml-auto rounded-full bg-glow-purple/15 px-2.5 py-0.5 text-[10px] font-semibold text-glow-purple">
                  AI
                </span>
              )}
            </motion.div>
            {i < AI_STEPS.length - 1 && (
              <div className="relative my-1 ml-5 h-6 w-px overflow-hidden bg-border">
                <motion.div
                  initial={{ y: "-100%" }}
                  animate={{ y: "100%" }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-x-0 h-1/2 bg-gradient-to-b from-glow-blue to-glow-purple"
                />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
