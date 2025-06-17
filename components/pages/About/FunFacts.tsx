import { fact } from '@/assets';
import Image from 'next/image';
import React from 'react';

const FunFacts = () => {
  return (
    <div className="">
      <h2>
        <span className=" text-primary">#</span>my-fun-facts
      </h2>
      <div className=" pt-5 relative md:pt-10 grid gap-3">
        <div className="flex   flex-wrap lg:flex-nowrap   gap-3 ">
          <div className=" p-2 w-full border border-gray">
            <p>
              I would spend most of my Summer’s in{' '}
              <span className=" text-white">Mexico</span> as a kid
            </p>
          </div>
          <div className=" p-2 border w-full border-gray">
            <p>
              I am Spanish native speaking, so I’m{' '}
              <span className=" text-white">bilingual</span>
            </p>
          </div>
        </div>
        <div className="flex   flex-wrap lg:flex-nowrap   gap-3 ">
          <div className=" p-2 border  border-gray">
            <p>
              I like <span className=" text-white">Italian food</span> or any
              type of <span className=" text-white">pasta</span>
            </p>
          </div>
          <div className=" p-2 border  border-gray">
            <p>
              I explored <span className=" text-white">Singapore</span>,
              <span className=" text-white">Indonesia </span> and
              <span className=" text-white"> Hong Kong</span>
            </p>
          </div>
        </div>
        <div className="flex   flex-wrap lg:flex-nowrap   gap-3 ">
          <div className=" p-2 border  border-gray">
            <p>
              My favorite movie is{' '}
              <span className=" text-white">Anything Christopher Nolan or Quentin Tarantino</span>
            </p>
          </div>
          <div className=" p-2 border  border-gray">
            <p>Graduated from <span className=" text-white">New Mexico State University</span></p>
          </div>
        </div>
        <div className="flex ">
          <div className="  w-auto p-2 border  border-gray">
            <p>
              I was once <span className=" text-white">dragged </span>by a baby bull
            </p>
          </div>
        </div>
        <div className=" hidden lg:block absolute right-0 top-[40%]">
          <Image src={fact} alt="facts" />
        </div>
      </div>
    </div>
  );
};

export default FunFacts;
