import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashSales from "./components/FlashSales";
import FlashSaleDetails from "./components/FlashSaleDetails";
import Register from "./components/Register";
import SignUp from "./components/SignUp";
import Cart from "./pages/Cart";
import Pay from "./pages/Pay";
import ProductTab from "./components/ProductTab";
import ProductDetail from "./components/ProductDetail";
import ProductExtraDetail from "./components/ProductExtraDetail";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/FlashSale" element={<FlashSales />} />
        <Route path="/FlashSale/:id" element={<FlashSaleDetails />} />
        <Route path="/product" element={<ProductTab />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/productxtra" element={<ProductTab />} />
        <Route path="/productxtra/:id" element={<ProductExtraDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pay" element={<Pay />} />
      </Routes>
    </>
  );
}

export default App;
