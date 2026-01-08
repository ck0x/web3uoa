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
    <section id="about" className="py-32 bg-secondary/30 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Building the Decentralised Future
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            We are Auckland's premier student-led organization dedicated to blockchain education and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group flex flex-col items-center text-center space-y-6 p-6 rounded-2xl transition-colors hover:bg-background/80"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2 shadow-sm group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
