const fs = require('fs');
let content = fs.readFileSync('src/components/ens-claim.tsx', 'utf8');

content = content.replace(
  'import { useAccount } from "wagmi";',
  'import { useAccount } from "wagmi";\nimport { useAppKit } from "@reown/appkit/react";\nimport { Wallet } from "lucide-react";'
);

content = content.replace(
  'const { address, isConnected } = useAccount();',
  'const { address, isConnected } = useAccount();\n  const { open } = useAppKit();'
);

content = content.replace(
  /<appkit-button balance="hide" \/>/,
  `<Button onClick={() => open()} variant="outline" className="rounded-xl px-6 py-5 font-bold shadow-sm hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2">\n            <Wallet className="w-5 h-5" />\n            Connect Wallet\n          </Button>`
);

fs.writeFileSync('src/components/ens-claim.tsx', content);
