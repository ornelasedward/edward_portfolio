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


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Edward&apos;s portfolio</title>
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-TWVMHL49JM"
          strategy="afterInteractive"
          async
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-TWVMHL49JM');
          `}
        </Script>
        <meta name="description" content="Full stack engineer and technical leader" />
        {/* Open Graph */}
        <meta property="og:title" content="Edward&apos;s portfolio" />
        <meta property="og:description" content="Full stack engineer and technical leader" />
        <meta property="og:image" content="/images/header-img.png" />
        <meta property="og:type" content="website" />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Edward&apos;s portfolio" />
        <meta name="twitter:description" content="Full stack engineer and technical leader" />
        <meta name="twitter:image" content="/images/header-img.png" />
      </head>
      <body className={fira_code.className}>
        {/* Navbar */}
        <div className="xl:block hidden relative">
  <div className="absolute z-[999] left-1 2xl:left-[1%] top-0">
    <div className="grid place-items-center">
      <div className="w-[1px] h-[191px] bg-gray"></div>
      <ul className="space-y-3">
        {/* GitHub Link */}
        <Link href="https://github.com/ornelasedward" className="flex">
          <Image src={github} alt="github" />
        </Link>
        {/* LinkedIn Link */}
        <Link href="https://www.linkedin.com/in/edward-ornelas-681b52131/" className="flex">
          <Image src={linkedin} alt="linkedin" />
        </Link>
        {/* Twitter Link */}
        <Link href="https://twitter.com/_THECRYPTODEV" className="flex invert items-center justify-center">
          <Image src={twitterX} alt="twitter" />
        </Link>
        {/* YouTube Link */}
        <Link href="https://www.youtube.com/edward-ornelas" className="flex">
          <Image src={youtube} alt="youtube" />
        </Link>
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
