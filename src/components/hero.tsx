import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
      {/* Abstract professional background element - kept subtle but present to avoid barrenness */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-secondary/80 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-12">
          <div className="animate-in fade-in zoom-in duration-500 bg-white/50 p-8 rounded-full backdrop-blur-sm border border-white/20 shadow-sm">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20web3logo%201-KTCJNbwKQyjY0Edgsb7MGl3P6zOYOf.png"
              alt="WEB3UOA Logo"
              className="w-36 h-36 md:w-48 md:h-48"
            />
          </div>

          {/* Hero text */}
          <div className="space-y-8 max-w-5xl">
            <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-foreground leading-tight drop-shadow-sm">
              WEB3UOA
            </h1>
            <p className="text-2xl md:text-4xl text-primary font-semibold tracking-wide">
              University of Auckland Web3 Club
            </p>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              Educating the next generation of blockchain innovators.
              <br />
              <span className="text-base font-bold uppercase tracking-[0.25em] mt-4 block text-foreground/70">
                Proof of Learn
              </span>
            </p>
          </div>

          {/* CTA Buttons - Bigger */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="text-lg px-10 h-16 shadow-xl hover:shadow-2xl transition-all bg-primary hover:bg-primary/90 text-white font-bold rounded-full" asChild>
              <a
                href="https://forms.gle/vzRb7t46SPBUwi7v8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Club
              </a>
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-10 h-16 border-2 border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all font-semibold rounded-full bg-white/80 backdrop-blur-sm shadow-sm" asChild>
              <a href="#about">
                Learn More
              </a>
            </Button>
          </div>

          {/* Social Links - Bigger */}
          <div className="flex items-center gap-10 pt-10">
            <a
              href="https://instagram.com/web3uoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-9 h-9" />
            </a>
            <a
              href="https://x.com/web3uoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-9 h-9"
                viewBox="0 0 24 24"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/web3uoa-university-of-auckland-web3-club/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-9 h-9" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
