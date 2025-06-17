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
  Based in Dallas, Texas, I&apos;m a full-stack engineer and technical leader specializing in crypto, healthcare, and edtech platforms. My journey began at the intersection of content strategy and emerging tech, but quickly evolved as I led engineering teams and launched high-impact products for fast-growth startups and complex organizations.
</p>
<p>
  I&apos;ve architected and scaled platforms like BB Terminal (crypto analytics suite), Telos Health (modular healthcare platform), and BB Academy (education CMS), driving projects from initial concept to production deployment. I&apos;m passionate about building robust systems end-to-end, leading teams, and applying the latest in cloud, security, and modern frameworks to deliver user-driven experiences.
</p>
<p>
  I hold a Bachelor&apos;s in ICT with a concentration in cybersecurity, and I consistently bring technical depth, product vision, and a bias for action to every project—always pushing for best practices, strong security, and future-ready solutions.
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
