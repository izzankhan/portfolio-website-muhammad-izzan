import {
  Megaphone,
  Database,
  Cpu,
  Code2,
  Target,
  Users,
  Sparkles,
  GitBranch,
  LayoutTemplate,
  Bot,
  MessageSquare,
  Workflow,
} from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Stagger, StaggerItem } from "@/components/motion";

const GROUPS = [
  {
    label: "Marketing",
    icon: Megaphone,
    items: [
      { icon: Megaphone, label: "Meta Ads" },
      { icon: Target, label: "Lead Generation" },
    ],
  },
  {
    label: "CRM & Automation",
    icon: Database,
    items: [
      { icon: Database, label: "GoHighLevel" },
      { icon: Workflow, label: "Workflows" },
      { icon: GitBranch, label: "Pipelines" },
    ],
  },
  {
    label: "AI",
    icon: Cpu,
    items: [
      { icon: Cpu, label: "AI Automation" },
      { icon: Bot, label: "AI Agents" },
      { icon: MessageSquare, label: "AI Chatbots" },
    ],
  },
  {
    label: "Development",
    icon: Code2,
    items: [
      { icon: Code2, label: "JavaScript" },
      { icon: Sparkles, label: "React" },
      { icon: LayoutTemplate, label: "Landing Pages" },
    ],
  },
];

/* TECH STACK — grouped tools */
export function TechStackSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Tech Stack"
        title="Tools & Technologies"
        intro="Technologies I'm actively learning and using to build connected systems. Honest about where my focus is."
        align="center"
      />
      <Stagger className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((g) => (
          <StaggerItem key={g.label}>
            <div className="group h-full rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring">
              <div className="flex items-center gap-2.5">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-glow-blue/15 text-glow-blue transition-transform group-hover:scale-110">
                  <g.icon className="h-5 w-5" />
                </span>
                <h3 className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
                  {g.label}
                </h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it.label}
                    className="inline-flex items-center gap-1.5 rounded-full bg-secondary/60 px-3 py-1.5 text-xs font-medium text-foreground"
                  >
                    <it.icon className="h-3.5 w-3.5 text-glow-blue" />
                    {it.label}
                  </span>
                ))}
              </div>
            </div>
          </StaggerItem>
        ))}
      </Stagger>
    </Section>
  );
}
