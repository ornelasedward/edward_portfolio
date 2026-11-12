import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Script from 'next/script';
import { ENGINEERING_URL, MARKETING_URL, isMarketingHost } from '@/lib/site';

const sans = Geist({ subsets: ['latin'], variable: '--font-sans' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

const engineering = {
  base: ENGINEERING_URL,
  title: 'Edward Ornelas · AI Engineer & Tech Lead',
  description:
    'AI engineer and tech lead in Austin, TX. I lead a team of 8 developers and put AI to work across how a team builds, how operations run, and what customers use.',
};

// Pages on marketing.edward-ornelas.com (including /contact) must not inherit the engineering
// title, description or www image URLs.
const marketing = {
  base: MARKETING_URL,
  title: 'Edward Ornelas · Marketing Engineer',
  description:
    'Engineer and marketer in Austin, TX. I grow the products I build: partner campaigns, onboarding, content and AI content operations.',
};

export async function generateMetadata(): Promise<Metadata> {
  const { base, title, description } = (await isMarketingHost()) ? marketing : engineering;
  return {
    metadataBase: new URL(base),
    title,
    description,
    openGraph: {
      title,
      description,
      images: ['/images/header-img.png'],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/header-img.png'],
    },
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TWVMHL49JM"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TWVMHL49JM');
          `}
        </Script>
        <Container classes="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Container>
      </body>
    </html>
  );
}
