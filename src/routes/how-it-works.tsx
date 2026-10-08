import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search,
  Map,
  Hammer,
  Plug,
  FlaskConical,
  Gauge,
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Database,
  Cpu,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { SystemFlow, LeadJourney, WorkflowBuilder, CrmPipeline } from "@/components/visuals";
import { waLink } from "@/lib/wa";

export const Route = createFileRoute("/how-it-works")({
  head: () => ({
    meta: [
      { title: "How It Works | Izzan Khan — Connected Growth Systems" },
      {
        name: "description",
        content:
          "How I build connected systems: understand the business, identify the lead journey, build the funnel, connect GoHighLevel, launch Meta Ads and optimize.",
      },
      { property: "og:title", content: "How It Works | Izzan Khan" },
      { property: "og:description", content: "A connected growth system from ad to customer." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowItWorksPage,
});

const STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Understand the Business",
    desc: "Learn the business, offer and customer before anything is built.",
  },
  {
    num: "02",
    icon: Map,
    title: "Identify the Lead Journey",
    desc: "Map the path from first ad impression to converted customer.",
  },
  {
    num: "03",
    icon: Hammer,
    title: "Build the Funnel",
    desc: "Create landing pages and lead capture built for conversion.",
  },
  {
    num: "04",
    icon: Plug,
    title: "Connect GoHighLevel",
    desc: "Set up CRM, pipelines and workflows to organize every lead.",
  },
  {
    num: "05",
    icon: Megaphone,
    title: "Launch / Connect Meta Ads",
    desc: "Run targeted campaigns that feed qualified leads into the system.",
  },
  {
    num: "06",
    icon: Gauge,
    title: "Optimize the System",
    desc: "Track, test and refine the system for consistent performance.",
  },
];

function HowItWorksPage() {
  return (
    <div className="pt-28">
      <Section>
        <SectionHeading
          eyebrow="How I Work"
          title={
            <>
              How I <span className="text-gradient">Work</span>
            </>
          }
          intro="Six steps that take a business from disconnected tools to one connected growth system."
          align="center"
        />

        {/* Horizontal timeline on desktop, vertical on mobile */}
        <Reveal>
          <div className="relative">
            <div className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-glow-blue/40 via-glow-purple/40 to-glow-blue/40 lg:block" />
            <Stagger className="grid gap-8 lg:grid-cols-6">
              {STEPS.map((s) => (
                <StaggerItem key={s.num}>
                  <div className="relative flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-2xl glass-strong text-glow-blue">
                      <s.icon className="h-6 w-6" />
                    </div>
                    <span className="mt-4 font-mono text-xs text-glow-blue">{s.num}</span>
                    <h3 className="mt-1 font-display text-sm font-bold text-foreground">
                      {s.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Reveal>
      </Section>

      {/* My Approach — 3D animated process */}
      <Section>
        <SectionHeading
          eyebrow="My Approach"
          title="Strategy Before Setup"
          intro="A defined process that prioritizes understanding before building."
          align="center"
        />
        <Reveal>
          <SystemFlow
            steps={[
              { icon: Search, label: "Understand" },
              { icon: Map, label: "Plan" },
              { icon: Hammer, label: "Build" },
              { icon: Plug, label: "Connect" },
              { icon: FlaskConical, label: "Test" },
              { icon: Gauge, label: "Optimize" },
            ]}
          />
        </Reveal>
      </Section>

      {/* Complete system */}
      <Section>
        <SectionHeading
          eyebrow="The Complete System"
          title="One Connected Growth System"
          intro="Every stage connects — from the first ad to a converted customer."
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

      {/* Lead journey */}
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

      {/* Workflow + pipeline */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Automation Workflow" title="Workflow Builder" />
            <Reveal delay={0.1}>
              <WorkflowBuilder />
            </Reveal>
          </div>
          <div>
            <SectionHeading eyebrow="CRM Pipeline" title="Pipeline Stages" />
            <Reveal delay={0.1}>
              <CrmPipeline />
            </Reveal>
          </div>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Ready to see this built for your business?
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <MagneticButton href={waLink} external>
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </MagneticButton>
                <MagneticButton href="/process" variant="ghost">
                  View Full Process
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
