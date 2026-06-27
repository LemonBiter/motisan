import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/layout/header/Header";
import Footer from "@/components/layout/footer/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://motisan.com.au"),

  title: {
    default:
      "Motisan | Premium Insulated Panel Doors & Modular Building Solutions",

    template: "%s | Motisan",
  },

  description:
    "Motisan Pty Ltd is an Australian-owned company specialising in premium insulated panel doors, modular building solutions and industrial access products for commercial and industrial applications.",

  keywords: [
    "Motisan",

    "Insulated Panel Door",

    "Cold Room Door",

    "Freezer Door",

    "Donga Door",

    "Steel Clad Door",

    "Rapid Door",

    "Industrial Door",

    "Modular Building",

    "Modular Solutions",

    "Commercial Door",

    "Australia",
  ],

  applicationName: "Motisan",

  authors: [
    {
      name: "Motisan Pty Ltd",

      url: "https://motisan.com.au",
    },
  ],

  creator: "Motisan Pty Ltd",

  publisher: "Motisan Pty Ltd",

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

  alternates: {
    canonical: "https://motisan.com.au",
  },

  openGraph: {
    type: "website",

    locale: "en_AU",

    url: "https://motisan.com.au",

    siteName: "Motisan",

    title:
      "Motisan | Premium Insulated Panel Doors & Modular Building Solutions",

    description:
      "Australian-owned supplier of insulated panel doors, modular building products and industrial access solutions.",

    images: [
      {
        url: "/img/og-image.jpg",

        width: 1200,

        height: 630,

        alt: "Motisan",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Motisan | Premium Insulated Panel Doors & Modular Building Solutions",

    description:
      "Australian-owned supplier of insulated panel doors and modular building products.",

    images: ["/img/og-image.jpg"],
  },

  icons: {
    icon: "/logo/logo.svg",

    shortcut: "/logo/logo.svg",

    apple: "/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
