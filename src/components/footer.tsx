import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo/Non-Sticker-Logo-version.png"
                alt="WEB3UOA"
                className="w-10 h-10"
              />
              <span className="text-xl font-bold tracking-tight">WEB3UOA</span>
            </div>
            <p className="text-background/60 leading-relaxed text-sm max-w-xs">
              Empowering the next generation of builders, shapers, and
              innovators at the University of Auckland.
            </p>
          </div>

          {/* Quick links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-background/40">
              Navigate
            </h3>
            <div className="flex flex-col gap-2.5">
              <a
                href="#about"
                className="text-sm text-background/60 hover:text-white transition-colors w-fit"
              >
                About
              </a>
              <a
                href="#events"
                className="text-sm text-background/60 hover:text-white transition-colors w-fit"
              >
                Events
              </a>
              <a
                href="#partners"
                className="text-sm text-background/60 hover:text-white transition-colors w-fit"
              >
                Partners
              </a>
              <a
                href="https://forms.gle/vzRb7t46SPBUwi7v8"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-background/60 hover:text-white transition-colors w-fit"
              >
                Join the Club
              </a>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h3 className="font-semibold text-sm uppercase tracking-wider text-background/40">
              Connect
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com/web3uoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/50 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://x.com/web3uoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/50 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="X (Twitter)"
              >
                <svg
                  className="w-5 h-5"
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
                className="text-background/50 hover:text-white transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
            <a
              href="mailto:team@web3uoa.nz"
              className="text-sm text-background/60 hover:text-white transition-colors block w-fit"
            >
              team@web3uoa.nz
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-background/30">
          <p>&copy; {new Date().getFullYear()} WEB3UOA. All rights reserved.</p>
          <p>University of Auckland Web3 Club</p>
        </div>
      </div>
    </footer>
  );
}
