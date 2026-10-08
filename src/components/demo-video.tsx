import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  UserPlus,
  Database,
  GitBranch,
  Mail,
  Clock,
  MessageSquare,
  Bell,
  Megaphone,
  Target,
  LayoutTemplate,
  CheckCircle2,
  MousePointerClick,
  ArrowRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

/* ------------------------------------------------------------------ */
/* Demo "video" — an auto-playing animated walkthrough of a system.   */
/* Each scene plays a looping cinematic sequence showing the system   */
/* working step by step. No real video file needed.                  */
/* ------------------------------------------------------------------ */

type SceneKey = "ghl" | "meta" | "journey";

const SCENES: Record<SceneKey, { title: string; desc: string; duration: number }> = {
  ghl: {
    title: "GoHighLevel Automation Demo",
    desc: "A new lead enters the CRM and triggers an automated follow-up workflow.",
    duration: 9,
  },
  meta: {
    title: "Meta Ads Campaign Walkthrough",
    desc: "From campaign setup to a captured lead entering the CRM.",
    duration: 9,
  },
  journey: {
    title: "Lead Journey Demo",
    desc: "Following a lead from the first ad click to becoming a customer.",
    duration: 10,
  },
};

/* ---------- Shared chrome ---------- */
function VideoChrome({
  playing,
  progress,
  onToggle,
  onReplay,
  label,
  children,
}: {
  playing: boolean;
  progress: number;
  onToggle: () => void;
  onReplay: () => void;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-2xl glass">
      {/* stage */}
      <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-gradient-to-br from-glow-blue/10 via-glow-purple/10 to-transparent">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        <div className="pointer-events-none absolute inset-0 page-glow opacity-30" />
        <div className="relative z-10 h-full w-full p-5">{children}</div>

        {/* center play overlay when paused */}
        <AnimatePresence>
          {!playing && (
            <motion.button
              type="button"
              onClick={onToggle}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="absolute inset-0 z-20 flex items-center justify-center bg-background/40 backdrop-blur-sm"
              aria-label="Play demo"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-6px_var(--glow-blue)] transition-transform group-hover:scale-110">
                <Play className="h-6 w-6 translate-x-0.5 fill-current" />
              </span>
            </motion.button>
          )}
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="flex items-center gap-3 border-t border-border px-5 py-3.5">
        <button
          type="button"
          onClick={onToggle}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-glow-blue/20"
          aria-label={playing ? "Pause" : "Play"}
        >
          {playing ? (
            <Pause className="h-3.5 w-3.5 fill-current" />
          ) : (
            <Play className="h-3.5 w-3.5 translate-x-0.5 fill-current" />
          )}
        </button>
        <button
          type="button"
          onClick={onReplay}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground"
          aria-label="Replay"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
        {/* progress bar */}
        <div className="relative h-1.5 flex-1 overflow-hidden rounded-full bg-secondary">
          <motion.div
            className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-glow-blue to-glow-purple"
            style={{ width: `${progress * 100}%` }}
          />
        </div>
        <span className="rounded-full bg-glow-blue/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-blue">
          {label}
        </span>
      </div>
    </div>
  );
}

/* ---------- Scene 1: GoHighLevel Automation ---------- */
function GhlScene({ playing, t }: { playing: boolean; t: number }) {
  // t is 0..1 progress through the loop
  const reduce = useReducedMotion();
  const steps = [
    { icon: UserPlus, label: "New Lead", tone: "var(--glow-blue)" },
    { icon: Database, label: "Create Contact", tone: "var(--glow-cyan)" },
    { icon: GitBranch, label: "Add to Pipeline", tone: "var(--glow-purple)" },
    { icon: Mail, label: "Send Follow-Up", tone: "var(--glow-blue)" },
    { icon: Clock, label: "Wait 24h", tone: "var(--glow-cyan)" },
    { icon: MessageSquare, label: "Follow-Up Msg", tone: "var(--glow-purple)" },
    { icon: Bell, label: "Notify Team", tone: "var(--glow-cyan)" },
  ];
  const activeIdx = playing ? Math.min(steps.length - 1, Math.floor(t * steps.length)) : -1;

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-2.5 w-2.5 gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </span>
        <span className="ml-1 font-mono text-[10px] text-muted-foreground">ghl_workflow.demo</span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-[1fr_1fr]">
        {/* lead card dropping in */}
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            New Lead
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={playing ? "lead" : "idle"}
              initial={reduce ? { opacity: 0 } : { opacity: 0, y: -24, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="rounded-lg border border-glow-blue/30 bg-glow-blue/5 p-3"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-glow-blue/20 text-[10px] font-bold text-glow-blue">
                  SM
                </span>
                <div>
                  <p className="text-xs font-semibold text-foreground">Sarah M.</p>
                  <p className="text-[10px] text-muted-foreground">Dental Inquiry</p>
                </div>
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">Source: Meta Ads • Just now</p>
            </motion.div>
          </AnimatePresence>
          <motion.div
            className="mt-3 rounded-lg border border-border bg-background/60 p-2.5"
            animate={playing && activeIdx >= 3 ? { borderColor: "var(--glow-blue)" } : {}}
          >
            <p className="text-[10px] font-medium text-muted-foreground">Follow-up message</p>
            <motion.p
              className="mt-1 text-[11px] text-foreground"
              initial={{ opacity: 0 }}
              animate={playing && activeIdx >= 3 ? { opacity: 1 } : { opacity: 0 }}
            >
              Hi Sarah! Thanks for your inquiry. Would you like to book a consultation?
            </motion.p>
          </motion.div>
        </div>

        {/* workflow nodes lighting up */}
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Workflow
          </p>
          <div className="flex flex-col gap-1">
            {steps.map((s, i) => {
              const lit = playing && i <= activeIdx;
              return (
                <div key={s.label} className="flex items-center gap-2">
                  <motion.div
                    className="flex flex-1 items-center gap-2 rounded-md border px-2.5 py-1.5"
                    animate={{
                      borderColor: lit ? s.tone : "var(--border)",
                      backgroundColor: lit ? `${s.tone}1a` : "transparent",
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <s.icon
                      className="h-3 w-3"
                      style={{ color: lit ? s.tone : "var(--muted-foreground)" }}
                    />
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                    >
                      {s.label}
                    </span>
                  </motion.div>
                  {i < steps.length - 1 && (
                    <motion.span
                      className="h-2 w-px"
                      animate={{ backgroundColor: lit ? s.tone : "var(--border)" }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Scene 2: Meta Ads Campaign ---------- */
function MetaScene({ playing, t }: { playing: boolean; t: number }) {
  const reduce = useReducedMotion();
  const stages = ["Campaign", "Ad Set", "Audience", "Creative", "Landing Page", "Lead", "CRM"];
  const activeIdx = playing ? Math.min(stages.length - 1, Math.floor(t * stages.length)) : -1;
  const bars = [40, 58, 72, 64, 85, 92, 78];

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-2.5 w-2.5 gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </span>
        <span className="ml-1 font-mono text-[10px] text-muted-foreground">
          meta_campaigns.demo
        </span>
      </div>

      <div className="grid flex-1 grid-cols-1 gap-3 sm:grid-cols-[1.1fr_1fr]">
        {/* campaign funnel */}
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Campaign Structure
          </p>
          <div className="flex flex-col gap-1.5">
            {stages.map((s, i) => {
              const lit = playing && i <= activeIdx;
              return (
                <motion.div
                  key={s}
                  initial={false}
                  animate={{
                    opacity: lit ? 1 : 0.45,
                    x: lit ? 0 : reduce ? 0 : -8,
                  }}
                  transition={{ duration: 0.35 }}
                  className="flex items-center gap-2"
                  style={{ width: `${100 - i * 6}%` }}
                >
                  <div
                    className="flex flex-1 items-center gap-2 rounded-md border px-2.5 py-1.5"
                    style={{
                      borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                      background: lit ? "var(--glow-blue)1a" : "transparent",
                    }}
                  >
                    <span
                      className="text-[10px] font-bold"
                      style={{ color: lit ? "var(--glow-blue)" : "var(--muted-foreground)" }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="text-[11px] font-medium"
                      style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                    >
                      {s}
                    </span>
                    {i === 4 && playing && activeIdx >= 4 && (
                      <MousePointerClick className="ml-auto h-3 w-3 text-glow-blue" />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* metrics + lead capture */}
        <div className="flex flex-col gap-3">
          <div className="rounded-xl border border-border bg-background/50 p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Lead Flow (7d)
            </p>
            <div className="flex h-16 items-end gap-1.5">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t bg-gradient-to-t from-glow-blue/40 to-glow-blue"
                  initial={{ height: 0 }}
                  animate={playing ? { height: `${h}%` } : { height: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                />
              ))}
            </div>
          </div>
          <div className="flex-1 rounded-xl border border-border bg-background/50 p-3">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
              Lead Captured
            </p>
            <AnimatePresence>
              {playing && activeIdx >= 5 && (
                <motion.div
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-2 rounded-lg border border-glow-blue/30 bg-glow-blue/5 p-2.5"
                >
                  <UserPlus className="h-4 w-4 text-glow-blue" />
                  <div>
                    <p className="text-xs font-semibold text-foreground">New lead → CRM</p>
                    <p className="text-[10px] text-muted-foreground">Synced automatically</p>
                  </div>
                  <CheckCircle2 className="ml-auto h-4 w-4 text-glow-blue" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Scene 3: Lead Journey ---------- */
function JourneyScene({ playing, t }: { playing: boolean; t: number }) {
  const reduce = useReducedMotion();
  const steps = [
    { icon: Megaphone, label: "Sees Ad" },
    { icon: MousePointerClick, label: "Clicks" },
    { icon: LayoutTemplate, label: "Landing Page" },
    { icon: UserPlus, label: "Submits" },
    { icon: Database, label: "Enters CRM" },
    { icon: Mail, label: "Follow-up" },
    { icon: GitBranch, label: "Pipeline" },
    { icon: CheckCircle2, label: "Customer" },
  ];
  const activeIdx = playing ? Math.min(steps.length - 1, Math.floor(t * steps.length)) : -1;

  return (
    <div className="flex h-full flex-col">
      <div className="mb-3 flex items-center gap-2">
        <span className="flex h-2.5 w-2.5 gap-1">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
        </span>
        <span className="ml-1 font-mono text-[10px] text-muted-foreground">lead_journey.demo</span>
      </div>

      {/* path with traveling dot */}
      <div className="relative flex-1 rounded-xl border border-border bg-background/50 p-4">
        <div className="grid h-full grid-cols-2 gap-2 sm:grid-cols-4">
          {steps.map((s, i) => {
            const lit = playing && i <= activeIdx;
            const isCurrent = playing && i === activeIdx;
            return (
              <div key={s.label} className="flex flex-col items-center justify-center gap-2">
                <motion.div
                  className="flex h-11 w-11 items-center justify-center rounded-xl border"
                  animate={{
                    borderColor: lit ? "var(--glow-blue)" : "var(--border)",
                    backgroundColor: lit ? "var(--glow-blue)1a" : "transparent",
                    scale: isCurrent ? 1.12 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <s.icon
                    className="h-5 w-5"
                    style={{ color: lit ? "var(--glow-blue)" : "var(--muted-foreground)" }}
                  />
                </motion.div>
                <span
                  className="text-center text-[10px] font-medium"
                  style={{ color: lit ? "var(--foreground)" : "var(--muted-foreground)" }}
                >
                  {s.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* moving particle along bottom */}
        <motion.div
          className="absolute bottom-3 left-4 h-1.5 w-1.5 rounded-full bg-glow-blue shadow-[0_0_12px_var(--glow-blue)]"
          animate={playing ? { left: ["5%", "95%"], opacity: [0, 1, 1, 0] } : { opacity: 0 }}
          transition={{ duration: 8, ease: "linear", repeat: Infinity }}
        />
      </div>

      {/* status line */}
      <div className="mt-3 flex items-center gap-2 rounded-lg border border-border bg-background/50 px-3 py-2">
        <Target className="h-3.5 w-3.5 text-glow-blue" />
        <span className="text-[11px] text-muted-foreground">
          {playing && activeIdx >= 0
            ? `Step ${activeIdx + 1} of ${steps.length}: ${steps[activeIdx].label}`
            : "Press play to follow a lead from ad to customer"}
        </span>
      </div>
    </div>
  );
}

/* ---------- Public component ---------- */
export function DemoVideo({ scene }: { scene: SceneKey }) {
  const config = SCENES[scene];
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef<number | null>(null);
  const startRef = useRef<number | null>(null);

  useEffect(() => {
    if (!playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      startRef.current = null;
      return;
    }
    const tick = (now: number) => {
      if (startRef.current === null) startRef.current = now - progress * config.duration * 1000;
      const elapsed = (now - startRef.current) / 1000;
      const p = (elapsed % config.duration) / config.duration;
      setProgress(p);
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playing, config.duration]);

  const replay = () => {
    setProgress(0);
    startRef.current = null;
    setPlaying(true);
  };

  return (
    <div className="flex h-full flex-col">
      <VideoChrome
        playing={playing}
        progress={progress}
        onToggle={() => setPlaying((p) => !p)}
        onReplay={replay}
        label="Demo"
      >
        {scene === "ghl" && <GhlScene playing={playing} t={progress} />}
        {scene === "meta" && <MetaScene playing={playing} t={progress} />}
        {scene === "journey" && <JourneyScene playing={playing} t={progress} />}
      </VideoChrome>
      <div className="mt-4 px-1">
        <h3 className="font-display text-base font-bold text-foreground">{config.title}</h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{config.desc}</p>
      </div>
    </div>
  );
}

export const DEMO_SCENES = SCENES;
export type { SceneKey };
