import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, Pinyon_Script } from 'next/font/google';
import { site } from '@/config/site';
import './globals.css';

const SITE_URL = 'https://farah.etsukow.com';
const DESCRIPTION =
  'A quiet garden of curiosity — where I grow intelligent systems, train models, and tend to ideas until they bloom.';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const ebGaramond = EB_Garamond({
  variable: '--font-eb-garamond',
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const pinyonScript = Pinyon_Script({
  variable: '--font-pinyon',
  subsets: ['latin'],
  weight: ['400'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Farah Safsafi — Portfolio',
  description: DESCRIPTION,
  keywords: ['Farah Safsafi', 'portfolio', 'data', 'AI', 'machine learning', 'intelligent systems'],
  authors: [{ name: site.name, url: SITE_URL }],
  creator: site.name,
  alternates: { canonical: '/' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_URL,
    siteName: site.name,
    title: 'Farah Safsafi — Portfolio',
    description: DESCRIPTION,
    images: [{ url: '/og.png', width: 2400, height: 1260, alt: 'Farah Safsafi — Portfolio' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Farah Safsafi — Portfolio',
    description: DESCRIPTION,
    images: ['/og.png'],
  },
};

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  url: SITE_URL,
  jobTitle: 'Computer Science Student',
  email: `mailto:${site.email}`,
  sameAs: [site.github, site.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable} ${pinyonScript.variable}`}>
      <head>
        {/* The hero portrait is the LCP element but lives in a CSS background,
            so the browser only discovers it after layout — preload it early. */}
        <link rel="preload" as="image" href="/assets/portrait.webp" />
      </head>
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
