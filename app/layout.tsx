import type { Metadata } from "next";
import Navbar from "@/app/components/Navbar";
import { DonationFab } from "@/app/components/DonationFab";
import { CookieBanner } from "@/app/components/CookieBanner";
import { GA_ID, SITE } from "@/lib/constants";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Gana Dinero Online con Cripto, IA y Referidos`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.author }],
  creator: SITE.author,
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Plataformas verificadas para generar ingresos`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.name,
    description: SITE.description,
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  alternates: { canonical: SITE.url },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE.name,
  url: SITE.url,
  description: SITE.description,
  inLanguage: "es",
  publisher: { "@type": "Person", name: SITE.author },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://logo.clearbit.com" />
        <link rel="preconnect" href="https://www.google.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main id="main-content">{children}</main>
        <DonationFab />
        <CookieBanner />
      </body>
    </html>
  );
}