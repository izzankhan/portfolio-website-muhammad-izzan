import {
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Database,
  Cpu,
  Mail,
  CalendarCheck,
  CheckCircle2,
} from "lucide-react";

export type Stage = {
  num: string;
  title: string;
  icon: typeof Megaphone;
  short: string;
  what: string;
  why: string;
  build: string;
};

export const STAGES: Stage[] = [
  {
    num: "01",
    title: "META ADS",
    icon: Megaphone,
    short: "Reach the right audience with targeted advertising.",
    what: "A targeted Meta Ad is shown to the right audience based on interests, location and behavior.",
    why: "Attention is the first input. Without it, the rest of the system has nothing to work with.",
    build: "Audience research, campaign structure, creative and retargeting.",
  },
  {
    num: "02",
    title: "LANDING PAGE",
    icon: LayoutTemplate,
    short: "Turn attention into action with a focused landing experience.",
    what: "The ad click sends the visitor to a conversion-focused landing page with a clear offer, trust and CTA.",
    why: "A focused page converts attention into intent far better than a generic homepage.",
    build: "Offer, trust signals and a single clear call-to-action.",
  },
  {
    num: "03",
    title: "LEAD CAPTURE",
    icon: UserPlus,
    short: "Capture important lead information automatically.",
    what: "The visitor submits a form — name, email, interest — and becomes a captured lead.",
    why: "A captured lead is an asset. A click that leaves no data is lost.",
    build: "Smart forms with the fields that matter, connected straight to the CRM.",
  },
  {
    num: "04",
    title: "GOHIGHLEVEL CRM",
    icon: Database,
    short: "Organize leads and track every stage of the customer journey.",
    what: "The lead is instantly created as a contact and enters the pipeline at the New Lead stage.",
    why: "One organized home for every lead means nothing slips through the cracks.",
    build: "Contacts, pipelines, custom fields and stage tracking.",
  },
  {
    num: "05",
    title: "AI QUALIFICATION",
    icon: Cpu,
    short: "Use AI to qualify and route leads before they reach the next stage.",
    what: "An AI assistant engages the lead, asks qualifying questions and tags the lead's readiness.",
    why: "Qualifying before follow-up means the team only spends time on the right conversations.",
    build: "AI conversation flows, scoring and automatic routing.",
  },
  {
    num: "06",
    title: "AUTOMATED FOLLOW-UP",
    icon: Mail,
    short: "Keep leads engaged without relying entirely on manual follow-up.",
    what: "Workflows trigger SMS, email and WhatsApp follow-ups automatically, on a defined schedule.",
    why: "Consistent, timely follow-up is what keeps a lead moving — automation makes it reliable.",
    build: "Multi-channel follow-up sequences with waits and conditions.",
  },
  {
    num: "07",
    title: "APPOINTMENT",
    icon: CalendarCheck,
    short: "Move qualified leads toward the next action.",
    what: "A qualified lead books an available time slot and the consultation is confirmed.",
    why: "An appointment is the bridge between interest and a customer.",
    build: "Calendar links, reminders and confirmation automations.",
  },
  {
    num: "08",
    title: "CUSTOMER",
    icon: CheckCircle2,
    short: "The connected journey turns a click into a customer.",
    what: "The lead arrives at the end of the journey — captured, organized, qualified and followed up.",
    why: "A connected system is what makes this repeatable instead of accidental.",
    build: "The full system working together — not a single tool in isolation.",
  },
];

export const STEP_MS = 2600;
