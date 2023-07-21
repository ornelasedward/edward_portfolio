import React from 'react';
import Container from './Container';
import Image from 'next/image';
import { logo } from '@/assets';
import Link from 'next/link';
import { github, linkedin, twitter } from '@/assets/icons';
import { TfiYoutube } from 'react-icons/tfi';
import Logo from './common/Logo';

const Footer = () => {
  return (
    <footer className=" mt-10 lg:mt-16 border-t border-gray">
      <Container classes="">
        <div className=" space-y-3 flex flex-col lg:flex-row items-center lg:items-center lg:justify-between">
          <div>
            <div className=" flex flex-col lg:flex-row  items-center lg:gap-3">
              <div className={`flex items-center  gap-2 `}>
                <Image src={logo} alt="edward_logo" />
                <span className={` text-base  font-bold `}>Edward</span>
              </div>
              <p className=" hidden lg:block">Ornelasedward@rocketmail.com</p>
            </div>
            <h6 className=" text-center lg:text-left text-base text-white ">
              Full Stack Developer and Content Strategist
            </h6>
            <p className=" text-center lg:hidden">
              Ornelasedward@rocketmail.com
            </p>
          </div>
          <div>
            <h3 className="  text-center lg:text-left">Media</h3>
            <ul className="s pt-2 flex items-center gap-3">
              <li>
                <Link href={'/'} target="_blank">
                  <Image src={github} alt="github" />
                </Link>
              </li>
              <li>
                <Link href={'/'} target="_blank">
                  <Image src={linkedin} alt="github" />
                </Link>
              </li>
              <li>
                <Link href={'/'} target="_blank">
                  <Image src={twitter} alt="github" />
                </Link>
              </li>
              <li>
                <Link href={'/'} target="_blank">
                  <TfiYoutube className=" text-gray" size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className=" py-6 text-left lg:text-center ">© Copyright 2023.</p>
      </Container>
    </footer>
  );
};

export default Footer;
