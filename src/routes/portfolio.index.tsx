import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Section, SectionHeading, Eyebrow } from "@/components/section";
import { Reveal } from "@/components/motion";
import { GhlCinematicDemo } from "@/components/ghl-cinematic-demo";
import { MetaCinematicDemo } from "@/components/meta-cinematic-demo";
import { JourneyCinematicDemo } from "@/components/journey-cinematic-demo";
import { PROJECTS } from "@/lib/projects";

// Industry filter keys derived from project data.
const INDUSTRIES = [
  "All",
  "Dental",
  "Salon & Beauty",
  "Real Estate",
  "Accounting & Finance",
] as const;
type Industry = (typeof INDUSTRIES)[number];

export const Route = createFileRoute("/portfolio/")({
  head: () => ({
    meta: [
      { title: "Portfolio | Izzan Khan — Selected Work & Projects" },
      {
        name: "description",
        content:
          "Selected work and concept projects from Izzan Khan — structured as future case studies across dental, salon, real estate and accounting industries.",
      },
      { property: "og:title", content: "Portfolio | Izzan Khan" },
      {
        property: "og:description",
        content: "Selected work & concept projects, structured as future case studies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PortfolioPage,
});

function PortfolioPage() {
  const [active, setActive] = useState<Industry>("All");

  const filtered = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.industry === active)),
    [active],
  );

  return (
    <div className="pt-28">
      <Section>
        <SectionHeading
          eyebrow="Portfolio"
          title={
            <>
              Selected Work & <span className="text-gradient">Projects</span>
            </>
          }
          intro="Concept projects structured as future case studies. Each opens a dedicated project page with the full system architecture. No fabricated client results."
          align="center"
        />

        {/* Industry filter bar */}
        <Reveal>
          <div className="mb-8 flex flex-wrap items-center justify-center gap-2.5">
            {INDUSTRIES.map((ind) => {
              const isActive = active === ind;
              const count =
                ind === "All" ? PROJECTS.length : PROJECTS.filter((p) => p.industry === ind).length;
              return (
                <button
                  key={ind}
                  onClick={() => setActive(ind)}
                  aria-pressed={isActive}
                  className={`group relative inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-all duration-200 sm:text-sm ${
                    isActive
                      ? "border-glow-blue/60 bg-glow-blue/15 text-foreground glow-ring"
                      : "border-border bg-card/40 text-muted-foreground hover:border-glow-blue/40 hover:text-foreground"
                  }`}
                >
                  <span>{ind}</span>
                  <span
                    className={`inline-flex h-5 min-w-5 items-center justify-center rounded-full px-1.5 text-[10px] font-bold ${
                      isActive
                        ? "bg-glow-blue text-primary-foreground"
                        : "bg-secondary text-muted-foreground"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Filterable project grid */}
        <motion.div layout className="grid gap-5 sm:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.slug}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  to="/portfolio/$slug"
                  params={{ slug: p.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring"
                >
                  <div className="flex items-start justify-between">
                    <span className="font-mono text-sm text-glow-blue">{p.num}</span>
                    <span className="gold-badge gold-badge-hover rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider">
                      {p.status}
                    </span>
                  </div>
                  <div className="group/img relative mt-5 h-44 overflow-hidden rounded-xl border border-border bg-background/40">
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
                      <span className="mt-1.5 block text-[11px] text-muted-foreground">
                        {p.type}
                      </span>
                    </div>
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{p.title}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {p.shortDesc}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-glow-blue">
                    View Project
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state when an industry has no projects yet */}
        {filtered.length === 0 && (
          <Reveal>
            <div className="flex flex-col items-center justify-center rounded-2xl glass px-6 py-16 text-center">
              <Sparkles className="h-6 w-6 text-glow-purple" />
              <p className="mt-4 text-sm font-medium text-foreground">
                No projects in this industry yet.
              </p>
              <p className="mt-1.5 max-w-sm text-xs leading-relaxed text-muted-foreground">
                Real-world case studies for this industry will be added here as projects are
                completed. Try another filter or view all projects.
              </p>
              <button
                onClick={() => setActive("All")}
                className="mt-5 inline-flex items-center gap-1.5 rounded-full border border-glow-blue/40 bg-glow-blue/10 px-4 py-2 text-xs font-semibold text-glow-blue transition-colors hover:bg-glow-blue/20"
              >
                Show all projects
              </button>
            </div>
          </Reveal>
        )}
      </Section>

      {/* Cinematic GoHighLevel demo */}
      <Section>
        <SectionHeading
          eyebrow="Featured Demo"
          title="GoHighLevel Automation Demo"
          intro="A cinematic 9-scene walkthrough showing a complete lead-to-appointment journey — from a new lead entering the CRM to an automated follow-up and booked appointment."
          align="center"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <GhlCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* Cinematic Meta Ads demo */}
      <Section>
        <SectionHeading
          eyebrow="Featured Demo"
          title="Meta Ads Campaign Walkthrough"
          intro="An 11-scene cinematic walkthrough — from campaign objective and audience to a captured lead entering the CRM and the optimization loop."
          align="center"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <MetaCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* Cinematic Lead Journey demo */}
      <Section>
        <SectionHeading
          eyebrow="Featured Demo"
          title="Lead Journey Demo"
          intro="A 10-scene cinematic walkthrough — following a potential customer from seeing an ad to becoming a qualified customer through a connected system."
          align="center"
        />
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <JourneyCinematicDemo />
          </div>
        </Reveal>
      </Section>

      {/* Future case studies */}
      <Section>
        <Reveal>
          <div className="glass-strong relative overflow-hidden rounded-3xl px-6 py-14 text-center sm:px-12">
            <div className="pointer-events-none absolute inset-0 page-glow opacity-40" />
            <div className="relative">
              <Eyebrow>Expanding Portfolio</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-2xl font-display text-2xl font-bold text-foreground sm:text-3xl">
                New real-world projects & case studies coming soon.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
                As real projects are completed, full case studies with outcomes will be added here —
                without fabricated results or testimonials.
              </p>
              <div className="mt-6 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs font-medium text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5 text-glow-purple" />
                  Portfolio expanding over time
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
