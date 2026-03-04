import { Code2, Users, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Learn & Build",
    description:
      "Hands-on workshops covering blockchain fundamentals, smart contract development, and integration with AI.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Connect with a diverse network of students, alumni, and industry professionals passionate about Web3.",
  },
  {
    icon: Rocket,
    title: "Opportunities",
    description:
      "Gain exclusive access to internships, hackathons, and career pathways in the evolving blockchain ecosystem.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-6 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.25em] text-primary">
            Who We Are
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-foreground">
            Building the Decentralised Future
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Auckland's premier student-led organisation dedicated to blockchain
            education and innovation.
          </p>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16">
          <div className="h-1 w-16 rounded-full bg-primary/30" />
        </div>

        {/* Two-column layout: features + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto items-center">
          {/* Features */}
          <div className="space-y-10">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="group flex gap-5">
                  <div className="shrink-0 inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-foreground tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {feature.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/images/GovDojo1.jpg"
                alt="WEB3UOA GovDojo event"
                className="w-full h-[400px] object-cover"
              />
            </div>
            {/* Decorative accent */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary/5 rounded-xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
