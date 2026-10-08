import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowLeft,
  AlertTriangle,
  Target,
  Hammer,
  Cpu,
  GitBranch,
  CheckCircle2,
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Database,
  Mail,
  Home,
} from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { CrmPipeline, WorkflowBuilder } from "@/components/visuals";
import { GhlCinematicDemo } from "@/components/ghl-cinematic-demo";
import { MetaCinematicDemo } from "@/components/meta-cinematic-demo";
import { JourneyCinematicDemo } from "@/components/journey-cinematic-demo";
import { DentalProjectPage } from "@/components/sections/dental-project";
import { SalonProjectPage } from "@/components/sections/salon-project";
import { RealestateProjectPage } from "@/components/sections/realestate-project";
import { AccountingProjectPage } from "@/components/sections/accounting-project";
import { getProject, PROJECTS } from "@/lib/projects";
import { waLink } from "@/lib/wa";

export const Route = createFileRoute("/portfolio/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project ? `${project.title} | Izzan Khan` : "Project | Izzan Khan";
    const desc = project?.shortDesc ?? "Project case study from Izzan Khan.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  loader: async ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectPage,
});

function ProjectPage() {
  const { project } = Route.useLoaderData();

  // Dedicated premium interactive page for the Dental concept project.
  if (project.slug === "dental-growth-system") {
    return <DentalProjectPage />;
  }

  // Dedicated premium interactive page for the Salon & Beauty concept project.
  if (project.slug === "salon-lead-booking-system") {
    return <SalonProjectPage />;
  }

  // Dedicated premium interactive page for the Real Estate concept project.
  if (project.slug === "real-estate-lead-system") {
    return <RealestateProjectPage />;
  }

  // Dedicated premium interactive page for the Accounting & Finance concept project.
  if (project.slug === "accounting-finance-lead-system") {
    return <AccountingProjectPage />;
  }

  return (
    <div className="pt-28">
      {/* Header */}
      <Section>
        <Reveal>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Portfolio
            </Link>
            <span className="text-border">/</span>
            <Link
              to="/"
              hash="portfolio"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </Reveal>
        <div className="mt-6 grid items-end gap-6 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm text-glow-blue">{project.num}</span>
              <span className="gold-badge gold-badge-hover rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                {project.status}
              </span>
            </div>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-3 text-sm font-medium text-glow-blue">
              {project.industry} • {project.type}
            </p>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              {project.shortDesc}
            </p>
          </div>
          <Reveal delay={0.1}>
            <div className="relative h-44 overflow-hidden rounded-2xl border border-border bg-background/40">
              <img
                src={project.image}
                alt={`${project.title} — ${project.industry} concept project`}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Gold stats strip — system scope, clearly labeled as concept scope */}
      <Section className="!py-8">
        <Reveal>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {[
              { value: "7", label: "System Stages" },
              { value: "3", label: "Cinematic Demos" },
              { value: "6", label: "Pipeline Stages" },
              { value: "1", label: "Connected System" },
            ].map((s) => (
              <div
                key={s.label}
                className="glass flex flex-col items-center rounded-2xl px-4 py-5 text-center"
              >
                <span className="gold-stat font-display text-3xl font-extrabold sm:text-4xl">
                  {s.value}
                </span>
                <span className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Concept notice */}
      {project.isConcept && (
        <Section className="!py-10">
          <Reveal>
            <div className="flex items-start gap-3 rounded-2xl border border-glow-blue/30 bg-glow-blue/5 px-5 py-4">
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-glow-blue" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-foreground">
                  Demonstration / Concept Project.
                </span>{" "}
                This is a structured system architecture, not a completed client project. No
                fabricated results or testimonials are presented.
              </p>
            </div>
          </Reveal>
        </Section>
      )}

      {/* Overview */}
      {project.overview && (
        <Section className="!py-10">
          <SectionHeading eyebrow="Project Overview" title="Overview" />
          <Reveal>
            <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">
              {project.overview}
            </p>
          </Reveal>
        </Section>
      )}

      {/* Challenge */}
      {project.challenge && (
        <Section className="!py-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <div>
              <Eyebrow>The Challenge</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Business Challenge
              </h2>
            </div>
            <Reveal delay={0.1}>
              <p className="text-base leading-relaxed text-muted-foreground">{project.challenge}</p>
            </Reveal>
          </div>
        </Section>
      )}

      {/* Strategy */}
      {project.strategy && (
        <Section className="!py-10">
          <div className="grid gap-8 lg:grid-cols-2">
            <Reveal>
              <div className="glass-strong rounded-2xl p-7">
                <Target className="h-6 w-6 text-glow-blue" />
                <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                  The Strategy
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {project.strategy}
                </p>
              </div>
            </Reveal>
            <div>
              <Eyebrow>The Strategy</Eyebrow>
              <h2 className="mt-4 font-display text-2xl font-bold text-foreground sm:text-3xl">
                Strategy
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                A connected approach linking advertising, capture and automation into one system.
              </p>
            </div>
          </div>
        </Section>
      )}

      {/* The Build */}
      {project.build && (
        <Section className="!py-10">
          <SectionHeading eyebrow="The Build" title="System Components" />
          <Stagger className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {project.build.map((b) => (
              <StaggerItem key={b}>
                <div className="flex items-center gap-3 rounded-xl glass px-4 py-3.5">
                  <Hammer className="h-4 w-4 shrink-0 text-glow-blue" />
                  <span className="text-sm font-medium text-foreground">{b}</span>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Section>
      )}

      {/* Meta Ads + Landing + Lead Capture flow */}
      <Section className="!py-10">
        <SectionHeading eyebrow="Meta Ads & Lead Capture" title="From Ad to Lead" />
        <Reveal>
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:flex-wrap">
              {[
                { icon: Megaphone, label: "Meta Ads" },
                { icon: LayoutTemplate, label: "Landing Page" },
                { icon: UserPlus, label: "Lead Capture" },
                { icon: Database, label: "GoHighLevel CRM" },
              ].map((s, i) => (
                <div key={s.label} className="flex items-center gap-3 lg:gap-0">
                  <div className="glass flex items-center gap-2.5 rounded-xl px-4 py-3">
                    <s.icon className="h-4 w-4 text-glow-blue" />
                    <span className="text-sm font-medium text-foreground">{s.label}</span>
                  </div>
                  {i < 3 && (
                    <ArrowRight className="mx-1 hidden h-4 w-4 text-glow-blue/50 lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* CRM */}
      <Section className="!py-10">
        <SectionHeading
          eyebrow="GoHighLevel CRM"
          title="CRM Pipeline"
          intro="Demo interface — sample data only."
        />
        <Reveal>
          <CrmPipeline />
        </Reveal>
      </Section>

      {/* Automation */}
      {project.automation && (
        <Section className="!py-10">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading eyebrow="Automation Workflow" title="The Automation" />
              <Stagger className="flex flex-col gap-3">
                {project.automation.map((a) => (
                  <StaggerItem key={a}>
                    <div className="flex items-center gap-3 rounded-xl glass px-4 py-3.5">
                      <Cpu className="h-4 w-4 shrink-0 text-glow-purple" />
                      <span className="text-sm text-foreground">{a}</span>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
            <Reveal delay={0.1}>
              <WorkflowBuilder />
            </Reveal>
          </div>
        </Section>
      )}

      {/* Customer Journey */}
      {project.journey && (
        <Section className="!py-10">
          <SectionHeading eyebrow="Customer Journey" title="The Lead-to-Customer Journey" />
          <Reveal>
            <div className="flex flex-wrap items-center gap-3">
              {project.journey.map((j, i) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5 rounded-xl glass px-4 py-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded-md bg-glow-blue/15 text-[10px] font-bold text-glow-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-sm font-medium text-foreground">{j}</span>
                  </div>
                  {i < project.journey!.length - 1 && (
                    <ArrowRight className="h-4 w-4 text-glow-blue/50" />
                  )}
                </div>
              ))}
            </div>
          </Reveal>
        </Section>
      )}

      {/* Cinematic GoHighLevel demo */}
      <Section className="!py-10">
        <SectionHeading
          eyebrow="Featured Demo"
          title="GoHighLevel Automation Demo"
          intro="A cinematic 9-scene walkthrough showing a complete lead-to-appointment journey for this system."
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <GhlCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* Cinematic Meta Ads demo */}
      <Section className="!py-10">
        <SectionHeading
          eyebrow="Featured Demo"
          title="Meta Ads Campaign Walkthrough"
          intro="An 11-scene cinematic walkthrough showing how a Meta Ads campaign is planned, launched, monitored and connected to the lead system for this project."
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <MetaCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* Cinematic Lead Journey demo */}
      <Section className="!py-10">
        <SectionHeading
          eyebrow="Featured Demo"
          title="Lead Journey Demo"
          intro="A 10-scene cinematic walkthrough showing the complete customer journey for this system — from seeing an ad to becoming a qualified customer."
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <JourneyCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* Outcome */}
      {project.outcome && (
        <Section className="!py-10">
          <Reveal>
            <div className="glass-strong rounded-2xl p-7">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-glow-blue" />
                <h3 className="font-display text-lg font-bold text-foreground">
                  Results / Outcomes
                </h3>
              </div>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {project.outcome}
              </p>
            </div>
          </Reveal>
        </Section>
      )}

      {/* Final system summary */}
      <Section className="!py-10">
        <SectionHeading eyebrow="Final System" title="The Connected System" />
        <Reveal>
          <div className="glass-strong rounded-2xl p-6 sm:p-8">
            <div className="flex flex-wrap items-center gap-3">
              {[
                "Meta Ads",
                "Landing Page",
                "Lead Capture",
                "CRM",
                "Automation",
                "Follow-up",
                "Customer",
              ].map((s, i, arr) => (
                <div key={s} className="flex items-center gap-3">
                  <div className="flex items-center gap-2.5 rounded-xl glass px-4 py-3">
                    <GitBranch className="h-4 w-4 text-glow-blue" />
                    <span className="text-sm font-medium text-foreground">{s}</span>
                  </div>
                  {i < arr.length - 1 && <ArrowRight className="h-4 w-4 text-glow-blue/50" />}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      {/* WhatsApp CTA */}
      <Section>
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Want a system like this for your business?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Let's discuss building a connected growth system for your industry.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton href={waLink} external>
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* More projects */}
      <Section className="!py-12">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h3 className="font-display text-lg font-bold text-foreground">More Projects</h3>
          <Link
            to="/portfolio"
            className="text-sm font-semibold text-glow-blue hover:text-foreground"
          >
            View all
          </Link>
        </div>
        <div className="mt-5 grid gap-4 sm:grid-cols-3">
          {PROJECTS.filter((p) => p.slug !== project.slug).map((p) => (
            <Link
              key={p.slug}
              to="/portfolio/$slug"
              params={{ slug: p.slug }}
              className="group rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:glow-ring"
            >
              <span className="font-mono text-xs text-glow-blue">{p.num}</span>
              <h4 className="mt-2 font-display text-sm font-bold text-foreground">{p.title}</h4>
              <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-glow-blue">
                View{" "}
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </Section>
    </div>
  );
}
