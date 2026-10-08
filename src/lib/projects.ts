// Reusable portfolio project data.
// To add a new project: append an object here and create a matching route is NOT needed —
// the dynamic /portfolio/$slug route renders any project from this list.
export type Project = {
  slug: string;
  num: string;
  title: string;
  industry: string;
  type: string;
  shortDesc: string;
  status: "Concept" | "Coming Soon" | "Live";
  image: string;
  // Richer concept-card fields
  problem?: string;
  system?: string;
  tools?: string[];
  // Case study sections — all optional so future real projects can fill them in.
  overview?: string;
  challenge?: string;
  strategy?: string;
  build?: string[];
  automation?: string[];
  journey?: string[];
  outcome?: string;
  isConcept: boolean;
};

export const PROJECTS: Project[] = [
  {
    slug: "dental-growth-system",
    num: "01",
    title: "Dental Growth System",
    industry: "Dental",
    type: "Growth System",
    shortDesc: "Lead capture, follow-up and booking automation for dental clinics.",
    status: "Concept",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/bef94ce1-d992-4d3e-a68b-4c52b07911d5.png",
    isConcept: true,
    problem: "Leads need faster follow-up and better organization across channels.",
    system: "Meta Ads → Landing Page → GHL → Automation → Appointment",
    tools: ["GoHighLevel", "Meta Ads", "AI Automation"],
    overview:
      "A connected system designed for dental clinics — capturing leads from Meta Ads, organizing them in a CRM pipeline, and automating follow-up toward appointment booking.",
    challenge:
      "Dental clinics often receive inquiries across multiple channels with no consistent follow-up, leading to missed appointments and lost patients.",
    strategy:
      "Connect Meta Ads to a conversion-focused landing page, route leads into a GoHighLevel pipeline, and automate follow-up reminders until an appointment is booked.",
    build: [
      "Meta Ads campaign",
      "Landing page",
      "Lead capture form",
      "GoHighLevel CRM",
      "Pipeline setup",
      "Follow-up automation",
    ],
    automation: [
      "New lead trigger",
      "Instant SMS follow-up",
      "Appointment reminder",
      "No-show reactivation",
    ],
    journey: [
      "Sees ad",
      "Visits landing page",
      "Submits inquiry",
      "Enters CRM",
      "Receives follow-up",
      "Books appointment",
      "Becomes patient",
    ],
    outcome:
      "Demonstration / Concept Project — a structured system ready to be implemented for a real dental clinic.",
  },
  {
    slug: "salon-lead-booking-system",
    num: "02",
    title: "Salon Lead & Booking System",
    industry: "Salon & Beauty",
    type: "Lead & Booking System",
    shortDesc: "Ad-to-appointment system for salons and beauty businesses.",
    status: "Concept",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/6451dd68-ccae-40ea-91fc-6fdd66711066.png",
    isConcept: true,
    problem: "Salons rely on walk-ins and manual booking with no follow-up on ad inquiries.",
    system: "Meta Ads → Offer Page → GHL → Booking Automation",
    tools: ["GoHighLevel", "Meta Ads", "Automation"],
    overview:
      "An ad-to-appointment system for salons and beauty businesses, capturing leads and guiding them to a booked service through automated follow-up.",
    challenge:
      "Salons rely on walk-ins and manual booking, with no system to follow up on inquiries from social media ads.",
    strategy:
      "Run targeted Meta Ads for services, capture leads into GoHighLevel, and automate booking reminders and confirmations.",
    build: [
      "Service-based Meta Ads",
      "Offer landing page",
      "Lead form",
      "CRM pipeline",
      "Booking automation",
    ],
    automation: [
      "Lead capture trigger",
      "Service recommendation",
      "Booking reminder",
      "Confirmation message",
    ],
    journey: [
      "Sees service ad",
      "Clicks to landing page",
      "Submits details",
      "Enters CRM",
      "Receives options",
      "Books service",
      "Becomes client",
    ],
    outcome:
      "Demonstration / Concept Project — a system architecture ready for a real salon or beauty business.",
  },
  {
    slug: "real-estate-lead-system",
    num: "03",
    title: "Real Estate Lead System",
    industry: "Real Estate",
    type: "Lead System",
    shortDesc: "Capture, qualify and nurture property inquiries through a pipeline.",
    status: "Concept",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/97a01009-48e4-4862-a5eb-0b1971275587.png",
    isConcept: true,
    problem: "Property inquiries arrive fast but are rarely followed up consistently.",
    system: "Meta Ads → Listing Page → GHL → Qualification → Nurture",
    tools: ["GoHighLevel", "Meta Ads", "AI Automation"],
    overview:
      "A lead system for real estate that captures property inquiries, qualifies them, and nurtures them through a pipeline until they're ready to transact.",
    challenge:
      "Property inquiries come in fast but are rarely followed up consistently, and qualification is manual and slow.",
    strategy:
      "Capture inquiries into a CRM, use automation to qualify by intent and budget, and nurture with relevant listings and follow-up.",
    build: [
      "Property Meta Ads",
      "Listing landing page",
      "Inquiry form",
      "CRM pipeline",
      "Qualification workflow",
    ],
    automation: [
      "Inquiry trigger",
      "Qualification questions",
      "Listing follow-up",
      "Agent notification",
    ],
    journey: [
      "Sees property ad",
      "Visits listing page",
      "Submits inquiry",
      "Enters CRM",
      "Qualified",
      "Nurtured",
      "Becomes buyer/seller",
    ],
    outcome:
      "Demonstration / Concept Project — a qualification and nurture system ready for a real estate business.",
  },
  {
    slug: "accounting-finance-lead-system",
    num: "04",
    title: "Accounting & Finance Lead System",
    industry: "Accounting & Finance",
    type: "Lead System",
    shortDesc: "Organized lead intake and follow-up for finance professionals.",
    status: "Concept",
    image:
      "https://vibe.filesafe.space/1790832248517648215/assets/e4931286-5ec9-4d75-920f-7c8253993c7a.png",
    isConcept: true,
    problem: "Scattered finance inquiries with no consistent, professional follow-up.",
    system: "Meta Ads → Consultation Page → GHL → Follow-Up → Consultation",
    tools: ["GoHighLevel", "Meta Ads", "Automation"],
    overview:
      "A lead intake and follow-up system for accounting and finance professionals, organizing inquiries and automating consistent communication.",
    challenge:
      "Finance professionals receive scattered inquiries with no consistent follow-up, losing potential clients to slower response times.",
    strategy:
      "Run service-based Meta Ads, capture leads into a CRM, and automate professional follow-up and consultation scheduling.",
    build: [
      "Service Meta Ads",
      "Consultation landing page",
      "Intake form",
      "CRM pipeline",
      "Follow-up automation",
    ],
    automation: [
      "Intake trigger",
      "Service follow-up",
      "Consultation reminder",
      "Onboarding handoff",
    ],
    journey: [
      "Sees service ad",
      "Visits landing page",
      "Submits inquiry",
      "Enters CRM",
      "Receives follow-up",
      "Schedules consultation",
      "Becomes client",
    ],
    outcome:
      "Demonstration / Concept Project — an intake and follow-up system ready for a finance practice.",
  },
];

export function getProject(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
