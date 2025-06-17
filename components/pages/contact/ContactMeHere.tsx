import { email, linkedin } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

const ContactMeHere = () => {
  return (
    <div className=" flex flex-col w-full lg:flex-row gap-3">
      {/*}
      <div className=" w-full">
        <div className=" w-full border border-gray p-2">
          <div className=" text-base te">Contact me here</div>
          <p>(575) 513-6238</p>
        </div>
      </div>
      {/*}*/}
      <div className=" w-full  border border-gray p-2 space-y-3">
        <h6>Message me here</h6>
        <ul className="s space-y-1">
          <a
            href="https://www.linkedin.com/in/edward-ornelas-681b52131/"
            target="_blank"
            className="s text-base flex text-gray items-center gap-2"
          >
            <Image src={linkedin} alt="email" />
            575-513-6238
          </a>
          <a className="s text-base flex text-gray items-center gap-2">
            <Image src={email} alt="emasil" />
            ornelasedward@rocketmail.com
          </a>
        </ul>
      </div>
    </div>
  );
};

export default ContactMeHere;
