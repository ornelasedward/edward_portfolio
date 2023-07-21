import React from 'react';
import Container from '../../../Container';
import Image from 'next/image';
import { skillsDots } from '@/assets';
import Database from './Database';
import Languages from './Languages';
import Frameworks from './Frameworks';
import OtherTools from './OtherTools';

const Skills = () => {
  return (
    <section id="about_me" className=" py-10 lg:py-20">
      <Container>
        <div className=" flex   md:w-[70%]    items-center gap-2">
          <h2>
            <span className=" text-primary">#</span>skills
          </h2>
          <div className=" h-[1px] w-[30%] sm:w-[70px] md:w-[40%] bg-primary"></div>
        </div>
        <div className="s py-5 flex sm:flex-row flex-col gap-10 w-fulll lg:flex-row">
          <div className=" hidden sm:block lg:max-w-[369px]">
            <Image
              src={skillsDots}
              className="s block mx-auto"
              alt="skill_dots"
            />
          </div>

          <div className="  w-full flex flex-col md:flex-row gap-5 ">
            <Languages />
            <div className="s flex flex-col gap-5 w-full">
              <Database />
              <div className="grid gap-5 grid-cols-2">
                <OtherTools />
                <Frameworks />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
