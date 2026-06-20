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
    default: "AI Adelaide | Websites, SEO & AI Automation for Adelaide Small Business",
    template: "%s | AI Adelaide",
  },
  description:
    "AI Adelaide builds AI-powered websites from $699, AI-driven local SEO from $399/mo, and AI automation from $199/mo for Adelaide small businesses. Faster builds, smarter SEO, 24/7 lead capture.",
  keywords: [
    "AI Adelaide",
    "AI websites Adelaide",
    "AI SEO Adelaide",
    "AI automation Adelaide",
    "AI receptionist Adelaide",
    "AI-powered websites Adelaide",
    "AI-driven SEO Adelaide",
    "website design Adelaide",
    "affordable websites Adelaide",
    "small business websites Adelaide",
    "SEO Adelaide",
    "local SEO Adelaide",
    "small business automation Adelaide",
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
    title: "AI Adelaide | Websites, SEO & AI Automation for Adelaide Small Business",
    description:
      "Website design from $699, local SEO, and AI automation for Adelaide small businesses. Affordable websites, SEO that ranks, automation that saves time.",
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
    title: "AI Adelaide | Websites, SEO & AI Automation",
    description:
      "Affordable websites, local SEO, and AI automation for Adelaide small businesses. From $699. AI Adelaide.",
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
              "@id": "https://aiadelaide.com.au/#organization",
              name: "AI Adelaide",
              description: "AI Adelaide — AI-powered websites, AI-driven local SEO, and AI automation for Adelaide small businesses",
              url: "https://aiadelaide.com.au",
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
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "AI Adelaide Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI-Powered Website Design",
                      description: "AI-powered website design for Adelaide small businesses, from $699. AI-accelerated builds, copywriting, and SEO setup.",
                    },
                    price: "699",
                    priceCurrency: "AUD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI-Driven Local SEO",
                      description: "AI-driven local SEO for Adelaide businesses, from $399/month. AI keyword research, content, and rank tracking.",
                    },
                    price: "399",
                    priceCurrency: "AUD",
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "AI Automation",
                      description: "AI automation for Adelaide small businesses — missed call text-back, AI receptionist, quote follow-up, from $199/month.",
                    },
                    price: "199",
                    priceCurrency: "AUD",
                  },
                ],
              },
              aggregateRating: undefined,
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
