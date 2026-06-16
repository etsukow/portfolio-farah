import type { Metadata } from 'next';
import { Cormorant_Garamond, EB_Garamond, Pinyon_Script } from 'next/font/google';
import './globals.css';

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
  title: 'Farah Safsafi — Portfolio',
  description: 'A quiet garden of curiosity — where I grow intelligent systems, train models, and tend to ideas until they bloom.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${ebGaramond.variable} ${pinyonScript.variable}`}>
      <head>
        {/* The hero portrait is the LCP element but lives in a CSS background,
            so the browser only discovers it after layout — preload it early. */}
        <link rel="preload" as="image" href="/assets/portrait.webp" />
      </head>
      <body>{children}</body>
    </html>
  );
}
