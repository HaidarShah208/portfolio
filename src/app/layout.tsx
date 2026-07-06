import type { Metadata, Viewport } from "next";
import "../index.css";
import "../App.css";

export const metadata: Metadata = {
  title: "Ali Haidar | Full Stack & AI Developer",
  description:
    "Portfolio of Ali Haidar, a Full Stack & AI Developer specializing in React, Next.js, Node.js, TypeScript, PostgreSQL, and Python with a focus on scalable web applications and AI-powered solutions.",
  keywords: [
    "Ali Haidar",
    "Full Stack Developer",
    "AI Developer",
    "MERN Stack",
    "React",
    "Next.js",
    "Node.js",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Ali Haidar" }],
  manifest: "/manifest.json",
  openGraph: {
    title: "Ali Haidar | Full Stack & AI Developer",
    description:
      "Portfolio of Ali Haidar, a Full Stack & AI Developer building scalable web applications and intelligent AI-powered solutions.",
    type: "website",
    siteName: "Ali Haidar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ali Haidar | Full Stack & AI Developer",
    description:
      "Portfolio of Ali Haidar, a Full Stack & AI Developer building scalable web applications and intelligent AI-powered solutions.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unicons.iconscout.com/release/v4.0.8/css/line.css"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
