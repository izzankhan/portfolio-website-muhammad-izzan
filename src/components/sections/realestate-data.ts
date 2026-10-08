import {
  Megaphone,
  LayoutTemplate,
  ClipboardList,
  Database,
  Sparkles,
  Home,
  Bell,
  CalendarDays,
  Clock,
  Repeat,
  MessageSquare,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
  PoundSterling,
  BedDouble,
  Bath,
  Car,
  Trees,
  AlertTriangle,
  Clock as ClockIcon,
  UserX,
  CalendarX,
  CalendarCheck,
} from "lucide-react";

export const RE_PROBLEMS = [
  {
    icon: AlertTriangle,
    title: "Missed Property Enquiries",
    desc: "Enquiries arrive across portals, social and calls with no single place to capture them.",
  },
  {
    icon: ClockIcon,
    title: "Slow Lead Response",
    desc: "Buyers expect a quick reply — a delayed response often means a lost opportunity.",
  },
  {
    icon: UserX,
    title: "Unqualified Leads",
    desc: "Without structured questions, agents waste time on leads that aren't ready to move.",
  },
  {
    icon: Mail,
    title: "Manual Follow-Ups",
    desc: "Following up manually is inconsistent and easy to forget across many prospects.",
  },
  {
    icon: CalendarX,
    title: "Missed Viewing Opportunities",
    desc: "Without reminders and easy booking, scheduled viewings get missed or forgotten.",
  },
];

export const RE_JOURNEY = [
  {
    icon: Megaphone,
    label: "Property Ad",
    what: "A targeted Meta Ad promotes a listing to buyers searching in the area.",
    why: "Reaches the right audience at the moment they're actively looking.",
    action: "Ad shown to buyers interested in Manchester family homes.",
  },
  {
    icon: LayoutTemplate,
    label: "Property Landing Page",
    what: "The ad links to a focused property landing page with photos and details.",
    why: "A dedicated page converts attention into an enquiry better than a generic site.",
    action: "Buyer views the 3-bedroom home details and gallery.",
  },
  {
    icon: ClipboardList,
    label: "Enquiry Form",
    what: "The buyer submits an enquiry with location, type, budget and timeline.",
    why: "Structured capture collects the details needed to qualify the lead.",
    action: "Form submitted → Lead Created.",
  },
  {
    icon: Database,
    label: "CRM",
    what: "The enquiry is captured and organized inside the CRM automatically.",
    why: "Every lead is stored in one place with full context.",
    action: "New contact created in the property pipeline.",
  },
  {
    icon: Sparkles,
    label: "Lead Qualification",
    what: "Structured questions qualify the lead by intent, budget and timeline.",
    why: "Prioritizes ready-to-move buyers and saves agent time.",
    action: "Lead marked High Priority — Demo.",
  },
  {
    icon: Home,
    label: "Property Match",
    what: "The system matches the lead with a relevant property from the portfolio.",
    why: "Connects the right buyer to the right property faster.",
    action: "Recommended match: Modern 3-Bedroom Family Home.",
  },
  {
    icon: Bell,
    label: "Agent Notification",
    what: "The assigned agent receives an instant notification with the lead's details.",
    why: "Agents can respond while the lead is still warm.",
    action: "Notification sent to the property agent.",
  },
  {
    icon: CalendarDays,
    label: "Viewing Booking",
    what: "The buyer selects an available viewing slot from the calendar.",
    why: "Frictionless booking increases the chance a viewing actually happens.",
    action: "Viewing confirmed — Wednesday 1:30 PM.",
  },
  {
    icon: Clock,
    label: "Reminder",
    what: "Automated reminders are sent 24 hours and 2 hours before the viewing.",
    why: "Reduces no-shows and keeps the buyer engaged.",
    action: "SMS + email reminders scheduled.",
  },
  {
    icon: Repeat,
    label: "Follow-Up",
    what: "After the viewing, an automated follow-up checks on next steps.",
    why: "Keeps the conversation moving toward an offer.",
    action: "Post-viewing message sent automatically.",
  },
];

export const RE_PIPELINE = [
  "New Lead",
  "Contacted",
  "Qualified",
  "Property Matched",
  "Viewing Requested",
  "Viewing Booked",
  "Viewing Completed",
  "Follow-Up",
];

export const RE_PROPERTY_FEATURES = [
  { icon: BedDouble, label: "3 Beds" },
  { icon: Bath, label: "2 Baths" },
  { icon: Trees, label: "Garden" },
  { icon: Car, label: "Parking" },
];

export const RE_QUALIFICATION = [
  { q: "Are you buying or renting?", a: "Buying" },
  { q: "Preferred location?", a: "Manchester" },
  { q: "Property type?", a: "3-Bedroom Home" },
  { q: "Budget?", a: "£450,000" },
  { q: "When are you looking to move?", a: "Next 2 months" },
];

export const RE_REMINDERS = [
  {
    icon: CalendarCheck,
    label: "Viewing Booked",
    msg: "Viewing confirmed for Wednesday at 1:30 PM.",
  },
  {
    icon: Clock,
    label: "24 Hours Before",
    msg: "Hi Daniel, this is a reminder about your property viewing tomorrow at 1:30 PM.",
  },
  {
    icon: Clock,
    label: "2 Hours Before",
    msg: "Your property viewing is coming up today at 1:30 PM.",
  },
  {
    icon: Home,
    label: "Viewing",
    msg: "Property viewing — Modern 3-Bedroom Family Home, Manchester.",
  },
];

export const RE_SYSTEM_FLOW = [
  { icon: Megaphone, label: "Property Ad" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: ClipboardList, label: "Enquiry Form" },
  { icon: Database, label: "CRM" },
  { icon: Sparkles, label: "Qualification" },
  { icon: Home, label: "Property Match" },
  { icon: Bell, label: "Agent" },
  { icon: CalendarDays, label: "Viewing" },
  { icon: Clock, label: "Reminder" },
  { icon: Repeat, label: "Follow-Up" },
];

export const RE_BENEFITS = [
  {
    icon: Clock,
    title: "Faster Lead Response",
    desc: "Enquiries are captured and acknowledged instantly, before interest cools.",
  },
  {
    icon: Sparkles,
    title: "Lead Qualification",
    desc: "Structured questions identify ready-to-move buyers and prioritize them.",
  },
  {
    icon: Home,
    title: "Property Matching",
    desc: "Connect the right buyer to the right property from the portfolio.",
  },
  {
    icon: Database,
    title: "Organized CRM",
    desc: "Every lead and viewing tracked in one pipeline with full context.",
  },
  {
    icon: CalendarDays,
    title: "Viewing Scheduling",
    desc: "Buyers book viewings themselves with an easy online calendar.",
  },
  {
    icon: Repeat,
    title: "Automated Follow-Up",
    desc: "Reminders and post-viewing messages keep the journey moving.",
  },
];

export const RE_TECH = [
  "GoHighLevel",
  "CRM",
  "Forms",
  "Landing Pages",
  "Workflow Automation",
  "Calendar",
  "AI Automation",
  "Meta Ads",
];
