import React from "react";

const SearchImportant = ({ searchImportant }) => {
  return (
    <div>
      <img
        src={searchImportant.image}
        alt={searchImportant.name}
        className="w-[180px] h-[180px] object-cover"
      />
      <p className="w-[180px] h-[25px] text-[#FFFFFF] text-[14px] bg-[#00000042] flex items-center justify-center">
        {" "}
        {searchImportant.product}{" "}
      </p>
      <li className="w-[180px] h-[25px] text-[#555555] text-[18px] text-center mt-3">
        {searchImportant.name}
      </li>
    </div>
  );
};

export default SearchImportant;
