import React from "react";
import FooterAuthentication from "./FooterAuthentication";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
// react-hook-form
const schema = yup
  .object()
  .shape({
    phone: yup
      .string()
      .required()
      .max(12, "Must be less more 12 charaters number"),
  })
  .required();
const Register = () => {
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
      <div className=" h-[84px] flex items-center list-none bg-[#FFFFFF]">
        <Link to="/">
          <img
            src="https://1000marcas.net/wp-content/uploads/2021/06/Shopee-Logo-2015.png"
            alt=""
            className="w-[150px] h-[70px]  inline text-[14px] left-[220px] object-contain absolute top-[8px] rounded-[20px]"
          />
        </Link>
        <h2 className="w-[108px] h-[29px] text-[#222222] text-[24px] absolute left-[380px] font-bold">
          {" "}
          Đăng ký{" "}
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
          <h3 className="w-[107px] h-[24px] text-[#222222] text-[20px] mt-2 ml-6 font-bold">
            {" "}
            Đăng Ký{" "}
          </h3>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="w-[333px] h-[38px] bg-[#FFFFFF] p-3 mt-[30px] ml-8 outline-none border"
            {...register("phone")}
          />
          <p className="ml-10 mt-2">{errors.phone?.message}</p>
          <button
            className="w-[337px] h-[40px] text-[#FFFFFF] text-[14px] bg-[#EE4D2D] mt-[40px] ml-7"
            type="submit"
          >
            {" "}
            TIẾP THEO{" "}
          </button>
          <div className="w-[337px] h-[29px] flex items-center ml-11 mt-4">
            <li> __________________ </li>
            <li className="w-[67px] h-[14px] text-[#CCCCCC] text-[12px] ml-3 mt-2 font-semibold">
              {" "}
              HOẶC{" "}
            </li>
            <li className="absolute ml-[180px]"> __________________ </li>
          </div>
          <div className="flex items-center mt-4 ml-[40px]">
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300">
              <span className="w-[22px] h-[22px] absolute mt-1 left-[50px] text-purple-500">
                <i class="bx bxl-facebook-circle"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] ml-5">
                {" "}
                Facebook{" "}
              </li>
            </div>
            <div className="flex items-center ml-1 w-[100px] h-[30px] justify-center border border-red-300">
              <span className="w-[22px] h-[22px] absolute mt-1 left-[154px] text-orange-500">
                <i class="bx bxl-google"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] ml-5">
                {" "}
                Google{" "}
              </li>
            </div>
            <div className="flex items-center w-[100px] h-[30px] justify-center border border-red-300 ml-1">
              <span className="w-[22px] h-[22px] absolute mt-1 left-[260px] text-red-500">
                <i class="bx bxl-apple"></i>
              </span>
              <li className="w-[61px] h-[17px] text-[#000000DE] text-[14px] ml-5">
                {" "}
                Apple{" "}
              </li>
            </div>
          </div>
          <div className="text-[#000000DE] text-[12px] w-[332px] h-[29px] mt-8 ml-20">
            <p> Bằng việc đăng kí, bạn đã đồng ý với Shopee về </p>
            <p className="w-[232px] h-[12px] text-[#EE4D2D] text-[12px] ml-3 font-semibold">
              {" "}
              Điều khoản dịch vụ & Chính sách bảo mật{" "}
            </p>
          </div>
          <div className=" flex items-center mt-9 ml-20 w-[401px] h-[17px] text-[#00000042] text-[14px]">
            <p className="mt-1"> Bạn đã có tài khoản ? </p>
            <p className="ml-3 w-[108px] h-[17px] text-[#EE4D2D] text-[14px]">
              <Link to="/signup">Đăng nhập</Link>
            </p>
          </div>
        </form>
      </div>
      <FooterAuthentication />
    </div>
  );
};

export default Register;
