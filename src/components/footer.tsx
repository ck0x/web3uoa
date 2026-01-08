import { Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto md:items-start">
          {/* Logo and description */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Copy%20of%20web3logo%201-KTCJNbwKQyjY0Edgsb7MGl3P6zOYOf.png"
                alt="WEB3UOA Logo"
                className="w-12 h-12"
              />
              <span className="text-2xl font-bold tracking-tight">WEB3UOA</span>
            </div>
            <p className="text-background/70 leading-relaxed max-w-sm font-light">
              Empowering the next generation of builders, shapers, and innovators at the University of Auckland.
            </p>
          </div>

          {/* Social and contact */}
          <div className="space-y-6 md:text-right">
            <h3 className="font-semibold text-lg tracking-wide">Connect With Us</h3>
            <div className="flex items-center gap-6 md:justify-end">
              <a
                href="https://instagram.com/web3uoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://x.com/web3uoa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-background/70 hover:text-primary transition-colors hover:scale-110 transform duration-200"
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
                className="text-background/70 hover:text-primary transition-colors hover:scale-110 transform duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
            <p className="text-background/70 font-light">
              <a
                href="mailto:team@web3uoa.nz"
                className="hover:text-primary transition-colors"
              >
                team@web3uoa.nz
              </a>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 text-center text-sm text-background/40 font-light">
          <p>© {new Date().getFullYear()} WEB3UOA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
