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
  title: 'Soul Seekers: Door Knockers Oracle',
  description: 'Find out where your next boom will be. Discover what you need to do to unlock your solar prophecy.',
  openGraph: {
    title: 'Soul Seekers: Door Knockers Oracle',
    description: 'Find out where your next boom will be. Discover what you need to do to unlock your solar prophecy.',
    images: [
      {
        url: '/solseeker.png',
        width: 600,
        height: 600,
        alt: 'Sol Seeker Logo',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Soul Seekers: Door Knockers Oracle',
    description: 'Find out where your next boom will be. Discover what you need to do to unlock your solar prophecy.',
    images: ['/solseeker.png'],
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
