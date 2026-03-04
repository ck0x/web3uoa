import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

export function Sponsors() {
  return (
    <section id="partners" className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 space-y-4 max-w-2xl mx-auto text-center">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            03 / Partners
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Our Sponsors
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Collaborating with industry leaders to drive the future of Web3.
          </p>
        </div>

        {/* Coming soon placeholder */}
        <div className="max-w-2xl mx-auto w-full">
          <div className="flex flex-col items-center justify-center py-16 px-4 bg-secondary rounded-3xl border border-border/50">
            <div className="w-16 h-16 rounded-2xl bg-background flex items-center justify-center text-muted-foreground mb-6 shadow-sm border border-border">
              <Handshake className="w-8 h-8" />
            </div>
            <p className="text-2xl font-bold text-foreground mb-2">
              2026 Partners
            </p>
            <p className="text-muted-foreground mb-8 text-center max-w-sm">
              We are finalizing our partnerships for the year. Check back soon.
            </p>
            <Button size="lg" className="rounded-xl font-bold" asChild>
              <a href="mailto:team@web3uoa.nz">Become a Partner</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
