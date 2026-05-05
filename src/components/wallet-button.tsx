"use client";

import { useWallet } from "@/hooks/use-wallet";
import { Button } from "@/components/ui/button";
import { Wallet } from "lucide-react";
import Link from "next/link";

function truncateAddress(address: string) {
  return `${address.slice(0, 6)}…${address.slice(-4)}`;
}

export function WalletButton() {
  const { address, isConnected, connect, mounted } = useWallet();

  if (!mounted) {
    return (
      <div
        className="rounded-xl px-4 py-5 font-bold opacity-0 pointer-events-none inline-flex items-center justify-center"
        aria-hidden={true}
      >
        <Wallet className="w-4 h-4 mr-2" />
        Connect Wallet
      </div>
    );
  }

  if (isConnected && address) {
    return (
      <Button
        size="sm"
        variant="outline"
        asChild
        className="rounded-xl px-4 py-5 font-bold border-primary/30 bg-primary/5 hover:bg-primary/10 transition-all hover:-translate-y-0.5"
      >
        <Link href="/profile">
          <div className="w-2 h-2 rounded-full bg-green-500 mr-2 shrink-0" />
          {truncateAddress(address)}
        </Link>
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      variant="outline"
      onClick={() => connect()}
      className="rounded-xl px-4 py-5 font-bold hover:bg-primary hover:text-primary-foreground transition-all hover:-translate-y-0.5"
    >
      <Wallet className="w-4 h-4 mr-2" />
      Connect Wallet
    </Button>
  );
}
