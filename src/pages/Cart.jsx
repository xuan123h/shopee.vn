import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import { addCart, delCart } from "../redux/actions";

const Cart = () => {
  // handle Cart Shopee
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };
  const emptyCart = () => {
    return (
      <>
        <div className="absolute top-[300px] left-[650px]">
          <h2 className="text-orange-600 text-[22px] ml-[30px]">
            {" "}
            Bạn chưa có sản phẩm nào trong giỏ hàng{" "}
          </h2>
          <button className="w-[500px] h-[80px] bg-red-400 text-white mt-[20px]">
            <Link to="/"> Quay về trang chủ </Link>
          </button>
        </div>
      </>
    );
  };
  const cartItems = (product) => {
    return (
      <div className="list-none">
        <table className="mt-[70px] ml-[240px]">
          <thead>
            <tr>
              <th> Sản Phẩm </th>
              <th> Đơn Giá </th>
              <th> Số Lượng </th>
              <th> Số Tiền </th>
              <th> Thao Tác </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div className="flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-[100px] h-[100px]"
                  />
                  <h4 className="w-[400px]"> {product.name} </h4>
                </div>
              </td>
              <td>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price01)}
              </td>
              <td>
                <div>
                  <span onClick={() => handleDel(product)}>
                    <i class="bx bx-minus"></i>
                  </span>
                  <span> {product.qty} </span>
                  <span onClick={() => handleAdd(product)}>
                    <i class="bx bx-plus"></i>
                  </span>
                </div>
              </td>
              <td>
                {new Intl.NumberFormat("de-DE", {
                  style: "currency",
                  currency: "VND",
                }).format(product.price01 * product.qty)}
              </td>
              <td onClick={() => handleDel(product)}>Xóa</td>
            </tr>
          </tbody>
        </table>
        {/* <div className="flex items-center mt-3 ml-[240px]">
          <div className="flex items-center">
            <li> Tổng thanh toán ({state.length} Sản Phẩm) </li>
            <li> price </li>
          </div>
          <button> Mua Hàng </button>
        </div> */}
      </div>
    );
  };
  const checkout = () => {
    return (
      <>
        <div className="w-[200px] h-[50px] bg-orange-400 flex items-center justify-center ml-[500px] mt-[100px]">
          <button className="text-white">
            {" "}
            <Link to="/pay"> Đặt hàng</Link>{" "}
          </button>
        </div>
      </>
    );
  };

  return (
    <>
      <div>
        {state.length === 0 && emptyCart()}
        <div>
          <Header></Header>
          <Navbar></Navbar>
          {state.length !== 0 && state.map(cartItems)}
        </div>
        {state.length !== 0 && checkout()}
      </div>
    </>
  );
};

export default Cart;
