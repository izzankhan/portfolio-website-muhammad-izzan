import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ArrowRight,
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Database,
  Cpu,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { MagneticButton } from "@/components/magnetic-button";
import { HeroCanvas } from "@/components/hero-canvas";
import { waLink } from "@/lib/wa";
import { SITE } from "@/lib/site";

const FLOW = [
  { icon: Megaphone, label: "Meta Ads" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: UserPlus, label: "CRM" },
  { icon: Cpu, label: "AI" },
  { icon: Mail, label: "Follow-Up" },
  { icon: CheckCircle2, label: "Customer" },
];

const BADGES = ["GoHighLevel Systems", "Meta Ads", "AI Automation"];

export function Hero() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const contentY = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [0, -80]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const visualScale = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [1, 0.85]);
  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden pt-28">
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <HeroCanvas className="pointer-events-none absolute inset-0 h-full w-full opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 pb-20 pt-12 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:pt-20"
      >
        <div>
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold tracking-wide text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary shadow-[0_0_8px_var(--primary)]" />
            {SITE.role}
          </motion.div>

          <motion.h1
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl"
          >
            I Build Systems That <span className="text-gradient">Turn Leads Into Customers.</span>
          </motion.h1>

          <motion.p
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I help businesses generate leads, organize customer journeys and automate follow-ups
            using GoHighLevel, Meta Ads and modern automation systems.
          </motion.p>

          {/* Animated system visualization */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-7 flex flex-wrap items-center gap-2"
          >
            {FLOW.map((f, i) => (
              <div key={f.label} className="flex items-center gap-2">
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 + i * 0.08, duration: 0.4 }}
                  className="glass flex items-center gap-1.5 rounded-lg px-2.5 py-1.5"
                >
                  <f.icon className="h-3.5 w-3.5 text-glow-blue" />
                  <span className="text-[11px] font-medium text-foreground">{f.label}</span>
                </motion.div>
                {i < FLOW.length - 1 && (
                  <ArrowRight className="h-3 w-3 shrink-0 text-glow-blue/50" />
                )}
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href={waLink} external>
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp Me
            </MagneticButton>
            <MagneticButton href="/portfolio" variant="ghost">
              Explore My Systems
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </motion.div>

          {/* Capability badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-8 flex flex-wrap gap-2.5"
          >
            {BADGES.map((b) => (
              <span
                key={b}
                className="gold-badge gold-badge-hover rounded-full px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider"
              >
                {b}
              </span>
            ))}
          </motion.div>
        </div>

        <motion.div style={{ scale: visualScale }} className="relative hidden h-[480px] lg:block">
          <FloatingCards />
        </motion.div>
      </motion.div>
    </section>
  );
}

function FloatingCards() {
  const reduce = useReducedMotion();
  const cards = [
    {
      icon: Megaphone,
      label: "Ad",
      sub: "Meta Ads",
      tone: "var(--glow-blue)",
      cls: "left-0 top-6",
    },
    {
      icon: UserPlus,
      label: "Lead",
      sub: "Captured",
      tone: "var(--glow-cyan)",
      cls: "right-4 top-24",
    },
    {
      icon: Database,
      label: "CRM",
      sub: "Organized",
      tone: "var(--glow-purple)",
      cls: "left-8 top-52",
    },
    {
      icon: Cpu,
      label: "Automation",
      sub: "Follow-up",
      tone: "var(--glow-blue)",
      cls: "right-0 top-64",
    },
    {
      icon: CheckCircle2,
      label: "Customer",
      sub: "Converted",
      tone: "var(--chart-4)",
      cls: "left-1/3 bottom-2",
    },
  ];
  return (
    <div className="relative h-full w-full">
      {cards.map((c, i) => (
        <motion.div
          key={c.label}
          className={`glass-strong absolute ${c.cls} flex w-44 items-center gap-3 rounded-2xl p-4`}
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 + i * 0.15, duration: 0.5 }}
        >
          <motion.div
            animate={reduce ? {} : { y: [0, -8, 0] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut" }}
            className="flex h-11 w-11 items-center justify-center rounded-xl"
            style={{ background: `${c.tone}22`, color: c.tone }}
          >
            <c.icon className="h-5 w-5" />
          </motion.div>
          <div>
            <p className="text-sm font-semibold text-foreground">{c.label}</p>
            <p className="text-[11px] text-muted-foreground">{c.sub}</p>
          </div>
        </motion.div>
      ))}
      <svg className="absolute inset-0 h-full w-full" aria-hidden="true">
        <defs>
          <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="var(--glow-blue)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--glow-purple)" stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          d="M 60 50 Q 200 120 360 90 T 200 280 T 120 440"
          stroke="url(#hero-line)"
          strokeWidth="1.5"
          fill="none"
          strokeDasharray="4 6"
        />
      </svg>
    </div>
  );
}
