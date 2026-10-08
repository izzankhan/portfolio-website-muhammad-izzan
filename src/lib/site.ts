// Central site configuration for Izzan Khan
export const SITE = {
  name: "Izzan Khan",
  role: "GoHighLevel Expert | Meta Ads | AI Automation",
  tagline: "I Build Systems That Turn Leads Into Customers.",
  description:
    "Izzan Khan provides GoHighLevel, Meta Ads, AI automation, CRM and lead generation systems for businesses.",
  avatar:
    "https://vibe.filesafe.space/1790832248517648215/attachments/57694cf7-a27e-4d6e-ba13-039c84df8055.jpg",
  email: "cruxoraintelligence@gmail.com",
  whatsappNumber: "923231034955",
  whatsappMessage: "Hi Izzan, I found your website and I'd like to discuss a project.",
  social: {
    linkedin: "https://www.linkedin.com/in/muhammad-izzan-34648a405",
    instagram: "https://instagram.com/izzankhan",
    twitter: "https://twitter.com/izzankhan",
    facebook: "https://www.facebook.com/share/1BLAfwXGhH/",
  },
} as const;

export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(
  SITE.whatsappMessage,
)}`;

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "How It Works", to: "/how-it-works" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Process", to: "/process" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;
