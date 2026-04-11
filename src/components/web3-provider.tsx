"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { WagmiProvider } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";
import { ReactNode } from "react";
import { createAppKit } from "@reown/appkit/react";
import { WagmiAdapter } from "@reown/appkit-adapter-wagmi";

const queryClient = new QueryClient();

const normalizeProjectId = (value?: string) => {
  if (!value) return undefined;
  const trimmed = value.trim();
  return trimmed.replace(/^['\"]+|['\"]+$/g, "");
};

export const projectId =
  normalizeProjectId(process.env.NEXT_PUBLIC_REOWN_PROJECT_ID) ||
  "b56e464e047eb0eec49e49ebef52a8a8"; // fallback for local development

export const networks = [mainnet, sepolia];

export const wagmiAdapter = new WagmiAdapter({
  projectId,
  networks,
});

export const wagmiConfig = wagmiAdapter.wagmiConfig;

createAppKit({
  adapters: [wagmiAdapter],
  networks: [mainnet, sepolia],
  projectId,
  featuredWalletIds: [
    // MetaMask wallet id in Reown WalletGuide.
    "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
  ],
  allWallets: "SHOW",
  enableWalletGuide: false,
  features: {
    analytics: true,
    email: false,
    socials: false,
    connectMethodsOrder: ["wallet"],
    connectorTypeOrder: ["featured"],
  },
});

export function Web3Provider({ children }: { children: ReactNode }) {
  return (
    <WagmiProvider config={wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}
