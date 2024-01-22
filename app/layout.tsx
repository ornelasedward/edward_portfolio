import Navbar from '@/components/navbar/Navbar';
import './globals.css';
import type { Metadata } from 'next';
import { Fira_Code } from 'next/font/google';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';
import { github, linkedin, twitter, youtube } from '@/assets/icons';
import MobileNavbar from '@/components/navbar/MobileNavigation';

const fira_code = Fira_Code({ subsets: ['latin'] });
export const metadata: Metadata = {
  title: "Edward's portfolio",
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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
        <Link href="https://twitter.com/_THECRYPTODEV" className="flex">
          <Image src={twitter} alt="twitter" />
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
