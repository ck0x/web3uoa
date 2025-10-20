export function Sponsors() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Sponsors
          </h2>
        </div>

        <div className="max-w-3xl mx-auto text-center py-12">
          <div className="bg-card border border-border rounded-xl p-8 md:p-12">
            <p className="text-xl md:text-2xl text-muted-foreground mb-6">
              We're currently finalising partnerships for 2026
            </p>
            <p className="text-base text-muted-foreground/80">
              Exciting collaborations with industry leaders in blockchain and
              Web3 are coming soon!
            </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Interested in sponsoring?
          </p>
          <a
            href="mailto:team@web3uoa.nz"
            className="text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>
    </section>
  );
}
