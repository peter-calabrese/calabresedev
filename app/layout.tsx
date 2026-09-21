import type { Metadata } from "next";
import "./globals.css";
import "./portfolio.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.calabrese.dev"),
  title: {
    default: "Peter Calabrese | Full-Stack Software Engineer",
    template: "%s | Peter Calabrese",
  },
  description: "Full-stack software engineer with 5+ years building enterprise React applications, Java/Spring Boot services, and Azure solutions. Explore my experience, localization project, and resume.",
  openGraph: {
    type: "website",
    siteName: "Peter Calabrese",
    title: "Peter Calabrese",
    description: "Full-stack software engineer with 5+ years building enterprise React applications, Java/Spring Boot services, and Azure solutions. Explore my experience, localization project, and resume.",
    url: "https://www.calabrese.dev",
    images: [
      {
        url: "/profile.jpeg",
        width: 400,
        height: 400,
        alt: "Peter Calabrese",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Peter Calabrese",
    description: "Full-stack software engineer with 5+ years building enterprise React applications, Java/Spring Boot services, and Azure solutions. Explore my experience, localization project, and resume.",
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
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
