import React from "react";
import FlashSales from "../components/FlashSales";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ImageInformation from "../components/ImageInformation";
import ImageOne from "../components/ImageOne";
import Navbar from "../components/Navbar";
import ProductTab from "../components/ProductTab";
import SliderOne from "../components/Slider";
import CategoryFeatures from "../features/CategoryFeatures";
import InformationFeatures from "../features/InformationFeatures";
import SearchImportantFeatures from "../features/SearchImportantFeatures";
import ShopeeMallFeatures from "../features/ShopeeMallFeatures";
import TrendSearchFeatures from "../features/TrendSearchFeatures";

const Home = () => {
  return (
    <>
      <div className="fixed z-20 bg-red-500 w-full">
        <Header />
        <Navbar />
      </div>
      <div className="h-[440px] bg-[#ffffff]">
        <div className="flex items-center absolute top-[155px] ml-[100px]">
          <SliderOne />
          <ImageInformation />
        </div>
        <InformationFeatures />
      </div>
      <CategoryFeatures />
      <FlashSales />
      <ImageOne />
      <ShopeeMallFeatures />
      <TrendSearchFeatures />
      <SearchImportantFeatures />
      <ProductTab />
      <Footer />
    </>
  );
};

export default Home;
