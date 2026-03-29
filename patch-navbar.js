const fs = require('fs');
let content = fs.readFileSync('src/components/navbar.tsx', 'utf8');

content = content.replace(
  'import { useAccount } from "wagmi";',
  'import { useAccount } from "wagmi";\nimport { useAppKit } from "@reown/appkit/react";\nimport { Wallet } from "lucide-react";'
);

content = content.replace(
  'const { address } = useAccount();',
  'const { address, isConnected } = useAccount();\n  const { open } = useAppKit();'
);

content = content.replace(
  /<appkit-button balance="hide" \/>/g,
  `{mounted && isConnected ? (
            <appkit-button balance="hide" />
          ) : (
            <Button onClick={() => open()} variant="outline" className="rounded-xl px-4 py-5 font-bold shadow-sm hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2">
              <Wallet className="w-4 h-4" />
              Connect Wallet
            </Button>
          )}`
);

fs.writeFileSync('src/components/navbar.tsx', content);
