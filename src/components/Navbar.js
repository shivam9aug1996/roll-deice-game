import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { getCartData } from "../redux/actions";

const Navbar = () => {
  const dispatch = useDispatch();
  let cartData = useSelector((state) => state.taskReducer.cartData);
  useEffect(() => {
    dispatch(getCartData());
  }, []);
  return (
    <>
      <header
        className="navbar navbar-expand-md navbar-dark bd-navbar"
        style={{ backgroundColor: "black" }}
      >
        <nav
          className="container-xxl flex-wrap flex-md-nowrap"
          aria-label="Main navigation"
        >
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#bdNavbar"
            aria-controls="bdNavbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              className="bi"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
              ></path>
            </svg>
          </button>

          <div className="collapse navbar-collapse" id="bdNavbar">
            <ul className="navbar-nav flex-row flex-wrap bd-navbar-nav pt-2 py-md-0">
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link p-2" to="/">
                  ShopKart
                </Link>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link p-2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link p-2" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item col-6 col-md-auto">
                <Link className="nav-link p-2" to="/order">
                  Orders
                </Link>
              </li>
            </ul>

            <hr className="d-md-none text-white-50" />

            <ul className="navbar-nav flex-row flex-wrap ms-md-auto"></ul>
          </div>
          <Link to="/cart" style={{ textDecoration: "none" }}>
            <div className="cart-badge">
              <IoCartOutline className="d-flex shop-cart-icon" />
              {cartData.length !== 0 && (
                <span className="badge badge-light badge-cart">
                  {cartData.length}
                </span>
              )}
            </div>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
