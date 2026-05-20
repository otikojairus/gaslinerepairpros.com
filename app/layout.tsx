import type { Metadata } from "next";
import { Manrope, Bitter } from "next/font/google";
import "./globals.css";
import { SiteNavbar } from "@/components/site-navbar";
import { SiteFooter } from "@/components/site-footer";
import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/site-data";

const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"] });
const bitter = Bitter({ variable: "--font-bitter", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: `${SITE_NAME} | Gas Line & Leak Repair`, template: `%s | ${SITE_NAME}` },
  description:
    "Gas line repair, gas leak detection, installation, and fitting pages across Canadian cities with direct-call support.",
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE_NAME} | Gas Line & Leak Repair`,
    description: "Trusted gas line and leak service pages with city coverage and fast call options.",
    url: absoluteUrl("/"),
    type: "website",
    siteName: SITE_NAME,
    locale: "en_CA",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${bitter.variable}`}>
      <body>
        <SiteNavbar />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
