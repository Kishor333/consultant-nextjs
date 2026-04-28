import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style/global.scss";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const SITE_URL = "https://www.consult2t.studio";
const SITE_NAME = "Consult2T";
const SITE_DESCRIPTION =
  "Consult2T is a Thimphu-based urban planning and architecture firm shaping sustainable, culturally rooted environments across Bhutan.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Consult2T — Urban Planning & Architecture in Bhutan",
    template: "%s | Consult2T",
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  keywords: [
    "urban planning Bhutan",
    "architecture Thimphu",
    "interior design Thimphu",
    "Local Area Plan Bhutan",
    "sustainable design Bhutan",
    "interior design",
    "consultant",
    "architect",
    "Consult2T",
  ],
  authors: [{ name: "Consult2T" }],
  creator: "Consult2T",
  publisher: "Consult2T",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_BT",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Consult2T — Urban Planning & Architecture in Bhutan",
    description: SITE_DESCRIPTION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Consult2T",
    description: SITE_DESCRIPTION,
  },
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  category: "architecture",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Consult2T",
  description: SITE_DESCRIPTION,
  url: SITE_URL,
  email: "consult2tshering@gmail.com",
  foundingDate: "2023-03-27",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Tshalu Lam Se, Babesa, Building No. 783, Flat 4-02",
    addressLocality: "Thimphu",
    addressCountry: "BT",
  },
  areaServed: { "@type": "Country", name: "Bhutan" },
  sameAs: [
    "https://www.instagram.com/consult2t",
    "https://www.linkedin.com/company/consult2t/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-BT">
      <body className={`${montserrat.variable} antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
