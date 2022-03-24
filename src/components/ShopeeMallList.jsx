import React from "react";
import ShopeeMall from "./ShopeeMall";

const ShopeeMallList = ({ shopeeMallList }) => {
  return (
    <ul className="w-[800px] flex items-center flex-wrap ml-[60px] absolute top-[1620px]">
      {shopeeMallList.map((shopeeMall) => (
        <li key={shopeeMall.id} className="w-[180px] h-[216px] mt-[40px]">
          <ShopeeMall shopeeMall={shopeeMall} />
        </li>
      ))}
    </ul>
  );
};

export default ShopeeMallList;
