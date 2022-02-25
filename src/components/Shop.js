import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions";

import Loader from "./Loader";
import { products } from "../data/data";
const AddRemoveCartCounter = lazy(() => import("./AddRemoveCartCounter"));

const Shop = () => {
  const dispatch = useDispatch();

  const [data, setData] = useState([]);
  const getData = async () => {
    //setData(products);
    setTimeout(() => {
      setData(products);
    }, 300);
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
      {data.length !== 0 ? (
        <Loader />
      ) : (
        <div className="container container-margin">
          <div className="row">
            <>
              {data.map((item, index) => {
                let newData = cartData.filter((data, index) => {
                  return data.id === item.id;
                });
                return (
                  <div className="col-md-4" key={item.id}>
                    <div className="card">
                      <Link
                        className="text-default mb-2 product-title"
                        to={`/shop/${item.id}`}
                      >
                        <div className="card-body">
                          <div className="card-img-actions">
                            {" "}
                            <img
                              src={item.image}
                              className="card-img img-fluid"
                              style={{ height: "200px" }}
                              alt=""
                            ></img>{" "}
                          </div>
                        </div>
                      </Link>

                      <div className="card-body bg-light text-center">
                        <div className="mb-2">
                          <h6 className="font-weight-semibold mb-2">
                            {" "}
                            <Link
                              className="text-default mb-2 product-title"
                              to={`/shop/${item.id}`}
                            >
                              {item.title}
                            </Link>
                          </h6>{" "}
                          {item.category}
                        </div>
                        <h3 className="mb-0 font-weight-semibold">
                          {`Rs. ${item.price}`}
                        </h3>
                        <div>
                          {" "}
                          <i className="fa fa-star star"></i>{" "}
                          <i className="fa fa-star star"></i>{" "}
                          <i className="fa fa-star star"></i>{" "}
                          <i className="fa fa-star star"></i>{" "}
                        </div>
                        <div className="text-muted mb-3">
                          {item.rating.count} reviews
                        </div>{" "}
                        {newData.length > 0 ? (
                          <Suspense fallback={<div></div>}>
                            <AddRemoveCartCounter item={item} />
                          </Suspense>
                        ) : (
                          <button
                            type="button"
                            className="btn btn-secondary"
                            onClick={() => dispatch(addToCart(item))}
                          >
                            <i className="fa fa-cart-plus mr-2"></i> Add to cart
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          </div>
        </div>
      )}
    </>
  );
};

export default Shop;
