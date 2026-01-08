// Sponsors component for WEB3UOA

export function Sponsors() {
  return (
    <section className="py-32 bg-background border-t border-border">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground uppercase tracking-wider">
            Our Partners
          </h2>
          <div className="h-1.5 w-24 bg-primary mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto text-center py-20">
          <div className="flex flex-col items-center justify-center space-y-8">
            <p className="text-2xl md:text-3xl text-foreground font-semibold leading-tight">
              Collaborating with industry leaders driving the future of Web3.
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl font-medium">
              2026 Partners to be announced soon.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center bg-secondary/30 py-16 rounded-[2rem] max-w-4xl mx-auto border border-border/40 shadow-sm backdrop-blur-sm">
          <h3 className="text-3xl font-bold mb-4 text-foreground">Interested in partnering with us?</h3>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium leading-relaxed px-4">
            Support the next generation of blockchain talent at the University of Auckland. 
            Reach out to us at <span className="text-primary font-bold italic">team@web3uoa.nz</span> to discuss opportunities.
          </p>
        </div>
      </div>
    </section>
  );
}
