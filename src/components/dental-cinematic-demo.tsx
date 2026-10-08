import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";
import { useDemoAudio } from "@/lib/use-demo-audio";
import { DENTAL_SCENES_A } from "./dental-scenes-a";
import { DENTAL_SCENES_B } from "./dental-scenes-b";

/* ------------------------------------------------------------------ */
/* Complete Dental Automation Workflow — cinematic player.            */
/* 11 scenes over ~2m (120s). Fictional "BrightSmile Dental" demo.     */
/* Voice-over + background music + SFX via the shared audio engine.    */
/* ------------------------------------------------------------------ */

type Scene = { id: number; title: string; duration: number; narration: string };

const SCENES: Scene[] = [
  {
    id: 1,
    title: "Intro",
    duration: 7,
    narration:
      "Let's see how a dental lead can move from the first enquiry to a confirmed appointment through an automated workflow.",
  },
  {
    id: 2,
    title: "Landing Page",
    duration: 13,
    narration:
      "The journey starts when a potential patient visits the dental clinic landing page and requests a consultation.",
  },
  {
    id: 3,
    title: "Lead Form",
    duration: 12,
    narration:
      "Sarah submits her consultation request, including her contact information and treatment interest.",
  },
  {
    id: 4,
    title: "New Lead Received",
    duration: 10,
    narration:
      "Immediately after the form is submitted, the lead is captured and organized inside the CRM.",
  },
  {
    id: 5,
    title: "Automation Starts",
    duration: 13,
    narration:
      "Now the automation takes over. The contact is created, added to the pipeline, and an immediate confirmation message is triggered.",
  },
  {
    id: 6,
    title: "AI Follow-Up",
    duration: 15,
    narration:
      "Instead of leaving the lead waiting, an automated assistant can respond immediately and guide the patient toward the next step.",
  },
  {
    id: 7,
    title: "AI Voice",
    duration: 8,
    narration:
      "Hi Sarah, thanks for contacting BrightSmile Dental. We received your consultation request. Would you like to choose an available appointment time?",
  },
  {
    id: 8,
    title: "Appointment Calendar",
    duration: 12,
    narration: "Sarah selects an available time, and the appointment is confirmed.",
  },
  {
    id: 9,
    title: "CRM Pipeline Update",
    duration: 10,
    narration:
      "The CRM is updated automatically, so the clinic team can immediately see where the lead is in the journey.",
  },
  {
    id: 10,
    title: "Automated Reminders",
    duration: 12,
    narration:
      "Automated reminders can then help keep the patient informed before the appointment.",
  },
  {
    id: 11,
    title: "Complete Workflow",
    duration: 8,
    narration:
      "From the first form submission to the confirmed appointment, every step is connected through one streamlined automation system.",
  },
];

const TOTAL_DURATION = SCENES.reduce((a, s) => a + s.duration, 0); // 120s = 2m
const SCENE_COMPONENTS = [...DENTAL_SCENES_A, ...DENTAL_SCENES_B];

function sceneAt(t: number): { index: number; scene: Scene; local: number } {
  let acc = 0;
  for (let i = 0; i < SCENES.length; i++) {
    if (t < acc + SCENES[i].duration) {
      return { index: i, scene: SCENES[i], local: (t - acc) / SCENES[i].duration };
    }
    acc += SCENES[i].duration;
  }
  const last = SCENES.length - 1;
  return { index: last, scene: SCENES[last], local: 1 };
}

function fmt(t: number) {
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

function Narration({ text, visible }: { text: string; visible: boolean }) {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.4 }}
          className="pointer-events-none absolute bottom-3 left-1/2 z-30 w-[88%] max-w-md -translate-x-1/2"
        >
          <div className="flex items-start gap-2.5 rounded-xl border border-border bg-background/85 px-3.5 py-2.5 backdrop-blur-md">
            <Volume2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-glow-gold" />
            <p className="text-[11px] leading-relaxed text-foreground/90">{text}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export function DentalCinematicDemo() {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(0);
  const [muted, setMuted] = useState(false);
  const rafRef = useRef<number | null>(null);
  const lastRef = useRef<number | null>(null);

  const tick = useCallback((now: number) => {
    if (lastRef.current === null) lastRef.current = now;
    const dt = (now - lastRef.current) / 1000;
    lastRef.current = now;
    setT((prev) => {
      const next = prev + dt;
      if (next >= TOTAL_DURATION) {
        setPlaying(false);
        return TOTAL_DURATION;
      }
      return next;
    });
    rafRef.current = requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (!playing) {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      lastRef.current = null;
      return;
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [playing, tick]);

  const replay = () => {
    setT(0);
    lastRef.current = null;
    setPlaying(true);
  };

  const { index, scene, local } = sceneAt(t);
  const SceneComp = SCENE_COMPONENTS[index];
  const progress = t / TOTAL_DURATION;
  const ended = t >= TOTAL_DURATION;

  useDemoAudio({ playing, muted, narration: scene.narration, sceneId: scene.id });

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    setT(Math.max(0, Math.min(TOTAL_DURATION, x * TOTAL_DURATION)));
    lastRef.current = null;
  };

  const jumpTo = (i: number) => {
    let acc = 0;
    for (let j = 0; j < i; j++) acc += SCENES[j].duration;
    setT(acc + 0.01);
    lastRef.current = null;
    setPlaying(true);
  };

  return (
    <div className="flex h-full flex-col">
      <div className="group relative overflow-hidden rounded-2xl glass">
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-glow-gold/10 via-glow-amber/5 to-transparent">
          <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
          <div className="pointer-events-none absolute inset-0 page-glow opacity-30" />

          <div className="relative z-10 h-full w-full p-3 sm:p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={scene.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="h-full"
              >
                <SceneComp local={local} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="absolute right-3 top-3 z-20 flex items-center gap-1.5 rounded-full border border-border bg-background/70 px-2.5 py-1 backdrop-blur-sm">
            <span className="font-mono text-[9px] text-muted-foreground">
              {String(scene.id).padStart(2, "0")} / 11
            </span>
          </div>

          <AnimatePresence>
            {!playing && (
              <motion.button
                type="button"
                onClick={() => {
                  if (ended) {
                    setT(0);
                    lastRef.current = null;
                  }
                  setPlaying(true);
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-background/40 backdrop-blur-sm"
                aria-label="Play demo"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-[0_0_40px_-6px_var(--glow-gold)] transition-transform group-hover:scale-110">
                  {ended ? (
                    <RotateCcw className="h-6 w-6" />
                  ) : (
                    <Play className="h-6 w-6 translate-x-0.5 fill-current" />
                  )}
                </span>
                <span className="rounded-full bg-background/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-foreground">
                  {ended ? "Replay" : "Play Demo"} • {fmt(TOTAL_DURATION)}
                </span>
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* controls */}
        <div className="flex items-center gap-3 border-t border-border px-4 py-3">
          <button
            type="button"
            onClick={() => {
              if (ended) {
                setT(0);
                lastRef.current = null;
              }
              setPlaying((p) => !p);
            }}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-foreground transition-colors hover:bg-glow-gold/20"
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
            onClick={replay}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Replay"
          >
            <RotateCcw className="h-3.5 w-3.5" />
          </button>
          <button
            type="button"
            onClick={() => setMuted((m) => !m)}
            className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-muted-foreground transition-colors hover:text-foreground"
            aria-label={muted ? "Unmute narration" : "Mute narration"}
          >
            {muted ? <VolumeX className="h-3.5 w-3.5" /> : <Volume2 className="h-3.5 w-3.5" />}
          </button>

          <div
            className="group/scrub relative h-1.5 flex-1 cursor-pointer rounded-full bg-secondary"
            onClick={seek}
          >
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-glow-gold to-glow-amber"
              style={{ width: `${progress * 100}%` }}
            />
            <div
              className="absolute top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-foreground opacity-0 shadow-[0_0_10px_var(--glow-gold)] transition-opacity group-hover/scrub:opacity-100"
              style={{ left: `calc(${progress * 100}% - 6px)` }}
            />
          </div>

          <span className="hidden font-mono text-[10px] text-muted-foreground sm:inline">
            {fmt(t)} / {fmt(TOTAL_DURATION)}
          </span>
          <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-glow-gold">
            Demo
          </span>
        </div>

        {/* scene chapters */}
        <div className="flex items-center gap-1.5 overflow-x-auto border-t border-border px-4 py-2.5">
          {SCENES.map((s, i) => (
            <button
              key={s.id}
              type="button"
              onClick={() => jumpTo(i)}
              className={cn(
                "shrink-0 rounded-full px-2.5 py-1 text-[9px] font-medium transition-colors",
                i === index
                  ? "bg-glow-gold/20 text-glow-gold"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {String(s.id).padStart(2, "0")} {s.title}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 px-1">
        <h3 className="font-display text-base font-bold text-foreground">
          Complete Dental Automation Workflow
        </h3>
        <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
          An 11-scene cinematic walkthrough — from a landing page visit to a confirmed appointment.
          Fictional "BrightSmile Dental" demonstration with on-screen narration. No real patient
          data or results.
        </p>
      </div>
    </div>
  );
}
