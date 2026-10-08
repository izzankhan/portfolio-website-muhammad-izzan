import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Home as HomeIcon, AlertTriangle } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { waLink, waLinkWith } from "@/lib/wa";
import { ACC_BENEFITS, ACC_TECH } from "./accounting-data";
import {
  AccDashboardMock,
  AccProblems,
  AccJourneySection,
  AccLandingAndForm,
  AccCrmDemo,
  AccQualification,
  AccAutoResponse,
} from "./accounting-components-a";
import {
  AccCalendar,
  AccFollowUp,
  AccOnboarding,
  AccStatusDashboard,
  AccGhlProof,
  AccWorkflowDiagram,
} from "./accounting-components-b";
import { AccCinematicDemo } from "@/components/accounting-cinematic-demo";

const BADGES = ["GoHighLevel", "CRM", "Lead Qualification", "Automation", "Appointment Booking"];

/* Accounting & Finance Client Management & Automation System — premium interactive demo page.
   Clearly labeled as Portfolio Demonstration / Demo.
   No fake client results, testimonials, revenue or ROI. */
export function AccountingProjectPage() {
  return (
    <div className="pt-28">
      {/* Back links */}
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
              <HomeIcon className="h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </Reveal>
      </Section>

      {/* SECTION 1 — HERO */}
      <Section className="!pt-0">
        <div className="grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <Reveal>
              <span className="gold-badge gold-badge-hover rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                GoHighLevel Automation Portfolio Demo
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Accounting & Finance Client Management &{" "}
                <span className="text-gradient">Automation System</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Capture enquiries, qualify prospects, automate follow-ups and move new clients from
                consultation to onboarding — all through one connected workflow.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-6 flex flex-wrap gap-2">
                {BADGES.map((b) => (
                  <span
                    key={b}
                    className="rounded-full border border-glow-gold/25 bg-glow-gold/8 px-3.5 py-1.5 text-xs font-semibold text-glow-gold"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.2}>
              <div className="mt-8 flex flex-wrap gap-3">
                <MagneticButton href="#system" variant="tertiary">
                  Explore System
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton href="#workflow" variant="ghost">
                  View Workflow
                </MagneticButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <AccDashboardMock />
          </Reveal>
        </div>
      </Section>

      {/* Concept notice */}
      <Section className="!py-10">
        <Reveal>
          <div className="flex items-start gap-3 rounded-2xl border border-glow-gold/30 bg-glow-gold/5 px-5 py-4">
            <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-glow-gold" />
            <p className="text-sm leading-relaxed text-muted-foreground">
              <span className="font-semibold text-foreground">
                Portfolio Demonstration — Concept Project.
              </span>{" "}
              A fictional company ("Miller Consulting Ltd.") and prospect ("James Miller") are used
              to demonstrate the system. No fabricated results, reviews or client data are
              presented.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECTION 2 — THE PROBLEM */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="The Problem"
          title="Where Accounting Firms Lose Potential Clients"
          intro="Five common gaps that quietly cost accounting firms booked consultations every week."
          align="center"
        />
        <Reveal>
          <AccProblems />
        </Reveal>
      </Section>

      {/* SECTION 3 — COMPLETE CLIENT JOURNEY */}
      <Section id="journey" className="!pt-0">
        <SectionHeading
          eyebrow="The Client Journey"
          title="From First Enquiry to Active Client"
          intro="Click any stage to see what happens, why it matters, and which system handles it."
          align="center"
        />
        <Reveal>
          <AccJourneySection />
        </Reveal>
      </Section>

      {/* SECTION 4 & 5 — CONSULTATION LANDING PAGE + FORM */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Landing Page & Enquiry"
          title="Consultation Landing Page & Form"
          intro="A fictional accounting consultation page with an interactive form that simulates the automation."
          align="center"
        />
        <Reveal>
          <AccLandingAndForm />
        </Reveal>
      </Section>

      {/* SECTION 6 — CRM DASHBOARD */}
      <Section id="system" className="!pt-0">
        <SectionHeading
          eyebrow="GoHighLevel CRM"
          title="Lead Management CRM"
          intro="A fictional pipeline showing how an accounting lead moves from enquiry to active client. Click the lead to open the detail panel."
          align="center"
        />
        <Reveal>
          <AccCrmDemo />
        </Reveal>
      </Section>

      {/* SECTION 7 — LEAD QUALIFICATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Lead Qualification"
          title="Automated Lead Qualification"
          intro="An illustrative qualification flow that prioritizes ready-to-engage prospects."
          align="center"
        />
        <Reveal>
          <AccQualification />
        </Reveal>
      </Section>

      {/* SECTION 8 — AUTOMATED RESPONSE */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Instant Response"
          title="Instant Lead Response"
          intro="A simulated automated message sent immediately after form submission."
          align="center"
        />
        <Reveal>
          <AccAutoResponse />
        </Reveal>
      </Section>

      {/* SECTION 9 — CONSULTATION CALENDAR */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Consultation Booking"
          title="Calendar & Slot Selection"
          intro="Pick a day and slot to see how a booking updates the CRM pipeline to Consultation Booked."
          align="center"
        />
        <Reveal>
          <AccCalendar />
        </Reveal>
      </Section>

      {/* SECTION 10 — FOLLOW-UP AUTOMATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Follow-Up Automation"
          title="Automated Follow-Up Sequence"
          intro="Each automation step activates sequentially to keep the prospect engaged."
          align="center"
        />
        <Reveal>
          <AccFollowUp />
        </Reveal>
      </Section>

      {/* SECTION 11 — CLIENT ONBOARDING */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Client Onboarding"
          title="From Consultation to Client Onboarding"
          intro="A structured onboarding flow that moves a prospect into an active client."
          align="center"
        />
        <Reveal>
          <AccOnboarding />
        </Reveal>
      </Section>

      {/* SECTION 12 — CLIENT STATUS DASHBOARD */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Status Dashboard"
          title="Client Status Dashboard"
          intro="A dashboard showing enquiries, consultations, onboarding and active clients."
          align="center"
        />
        <Reveal>
          <AccStatusDashboard />
        </Reveal>
      </Section>

      {/* SECTION 13 — REAL GOHIGHLEVEL PROOF */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Real Implementation"
          title="Real GoHighLevel Implementation"
          intro="Demo screenshots showing the CRM pipeline, workflow automation, form and calendar structure."
          align="center"
        />
        <Reveal>
          <AccGhlProof />
        </Reveal>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Real GoHighLevel interface from my implementation workflow.
        </p>
      </Section>

      {/* SECTION 14 — COMPLETE AUTOMATION WORKFLOW */}
      <Section id="workflow" className="!pt-0">
        <SectionHeading
          eyebrow="Workflow Visualization"
          title="The Complete Connected System"
          intro="Every stage — from website enquiry to active client — wired into one automated flow."
          align="center"
        />
        <Reveal>
          <AccWorkflowDiagram />
        </Reveal>
      </Section>

      {/* SECTION 15 — VIDEO DEMO */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Video Demo"
          title="See the Complete System in Action"
          intro="A 90–120 second cinematic walkthrough showing the full accounting automation journey."
          align="center"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <AccCinematicDemo />
          </div>
        </Reveal>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">
          Interactive portfolio demonstration using fictional data.
        </p>
      </Section>

      {/* SECTION 16 — SYSTEM BENEFITS */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="System Benefits"
          title="What This System Helps Accounting Firms Achieve"
          intro="Operational improvements — not guaranteed revenue claims."
          align="center"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ACC_BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:glow-ring">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-sm font-bold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{b.desc}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* SECTION 17 — TECHNOLOGY */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Technology" title="Technology Behind the System" align="center" />
        <Stagger className="flex flex-wrap justify-center gap-3">
          {ACC_TECH.map((t) => (
            <StaggerItem key={t}>
              <div className="rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground/90 transition-all hover:border-glow-gold/40 hover:bg-glow-gold/5 hover:text-glow-gold">
                {t}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* SECTION 18 — FINAL CTA */}
      <Section className="!pt-0">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <span className="gold-badge rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                GoHighLevel Automation Portfolio — Demo System
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Turn Your Accounting Client Journey Into an Automated System
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                From the first enquiry to consultation and onboarding, build a system that keeps
                your leads organized and your follow-ups consistent.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <MagneticButton
                  href={waLinkWith(
                    "I'd like an accounting & finance client management & automation system for my business.",
                  )}
                  external
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  Discuss Your Automation System
                </MagneticButton>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-5 py-3 text-sm font-semibold text-foreground transition-all hover:bg-secondary"
                >
                  View More Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
