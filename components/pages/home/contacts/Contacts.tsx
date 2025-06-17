import { discord, email } from '@/assets/icons';
import Container from '@/components/Container';
import Button from '@/components/common/Button';
import Image from 'next/image';
import React from 'react';

const Contacts = () => {
  return (
    <section className=" pt-10 lg:pt-16 ">
      <Container>
        <div>
          <div className=" flex   md:w-[70%]    items-center gap-2">
            <h2>
              <span className=" text-primary">#</span>contacts
            </h2>
            <div className=" h-[1px] w-[40px] sm:w-[70px] md:w-[40%] bg-primary"></div>
          </div>
          <div className=" w-full gap-6 xl:w-[80%] flex flex-col lg:flex-row  lg:items-center lg:justify-between">
            <div className=" space-y-8 lg:max-w-[506px]">
              <p className=" pt-6">
                I&apos;m open to roles in software engineering, technical leadership, or product-focused teams at innovative companies. For opportunities or collaborations, feel free to reach out directly.
              </p>
              <div className=" hidden lg:block">
                <Button name="Contact me ->" link="/contact" />
              </div>
            </div>
            <div>
              <div className="  border border-gray p-2 space-y-3">
                <h6>Message me here</h6>
                <ul className="s space-y-1">
                  <li className="s text-base flex text-gray items-center gap-2">
                    <Image src={discord} alt="email" />
                    575-513-6238
                  </li>
                  <li className="s text-base flex text-gray items-center gap-2">
                    <Image src={email} alt="emasil" />
                    ornelasedward@rocketmail.com
                  </li>
                </ul>
              </div>
            </div>
            <div className="  lg:hidden">
              <Button name="Contact me ->" link="/contact" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contacts;
