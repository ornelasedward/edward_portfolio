import React from 'react';
import Container from '../../../Container';
import { Qoute } from '@/assets/icons';
import Image from 'next/image';
import { testimonialReg } from '@/assets';

const Testimonial = () => {
  return (
    <div className=" py-10 lg:py-16">
      <div className=" relative">
        <Container>
          <div className=" relative border  border-gray p-4">
            <h3>
              “Once An Idea Has Taken Hold Of The Brain, It’s Almost{' '}
              <br className=" hidden lg:block" /> Impossible To Eradicate.”
            </h3>
            <div className=" bg-primary-dark absolute top-[-10px] left-3">
              <Qoute />
            </div>
            <div className=" bg-primary-dark absolute z-50 bottom-[-10px] right-3">
              <Qoute />
            </div>
          </div>
          <div className="relative border ml-auto max-w-[80%] lg:max-w-[40%]  border-gray p-2">
            <h3 className="text-[1em] xl:text-[1.5em] ">
              -Dom Cobb (Leonardo DiCaprio)
            </h3>
          </div>
        </Container>
        <div className="  hidden 2xl:block absolute right-0 top-4">
          <Image width={91} height={91} src={testimonialReg} alt="sds" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
