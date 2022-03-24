import React from "react";
import FooterAuthentication from "./FooterAuthentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
// react-hook-form
const schema = yup
  .object()
  .shape({
    email: yup.string().required(),
    password: yup
      .string()
      .required()
      .max(12, "Must be less more 12 charaters number"),
  })
  .required();

const SignUp = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  return (
    <div>
      <div className="h-[84px] flex items-center list-none bg-[#FFFFFF]">
        <Link to="/">
          <img
            src="https://1000marcas.net/wp-content/uploads/2021/06/Shopee-Logo-2015.png"
            alt=""
            className="w-[150px] h-[70px]  inline text-[14px] left-[220px] object-contain absolute top-[8px] rounded-[20px]"
          />
        </Link>
        <h2 className="w-[138px] h-[29px] text-[#222222] text-[24px] absolute left-[380px] font-bold">
          {" "}
          Đăng nhập{" "}
        </h2>
        <li className="w-[130px] h-[17px] text-[#EE4D2D] text-[14px] absolute right-[200px] font-semibold">
          {" "}
          Bạn cần giúp đỡ ?{" "}
        </li>
      </div>
      <div className="flex items-center">
        <img
          src="https://cf.shopee.vn/file/5569eb9dc7e09e2dbed5315b8f2ea8ba"
          alt=""
          className="w-full"
        />
        <form
          className="absolute z-10 left-[1100px] top-[300px] bg-[#fff] rounded-[0.25rem] w-[400px] h-[500px] list-none"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex items-center">
            <h3 className="w-[141px] h-[24px] text-[#222222] text-[20px] font-bold ml-5">
              {" "}
              Đăng Nhập{" "}
            </h3>
            <li className="w-[160px] h-[60px] text-[#FFBF00] text-[14px] bg-[#FEFAEC] p-3 border border-[#FFBF00] font-bold mt-6">
              {" "}
              Đăng nhập với mã QR{" "}
            </li>
            <span className="text-[40px] mt-6 ml-3">
              <i class="bx bx-qr-scan"></i>
            </span>
          </div>
          <input
            type="text"
            placeholder="Email/Số điện thoại/Tên đăng nhập"
            className="w-[333px] h-[38px] bg-[#FFFFFF] p-3 ml-5 mt-6 outline-none border"
            {...register("email")}
          />
          <p className="ml-10 mt-2">{errors.email?.message}</p>
          <div className="w-[333px] h-[40px] mt-6 ml-5 outline-none border">
            <input
              type="password"
              placeholder="Mật khẩu"
              className="w-full h-full bg-[#FFFFFF] p-3 outline-none"
              {...register("password")}
            />
            <p className="ml-10">{errors.password?.message}</p>
            <span className="w-[20px] h-[16px] absolute top-[212px] z-20 left-[320px] text-gray-500">
              <i class="bx bxs-show"></i>
               </span>
          </div>
          <button
            className="w-[337px] h-[40px] text-[#FFFFFF] text-[14px] bg-[#EE4D2D] mt-9 ml-5"
            type="submit"
          >
            {" "}
            ĐĂNG NHẬP{" "}
          </button>
          <div className="flex items-center justify-between ml-5 mt-2">
            <li className="w-[82px] h-[14px] text-[#0055AA] text-[12px]">
              {" "}
              Quên mật khẩu{" "}
            </li>
            <li className="w-[107px] h-[14px] text-[#0055AA] text-[12px] absolute right-[39px]">
              {" "}
              Đăng nhập với SMS{" "}
            </li>
          </div>
          <div className="w-[337px] h-[29px] flex items-center ml-9 mt-2">
            <li> __________________ </li>
            <li className="w-[67px] h-[14px] text-[#CCCCCC] text-[12px] ml-4 mt-2 font-semibold">
              {" "}
              HOẶC{" "}
            </li>
            <li className="absolute ml-[184px]"> __________________ </li>
          </div>
          <div className="flex items-center mt-6 ml-12">
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300">
              <span className="w-[22px] h-[22px] text-purple-500">
                <i class="bx bxl-facebook-circle"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px]">
                {" "}
                Facebook{" "}
              </li>
            </div>
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300 ml-1">
              <span className="w-[22px] h-[22px] text-orange-500">
                <i class="bx bxl-google"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px]">
                {" "}
                Google{" "}
              </li>
            </div>
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300 ml-1">
              <span className="w-[22px] h-[22px] text-red-500">
                <i class="bx bxl-apple"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px]">
                {" "}
                Apple{" "}
              </li>
            </div>
          </div>
          <div className="flex items-center mt-8 ml-14">
            <p> Bạn mới biết đến Shopee ? </p>
            <p className="w-[68px] h-[17px] text-[#EE4D2D] ml-3 text-[14px]">
              <Link to="/register">Đăng ký</Link>
            </p>
          </div>
        </form>
      </div>
      <FooterAuthentication />
    </div>
  );
};

export default SignUp;
