import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://jessimc.dev'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US'
    },
  },
  title: 'JESSI',
  openGraph: {
    title: 'JESSI - Minecraft servers on iOS',
    description: 'Host Minecraft servers directly on your device.',
    images: [
      {
        url: '/opengraph-image.png',
        width: 64,
        height: 64,
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://use.typekit.net" />
        <link rel="stylesheet" href="https://use.typekit.net/taj5rlj.css" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}