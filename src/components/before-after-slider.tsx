import { useCallback, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Database,
  Cpu,
  Mail,
  CheckCircle2,
  Unplug,
  AlertTriangle,
  ArrowRight,
  X,
  Sparkles,
  Network,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Interactive before/after slider comparing a disconnected marketing  */
/* stack vs an integrated workflow.                                   */
/*   • LEFT side  = Disconnected Tools (red)  — base layer             */
/*   • RIGHT side = Integrated Workflow (gold) — clipped overlay      */
/* Drag the handle (or tap the track) to wipe between the two.         */
/* A live results strip below interpolates system-state indicators    */
/* from "disconnected" → "integrated" as you drag.                     */
/* ------------------------------------------------------------------ */

const BEFORE_NODES = [
  { icon: Megaphone, label: "Meta Ads", sub: "Separate platform" },
  { icon: LayoutTemplate, label: "Landing Page", sub: "Another tool" },
  { icon: UserPlus, label: "Lead Form", sub: "Manual export" },
  { icon: Unplug, label: "Spreadsheet", sub: "Scattered data" },
  { icon: Mail, label: "Manual Follow-Up", sub: "Forgotten leads" },
];

const AFTER_NODES = [
  { icon: Megaphone, label: "Meta Ads", sub: "Connected" },
  { icon: LayoutTemplate, label: "Landing Page", sub: "Connected" },
  { icon: UserPlus, label: "Lead Capture", sub: "Auto-synced" },
  { icon: Database, label: "CRM", sub: "One system" },
  { icon: Cpu, label: "Automation", sub: "Triggered" },
  { icon: Mail, label: "Follow-Up", sub: "Automated" },
  { icon: CheckCircle2, label: "Customer", sub: "Tracked" },
];

/* System-state indicators that change as the handle moves.
   These describe HOW the system behaves (not fake performance numbers):
   0 = disconnected state (low), 100 = integrated state (better).
   `low` / `high` are illustrative relative levels (0–100) used only to
   animate a bar — they are NOT real metrics, revenue or ROI. */
const INDICATORS = [
  {
    label: "Follow-Up Speed",
    low: "Manual & delayed",
    high: "Automated & instant",
    lowLevel: 18,
    highLevel: 92,
  },
  {
    label: "Lead Organization",
    low: "Scattered across tools",
    high: "Centralized in CRM",
    lowLevel: 22,
    highLevel: 95,
  },
  {
    label: "Lead Tracking",
    low: "Lost after the click",
    high: "Tracked end-to-end",
    lowLevel: 15,
    highLevel: 90,
  },
  {
    label: "Workflow Continuity",
    low: "Disconnected steps",
    high: "One connected flow",
    lowLevel: 20,
    highLevel: 96,
  },
  {
    label: "Response Consistency",
    low: "Inconsistent & manual",
    high: "Reliable & automated",
    lowLevel: 25,
    highLevel: 93,
  },
  {
    label: "System Visibility",
    low: "No clear overview",
    high: "Full journey visible",
    lowLevel: 17,
    highLevel: 94,
  },
];

function NodeColumn({
  nodes,
  tone,
  broken,
}: {
  nodes: typeof AFTER_NODES;
  tone: "red" | "gold";
  broken?: boolean;
}) {
  return (
    <div className="flex h-full flex-col gap-2">
      {nodes.map((n, i) => {
        const Icon = n.icon;
        const isGap = broken && i === 2;
        return (
          <div key={n.label} className="flex flex-col items-stretch">
            <div
              className="flex items-center gap-2.5 rounded-lg border bg-background/60 px-2.5 py-1.5"
              style={{
                borderColor: isGap
                  ? "var(--destructive)"
                  : tone === "gold"
                    ? "var(--glow-gold)"
                    : "var(--border)",
                boxShadow: tone === "gold" && !isGap ? "0 0 16px -8px var(--glow-gold)" : "none",
              }}
            >
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md"
                style={{
                  background: tone === "gold" ? "var(--glow-gold)22" : "var(--destructive)1a",
                  color: tone === "gold" ? "var(--glow-gold)" : "var(--destructive)",
                }}
              >
                <Icon className="h-3.5 w-3.5" />
              </span>
              <div className="min-w-0">
                <p className="truncate text-[11px] font-semibold text-foreground">{n.label}</p>
                <p className="truncate text-[9px] text-muted-foreground">{n.sub}</p>
              </div>
              {isGap && <AlertTriangle className="ml-auto h-3.5 w-3.5 text-destructive" />}
            </div>
            {i < nodes.length - 1 && (
              <div className="flex justify-center py-0.5">
                {broken && i === 1 ? (
                  <div className="flex items-center gap-1 text-destructive">
                    <span className="h-3 w-px bg-destructive/40" />
                    <X className="h-3 w-3" />
                    <span className="h-3 w-px bg-destructive/40" />
                  </div>
                ) : (
                  <span
                    className="h-3 w-px"
                    style={{
                      background: tone === "gold" ? "var(--glow-gold)" : "var(--border)",
                    }}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function BeforeAfterSlider() {
  const [pos, setPos] = useState(50); // 0 = all BEFORE, 100 = all AFTER
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(rect.width, clientX - rect.left));
    setPos((x / rect.width) * 100);
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const onMove = (e: PointerEvent) => updateFromClientX(e.clientX);
    const onUp = () => setDragging(false);
    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
    };
  }, [dragging, updateFromClientX]);

  // The gold/integrated overlay is clipped to the RIGHT of the handle
  // (clipPath inset left = pos%), so the MORE gold is visible, the more
  // integrated the system. Gold-visible fraction = (100 - pos) / 100.
  //   pos = 0   → handle far left  → all gold visible → fully integrated (better)
  //   pos = 100 → handle far right → no gold visible  → fully disconnected (low)
  const t = (100 - pos) / 100;
  const integrated = t > 0.5;

  return (
    <div className="mx-auto max-w-5xl">
      {/* labels */}
      <div className="mb-4 flex items-center justify-between text-xs font-semibold uppercase tracking-wider">
        <span className="flex items-center gap-2 text-destructive">
          <Unplug className="h-4 w-4" /> Disconnected Tools
        </span>
        <span className="flex items-center gap-2 text-glow-gold">
          <Network className="h-4 w-4" /> Integrated Workflow
        </span>
      </div>

      <div
        ref={ref}
        className="relative w-full cursor-ew-resize select-none overflow-hidden rounded-2xl glass"
        style={{ touchAction: "none" }}
        onPointerDown={(e) => {
          // Only start drag on left-button / touch; ignore right-click
          if (e.button !== undefined && e.button !== 0) return;
          (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
          setDragging(true);
          updateFromClientX(e.clientX);
        }}
      >
        {/* BEFORE — base layer (full), shown on the LEFT */}
        <div className="relative flex flex-col bg-gradient-to-br from-destructive/10 via-background to-background p-4 sm:p-6">
          <div className="mb-3 flex items-center gap-2">
            <span className="rounded-full bg-destructive/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-destructive">
              Disconnected Tools
            </span>
            <AlertTriangle className="h-3.5 w-3.5 text-destructive" />
          </div>
          <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            <div className="col-span-2 sm:col-span-1 lg:col-span-1">
              <NodeColumn nodes={BEFORE_NODES.slice(0, 3)} tone="red" broken />
            </div>
            <div className="hidden sm:block lg:col-span-1">
              <NodeColumn nodes={BEFORE_NODES.slice(3)} tone="red" broken />
            </div>
            <div className="col-span-2 flex flex-col justify-center rounded-xl border border-destructive/20 bg-destructive/5 p-4 sm:col-span-1 lg:col-span-2">
              <p className="font-display text-sm font-bold text-foreground sm:text-base">
                Scattered &amp; manual
              </p>
              <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                Each tool lives on its own. Leads get exported by hand, follow-ups are forgotten and
                data is spread across platforms.
              </p>
              <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-destructive">
                <Unplug className="h-3.5 w-3.5" /> Gaps between every step
              </div>
            </div>
          </div>
        </div>

        {/* AFTER — clipped overlay revealed from the LEFT edge to the handle (RIGHT side) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 0 0 ${pos}%)` }}
        >
          <div className="flex h-full flex-col bg-gradient-to-br from-glow-gold/10 via-glow-amber/5 to-transparent p-4 sm:p-6">
            <div className="mb-3 flex items-center gap-2">
              <span className="rounded-full bg-glow-gold/15 px-2.5 py-1 text-[9px] font-bold uppercase tracking-wider text-glow-gold">
                Integrated System
              </span>
              <Sparkles className="h-3.5 w-3.5 text-glow-gold" />
            </div>
            <div className="grid flex-1 grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
              <div className="col-span-2 sm:col-span-1 lg:col-span-1">
                <NodeColumn nodes={AFTER_NODES.slice(0, 4)} tone="gold" />
              </div>
              <div className="hidden sm:block lg:col-span-1">
                <NodeColumn nodes={AFTER_NODES.slice(4)} tone="gold" />
              </div>
              <div className="col-span-2 flex flex-col justify-center rounded-xl border border-glow-gold/20 bg-glow-gold/5 p-4 sm:col-span-1 lg:col-span-2">
                <p className="font-display text-sm font-bold text-foreground sm:text-base">
                  One connected journey
                </p>
                <p className="mt-1.5 text-[11px] leading-relaxed text-muted-foreground">
                  Ads, landing pages, CRM and automation flow together. Every lead is captured,
                  organized and followed up automatically.
                </p>
                <div className="mt-3 flex items-center gap-2 text-[10px] font-medium text-glow-gold">
                  <ArrowRight className="h-3.5 w-3.5" /> Lead → CRM → Automation → Customer
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* divider handle */}
        <div
          className="absolute inset-y-0 z-20 w-0.5 bg-glow-gold shadow-[0_0_12px_var(--glow-gold)]"
          style={{ left: `${pos}%` }}
        >
          <motion.div
            className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-glow-gold/40 bg-background/90 text-glow-gold backdrop-blur-sm"
            animate={{ scale: dragging ? 1.15 : 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <ArrowRight className="h-4 w-4 rotate-180" />
            <ArrowRight className="-ml-1.5 h-4 w-4" />
          </motion.div>
        </div>
      </div>

      {/* LIVE RESULTS STRIP — indicators that change as you drag */}
      <div className="mt-5 rounded-2xl glass p-4 sm:p-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
            Live System State
          </span>
          <span
            className="flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-colors"
            style={{
              background: integrated ? "var(--glow-gold)1a" : "var(--destructive)1a",
              color: integrated ? "var(--glow-gold)" : "var(--destructive)",
            }}
          >
            {integrated ? (
              <>
                <Sparkles className="h-3 w-3" /> Integrated
              </>
            ) : (
              <>
                <Unplug className="h-3 w-3" /> Disconnected
              </>
            )}
          </span>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {INDICATORS.map((ind) => {
            const active = t >= 0.5;
            // Interpolate the illustrative level from low → high as you drag.
            const level = Math.round(ind.lowLevel + (ind.highLevel - ind.lowLevel) * t);
            return (
              <div
                key={ind.label}
                className="rounded-xl border bg-background/40 p-3 transition-colors"
                style={{
                  borderColor: active
                    ? "color-mix(in oklab, var(--glow-gold) 30%, transparent)"
                    : "color-mix(in oklab, var(--destructive) 25%, transparent)",
                }}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-[11px] font-semibold text-foreground">{ind.label}</span>
                  <span
                    className="flex shrink-0 items-center gap-1 text-[10px] font-bold uppercase tracking-wider transition-colors"
                    style={{ color: active ? "var(--glow-gold)" : "var(--destructive)" }}
                  >
                    {active ? (
                      <CheckCircle2 className="h-3 w-3" />
                    ) : (
                      <AlertTriangle className="h-3 w-3" />
                    )}
                    {active ? "Better" : "Low"}
                  </span>
                </div>
                {/* progress track: red → gold fill interpolated by handle position */}
                <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-secondary/60">
                  <div
                    className="h-full rounded-full transition-[width] duration-150 ease-out"
                    style={{
                      width: `${level}%`,
                      background:
                        "linear-gradient(90deg, var(--destructive) 0%, var(--glow-gold) 100%)",
                    }}
                  />
                </div>
                <p
                  className="mt-2 text-[11px] leading-snug transition-colors"
                  style={{ color: active ? "var(--foreground)" : "var(--muted-foreground)" }}
                >
                  {active ? ind.high : ind.low}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <p className="mt-4 text-center text-xs text-muted-foreground">
        Drag the handle to compare a disconnected marketing stack with an integrated workflow — drag
        right to see how a connected system delivers better results. Illustrative levels only, not
        real metrics.
      </p>
    </div>
  );
}
