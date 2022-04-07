import React from "react";
import { Link } from "react-router-dom";

const O = ({ o }) => {
  return (
    <div>
      <Link to={`/product/${o.id}`}>
        <img
          src={o.image}
          alt={o.name}
          className="w-[186px] h-[186px] object-cover"
        />
      </Link>
      <h3 className="w-[166px] h-[28px] text-[#000000DE] text-[12px] mt-2 ml-0">
        {o.name.substring(0, 51)}...
      </h3>
      <div className="flex items-center mt-3 justify-between">
        <span className="w-[50px] h-[18px] text-[#EE4D2D] text-[16px]">
          {new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "VND",
          }).format(o.price01)}
        </span>
        <p className="w-[71px] h-[14px] text-[#0000008A] text-[12px] mt-2 ml-3 font-semibold text-purple-500">
          {" "}
          Đã bán {o.total}{" "}
        </p>
        <li className="w-[41px] h-[34px] text-[#0000008A] text-[12px] for rounded-sm rounded-b-3xl rounded-t-2xl">
          <p className="ml-[11px] text-white font-bold">{o.down}</p>
          <p className="ml-[8px] font-semibold text-[10px]">GIẢM</p>
        </li>
      </div>
    </div>
  );
};

export default O;
