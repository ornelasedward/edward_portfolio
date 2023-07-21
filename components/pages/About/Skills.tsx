import React from 'react';
import Languages from '../home/skills/Languages';
import Database from '../home/skills/Database';
import Frameworks from '../home/skills/Frameworks';
import OtherTools from '../home/skills/OtherTools';

const Skills = () => {
  return (
    <div>
      <h2>
        <span className=" text-primary">#</span>skills
      </h2>
      <div className=" gap-5 pt-10 hidden md:flex flex-shrink  justify-between flex-wrap">
        <div>
          <Languages />
        </div>
        <div>
          <Database />
        </div>
        <div>
          <Frameworks />
        </div>
        <div>
          <OtherTools />
        </div>
      </div>
      <div className=" flex pt-5  gap-4 md:hidden">
        <div className=" space-y-4">
          <Frameworks />
          <Database />
        </div>
        <div className=" space-y-4">
          <Languages />
          <OtherTools />
        </div>
      </div>
    </div>
  );
};

export default Skills;
