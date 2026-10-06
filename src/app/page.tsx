import { Hero } from "@/components/sections/hero";
import { StatsBar } from "@/components/sections/stats-bar";
import { ProblemSolution } from "@/components/sections/problem-solution";
import { Services } from "@/components/sections/services";
import { Pillars } from "@/components/sections/pillars";
import { Diagnostico } from "@/components/sections/diagnostico";
import { About } from "@/components/sections/about";
import { CredibilityBanner } from "@/components/sections/credibility-banner";
import { CtaBand } from "@/components/sections/cta-band";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <ProblemSolution />
        <Services />
        <Pillars />
        <Diagnostico />
        <About />
        <CredibilityBanner />
        <CtaBand />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
