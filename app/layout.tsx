import type { Metadata } from "next";
import "./globals.css";

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
      "Industrial-grade DTF & UV DTF flatbed cutters for US print shops. Large cutting area, AI contour, vacuum suction. Request a quote today.",
    url: "https://secosystems.com",
    siteName: "SECO Systems",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
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
      "Industrial-grade DTF & UV DTF flatbed cutters for US print shops. Large cutting area, AI contour, vacuum suction.",
    images: ["/images/og-image.jpg"],
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
      <head>
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
