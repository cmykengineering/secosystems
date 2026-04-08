import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SECO Systems — Professional DTF Flatbed Cutters for US Print Shops",
  description:
    "Industrial-grade DTF & UV DTF flatbed cutters adapted for the US market. 38\"×68\" working area, AI contour cutting, vacuum suction. Request a quote today.",
  metadataBase: new URL("https://secosystems.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SECO Systems — Professional DTF Flatbed Cutters",
    description:
      "Industrial-grade DTF & UV DTF flatbed cutters for US print shops. 2.7× larger cutting area than DTF Station Arc 127.",
    url: "https://secosystems.com",
    siteName: "SECO Systems",
    images: [
      {
        url: "/images/seco-digital-cutting-systems-dtf-flatbed-cutter-hero.jpg",
        width: 1200,
        height: 750,
        alt: "SECO Systems DTF Flatbed Cutter",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SECO Systems — Professional DTF Flatbed Cutters",
    description:
      "Industrial-grade DTF & UV DTF flatbed cutters for US print shops. 2.7× larger cutting area than DTF Station Arc 127.",
    images: ["/images/seco-digital-cutting-systems-dtf-flatbed-cutter-hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
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
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
