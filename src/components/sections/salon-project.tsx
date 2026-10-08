import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Home as HomeIcon, AlertTriangle } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { waLink, waLinkWith } from "@/lib/wa";
import { SALON_BENEFITS, SALON_TECH } from "./salon-data";
import {
  SalonDashboardMock,
  SalonJourneySection,
  SalonLandingAndForm,
  SalonCrmDemo,
  SalonAiChat,
  SalonBookingDemo,
} from "./salon-components-a";
import {
  SalonProblems,
  SalonReminders,
  SalonDayDashboard,
  SalonPostVisit,
  SalonRebooking,
  SalonGhlProof,
  SalonWorkflowDiagram,
} from "./salon-components-b";
import { SalonCinematicDemo } from "@/components/salon-cinematic-demo";

const BADGES = ["GoHighLevel", "CRM", "Automation", "Appointment Booking"];

/* Salon & Beauty Automation Project — premium interactive demo page.
   Clearly labeled as Portfolio Demonstration / Demo.
   No fake client results, testimonials, revenue or ROI. */
export function SalonProjectPage() {
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
                Salon Lead & <span className="text-gradient">Appointment Automation System</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Turn salon enquiries into booked appointments with a connected lead management and
                follow-up system.
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
            <SalonDashboardMock />
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
              A fictional salon ("Luxe Beauty Studio") and customer ("Emma Wilson") are used to
              demonstrate the system. No fabricated results, reviews or client data are presented.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* SECTION 2 — THE SALON PROBLEM */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="The Problem"
          title="Where Salons Lose Potential Customers"
          intro="Five common gaps that quietly cost salons booked appointments every week."
          align="center"
        />
        <Reveal>
          <SalonProblems />
        </Reveal>
      </Section>

      {/* SECTION 3 — COMPLETE CUSTOMER JOURNEY */}
      <Section id="journey" className="!pt-0">
        <SectionHeading
          eyebrow="The Customer Journey"
          title="From First Enquiry to Repeat Customer"
          intro="Click any stage to see what happens, why it matters, and which system handles it."
          align="center"
        />
        <Reveal>
          <SalonJourneySection />
        </Reveal>
      </Section>

      {/* SECTION 4 & 5 — SALON LANDING PAGE + BOOKING FORM */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Landing Page & Booking"
          title="Service Selection & Booking Form"
          intro="A fictional salon landing page with an interactive booking form that simulates the automation."
          align="center"
        />
        <Reveal>
          <SalonLandingAndForm />
        </Reveal>
      </Section>

      {/* SECTION 6 — CRM DASHBOARD */}
      <Section id="system" className="!pt-0">
        <SectionHeading
          eyebrow="GoHighLevel CRM"
          title="Interactive CRM Demo"
          intro="A fictional pipeline showing how a salon lead moves from enquiry to rebook. Click the lead to open the detail panel."
          align="center"
        />
        <Reveal>
          <SalonCrmDemo />
        </Reveal>
      </Section>

      {/* SECTION 7 — AUTOMATED RESPONSE */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Automated Response"
          title="Instant Reply Conversation"
          intro="An illustrative automated exchange that responds to an enquiry and guides the customer toward booking."
          align="center"
        />
        <Reveal>
          <SalonAiChat />
        </Reveal>
      </Section>

      {/* SECTION 8 — APPOINTMENT CALENDAR */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Appointment Calendar"
          title="Calendar & Slot Selection"
          intro="Pick a day and slot to see how a booking updates the CRM pipeline to Booked."
          align="center"
        />
        <Reveal>
          <SalonBookingDemo />
        </Reveal>
      </Section>

      {/* SECTION 9 — REMINDER AUTOMATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Reminder Automation"
          title="The Reminder Timeline"
          intro="Messages sent automatically before the appointment to reduce no-shows."
          align="center"
        />
        <Reveal>
          <SalonReminders />
        </Reveal>
      </Section>

      {/* SECTION 10 — SALON DAY / APPOINTMENT DASHBOARD */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Today's Appointments"
          title="Salon Day Dashboard"
          intro="A fictional day of appointments. Click any card to view details."
          align="center"
        />
        <Reveal>
          <SalonDayDashboard />
        </Reveal>
      </Section>

      {/* SECTION 11 — POST-APPOINTMENT FOLLOW-UP */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Post-Visit Follow-Up"
          title="What Happens After The Visit"
          intro="An automated sequence that thanks the customer, requests feedback and sets up rebooking."
          align="center"
        />
        <Reveal>
          <SalonPostVisit />
        </Reveal>
      </Section>

      {/* SECTION 12 — CUSTOMER REBOOKING AUTOMATION */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Rebooking Automation"
          title="Bringing Customers Back"
          intro="A unique retention feature — when a customer hasn't booked again, the system follows up automatically."
          align="center"
        />
        <Reveal>
          <SalonRebooking />
        </Reveal>
      </Section>

      {/* SECTION 13 — REAL GOHIGHLEVEL PROOF */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Real Implementation"
          title="Real GoHighLevel Implementation"
          intro="Placeholder cards where actual screenshots from a GoHighLevel account can be uploaded later."
          align="center"
        />
        <Reveal>
          <SalonGhlProof />
        </Reveal>
      </Section>

      {/* SECTION 14 — COMPLETE SYSTEM WORKFLOW */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Workflow Visualization"
          title="The Complete Connected System"
          intro="Every stage — from social media to rebooking — wired into one automated flow."
          align="center"
        />
        <Reveal>
          <SalonWorkflowDiagram />
        </Reveal>
      </Section>

      {/* SECTION 15 — VIDEO DEMO */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="Video Demo"
          title="Complete Salon Automation Workflow"
          intro="Watch how a salon enquiry moves from first contact to booked appointment and rebooking."
          align="center"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <SalonCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* SECTION 16 — SYSTEM BENEFITS */}
      <Section className="!pt-0">
        <SectionHeading
          eyebrow="System Benefits"
          title="What This System Does For A Salon"
          intro="Operational improvements — not guaranteed revenue claims."
          align="center"
        />
        <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SALON_BENEFITS.map((b) => (
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
          {SALON_TECH.map((t) => (
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
                Turn More Salon Enquiries Into Appointments.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Build a connected system for capturing leads, managing bookings and following up
                with customers.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <MagneticButton
                  href={waLinkWith(
                    "I'd like a salon lead & booking automation system for my business.",
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
