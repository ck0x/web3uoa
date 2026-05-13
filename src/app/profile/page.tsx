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
    <div className="min-h-screen w-screen flex flex-col gap-16 justify-center items-center bg-[linear-gradient(180deg,_#AFDCF1_0%,_#ADD8F2_27%,_#D3B7F3_100%)] px-4 md:px-0 pt-32 pb-24">
      {/* Profile Card */}
      <div className="relative bg-white/80 w-full max-w-[90vw] lg:w-[80vw] lg:max-w-[90vw] p-8 lg:p-15 rounded-2xl overflow-visible">
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:gap-8">
          <div className="relative w-32 h-32 rounded-full bg-white flex items-center justify-center overflow-hidden lg:absolute lg:-left--16 lg:top-1/2 lg:-translate-y-1/2 lg:w-[280px] lg:h-[280px]">
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

          <div className="w-full lg:w-auto lg:pl-[340px]">
            {isEditingName ? (
              <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-2">
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  className="w-full md:w-auto text-xl font-bold border rounded px-3 py-2"
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
              <div className="flex flex-col items-center md:items-start gap-2 md:flex-row md:gap-2">
                <p className="text-2xl md:text-3xl font-bold">{displayName}</p>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-sm text-muted-foreground hover:text-primary flex items-center"
                >
                  <PenTool className="w-4 h-4 ml-1" />
                </button>
              </div>
            )}
            <div className="mt-6 flex flex-col items-center md:items-start gap-4">
              <span className="font-mono text-sm break-all max-w-[100%]">
                {address}
              </span>
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
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
                <button
                  onClick={() => disconnect()}
                  className="rounded-xl text-xs font-bold text-primary hover:underline"
                >
                  Disconnect Wallet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-10 w-full max-w-[90vw] lg:flex-row lg:justify-center lg:items-end lg:gap-16">
        {/* Badges*/}
        <div className="bg-white/80 w-full lg:w-[42vw] p-8 rounded-2xl min-h-[44vh] lg:min-h-[34vh] lg:mt-10">
          <p className="text-2xl font-bold">Badges</p>

          <div className="mt-8 grid grid-cols-3 gap-4 sm:gap-6 justify-items-center">
            {Object.keys(badgeItems).map((key) => (
              <div
                key={key}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10"
              />
            ))}
          </div>
        </div>

        {/* Event History*/}
        <div className="bg-white/80 w-full lg:w-[34vw] p-8 rounded-2xl min-h-[52vh] lg:min-h-[34vh]">
          <p className="text-2xl font-bold">Events Attended</p>

          <div className="mt-8 space-y-4">
            {eventHistory.map((event) => (
              <div
                key={event.id}
                className="rounded-3xl bg-primary/10 px-4 py-4 sm:px-6 sm:py-5"
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
