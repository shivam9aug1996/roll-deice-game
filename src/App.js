import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import Comp1 from "./components/About";
import Comp2 from "./components/Shop";
import Error from "./components/Error";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Shop from "./components/Shop";
import Product from "./components/Product";
import Cart from "./components/Cart";
import OrderHistory from "./components/OrderHistory";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="about" element={<About />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={<Product />} />
          <Route path="cart" element={<Cart />} />
          <Route path="order" element={<OrderHistory />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
