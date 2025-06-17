'use client';

import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets';
import { navLinksData } from '@/constant';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
// components/ActiveLink.js"

import { RxCross2 } from 'react-icons/rx';
import { usePathname } from 'next/navigation';

import { useState } from 'react';
import Menu from '../common/Menu';
import Logo from '../common/Logo';
// import { ChevronDownIcon } from '@heroicons/react/20/solid';
interface ActiveNavProps {
  href: any;
  children: any;
}

const ActiveLink: React.FC<ActiveNavProps> = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  console.log(href, '/path');

  return (
    <Link href={href}>
      <span className={` text-base ${isActive ? ' text-white ' : 'text-gray'}`}>
        <span className=" text-primary">#</span>
        {children}
      </span>
    </Link>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  //const menuItems = [
  //   { label: 'EN', path: '/' },
  //   { label: 'SP', path: '/' },
  //   { label: 'BD', path: '/' },
  //   // Add more menu items here
  // ];
  return (
    <Container>
      <header className="  py-8  flex items-center justify-between">
        <div className="logo">
          <Link href={'/'}>
            <Logo width={21} height={20} />
          </Link>
        </div>
        <nav>
          <button onClick={() => openNavbar()} className="  md:hidden">
            <HiOutlineMenuAlt2 size={30} />
          </button>
          <ul className=" hidden md:flex items-center gap-5">
            {navLinksData.map((link, key) => (
              <li key={key}>
                <ActiveLink href={link.href}>{link.label}</ActiveLink>
              </li>
            ))}
            {/* <Menu menuItems={menuItems} /> */}
          </ul>
          <div
            className={` md:hidden fixed  bg-primary-dark   mobile_navbar 2xl:px-0 px-4 pt-6 w-full h-full   ${
              isOpen ? 'right-0' : 'right-full'
            }  z-50 top-0 `}
          >
            <div className=" flex  items-center justify-between">
              <Image src={logo} alt="logo" />
              <RxCross2
                onClick={() => openNavbar()}
                className="text-white "
                size={36}
              />
            </div>
            <ul className="flex flex-col  pt-7 md:flex-row gap-6">
              {navLinksData.map(link => (
                <li key={link.href} onClick={openNavbar}>
                  <ActiveLink href={link.href}>{link.label}</ActiveLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </header>
    </Container>
  );
};
export default Navbar;
