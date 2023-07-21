import React from 'react';

import Image from 'next/image';
import { a1, heroImage } from '@/assets';
import Button from '@/components/common/Button';
import Container from '@/components/Container';

const Hero = () => {
  return (
    <div>
      <Container>
        <div className=" overflow-hidden flex flex-col gap-3 lg:gap-0 lg:flex-row">
          <div className=" basis-[60%] ">
            <div className="space-y-3 lg:pt-[94px]">
              <h2>
                I am a{' '}
                <span className=" text-primary">full stack developer </span>
                and <span className=" text-primary">content strategist.</span>
              </h2>
              <p>
                I blend the power of tech with the insight of{' '}
                <br className=" hidden lg:block" /> social strategy.
              </p>
              <div>
                <Button link="contact" name="Contact me" />
              </div>
            </div>
          </div>
          <div className=" basis-[40%] relative">
            <div>
              <Image
                className=" w-full  h-full object-cover"
                src={heroImage}
                alt="hero_image"
              />
              <div className=" border border-gray flex space-x-2 items-center p-3">
                <div>
                  <div className=" w-4 h-4  bg-primary"></div>
                </div>
                <p className=" leading-5">
                  Currently working on making <br />
                  <span className="text-white font-semibold">
                    BecauseBitcoin
                  </span>{' '}
                  kind of cool
                </p>
              </div>
            </div>
            <div className=" hidden lg:block absolute top-[120px] left-[-57px]">
              <Image src={a1} alt="a" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
