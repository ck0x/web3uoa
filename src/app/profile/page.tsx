"use client";

import React, { useState } from "react";
import { useWallet } from "@/hooks/use-wallet";
import { WalletButton } from "@/components/wallet-button";
import { Copy, CheckCheck, PenTool } from "lucide-react";

export default function ProfilePage() {
  const { address, isConnected, disconnect, mounted } = useWallet();
  const [copied, setCopied] = useState(false);
  const [displayName, setDisplayName] = useState("Name");
  const [isEditingName, setIsEditingName] = useState(false);
  const [profileImage, setProfileImage] = useState<string | null>(null);

  const copyAddress = () => {
    if (!address) return;
    navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setProfileImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Hardcoded 'badge elements', replace with a component later
  const badgeItems: Record<number, null> = {};
  for (let i = 0; i < 9; i += 1) {
    badgeItems[i] = null;
  }

  // Hardcoded 'event history', replace this with a component later
  const eventHistory = [
    { id: 1, title: "Launch Party" },
    { id: 2, title: "Hackathon" },
  ];

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Loading...</p>
      </div>
    );
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[linear-gradient(180deg,_#AFDCF1_0%,_#ADD8F2_27%,_#D3B7F3_100%)]">
        <div className="text-center space-y-6 max-w-sm mx-auto px-4">
          <div className="w-16 h-16 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mx-auto">
            <img
              src="/logo/web3uoa_logo.png"
              alt="WEB3UOA"
              className="w-10 h-10 object-contain"
            />
          </div>
          <div>
            <h1 className="text-2xl font-black tracking-tight mb-2">
              Your Profile
            </h1>
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
    <div className=" min-h-screen w-screen flex flex-col py-16 gap-16 justify-center items-center bg-[linear-gradient(180deg,_#AFDCF1_0%,_#ADD8F2_27%,_#D3B7F3_100%)] pt-32 pb-24">
      {/* Profile Card */}
      <div className="relative bg-white/80 w-[80vw] p-15 rounded-2xl">
        <div className="absolute z-1 left-10 top-1/2 -translate-y-1/2 rounded-full bg-white w-70 h-70 flex justify-center items-center overflow-hidden hover:bg-accent">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="text-gray-400 text-sm">No Image</div>
          )}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="absolute inset-0 opacity-0 cursor-pointer"
            title="Click to upload profile image"
          />
        </div>
        <div className="flex flex-col ml-80">
          {isEditingName ? (
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={displayName}
                onChange={(e) => setDisplayName(e.target.value)}
                className="text-xl font-bold border rounded px-2 py-1"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    setIsEditingName(false);
                  }
                }}
              />
              <button
                onClick={() => setIsEditingName(false)}
                className="text-sm text-primary hover:underline"
              >
                Save
              </button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <p className="text-2xl font-bold">{displayName}</p>
              <button
                onClick={() => setIsEditingName(true)}
                className="text-sm text-muted-foreground hover:text-primary"
              >
                <PenTool className="w-4 h-4 ml-1" />
              </button>
            </div>
          )}
          <span className="font-mono text-sm break-all flex-1 mt-4">
            {address} {""}
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
            <div className="pt-2">
              <button
                onClick={() => disconnect()}
                className="rounded-xl text-xs font-bold text-primary hover:underline"
              >
                Disconnect Wallet
              </button>
            </div>
          </span>
        </div>
      </div>

      <div className="flex flex-row flex-1 w-[80vw] gap-16 items-end">
        {/* Badges*/}
        <div className="bg-white/80 w-[42vw] p-10 rounded-2xl mt-10">
          <p className="text-2xl font-bold">Badges</p>

          <div className="mt-8 grid grid-cols-3 gap-y-8 justify-items-center">
            {Object.keys(badgeItems).map((key) => (
              <div key={key} className="w-30 h-30 rounded-full bg-primary/10" />
            ))}
          </div>
        </div>

        {/* Event History*/}
        <div className="bg-white/80 w-[34vw] h-[80vh] p-10 rounded-2xl">
          <p className="text-2xl font-bold">Events Attended</p>

          <div className="mt-8 space-y-4">
            {eventHistory.map((event) => (
              <div
                key={event.id}
                className="rounded-3xl bg-primary/10 px-6 py-12"
              >
                <p className="font-semibold text-lg">{event.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
