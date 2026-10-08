import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Home as HomeIcon, AlertTriangle } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { waLink, waLinkWith } from "@/lib/wa";
import { RE_BENEFITS, RE_TECH } from "./realestate-data";
import {
  ReDashboardMock,
  ReProblems,
  ReJourneySection,
  ReLandingAndForm,
  ReCrmDemo,
} from "./realestate-components-a";
import { ReQualification, RePropertyMatch, ReAgentNotification } from "./realestate-components-c";
import {
  ReViewingCalendar,
  ReReminders,
  RePostViewing,
  ReGhlProof,
  ReWorkflowDiagram,
} from "./realestate-components-d";
import { ReCinematicDemo } from "@/components/realestate-cinematic-demo";

const BADGES = ["GoHighLevel", "CRM", "Lead Qualification", "Automation", "Appointment Booking"];

/* Real Estate Lead Management & Automation System — premium interactive demo page.
   Clearly labeled as Portfolio Demonstration / Demo.
   No fake client results, testimonials, revenue or ROI. */
export function RealestateProjectPage() {
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
                Portfolio Demonstration
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Real Estate Lead Management &{" "}
                <span className="text-gradient">Automation System</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Capture property enquiries, qualify prospects, match them with properties and move
                them toward scheduled viewings.
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
                <MagneticButton href="#journey" variant="ghost">
                  Watch Workflow Demo
                </MagneticButton>
                <MagneticButton href="#system" variant="tertiary">
                  Explore System
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <ReDashboardMock />
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
              A fictional property ("Modern 3-Bedroom Family Home"), buyer ("Daniel Carter") and
              agent data are used to demonstrate the system. No fabricated results, reviews or
              client data are presented.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECTION 2 — THE REAL ESTATE PROBLEM */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="The Problem"
          title="Where Property Leads Get Lost"
          intro="Five common gaps that quietly cost real estate teams booked viewings every week."
          align="center"
        />
        <Reveal>
          <ReProblems />
        </Reveal>
      </Section>

      {/* SECTION 3 — COMPLETE PROPERTY LEAD JOURNEY */}
      <Section id="journey" className="!pt-0">
        <SectionHeading
          eyebrow="The Lead Journey"
          title="From Property Enquiry to Viewing"
          intro="Click any stage to see what happens, why it matters, and which system handles it."
          align="center"
        />
        <Reveal>
          <ReJourneySection />
        </Reveal>
      </Section>

      {/* SECTION 4 & 5 — PROPERTY LANDING PAGE + ENQUIRY FORM */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Landing Page & Enquiry"
          title="Property Listing & Enquiry Form"
          intro="A fictional property landing page with an interactive enquiry form that simulates the automation."
          align="center"
        />
        <Reveal>
          <ReLandingAndForm />
        </Reveal>
      </Section>

      {/* SECTION 6 — REAL ESTATE CRM */}
      <Section id="system" className="!pt-0">
        <SectionHeading
          eyebrow="GoHighLevel CRM"
          title="Interactive CRM Demo"
          intro="A fictional pipeline showing how a property lead moves from enquiry to follow-up. Click the lead to open the detail panel."
          align="center"
        />
        <Reveal>
          <ReCrmDemo />
        </Reveal>
      </Section>

      {/* SECTION 7 — LEAD QUALIFICATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Lead Qualification"
          title="Qualifying The Property Lead"
          intro="An illustrative qualification flow that prioritizes ready-to-move buyers."
          align="center"
        />
        <Reveal>
          <ReQualification />
        </Reveal>
      </Section>

      {/* SECTION 8 — PROPERTY MATCHING */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Property Matching"
          title="Recommended Property Match"
          intro="The system matches the qualified lead with a relevant property from the portfolio."
          align="center"
        />
        <Reveal>
          <RePropertyMatch />
        </Reveal>
      </Section>

      {/* SECTION 9 — AGENT NOTIFICATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Agent Notification"
          title="Notifying The Property Agent"
          intro="The assigned agent receives an instant notification with the lead's details."
          align="center"
        />
        <Reveal>
          <ReAgentNotification />
        </Reveal>
      </Section>

      {/* SECTION 10 — VIEWING CALENDAR */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Viewing Calendar"
          title="Calendar & Slot Selection"
          intro="Pick a day and slot to see how a booking updates the CRM pipeline to Viewing Booked."
          align="center"
        />
        <Reveal>
          <ReViewingCalendar />
        </Reveal>
      </Section>

      {/* SECTION 11 — VIEWING REMINDER */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Reminder Automation"
          title="The Viewing Reminder Timeline"
          intro="Messages sent automatically before the viewing to reduce no-shows."
          align="center"
        />
        <Reveal>
          <ReReminders />
        </Reveal>
      </Section>

      {/* SECTION 12 — POST-VIEWING FOLLOW-UP */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Post-Viewing Follow-Up"
          title="What Happens After The Viewing"
          intro="An automated sequence that thanks the buyer and offers the next step."
          align="center"
        />
        <Reveal>
          <RePostViewing />
        </Reveal>
      </Section>

      {/* SECTION 13 — REAL GOHIGHLEVEL PROOF */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Real Implementation"
          title="Real GoHighLevel Implementation"
          intro="Demo screenshots showing the CRM pipeline, workflow automation, lead capture and calendar structure."
          align="center"
        />
        <Reveal>
          <ReGhlProof />
        </Reveal>
      </Section>

      {/* SECTION 14 — COMPLETE SYSTEM WORKFLOW */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Workflow Visualization"
          title="The Complete Connected System"
          intro="Every stage — from property ad to follow-up — wired into one automated flow."
          align="center"
        />
        <Reveal>
          <ReWorkflowDiagram />
        </Reveal>
      </Section>

      {/* SECTION 15 — VIDEO DEMO */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Video Demo"
          title="Complete Real Estate Lead Automation Workflow"
          intro="Watch how a property enquiry moves from first contact to qualified lead and scheduled viewing."
          align="center"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <ReCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* SECTION 16 — SYSTEM BENEFITS */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="System Benefits"
          title="What This System Does For Real Estate"
          intro="Operational improvements — not guaranteed revenue claims."
          align="center"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {RE_BENEFITS.map((b) => (
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
        <SectionHeading eyebrow="Technology" title="What Powers This System" align="center" />
        <Stagger className="flex flex-wrap justify-center gap-3">
          {RE_TECH.map((t) => (
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
                Portfolio Demonstration
              </span>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Turn Property Enquiries Into Organized Opportunities.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Build a connected system for capturing, qualifying and following up with real estate
                leads.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <MagneticButton
                  href={waLinkWith(
                    "I'd like a real estate lead management & automation system for my business.",
                  )}
                  external
                >
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp Me
                </MagneticButton>
                <MagneticButton href={waLink} variant="ghost" external>
                  Discuss Your Project
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
