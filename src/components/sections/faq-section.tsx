import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { waLink } from "@/lib/wa";

const FAQS = [
  {
    q: "What can you build in GoHighLevel?",
    a: "CRM setup, pipelines, workflows, automated follow-up, appointment journeys, landing pages and conversations — all organized in one platform so every lead has a clear path.",
  },
  {
    q: "Can you build a complete lead-to-booking system?",
    a: "Yes. A complete system connects Meta Ads, a landing page, lead capture, a GoHighLevel CRM pipeline, automation and follow-up — so a lead moves from first click to booked appointment without manual gaps.",
  },
  {
    q: "Can you work with an existing GoHighLevel account?",
    a: "Yes. I can audit, restructure and build on an existing account — fixing pipelines, workflows and follow-up, or extending it with new automation and lead capture.",
  },
  {
    q: "Can Meta Ads be connected with GoHighLevel?",
    a: "Yes — that's the core of the system. Meta Ads generate the leads; GoHighLevel receives and manages them. Leads flow from ad campaigns into the CRM, where automation handles follow-up and pipeline movement.",
  },
  {
    q: "What type of businesses do you work with?",
    a: "Lead-based local businesses — dental clinics, salons, real estate, accounting and finance, and other service businesses that need a clear lead journey from ad to customer.",
  },
  {
    q: "How can I get started?",
    a: "Send a message on WhatsApp. Tell me about your business, your current lead flow and what you'd like to improve, and I'll outline how a connected system would work for you.",
  },
];

export function FaqSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="FAQ"
        title={
          <>
            Frequently Asked <span className="text-gradient">Questions</span>
          </>
        }
        intro="Common questions about GoHighLevel, Meta Ads, automation and how the system works."
        align="center"
      />
      <Reveal>
        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="overflow-hidden rounded-2xl glass px-5 data-[state=open]:glow-ring"
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Reveal>
      <Reveal delay={0.1}>
        <div className="mt-8 flex justify-center">
          <MagneticButton href={waLink} external>
            <WhatsAppIcon className="h-4 w-4" />
            Ask on WhatsApp
          </MagneticButton>
        </div>
      </Reveal>
    </Section>
  );
}
