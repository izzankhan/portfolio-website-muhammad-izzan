import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Home as HomeIcon } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { waLink, waLinkWith } from "@/lib/wa";
import { BADGES, PROBLEMS, BENEFITS, TECH } from "./dental-data";
import {
  DentalDashboardMock,
  JourneySection,
  CrmDemo,
  FormDemo,
  AiChat,
  BookingDemo,
  VideoDemo,
  WorkflowDiagram,
  RemindersTimeline,
} from "./dental-components";

/* Dental Clinic Automation Project — premium interactive demo page.
   Clearly labeled as Portfolio Demonstration / Demo.
   No fake client results, testimonials, revenue or ROI. */
export function DentalProjectPage() {
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
                Dental Lead Management & <span className="text-gradient">AI Automation System</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                From lead capture to appointment booking — an automated workflow designed for modern
                dental clinics.
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
            <DentalDashboardMock />
          </Reveal>
        </div>
      </Section>

      {/* SECTION 2 — THE PROBLEM */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="The Problem"
          title="Where Dental Clinics Lose Potential Patients"
          intro="Four common gaps that quietly cost clinics booked appointments every week."
          align="center"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {PROBLEMS.map((p) => (
            <StaggerItem key={p.title}>
              <div className="group h-full rounded-2xl glass p-6 transition-all hover:-translate-y-1 hover:glow-ring">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
                  <p.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* SECTION 3 — THE COMPLETE AUTOMATION JOURNEY */}
      <Section id="journey" className="!pt-0">
        <SectionHeading
          eyebrow="The Automation Journey"
          title="From Form Submission to Appointment"
          intro="Click any step to see what happens, why it matters, and which system handles it."
          align="center"
        />
        <Reveal>
          <JourneySection />
        </Reveal>
      </Section>

      {/* SECTION 4 — INTERACTIVE CRM DEMO */}
      <Section id="system" className="!pt-0">
        <SectionHeading
          eyebrow="GoHighLevel CRM"
          title="Interactive CRM Demo"
          intro="A fictional pipeline showing how a lead moves from new to completed. Click the lead to open the detail panel."
          align="center"
        />
        <Reveal>
          <CrmDemo />
        </Reveal>
      </Section>

      {/* SECTION 5 & 6 — FORM SUBMISSION + AUTOMATION SIMULATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Live Demo"
          title="Form Submission & Automation"
          intro="Submit the demo form and watch the lead move through the automated workflow in real time."
          align="center"
        />
        <Reveal>
          <FormDemo />
        </Reveal>
      </Section>

      {/* SECTION 7 — AI FOLLOW-UP DEMO */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="AI Follow-Up"
          title="AI Qualification Conversation"
          intro="An illustrative AI exchange that qualifies a patient and guides them toward booking."
          align="center"
        />
        <Reveal>
          <AiChat />
        </Reveal>
      </Section>

      {/* SECTION 8 — APPOINTMENT BOOKING */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Appointment Booking"
          title="Calendar & Slot Selection"
          intro="Pick a day and slot to see how a booking request updates the CRM pipeline."
          align="center"
        />
        <Reveal>
          <BookingDemo />
        </Reveal>
      </Section>

      {/* SECTION 9 — AUTOMATED REMINDERS */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Automated Reminders"
          title="The Reminder Timeline"
          intro="Messages sent automatically before the appointment to reduce no-shows."
          align="center"
        />
        <Reveal>
          <RemindersTimeline />
        </Reveal>
      </Section>

      {/* SECTION 10 — WORKFLOW VISUALIZATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Workflow Visualization"
          title="The Complete Connected System"
          intro="Every stage — from the ad to the dental clinic — wired into one automated flow."
          align="center"
        />
        <Reveal>
          <WorkflowDiagram />
        </Reveal>
      </Section>

      {/* SECTION 11 — VIDEO DEMO */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Video Demo"
          title="Watch the Complete Dental Automation Workflow"
          intro="See what happens after a potential patient submits an appointment request."
          align="center"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <VideoDemo />
          </div>
        </Reveal>
      </Section>

      {/* SECTION 12 — SYSTEM BENEFITS */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="System Benefits"
          title="What This System Does For A Clinic"
          intro="Operational improvements — not guaranteed revenue claims."
          align="center"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {BENEFITS.map((b) => (
            <StaggerItem key={b.title}>
              <div className="h-full rounded-2xl glass p-5 transition-all hover:-translate-y-1 hover:glow-ring">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow-gold/15 text-glow-gold">
                  <b.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-3 font-display text-sm font-bold text-foreground">{b.title}</h3>
                <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{b.detail}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* SECTION 13 — TECHNOLOGY */}
      <Section className="!pt-0">
        <SectionHeading eyebrow="Technology" title="What Powers This System" align="center" />
        <Stagger className="flex flex-wrap justify-center gap-3">
          {TECH.map((t) => (
            <StaggerItem key={t}>
              <div className="rounded-full border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground/90 transition-all hover:border-glow-gold/40 hover:bg-glow-gold/5 hover:text-glow-gold">
                {t}
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* SECTION 14 — FINAL CTA */}
      <Section className="!pt-0">
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Want a System Like This for Your Dental Clinic?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Let's build a streamlined lead capture and follow-up system for your clinic.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <MagneticButton
                  href={waLinkWith("I'd like a dental lead & automation system for my clinic.")}
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
