import type { Metadata } from "next";
import Script from "next/script";
import { JetBrains_Mono, Manrope, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MotionProvider from "@/components/MotionProvider";
import CookieConsent from "@/components/CookieConsent";
import dynamic from "next/dynamic";
const ChatWidget = dynamic(() => import("@/components/ChatWidget"), { ssr: false });
import { siteConfig } from "@/lib/constants";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

const display = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "AI Automation Adelaide | AI Adelaide — Stop Losing Leads While You Sleep",
    template: "%s | AI Adelaide",
  },
  description:
    "AI automation for Adelaide tradies and small businesses. Missed call response, quote follow-up, reviews — automate the work that loses you jobs. Free audit.",
  keywords: [
    "AI automation Adelaide",
    "AI for tradies Adelaide",
    "missed call service Adelaide",
    "small business automation Adelaide",
    "AI receptionist Adelaide",
    "quote follow-up automation",
    "Google reviews automation Adelaide",
    "business automation Adelaide",
  ],
  authors: [{ name: "AI Adelaide" }],
  creator: "AI Adelaide",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "/",
    siteName: "AI Adelaide",
    title: "Stop Losing Leads | AI Adelaide — AI Automation for Small Business",
    description:
      "Adelaide-based automation for tradies, allied health, and small business. Instant follow-ups, 24/7 AI assistants, bookkeeping prep. Get your time back.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1600,
        height: 900,
        alt: "AI Adelaide - AI Automation for Adelaide Small Businesses",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Stop Losing Leads | AI Adelaide",
    description:
      "Adelaide-based automation for tradies, allied health, and small business. Get your time back.",
    images: ["/images/og-image.png"],
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-AU">
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased`}
      >
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
        <Script
          id="site-schema"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.aiadelaide.com.au/#organization",
              name: "AI Adelaide",
              description: "AI receptionist and automation services for Adelaide businesses",
              url: "https://www.aiadelaide.com.au",
              telephone: "+61871009788",
              email: "hello@aiadelaide.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "5 Peel St",
                addressLocality: "Adelaide",
                addressRegion: "SA",
                postalCode: "5000",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-34.9285",
                longitude: "138.6007",
              },
              areaServed: {
                "@type": "City",
                name: "Adelaide",
              },
              priceRange: "$$",
              sameAs: ["https://share.google/sQ9EA93N5bVW9qdTn"],
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:00",
                closes: "18:00",
              },
            }),
          }}
        />
        <MotionProvider>
          <Navbar />
          <main className="relative overflow-x-clip">{children}</main>
          <Footer />
          <ChatWidget />
          <CookieConsent />
        </MotionProvider>
      </body>
    </html>
  );
}
