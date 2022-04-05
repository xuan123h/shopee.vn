import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const NavbarShopeeMall = () => {
  // handle Cart Shopee
  const state = useSelector((state) => state.handleCart);
  return (
    <>
      <div className="text-white absolute top-[0px] flex items-center ml-[256px] mt-[60px]">
        <div className="flex items-center ml-[160px]">
          <img
            src="https://madupramuka.co.id/wp-content/uploads/2020/07/Shopee-Logo-Fix.png"
            alt=""
            className="w-[56px] h-[40px] object-cover"
          />
          <span className="w-[2px] h-[30px] ml-[10px]"> | </span>
          <li className="ml-[10px] text-[24px]"> Shopee Mall </li>
        </div>
        <div className="flex items-center absolute left-[550px]">
          <div className="w-[520px] h-[40px]">
            <input
              type="text"
              placeholder="Tìm trong Shopee Mall"
              className=" bg-[#FFFFFF] w-[484px] h-[34px] pl-2 font-semibold outline-none focus:border focus:border-green-600 text-purple-500"
            />
            <span className="w-[50px] h-[30px] bg-[#D0011B] text-white absolute left-[430px] flex items-center justify-center top-[2px]">
              <i class="bx bx-search-alt-2"></i>
            </span>
          </div>
          <span className="w-[26px] h-[26px] text-white text-[30px] absolute top-[0px] left-[600px]">
            <Link to="/cart">
              <i class="bx bx-cart-alt"></i>
            </Link>
            <span className="absolute top-0 text-[22px] w-[35px] h-[35px] left-[40px] p-2 bg-orange-300 rounded-full flex items-center justify-center">
              {" "}
              {state.length}{" "}
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default NavbarShopeeMall;
