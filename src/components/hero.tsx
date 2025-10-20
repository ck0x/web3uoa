import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Instagram, Linkedin } from "lucide-react";

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [blurAmount, setBlurAmount] = useState(3); // Start with 3px initial blur

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (!bgRef.current || !heroRef.current) return;

          const scrolled = window.scrollY;
          const parallaxSpeed = 0.5;

          const heroHeight = heroRef.current.offsetHeight;
          const scrollProgress = Math.min(scrolled / (heroHeight * 0.8), 1);
          const initialBlur = 3; // Initial blur amount in pixels
          const maxBlur = 20; // Maximum blur in pixels
          const calculatedBlur =
            initialBlur + scrollProgress * (maxBlur - initialBlur);

          setBlurAmount(calculatedBlur);
          bgRef.current.style.transform = `translate3d(0, ${
            scrolled * parallaxSpeed
          }px, 0)`;
          ticking = false;
        });
        ticking = true;
      }
    };

    // Set initial blur on mount
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ filter: `blur(${blurAmount}px)` }}
      >
        <img
          src="/web3-hero-bg.jpg"
          alt="Web3 Futuristic Cityscape"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/60 to-background" />
      </div>

      <div className="container relative z-10 px-4 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          <div>
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20web3logo%201-KTCJNbwKQyjY0Edgsb7MGl3P6zOYOf.png"
              alt="WEB3UOA Logo"
              className="w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56"
            />
          </div>

          {/* Hero text */}
          <div className="space-y-4 max-w-4xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance">
              WEB3UOA
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light">
              University of Auckland Web3 Club
            </p>
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Exploring the decentralised future through blockchain technology,
              smart contracts, and Web3 innovation
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="text-base px-8">
              Join the Club
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8 bg-transparent"
            >
              Learn More
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 pt-8">
            <a
              href="https://instagram.com/web3uoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/web3uoa"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
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
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-1.5 bg-muted-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
