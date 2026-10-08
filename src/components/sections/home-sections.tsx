import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Database,
  Megaphone,
  Cpu,
  Target,
  Users,
  GitBranch,
  Workflow,
  MessageSquare,
  Clock,
  Sparkles,
  LayoutTemplate,
  UserPlus,
  Mail,
  CheckCircle2,
  Layers,
  Zap,
  Network,
  Rocket,
  Star,
  Send,
  ThumbsUp,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal, Stagger, StaggerItem, TiltCard } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import {
  FlowChain,
  CrmPipeline,
  WorkflowBuilder,
  MetaAdsDashboard,
  LeadJourney,
  CrmDashboardMini,
  SystemFlow,
  AiAutomationFlow,
  WhyMattersInteractive,
} from "@/components/visuals";
import { waLink } from "@/lib/wa";
import { PROJECTS } from "@/lib/projects";

/* SERVICES PREVIEW — expandable detail cards */
const SERVICES = [
  {
    icon: Database,
    title: "GoHighLevel",
    desc: "CRM, pipelines, workflows and follow-up journeys organized in one platform.",
    details: [
      "CRM Setup",
      "Pipelines",
      "Workflows",
      "Lead Follow-Up",
      "AI Automation",
      "Appointment Systems",
    ],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Campaign strategy, audience, creative and tracking built to generate qualified leads.",
    details: [
      "Campaign Setup",
      "Audience Research",
      "Creative Strategy",
      "Lead Generation",
      "Retargeting",
      "Optimization",
    ],
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Automate the work that happens after the lead — qualification, follow-up and reminders.",
    details: [
      "AI Qualification",
      "Lead Routing",
      "Follow-Up",
      "Workflow Automation",
      "CRM Automation",
    ],
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    desc: "Connected funnels, landing pages and capture systems that turn clicks into leads.",
    details: [
      "Landing Pages",
      "Lead Capture",
      "Funnel Design",
      "Pipeline Management",
      "Conversion Systems",
    ],
  },
];

export function ServicesPreview() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Core Services"
        title="My Core Services"
        intro="Four connected capabilities that work together as one growth system. Hover a card to see what's included."
        align="center"
      />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s) => (
          <StaggerItem key={s.title}>
            <TiltCard className="group h-full">
              <Link
                to="/services"
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring"
              >
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-glow-blue/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.details.slice(0, 3).map((d) => (
                    <span
                      key={d}
                      className="rounded-md bg-secondary/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {d}
                    </span>
                  ))}
                  <span className="rounded-md bg-secondary/60 px-2 py-0.5 text-[10px] font-medium text-glow-blue">
                    +{s.details.length - 3} more
                  </span>
                </div>
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-glow-blue">
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* WHAT I BUILD — compact 5-card area */
export function WhatIBuild() {
  const items = [
    {
      icon: Target,
      label: "Lead Generation Systems",
      desc: "Ads, funnels and capture systems that turn clicks into organized leads.",
    },
    {
      icon: Database,
      label: "CRM & Pipeline Systems",
      desc: "Every lead tracked and organized through clear pipeline stages.",
    },
    {
      icon: Cpu,
      label: "AI Automation",
      desc: "Qualification, routing and follow-up that run without manual effort.",
    },
    {
      icon: Mail,
      label: "Follow-Up Systems",
      desc: "Consistent, automated follow-up across SMS, email and WhatsApp.",
    },
    {
      icon: LayoutTemplate,
      label: "Conversion-Focused Landing Pages",
      desc: "Focused pages built to turn attention into captured leads.",
    },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="What I Build"
        title="What I Actually Build"
        intro="Five connected components that come together as one growth system."
        align="center"
      />
      <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {items.map((it) => (
          <StaggerItem key={it.label}>
            <div className="group flex h-full flex-col gap-3 rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue transition-transform group-hover:scale-110">
                <it.icon className="h-5 w-5" />
              </span>
              <h3 className="font-display text-sm font-bold leading-tight text-foreground">
                {it.label}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* GHL SECTION */
export function GhlSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="GoHighLevel"
            title="GoHighLevel Systems That Organize Your Leads"
            intro="GoHighLevel can connect lead capture, CRM, pipelines, workflows, follow-ups and appointment journeys into one system — so no lead is left unmanaged."
          />
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2.5">
              {[
                "Contacts",
                "Pipeline",
                "Workflow",
                "Conversations",
                "Follow-up",
                "Opportunities",
              ].map((t) => (
                <span
                  key={t}
                  className="rounded-full glass px-3.5 py-1.5 text-xs font-medium text-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <MagneticButton href="/how-it-works" className="mt-8">
              Explore How It Works
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </MagneticButton>
          </Reveal>
        </div>
        <Reveal delay={0.1}>
          <CrmDashboardMini />
        </Reveal>
      </div>
    </Section>
  );
}

/* META ADS SECTION */
export function MetaAdsSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal>
          <MetaAdsDashboard />
        </Reveal>
        <div className="lg:order-first">
          <SectionHeading
            eyebrow="Meta Ads"
            title="Turn Attention Into Qualified Leads"
            intro="A structured process takes a campaign from strategy to optimized lead flow."
          />
          <Reveal delay={0.1}>
            <FlowChain
              steps={[
                { icon: Target, label: "Strategy" },
                { icon: Users, label: "Audience" },
                { icon: Sparkles, label: "Creative" },
                { icon: Megaphone, label: "Ad" },
                { icon: LayoutTemplate, label: "Landing Page" },
                { icon: UserPlus, label: "Lead" },
                { icon: GitBranch, label: "Tracking" },
                { icon: Zap, label: "Optimize" },
              ]}
            />
          </Reveal>
        </div>
      </div>
    </Section>
  );
}

/* AI AUTOMATION SECTION */
export function AiAutomationSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="AI Automation"
            title="Automate the Work That Happens After the Lead"
            intro="Once a lead arrives, automation handles qualification, follow-up, reminders and handoff — so the journey continues without manual gaps."
          />
        </div>
        <Reveal delay={0.1}>
          <AiAutomationFlow />
        </Reveal>
      </div>
    </Section>
  );
}

/* COMPLETE SYSTEM */
export function CompleteSystem() {
  return (
    <Section>
      <SectionHeading
        eyebrow="The Complete System"
        title="One Connected Growth System"
        intro="Every stage connects to the next — from the first ad impression to a converted customer."
        align="center"
      />
      <Reveal>
        <SystemFlow
          steps={[
            { icon: Megaphone, label: "META ADS" },
            { icon: LayoutTemplate, label: "LANDING PAGE" },
            { icon: UserPlus, label: "LEAD CAPTURE" },
            { icon: Database, label: "GOHIGHLEVEL CRM" },
            { icon: Cpu, label: "AUTOMATION" },
            { icon: Mail, label: "FOLLOW-UP" },
            { icon: CheckCircle2, label: "CUSTOMER" },
          ]}
        />
      </Reveal>
    </Section>
  );
}

/* WHY MATTERS */
export function WhyMatters() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Why This Matters"
        title="Common Problems Businesses Face"
        intro="Most lead loss doesn't happen at the ad — it happens after the click, when systems are disconnected. Click each problem to see it visualized."
        align="center"
      />
      <Reveal>
        <WhyMattersInteractive />
      </Reveal>
      <Reveal delay={0.1}>
        <div className="glass-strong mt-8 flex flex-col items-start justify-center rounded-2xl p-8">
          <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue">
            <Network className="h-6 w-6" />
          </span>
          <h3 className="mt-5 font-display text-xl font-bold text-foreground">
            An integrated system addresses this
          </h3>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-foreground">
            When ads, landing pages, CRM and automation are connected, every lead is captured,
            organized and followed up consistently. The system reduces manual gaps and keeps the
            customer journey moving — without exaggerated outcome promises.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}

/* LEAD JOURNEY */
export function LeadJourneySection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Lead Journey"
        title="The Interactive Lead Journey"
        intro="Click through each step to see how a person moves from ad to customer."
        align="center"
      />
      <Reveal>
        <LeadJourney />
      </Reveal>
    </Section>
  );
}

/* CRM PIPELINE */
export function CrmPipelineSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="CRM Pipeline"
        title="A Demonstrative CRM Pipeline"
        intro="A realistic pipeline interface showing how leads move through stages. Sample data only."
        align="center"
      />
      <Reveal>
        <CrmPipeline />
      </Reveal>
    </Section>
  );
}

/* WORKFLOW */
export function WorkflowSection() {
  return (
    <Section>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Automation Workflow"
            title="Interactive Workflow Builder"
            intro="A visual of how a trigger sets off an automated sequence — from new lead to team notification."
          />
        </div>
        <Reveal delay={0.1}>
          <WorkflowBuilder />
        </Reveal>
      </div>
    </Section>
  );
}

/* META ADS JOURNEY */
export function MetaAdsJourneySection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Meta Ads Campaign Journey"
        title="From Campaign to CRM"
        intro="A premium dashboard-style view of the campaign journey. Sample numbers are labeled as demo data."
        align="center"
      />
      <Reveal>
        <div className="glass-strong rounded-2xl p-6 sm:p-8">
          <FlowChain
            steps={[
              { icon: Megaphone, label: "Campaign" },
              { icon: Layers, label: "Ad Set" },
              { icon: Users, label: "Audience" },
              { icon: Sparkles, label: "Creative" },
              { icon: LayoutTemplate, label: "Landing Page" },
              { icon: UserPlus, label: "Lead" },
              { icon: Database, label: "CRM" },
            ]}
          />
        </div>
      </Reveal>
    </Section>
  );
}

/* WHAT I CAN BUILD */
export function WhatICanBuild() {
  const items = [
    { icon: Target, label: "Lead Generation" },
    { icon: Database, label: "CRM Setup" },
    { icon: Cpu, label: "Automation" },
    { icon: LayoutTemplate, label: "Landing Pages" },
    { icon: Megaphone, label: "Meta Ads" },
    { icon: Mail, label: "Follow-Up Systems" },
    { icon: GitBranch, label: "Pipeline Management" },
    { icon: Sparkles, label: "AI Automation" },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="Capabilities"
        title="What I Can Build"
        intro="A full range of connected components for a complete growth system."
        align="center"
      />
      <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((it) => (
          <StaggerItem key={it.label}>
            <div className="group flex flex-col items-center gap-3 rounded-2xl glass p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue transition-transform group-hover:scale-110">
                <it.icon className="h-6 w-6" />
              </span>
              <span className="text-sm font-medium text-foreground">{it.label}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* PORTFOLIO PREVIEW + TOOLS moved to focused modules:
   src/components/sections/portfolio-preview.tsx
   src/components/sections/tech-stack.tsx */

/* APPROACH DIFF */
export function ApproachDiff() {
  const cards = [
    {
      icon: Network,
      title: "Connected Systems",
      desc: "Advertising and automation work together as one system, not separate tools.",
    },
    {
      icon: GitBranch,
      title: "Clear Customer Journey",
      desc: "Every lead has a defined journey from first click to conversion.",
    },
    {
      icon: Cpu,
      title: "Automation-Focused",
      desc: "Reduce repetitive manual processes so the system runs consistently.",
    },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="What Makes My Approach Different"
        title="What Makes My Approach Different"
        align="center"
      />
      <Stagger className="grid gap-5 lg:grid-cols-3">
        {cards.map((c) => (
          <StaggerItem key={c.title}>
            <div className="group h-full rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue transition-transform group-hover:scale-110">
                <c.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* IDEAL BUSINESSES */
export function IdealBusinesses() {
  const industries = [
    { icon: Users, label: "Dental" },
    { icon: Sparkles, label: "Salon & Beauty" },
    { icon: Target, label: "Real Estate" },
    { icon: Layers, label: "Accounting & Finance" },
    { icon: Rocket, label: "Local Services" },
    { icon: Network, label: "Other Lead-Based Businesses" },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="Ideal Businesses"
        title="Industries I Can Work With"
        intro="Built to serve lead-based local businesses across multiple industries."
        align="center"
      />
      <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {industries.map((ind) => (
          <StaggerItem key={ind.label}>
            <div className="group flex h-full flex-col items-center gap-3 rounded-2xl glass p-5 text-center transition-all hover:-translate-y-1 hover:glow-ring">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-glow-purple/15 text-glow-purple transition-transform group-hover:scale-110">
                <ind.icon className="h-6 w-6" />
              </span>
              <span className="text-xs font-medium text-foreground">{ind.label}</span>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}

/* TECH EXPLANATION */
export function TechExplanation() {
  const steps = [
    { icon: Megaphone, label: "Ads bring attention" },
    { icon: GitBranch, label: "Funnels capture interest" },
    { icon: Database, label: "CRM organizes leads" },
    { icon: Cpu, label: "Automation manages follow-up" },
    { icon: Zap, label: "Optimization improves the system" },
  ];
  return (
    <Section>
      <SectionHeading
        eyebrow="About The Technology"
        title="How The Technology Works Together"
        align="center"
      />
      <Reveal>
        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-center">
          {steps.map((s, i) => (
            <div key={s.label} className="flex items-center gap-3 lg:gap-0">
              <div className="glass flex items-center gap-3 rounded-xl px-5 py-4">
                <s.icon className="h-5 w-5 text-glow-blue" />
                <span className="text-sm font-medium text-foreground">{s.label}</span>
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="mx-1 hidden h-4 w-4 text-glow-blue/50 lg:block" />
              )}
            </div>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}

/* FINAL VALUE */
export function FinalValue() {
  return (
    <Section>
      <Reveal>
        <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-16 text-center sm:px-12 sm:py-24">
          <div className="pointer-events-none absolute inset-0 page-glow opacity-50" />
          <div className="relative">
            <Eyebrow>The Bottom Line</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-bold leading-[1.1] tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Your Leads Shouldn't Get Lost After The Click.
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              Build a connected system that helps your business capture, organize and follow up with
              leads.
            </p>
            <div className="mt-9 flex justify-center">
              <MagneticButton href={waLink} external className="cta-glow">
                <WhatsAppIcon className="h-4 w-4" />
                Let's Talk On WhatsApp
              </MagneticButton>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
