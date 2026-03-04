import { Button } from "@/components/ui/button";
import { Handshake } from "lucide-react";

export function Sponsors() {
  return (
    <section id="partners" className="py-24 md:py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Partnerships
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Our Partners
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Collaborating with industry leaders driving the future of Web3.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <div className="h-1 w-16 rounded-full bg-primary/30" />
        </div>

        {/* Coming soon placeholder */}
        <div className="max-w-3xl mx-auto text-center py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-8">
            <Handshake className="w-8 h-8" />
          </div>
          <p className="text-xl md:text-2xl text-foreground font-semibold mb-3">
            2026 Partners
          </p>
          <p className="text-muted-foreground">To be announced soon.</p>
        </div>

        {/* CTA Card */}
        <div className="mt-8 max-w-3xl mx-auto">
          <div className="relative rounded-2xl bg-background border border-border/60 shadow-lg p-10 md:p-14 text-center overflow-hidden">
            {/* Accent glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground relative z-10">
              Interested in partnering with us?
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8 relative z-10">
              Support the next generation of blockchain talent at the University
              of Auckland.
            </p>
            <Button
              className="rounded-full px-8 h-12 font-semibold shadow-md"
              asChild
            >
              <a href="mailto:team@web3uoa.nz">Get in Touch</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
