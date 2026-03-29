import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Web3Provider } from "@/components/web3-provider";

export const metadata: Metadata = {
  title: "Web3UOA",
  description: "University of Auckland Blockchain Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <Web3Provider>
          <Navbar />
          {children}
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}
