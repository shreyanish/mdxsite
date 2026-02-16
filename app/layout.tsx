import { Inter } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { unstable_ViewTransition as ViewTransition } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyanish.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "shrey's",
    template: "%s | Shrey Anish",
  },
  description: "",
};

import { Navigation } from "./navigation";
import { SmoothScroll } from "./smooth-scroll";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased tracking-tight font-sans bg-background text-foreground selection:bg-gray-200`}
      >

        {/* Main Grid Container */}
        {/* Mobile: pt-[32px] (Nav top), but if Nav is part of grid, the padding is container padding. */}
        {/* User said: Desktop header from top 64px. Mobile nav from top 32px. */}

        <div className="mx-auto w-full max-w-[1512px] min-h-screen 
          px-[32px] md:px-[64px] 
          pt-[40px] md:pt-[64px]
          grid grid-cols-4 md:grid-cols-8 
          items-start content-start
          gap-x-[20px]">

          <Navigation />

          {/* Main Content */}
          <main className="
            col-span-4 md:col-span-4 md:col-start-2 md:row-start-1
          ">
            <SmoothScroll>
              <ViewTransition>{children}</ViewTransition>
            </SmoothScroll>
          </main>

          <Analytics />
        </div>
      </body>
    </html>
  );
}