import { Section, SectionHeading } from "@/components/section";
import { Reveal } from "@/components/motion";
import { GhlCinematicDemo } from "@/components/ghl-cinematic-demo";
import { MetaCinematicDemo } from "@/components/meta-cinematic-demo";
import { JourneyCinematicDemo } from "@/components/journey-cinematic-demo";

/* DEMO VIDEOS — See The Systems In Action */
export function DemoVideosSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Demo Videos"
        title="See The Systems In Action"
        intro="Cinematic walkthroughs showing how GoHighLevel, Meta Ads and a connected lead journey actually work — from first click to customer."
        align="center"
      />
      <div className="mx-auto flex max-w-3xl flex-col gap-10">
        <Reveal>
          <div>
            <h3 className="mb-3 font-display text-lg font-bold text-foreground">
              GoHighLevel Automation Demo
            </h3>
            <GhlCinematicDemo />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div>
            <h3 className="mb-3 font-display text-lg font-bold text-foreground">
              Meta Ads Campaign Walkthrough
            </h3>
            <MetaCinematicDemo />
          </div>
        </Reveal>
        <Reveal delay={0.05}>
          <div>
            <h3 className="mb-3 font-display text-lg font-bold text-foreground">
              Lead Journey Demo
            </h3>
            <JourneyCinematicDemo />
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
