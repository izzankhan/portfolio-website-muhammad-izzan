import { Layers, Network, X, CheckCircle2 } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Stagger, StaggerItem } from "@/components/motion";

const DISCONNECTED = [
  "Leads land in scattered inboxes and spreadsheets",
  "Follow-up depends on someone remembering to do it",
  "Ad data and CRM data live in separate places",
  "No clear view of where each lead stands",
  "Manual work repeats at every stage",
];

const CONNECTED = [
  "Every lead captured into one organized CRM",
  "Automated follow-up runs on every new lead",
  "Ad campaigns feed straight into the pipeline",
  "A clear pipeline shows each lead's stage",
  "Workflows handle the repetitive work",
];

export function SystemComparison() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Disconnected vs Connected"
        title="The Difference One System Makes"
        intro="Two ways to run the same lead — scattered tools, or one connected system where every step hands off to the next."
        align="center"
      />
      <Stagger className="mx-auto grid max-w-5xl gap-5 lg:grid-cols-2">
        {/* Disconnected */}
        <StaggerItem>
          <div className="flex h-full flex-col rounded-2xl border border-red-500/20 bg-red-500/[0.03] p-7">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-500/15 text-red-400">
                <Layers className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  Disconnected Tools
                </h3>
                <p className="text-xs text-muted-foreground">Scattered marketing stack</p>
              </div>
            </div>
            <ul className="mt-6 flex flex-col gap-3.5">
              {DISCONNECTED.map((d) => (
                <li key={d} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                    <X className="h-3 w-3" />
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
        {/* Connected */}
        <StaggerItem>
          <div className="relative flex h-full flex-col overflow-hidden rounded-2xl glass-strong p-7">
            <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-glow-blue/15 blur-3xl" />
            <div className="relative flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue">
                <Network className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-foreground">Connected System</h3>
                <p className="text-xs text-muted-foreground">One integrated workflow</p>
              </div>
            </div>
            <ul className="relative mt-6 flex flex-col gap-3.5">
              {CONNECTED.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-foreground/90">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-glow-blue/20 text-glow-blue">
                    <CheckCircle2 className="h-3 w-3" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </StaggerItem>
      </Stagger>
    </Section>
  );
}
