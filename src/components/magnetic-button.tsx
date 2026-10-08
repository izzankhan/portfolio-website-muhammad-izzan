import { useRef, useState, type ReactNode } from "react";
import { useReducedMotion } from "framer-motion";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

function isExternalHref(href: string) {
  return /^(https?:|mailto:|tel:|wa\.me)/i.test(href);
}

function isHashHref(href: string) {
  return href.startsWith("#");
}

/** Smooth-scroll to an in-page anchor, accounting for the fixed header. */
function scrollToHash(hash: string) {
  const el = document.getElementById(hash.slice(1));
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 90;
    window.scrollTo({ top, behavior: "smooth" });
  }
}

/**
 * Magnetic button — subtly follows the cursor on hover.
 * - Internal paths (e.g. "/portfolio") render as a TanStack <Link> (client-side nav, no reload).
 * - External URLs / WhatsApp / mailto render as a plain anchor (new tab).
 * - No href renders a <button>.
 * Uses a CSS transform + transition (snappy, no layout cost) so clicks fire instantly.
 */
export function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
  external,
}: {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost" | "tertiary";
  className?: string;
  external?: boolean;
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const reduce = useReducedMotion();

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) * 0.25;
    const y = (e.clientY - (rect.top + rect.height / 2)) * 0.25;
    setPos({ x, y });
  };

  const reset = () => setPos({ x: 0, y: 0 });

  const base = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-tight transition-[color,transform,box-shadow] duration-150 will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    variant === "primary"
      ? "bg-primary text-primary-foreground shadow-[0_8px_30px_-8px_var(--glow-gold)] hover:shadow-[0_10px_40px_-6px_var(--glow-gold)] hover:brightness-105"
      : variant === "tertiary"
        ? "border border-glow-blue/30 bg-glow-blue/10 text-glow-blue hover:bg-glow-blue/20 hover:border-glow-blue/50"
        : "glass text-foreground hover:border-primary/40",
    className,
  );

  const style = {
    transform: `translate(${pos.x}px, ${pos.y}px)`,
  };

  // External URL → plain anchor in a new tab
  if (href && (external || isExternalHref(href))) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={base}
        style={style}
      >
        {children}
      </a>
    );
  }

  // In-page hash anchor (e.g. "#journey") → smooth-scroll, no route change
  if (href && isHashHref(href)) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={(e) => {
          e.preventDefault();
          scrollToHash(href);
        }}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={base}
        style={style}
      >
        {children}
      </a>
    );
  }

  // Internal route → TanStack Link (client-side navigation)
  if (href) {
    return (
      <Link
        // TanStack Link is strictly typed on `to`; cast to satisfy the union.
        to={href as never}
        ref={ref as React.RefObject<HTMLAnchorElement>}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        className={base}
        style={style}
      >
        {children}
      </Link>
    );
  }

  // No link → button
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={base}
      style={style}
    >
      {children}
    </button>
  );
}
