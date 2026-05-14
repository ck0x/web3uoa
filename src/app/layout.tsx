import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Web3Provider } from "@/components/web3-provider";
import Script from "next/script";

export const metadata: Metadata = {
  title: "WEB3UOA - University of Auckland Web3 Club",
  description: "Educating the next generation of blockchain innovators.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-screen text-foreground antialiased"
        suppressHydrationWarning
      >
        {/*Prevent flash of wrong theme when reload page*/}
        <Script id="theme-init" strategy="beforeInteractive">{`
          (function() {
            try {
              const saved = localStorage.getItem('theme');
              const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
              const theme = saved || preferred;
              if (theme === 'dark') {
                document.documentElement.classList.add('dark');
              }
            } catch(e) {}
          })();
        `}</Script>
        <Web3Provider>
          <Navbar />
          {children}
          <Footer />
        </Web3Provider>
      </body>
    </html>
  );
}