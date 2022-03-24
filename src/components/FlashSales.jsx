import React, { useState, useEffect } from "react";
import FlashSale from "./FlashSale";

const FlashSales = () => {
  const [data, setData] = useState([]);
  const [products, setProducts] = useState(data);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;
  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://6231d42859070d92733bdaf6.mockapi.io/api/v3/FlashSale"
      );
      if (componentMounted) {
        setData(await response.clone().json());
        setProducts(await response.json());
        setLoading(false);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);
  const Loading = () => {
    return <>Loading ...</>;
  };
  const ShowProducts = () => {
    return (
      <>
        <ul className="flex items-center mt-[40px] ml-[20px]">
          {products.map((productsale) => (
            <li key={productsale.id} className="ml-[22px]">
              <FlashSale productsale={productsale} />
            </li>
          ))}
        </ul>
      </>
    );
  };
  return (
    <div className="bg-white w-[1230px] mx-auto mt-[40px] h-[370px]">
      <img
        src="https://deo.shopeemobile.com/shopee/shopee-pcmall-live-sg/flashsale/fb1088de81e42c4e538967ec12cb5caa.png"
        alt=""
        className="w-[130px] h-[30px] leading-7 uppercase inline-block pl-4 mt-[20px] ml-[20px]"
      />
      {loading ? <Loading /> : <ShowProducts />}
    </div>
  );
};

export default FlashSales;
