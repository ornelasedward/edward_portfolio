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
                Based in Dallas, Texas, I&apos;m a full-stack developer and
                content strategist. My journey began 7 years ago while honing
                content strategy, and blending it with my affinity for
                cryptocurrency. This path has offered me the space to navigate
                life, explore emerging trends, and discover my passion for
                development. Transitioning into the tech sphere,
              </p>
              <p>
                I&apos;ve spent the past 2 years immersing myself in the world
                of development. The blend of these skills allows me to build
                robust, interactive websites from scratch and elevate them into
                dynamic user-centric experiences.
              </p>
              <p>
                Currently pursuing a Bachelor&apos;s in ICT with a cybersecurity
                focus, I&apos;m set to graduate in May 2025. I consistently aim
                to implement the latest technologies and security best practices
                in every project I undertake.
              </p>
            </div>
            <Button name="Read more ->" type="primary" />
          </div>
          <div className=" relative ">
            <Image
              className=" relative z-20"
              src={about_me_home_image}
              alt="tarif_al_hasan"
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
