import React from "react";

const Information = ({ information }) => {
  return (
    <div className="cursor-pointer">
      <img
        src={information.image}
        alt={information.name}
        className="w-[45px] h-[45px] ml-[20px] hover:-translate-y-1 transition-all"
      />
      <h3 className="w-[138px] h-[14px] text-[#222222] text-[13px] mt-[8px] font-semibold">
        {information.name}
      </h3>
    </div>
  );
};

export default Information;
