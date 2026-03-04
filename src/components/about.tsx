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
    <section id="about" className="py-24 md:py-32 bg-background border-t border-border/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <div className="mb-16 space-y-4 max-w-2xl">
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-primary">
            01 / About
          </span>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-foreground">
            Building the Decentralised Future
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Auckland's premier student-led organisation dedicated to blockchain
            education and innovation. We bridge the gap between university
            theory and industry-grade Web3 development.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index} 
                className="group flex flex-col p-8 rounded-3xl bg-secondary hover:bg-secondary/70 transition-colors border border-border/50"
              >
                <div className="w-14 h-14 rounded-2xl bg-background flex items-center justify-center text-primary mb-6 shadow-sm border border-border/50 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
