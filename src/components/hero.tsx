import { Button } from "@/components/ui/button";
import { Instagram, Linkedin, ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background event photo */}
      <div className="absolute inset-0">
        <img
          src="/images/Launchnight1.jpg"
          alt="WEB3UOA Launch Night"
          className="w-full h-full object-cover"
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
        {/* Subtle blue accent glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />
      </div>

      <div className="container relative z-10 px-4 pt-24 pb-16">
        <div className="flex flex-col items-center text-center space-y-10">
          {/* Logo */}
          <div className="animate-in fade-in zoom-in duration-700">
            <img
              src="/logo/Non-Sticker-Logo-version.png"
              alt="WEB3UOA Logo"
              className="w-28 h-28 md:w-36 md:h-36 drop-shadow-2xl"
            />
          </div>

          {/* Hero text */}
          <div className="space-y-6 max-w-4xl animate-in fade-in slide-in-from-bottom-4 duration-700 delay-150">
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight text-white leading-[1.05] drop-shadow-lg">
              WEB3UOA
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 font-medium tracking-wide">
              University of Auckland Web3 Club
            </p>
            <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Educating the next generation of blockchain innovators.
            </p>
            <span className="inline-block text-xs font-bold uppercase tracking-[0.3em] text-primary/80 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
              Proof of Learn
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <Button
              size="lg"
              className="text-base px-8 h-14 shadow-xl hover:shadow-2xl transition-all bg-primary hover:bg-primary/90 text-white font-bold rounded-full"
              asChild
            >
              <a
                href="https://forms.gle/vzRb7t46SPBUwi7v8"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join the Club
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base px-8 h-14 border-2 border-white/20 hover:bg-white/10 hover:border-white/40 transition-all font-semibold rounded-full bg-white/5 backdrop-blur-sm text-white"
              asChild
            >
              <a href="#about">Learn More</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-8 pt-6 animate-in fade-in duration-700 delay-500">
            <a
              href="https://instagram.com/web3uoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/web3uoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="X (Twitter)"
            >
              <svg
                className="w-6 h-6"
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
              className="text-white/50 hover:text-white transition-colors transform hover:scale-110 duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <a
          href="#about"
          className="text-white/40 hover:text-white/70 transition-colors"
        >
          <ArrowDown className="w-5 h-5" />
        </a>
      </div>
    </section>
  );
}
