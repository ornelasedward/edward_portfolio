import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { github, linkedin, twitterX, youtube } from '@/assets/icons';
import MobileNavbar from '@/components/navbar/MobileNavigation';
import Script from 'next/script';

const fira_code = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Edward's portfolio",
  description:
    'AI-native full stack engineer and founding builder shipping complete products end to end.',
  openGraph: {
    title: "Edward's portfolio",
    description:
      'AI-native full stack engineer and founding builder shipping complete products end to end.',
    images: ['/images/header-img.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Edward's portfolio",
    description:
      'AI-native full stack engineer and founding builder shipping complete products end to end.',
    images: ['/images/header-img.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={fira_code.className}>
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
        <div className="xl:block hidden relative">
          <div className="absolute z-[999] left-1 2xl:left-[1%] top-0">
            <div className="grid place-items-center">
              <div className="w-[1px] h-[191px] bg-gray"></div>
              <ul className="space-y-3">
                <li>
                  <Link href="https://github.com/ornelasedward" className="flex">
                    <Image src={github} alt="github" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linkedin.com/in/edward-ornelas-681b52131/"
                    className="flex"
                  >
                    <Image src={linkedin} alt="linkedin" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://x.com/_edwardornelas"
                    className="flex invert items-center justify-center"
                  >
                    <Image src={twitterX} alt="twitter" />
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.youtube.com/edward-ornelas"
                    className="flex"
                  >
                    <Image src={youtube} alt="youtube" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Navbar />
        <MobileNavbar />
        <main className=" relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
