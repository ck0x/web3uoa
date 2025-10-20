const sponsors = [
  {
    name: "Sponsor 1",
    logo: "/blockchain-company-logo.svg",
  },
  {
    name: "Sponsor 2",
    logo: "/crypto-company-logo.svg",
  },
  {
    name: "Sponsor 3",
    logo: "/web3-logo.svg",
  },
  {
    name: "Sponsor 4",
    logo: "/defi-company-logo.svg",
  },
  {
    name: "Sponsor 5",
    logo: "/abstract-nft-logo.svg",
  },
  {
    name: "Sponsor 6",
    logo: "/dao-company-logo.svg",
  },
];

export function Sponsors() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Sponsors
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Supported by industry leaders in blockchain and Web3
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="relative w-full h-20 flex items-center justify-center grayscale hover:grayscale-0 opacity-50 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="object-contain max-w-full h-auto"
                style={{ maxHeight: "80px", maxWidth: "200px" }}
              />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring?
          </p>
          <a
            href="mailto:contact@web3uoa.com"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
