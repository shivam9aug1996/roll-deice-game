import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions";

import Loader from "./Loader";
import { products } from "../data/data";
import Test2 from "./Test2";

const AddRemoveCartCounter = lazy(() => import("./AddRemoveCartCounter"));
const Image = lazy(() => import("./Image"));

const Shop = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const getData = async () => {
    setData(products);
    // setTimeout(() => {
    //   setData(products);
    // }, 100);
    // const response = await fetch("https://fakestoreapi.com/products");
    // const data = await response.json();
    // setData(data);
  };

  useEffect(() => {
    let isMounted = true;
    if (isMounted) getData();
    return () => {
      isMounted = false;
      setData([]);
    };
  }, []);
  let cartData = useSelector((state) => state.taskReducer.cartData);

  return (
    <>
      {data.length === 0 ? (
        <Loader />
      ) : (
        <div className="container container-margin">
          <div className="row">
            <Test2 data={data} />
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
