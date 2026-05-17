'use client';

import React, { useState } from 'react';
import { RiMenu3Fill } from 'react-icons/ri';
import { RxCross2 } from 'react-icons/rx';
import { navLinksData } from '@/constant';
import Logo from '../common/Logo';
import NavLink from '../common/NavLink';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar y fixed left-0 right-0 z-50 hidden bg-primary-dark px-4 py-5">
      <div className="flex justify-between">
        <Logo width={20} height={19} />

        <button onClick={() => openNavbar()}>
          <RiMenu3Fill className="text-white" size={25} />
        </button>
      </div>

      <div
        className={`mobile_navbar fixed h-full w-full bg-primary-dark px-4 pt-6 2xl:px-0 ${
          isOpen ? 'right-0' : 'right-full'
        } top-0 z-50`}
      >
        <div className="flex items-center justify-between">
          <Logo width={20} height={19} />
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
    </div>
  );
};

export default MobileMenu;
