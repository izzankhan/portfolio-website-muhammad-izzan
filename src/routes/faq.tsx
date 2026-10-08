import { createFileRoute } from "@tanstack/react-router";
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

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ | Izzan Khan — GoHighLevel, Meta Ads & Automation" },
      {
        name: "description",
        content:
          "Frequently asked questions about GoHighLevel, Meta Ads, automation, lead generation systems and working with local businesses.",
      },
      { property: "og:title", content: "FAQ | Izzan Khan" },
      {
        property: "og:description",
        content: "FAQs about GoHighLevel, Meta Ads and automation systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: FaqPage,
});

const FAQS = [
  {
    q: "What is GoHighLevel?",
    a: "GoHighLevel is an all-in-one platform that combines CRM, pipelines, workflows, follow-up automation, landing pages and conversations into a single system — so leads are captured, organized and followed up in one place.",
  },
  {
    q: "How does GoHighLevel help businesses?",
    a: "It connects every part of the lead journey — capture, CRM, pipeline, follow-up and appointments — into one platform. Instead of leads scattered across tools, every lead has a clear, organized path from first contact to customer.",
  },
  {
    q: "What can you automate?",
    a: "The work that happens after the lead: instant follow-up, qualification, reminders, pipeline updates and team notifications. Automation reduces manual gaps and keeps the customer journey moving consistently.",
  },
  {
    q: "Do you run Meta Ads?",
    a: "Yes. I build Meta Ads campaigns from strategy to optimization — campaign structure, audience research, creative direction, lead generation and retargeting — connected directly to the CRM so leads flow into one system.",
  },
  {
    q: "Can you build landing pages?",
    a: "Yes. I build conversion-focused landing pages designed to turn ad attention into captured leads, then connect them straight into the CRM and automation workflow.",
  },
  {
    q: "Can you connect ads with CRM?",
    a: "Yes — that's the core of the system. Meta Ads generate the leads; GoHighLevel receives and manages them. Leads from ad campaigns flow into the CRM, where automation handles follow-up, pipeline movement and reminders.",
  },
  {
    q: "Can you build a complete lead-generation system?",
    a: "Yes. A complete system includes Meta Ads, a landing page, lead capture, a GoHighLevel CRM pipeline, automation and follow-up — all connected so every lead has a defined journey from click to customer.",
  },
  {
    q: "Are the projects on this website real client projects?",
    a: "These are concept and demonstration projects created to showcase how I design marketing and automation systems. Real client case studies will be added as projects are completed — without fabricated results.",
  },
  {
    q: "How can I contact you?",
    a: "The primary contact method is WhatsApp. Use any WhatsApp button on the site to start a conversation about your business, lead generation and automation requirements.",
  },
];

function FaqPage() {
  return (
    <div className="pt-28">
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
      </Section>

      <Section>
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Still have questions?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground sm:text-base">
                Reach out on WhatsApp and I'll be happy to answer.
              </p>
              <div className="mt-8 flex justify-center">
                <MagneticButton href={waLink} external>
                  <WhatsAppIcon className="h-4 w-4" />
                  Chat on WhatsApp
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
