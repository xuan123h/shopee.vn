import React from "react";
import SearchImportant from "./SearchImportant";

const SearchImportantList = ({ searchImportantList }) => {
  return (
    <ul className="flex items-center mt-[44px] absolute">
      {searchImportantList.map((searchImportant) => (
        <li key={searchImportant.id} className="w-[200px] h-[290px] ml-[8px]">
          <SearchImportant searchImportant={searchImportant} />
        </li>
      ))}
    </ul>
  );
};

export default SearchImportantList;
