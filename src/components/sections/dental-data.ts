import {
  Megaphone,
  LayoutTemplate,
  UserPlus,
  Database,
  Bell,
  CheckCircle2,
  Sparkles,
  CalendarCheck,
  Clock,
  MessageSquare,
  Mail,
  Workflow,
  Cpu,
  GitBranch,
  Zap,
  Eye,
  Activity,
  AlertTriangle,
  Play,
  Maximize2,
} from "lucide-react";

export const BADGES = ["GoHighLevel", "AI Automation", "Lead Management", "Appointment Automation"];

export const PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Missed enquiries",
    detail:
      "Messages arrive across Instagram, Facebook, calls and the website — but with no single system to catch them, enquiries get lost before anyone responds.",
  },
  {
    icon: Clock,
    title: "Slow lead response",
    detail:
      "The first few minutes decide whether a patient books. Manual, after-hours responses mean interested patients move on to the next clinic.",
  },
  {
    icon: MessageSquare,
    title: "Manual follow-ups",
    detail:
      "Following up relies on staff remembering to call back. When it doesn't happen, warm leads go cold and never return.",
  },
  {
    icon: CalendarCheck,
    title: "Unorganized appointments",
    detail:
      "Bookings live across DMs, sticky notes and calendars — so double-booking and no-shows happen with no reminder system to prevent them.",
  },
];

export const JOURNEY = [
  {
    icon: Megaphone,
    label: "Facebook / Instagram Ad",
    what: "A targeted Meta Ad reaches local people searching for dental services.",
    why: "Puts the clinic in front of the right audience at the moment of interest.",
    example: "Ad: 'Book your dental implant consultation — limited slots this month.'",
    system: "Meta Ads",
  },
  {
    icon: LayoutTemplate,
    label: "Dental Landing Page",
    what: "The click sends the visitor to a conversion-focused page with the offer, trust signals and a short form.",
    why: "Removes distractions so the visitor takes one clear action.",
    example: "Headline + treatment options + clinic trust badges + lead form.",
    system: "Landing Page",
  },
  {
    icon: UserPlus,
    label: "Lead Form Submitted",
    what: "The visitor fills name, phone, email and treatment needed, then submits.",
    why: "Captures the essential details in one structured step.",
    example: "Sarah Johnson · Dental Implant Consultation · (555) 010-2048",
    system: "Lead Form",
  },
  {
    icon: Database,
    label: "Lead Captured in CRM",
    what: "The submission instantly creates a contact inside the CRM pipeline.",
    why: "Nothing is lost to an inbox — every lead is stored and tracked.",
    example: "New contact created → assigned to 'New Lead' stage.",
    system: "GoHighLevel CRM",
  },
  {
    icon: Bell,
    label: "Instant Confirmation",
    what: "An automated confirmation message is sent to the patient within seconds.",
    why: "Fast response keeps the lead warm and reassures the patient.",
    example: "SMS: 'Thanks Sarah! We received your request — we'll be in touch shortly.'",
    system: "Automation · SMS",
  },
  {
    icon: Sparkles,
    label: "Lead Qualification",
    what: "AI asks a couple of qualifying questions to understand the patient's need.",
    why: "Routes the right leads to the right next step without manual sorting.",
    example: "AI: 'Would you like to request a consultation with the clinic?'",
    system: "AI Qualification",
  },
  {
    icon: Mail,
    label: "Automated Follow-Up",
    what: "If the patient hasn't booked, scheduled follow-up messages keep the conversation moving.",
    why: "Consistent follow-up recovers leads that would otherwise go cold.",
    example: "Follow-up #1 (Day 1) · Follow-up #2 (Day 3) · Call reminder (Day 5).",
    system: "Automation · Workflow",
  },
  {
    icon: CalendarCheck,
    label: "Appointment Booking",
    what: "The patient selects an available slot and the appointment is confirmed.",
    why: "Moves a qualified lead straight into a booked appointment.",
    example: "Oct 16 · 2:30 PM · Implant Consultation — Confirmed.",
    system: "Calendar",
  },
  {
    icon: Bell,
    label: "Reminder",
    what: "Automated reminders are sent 24 hours and 2 hours before the appointment.",
    why: "Reduces no-shows and keeps the patient ready for their visit.",
    example: "SMS: 'Reminder: your consultation is tomorrow at 2:30 PM.'",
    system: "Automation · Reminder",
  },
  {
    icon: GitBranch,
    label: "Pipeline Updated",
    what: "The lead's stage updates automatically from booked to confirmed to completed.",
    why: "The clinic always knows exactly where each patient stands.",
    example: "Stage: Appointment Booked → Confirmed → Completed.",
    system: "GoHighLevel CRM",
  },
];

export const PIPELINE_STAGES = [
  { key: "new", label: "New Lead", color: "var(--glow-gold)" },
  { key: "contacted", label: "Contacted", color: "var(--glow-gold-light)" },
  { key: "qualified", label: "Qualified", color: "var(--glow-amber)" },
  { key: "booked", label: "Appointment Booked", color: "var(--primary)" },
  { key: "confirmed", label: "Confirmed", color: "var(--glow-gold-light)" },
  { key: "completed", label: "Completed", color: "var(--glow-amber)" },
];

export const AUTO_STEPS = [
  { icon: UserPlus, label: "Form Submitted", tone: "var(--glow-gold)" },
  { icon: Database, label: "CRM Contact Created", tone: "var(--glow-gold-light)" },
  { icon: GitBranch, label: "Pipeline Updated", tone: "var(--glow-amber)" },
  { icon: Mail, label: "Instant Message Sent", tone: "var(--glow-gold)" },
  { icon: Sparkles, label: "Lead Qualified", tone: "var(--glow-gold-light)" },
  { icon: Bell, label: "Follow-Up Started", tone: "var(--glow-amber)" },
  { icon: CalendarCheck, label: "Appointment Requested", tone: "var(--glow-gold)" },
  { icon: CheckCircle2, label: "Appointment Confirmed", tone: "var(--glow-gold-light)" },
];

export const AI_CHAT = [
  {
    from: "patient",
    text: "I'm interested in dental implants. How much does a consultation cost?",
  },
  {
    from: "ai",
    text: "Thanks for reaching out! I can help you with the next step. Would you like to request a consultation with the dental clinic?",
  },
];

export const REMINDERS = [
  {
    time: "Appointment Booked",
    msg: "SMS: 'Your implant consultation is booked for Oct 16, 2:30 PM. Reply Y to confirm.'",
  },
  {
    time: "24 Hours Before",
    msg: "SMS: 'Reminder: your consultation is tomorrow at 2:30 PM. See you then!'",
  },
  {
    time: "2 Hours Before",
    msg: "SMS: 'Your consultation is in 2 hours. We're ready for you at the clinic.'",
  },
  { time: "Appointment Time", msg: "Pipeline stage → Confirmed → Completed." },
];

export const WORKFLOW_DIAGRAM = [
  { icon: Megaphone, label: "META AD" },
  { icon: LayoutTemplate, label: "LANDING PAGE" },
  { icon: UserPlus, label: "FORM" },
  { icon: Database, label: "CRM" },
  { icon: Cpu, label: "AI / AUTOMATION" },
  { icon: Mail, label: "FOLLOW-UP" },
  { icon: CalendarCheck, label: "CALENDAR" },
  { icon: CalendarCheck, label: "APPOINTMENT" },
  { icon: Bell, label: "REMINDER" },
  { icon: CheckCircle2, label: "DENTAL CLINIC" },
];

export const BENEFITS = [
  {
    icon: Zap,
    title: "Faster Lead Response",
    detail: "Instant confirmation the moment a request arrives.",
  },
  {
    icon: Workflow,
    title: "Automated Follow-Up",
    detail: "Scheduled messages keep every lead warm — no manual chase.",
  },
  {
    icon: Database,
    title: "Centralized CRM",
    detail: "Every patient and conversation in one organized pipeline.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Management",
    detail: "Booking, confirmation and reminders handled automatically.",
  },
  {
    icon: Eye,
    title: "Better Lead Visibility",
    detail: "Always know exactly where each patient stands.",
  },
];

export const TECH = [
  "GoHighLevel",
  "AI Automation",
  "CRM",
  "Landing Pages",
  "Forms",
  "Calendar",
  "Workflow Automation",
  "Meta Ads",
];

export const VIDEO_ICONS = { Play, Maximize2, Activity };
