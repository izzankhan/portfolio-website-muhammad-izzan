import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/sections/hero";
import { QuickIntro, AboutPreview } from "@/components/sections/intro-about";
import {
  ServicesPreview,
  GhlSection,
  MetaAdsSection,
  WhyMatters,
  WhatICanBuild,
  ApproachDiff,
  IdealBusinesses,
  FinalValue,
} from "@/components/sections/home-sections";
import { SystemComparison } from "@/components/sections/system-comparison";
import { HowIWorkTimeline } from "@/components/sections/how-i-work";
import { TechStackSection } from "@/components/sections/tech-stack";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { DemoVideosSection } from "@/components/sections/demo-videos";
import {
  LeadJourneyExperience,
  BehindTheScenes,
} from "@/components/sections/lead-journey-experience";
import { FaqSection } from "@/components/sections/faq-section";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Izzan Khan | GoHighLevel Expert, Meta Ads & AI Automation" },
      { name: "description", content: SITE.description },
      {
        property: "og:title",
        content: "Izzan Khan | GoHighLevel Expert, Meta Ads & AI Automation",
      },
      { property: "og:description", content: SITE.description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HOOK → SYSTEM → SERVICES → GHL → META ADS → LEAD JOURNEY →
          BEHIND THE SCENES → PROBLEMS → SOLUTION → WHAT I CAN BUILD →
          PROJECTS → DEMO VIDEOS → ABOUT → TOOLS → WHY ME → INDUSTRIES →
          FAQ → CONTACT */}
      <Hero />
      <QuickIntro />
      <ServicesPreview />
      <GhlSection />
      <MetaAdsSection />
      {/* PRIMARY interactive system explanation */}
      <LeadJourneyExperience />
      <BehindTheScenes />
      <WhyMatters />
      <SystemComparison />
      <WhatICanBuild />
      <HowIWorkTimeline />
      <PortfolioPreview />
      <DemoVideosSection />
      <AboutPreview />
      <TechStackSection />
      <ApproachDiff />
      <IdealBusinesses />
      <FaqSection />
      <FinalValue />
    </>
  );
}
