import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
//const Footer = lazy(() => import("./components/Footer"));
const Main = lazy(() => import("./components/Main"));
//const Navbar = lazy(() => import("./components/Navbar"));
const About = lazy(() => import("./components/About"));
const Shop = lazy(() => import("./components/Shop"));
const Product = lazy(() => import("./components/Product"));
const Cart = lazy(() => import("./components/Cart"));
const OrderHistory = lazy(() => import("./components/OrderHistory"));
const ScrollToTop = lazy(() => import("./components/ScrollToTop"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div></div>}>
        <>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="about" element={<About />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/:id" element={<Product />} />
            <Route path="cart" element={<Cart />} />
            <Route path="order" element={<OrderHistory />} />
          </Routes>
        </>
      </Suspense>
      <Footer />
    </>
  );
};

export default App;
