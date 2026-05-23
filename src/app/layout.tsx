import type { Metadata } from 'next';
import './globals.css';

const metadata: Metadata = {
  title: 'NEXUS - Votre second cerveau pour Internet',
  description: 'Une IA privée pensée pour les ambitieux. Assistée sans intrusion. Anticipée sans limites.',
  keywords: [
    'AI',
    'Artificial Intelligence',
    'Productivity',
    'Waitlist',
    'NEXUS',
  ],
  openGraph: {
    title: 'NEXUS - Votre second cerveau pour Internet',
    description: 'Une IA privée pensée pour les ambitieux',
    type: 'website',
    locale: 'fr_FR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'NEXUS - Votre second cerveau pour Internet',
    description: 'Une IA privée pensée pour les ambitieux',
  },
};

export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-slate-950 text-white">
        {children}
      </body>
    </html>
  );
}