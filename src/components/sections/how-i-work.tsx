import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PencilRuler, Hammer, Plug, TrendingUp } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Understand",
    desc: "Understand the business and customer journey.",
  },
  {
    num: "02",
    icon: PencilRuler,
    title: "Plan",
    desc: "Design the funnel, CRM and automation structure.",
  },
  { num: "03", icon: Hammer, title: "Build", desc: "Build the landing page, CRM and workflows." },
  {
    num: "04",
    icon: Plug,
    title: "Connect",
    desc: "Connect ads, lead capture, CRM and automation.",
  },
  {
    num: "05",
    icon: TrendingUp,
    title: "Improve",
    desc: "Review the system and improve the workflow over time.",
  },
];

/* HOW I WORK — 5-step timeline (horizontal desktop, vertical mobile) */
export function HowIWorkTimeline() {
  const reduce = useReducedMotion();
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start 80%", "end 60%"],
  });
  const lineScaleX = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1]);
  const lineScaleY = useTransform(scrollYProgress, [0, 1], reduce ? [1, 1] : [0, 1]);
  return (
    <Section>
      <SectionHeading
        eyebrow="How I Work"
        title="How I Work"
        intro="A clear five-step process from understanding the business to improving the system over time."
        align="center"
      />
      <Reveal>
        {/* Desktop horizontal timeline */}
        <div ref={trackRef} className="hidden lg:block">
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-glow-blue/10 via-glow-blue/40 to-glow-blue/10" />
            <motion.div
              style={{ scaleX: lineScaleX, transformOrigin: "left" }}
              className="absolute left-0 right-0 top-7 h-px bg-gradient-to-r from-glow-gold/60 to-glow-amber/60"
            />
            <div className="relative flex justify-between">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="flex w-1/5 flex-col items-center px-2 text-center"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl glass-strong text-glow-blue">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <span className="mt-4 font-mono text-xs font-bold text-glow-blue">{s.num}</span>
                  <h3 className="mt-1 font-display text-base font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden">
          <div className="relative mx-auto max-w-md">
            <div className="absolute bottom-2 left-7 top-2 w-px bg-gradient-to-b from-glow-blue/40 to-glow-blue/10" />
            <motion.div
              style={{ scaleY: lineScaleY, transformOrigin: "top" }}
              className="absolute bottom-2 left-7 top-2 w-px bg-gradient-to-b from-glow-gold/60 to-glow-amber/60"
            />
            <div className="flex flex-col gap-6">
              {STEPS.map((s, i) => (
                <motion.div
                  key={s.num}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.45 }}
                  className="relative flex items-start gap-4"
                >
                  <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl glass-strong text-glow-blue">
                    <s.icon className="h-6 w-6" />
                  </span>
                  <div className="pt-1">
                    <span className="font-mono text-xs font-bold text-glow-blue">{s.num}</span>
                    <h3 className="font-display text-base font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
