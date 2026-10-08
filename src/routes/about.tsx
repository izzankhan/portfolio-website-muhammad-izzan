import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Database,
  Megaphone,
  Cpu,
  GitBranch,
  Users,
  Target,
  ArrowRight,
  GraduationCap,
  MapPin,
  Sparkles,
  Workflow,
  LineChart,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { waLink } from "@/lib/wa";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Izzan Khan | GoHighLevel, Meta Ads & Automation" },
      {
        name: "description",
        content:
          "About Izzan Khan — a systems-focused professional building connected GoHighLevel, Meta Ads, automation, CRM and lead-generation systems. Based in Multan, Pakistan.",
      },
      { property: "og:title", content: "About Izzan Khan | GoHighLevel, Meta Ads & Automation" },
      {
        property: "og:description",
        content:
          "About Izzan Khan — building connected systems across GoHighLevel, Meta Ads, automation and CRM.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const FOCUS = [
  {
    icon: Database,
    title: "GoHighLevel",
    desc: "CRM, pipelines, workflows and follow-up organized into one platform.",
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Strategy, audience, creative and tracking built for qualified leads.",
  },
  {
    icon: Cpu,
    title: "Automation",
    desc: "Automated qualification, follow-up and reminders after the lead.",
  },
  {
    icon: GitBranch,
    title: "Funnels",
    desc: "Conversion-focused funnels from first ad to lead capture.",
  },
  {
    icon: Users,
    title: "CRM Systems",
    desc: "Organized contact and pipeline management for every lead.",
  },
  {
    icon: Target,
    title: "Lead Generation",
    desc: "Connected systems that turn clicks into real opportunities.",
  },
];

const PRINCIPLES = [
  {
    icon: Workflow,
    title: "Systems Over Tactics",
    desc: "A single ad or tool rarely changes a business. I build the connected system around it — so each piece reinforces the next instead of working alone.",
  },
  {
    icon: LineChart,
    title: "Clarity Over Hype",
    desc: "No fabricated results or exaggerated promises. I focus on clear journeys, organized data and consistent follow-up that you can actually see working.",
  },
  {
    icon: Sparkles,
    title: "Automation First",
    desc: "Repetitive manual work — logging leads, sending reminders, moving stages — should run on its own, freeing time for the work that grows the business.",
  },
];

function AboutPage() {
  return (
    <div className="pt-28">
      {/* HERO INTRO */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Eyebrow>About</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              About <span className="text-gradient">Izzan</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg font-medium leading-relaxed text-foreground/90">
              I'm building at the intersection of AI, marketing and automation — with a focus on
              creating systems that help businesses capture, organize and follow up with leads.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Most businesses don't lose leads because the ad was bad. They lose them because the
              ad, the landing page, the CRM and the follow-up live in separate places. My work is to
              connect those pieces — Meta Ads, landing pages, GoHighLevel CRM and automation — into
              one workflow so every lead has a clear, consistent journey from first click to
              customer.
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              My focus is practical and business-first: GoHighLevel, Meta Ads, automation, funnels,
              CRM systems and lead generation — working together as a single system rather than a
              collection of disconnected tools.
            </p>

            {/* Quick facts */}
            <div className="mt-7 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-foreground">
                <MapPin className="h-4 w-4 text-glow-blue" />
                Multan, Pakistan
              </div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-foreground">
                <GraduationCap className="h-4 w-4 text-glow-purple" />
                BS Artificial Intelligence
              </div>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm text-foreground">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-glow-cyan" />
                Available for Projects
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href={waLink} external>
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </MagneticButton>
              <MagneticButton href="/services" variant="ghost">
                Explore Services
                <ArrowRight className="h-4 w-4" />
              </MagneticButton>
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative mx-auto aspect-square max-w-md">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-glow-blue/25 via-glow-purple/20 to-transparent blur-2xl" />
              <div className="glass-strong relative overflow-hidden rounded-3xl border border-glow-blue/30 p-2 shadow-[0_0_60px_-15px_var(--glow-blue)]">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-secondary/50">
                  <img
                    src={SITE.avatar}
                    alt="Izzan Khan — Professional Profile"
                    className="h-full w-full object-cover object-top transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/25 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-semibold text-glow-blue">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-glow-blue" />
                      Systems Architect
                    </div>
                    <p className="mt-2 font-display text-2xl font-bold text-foreground">
                      {SITE.name}
                    </p>
                    <p className="text-xs text-muted-foreground">{SITE.role}</p>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute -right-3 -top-3 h-16 w-16 rounded-full border border-dashed border-glow-blue/30"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute -bottom-4 -left-4 h-12 w-12 rounded-full border border-dashed border-glow-purple/30"
              />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* EDUCATION */}
      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <Reveal>
            <div className="glass-strong relative overflow-hidden rounded-3xl p-8">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-glow-purple/15 blur-3xl" />
              <div className="relative">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-glow-purple/15 text-glow-purple">
                  <GraduationCap className="h-7 w-7" />
                </span>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-glow-purple">
                  Education
                </div>
                <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                  BS Artificial Intelligence
                </h3>
                <p className="mt-1 text-sm font-medium text-muted-foreground">
                  Bahauddin Zakariya University, Multan
                </p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  Studying Artificial Intelligence gives me a structured understanding of how data,
                  logic and automation work together — the same thinking I apply to building
                  lead-generation and CRM systems that run on their own.
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <SectionHeading
              eyebrow="Background"
              title="Where Technology Meets Business Systems"
              align="left"
            />
            <div className="mt-5 space-y-4">
              {[
                "My academic background in Artificial Intelligence shapes how I approach automation — building logic, flows and systems rather than one-off campaigns.",
                "I focus on the practical layer businesses actually need: capturing leads, organizing them, and following up consistently without manual effort.",
                "Rather than promising results I can't verify, I build transparent systems where you can see exactly where each lead is in its journey.",
              ].map((t, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-glow-blue" />
                    <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {t}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FOCUS AREAS */}
      <Section>
        <SectionHeading eyebrow="Focus Areas" title="What I Work With" align="center" />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FOCUS.map((f) => (
            <StaggerItem key={f.title}>
              <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue transition-transform group-hover:scale-110">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* CURRENTLY BUILDING & LEARNING */}
      <Section>
        <SectionHeading
          eyebrow="Currently Building & Learning"
          title="What I'm Focused On Now"
          intro="The areas I'm actively learning, building and refining — honest about where my time and energy go."
          align="center"
        />
        <Stagger className="mx-auto grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {[
            { icon: Database, label: "GoHighLevel" },
            { icon: Megaphone, label: "Meta Ads" },
            { icon: Cpu, label: "AI Automation" },
            { icon: GitBranch, label: "Web Development" },
            { icon: Users, label: "CRM Systems" },
          ].map((it) => (
            <StaggerItem key={it.label}>
              <div className="group flex h-full flex-col items-center gap-3 rounded-2xl glass p-5 text-center transition-all hover:-translate-y-1 hover:glow-ring">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue transition-transform group-hover:scale-110">
                  <it.icon className="h-6 w-6" />
                </span>
                <span className="text-xs font-medium text-foreground">{it.label}</span>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* PRINCIPLES / APPROACH */}
      <Section>
        <SectionHeading
          eyebrow="How I Think"
          title="Principles Behind the Work"
          intro="Three ideas guide every system I build — keeping the work honest, connected and focused on what actually moves a business forward."
          align="center"
        />
        <Stagger className="grid gap-5 md:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <StaggerItem key={p.title}>
              <div className="glass-strong h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-purple/15 text-glow-purple">
                  <p.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* CLOSING CTA */}
      <Section>
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
                My approach is simple: build the system once, then optimize it.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                No fabricated results or exaggerated claims — just connected systems designed to
                capture, organize and follow up with every lead.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton href={waLink} external>
                  <WhatsAppIcon className="h-4 w-4" />
                  Let's Talk On WhatsApp
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
