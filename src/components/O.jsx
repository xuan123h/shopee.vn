import React from "react";

const O = ({ o }) => {
  return (
    <div>
      <img
        src={o.image}
        alt={o.name}
        className="w-[186px] h-[186px] object-cover"
      />
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
        <p className="w-[71px] h-[14px] text-[#0000008A] text-[12px]">
          {" "}
          Đã bán {o.total}{" "}
        </p>
        <li className="w-[41px] h-[34px] text-[#0000008A] text-[12px] for rounded-sm">
          <p className="ml-[11px] text-white font-bold">{o.down}</p>
          <p className="ml-[5px] font-semibold">GIẢM</p>
        </li>
      </div>
    </div>
  );
};

export default O;
