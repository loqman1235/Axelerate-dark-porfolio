import React from "react";

const SkillCard = ({ skillName, skillLevel, skillIcon }) => {
  const IconComponent = skillIcon;
  return (
    <div className="p-4 bg-[#090537] flex items-center flex-col justify-center rounded-2xl px-6 py-6">
      <div className="mb-2">{IconComponent && <IconComponent size={48} />}</div>
      <h4 className="text-[17px] font-medium text-[#B6EADA] uppercase mb-1">
        {skillName}
      </h4>
      <p className="text-sm font-light text-[#5B8FB9]">{skillLevel}</p>
    </div>
  );
};

export default SkillCard;
