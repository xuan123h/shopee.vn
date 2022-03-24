import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

// Hover
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}));

const Navbar = () => {
  // handle Cart Shopee
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="h-[135px] color shadow-lg">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="https://www.takraonline.com/App_Themes/TakraOnlineWebsite/Images/web2019/background/shopee/img_logo_white.png"
            alt=""
            className="w-[200px] h-[70px]  inline text-[14px] left-[220px] object-cover absolute top-[78px] rounded-[20px] "
          />
        </Link>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Hoàn xu 50% - 16.3 SHOPEEPAY DAY"
            className="w-[984px] h-[49px] bg-[#FFFFFF] absolute left-[500px] top-[80px] pl-2 font-semibold outline-none text-[20px] rounded-md"
          />
          <span className="w-[60px] h-[36px] bg-[#FB5533] pl-3 pr-3 absolute left-[1420px] top-[87.5px]">
            <i class="bx bx-search-alt-2 one"></i>
          </span>
        </div>
        <span className="w-[26px] h-[26px] right-[250px] absolute top-[80px] text-[40px] text-white">
          <Link to="/cart">
            <i class="bx bx-cart"></i>
          </Link>
          <span className="absolute top-[0px] text-[23px] left-[44px] p-2 bg-orange-300 rounded-full h-[35px] w-[35px] flex items-center justify-center">
            {" "}
            {state.length}{" "}
          </span>
        </span>
      </div>
      <div className="flex items-center text-[#FFFFFFE6] text-[15px] absolute top-[140px] left-[500px] list-none font-semibold">
        <li className="cursor-pointer"> Dép </li>
        <li className="ml-[20px] cursor-pointer"> Váy </li>
        <li className="ml-[20px] cursor-pointer"> Túi Xách Nữ </li>
        <li className="ml-[20px] cursor-pointer"> Áo Khoác </li>
        <li className="ml-[20px] cursor-pointer"> Áo Phông </li>
        <li className="ml-[20px] cursor-pointer"> Áo Croptop </li>
        <li className="ml-[20px] cursor-pointer"> Áo Thun </li>
        <li className="ml-[20px] cursor-pointer"> Chân Váy </li>
      </div>
    </div>
  );
};

export default Navbar;
