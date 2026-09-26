import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Footer from '@/components/Footer';
import Container from '@/components/Container';
import Script from 'next/script';

const sans = Geist({ subsets: ['latin'], variable: '--font-sans' });
const mono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

const title = 'Edward Ornelas · Senior AI Engineer';
const description =
  'Senior AI engineer in Austin, TX. I build LLM features, agents and evals, and the production systems that keep them running.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.edward-ornelas.com'),
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
