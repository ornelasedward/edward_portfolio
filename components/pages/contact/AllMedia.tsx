import { github, linkedin, twitter } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { TfiYoutube } from 'react-icons/tfi';
const AllMedia = () => {
  return (
    <div>
      <h2>
        <span className=" text-primary">#</span>all-media
      </h2>
      <div className=" pt-5 space-y-3">
        <div className=" flex items-center gap-4">
          <Link
            href={'https://www.linkedin.com/in/edward-ornelas-681b52131/'}
            target="_blank"
            className=" flex items-center gap-0"
          >
            <Image src={linkedin} alt="linkedin" />
            <span className=" text-base text-gray">LinkedIn</span>
          </Link>
          <Link
            href={'https://www.github.com/tarifalhasan'}
            target="_blank"
            className=" flex items-center gap-0"
          >
            <Image src={github} alt="github" />
            <span className=" text-base text-gray">LinkedIn</span>
          </Link>
        </div>
        <div className=" flex items-center gap-4">
          <Link
            href={'https://www.linkedin.com/in/edward-ornelas-681b52131/'}
            target="_blank"
            className=" flex items-center gap-0"
          >
            <TfiYoutube size={20} className=" text-gray" />
            <span className=" text-base text-gray">YouTube</span>
          </Link>
          <Link
            href={'https://www.twitter.com/@THECRYPTODEV'}
            target="_blank"
            className=" flex items-center gap-0"
          >
            <Image src={twitter} alt="@THECRYPTODEV" />
            <span className=" text-base text-gray">@THECRYPTODEV</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllMedia;
