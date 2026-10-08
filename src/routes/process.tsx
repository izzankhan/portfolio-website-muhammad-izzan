import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Search,
  Map,
  PenTool,
  Hammer,
  Plug,
  FlaskConical,
  Rocket,
  Gauge,
  ArrowRight,
} from "lucide-react";
import { WhatsAppIcon } from "@/components/whatsapp-icon";
import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { MagneticButton } from "@/components/magnetic-button";
import { waLink } from "@/lib/wa";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process | Izzan Khan — From Discovery to Optimization" },
      {
        name: "description",
        content:
          "My detailed workflow: Discovery, Strategy, Design, Build, Integration, Testing, Launch and Optimization.",
      },
      { property: "og:title", content: "Process | Izzan Khan" },
      { property: "og:description", content: "A detailed process from discovery to optimization." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProcessPage,
});

const PHASES = [
  { icon: Search, label: "Discovery", desc: "Understand the business, audience and goals." },
  { icon: Map, label: "Strategy", desc: "Define the lead journey and system architecture." },
  { icon: PenTool, label: "Design", desc: "Design landing pages, funnels and workflows." },
  { icon: Hammer, label: "Build", desc: "Build the funnel, CRM and automation components." },
  { icon: Plug, label: "Integration", desc: "Connect Meta Ads, CRM and automation together." },
  { icon: FlaskConical, label: "Testing", desc: "Test the full journey end to end." },
  { icon: Rocket, label: "Launch", desc: "Launch campaigns and activate the system." },
  { icon: Gauge, label: "Optimization", desc: "Track, refine and optimize performance." },
];

function ProcessPage() {
  return (
    <div className="pt-28">
      <Section>
        <SectionHeading
          eyebrow="My Workflow"
          title={
            <>
              My <span className="text-gradient">Process</span>
            </>
          }
          intro="A detailed eight-phase workflow that takes a project from discovery to ongoing optimization."
          align="center"
        />

        <Reveal>
          <div className="relative mx-auto max-w-4xl">
            {/* animated progress line */}
            <div className="absolute left-6 top-0 h-full w-px bg-border lg:left-1/2" />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.4, ease: "easeInOut" }}
              className="absolute left-6 top-0 h-full w-px origin-top bg-gradient-to-b from-glow-blue via-glow-purple to-glow-blue lg:left-1/2"
            />
            <div className="flex flex-col gap-10">
              {PHASES.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className={`relative flex items-start gap-5 pl-16 lg:pl-0 ${i % 2 === 0 ? "lg:flex-row lg:pl-0" : "lg:flex-row-reverse"}`}
                >
                  <div className="absolute left-0 flex h-12 w-12 items-center justify-center rounded-xl glass-strong text-glow-blue lg:left-1/2 lg:-translate-x-1/2">
                    <p.icon className="h-5 w-5" />
                  </div>
                  <div
                    className={`glass rounded-2xl p-5 lg:w-[calc(50%-3rem)] ${i % 2 === 0 ? "lg:ml-auto" : "lg:mr-auto"}`}
                  >
                    <span className="font-mono text-xs text-glow-blue">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-foreground">
                      {p.label}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>

      <Section>
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <h2 className="mx-auto max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                Let's map a process for your business.
              </h2>
              <div className="mt-8 flex justify-center">
                <MagneticButton href={waLink} external>
                  <WhatsAppIcon className="h-4 w-4" />
                  Start on WhatsApp
                  <ArrowRight className="h-4 w-4" />
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
