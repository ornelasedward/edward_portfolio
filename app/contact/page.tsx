import Container from '@/components/Container';
import AllMedia from '@/components/pages/contact/AllMedia';
import ContactMeHere from '@/components/pages/contact/ContactMeHere';

import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { dots2, dots3, topRegR } from '@/assets';

const Inquire = dynamic(() => import('@/components/pages/contact/Form'), {
  ssr: false,
});
const Contacts = () => {
  return (
    <div className="relative">
      <Container classes=" space-y-10 lg:space-y-16">
        <div className=" top_route">
          <h2>
            <span className="text-primary">/</span>contacts
          </h2>
          <span className="text-base text-white">Who am i?</span>
        </div>
        <div className=" pt-10 flex  gap-4  flex-col lg:flex-row">
          <p className=" lg:max-w-[461px]">
            I’m interested in fulltime and contract opportunities. However, if
            you have other request or question, don’t hesitate to contact me
          </p>
          <ContactMeHere />
        </div>
        <AllMedia />
        <Inquire />
      </Container>
      <div className=" hidden lg:block absolute right-0 top-[80%]">
        <Image src={dots3} alt="dots2" />
      </div>
      <div className=" hidden lg:block absolute right-0 top-[25%]">
        <Image src={topRegR} alt="dots2" />
      </div>
    </div>
  );
};

export default Contacts;
