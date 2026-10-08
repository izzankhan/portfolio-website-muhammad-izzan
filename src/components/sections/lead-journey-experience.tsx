import { useState, useEffect, useRef, useCallback } from "react";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
  useInView,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Play, Pause, RotateCcw, X, CheckCircle2, Megaphone, Database, Cpu } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { waLink } from "@/lib/wa";
import { cn } from "@/lib/utils";
import { STAGES, STEP_MS, type Stage } from "./lead-journey-data";
import { StageVisual } from "./lead-journey-visuals";

/* Travelling lead — a glowing glass profile card */
function LeadOrb() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      animate={reduce ? {} : { y: [0, -6, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="flex items-center gap-2.5 rounded-2xl glass-strong px-3 py-2 shadow-[0_0_30px_-6px_var(--glow-gold)]"
    >
      <span className="relative flex h-7 w-7 items-center justify-center rounded-full bg-glow-gold/15 text-glow-gold">
        <span className="absolute inset-0 animate-ping rounded-full bg-glow-gold/20" />
        <span className="relative h-3.5 w-3.5 rounded-full bg-glow-gold" />
      </span>
      <div className="leading-tight">
        <p className="text-[9px] font-semibold uppercase tracking-wider text-glow-gold">New Lead</p>
        <p className="text-xs font-bold text-foreground">Alex Morgan</p>
      </div>
    </motion.div>
  );
}

/* Desktop: horizontal track with the lead travelling between nodes */
function DesktopJourney({ active, setActive }: { active: number; setActive: (n: number) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [nodeCenters, setNodeCenters] = useState<number[]>([]);

  useEffect(() => {
    const measure = () => {
      if (!trackRef.current) return;
      const trackRect = trackRef.current.getBoundingClientRect();
      const nodes = trackRef.current.querySelectorAll<HTMLElement>("[data-node]");
      setNodeCenters(
        Array.from(nodes).map((n) => {
          const r = n.getBoundingClientRect();
          return r.left - trackRect.left + r.width / 2;
        }),
      );
    };
    measure();
    window.addEventListener("resize", measure);
    const t = setTimeout(measure, 300);
    return () => {
      window.removeEventListener("resize", measure);
      clearTimeout(t);
    };
  }, []);

  const orbX = nodeCenters[active] ?? 0;

  return (
    <div className="relative">
      <div ref={trackRef} className="relative h-56">
        <div className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-border" />
        <motion.div
          className="absolute top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-glow-gold/60 to-glow-amber/60"
          animate={{ width: orbX }}
          transition={{ type: "spring", stiffness: 90, damping: 20 }}
        />
        <div className="absolute inset-0 flex items-center justify-between">
          {STAGES.map((s, i) => {
            const isActive = i === active;
            const isDone = i < active;
            return (
              <button
                key={s.num}
                data-node
                onClick={() => setActive(i)}
                className="group relative flex flex-col items-center"
                aria-label={`Stage ${s.num}: ${s.title}`}
              >
                <motion.div
                  animate={{
                    scale: isActive ? 1.12 : 1,
                    opacity: isActive ? 1 : isDone ? 0.7 : 0.45,
                  }}
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl border transition-colors",
                    isActive
                      ? "border-glow-gold/50 bg-glow-gold/15 text-glow-gold shadow-[0_0_25px_-6px_var(--glow-gold)]"
                      : isDone
                        ? "border-glow-gold/20 bg-secondary text-glow-gold/70"
                        : "border-border bg-background/60 text-muted-foreground",
                  )}
                >
                  <s.icon className="h-5 w-5" />
                </motion.div>
                <span
                  className={cn(
                    "mt-2 font-mono text-[10px] font-bold",
                    isActive ? "text-glow-gold" : "text-muted-foreground",
                  )}
                >
                  {s.num}
                </span>
                <span
                  className={cn(
                    "mt-0.5 max-w-[72px] text-center text-[9px] font-semibold uppercase leading-tight tracking-tight",
                    isActive ? "text-foreground" : "text-muted-foreground",
                  )}
                >
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>
        <motion.div
          className="pointer-events-none absolute top-1/2 z-20"
          animate={{ x: orbX }}
          transition={{ type: "spring", stiffness: 90, damping: 18 }}
          style={{ left: 0 }}
        >
          <div className="-translate-x-1/2 -translate-y-1/2">
            <LeadOrb />
          </div>
        </motion.div>
      </div>
      <ActiveStagePanel stage={STAGES[active]} active={active} total={STAGES.length} />
    </div>
  );
}

function ActiveStagePanel({
  stage,
  active,
  total,
}: {
  stage: Stage;
  active: number;
  total: number;
}) {
  return (
    <div className="glass-strong mt-6 overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between border-b border-border px-5 py-3">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-glow-gold">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <span className="text-xs text-muted-foreground">·</span>
          <span className="font-mono text-xs text-muted-foreground">lead_journey.demo</span>
        </div>
        <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
          Demo System
        </span>
      </div>
      <div className="grid gap-5 p-5 sm:grid-cols-[1.1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
              <stage.icon className="h-5 w-5" />
            </span>
            <div>
              <span className="font-mono text-[10px] font-bold text-glow-gold">{stage.num}</span>
              <h3 className="font-display text-lg font-bold leading-tight text-foreground">
                {stage.title}
              </h3>
            </div>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{stage.short}</p>
        </div>
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <StageVisual stage={stage} />
        </div>
      </div>
    </div>
  );
}

function MobileJourney({ active, setActive }: { active: number; setActive: (n: number) => void }) {
  const reduce = useReducedMotion();
  return (
    <div className="relative">
      <div className="absolute bottom-0 left-6 top-6 w-px bg-border" />
      <motion.div
        className="absolute left-6 w-px bg-gradient-to-b from-glow-gold/60 to-glow-amber/60"
        animate={{ height: `${(active / (STAGES.length - 1)) * 100}%` }}
        transition={{ type: "spring", stiffness: 90, damping: 20 }}
        style={{ top: 6 }}
      />
      <div className="space-y-3">
        {STAGES.map((s, i) => {
          const isActive = i === active;
          const isDone = i < active;
          return (
            <button
              key={s.num}
              onClick={() => setActive(i)}
              className={cn(
                "relative flex w-full items-start gap-3 rounded-2xl border p-3 text-left transition-all",
                isActive
                  ? "border-glow-gold/40 bg-secondary glow-ring"
                  : "border-border bg-background/40",
              )}
            >
              <motion.div
                animate={{ scale: isActive ? 1.1 : 1 }}
                className={cn(
                  "relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border",
                  isActive
                    ? "border-glow-gold/50 bg-glow-gold/15 text-glow-gold"
                    : isDone
                      ? "border-glow-gold/20 bg-secondary text-glow-gold/70"
                      : "border-border bg-background text-muted-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    className="absolute inset-0 rounded-2xl border border-glow-gold/40"
                    animate={reduce ? {} : { scale: [1, 1.3], opacity: [0.6, 0] }}
                    transition={{ duration: 1.6, repeat: Infinity }}
                  />
                )}
                <s.icon className="h-5 w-5" />
              </motion.div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] font-bold text-glow-gold">{s.num}</span>
                  <span className="text-xs font-bold uppercase tracking-tight text-foreground">
                    {s.title}
                  </span>
                </div>
                <p className="mt-1 text-[11px] leading-relaxed text-muted-foreground">{s.short}</p>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="mt-2 overflow-hidden"
                  >
                    <div className="rounded-lg border border-border bg-background/60 p-2">
                      <StageVisual stage={s} />
                    </div>
                  </motion.div>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function InfoDrawer({ stage, onClose }: { stage: Stage | null; onClose: () => void }) {
  return (
    <AnimatePresence>
      {stage && (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
            className="glass-strong relative w-full max-w-md overflow-hidden rounded-2xl p-6"
          >
            <button
              onClick={onClose}
              className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
                <stage.icon className="h-5 w-5" />
              </span>
              <div>
                <span className="font-mono text-[10px] font-bold text-glow-gold">{stage.num}</span>
                <h3 className="font-display text-xl font-bold leading-tight text-foreground">
                  {stage.title}
                </h3>
              </div>
            </div>
            <div className="mt-5 space-y-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
                  What happens here?
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.what}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
                  Why it matters
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.why}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
                  What I can build
                </p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{stage.build}</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function LeadJourneyExperience() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [drawer, setDrawer] = useState<Stage | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [userInteracted, setUserInteracted] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { margin: "-100px" });

  // Scroll-scrub: scrolling through the section advances the lead.
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 85%", "end 60%"],
  });
  const scrubStage = useTransform(scrollYProgress, [0, 1], [0, STAGES.length - 1]);
  useMotionValueEvent(scrubStage, "change", (v) => {
    if (reduce || userInteracted) return;
    const idx = Math.round(v);
    setActive((prev) => (prev !== idx ? idx : prev));
  });

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduce || !inView) {
      setPlaying(false);
      return;
    }
    setPlaying(true);
  }, [reduce, inView]);

  useEffect(() => {
    if (!playing || reduce) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STAGES.length), STEP_MS);
    return () => clearInterval(id);
  }, [playing, reduce]);

  const replay = useCallback(() => {
    setUserInteracted(true);
    setActive(0);
    setPlaying(true);
  }, []);
  const togglePlay = useCallback(() => {
    setUserInteracted(true);
    setPlaying((p) => !p);
  }, []);
  const onStageClick = useCallback((i: number) => {
    setUserInteracted(true);
    setActive(i);
  }, []);

  return (
    <Section id="lead-journey" className="overflow-hidden">
      <div ref={sectionRef} className="pointer-events-none absolute inset-0 page-glow opacity-40" />
      <SectionHeading
        eyebrow="Interactive Demo · Sample System"
        title="See How Your Lead Moves Through The System"
        intro="From the first click to the customer — see how marketing, CRM and automation work together as one connected journey."
        align="center"
      />
      <Reveal>
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full glass px-4 py-2">
            <span className="font-mono text-xs font-bold text-glow-gold">
              {String(active + 1).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")}
            </span>
            <span className="text-xs text-muted-foreground">stage</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-glow-gold"
              aria-label={playing ? "Pause" : "Play"}
            >
              {playing ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
            </button>
            <button
              onClick={replay}
              className="flex h-10 w-10 items-center justify-center rounded-full glass text-foreground transition-colors hover:text-glow-gold"
              aria-label="Replay journey"
            >
              <RotateCcw className="h-4 w-4" />
            </button>
          </div>
        </div>
      </Reveal>
      <Reveal>
        <div className="glass-strong rounded-3xl p-5 sm:p-8">
          {isMobile ? (
            <MobileJourney active={active} setActive={onStageClick} />
          ) : (
            <DesktopJourney active={active} setActive={onStageClick} />
          )}
          <div className="mt-6 flex flex-col items-center justify-between gap-3 border-t border-border pt-5 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              Tap any stage to focus it ·{" "}
              <button
                onClick={() => setDrawer(STAGES[active])}
                className="font-semibold text-glow-gold underline-offset-2 hover:underline"
              >
                Explore this stage
              </button>
            </p>
            <span className="rounded-full bg-secondary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Concept / Demonstration
            </span>
          </div>
        </div>
      </Reveal>
      <InfoDrawer stage={drawer} onClose={() => setDrawer(null)} />
    </Section>
  );
}

const BEHIND = [
  {
    icon: Megaphone,
    title: "CAPTURE",
    desc: "Ads and landing pages bring potential customers into the system.",
  },
  { icon: Database, title: "ORGANIZE", desc: "GoHighLevel stores and organizes lead information." },
  {
    icon: Cpu,
    title: "AUTOMATE",
    desc: "AI and workflows help manage qualification and follow-up.",
  },
  {
    icon: CheckCircle2,
    title: "CONVERT",
    desc: "Qualified leads can move toward appointments and customers.",
  },
];

export function BehindTheScenes() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Behind The Scenes"
        title="What Happens Behind The Scenes?"
        align="center"
      />
      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {BEHIND.map((c) => (
          <StaggerItem key={c.title}>
            <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold transition-transform group-hover:scale-110">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-base font-bold tracking-tight text-foreground">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal delay={0.1}>
        <div className="glass-strong mt-6 flex flex-col items-center gap-5 rounded-2xl p-8 text-center sm:p-10">
          <h3 className="font-display text-2xl font-bold text-foreground sm:text-3xl">
            Want a system like this for your business?
          </h3>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Let's build your lead journey — connected from the first click to the customer.
          </p>
          <MagneticButton href={waLink} external>
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp Me
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}
