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
              <p className=" hidden lg:block">ornelasedward@rocketmail.com</p>
            </div>
            <h6 className=" text-center lg:text-left text-base text-white ">
            full stack engineer and technical leader,
            </h6>
            <p className=" text-center lg:hidden">
              ornelasedward@rocketmail.com
            </p>
          </div>
          <div>
            <h3 className="  text-center lg:text-left">Media</h3>
            <ul className="s pt-2 flex items-center gap-3">
              <li>
                <Link href={'https://github.com/ornelasedward'} target="_blank">
                  <Image src={github} alt="github" />
                </Link>
              </li>
              <li>
                <Link href={'https://www.linkedin.com/in/edward-ornelas-681b52131/'} target="_blank">
                  <Image src={linkedin} alt="github" />
                </Link>
              </li>
              <li>
                <Link href={'https://x.com/_THECRYPTODEV'} target="_blank">
                  <Image src={twitter} alt="github" />
                </Link>
              </li>
              <li>
                <Link href={'https://www.youtube.com/@EdwardOrnelas'} target="_blank">
                  <TfiYoutube className=" text-gray" size={25} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <p className=" py-6 text-left lg:text-center "></p>
      </Container>
    </footer>
  );
};

export default Footer;
