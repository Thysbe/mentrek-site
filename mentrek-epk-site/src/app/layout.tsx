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
  metadataBase: new URL("https://mentrek.studio"),
  title: "MENTREK",
  description: "Hyper-Glitch electronic music from Chicago. Club-ready tracks influenced by techno, broken-beat, and deconstructed club music.",
  openGraph: {
    title: "MENTREK",
    description: "Hyper-Glitch electronic music from Chicago. Club-ready tracks influenced by techno, broken-beat, and deconstructed club music.",
    url: "https://mentrek.studio",
    siteName: "MENTREK",
    images: [
      {
        url: "/art/color_structure3.png",
        width: 600,
        height: 600,
        alt: "MENTREK — generative art",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MENTREK",
    description: "Hyper-Glitch electronic music from Chicago. Club-ready tracks influenced by techno, broken-beat, and deconstructed club music.",
    images: ["/art/color_structure3.png"],
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
