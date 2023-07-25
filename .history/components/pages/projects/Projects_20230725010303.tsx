import { dots3, rl, topRefL, topRegR, BB1, BB2, TwitchClone } from "@/assets";
import Container from "@/components/Container";
import ProjectCard from "@/components/common/ProjectCard";
import { projectsData } from "@/constant";
import Image from "next/image";
import React from "react";

const AllProjects = () => {
  return (
    <section className=" relative">
      <Container classes=" space-y-9  ">
        <div className=" top_route">
          <h2>
            <span className="text-primary">/</span>projects
          </h2>
          <span className="text-base text-white">List of my projects</span>
        </div>
        <div className=" space-y-9 ">
          <h2>
            <span className=" text-primary">#</span>complete-apps
          </h2>
          <div className="  grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.complete.map((data, index) => (
              <ProjectCard
                key={index}
                name={data.name}
                descripetion={data.describetion}
                featureImage={data.features_iamge}
                liveLink={data.liveLink}
                github={data.github}
                tools={data.tools}
              />
            ))}
          </div>
        </div>
        <div className=" space-y-9">
          <h2>
            <span className=" text-primary">#</span>small-projects
          </h2>
          <div className=" grid  sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsData.smallProject.map((data, index) => (
              <ProjectCard
                key={index}
                name={data.name}
                descripetion={data.describetion}
                liveLink={data.liveLink}
                tools={data.tools}
              />
            ))}
          </div>
        </div>
      </Container>
      <div className=" hidden lg:block absolute right-0 top-[75%]">
        <Image src={dots3} alt="dots2" />
      </div>
      <div className=" hidden lg:block absolute right-0 top-[7%]">
        <Image src={topRegR} alt="dots2" />
      </div>
      <div className=" hidden lg:block absolute left-0 top-[65%]">
        <Image className=" max-w-[150px]" src={BB1} alt="dots2" />
      </div>
      <div className=" hidden lg:block absolute left-0 top-[95%]">
        <Image className=" max-w-[150px]" src={dots3} alt="dots2" />
      </div>
    </section>
  );
};

export default AllProjects;
