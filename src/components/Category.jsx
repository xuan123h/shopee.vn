import React from "react";
import Slider from "react-slick";
const Category = ({ category }) => {
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 2,
    swipeToSlide: true,
    // afterChange: function(index) {
    //   console.log(
    //     `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
    //   );
    // }
  };
  return (
    <div>
      <img
        src={category.image}
        alt={category.name}
        className="w-[83px] h-[87px] object-cover ml-[10px]"
      />
      <h3 className="w-[106px] h-[40px] text-[#000000CC] text-[14px] mt-[10px] mb-[10px] text-center">
        {category.name}
      </h3>
    </div>
  );
};

export default Category;
