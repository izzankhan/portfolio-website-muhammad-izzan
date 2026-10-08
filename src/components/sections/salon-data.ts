import {
  Smartphone,
  MousePointerClick,
  LayoutTemplate,
  ClipboardList,
  Database,
  MessageSquare,
  CalendarCheck,
  Bell,
  Store,
  Repeat,
  Scissors,
  Palette,
  Sparkles,
  Hand,
  Footprints,
  Heart,
  UserPlus,
  Workflow,
  Send,
  CheckCircle2,
  Clock,
} from "lucide-react";

/* Salon journey — 10 stages */
export const SALON_JOURNEY = [
  {
    label: "Social Media / Ad",
    icon: Smartphone,
    what: "A potential customer sees a salon ad on Instagram or Facebook.",
    why: "Social is where most salon discovery happens — capturing that attention is step one.",
    example: "Ad: 'Book your next hair coloring at Luxe Beauty Studio.'",
    system: "Meta Ads",
  },
  {
    label: "Salon Landing Page",
    icon: LayoutTemplate,
    what: "The click takes them to a premium landing page with services and a clear CTA.",
    why: "A focused page converts attention into action better than a generic profile link.",
    example: "Headline: 'Feel Your Best. Book Your Next Appointment.'",
    system: "Landing Page",
  },
  {
    label: "Service Selection",
    icon: Scissors,
    what: "The customer browses services and selects the one they want.",
    why: "Letting them self-select reduces friction and captures intent early.",
    example: "Selected: Hair Coloring",
    system: "Landing Page",
  },
  {
    label: "Booking Form",
    icon: ClipboardList,
    what: "The customer fills a short booking form with contact and preference details.",
    why: "Structured capture means the lead is organized the moment it arrives.",
    example: "Name: Emma Wilson · Service: Hair Coloring · Wed 2:00 PM",
    system: "Form",
  },
  {
    label: "CRM",
    icon: Database,
    what: "The submission creates a contact and drops the lead into the CRM pipeline.",
    why: "Every enquiry is stored in one place instead of lost in DMs.",
    example: "New contact created → pipeline stage: New Enquiry",
    system: "GoHighLevel CRM",
  },
  {
    label: "Automated Response",
    icon: MessageSquare,
    what: "An instant reply acknowledges the request and offers available times.",
    why: "Speed of response is the single biggest factor in converting an enquiry.",
    example: "'Thanks for contacting Luxe Beauty Studio. Choose your time.'",
    system: "Automation",
  },
  {
    label: "Appointment",
    icon: CalendarCheck,
    what: "The customer picks a slot and the appointment is confirmed.",
    why: "Self-serve booking removes back-and-forth and locks in the visit.",
    example: "Confirmed: Wednesday, 2:00 PM — Hair Coloring",
    system: "Calendar",
  },
  {
    label: "Reminder",
    icon: Bell,
    what: "Automated reminders go out 24h and 2h before the appointment.",
    why: "Reminders reduce no-shows and keep the customer informed.",
    example: "'Reminder: your hair coloring is tomorrow at 2:00 PM.'",
    system: "Automation",
  },
  {
    label: "Salon Visit",
    icon: Store,
    what: "The customer arrives for their appointment and the visit is completed.",
    why: "A completed visit is the moment a lead becomes a customer.",
    example: "Status: Completed → pipeline stage: Completed",
    system: "CRM",
  },
  {
    label: "Rebooking",
    icon: Repeat,
    what: "After a gap, an automated follow-up invites the customer to book again.",
    why: "Rebooking automation turns one-time visits into returning clients.",
    example: "'Hi Emma, it's been a while. Would you like to book your next visit?'",
    system: "Automation",
  },
];

/* Salon services */
export const SALON_SERVICES = [
  { name: "Hair Styling", desc: "Cut, blow-dry & finish.", icon: Scissors },
  { name: "Hair Coloring", desc: "Color, highlights & gloss.", icon: Palette },
  { name: "Facial", desc: "Cleanse, exfoliate & glow.", icon: Sparkles },
  { name: "Manicure", desc: "Shape, buff & polish.", icon: Hand },
  { name: "Pedicure", desc: "Soak, scrub & relax.", icon: Footprints },
  { name: "Bridal Makeup", desc: "Full bridal look.", icon: Heart },
];

/* CRM pipeline */
export const SALON_PIPELINE = [
  { key: "new", label: "New Enquiry", color: "var(--glow-gold)" },
  { key: "contacted", label: "Contacted", color: "var(--glow-gold-light)" },
  { key: "selected", label: "Service Selected", color: "var(--glow-amber)" },
  { key: "requested", label: "Booking Requested", color: "var(--glow-gold)" },
  { key: "booked", label: "Booked", color: "var(--glow-gold-light)" },
  { key: "completed", label: "Completed", color: "var(--glow-amber)" },
  { key: "rebook", label: "Rebook", color: "var(--glow-gold)" },
];

/* Automation steps after form submit */
export const SALON_AUTO_STEPS = [
  { icon: UserPlus, label: "CRM Contact Created", tone: "var(--glow-gold)" },
  { icon: Workflow, label: "Pipeline Updated", tone: "var(--glow-gold-light)" },
  { icon: Send, label: "Instant Message Sent", tone: "var(--glow-amber)" },
  { icon: CheckCircle2, label: "Lead Qualified", tone: "var(--glow-gold)" },
  { icon: CalendarCheck, label: "Appointment Requested", tone: "var(--glow-gold-light)" },
  { icon: Bell, label: "Appointment Confirmed", tone: "var(--glow-amber)" },
];

/* AI chat */
export const SALON_AI_CHAT = [
  { from: "customer", text: "Hi, I want to book a hair coloring appointment." },
  {
    from: "ai",
    text: "Thanks for contacting Luxe Beauty Studio. We'd be happy to help. Please choose your preferred appointment time.",
  },
];

/* Reminders */
export const SALON_REMINDERS = [
  {
    icon: CalendarCheck,
    label: "Booking Confirmed",
    msg: "Your hair coloring is booked for Wednesday, 2:00 PM.",
  },
  {
    icon: Clock,
    label: "24 Hours Before",
    msg: "Hi Emma, this is a reminder that your hair coloring appointment is tomorrow at 2:00 PM.",
  },
  {
    icon: Bell,
    label: "2 Hours Before",
    msg: "Your appointment at Luxe Beauty Studio is coming up today at 2:00 PM.",
  },
  { icon: Store, label: "Appointment Time", msg: "Pipeline stage → Completed." },
];

/* Today's appointments */
export const SALON_TODAY = [
  { time: "10:00 AM", service: "Haircut", name: "Olivia", status: "Completed" },
  { time: "11:30 AM", service: "Facial", name: "Sophia", status: "Completed" },
  { time: "2:00 PM", service: "Hair Coloring", name: "Emma", status: "Confirmed" },
  { time: "4:00 PM", service: "Manicure", name: "Mia", status: "Upcoming" },
];

/* Post-appointment follow-up */
export const SALON_POST_VISIT = [
  { icon: CheckCircle2, label: "Appointment Completed", msg: "Emma's visit marked complete." },
  {
    icon: Send,
    label: "Thank You Message",
    msg: "Thanks for visiting Luxe Beauty Studio, Emma. We hope you enjoyed your appointment.",
  },
  { icon: MessageSquare, label: "Feedback Request", msg: "We'd love to hear how your visit went." },
  { icon: Clock, label: "Future Follow-Up", msg: "Scheduled for 4 weeks after the visit." },
  { icon: Repeat, label: "Rebooking", msg: "Rebooking follow-up triggered." },
];

/* Complete system workflow */
export const SALON_SYSTEM_FLOW = [
  { icon: Smartphone, label: "Social Media" },
  { icon: LayoutTemplate, label: "Landing Page" },
  { icon: Scissors, label: "Service Selection" },
  { icon: ClipboardList, label: "Form" },
  { icon: Database, label: "CRM" },
  { icon: MessageSquare, label: "Automated Response" },
  { icon: CalendarCheck, label: "Calendar" },
  { icon: CalendarCheck, label: "Appointment" },
  { icon: Bell, label: "Reminder" },
  { icon: Store, label: "Salon Visit" },
  { icon: Repeat, label: "Rebooking" },
];

/* Benefits */
export const SALON_BENEFITS = [
  {
    icon: Send,
    title: "Faster Lead Response",
    desc: "Instant replies to enquiries instead of missed DMs.",
  },
  {
    icon: Workflow,
    title: "Automated Follow-Up",
    desc: "Consistent follow-up without manual chasing.",
  },
  {
    icon: Database,
    title: "Centralized CRM",
    desc: "Every lead and customer in one organized pipeline.",
  },
  {
    icon: CalendarCheck,
    title: "Online Appointment Booking",
    desc: "Self-serve booking that removes back-and-forth.",
  },
  { icon: Bell, title: "Appointment Reminders", desc: "Automated reminders to reduce no-shows." },
  { icon: Repeat, title: "Customer Rebooking", desc: "Automated rebooking to bring clients back." },
];

/* Technology */
export const SALON_TECH = [
  "GoHighLevel",
  "CRM",
  "Forms",
  "Calendar",
  "Workflow Automation",
  "AI Automation",
  "Landing Pages",
  "Meta Ads",
];

/* Problems */
export const SALON_PROBLEMS = [
  {
    icon: Smartphone,
    title: "Missed Instagram Enquiries",
    desc: "Potential customers message while staff are busy. A delayed response can mean a lost booking opportunity.",
  },
  {
    icon: Clock,
    title: "Slow Responses",
    desc: "Without automation, replies depend on someone being available — and most enquiries go cold fast.",
  },
  {
    icon: ClipboardList,
    title: "Manual Booking",
    desc: "Back-and-forth over DMs and calls to find a slot wastes time for both the salon and the customer.",
  },
  {
    icon: Bell,
    title: "Appointment No-Shows",
    desc: "With no reminder system, customers forget appointments and the salon loses the slot.",
  },
  {
    icon: Repeat,
    title: "Customers Don't Rebook",
    desc: "Without a follow-up, happy customers drift to other salons instead of returning.",
  },
];
