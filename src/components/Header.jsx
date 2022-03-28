import React from "react";
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
const Header = () => {
  return (
    <div className="h-[34px] list-none flex items-center color font-light">
      <div className="flex items-center absolute left-[220px]">
        <li className="w-[185px] h-[24px] text-[#ffffff] text-[18px] font-semibold leading-4 p-1 cursor-pointer">
          {" "}
          Kênh Người Bán{" "}
        </li>
        <span className="text-white absolute left-[160px]"> | </span>
        <li className="w-[278px] h-[24px] text-[#ffffff] flex text-[18px] font-semibold leading-4 p-1 cursor-pointer">
          {" "}
          Trở thành Người bán Shopee{" "}
        </li>
        <span className="text-white absolute left-[450px]"> | </span>
        <HtmlTooltip
          title={
            <React.Fragment>
              <div className="w-[184px] h-[245px] bg-[#ffffff] rounded-sm text-[#ffffff] text-[12px] leading-4 p-[2px]">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/d91264e165ed6facc6178994d5afae79.png"
                  alt=""
                  className="w-[180px] h-[180px] inline"
                />
                <div className="w-[180px] h-[56px] text-[#ffffff] flex items-center flex-wrap text-[14px] justify-between left-4 pl-3 pr-3 pb-1 pt-0">
                  <div>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/39f189e19764dab688d3850742f13718.png"
                      alt=""
                      className="w-[70px] h-[18px]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/f4f5426ce757aea491dce94201560583.png"
                      alt=""
                      className="w-[70px] h-[18px]"
                    />
                  </div>
                  <div>
                    <img
                      src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg//assets/1ae215920a31f2fc75b00d4ee9ae8551.png"
                      alt=""
                      className="w-[70px] h-[18px]"
                    />
                  </div>
                </div>
              </div>
            </React.Fragment>
          }
        >
          <li className="w-[118px] h-[24px] text-[#ffffff] text-[18px] font-semibold leading-4 p-1 ml-2 cursor-pointer">
            {" "}
            Tải ứng dụng{" "}
          </li>
        </HtmlTooltip>
        <span className="text-white ml-5"> | </span>
        <li className="w-[74px] h-[24px] text-[#ffffff] flex text-[18px] p-1 font-semibold leading-4 ml-5 cursor-pointer">
          {" "}
          Kết nối{" "}
        </li>
        <span className="text-[22px] text-white mt-2 cursor-pointer">
          <i class="bx bxl-facebook-circle"></i>
        </span>
        <span className="text-[22px] text-white mt-2 ml-1 cursor-pointer">
          <i class="bx bxl-instagram"></i>
        </span>
      </div>
      <div className="flex items-center absolute left-[1160px]">
        <div className="flex items-center w-[143px] h-[18px] text-[#ffffff] text-[18px] leading-4 text-left">
          <span className="text-[22px] mt-1 cursor-pointer">
            <i class="bx bx-bell"></i>
          </span>
          <HtmlTooltip
            title={
              <React.Fragment>
                <div className="w-[404px] h-[480px] bg-[#ffffff] rounded-sm text-[#ffffff] text-[12px] leading-4 p-[2px]">
                  <h2 className="z-10 text-purple-500 text-center text-[14px]mt-4 absolute font-semibold">
                    {" "}
                    Thông Báo Mới Nhận{" "}
                  </h2>
                  <div>
                    <div className="flex items-center list-none mt-10">
                      <img
                        src="https://i.pinimg.com/originals/bc/ab/a1/bcaba1c4e5e9a19f206c05dc6671ab19.jpg"
                        alt=""
                        className="w-[40px] h-[40px] text-left"
                      />
                      <div className="mt-4 absolute ml-[60px]">
                        <li className="w-[325px] h-[17px] text-[#000000] text-[14px] leading-4 text-left">
                          {" "}
                          Bạn có voucher sắp hết hạn!{" "}
                        </li>
                        <p className="w-[325px] h-[45px] text-[#000000] text-[12px] leading-3 text-left">
                          ⏰ nguyenvanxuankk ơi! Shopee dỗi đó! 🛒 Mã Freeship
                          sắp hết hạn! 🎁️ Hàng loạt sản phẩm Flash Sale đang
                          bùng cháy! 😍 Mua ngay kẻo lỡ nè!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center list-none mt-6">
                      <img
                        src="https://i.ytimg.com/vi/bTxfQqvfVro/maxresdefault.jpg"
                        alt=""
                        className="w-[40px] h-[40px] text-left"
                      />
                      <div className="mt-4 absolute ml-[60px]">
                        <li className="w-[325px] h-[17px] text-[#000000] text-[14px] leading-4 text-left">
                          Bạn chăm bé, Shopee "chăm" bạn
                        </li>
                        <p className="w-[325px] h-[45px] text-[#000000] text-[12px] leading-3 text-left">
                          🎉 Loạt Deal xịn đang chờ 💥 Mách bạn cách bảo vệ bé
                          🛒 Mua ngay!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center list-none mt-6">
                      <img
                        src="http://anhnendep.net/wp-content/uploads/2016/07/hinh-anh-dep-ve-cuoc-song-10.jpg"
                        alt=""
                        className="w-[40px] h-[40px] text-left"
                      />
                      <div className="mt-4 absolute ml-[60px]">
                        <li className="w-[325px] h-[17px] text-[#000000] text-[14px] leading-4 text-left">
                          Tặng Văn Xuân quà đồng giá 1K nè!
                        </li>
                        <p className="w-[325px] h-[45px] text-[#000000] text-[12px] leading-3 text-left">
                          😍 Thêm Voucher 25K từ 0Đ 🚛 Lại có cả Freeship lên
                          tới 40K 🛒 Săn ngay hôm nay!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center list-none mt-6">
                      <img
                        src="https://visabaongoc.com/wp-content/uploads/2018/02/nhung-hinh-anh-dep-thien-nhien-cua-que-huong-viet-nam-1.jpg"
                        alt=""
                        className="w-[40px] h-[40px] text-left"
                      />
                      <div className="mt-4 absolute ml-[60px]">
                        <li className="w-[325px] h-[17px] text-[#000000] text-[14px] leading-4 text-left">
                          Ét o ét! 9H! Hàng hiệu giảm sâu đến 50%
                        </li>
                        <p className="w-[325px] h-[45px] text-[#000000] text-[12px] leading-3 text-left">
                          💖 Mua kèm Deal 0Đ siêu lời 🚛 Thêm mã Freeship mời
                          bạn mua nha!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center list-none mt-6">
                      <img
                        src="https://tse2.mm.bing.net/th?id=OIP.zszi8kDJG8-LHETcTi_3iwHaEK&pid=Api&P=0&w=378&h=212"
                        alt=""
                        className="w-[40px] h-[40px] text-left"
                      />
                      <div className="mt-4 absolute ml-[60px]">
                        <li className="w-[325px] h-[17px] text-[#000000] text-[14px] leading-4 text-left">
                          Voucher 25K dành riêng cho Văn Xuân
                        </li>
                        <p className="w-[325px] h-[45px] text-[#000000] text-[12px] leading-3 text-left">
                          😍 Deal gì cũng rẻ mua là freeship ️🎧 Tai nghe,
                          micro, sạc dự phòng giảm 50% 👉 Shopee ngay!
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center list-none mt-6">
                      <img
                        src="http://3.bp.blogspot.com/-2CwGUZmdt_E/UkVVBd1_hLI/AAAAAAAACkE/QUdHReFJSMw/s1600/hinh-anh-dep-anh+thien+nhien+dep-20.jpg"
                        alt=""
                        className="w-[40px] h-[40px] text-left"
                      />
                      <div className="mt-4 absolute ml-[60px]">
                        <li className="w-[325px] h-[17px] text-[#000000] text-[14px] leading-4 text-left">
                          Trời ơi! Mã "hót" đổ bộ giảm đến 100K
                        </li>
                        <p className="w-[325px] h-[45px] text-[#000000] text-[12px] leading-3 text-left">
                          😍 Săn thêm mã hoàn đến 40K Xu 💥 Chớp Deal sốc từ
                          144K ✨ Cùng hàng ngàn Deal nửa giá 🛍️️ Chốt đơn ngay!
                        </p>
                      </div>
                    </div>
                    <a
                      href=""
                      className="w-[380px] h-[40px] inline-flex items-center bg-[#fafafa] text-[#000000] text-[14px] justify-center leading-4 text-left absolute bottom-[20px]"
                    >
                      {" "}
                      Xem tất cả{" "}
                    </a>
                  </div>
                </div>
              </React.Fragment>
            }
          >
            <li className="text-[18px] font-semibold ml-2 cursor-pointer">
              Thông Báo
            </li>
          </HtmlTooltip>
        </div>
        <div className="flex items-center w-[100px] h-[16px] text-[#ffffff] text-[18px] leading-4 text-left">
          <span className="text-[22px] mt-1 cursor-pointer">
            <i class="bx bx-help-circle"></i>
          </span>
          <li className="text-[18px] font-semibold ml-2 cursor-pointer">
            {" "}
            Hỗ Trợ{" "}
          </li>
        </div>
        <div className="flex items-center w-[158px] h-[16px] text-[#ffffff] text-[18px] leading-4 text-left ml-2">
          <span className="text-[22px] mt-1 cursor-pointer">
            <i class="bx bx-globe"></i>
          </span>
          <HtmlTooltip
            title={
              <React.Fragment>
                <div className="w-[204px] h-[84px] bg-[#FFFFFF]">
                  <li className="w-[200px] h-[40px] text-[#ee4d2d] text-[14px] leading-5 p-[10px] text-left cursor-pointer">
                    {" "}
                    Tiếng Việt{" "}
                  </li>
                  <li className="w-[200px] h-[40px] text-[#ee4d2d] text-[14px] leading-5 p-[10px] text-left cursor-pointer">
                    {" "}
                    English{" "}
                  </li>
                </div>
              </React.Fragment>
            }
          >
            <li className="text-[18px] font-semibold ml-2 cursor-pointer">
              Tiếng Việt
            </li>
          </HtmlTooltip>
          <span className="text-[22px] mt-2 ml-1 cursor-pointer">
            <i class="bx bx-chevron-down"></i>
          </span>
        </div>
        <li className="text-[#ffffff] text-[18px] leading-4 font-semibold w-[70px] h-[18px] cursor-pointer">
          <Link to="/register"> Đăng Ký </Link>
        </li>
        <span className="text-white ml-4"> | </span>
        <li className="text-[#ffffff] text-[18px] leading-4 font-semibold w-[126px] h-[18px] ml-4 cursor-pointer">
          <Link to="/signup"> Đăng Nhập </Link>
        </li>
      </div>
    </div>
  );
};

export default Header;
