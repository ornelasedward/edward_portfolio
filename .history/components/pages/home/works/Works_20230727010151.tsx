"use client";

import React, { useState } from "react";
import Container from "../../../Container";

import { projectsData } from "@/constant";
import Button from "@/components/common/Button";
import ProjectCard from "@/components/common/ProjectCard";
import Image from "next/image";
import { dots2, dots3, topRegR } from "@/assets";

const Works = () => {
  return (
    <section id="works" className=" relative">
      <Container>
        <div className=" py-5 flex w-full  justify-between items-center">
          <div className=" flex   md:w-[70%]    items-center gap-2">
            <h2>
              <span className=" text-primary">#</span>projects
            </h2>
            <div className=" h-[1px] w-[40px] sm:w-[70px] md:w-[40%] bg-primary"></div>
          </div>
          <div>
            <Button name="View all" type="outline" icon="~~>" link="projects" />
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.complete.slice(0, 3).map((data) => (
            <ProjectCard
              key={data.name}
              name={data.name}
              descripetion={data.describetion}
              featureImage={data.features_iamge}
              liveLink={data.liveLink}
              github={data.github}
              tools={data.tools}
            />
          ))}
        </div>
      </Container>
      <div className=" absolute  left-0 top-[12%]">
        <Image src={dots3} alt="dots2" />
      </div>
      <div className=" absolute  right-0 top-[45%]">
        <Image src={topRegR} alt="dots2" />
      </div>
    </section>
  );
};

export default Works;
