import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import "./style/global.scss";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-montserrat",
});
export const metadata: Metadata = {
  title: "CONSULT2T",
  description:
    "Professional interior design consultant in Thimphu offering modern home, office, and commercial interior solutions tailored to your needs.",
  keywords: ["interior design", "home", "office", "Thimphu"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} antialiased`}>{children}</body>
    </html>
  );
}
