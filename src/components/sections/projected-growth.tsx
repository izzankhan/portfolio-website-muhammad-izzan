import { TrendingUp, ArrowUpRight, ArrowRight, X, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { CountUp } from "@/components/count-up";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { waLink } from "@/lib/wa";

/**
 * Projected Growth — before/after comparison showing how a connected
 * system increases key metrics. Numbers animate from the "before" value
 * up to the "after" value when scrolled into view.
 *
 * IMPORTANT: These are illustrative/projected system-capability figures,
 * NOT guaranteed client results. Clearly labeled as projected.
 */
const STATS = [
  {
    label: "Follow-Up Speed",
    before: 1,
    after: 3,
    suffix: "x",
    desc: "Automation responds to new leads in minutes, not hours.",
  },
  {
    label: "Leads Tracked",
    before: 40,
    after: 100,
    suffix: "%",
    desc: "Every lead enters the CRM and moves through a defined pipeline.",
  },
  {
    label: "Manual Work Removed",
    before: 0,
    after: 85,
    suffix: "%",
    desc: "Repetitive follow-up, reminders and data entry handled by the system.",
  },
  {
    label: "Connected Stages",
    before: 2,
    after: 6,
    suffix: "+",
    desc: "From ad click to customer — one unbroken journey.",
  },
];

export function ProjectedGrowth() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Projected Growth"
        title="How Results Compound With a Connected System"
        intro="When ads, landing pages, CRM and automation work as one system, the impact builds over time. The numbers below are illustrative projections of system capability — not guaranteed client outcomes."
        align="center"
      />

      <Stagger className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STATS.map((s) => (
          <StaggerItem key={s.label}>
            <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-glow-gold/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
                <TrendingUp className="h-5 w-5" />
              </span>

              {/* Before → After comparison */}
              <div className="mt-5 flex items-end gap-2">
                {/* Before value */}
                <span className="font-display text-2xl font-bold leading-none text-muted-foreground/60 line-through decoration-destructive/50 decoration-2">
                  {s.before}
                  {s.suffix}
                </span>
                <ArrowRight className="mb-1 h-4 w-4 text-glow-gold/70" />
                {/* After value (animated count-up) */}
                <CountUp
                  to={s.after}
                  suffix={s.suffix}
                  duration={1.8}
                  className="gold-stat font-display text-4xl font-extrabold leading-none sm:text-5xl"
                />
                <ArrowUpRight className="mb-1 h-5 w-5 text-glow-gold/70" />
              </div>

              <h3 className="mt-3 font-display text-sm font-bold text-foreground">{s.label}</h3>
              <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>

              {/* before/after labels */}
              <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-[10px] font-semibold uppercase tracking-wider">
                <span className="flex items-center gap-1 text-muted-foreground/60">
                  <X className="h-3 w-3 text-destructive/70" /> Before
                </span>
                <span className="flex items-center gap-1 text-glow-gold">
                  <CheckCircle2 className="h-3 w-3" /> After
                </span>
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>

      <Reveal delay={0.1}>
        <div className="glass-strong mt-6 flex flex-col items-center gap-4 rounded-2xl p-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
              <TrendingUp className="h-5 w-5" />
            </span>
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">Illustrative projection.</span> Actual
              results depend on your business, market and ad spend. No guaranteed outcomes — the
              system gives every lead a clear, followed-up journey.
            </p>
          </div>
          <MagneticButton href={waLink} external className="shrink-0">
            <WhatsAppIcon className="h-4 w-4" />
            Build My System
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}
