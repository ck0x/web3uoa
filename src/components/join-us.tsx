import { Code2, Users, Rocket } from "lucide-react";
import { JoinUsForm } from "./join-us-form";

export function JoinUs() {
  return (
    <section
      id="join-us"
      className="py-24 md:py-32 bg-background border-t border-border/50"
    >
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 space-y-4 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            / Join Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Join our Web3 Club
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A student-led club at the University of Auckland for anyone
            interested in blockchain, AI, and the wider Web3 space. Sign up to
            learn, connect, and stay updated on events.
            <br />
            <br />
            Bitcoin runs on Proof of Work. We run on Proof of Learn ✅
          </p>
        </div>

        {/* Sign up grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <JoinUsForm />
        </div>
      </div>
    </section>
  );
}
