import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Main from "./Main";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <Footer />
    </>
  );
};

export default Home;
