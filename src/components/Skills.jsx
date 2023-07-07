import React from "react";
import SkillCard from "./SkillCard";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaLaravel,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  const skillData = [
    {
      id: 1,
      icon: FaHtml5,
      name: "HTML",
      level: "Experienced",
    },
    {
      id: 2,
      icon: FaCss3Alt,
      name: "CSS",
      level: "Experienced",
    },
    {
      id: 3,
      icon: FaJsSquare,
      name: "Javascript",
      level: "Experienced",
    },
    {
      id: 4,
      icon: FaReact,
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
      id: 6,
      icon: FaLaravel,
      name: "Laravel",
      level: "Experienced",
    },
  ];
  return (
    <div id="skills" className="w-full px-5 md:px-20 mb-[140px]">
      <h3 className="font-semibold text-2xl mb-4">My Skills</h3>
      {/* Skills Container */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
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
