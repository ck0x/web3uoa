import fs from 'fs';
let content = fs.readFileSync('src/components/hero.tsx', 'utf8');

content = content.replace(
  '<div className="relative group w-64 h-64 md:w-96 md:h-96">',
  '<a href="#identity" className="relative group w-64 h-64 md:w-96 md:h-96 block cursor-pointer" title="Claim your Web3 ID!">'
);

content = content.replace(
  `                style={{
                  filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
                }}
              />
            </div>`,
  `                style={{
                  filter: "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
                }}
              />
            </a>`
);

fs.writeFileSync('src/components/hero.tsx', content);
