const events = [
  {
    src: "/images/Launchnight2.jpg",
    alt: "Launch Night event",
    label: "Launch Night",
  },
  {
    src: "/images/Launchnight3.jpg",
    alt: "Launch Night networking",
    label: "Launch Night",
  },
  {
    src: "/images/GovDojo1.jpg",
    alt: "GovDojo workshop",
    label: "GovDojo",
  },
  {
    src: "/images/Industrynight1.jpg",
    alt: "Industry Night",
    label: "Industry Night",
  },
  {
    src: "/images/Launchnight1.jpg",
    alt: "Launch Night presentation",
    label: "Launch Night",
  },
];

export function Events() {
  return (
    <section
      id="events"
      className="py-24 md:py-32 bg-foreground relative overflow-hidden"
    >
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary/70">
            Our Events
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Moments That Matter
          </h2>
          <p className="text-base md:text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            From launch nights to industry meetups, see what our community has
            been up to.
          </p>
        </div>

        <div className="flex justify-center mb-14">
          <div className="h-1 w-16 rounded-full bg-white/10" />
        </div>

        {/* Masonry-style photo grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
          {events.map((event, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl ${
                index === 0 ? "md:row-span-2 md:col-span-1" : ""
              }`}
            >
              <img
                src={event.src}
                alt={event.alt}
                className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
                  index === 0 ? "h-48 md:h-full" : "h-48 md:h-64"
                }`}
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white text-sm font-semibold">
                  {event.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
