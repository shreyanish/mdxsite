import "./globals.css";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { unstable_ViewTransition as ViewTransition } from "react";
import { Fonts } from "./fonts";
import Footer from "./footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://shreyanish.com"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "shrey's",
    template: "%s | shrey's",
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased vsc-initialized tracking-tight font-display text-base">
        <Fonts />
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[60ch] mx-auto w-full space-y-6 pt-12">
            <ViewTransition name="test">{children}</ViewTransition>
          </main>
          <Footer />
          <Analytics />
        </div>
      </body>
    </html>
  );
}