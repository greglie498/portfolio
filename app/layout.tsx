import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jetbrains = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains' });

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
    metadataBase: new URL(siteUrl),
    title: {
      default: "Elie Banga-Bothy | Full-Stack Developer",
      template: "%s",
    },
    description:
      "Software engineering student and freelance developer building backend-leaning products for African fintech and mobile money.",
    openGraph: {
      title: "Elie Banga-Bothy | Full-Stack Developer",
      description:
        "Backend-leaning products for African fintech and mobile money.",
      type: "website",
      siteName: "Elie Banga-Bothy",
    },
    twitter: { card: "summary_large_image" },
  };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}