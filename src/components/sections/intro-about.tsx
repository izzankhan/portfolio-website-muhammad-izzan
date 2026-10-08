import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowDown,
  Megaphone,
  LayoutTemplate,
  Database,
  Mail,
  Cpu,
  MapPin,
  GraduationCap,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { SITE } from "@/lib/site";

export function QuickIntro() {
  const parts = [
    { icon: Megaphone, label: "Advertising" },
    { icon: LayoutTemplate, label: "Landing Pages" },
    { icon: Database, label: "CRM" },
    { icon: Mail, label: "Follow-up" },
    { icon: Cpu, label: "Automation" },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="The Approach"
        title="More Than Marketing. I Build Systems."
        intro="The goal isn't simply to run advertisements. It's to connect advertising, landing pages, CRM, follow-up and automation into one connected system that works together."
      />
      <Reveal>
        <div className="glass-strong rounded-2xl p-6 sm:p-10">
          <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center lg:justify-between">
            {parts.map((p, i) => (
              <div key={p.label} className="flex flex-col items-center gap-3 lg:flex-row">
                <motion.div
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-glow-blue/15 text-glow-blue">
                    <p.icon className="h-6 w-6" />
                  </span>
                  <span className="text-xs font-medium text-muted-foreground">{p.label}</span>
                </motion.div>
                {i < parts.length - 1 && (
                  <>
                    <ArrowRight className="hidden h-5 w-5 text-glow-blue/40 lg:block" />
                    <ArrowDown className="h-5 w-5 text-glow-blue/40 lg:hidden" />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

export function AboutPreview() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="About"
            title={
              <>
                About <span className="text-gradient">Izzan</span>
              </>
            }
            intro="I work at the intersection of advertising and automation — building connected systems that turn attention into organized, followed-up leads. My focus is GoHighLevel, Meta Ads, funnels, CRM systems and lead generation, combined into one workflow rather than disconnected tools."
          />
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-3">
              {["GoHighLevel", "Meta Ads", "Automation", "Funnels", "CRM", "Lead Generation"].map(
                (t) => (
                  <span
                    key={t}
                    className="rounded-full glass px-4 py-2 text-xs font-medium text-foreground"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-foreground">
                <MapPin className="h-3.5 w-3.5 text-glow-blue" />
                Multan, Pakistan
              </span>
              <span className="inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs text-foreground">
                <GraduationCap className="h-3.5 w-3.5 text-glow-purple" />
                BS Artificial Intelligence — BZU Multan
              </span>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <Link
              to="/about"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-glow-blue transition-colors hover:text-foreground"
            >
              Read more about my approach
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <div className="relative mx-auto aspect-square max-w-md">
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-glow-blue/20 via-glow-purple/15 to-transparent blur-xl" />
            <div className="glass-strong relative overflow-hidden rounded-3xl border border-glow-blue/30 p-2 shadow-[0_0_50px_-15px_var(--glow-blue)]">
              <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary/50">
                <img
                  src={SITE.avatar}
                  alt="Izzan Khan — GoHighLevel Expert, Meta Ads & AI Automation"
                  className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-semibold text-glow-blue">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-glow-blue" />
                    Available for Projects
                  </div>
                  <p className="mt-2 font-display text-xl font-bold text-foreground">{SITE.name}</p>
                  <p className="text-xs text-muted-foreground">{SITE.role}</p>
                </div>
              </div>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
              className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-dashed border-glow-blue/30"
            />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
