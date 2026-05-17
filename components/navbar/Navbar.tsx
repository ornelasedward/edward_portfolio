'use client';

import Container from '../Container';
import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets';
import { navLinksData } from '@/constant';
import { HiOutlineMenuAlt2 } from 'react-icons/hi';
import { RxCross2 } from 'react-icons/rx';
import { useState } from 'react';
import Logo from '../common/Logo';
import NavLink from '../common/NavLink';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Container>
      <header className="flex items-center justify-between py-8">
        <div className="logo">
          <Link href="/#hero">
            <Logo width={21} height={20} />
          </Link>
        </div>
        <nav>
          <button onClick={() => openNavbar()} className="md:hidden">
            <HiOutlineMenuAlt2 size={30} />
          </button>
          <ul className="hidden items-center gap-5 md:flex">
            {navLinksData.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
          <div
            className={`mobile_navbar fixed h-full w-full bg-primary-dark px-4 pt-6 2xl:px-0 md:hidden ${
              isOpen ? 'right-0' : 'right-full'
            } top-0 z-50`}
          >
            <div className="flex items-center justify-between">
              <Image src={logo} alt="logo" />
              <RxCross2 onClick={() => openNavbar()} className="text-white" size={36} />
            </div>
            <ul className="flex flex-col gap-6 pt-7 md:flex-row">
              {navLinksData.map((link) => (
                <li key={link.href} onClick={openNavbar}>
                  <NavLink href={link.href}>{link.label}</NavLink>
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
