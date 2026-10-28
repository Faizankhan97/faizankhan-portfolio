import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://faizankhan-portfolio.netlify.app"),
  referrer: "origin-when-cross-origin",

  title: {
    default: "Faizan Khan | Frontend Engineer — React, Next.js",
    template: "%s | Faizan Khan",
  },
  description:
    "Portfolio of Faizan Khan — Frontend Engineer specializing in React and Next.js, with strong expertise in JavaScript and problem-solving.",

  keywords: [
    "Faizan Khan",
    "Faizan Khan Portfolio",
    "faizankhan developer",
    "JavaScript Engineer",
    "JavaScript Developer",
    "React Developer",
    "React.js Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "MERN Stack Developer",
    "Developer Portfolio",
    "Web Application Portfolio",
  ],

  authors: [
    { name: "Faizan Khan", url: "https://faizankhan-portfolio.netlify.app" },
  ],
  creator: "Faizan Khan",
  publisher: "Faizan Khan",

  applicationName: "Faizan Khan Portfolio",
  category: "technology",
  classification: "Software Engineer Portfolio",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // ── Open Graph ────────────────────────────────────────────────────────────
  openGraph: {
    type: "website",
    title: "Faizan Khan | Frontend Developer Portfolio",
    description:
      "Software Engineer II with 4+ years of experience. React, Next.js, Node.js, TypeScript. Frontend Lead for enterprise Warehouse Management System. Open source contributor.",
    url: "https://faizankhan-portfolio.netlify.app",
    siteName: "Faizan Khan Portfolio",
    locale: "en_US",
    images: [
      {
        url: "/portfolio_hero_section.png",
        width: 1200,
        height: 630,
        alt: "Faizan Khan — Frontend Developer Portfolio Preview",
        type: "image/png",
      },
    ],
  },

  // ── Icons ─────────────────────────────────────────────────────────────────
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },

  manifest: "/manifest.json",

  other: {
    "theme-color": "#0f172a",
    "color-scheme": "dark",
    "msapplication-TileColor": "#0f172a",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* ── Theme color (Chrome/Android) ── */}
        <meta name="theme-color" content="#0f172a" />
        <meta name="color-scheme" content="dark" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
