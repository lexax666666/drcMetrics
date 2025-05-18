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
  title: "DRC Metrics | Amazon Seller Analytics Dashboard",
  description: "Analytics dashboard for Amazon sellers to track performance metrics, ACOS, profit, revenue, and campaign performance.",
  icons: {
    icon: [
      { url: '/favicon.svg' },
      { url: '/images/favicon/32x32.png', sizes: '32x32' },
      { url: '/images/favicon/256x256.png', sizes: '256x256' }
    ]
  }
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
