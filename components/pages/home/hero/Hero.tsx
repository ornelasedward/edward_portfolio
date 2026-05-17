import React from 'react';

import Image from 'next/image';
import { a1, heroImage } from '@/assets';
import Button from '@/components/common/Button';
import Container from '@/components/Container';
import { FaGithub, FaYoutube } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

const Hero = () => {
  return (
    <div id="hero" className="scroll-mt-28 pt-16 pb-10 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-14">
      <Container>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch lg:gap-16 xl:gap-20">
          <div className="min-w-0 space-y-6 sm:space-y-8">
            <h1 className="text-[2.25rem] font-semibold leading-[1.08] tracking-[-0.02em] text-white sm:text-[2.75rem] lg:text-[2.75rem] xl:text-[3rem]">
              <span className="lg:hidden">
                <span className="block">I build and ship</span>
                <span className="block">like a startup,</span>
                <span className="block text-primary">but scale like</span>
                <span className="block text-primary">an enterprise.</span>
              </span>
              <span className="hidden lg:contents">
                <span className="block whitespace-nowrap">I build and ship like</span>
                <span className="block whitespace-nowrap">a startup, but</span>
                <span className="block whitespace-nowrap text-primary">
                  scale like an enterprise.
                </span>
              </span>
            </h1>
            <p className="text-base leading-relaxed text-gray sm:text-lg sm:leading-8">
              AI-native full stack engineer and founding builder shipping complete products end to
              end. Backend, frontend, AI systems, security, and infrastructure—built with modern
              tooling and shipped live in production from day&nbsp;one.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Button link="contact" name="Contact me" icon={<MdEmail size={20} />} />
              <Button
                link="https://github.com/ornelasedward"
                name="Github"
                icon={<FaGithub size={20} />}
                target="_blank"
              />
              <Button
                link="https://www.youtube.com/@edward-ornelas"
                name="Youtube"
                icon={<FaYoutube size={20} />}
                target="_blank"
              />
            </div>
          </div>
          <div className="relative min-w-0 w-full lg:max-w-[95%] lg:justify-self-end lg:self-stretch lg:min-h-0 lg:overflow-visible">
            <div
              aria-hidden
              className="pointer-events-none absolute -left-14 top-[120px] bottom-0 right-0 z-0 hidden overflow-hidden lg:block xl:-left-16"
            >
              <Image src={a1} alt="" className="h-auto w-auto max-w-none" />
            </div>
            <div className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-0">
              <Image
                fill
                src={heroImage}
                alt="hero_image"
                className="z-10 object-cover object-top grayscale"
                sizes="(min-width: 1024px) 42vw, 100vw"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
