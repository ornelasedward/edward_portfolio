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
            <div className="space-y-3 lg:pt-[94px] max-w-[700px]">
              <h2>
              Building  <span className=" text-primary">Next-Gen Platforms</span> From First Commit to Scaled Launch
              </h2>
              <p>
              Full stack engineer and technical leader, driving products across crypto, healthcare, and edtech—specializing in scalable architecture, team leadership, and seamless user experiences.
              </p>
              <div className="pt-6">
                <Button link="contact" name="Contact me" />
              </div>
            </div>
          </div>
          <div className=" basis-[40%] relative">
            <div>
              <Image
                className="w-full h-full object-cover grayscale"
                src={heroImage}
                alt="hero_image"
              />
              <div className=" border border-gray flex space-x-2 items-center p-3">
                <div>
                  <div className=" w-4 h-4  bg-primary"></div>
                </div>
                <p className=" leading-5">
                  Currently working on 
                </p>
                <a
                    href="https://app.bbterminal.com/"
                    className="text-primary font-semibold underline hover:text-primary transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    BB Terminal
                  </a>
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
