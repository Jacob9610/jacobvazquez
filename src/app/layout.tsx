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
  title: "Jacob Vazquez — Portfolio",
  description: "Projects, research, and creative work by Jacob Vazquez.",
  metadataBase: new URL("https://jacobvazquez.com"),
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "Jacob Vazquez — Portfolio",
    description:
      "Explore my projects, research, and hardware/software experiments.",
    url: "https://jacobvazquez.com",
    siteName: "Jacob Vazquez",
    images: [
      {
        url: "/images/layout-images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jacob Vazquez Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jacob Vazquez — Portfolio",
    description:
      "Explore my projects, research, and hardware/software experiments.",
    images: ["/images/og-image.png"],
    creator: "@yourTwitterHandle", // optional
  },
  themeColor: "#0f172a",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
