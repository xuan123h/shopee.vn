import React from "react";
import Information from "./Information";

const InformationList = ({ informationList }) => {
  return (
    <ul className="w-[150px] h-[67px] flex items-center absolute top-[480px] left-[360px]">
      {informationList.map((information) => (
        <li key={information.id} className="ml-[10px]">
          <Information information={information} />
        </li>
      ))}
    </ul>
  );
};

export default InformationList;
