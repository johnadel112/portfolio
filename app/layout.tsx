import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://johnadelmakram.vercel.app"),
  title: {
    default: "John Adel Makram — AI Engineering & Software Development",
    template: "%s | John Adel Makram",
  },
  description:
    "Portfolio of John Adel Makram — Computer Science student specializing in IT Security, AI engineering, machine learning, and full-stack development.",
  keywords: [
    "John Adel Makram",
    "AI Engineering",
    "Machine Learning",
    "Software Developer",
    "IT Security",
    "Cybersecurity",
    "Portfolio",
  ],
  authors: [{ name: "John Adel Makram" }],
  creator: "John Adel Makram",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johnadelmakram.vercel.app",
    siteName: "John Adel Makram",
    title: "John Adel Makram — AI Engineering & Software Development",
    description:
      "Computer Science student specializing in IT Security, with experience in ML pipelines, RAG systems, full-stack apps, and cybersecurity platforms.",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Adel Makram — AI Engineering & Software Development",
    description:
      "AI engineering intern, software developer, and IT security student building intelligent systems.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#050a14",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-body">
        {children}
      </body>
    </html>
  );
}
