import React from "react";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, desc, thumbnail }) => {
  return (
    <div className="bg-[#090537] w-full p-6 rounded-2xl">
      {/* Project Thumbnail */}
      <div className="w-full h-64 overflow-hidden rounded-2xl bg-slate-200 mb-3">
        <img
          className="w-full h-full object-cover hover:scale-150 transition duration-700"
          src={thumbnail}
          alt={title}
        />
      </div>
      <h3 className="w-full text-lg font-semibold mb-4">{title}</h3>
      <p className="w-full text-[#5B8FB9] leading-[26px] text-sm mb-4">
        {desc}
      </p>
      <div className="flex items-center gap-5">
        <a
          href="#"
          className="flex gap-2 items-center justify-center py-3 px-6 bg-[#B6EADA] text-[#03001C] font-bold text-sm rounded-lg w-1/2"
        >
          <FaExternalLinkAlt /> Preview
        </a>
        <a
          href="#"
          className="flex gap-2 items-center justify-center py-3 px-6  text-[#B6EADA] font-bold text-sm w-1/2 hover:underline"
        >
          Code
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
