import { useEffect, useRef } from "react";

/**
 * A subtle golden ambient spotlight that follows the cursor across the page.
 * Rendered as a fixed full-viewport radial gradient layer behind content.
 * Uses rAF + pointer events; disabled on touch devices and reduced-motion.
 */
export function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const raf = useRef<number | null>(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const visible = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;

    // Skip on coarse-pointer (touch) devices — no hover cursor there.
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const el = ref.current;
    if (!el) return;

    // Start off-screen so nothing flashes on load.
    current.current = { x: -1000, y: -1000 };
    target.current = { x: -1000, y: -1000 };

    const onMove = (e: PointerEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
      if (!visible.current) {
        visible.current = true;
        el.style.opacity = "1";
      }
    };

    const onLeave = () => {
      visible.current = false;
      el.style.opacity = "0";
    };

    const tick = () => {
      const c = current.current;
      const t = target.current;
      c.x += (t.x - c.x) * 0.14;
      c.y += (t.y - c.y) * 0.14;
      el.style.background = `radial-gradient(680px circle at ${c.x}px ${c.y}px, color-mix(in oklab, var(--glow-gold) 12%, transparent), color-mix(in oklab, var(--glow-amber) 6%, transparent) 38%, transparent 68%)`;
      raf.current = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerleave", onLeave);
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerleave", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-30 opacity-0 transition-opacity duration-500"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
