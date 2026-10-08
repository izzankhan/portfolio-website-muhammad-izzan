import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Database,
  Megaphone,
  Cpu,
  Target,
  Users,
  GitBranch,
  LayoutTemplate,
  Mail,
  CheckCircle2,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import {
  FlowChain,
  CrmDashboardMini,
  MetaAdsDashboard,
  AiAutomationFlow,
} from "@/components/visuals";
import { waLink } from "@/lib/wa";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services | Izzan Khan — GoHighLevel, Meta Ads & AI Automation" },
      {
        name: "description",
        content:
          "Services from Izzan Khan: GoHighLevel systems, Meta Ads, AI automation, CRM setup, lead generation funnels and landing pages.",
      },
      {
        property: "og:title",
        content: "Services | Izzan Khan — GoHighLevel, Meta Ads & AI Automation",
      },
      {
        property: "og:description",
        content: "GoHighLevel, Meta Ads, AI automation, CRM and lead generation systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const SERVICES = [
  {
    icon: Database,
    title: "GoHighLevel",
    desc: "CRM, pipelines, workflows, follow-up journeys and appointment booking organized in one platform — so no lead is left unmanaged.",
    points: ["Contacts & pipelines", "Automated workflows", "Follow-up sequences", "Conversations"],
  },
  {
    icon: Megaphone,
    title: "Meta Ads",
    desc: "Campaign strategy, audience targeting, creative direction and tracking built to generate qualified leads — not just clicks.",
    points: [
      "Campaign strategy",
      "Audience targeting",
      "Creative direction",
      "Tracking & optimization",
    ],
  },
  {
    icon: Cpu,
    title: "AI Automation",
    desc: "Automate the work that happens after the lead — qualification, follow-up, reminders and handoff to keep the journey moving.",
    points: ["Lead qualification", "Automated follow-up", "Reminders", "Team notifications"],
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    desc: "Connected funnels, landing pages and capture systems that turn ad clicks into organized, followed-up leads.",
    points: ["Landing pages", "Lead capture", "Funnel design", "Pipeline management"],
  },
];

function ServicesPage() {
  return (
    <div className="pt-28">
      <Section>
        <SectionHeading
          eyebrow="Services"
          title={
            <>
              My Core <span className="text-gradient">Services</span>
            </>
          }
          intro="Four connected capabilities that work together as one growth system — from the first ad impression to a converted customer."
          align="center"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2">
          {SERVICES.map((s) => (
            <StaggerItem key={s.title}>
              <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-7 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
                <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-glow-blue/10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-glow-blue/15 text-glow-blue transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="h-7 w-7" />
                </span>
                <h3 className="mt-5 font-display text-xl font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <ul className="mt-5 grid grid-cols-2 gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-glow-blue" />
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* GoHighLevel detail */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="GoHighLevel"
              title="GoHighLevel Systems That Organize Your Leads"
              intro="Connect lead capture, CRM, pipelines, workflows, follow-ups and appointment journeys into one system."
            />
            <Reveal delay={0.1}>
              <MagneticButton href="/how-it-works" className="mt-2">
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

      {/* Meta Ads detail */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <MetaAdsDashboard />
          </Reveal>
          <div className="lg:order-first">
            <SectionHeading
              eyebrow="Meta Ads"
              title="Turn Attention Into Qualified Leads"
              intro="A structured process from strategy to optimized lead flow."
            />
            <Reveal delay={0.1}>
              <FlowChain
                steps={[
                  { icon: Target, label: "Strategy" },
                  { icon: Users, label: "Audience" },
                  { icon: Megaphone, label: "Ad" },
                  { icon: LayoutTemplate, label: "Landing Page" },
                  { icon: GitBranch, label: "Lead" },
                  { icon: Mail, label: "Follow-up" },
                ]}
              />
            </Reveal>
          </div>
        </div>
      </Section>

      {/* AI Automation detail */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="AI Automation"
              title="Automate the Work After the Lead"
              intro="Qualification, follow-up, reminders and handoff — automated so the journey continues without manual gaps."
            />
          </div>
          <Reveal delay={0.1}>
            <AiAutomationFlow />
          </Reveal>
        </div>
      </Section>

      <Section>
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Need a connected system for your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Let's discuss your lead generation and automation requirements.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <MagneticButton href={waLink} external>
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </MagneticButton>
                <MagneticButton href="/how-it-works" variant="ghost">
                  See How It Works
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
