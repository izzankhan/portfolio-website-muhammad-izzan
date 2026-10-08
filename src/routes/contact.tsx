import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Clock, Globe, Facebook } from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { waLink } from "@/lib/wa";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Izzan Khan — Let's Build Your System" },
      {
        name: "description",
        content:
          "Contact Izzan Khan on WhatsApp to discuss your business, lead generation and automation requirements. No forms — just a direct conversation.",
      },
      { property: "og:title", content: "Contact | Izzan Khan" },
      {
        property: "og:description",
        content: "Let's discuss your lead generation and automation requirements on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-28">
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <Eyebrow>Contact</Eyebrow>
            <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
              Have a Project <span className="text-gradient">in Mind?</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              Let's discuss your business, lead generation and automation requirements. The fastest
              way to reach me is WhatsApp — no forms, just a direct conversation.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <MagneticButton href={waLink} external>
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </MagneticButton>
              <MagneticButton href={`mailto:${SITE.email}`} external variant="ghost">
                <Mail className="h-4 w-4" />
                Send an Email
              </MagneticButton>
              <MagneticButton href={SITE.social.facebook} external variant="ghost">
                <Facebook className="h-4 w-4" />
                Facebook
              </MagneticButton>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {[
                { icon: WhatsAppIcon, label: "WhatsApp", value: "Primary" },
                { icon: Mail, label: "Email", value: SITE.email },
                { icon: Clock, label: "Response", value: "Within a day" },
              ].map((c) => (
                <div key={c.label} className="rounded-2xl glass p-4">
                  <c.icon className="h-5 w-5 text-glow-blue" />
                  <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {c.label}
                  </p>
                  <p className="mt-1 text-sm font-medium text-foreground">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-glow-blue/20 via-glow-purple/15 to-transparent" />
              <div className="glass-strong relative flex flex-col items-center justify-center rounded-3xl p-10 text-center">
                <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
                <div className="relative">
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-primary text-primary-foreground shadow-[0_0_40px_-8px_var(--glow-blue)]"
                  >
                    <WhatsAppIcon className="h-9 w-9" />
                  </motion.div>
                  <h3 className="mt-6 font-display text-xl font-bold text-foreground">
                    Let's talk on WhatsApp
                  </h3>
                  <p className="mx-auto mt-2 max-w-xs text-sm leading-relaxed text-muted-foreground">
                    Tell me about your business and the system you need — I'll help you map it out.
                  </p>
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_-6px_var(--glow-blue)] transition-all hover:shadow-[0_0_32px_-4px_var(--glow-blue)]"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    Start Conversation
                  </a>
                  <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground">
                    <Globe className="h-3.5 w-3.5" />
                    Working with businesses worldwide
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}
