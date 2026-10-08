import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Volume2,
  VolumeX,
  Home,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowDown,
  CalendarCheck,
  MousePointer,
} from "lucide-react";
import { useDemoAudio } from "@/lib/use-demo-audio";

type Scene = {
  title: string;
  duration: number;
  voice: string;
  render: () => JSX.Element;
};

const scenes: Scene[] = [
  {
    title: "Intro",
    duration: 7,
    voice:
      "Let's see how a property enquiry can move from the first interaction to a qualified lead and scheduled viewing through an automated system.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xl font-bold text-foreground sm:text-2xl"
        >
          Complete Real Estate Lead Automation Workflow
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-glow-gold"
        >
          From Property Enquiry to Scheduled Viewing
        </motion.p>
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
          className="mt-2 h-px w-48 bg-gradient-to-r from-transparent via-glow-gold to-transparent"
        />
      </div>
    ),
  },
  {
    title: "Property Landing Page",
    duration: 13,
    voice:
      "The journey begins when a potential buyer discovers a property and requests more information.",
    render: () => (
      <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-xl border border-border bg-gradient-to-br from-glow-gold/10 to-transparent">
          <Home className="h-12 w-12 text-glow-gold/60" />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
            Featured Property
          </span>
          <p className="font-display text-lg font-bold text-foreground">
            Modern 3-Bedroom Family Home
          </p>
          <p className="text-xs text-muted-foreground">Manchester · £450,000</p>
          <div className="mt-1 flex flex-wrap gap-1.5">
            {["3 Beds", "2 Baths", "Garden", "Parking"].map((f) => (
              <span
                key={f}
                className="rounded-full border border-border bg-background/50 px-2.5 py-1 text-[10px] text-muted-foreground"
              >
                {f}
              </span>
            ))}
          </div>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
          >
            <MousePointer className="h-3.5 w-3.5" /> Request Information
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Enquiry Form",
    duration: 12,
    voice:
      "Daniel submits his requirements, including his preferred location, property type and budget.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <div className="rounded-xl border border-border bg-background/60 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-glow-gold">
            Property Enquiry Form
          </p>
          {[
            { l: "Name", v: "Daniel Carter" },
            { l: "Looking For", v: "Buying" },
            { l: "Location", v: "Manchester" },
            { l: "Property Type", v: "3-Bedroom Home" },
            { l: "Budget", v: "£450,000" },
          ].map((f, i) => (
            <motion.div
              key={f.l}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.3 }}
              className="mb-2"
            >
              <p className="text-[10px] text-muted-foreground">{f.l}</p>
              <p className="rounded-md border border-border bg-background/40 px-2.5 py-1.5 text-xs font-medium text-foreground">
                {f.v}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-glow-gold/15 py-2 text-xs font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> Enquiry Received
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "CRM Lead",
    duration: 11,
    voice: "The enquiry is immediately captured and organized inside the CRM.",
    render: () => (
      <div className="mx-auto max-w-md">
        <div className="rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4">
          <div className="mb-3 flex items-center gap-1.5">
            <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-glow-gold" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
              New Property Lead
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glow-gold/20 text-sm font-bold text-glow-gold">
              DC
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">Daniel Carter</p>
              <p className="text-xs text-muted-foreground">3-Bedroom Family Home</p>
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            {[
              { l: "Budget", v: "£450,000" },
              { l: "Location", v: "Manchester" },
              { l: "Source", v: "Property Landing Page" },
            ].map((r) => (
              <div
                key={r.l}
                className="flex items-center justify-between rounded-md border border-border bg-background/50 px-3 py-1.5 text-xs"
              >
                <span className="text-[10px] uppercase tracking-wider text-muted-foreground">
                  {r.l}
                </span>
                <span className="font-medium text-foreground">{r.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Automation",
    duration: 12,
    voice:
      "The automation then qualifies the lead, updates the pipeline and prepares the next step for the property agent.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-2">
        {[
          "Form Submitted",
          "Create Contact",
          "Add to Pipeline",
          "Qualify Lead",
          "Property Match",
          "Notify Agent",
        ].map((node, i) => (
          <motion.div
            key={node}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.4 }}
            className="flex items-center gap-2"
          >
            <div className="flex items-center gap-2 rounded-lg border border-glow-gold/40 bg-glow-gold/10 px-3 py-1.5 text-xs font-semibold text-glow-gold">
              <Sparkles className="h-3.5 w-3.5" /> {node}
            </div>
            {i < 5 && <ArrowDown className="h-3 w-3 text-glow-gold/50" />}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Lead Qualification",
    duration: 10,
    voice:
      "Once the lead is qualified, the system can identify the relevant property and prepare the agent for follow-up.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <div className="rounded-xl border border-border bg-background/60 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-glow-gold">
            Lead Qualification
          </p>
          {[
            "Buying or Renting?",
            "Preferred Location?",
            "Budget?",
            "Property Type?",
            "Moving Timeline?",
          ].map((q, i) => (
            <motion.div
              key={q}
              initial={{ opacity: 0.4 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.3 }}
              className="mb-2 rounded-md border border-border bg-background/40 px-2.5 py-1.5 text-xs text-foreground"
            >
              {q}
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-glow-gold/15 py-2 text-xs font-semibold text-glow-gold"
          >
            <CheckCircle2 className="h-3.5 w-3.5" /> Qualification Complete · High Priority
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Property Match",
    duration: 10,
    voice: "The lead is matched with a relevant property and can request a viewing.",
    render: () => (
      <div className="mx-auto max-w-md">
        <div className="rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4">
          <div className="mb-2 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-glow-gold" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
              Recommended Property Match
            </span>
          </div>
          <p className="font-display text-base font-bold text-foreground">
            Modern 3-Bedroom Family Home
          </p>
          <p className="mt-1 text-xs text-muted-foreground">Manchester · £450,000</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-primary py-2 text-xs font-semibold text-primary-foreground"
          >
            <ArrowRight className="h-3.5 w-3.5" /> Request Viewing
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Agent Notification",
    duration: 8,
    voice:
      "The agent receives a clear notification with the lead's information and property interest.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-glow-gold/30 bg-glow-gold/5 p-4"
        >
          <div className="mb-3 flex items-center gap-1.5">
            <span className="flex h-1.5 w-1.5 animate-pulse rounded-full bg-glow-gold" />
            <span className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
              New Qualified Property Lead
            </span>
          </div>
          <p className="text-sm font-semibold text-foreground">Daniel Carter</p>
          <p className="text-xs text-muted-foreground">3-Bedroom Family Home · £450,000</p>
          <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-glow-gold/40 bg-glow-gold/10 py-2 text-xs font-semibold text-glow-gold">
            <ArrowRight className="h-3.5 w-3.5" /> Open Lead
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Viewing Calendar",
    duration: 12,
    voice: "The buyer selects an available viewing time, and the appointment is confirmed.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-glow-gold">
          Schedule Property Viewing
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { d: "Tuesday", t: "11:00 AM" },
            { d: "Tuesday", t: "3:00 PM" },
            { d: "Wednesday", t: "1:30 PM" },
            { d: "Thursday", t: "4:00 PM" },
          ].map((s, i) => {
            const sel = i === 2;
            return (
              <motion.div
                key={`${s.d}-${s.t}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.2 }}
                className={`flex items-center justify-between rounded-lg border p-2.5 text-xs ${
                  sel
                    ? "border-glow-gold/60 bg-glow-gold/10 text-glow-gold"
                    : "border-border bg-background/40 text-foreground"
                }`}
              >
                <div>
                  <p className="font-semibold">{s.d}</p>
                  <p className="text-[10px] text-muted-foreground">{s.t}</p>
                </div>
                {sel && <CheckCircle2 className="h-3.5 w-3.5" />}
              </motion.div>
            );
          })}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-glow-gold/15 py-2 text-xs font-semibold text-glow-gold"
        >
          <CalendarCheck className="h-3.5 w-3.5" /> Viewing Confirmed
        </motion.div>
      </div>
    ),
  },
  {
    title: "CRM Update",
    duration: 8,
    voice: "The CRM automatically reflects the new stage, keeping the property team organized.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-1.5">
        {["New Lead", "Contacted", "Qualified", "Property Matched", "Viewing Booked"].map(
          (stage, i) => (
            <motion.div
              key={stage}
              initial={{ opacity: 0.3 }}
              animate={{ opacity: i === 4 ? 1 : 0.5 }}
              transition={{ delay: i * 0.15 }}
              className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold ${
                i === 4
                  ? "border-glow-gold/60 bg-glow-gold/15 text-glow-gold"
                  : "border-border bg-background/40 text-muted-foreground"
              }`}
            >
              {stage}
            </motion.div>
          ),
        )}
      </div>
    ),
  },
  {
    title: "Reminder",
    duration: 9,
    voice: "Automated reminders help keep the buyer informed before the viewing.",
    render: () => (
      <div className="mx-auto max-w-sm space-y-3">
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
            24 Hours Before
          </p>
          <p className="mt-1 text-xs text-foreground/90">
            “Reminder: Your property viewing is tomorrow at 1:30 PM.”
          </p>
        </div>
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
            2 Hours Before
          </p>
          <p className="mt-1 text-xs text-foreground/90">
            “Your property viewing is coming up today at 1:30 PM.”
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Post-Viewing",
    duration: 6,
    voice: "",
    render: () => (
      <div className="mx-auto max-w-sm">
        <div className="flex items-center gap-2 rounded-lg border border-glow-gold/30 bg-glow-gold/5 px-4 py-2.5 text-sm font-semibold text-glow-gold">
          <CheckCircle2 className="h-4 w-4" /> Viewing Completed
        </div>
        <div className="mt-3 rounded-xl border border-border bg-background/50 p-3">
          <p className="text-xs text-foreground/90">
            “Thanks for viewing the property today. Would you like more information or would you
            like to discuss the next step?”
          </p>
        </div>
        <div className="mt-3 flex gap-2">
          {["More Info", "Speak With Agent"].map((b) => (
            <div
              key={b}
              className="flex-1 rounded-full border border-border bg-background/40 py-2 text-center text-[10px] font-semibold text-foreground"
            >
              {b}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Complete Workflow",
    duration: 7,
    voice:
      "From property enquiry to scheduled viewing, every step is connected through one streamlined lead management system.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-1.5 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-lg font-bold text-foreground"
        >
          From Property Enquiry to Viewing
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-glow-gold"
        >
          Real Estate Automation Portfolio Demonstration
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-[10px] text-muted-foreground"
        >
          Fictional data — created for demonstration purposes.
        </motion.p>
      </div>
    ),
  },
];

export function ReCinematicDemo() {
  const [playing, setPlaying] = useState(false);
  const [sceneIdx, setSceneIdx] = useState(0);
  const [progress, setProgress] = useState(0);
  const [muted, setMuted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalDuration = scenes.reduce((a, s) => a + s.duration, 0);

  useDemoAudio({
    playing,
    muted,
    narration: scenes[sceneIdx]?.voice ?? "",
    sceneId: sceneIdx,
  });

  useEffect(() => {
    if (!playing) return;
    const scene = scenes[sceneIdx];
    const tick = 100;
    let elapsed = 0;
    const interval = setInterval(() => {
      elapsed += tick;
      const pct = Math.min((elapsed / (scene.duration * 1000)) * 100, 100);
      setProgress(pct);
      if (pct >= 100) {
        clearInterval(interval);
        if (sceneIdx < scenes.length - 1) {
          setSceneIdx((i) => i + 1);
          setProgress(0);
        } else {
          setPlaying(false);
        }
      }
    }, tick);
    return () => clearInterval(interval);
  }, [playing, sceneIdx]);

  const handlePlay = () => {
    if (sceneIdx >= scenes.length - 1 && progress >= 100) {
      setSceneIdx(0);
      setProgress(0);
    }
    setPlaying((p) => !p);
  };

  const handleReplay = () => {
    setSceneIdx(0);
    setProgress(0);
    setPlaying(true);
  };

  const handleFullscreen = () => {
    containerRef.current?.requestFullscreen?.();
  };

  const scene = scenes[sceneIdx];
  const elapsedTotal =
    scenes.slice(0, sceneIdx).reduce((a, s) => a + s.duration, 0) +
    (progress / 100) * scene.duration;
  const formatTime = (s: number) => {
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${m}:${sec.toString().padStart(2, "0")}`;
  };

  return (
    <div ref={containerRef} className="glass-strong overflow-hidden rounded-2xl">
      <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-glow-gold/10 via-glow-purple/5 to-transparent">
        <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
        <AnimatePresence mode="wait">
          <motion.div
            key={sceneIdx}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="absolute inset-0 flex items-center justify-center p-6"
          >
            {scene.render()}
          </motion.div>
        </AnimatePresence>
        <span className="absolute right-3 top-3 rounded-full bg-background/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold backdrop-blur-sm">
          Portfolio Demonstration
        </span>
      </div>
      <div className="flex items-center gap-3 border-t border-border px-4 py-3">
        <button
          onClick={handlePlay}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-secondary/80"
        >
          {playing ? (
            <Pause className="h-3.5 w-3.5 fill-current" />
          ) : (
            <Play className="h-3.5 w-3.5 translate-x-0.5 fill-current" />
          )}
        </button>
        <button
          onClick={handleReplay}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-secondary/80"
        >
          <RotateCcw className="h-3.5 w-3.5" />
        </button>
        <button
          onClick={() => setMuted((m) => !m)}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-secondary/80"
        >
          {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
        </button>
        <div className="h-1.5 flex-1 rounded-full bg-secondary">
          <div
            className="h-full rounded-full bg-gradient-to-r from-glow-gold to-glow-gold-light transition-all"
            style={{ width: `${(elapsedTotal / totalDuration) * 100}%` }}
          />
        </div>
        <span className="font-mono text-[10px] text-muted-foreground">
          {formatTime(elapsedTotal)} / {formatTime(totalDuration)}
        </span>
        <button
          onClick={handleFullscreen}
          className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-secondary/80"
        >
          <Maximize2 className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
