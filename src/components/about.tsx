import { Code2, Users, Lightbulb, Rocket } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Learn & Build",
    description:
      "Hands-on workshops covering blockchain fundamentals, smart contracts, and dApp development",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Connect with like-minded students passionate about decentralised technology",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Explore cutting-edge Web3 projects and contribute to the decentralised ecosystem",
  },
  {
    icon: Rocket,
    title: "Opportunities",
    description:
      "Access internships, hackathons, and career opportunities in the Web3 space",
  },
];

export function About() {
  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
            Building the Decentralised Future
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join New Zealand's leading university Web3 community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
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
