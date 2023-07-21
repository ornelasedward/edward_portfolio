import { dots2, dots3, edward, rl, topRegR } from '@/assets';
import Container from '@/components/Container';
import Image from 'next/image';
import React from 'react';
import Skills from './Skills';
import FunFacts from './FunFacts';

const AboutPage = () => {
  return (
    <section className=" relative">
      <Container classes=" space-y-10 lg:space-y-16">
        <div className=" top_route">
          <h2>
            <span className="text-primary">/</span>about-me
          </h2>
          <span className="text-base text-white">Who am i?</span>
        </div>
        <div className="  flex flex-col-reverse lg:flex-row lg:items-center gap-6 lg:gap-10 ">
          <div className="space-y-3 basis-[60%]">
            <p>
              Based in Dallas, Texas, I&apos;m a full-stack developer and
              content strategist. My journey began 7 years ago while honing
              content strategy, and blending it with my affinity for
              cryptocurrency. This path has offered me the space to navigate
              life, explore emerging trends, and discover my passion for
              development.
            </p>
            <p>
              Transitioning into the tech sphere, I&apos;ve spent the past 2
              years immersing myself in the world of development. The blend of
              these skills allows me to build robust, interactive websites from
              scratch and elevate them into dynamic user-centric experiences.
            </p>
            <p>
              Currently pursuing a Bachelor&apos;s in ICT with a cybersecurity
              focus, I&apos;m set to graduate in May 2025. I consistently aim to
              implement the latest technologies and security best practices in
              every project I undertake.
            </p>
          </div>
          <div className=" basis-[40%] ">
            <Image
              className="s w-full h-full object-cover"
              src={edward}
              alt="hero"
            />
          </div>
        </div>

        {/* Skills */}
        <Skills />
        {/* Fun fact */}
        <FunFacts />
      </Container>
      <div className=" hidden lg:block absolute left-0 top-[80%]">
        <Image src={rl} alt="rl" />
      </div>
      <div className=" hidden lg:block absolute right-0 top-[85%]">
        <Image src={dots2} alt="rl" />
      </div>
      <div className=" hidden lg:block absolute right-0 top-[45%]">
        <Image src={dots3} alt="rl" />
      </div>
      <div className=" hidden lg:block absolute right-0 top-[10%]">
        <Image src={topRegR} alt="rl" />
      </div>
    </section>
  );
};

export default AboutPage;
