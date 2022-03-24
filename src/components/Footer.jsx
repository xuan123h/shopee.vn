import React from "react";
import FooterTwo from "./FooterTwo";
import FooterOne from "./FooterOne";
const Footer = () => {
  return (
    <>
      <div className="bg-white mx-auto mt-[270px] h-[1499px] border-4 border-t-red-700 list-none">
        <FooterOne />
      </div>
      <div>
        <FooterTwo />
      </div>
    </>
  );
};

export default Footer;
