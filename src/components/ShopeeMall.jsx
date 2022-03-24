import React from "react";

const ShopeeMall = ({ shopeeMall }) => {
  return (
    <div>
      <img
        src={shopeeMall.image}
        alt={shopeeMall.name}
        className="cursor-pointer"
      />
      <li className="ml-[40px] cursor-pointer">{shopeeMall.name}</li>
    </div>
  );
};

export default ShopeeMall;
