import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading } from "@/components/section";
import { Stagger, StaggerItem, Reveal, TiltCard } from "@/components/motion";
import { PROJECTS } from "@/lib/projects";

/* PORTFOLIO PREVIEW — rich concept cards with Problem / System / Tools */
export function PortfolioPreview() {
  return (
    <Section id="portfolio">
      <SectionHeading
        eyebrow="Portfolio"
        title="Selected Work & Projects"
        intro="Concept projects structured as future case studies. Each is built to expand into a full project page."
        align="center"
      />
      <Stagger className="grid gap-5 sm:grid-cols-2">
        {PROJECTS.map((p) => (
          <StaggerItem key={p.slug}>
            <TiltCard className="group h-full">
              <Link
                to="/portfolio/$slug"
                params={{ slug: p.slug }}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-glow-blue">{p.num}</span>
                  <span className="gold-badge gold-badge-hover rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                    Concept Project
                  </span>
                </div>
                <div className="group/img relative mt-5 h-40 overflow-hidden rounded-xl border border-border bg-background/40">
                  <img
                    src={p.image}
                    alt={`${p.title} — ${p.industry} concept project`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <span className="gold-badge inline-block rounded-md px-2.5 py-0.5 font-display text-xs font-bold uppercase tracking-wider">
                      {p.industry}
                    </span>
                  </div>
                </div>
                <h3 className="mt-5 font-display text-lg font-bold text-foreground">{p.title}</h3>
                <p className="mt-1 text-xs font-medium text-glow-blue">{p.type}</p>
                {p.problem && (
                  <div className="mt-3 rounded-lg border border-border bg-background/40 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      Problem
                    </p>
                    <p className="mt-1 text-xs leading-relaxed text-foreground/80">{p.problem}</p>
                  </div>
                )}
                {p.system && (
                  <div className="mt-2.5 rounded-lg border border-border bg-background/40 p-3">
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                      System Designed
                    </p>
                    <p className="mt-1 font-mono text-[11px] leading-relaxed text-glow-blue">
                      {p.system}
                    </p>
                  </div>
                )}
                {p.tools && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {p.tools.map((t) => (
                      <span
                        key={t}
                        className="rounded-md bg-secondary/60 px-2 py-0.5 text-[10px] font-medium text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
                <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-glow-blue">
                  View Project
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </TiltCard>
          </StaggerItem>
        ))}
      </Stagger>
      <Reveal>
        <div className="mt-8 text-center">
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-glow-blue transition-colors hover:text-foreground"
          >
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
