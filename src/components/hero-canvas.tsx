import { useEffect, useRef } from "react";

/**
 * Lightweight 3D hero canvas using raw Canvas 2D (no WebGL dependency).
 * Renders a rotating wireframe node network with glowing connections —
 * a "digital automation environment" representing leads/data/CRM.
 * Pauses when offscreen and respects prefers-reduced-motion.
 */
export function HeroCanvas({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0;
    let running = true;
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    type Node = { x: number; y: number; z: number; vx: number; vy: number; vz: number; r: number };
    let nodes: Node[] = [];

    const NODE_COUNT = window.innerWidth < 640 ? 26 : 46;

    function init() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes = Array.from({ length: NODE_COUNT }, () => ({
        x: (Math.random() - 0.5) * width,
        y: (Math.random() - 0.5) * height,
        z: Math.random() * 1 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        vz: (Math.random() - 0.5) * 0.004,
        r: Math.random() * 1.8 + 0.6,
      }));
    }

    function draw() {
      if (!running) return;
      ctx.clearRect(0, 0, width, height);
      const cx = width / 2;
      const cy = height / 2;

      // update
      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.z += n.vz;
        if (Math.abs(n.x) > width / 2) n.vx *= -1;
        if (Math.abs(n.y) > height / 2) n.vy *= -1;
        if (n.z > 1.4 || n.z < 0.2) n.vz *= -1;
      }

      // connections
      const maxDist = 130;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.5 * Math.min(a.z, b.z);
            const grad = ctx.createLinearGradient(cx + a.x, cy + a.y, cx + b.x, cy + b.y);
            grad.addColorStop(0, `rgba(234, 179, 8, ${alpha})`);
            grad.addColorStop(1, `rgba(217, 119, 6, ${alpha})`);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(cx + a.x, cy + a.y);
            ctx.lineTo(cx + b.x, cy + b.y);
            ctx.stroke();
          }
        }
      }

      // nodes
      for (const n of nodes) {
        const px = cx + n.x;
        const py = cy + n.y;
        const radius = n.r * n.z;
        const glow = ctx.createRadialGradient(px, py, 0, px, py, radius * 6);
        glow.addColorStop(0, `rgba(250, 204, 21, ${0.9 * n.z})`);
        glow.addColorStop(1, "rgba(250, 204, 21, 0)");
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(px, py, radius * 6, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(254, 240, 138, ${n.z})`;
        ctx.beginPath();
        ctx.arc(px, py, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      raf = requestAnimationFrame(draw);
    }

    init();
    if (!reduce) {
      raf = requestAnimationFrame(draw);
    } else {
      // single static frame
      draw();
      cancelAnimationFrame(raf);
      running = false;
    }

    const onResize = () => {
      init();
    };
    window.addEventListener("resize", onResize);

    const io = new IntersectionObserver(
      ([entry]) => {
        running = entry.isIntersecting && !reduce;
        if (running && !raf) raf = requestAnimationFrame(draw);
        if (!running) cancelAnimationFrame(raf);
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, []);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
}
