import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  Pause,
  RotateCcw,
  Maximize2,
  Volume2,
  VolumeX,
  Calculator,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ArrowDown,
  CalendarCheck,
  MousePointer,
  UserPlus,
  Briefcase,
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
      "Let's see how an accounting enquiry can move from the first consultation request to an active client through an automated system.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-3 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-xl font-bold text-foreground sm:text-2xl"
        >
          Complete Accounting Automation Workflow
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-glow-gold"
        >
          From First Enquiry to Active Client
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
    title: "Consultation Landing Page",
    duration: 13,
    voice:
      "The journey begins when a business owner visits the accounting consultation page and requests a consultation.",
    render: () => (
      <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="flex items-center justify-center rounded-xl border border-border bg-gradient-to-br from-glow-gold/10 to-transparent">
          <Calculator className="h-12 w-12 text-glow-gold/60" />
        </div>
        <div className="flex flex-col justify-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
            Miller Consulting Ltd.
          </span>
          <p className="font-display text-lg font-bold text-foreground">
            Get Expert Accounting Advice for Your Business
          </p>
          <p className="text-xs text-muted-foreground">Business Accounting · Bookkeeping · Tax</p>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-2 flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground"
          >
            <MousePointer className="h-3.5 w-3.5" /> Book a Consultation
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Consultation Form",
    duration: 12,
    voice:
      "James submits his consultation request, including his company, business type and service required.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <div className="rounded-xl border border-border bg-background/60 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-glow-gold">
            Consultation Request Form
          </p>
          {[
            { l: "Full Name", v: "James Miller" },
            { l: "Company", v: "Miller Consulting Ltd." },
            { l: "Business Type", v: "Limited Company" },
            { l: "Service", v: "Business Accounting" },
            { l: "Business Size", v: "Small / Medium" },
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
            <CheckCircle2 className="h-3.5 w-3.5" /> Request Submitted
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
              New Accounting Lead
            </span>
          </div>
          <div className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glow-gold/20 text-sm font-bold text-glow-gold">
              JM
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">James Miller</p>
              <p className="text-xs text-muted-foreground">Miller Consulting Ltd.</p>
            </div>
          </div>
          <div className="mt-3 space-y-1.5">
            {[
              { l: "Service", v: "Business Accounting" },
              { l: "Business Type", v: "Limited Company" },
              { l: "Source", v: "Website" },
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
      "The automation then qualifies the lead, updates the pipeline and triggers an automated response.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-2">
        {[
          "Form Submitted",
          "Create Contact",
          "Add to Pipeline",
          "Qualify Lead",
          "Send Response",
          "Schedule Follow-up",
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
      "Once the lead is qualified, the system identifies the service required and prepares the next step.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <div className="rounded-xl border border-border bg-background/60 p-4">
          <p className="mb-3 text-xs font-bold uppercase tracking-wider text-glow-gold">
            Lead Qualification
          </p>
          {[
            "Service required?",
            "Business type?",
            "Business size?",
            "Consultation requirement?",
            "Preferred contact method?",
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
            <CheckCircle2 className="h-3.5 w-3.5" /> Qualification Complete · Qualified Lead
          </motion.div>
        </div>
      </div>
    ),
  },
  {
    title: "Automated Response",
    duration: 9,
    voice:
      "An automated message is sent immediately to acknowledge the enquiry and set expectations.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <div className="rounded-xl border border-border bg-background/60 p-4">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-glow-gold">
            Automated Response
          </p>
          <p className="text-xs leading-relaxed text-foreground/90">
            “Hi James, thanks for contacting Miller Consulting Ltd. We've received your consultation
            request. A member of our team will be in touch shortly.”
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-glow-gold/15 py-2 text-xs font-semibold text-glow-gold"
        >
          <CheckCircle2 className="h-3.5 w-3.5" /> Automation Triggered
        </motion.div>
      </div>
    ),
  },
  {
    title: "Consultation Calendar",
    duration: 12,
    voice: "The prospect selects an available consultation time, and the appointment is confirmed.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-wider text-glow-gold">
          30-Minute Business Accounting Consultation
        </p>
        <div className="grid grid-cols-2 gap-2">
          {[
            { d: "Tuesday", t: "10:00 AM" },
            { d: "Tuesday", t: "2:00 PM" },
            { d: "Wednesday", t: "11:00 AM" },
            { d: "Wednesday", t: "2:00 PM" },
          ].map((s, i) => {
            const sel = i === 3;
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
          <CalendarCheck className="h-3.5 w-3.5" /> Consultation Reserved
        </motion.div>
      </div>
    ),
  },
  {
    title: "CRM Update",
    duration: 8,
    voice: "The CRM automatically reflects the new stage, keeping the team organized.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-1.5">
        {[
          "New Enquiry",
          "Contacted",
          "Qualified",
          "Consultation Booked",
          "Onboarding",
          "Active Client",
        ].map((stage, i) => (
          <motion.div
            key={stage}
            initial={{ opacity: 0.3 }}
            animate={{ opacity: i === 3 ? 1 : 0.5 }}
            transition={{ delay: i * 0.15 }}
            className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold ${
              i === 3
                ? "border-glow-gold/60 bg-glow-gold/15 text-glow-gold"
                : "border-border bg-background/40 text-muted-foreground"
            }`}
          >
            {stage}
          </motion.div>
        ))}
      </div>
    ),
  },
  {
    title: "Follow-Up Sequence",
    duration: 9,
    voice: "Automated follow-ups keep the prospect engaged before and after the consultation.",
    render: () => (
      <div className="mx-auto max-w-sm space-y-3">
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
            After 1 Day
          </p>
          <p className="mt-1 text-xs text-foreground/90">
            “Hi James, following up on your consultation request. Would you like to choose an
            available time?”
          </p>
        </div>
        <div className="rounded-xl border border-border bg-background/50 p-3">
          <p className="text-[10px] font-bold uppercase tracking-wider text-glow-gold">
            After 3 Days
          </p>
          <p className="mt-1 text-xs text-foreground/90">
            “Hi James, a reminder about your accounting consultation. Pick a time that suits you.”
          </p>
        </div>
      </div>
    ),
  },
  {
    title: "Client Onboarding",
    duration: 8,
    voice: "After the consultation, the prospect moves into a structured onboarding flow.",
    render: () => (
      <div className="mx-auto max-w-sm">
        <div className="flex items-center gap-2.5">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-glow-gold/20 text-sm font-bold text-glow-gold">
            JM
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">James Miller — Onboarding</p>
            <p className="text-xs text-muted-foreground">Miller Consulting Ltd.</p>
          </div>
        </div>
        <div className="mt-3 space-y-1.5">
          {[
            "Consultation completed",
            "Service confirmed",
            "Agreement requested",
            "Onboarding started",
          ].map((o, i) => (
            <motion.div
              key={o}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.25 }}
              className="flex items-center gap-2 rounded-lg border border-border bg-background/40 px-3 py-2 text-xs text-foreground"
            >
              <CheckCircle2 className="h-3.5 w-3.5 text-glow-gold" /> {o}
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-glow-gold/15 py-2 text-xs font-semibold text-glow-gold"
        >
          <UserPlus className="h-3.5 w-3.5" /> Active Client
        </motion.div>
      </div>
    ),
  },
  {
    title: "Complete Workflow",
    duration: 7,
    voice:
      "From the first enquiry to an active client, every step is connected through one streamlined automation system.",
    render: () => (
      <div className="flex h-full flex-col items-center justify-center gap-1.5 text-center">
        <motion.h3
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-display text-lg font-bold text-foreground"
        >
          From First Enquiry to Active Client
        </motion.h3>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xs text-glow-gold"
        >
          Accounting Automation Portfolio Demonstration
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

export function AccCinematicDemo() {
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
