import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { delCart } from "../redux/actions";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
// react-hook-form
const schema = yup
  .object()
  .shape({
    mobilephone: yup
      .string()
      .required()
      .max(12, "Must be less more 12 charaters number"),
    address: yup.string().required(),
  })
  .required();

const Pay = () => {
  // react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);
  const dispatch = useDispatch();
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const state = useSelector((state) => state.handleCart);
  var total = 0;
  const itemList = (item) => {
    total = total + item.price01 * item.qty;
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th className="float-left ml-6"> Sản Phẩm </th>
              <th className="absolute ml-[260px]"> Tên </th>
              <th className="absolute ml-[540px]"> Giá </th>
              <th className="absolute ml-[600px]"> Số Lượng </th>
              <th className="absolute ml-[700px]"> Chọn </th>
            </tr>
          </thead>
          <tbody>
            <tbody>
              <tr className="flex items-center w-[500px]">
                <td className="ml-9">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-[80px] h-[80px] object-contain "
                  />
                </td>
                <td className="ml-[100px]">
                  {" "}
                  <h6>{item.name}</h6>
                </td>
                <td className="ml-[510px] absolute">
                  <span>
                    {new Intl.NumberFormat("de-DE", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price01 * item.qty)}{" "}
                  </span>
                </td>
                <td className="absolute ml-[630px]">{item.qty}</td>
                <td
                  className="absolute ml-[705px]"
                  onClick={() => handleDel(item)}
                >
                  {" "}
                  Xóa{" "}
                </td>
              </tr>
            </tbody>
          </tbody>
        </table>
      </div>
    );
  };
  return (
    <>
      <Header />
      <Navbar />
      <div className="mt-[40px] ml-[290px] w-[1300px] h-[500px] bg-white list-none">
        <div>
          <h2 className="mt-3 ml-4 font-bold text-orange-400">
            {" "}
            Có {state.length} sản phẩm trong giỏ hàng{" "}
          </h2>
          <div className="mt-6">
            {state.length !== 0 && state.map(itemList)}
          </div>
        </div>
        <div className="mt-[50px] ml-8 flex items-center">
          <h4> Tổng tiền : </h4>
          <li className="w-[89px] h-[20px] text-[#444B52] text-[17px] ml-2">
            {" "}
            {new Intl.NumberFormat("de-DE", {
              style: "currency",
              currency: "VND",
            }).format(total)}
          </li>
        </div>
        <form
          className="absolute top-[220px] right-[440px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h5 className="text-oran">Vui lòng nhập địa chỉ của bạn</h5>
          <input
            type="text"
            placeholder="Số điện thoại"
            className="mt-4 w-[300px] h-[33px] outline-none border pl-2"
            {...register("mobilephone")}
          />{" "}
          <p className="ml-10 mt-2">{errors.mobilephone?.message}</p>
          <br />
          <input
            type="text"
            placeholder="Thôn, Xã, Huyện, Thành Phố"
            className="mt-9 w-[300px] h-[33px] outline-none border pl-2"
            {...register("address")}
          />
          <p className="ml-10 mt-2">{errors.address?.message}</p>
          <br />
          <button
            className=" ml-14 mt-6 w-[150px] h-[35px] bg-gray-400 text-white"
            type="submit"
          >
            {" "}
            Tiến hành đặt hàng{" "}
          </button>
        </form>
      </div>
    </>
  );
};

export default Pay;
