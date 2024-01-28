import React from "react";

const SkillCard = ({ skillName, skillIcon }) => {
  const IconComponent = skillIcon;
  return (
    <div className="p-10 bg-[#090537] flex items-center flex-col justify-center rounded-2xl ">
      <div className="mb-2">{IconComponent && <IconComponent size={48} />}</div>
      {/* <h4 className="text-[17px] font-medium text-[#B6EADA] uppercase mb-1">
        {skillName}
      </h4>
     */}
    </div>
  );
};

export default SkillCard;
