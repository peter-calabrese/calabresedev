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
  metadataBase: new URL("https://www.calabrese.dev"),
  title: {
    default: "Peter Calabrese",
    template: "%s | Peter Calabrese",
  },
  description: "New York based Freelance Developer.",
  openGraph: {
    type: "website",
    siteName: "Peter Calabrese",
    title: "Peter Calabrese",
    description: "New York based Freelance Developer.",
    url: "https://www.calabrese.dev",
    images: [
      {
        url: "/profile.jpeg",
        width: 1200,
        height: 630,
        alt: "Peter Calabrese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Calabrese",
    description: "New York based Freelance Developer.",
    images: ["/profile.jpeg"],
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-50`}
      >
        {children}
      </body>
    </html>
  );
}
