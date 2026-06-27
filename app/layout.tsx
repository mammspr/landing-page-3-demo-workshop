import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Mamm Suparat | Ceremonial Matcha, Aesthetic Cafes & Mindful Travel',
  description: 'Welcome to the quiet luxury lifestyle blog of Mamm Suparat. Discover ceremonial matcha rituals, hidden cafe gems across Tokyo & Kyoto, and serene travel guides.',
  keywords: ['Mamm Suparat', 'Matcha Blog', 'Ceremonial Matcha', 'Quiet Luxury', 'Cafe Hopping', 'Travel Blog', 'Kyoto Travel', 'Mindful Living'],
  authors: [{ name: 'Mamm Suparat' }],
  openGraph: {
    title: 'Mamm Suparat | Lifestyle Blog',
    description: 'Savoring slow moments, ceremonial matcha rituals, aesthetic cafes, and mindful journeys.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}>
      <body className="bg-linen-light text-earth-charcoal antialiased selection:bg-matcha-accent selection:text-matcha-deep">
        {children}
      </body>
    </html>
  );
}
