"use client";

import { useWallet } from "@/hooks/use-wallet";
import { WalletButton } from "@/components/wallet-button";
import { Button } from "@/components/ui/button";
import { Copy, CheckCheck } from "lucide-react";
import { useState } from "react";
import { mainnet, sepolia } from "wagmi/chains";

function getNetworkName(chainId?: number) {
  if (chainId === mainnet.id) return "Ethereum Mainnet";
  if (chainId === sepolia.id) return "Sepolia Testnet";
  return "Unknown Network";
}

export default function ProfilePage() {
  const { address, isConnected, chainId, disconnect, mounted } = useWallet();
  const [copied, setCopied] = useState(false);

  const copyAddress = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center space-y-6 max-w-sm mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
            <img src="/logo/web3uoa_logo.png" alt="WEB3UOA" className="w-10 h-10 object-contain" />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight mb-2">Your Profile</h1>
            <p className="text-muted-foreground text-sm">
              Connect your wallet to view your profile.
            </p>
          </div>
          <WalletButton />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-24">
      {/* Subtle background blobs matching site style */}
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full filter blur-3xl opacity-50 pointer-events-none" />
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full filter blur-3xl opacity-50 pointer-events-none" />

      <div className="container mx-auto px-4 max-w-2xl relative z-10">
        <div className="mb-10">
          <span className="inline-block text-xs font-black uppercase tracking-[0.3em] text-primary bg-primary/10 px-4 py-2 rounded-full border border-primary/20 mb-4">
            Profile
          </span>
          <h1 className="text-4xl font-black tracking-tight">Your Wallet</h1>
        </div>

        {/* Wallet card */}
        <div className="bg-secondary/50 backdrop-blur-sm rounded-2xl border border-border shadow-xl p-8 space-y-6">
          {/* Connected indicator */}
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
            <span className="text-sm font-bold text-green-600">Connected</span>
            <span className="text-sm text-muted-foreground ml-1">· {getNetworkName(chainId)}</span>
          </div>

          {/* Address */}
          <div>
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Wallet Address
            </p>
            <div className="flex items-center gap-3 bg-background/70 rounded-xl border border-border px-4 py-3">
              <span className="font-mono text-sm break-all flex-1">{address}</span>
              <button
                onClick={copyAddress}
                className="text-muted-foreground hover:text-primary transition-colors shrink-0"
                aria-label="Copy address"
              >
                {copied ? (
                  <CheckCheck className="w-4 h-4 text-green-500" />
                ) : (
                  <Copy className="w-4 h-4" />
                )}
              </button>
            </div>
          </div>

          {/* Disconnect */}
          <div className="pt-2 border-t border-border/50">
            <Button
              variant="outline"
              size="sm"
              onClick={() => disconnect()}
              className="rounded-xl font-bold border-destructive/30 text-destructive hover:bg-destructive hover:text-destructive-foreground transition-all"
            >
              Disconnect Wallet
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
