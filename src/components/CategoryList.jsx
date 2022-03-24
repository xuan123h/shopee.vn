import React from "react";
import Category from "./Category";

const CategoryList = ({ categoryList }) => {
  return (
    <ul className="w-[1260px] h-[302px] flex items-center flex-wrap mx-auto absolute mt-[70px] ml-[6px]">
      {categoryList.map((category) => (
        <li
          key={category.id}
          className="w-[118px] h-[149px] border border-white hover:shadow-lg ml-1"
        >
          <Category category={category} />
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
