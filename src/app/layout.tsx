import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleTagManager, GoogleAnalytics } from '@next/third-parties/google';
import "./globals.css";
import { cn } from "@/lib/utils";
import { ChatWidget } from "@/components/chat-widget";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Tyler Tree Service",
    default: "Tyler Tree Service | Removal, Trimming & Emergency Care",
  },
  description:
    "Professional Tree Service in Tyler, TX. Licensed & Insured. 24/7 Emergency Tree Removal, Stump Grinding, and Trimming. Serving Smith County and East Texas.",
  keywords: [
    "Tree Service Tyler TX",
    "Tree Removal Tyler",
    "Stump Grinding Tyler",
    "Arborist Tyler TX",
    "Emergency Tree Service",
    "Tree Trimming Smith County",
    "Pine Tree Removal East Texas",
    "75703 Tree Service",
    "Azalea District Tree Care",
  ],
  authors: [{ name: "Tyler Tree Service Team" }],
  creator: "Tyler Tree Service",
  publisher: "Tyler Tree Service",
  metadataBase: new URL("https://tylertreeremoval.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Tyler Tree Service | Fast & Affordable Tree Care",
    description:
      "Expert tree removal and trimming in Tyler, TX. 24/7 Emergency response. Licensed and Insured. Call for a free estimate.",
    url: "https://tylertreeremoval.com",
    siteName: "Tyler Tree Service",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tyler Tree Service",
    description: "Professional Tree Removal & Care in Tyler, TX.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-PQJL3LMM" />
      <GoogleAnalytics gaId="G-BK1TM9DBYG" />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          geistSans.variable,
          geistMono.variable
        )}
      >

        {children}
        <ChatWidget />
      </body>
    </html>
  );
}