import type { Metadata } from "next";
import { Geist, Geist_Mono, Source_Serif_4 } from "next/font/google";
import "./globals.css";
import StructuredData from "./components/StructuredData";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

const sourceSerif = Source_Serif_4({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["200", "300", "400", "500", "600", "700"],
});

import { CookieCleaner } from "./components/CookieCleaner";

export const metadata: Metadata = {
  title: "Xenostech Studio - Custom Software Development & Business Consulting",
  description: "Transform your business ideas into powerful applications. Xenostech Studio specializes in custom software development, business automation, and digital consulting services tailored to your unique needs.",
  keywords: "custom software development, business consulting, web applications, mobile apps, process automation, digital transformation, cloud solutions, MVP development, Indonesia software company",
  authors: [{ name: "Xenostech Studio" }],
  creator: "Xenostech Studio",
  publisher: "Xenostech Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://xenostechstudio.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Xenostech Studio - Custom Software Development & Business Consulting",
    description: "Transform your business ideas into powerful applications. Specializing in custom software development and consulting services.",
    url: 'https://xenostechstudio.com',
    siteName: 'Xenostech Studio',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Xenostech Studio - Software Development & Consulting',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Xenostech Studio - Custom Software Development & Business Consulting",
    description: "Transform your business ideas into powerful applications. Specializing in custom software development and consulting services.",
    images: ['/og-image.jpg'],
    creator: '@xenostechstudio',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="theme-color" content="#333f4d" />
        <meta name="msapplication-TileColor" content="#333f4d" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceSerif.variable} antialiased`}
      >
        <CookieCleaner />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
