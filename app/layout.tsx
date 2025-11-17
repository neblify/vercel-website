import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/sections/header';
import { Footer } from '@/components/sections/footer';
import { GoogleAnalytics } from '@/components/analytics/google-analytics';
import { GoogleTagManager } from '@/components/analytics/google-tag-manager';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Neblify - AI, ML & Cloud Solutions',
    template: '%s | Neblify'
  },
  description: 'Neblify Solution Pvt. Ltd. delivers cutting-edge AI, ML, Generative AI, DevOps and Cloud cost optimization services.',
  keywords: ['AI', 'Machine Learning', 'Generative AI', 'Cloud Optimization', 'MLOps', 'DevOps', 'AI Consulting'],
  authors: [{ name: 'Neblify Solution Pvt. Ltd.' }],
  creator: 'Neblify Solution Pvt. Ltd.',
  publisher: 'Neblify Solution Pvt. Ltd.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://neblify.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://neblify.com',
    title: 'Neblify - AI, ML & Cloud Solutions',
    description: 'Neblify Solution Pvt. Ltd. delivers cutting-edge AI, ML, Generative AI, DevOps and Cloud cost optimization services.',
    siteName: 'Neblify',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Neblify - AI, ML & Cloud Solutions',
    description: 'Neblify Solution Pvt. Ltd. delivers cutting-edge AI, ML, Generative AI, DevOps and Cloud cost optimization services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GoogleTagManager />
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
