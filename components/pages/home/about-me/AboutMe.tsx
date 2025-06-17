import { about_me_home_image, dots, dots2, topRefL, topRegR } from "@/assets";
import Container from "@/components/Container";
import Button from "@/components/common/Button";
import Image from "next/image";
import React from "react";

const AboutMe = () => {
  return (
    <section className=" relative">
      <Container classes="relative z-30">
        <div>
          <div className=" flex items-center w-full">
            <h2>
              <span className=" text-primary">#</span>about-me
            </h2>
            <div className=" h-[1px] w-[30%] sm:w-[70px] md:w-[40%] bg-primary"></div>
          </div>
        </div>
        <div className=" w-full flex flex-col-reverse lg:items-center  lg:flex-row gap-10">
          <div className=" basis-1/2  space-y-4 ">
            <div className="space-y-3 pb-4">
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
            <Button name="Read more ->" type="primary" />
          </div>
          <div className=" relative ">
            <Image
              className=" relative z-20 grayscale"
              src={about_me_home_image}
              alt="Edward Ornelas"
            />
            <div className=" absolute left-[20%] top-9">
              <Image alt="dots" src={dots} />
            </div>
            <div className=" absolute left-[75%] top-[55%]">
              <Image alt="dots" src={dots} />
            </div>
          </div>
        </div>
      </Container>
      <div className=" -z-10 absolute  right-0 top-1/2">
        <Image src={dots2} alt="dots2" />
      </div>
      <div className=" -z-10 absolute  left-0 top-[20%]">
        <Image src={topRefL} alt="dots2" />
      </div>
    </section>
  );
};

export default AboutMe;
