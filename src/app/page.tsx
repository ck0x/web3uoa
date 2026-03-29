import { Hero } from "@/components/hero";
import { EnsClaim } from "@/components/ens-claim";
import { About } from "@/components/about";
import { Events } from "@/components/events";
import { Sponsors } from "@/components/sponsors";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="py-12 bg-secondary/30">
        <EnsClaim />
      </div>
      <About />
      <Events />
      <Sponsors />
    </main>
  );
}
