import {
  Megaphone,
  LayoutTemplate,
  ClipboardList,
  Database,
  Sparkles,
  CalendarDays,
  Clock,
  Repeat,
  UserPlus,
  CheckCircle2,
  Bell,
  Mail,
  Phone,
  Building2,
  Briefcase,
  Calculator,
  FileText,
  Users,
  AlertTriangle,
  Clock as ClockIcon,
  UserX,
  ListChecks,
  Settings,
} from "lucide-react";

export const ACC_PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Missed Consultation Enquiries",
    desc: "Enquiries arrive via the website, ads and referrals with no single place to capture them.",
  },
  {
    icon: ClockIcon,
    title: "Slow Response to New Prospects",
    desc: "A delayed reply to a finance enquiry often pushes the prospect to another firm.",
  },
  {
    icon: UserX,
    title: "Manual Follow-Ups",
    desc: "Following up manually across many prospects is inconsistent and easy to forget.",
  },
  {
    icon: Database,
    title: "Disorganized Lead Management",
    desc: "Without a pipeline, it's unclear where each prospect is in the journey.",
  },
  {
    icon: ListChecks,
    title: "Complicated Client Onboarding",
    desc: "Moving a prospect from consultation to onboarding involves many manual steps.",
  },
];

export const ACC_JOURNEY = [
  {
    icon: Megaphone,
    label: "Website / Ad",
    what: "A targeted Meta Ad or website link promotes the firm's accounting services.",
    why: "Reaches business owners actively looking for accounting or advisory support.",
    action: "Ad shown to business owners searching for accounting services.",
  },
  {
    icon: LayoutTemplate,
    label: "Consultation Form",
    what: "The prospect lands on a consultation page and fills out an enquiry form.",
    why: "A focused page converts attention into a structured enquiry.",
    action: "Prospect views the consultation page and details.",
  },
  {
    icon: ClipboardList,
    label: "Lead Capture",
    what: "The form submission captures name, company, service and contact details.",
    why: "Structured capture collects the details needed to qualify the lead.",
    action: "Form submitted → Lead Created.",
  },
  {
    icon: Database,
    label: "CRM",
    what: "The enquiry is captured and organized inside the CRM automatically.",
    why: "Every prospect is stored in one place with full context.",
    action: "New contact created in the client pipeline.",
  },
  {
    icon: Sparkles,
    label: "Lead Qualification",
    what: "Structured questions qualify the lead by service, business type and size.",
    why: "Prioritizes ready-to-engage prospects and saves advisor time.",
    action: "Lead marked Qualified Lead — Demo.",
  },
  {
    icon: CalendarDays,
    label: "Consultation Booking",
    what: "The prospect selects an available consultation slot from the calendar.",
    why: "Frictionless booking increases the chance a consultation happens.",
    action: "Consultation confirmed — Wednesday 2:00 PM.",
  },
  {
    icon: Repeat,
    label: "Automated Follow-up",
    what: "Automated follow-ups keep the prospect engaged before and after the consultation.",
    why: "Keeps the conversation moving toward onboarding.",
    action: "Follow-up sequence scheduled automatically.",
  },
  {
    icon: UserPlus,
    label: "Client Onboarding",
    what: "After the consultation, the prospect moves into a structured onboarding flow.",
    why: "A clear process moves new clients from consultation to active client.",
    action: "Onboarding checklist started.",
  },
];

export const ACC_PIPELINE = [
  "New Enquiry",
  "Contacted",
  "Qualified",
  "Consultation Booked",
  "Proposal / Next Step",
  "Onboarding",
  "Active Client",
];

export const ACC_QUALIFICATION = [
  { q: "Service required?", a: "Business Accounting & Advisory" },
  { q: "Business type?", a: "Limited Company" },
  { q: "Estimated business size?", a: "Small / Medium" },
  { q: "Consultation requirement?", a: "Yes — book a consultation" },
  { q: "Preferred contact method?", a: "Email + Phone" },
];

export const ACC_FOLLOWUP = [
  {
    icon: Bell,
    label: "Immediately",
    msg: "Hi James, thanks for contacting Miller Consulting Ltd. We've received your consultation request. A member of our team will be in touch shortly.",
  },
  {
    icon: Mail,
    label: "After 1 Day",
    msg: "Hi James, following up on your consultation request. Would you like to choose an available time?",
  },
  {
    icon: Clock,
    label: "After 3 Days",
    msg: "Hi James, a reminder about your accounting consultation. Pick a time that suits you.",
  },
  {
    icon: Repeat,
    label: "After 7 Days",
    msg: "Hi James, a final follow-up to help you book your consultation with Miller Consulting Ltd.",
  },
];

export const ACC_ONBOARDING = [
  { label: "Consultation completed", done: true },
  { label: "Service confirmed", done: true },
  { label: "Agreement requested", done: true },
  { label: "Required information requested", done: true },
  { label: "Onboarding started", done: true },
  { label: "Final setup", done: false },
];

export const ACC_SYSTEM_FLOW = [
  { icon: Megaphone, label: "Website / Ad" },
  { icon: LayoutTemplate, label: "Consultation Form" },
  { icon: ClipboardList, label: "Lead Captured" },
  { icon: Database, label: "CRM Contact" },
  { icon: Sparkles, label: "Lead Qualified" },
  { icon: Bell, label: "Automated Response" },
  { icon: CalendarDays, label: "Consultation Booked" },
  { icon: Clock, label: "Reminder Automation" },
  { icon: CheckCircle2, label: "Consultation Completed" },
  { icon: UserPlus, label: "Client Onboarding" },
  { icon: Briefcase, label: "Active Client" },
];

export const ACC_BENEFITS = [
  {
    icon: Clock,
    title: "Faster Lead Response",
    desc: "Respond to new enquiries quickly, before interest cools.",
  },
  {
    icon: Database,
    title: "Organized CRM",
    desc: "Keep prospects and clients structured in one pipeline.",
  },
  {
    icon: Repeat,
    title: "Automated Follow-Ups",
    desc: "Reduce manual follow-up work across many prospects.",
  },
  {
    icon: CalendarDays,
    title: "Easy Consultation Booking",
    desc: "Allow prospects to schedule consultations themselves.",
  },
  {
    icon: UserPlus,
    title: "Better Onboarding",
    desc: "Move new clients through a clear, structured process.",
  },
  {
    icon: Briefcase,
    title: "Centralized Client Journey",
    desc: "Manage the journey from enquiry to onboarding in one system.",
  },
];

export const ACC_TECH = [
  "GoHighLevel",
  "CRM",
  "Forms",
  "Landing Pages",
  "Workflow Automation",
  "Calendar",
  "AI Automation",
  "Meta Ads",
];

export const ACC_SERVICES = [
  { icon: Calculator, label: "Business Accounting" },
  { icon: FileText, label: "Bookkeeping" },
  { icon: Briefcase, label: "Tax Support" },
  { icon: Building2, label: "Financial Advisory" },
  { icon: Users, label: "Business Consultation" },
];
