import { Hero } from "@/components/sections/hero";
import { Enfoque } from "@/components/sections/enfoque";
import { Services } from "@/components/sections/services";
import { Trayectoria } from "@/components/sections/trayectoria";
import { About } from "@/components/sections/about";
import { Diagnostico } from "@/components/sections/diagnostico";
import { Contact } from "@/components/sections/contact";
import { SiteFooter } from "@/components/site-footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <main className="flex-1">
        <Hero />
        <Enfoque />
        <Services />
        <Trayectoria />
        <About />
        <Diagnostico />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
