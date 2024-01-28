import React from "react";
import SkillCard from "./SkillCard";

import {
  SiTailwindcss,
  SiExpress,
  SiRedux,
  SiTypescript,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMongodb,
  SiSocketdotio,
  SiMysql,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      icon: SiHtml5,
      name: "HTML",
      level: "Experienced",
    },
    {
      id: 2,
      icon: SiCss3,
      name: "CSS",
      level: "Experienced",
    },
    {
      id: 3,
      icon: SiJavascript,
      name: "Javascript",
      level: "Experienced",
    },
    {
      id: 4,
      icon: SiReact,
      name: "ReactJS",
      level: "Experienced",
    },
    {
      id: 5,
      icon: SiTailwindcss,
      name: "Tailwindcss",
      level: "Experienced",
    },
    {
      id: 7,
      icon: SiExpress,
      name: "ExpressJS",
      level: "Experienced",
    },
    {
      id: 8,
      icon: SiRedux,
      name: "Redux",
      level: "Experienced",
    },
    {
      id: 9,
      icon: SiTypescript,
      name: "TypeScript",
      level: "Experienced",
    },
    {
      id: 10,
      icon: SiMongodb,
      name: "MongoDB",
      level: "Experienced",
    },
    {
      id: 11,
      icon: SiSocketdotio,
      name: "Socket.io",
      level: "Experienced",
    },
    {
      id: 12,
      icon: SiNodedotjs,
      name: "NodeJS",
      level: "Experienced",
    },
    {
      id: 13,
      icon: SiMysql,
      name: "MYSQL",
      level: "Experienced",
    },
  ];
  return (
    <div id="skills" className="w-full px-5 md:px-20 mb-[140px]">
      <h3 className="font-semibold text-2xl mb-4">My Skills</h3>
      {/* Skills Container */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8 ">
        {skillData.map((skill) => (
          <SkillCard
            key={skill.id}
            skillName={skill.name}
            skillIcon={skill.icon}
            skillLevel={skill.level}
          />
        ))}
      </div>
    </div>
  );
};

export default Skills;
