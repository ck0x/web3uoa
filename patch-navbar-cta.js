import fs from 'fs';
let content = fs.readFileSync('src/components/navbar.tsx', 'utf8');

content = content.replace(
  '{ label: "Web3 ID", href: "#identity" },',
  '{ label: "Claim your Web3 ID!", href: "#identity", isCTA: true },'
);

content = content.replace(
  'className="text-sm font-bold tracking-wide transition-colors text-foreground/80 hover:text-primary"',
  'className={`text-sm font-bold tracking-wide transition-all ${link.isCTA ? "text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 hover:bg-primary/20" : "text-foreground/80 hover:text-primary"}`}'
);

content = content.replace(
  'className="text-base font-bold text-foreground/80 hover:text-primary py-2 transition-colors border-b border-border/50"',
  'className={`text-base font-bold py-2 transition-colors border-b border-border/50 ${link.isCTA ? "text-primary" : "text-foreground/80 hover:text-primary"}`}'
);

fs.writeFileSync('src/components/navbar.tsx', content);
