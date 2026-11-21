import { jsonLd } from "@/lib/json-ld";
import type { Metadata } from "next";
import { Geist, Newsreader } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { site } from "@/lib/site";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  axes: ["opsz"],
});

const homeTitle = "Bitcoin in Texas — Mining, Law & the State Reserve";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: homeTitle,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "Texas Bitcoin",
    "Bitcoin mining Texas",
    "ERCOT Bitcoin",
    "Texas crypto law",
    "Texas Strategic Bitcoin Reserve",
    "Rockdale mining",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: homeTitle,
    description: site.description,
    url: site.url,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: site.description,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.url },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${site.url}/#organization`,
        name: site.name,
        url: site.url,
        description: site.description,
        logo: {
          "@type": "ImageObject",
          url: site.logo,
          width: 512,
          height: 512,
        },
        knowsAbout: [
          "Bitcoin",
          "Bitcoin mining",
          "ERCOT",
          "Texas cryptocurrency regulation",
          "Stablecoins",
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${site.url}/#website`,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": `${site.url}/#organization` },
        inLanguage: "en-US",
      },
    ],
  };

  return (
    <html lang="en" className={`${geist.variable} ${newsreader.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: jsonLd(orgJsonLd) }}
        />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
