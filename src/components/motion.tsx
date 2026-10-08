import {
  motion,
  useReducedMotion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState, type ReactNode, type RefObject } from "react";

/**
 * Hydration-safe reveal flag.
 *
 * Returns `true` (visible) on the server and during the first client render
 * (so SSR HTML and the first hydrated paint match and content is never blank),
 * then switches to the IntersectionObserver result after mount. Elements
 * below the fold animate from hidden once scrolled into view; elements above
 * the fold stay visible. This guarantees the page is never stuck at opacity 0
 * even when the observer fails to fire (e.g. inside a preview iframe).
 */
export function useReveal(
  ref: RefObject<Element | null>,
  options?: Parameters<typeof useInView>[1],
) {
  const inView = useInView(ref, options);
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return !mounted ? true : inView;
}

/** Scroll-triggered reveal wrapper. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
  once = true,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref, { once, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? { opacity: 1, y: 0 } : reduce ? { opacity: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/** Staggered container for lists of children. */
export function Stagger({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const show = useReveal(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={show ? "show" : "hidden"}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduce ? 0 : stagger, delayChildren: delay } },
      }}
    >
      {children}
    </motion.div>
  );
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export function StaggerItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <motion.div className={className} variants={itemVariants}>
      {children}
    </motion.div>
  );
}

/**
 * Scroll progress hook — returns a 0→1 spring value for an element's
 * journey through the viewport. Used for scroll-scrubbed animations.
 * Returns a constant 0 on the server / reduced-motion so SSR is stable.
 */
export function useScrollProgress<T extends HTMLElement>(
  ref: RefObject<T | null>,
  offset: { start?: string; end?: string } = {},
) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [offset.start ?? "start end", offset.end ?? "end start"],
  });
  const spring = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  return reduce ? 0 : spring;
}

/**
 * TiltCard — subtle 3D pointer-driven tilt (max ~4°), disabled on touch
 * and reduced-motion. Wraps children in a perspective container.
 */
export function TiltCard({
  children,
  className,
  max = 4,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  max?: number;
  glare?: boolean;
}) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0, gx: 50, gy: 50 });

  const onMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTilt({
      ry: (px - 0.5) * max * 2,
      rx: -(py - 0.5) * max * 2,
      gx: px * 100,
      gy: py * 100,
    });
  };
  const reset = () => setTilt({ rx: 0, ry: 0, gx: 50, gy: 50 });

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
      style={{ perspective: 900 }}
    >
      <motion.div
        animate={{ rotateX: tilt.rx, rotateY: tilt.ry }}
        transition={{ type: "spring", stiffness: 200, damping: 18 }}
        style={{ transformStyle: "preserve-3d", position: "relative" }}
      >
        {children}
        {glare && !reduce && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-300 [.group:hover_&]:opacity-100"
            style={{
              background: `radial-gradient(220px circle at ${tilt.gx}% ${tilt.gy}%, color-mix(in oklab, var(--glow-gold) 14%, transparent), transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}

/** useParallax — returns a translateY motion value driven by scroll. */
export function useParallax<T extends HTMLElement>(ref: RefObject<T | null>, distance = 60) {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  return useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [distance, -distance]);
}
