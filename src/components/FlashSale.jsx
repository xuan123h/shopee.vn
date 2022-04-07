import React from "react";
import { Link } from "react-router-dom";

const FlashSale = ({ productsale }) => {
  return (
    <div>
      <div>
        <Link to={`/FlashSale/${productsale.id}`}>
          <img
            src={productsale.image}
            alt={productsale.name}
            className="w-[173px] h-[173px] object-cover"
          />
        </Link>
      </div>
      <span className="w-[97px] h-[24px] text-[#EE4D2D] text-[21.7px] ml-[22px] absolute mt-2 font-semibold">
        {new Intl.NumberFormat("de-DE", {
          style: "currency",
          currency: "VND",
        }).format(productsale.price01)}
      </span>
      <span className="absolute w-[55px] h-[42px] for text-[15px] rounded-sm top-[1120px] ml-[130px] rounded-b-[20px] rounded-t-lg">
        <b className="w-[45px] h-[18px] text-[#EE4D2D] text-[15px] ml-3">
          {productsale.down}
        </b>
        <br />
        <b className="w-[45px] h-[18px] text-[#FFFFFF] text-[12px] ml-3 absolute">
          {" "}
          GIẢM{" "}
        </b>
      </span>
      <div className="w-[160px] h-[20px] bg-red-400 mt-[50px] ml-1 rounded-full border-r-[20px] border">
        <p className="w-[156px] h-[15px] text-[#FFFFFF] flex items-center justify-center mt-[1px]">
          {" "}
          Đã bán {productsale.total}{" "}
        </p>
      </div>
    </div>
  );
};

export default FlashSale;
