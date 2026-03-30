import Image from "next/image";

import { Button } from "@/components/ui/button";

const sponsorTiers = [
  {
    tier: "Gold Sponsors",
    sponsors: [
      {
        name: "FireEyes",
        logo: "/logo/fe black_logo.svg",
        logoWidth: 220,
        logoHeight: 90,
      },
    ],
  },
  {
    tier: "Silver Sponsors",
    sponsors: [
      {
        name: "Avalanche",
        logo: "/logo/avalanche_logo.svg",
        logoWidth: 220,
        logoHeight: 90,
      },
    ],
  },
  {
    tier: "Supported by",
    sponsors: [
      {
        name: "Ethereum Foundation",
        logo: "/logo/ethereum_foundation_dev_accel_logo.png",
        logoWidth: 300,
        logoHeight: 110,
      },
    ],
  },
] as const;

export function Sponsors() {
  return (
    <section
      id="partners"
      className="py-24 md:py-32 bg-background border-t border-border/50"
    >
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
            Collaborating with industry leaders to drive the future of Web3 in
            New Zealand.
          </p>
        </div>

        <div className="space-y-16 max-w-5xl mx-auto pt-8">
          {sponsorTiers.map((tier) => (
            <div key={tier.tier} className="flex flex-col items-center">
              <h3 className="text-xs md:text-sm font-bold uppercase tracking-[0.18em] text-muted-foreground mb-10 text-center text-primary/80">
                {tier.tier}
              </h3>
              <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 w-full">
                {tier.sponsors.map((sponsor) => (
                  <div
                    key={sponsor.name}
                    className="flex items-center justify-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 relative group"
                  >
                    {/* Optional subtle glow on hover for the "floating" feeling */}
                    <div className="absolute inset-0 bg-primary/5 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Image
                      src={sponsor.logo}
                      alt={`${sponsor.name} logo`}
                      width={sponsor.logoWidth}
                      height={sponsor.logoHeight}
                      className="h-auto w-auto max-h-24 md:max-h-28 object-contain relative z-10 drop-shadow-sm"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="flex justify-center pt-4">
            <Button size="lg" className="rounded-xl font-bold" asChild>
              <a href="mailto:team@web3uoa.nz">Become a Partner</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
