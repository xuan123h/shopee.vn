import React, { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Slider from "react-slick";
import FooterTwoDetail from "./FooterTwoDetail";
import Header from "./Header";
import NavbarShopeeMall from "./NavbarShopeeMall";
import { addCart } from "../redux/actions/index";
const FlashSaleDetails = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  // handle Cart Shopee
  const dispatch = useDispatch();
  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const response = await fetch(
        `https://6231d42859070d92733bdaf6.mockapi.io/api/v3/FlashSale/${id}`
      );
      setProduct(await response.json());
      setLoading(false);
    };
    getProduct();
  }, []);
  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProduct = () => {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
    };
    return (
      <>
        <div className="list-none">
          <div className="h-[121px] bg-[#d0011b]">
            <Header />
            <NavbarShopeeMall />
          </div>
          <div className="flex items-center ml-[270px] bg-white mt-[30px] w-[1380px] h-[800px]">
            <div className="ml-[40px]">
              <img
                src={product.image}
                alt={product.name}
                className="w-[450px] h-[450px] absolute top-[180px] ml-[20px]"
              />
              <div className="w-[400px] mt-[400px] ml-[30px]">
                <Slider {...settings}>
                  <div>
                    <img
                      src={product.image01}
                      alt={product.name}
                      className="w-[82px] h-[82px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image02}
                      alt={product.name}
                      className="w-[82px] h-[82px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image03}
                      alt={product.name}
                      className="w-[82px] h-[82px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image04}
                      alt={product.name}
                      className="w-[82px] h-[82px] object-cover"
                    />
                  </div>
                  <div>
                    <img
                      src={product.image05}
                      alt={product.name}
                      className="w-[82px] h-[82px] object-cover"
                    />
                  </div>
                </Slider>
              </div>
            </div>
            <div className="ml-[630px] absolute top-[180px]">
              <h2 className="w-[632px] h-[46px] text-[#000000CC] text-[20px] font-bold">
                {" "}
                {product.name}{" "}
              </h2>
              <div className="flex items-center mt-[20px]">
                <div className="flex items-center">
                  <li className="w-[22px] h-[22px] text-[#EE4D2D] text-[16px]">
                    {product.starproduct}
                  </li>
                  <li className="text-[14px] ml-[8px] text-orange-400">
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                    <i class="bx bxs-star"></i>
                  </li>
                </div>
                <div className="flex items-center ml-[30px]">
                  <li className="w-[30px] h-[22px] text-[#222222] text-[16px]">
                    {" "}
                    {product.star}{" "}
                  </li>
                  <li className="w-[59px] h-[25px] text-[#767676] text-[14px] ml-[22px] mt-1">
                    {" "}
                    Đánh Giá{" "}
                  </li>
                </div>
                <div className="flex items-center ml-[30px]">
                  <li className="w-[30px] h-[22px] text-[#222222] text-[16px]">
                    {" "}
                    {product.total}{" "}
                  </li>
                  <li className="w-[47px] h-[25px] text-[14px] text-[#767676] ml-2 mt-1">
                    {" "}
                    Đã Bán{" "}
                  </li>
                </div>
              </div>
              <div className="flex items-center mt-[10px]">
                <span className="line-through w-[57px] h-[20px] text-[#929292] text-[16px]">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price01)}
                </span>
                <span className="w-[90px] h-[36px] text-[#EE4D2D] text-[30px] ml-[45px]">
                  {new Intl.NumberFormat("de-DE", {
                    style: "currency",
                    currency: "VND",
                  }).format(product.price02)}
                </span>
              </div>
              <div className="flex items-center mt-[20px] font-semibold">
                <h4 className="w-[180px] h-[34px] text-[#757575] text-[16px] mt-[10px]">
                  {" "}
                  Mã Giảm Giá Của Shop{" "}
                </h4>
                <li className="ml-[10px]">{product.promotion01}</li>
                <li className="ml-[10px]">{product.promotion02}</li>
                <li className="ml-[10px]">{product.promotion03}</li>
                <li className="ml-[10px]">{product.promotion04}</li>
              </div>
              <div className="flex items-center">
                <h4 className="w-[110px] h-[34px] text-[#757575] text-[16px] font-semibold mt-[10px]">
                  {" "}
                  Deal Sốc{" "}
                </h4>
                <li> Mua để nhận quà </li>
              </div>
              <div className="flex items-center">
                <h4 className="w-[110px] h-[34px] text-[#757575] text-[16px] font-semibold mt-[10px]">
                  {" "}
                  Vận chuyển{" "}
                </h4>
                <div>
                  <div className="flex items-center">
                    <span>
                      <i class="bx bxs-baby-carriage"></i>
                    </span>
                    <li className="ml-[8px]"> Xử lý đơn hàng bởi Shopee </li>
                    <span className="ml-[8px]">
                      <i class="bx bxs-help-circle"></i>
                    </span>
                  </div>
                  <div className="flex items-center mt-1">
                    <span>
                      <i class="bx bxs-bus-school"></i>
                    </span>
                    <li className="ml-[8px]"> Vận Chuyển Tới </li>
                    <li className="ml-[30px] text-green-400 font-medium">
                      {" "}
                      Địa chỉ của bạn{" "}
                    </li>
                  </div>
                </div>
                <div className="absolute flex items-center top-[380px]">
                  <h4 className="w-[110px] h-[34px] text-[#757575] text-[16px] font-semibold ">
                    {" "}
                    Số Lượng{" "}
                  </h4>
                  <div className="flex items-center">
                    <span>
                      <i class="bx bx-minus"></i>
                    </span>
                    <input
                      type="number"
                      min="1"
                      placeholder="1"
                      className="w-[50px] h-[32px] p-1 outline-none border ml-3"
                    />
                    <span className="w-[32px] h-[32px] p-1">
                      <i class="bx bx-plus"></i>
                    </span>
                  </div>
                  <li className="w-[150px] h-[17px] text-[#757575] text-[14px]">
                    {" "}
                    {product.producttotal} sản phẩm có sẵn{" "}
                  </li>
                </div>
                <div className="flex items-center absolute top-[500px]">
                  <div className="w-[220px] h-[48px] bg-[#FF57221A] flex items-center justify-center">
                    <span className="w-[20px] h-[20px]">
                      <i class="bx bxs-cart-add"></i>
                    </span>
                    <li
                      className="w-[146px] h-[20px] text-[#EE4D2D] text-[16px] cursor-pointer"
                      onClick={() => addProduct(product)}
                    >
                      {" "}
                      Thêm Vào Giỏ Hàng{" "}
                    </li>
                  </div>
                  <div className="w-[113px] h-[48px] text-[#FFFFFF] text-[16px] bg-[#EE4D2D] flex items-center justify-center ml-[20px]">
                    <li>
                      {" "}
                      <Link to="/cart">Mua Ngay</Link>{" "}
                    </li>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center ml-[340px] absolute top-[860px]">
            <div className="flex items-center">
              <h6 className="w-[59px] h-[20px] text-[#222222] text-[16px]">
                {" "}
                Chia sẻ:{" "}
              </h6>
              <span className="w-[25px] h-[25px] text-[22px]">
                <i class="bx bxs-message-rounded-check"></i>
              </span>
              <span className="w-[25px] h-[25px] text-[22px]">
                <i class="bx bxl-facebook-circle"></i>
              </span>
              <span className="w-[25px] h-[25px] text-[22px]">
                <i class="bx bxl-pinterest"></i>
              </span>
              <span className="w-[25px] h-[25px] text-[22px]">
                <i class="bx bxl-twitter"></i>
              </span>
            </div>
            <div className="flex items-center ml-[30px]">
              <span className="w-[24px] h-[20px] text-[22px]">
                <i class="bx bx-heart"></i>
              </span>
              <li className="w-[131px] h-[20px] text-[#222222] text-[16px] ml-2 mt-[2px]">
                {" "}
                Đã thích ({product.like}){" "}
              </li>
            </div>
            <div className="flex items-center ml-[180px]">
              <div className="flex items-center">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/6c502a2641457578b0d5f5153b53dd5d.png"
                  alt=""
                  className="w-[18px] h-[18px] object-cover"
                />
                <li className="w-[197px] h-[20px] text-[#4A4A4A] ml-[10px] text-[16px]">
                  {" "}
                  7 ngày miễn phí trả hàng{" "}
                </li>
              </div>
              <div className="flex items-center ml-[10px]">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/16ead7e0a68c3cff9f32910e4be08122.png"
                  alt=""
                  className="w-[18px] h-[18px] object-cover"
                />
                <li className="w-[177px] h-[20px] text-[#4A4A4A] ml-[10px] text-[16px]">
                  {" "}
                  Hàng chính hãng 100%{" "}
                </li>
              </div>
              <div className="flex items-center ml-[10px]">
                <img
                  src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/pdp/511aca04cc3ba9234ab0e4fcf20768a2.png"
                  alt=""
                  className="w-[18px] h-[18px] object-cover"
                />
                <li className="w-[177px] h-[20px] text-[#4A4A4A] ml-[10px] text-[16px]">
                  {" "}
                  Miễn phí vận chuyển{" "}
                </li>
              </div>
            </div>
          </div>
          <div className="bg-white mt-[30px] w-[1380px] h-[160px] ml-[270px]">
            <div className="flex items-center ml-[30px]">
              <div>
                <img
                  src="https://cf.shopee.vn/file/80cc0ea48958169be67d1ed574b52434_tn"
                  alt=""
                  className=" w-[100px] h-[100px] "
                />
              </div>
              <div className="ml-[20px] mt-[30px]">
                <li> pg_officialstorevn </li>
                <p> Online 1 Giờ Trước </p>
                <div className="flex items-center">
                  <div className="flex items-center">
                    <span className="mt-1">
                      <i class="bx bx-conversation"></i>
                    </span>
                    <li className="ml-2"> Chat Ngay </li>
                  </div>
                  <div className="flex items-center ml-[10px]">
                    <span className="mt-1">
                      <i class="bx bx-store-alt"></i>
                    </span>
                    <li className="ml-2"> Xem Shop </li>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center flex-wrap w-[800px] absolute top-[1010px] left-[660px]">
              <div className="flex items-center">
                <li> Đánh Giá </li>
                <li className="ml-[35px]">{product.star}</li>
              </div>
              <div className="flex items-center ml-[70px]">
                <li> Tỉ Lệ Phản Hồi </li>
                <li className="ml-[35px]"> 100% </li>
              </div>
              <div className="flex items-center ml-[70px]">
                <li> Tham Gia </li>
                <li className="ml-[35px]"> 4 năm trước </li>
              </div>
              <div className="flex items-center ml-[70px] mt-[20px]">
                <li> Sản Phẩm </li>
                <li className="ml-[35px]">{product.product}</li>
              </div>
              <div className="flex items-center ml-[70px] mt-[20px]">
                <li> Thời Gian Phản Hồi </li>
                <li className="ml-[35px]"> trong vài giờ </li>
              </div>
              <div className="flex items-center ml-[70px] mt-[20px]">
                <li> Người Theo Dõi </li>
                <li className="ml-[35px]"> 381,1k </li>
              </div>
            </div>
          </div>
          <div className="bg-white mt-[30px] w-[1380px] h-[410px] ml-[270px]">
            <div className="ml-[30px]">
              <h2 className="w-[903px] h-[49px] text-[#000000DE] text-[18px] bg-[#00000005] p-3 font-bold">
                {" "}
                CHI TIẾT SẢN PHẨM{" "}
              </h2>
              <div className="flex items-center ml-[30px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px] font-bold">
                  {" "}
                  Danh Mục{" "}
                </li>
                <li className="flex items-center">
                  <p className="w-[48px] h-[17px] text-[#0055AA] text-[14px]">
                    {" "}
                    Shopee{" "}
                  </p>
                  <p className="ml-[5px] mt-2">
                    <i class="bx bx-chevron-right"></i>
                  </p>
                  <p className="w-[74px] h-[17px] text-[#000000CC] text-[14px]ml-[6px]">
                    {" "}
                    Flash Sale{" "}
                  </p>
                  <p className="ml-[5px] mt-2">
                    <i class="bx bx-chevron-right"></i>
                  </p>
                  <p className="w-[74px] h-[17px] text-[#000000CC] text-[14px] ml-[10px]">
                    {" "}
                    Mỹ Phẩm{" "}
                  </p>
                </li>
              </div>
              <div className="flex items-center ml-[30px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px]font-bold">
                  {" "}
                  Thương hiệu{" "}
                </li>
                <li className="w-[74px] h-[17px] text-[#000000CC] text-[14px]">
                  {" "}
                  {product.trademark}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px]font-bold">
                  {" "}
                  Dung lượng{" "}
                </li>
                <li className="w-[74px] h-[17px] text-[#000000CC] text-[14px]">
                  {" "}
                  {product.ml}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px]font-bold">
                  {" "}
                  Thành phố{" "}
                </li>
                <li className="w-[74px] h-[17px] text-[#000000CC] text-[14px]">
                  {" "}
                  {product.country}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[160px] h-[17px] text-[#00000066] text-[14px]font-bold">
                  {" "}
                  Số sản phẩm còn lại{" "}
                </li>
                <li className="w-[74px] h-[17px] text-[#000000CC] text-[14px]">
                  {" "}
                  {product.productpromotion}{" "}
                </li>
              </div>
              <div className="flex items-center ml-[30px] mt-[8px]">
                <li className="w-[100px] h-[17px] text-[#00000066] text-[14px]font-bold">
                  {" "}
                  Gửi từ{" "}
                </li>
                <li className="w-[134px] h-[17px] text-[#000000CC] text-[14px]">
                  {" "}
                  {product.send}{" "}
                </li>
              </div>
            </div>
            <div className="mt-[30px] ml-[30px]">
              <h2 className="w-[863px] h-[50px] text-[#000000DE] text-[18px] bg-[#00000005] p-3 font-bold">
                {" "}
                MÔ TẢ SẢN PHẨM{" "}
              </h2>
              <li className="text-[#000000CC] text-[14px] ml-[20px]">
                {" "}
                {product.descriptionproduct}{" "}
              </li>
            </div>
          </div>
          <div className="bg-white mt-[30px] w-[1380px] h-[410px] ml-[270px]">
            <h2 className="w-[903px] h-[50px] text-[#000000DE] text-[18px] bg-[#00000005] p-3 font-bold ml-[30px]">
              {" "}
              ĐÁNH GIÁ SẢN PHẨM{" "}
            </h2>
            <div>
              <div className="ml-[150px]">
                <li>
                  {" "}
                  <b className="w-[41px] h-[34px] text-[#D0011B] text-[30px]">
                    {product.starproduct}
                  </b>
                  <b className="ml-[6px] text-[20px]">trên 5</b>
                </li>
                <li className="text-[20px] text-orange-400">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </li>
              </div>
              <div className="flex items-center flex-wrap w-[600px] absolute top-[1680px] left-[730px]">
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  Tất cả{" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  5 Sao (9k){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  4 Sao (201){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  3 Sao (71){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  2 Sao (37){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  1 Sao (62){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  Có Bình Luận (4,2k){" "}
                </li>
                <li className="w-[100px] h-[32px] text-[#D0011B] text-[14px] bg-[#FFFFFF]">
                  {" "}
                  Có Hình Ảnh / Video (3,8k){" "}
                </li>
              </div>
            </div>
            <div className="mt-[60px] ml-[60px] flex items-center">
              <div className="absolute top-[1800px]">
                <img
                  src={product.avatar01}
                  alt={product.name}
                  className="w-[40px] h-[40px] object-cover"
                />
              </div>
              <div className="ml-[60px]">
                <p className="w-[87px] h-[12px] text-[#000000DE] text-[12px]">
                  {" "}
                  ktn2003{" "}
                </p>
                <li className="text-[14px] text-orange-400">
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                  <i class="bx bxs-star"></i>
                </li>
                <li className="w-[833px] h-[14px] text-[#0000008A] text-[12px]">
                  {" "}
                  {product.time01}{" "}
                </li>
                <li className="w-[833px] h-[60px] text-[#000000DE] text-[14px]">
                  {" "}
                  {product.starproduct01}{" "}
                </li>
                <div className="flex items-center">
                  <img
                    src={product.imagestar01}
                    alt={product.name}
                    className="w-[72px] h-[72px] object-cover"
                  />
                  <img
                    src={product.imagestar02}
                    alt={product.name}
                    className="w-[72px] h-[72px] object-cover ml-[14px]"
                  />
                  <img
                    src={product.imagestar03}
                    alt={product.name}
                    className="w-[72px] h-[72px] object-cover ml-[14px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <FooterTwoDetail />
        </div>
      </>
    );
  };
  return <>{loading ? <Loading /> : <ShowProduct />}</>;
};

export default FlashSaleDetails;
