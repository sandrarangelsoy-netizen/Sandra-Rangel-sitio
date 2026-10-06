import { Hero } from "@/components/sections/hero";
import { Enfoque } from "@/components/sections/enfoque";
import { Servicios } from "@/components/sections/servicios";
import { SobreMi } from "@/components/sections/sobre-mi";
import { Trayectoria } from "@/components/sections/trayectoria";
import { Reconocimientos } from "@/components/sections/reconocimientos";
import { Contacto } from "@/components/sections/contacto";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <Hero />
      <main>
        <Enfoque />
        <Servicios />
        <SobreMi />
        <Trayectoria />
        <Reconocimientos />
      </main>
      <Contacto />
    </div>
  );
}
