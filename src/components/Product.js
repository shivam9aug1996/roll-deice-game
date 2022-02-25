import React, { lazy, Suspense, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/actions";
import Loader from "./Loader";
import { products } from "../data/data";

const AddRemoveCartCounter = lazy(() => import("./AddRemoveCartCounter"));

const Product = () => {
  const dispatch = useDispatch();
  const [arr, setArr] = useState([]);
  let params = useParams();
  const getProduct = async () => {
    const data = products.filter((item) => {
      if (parseInt(item.id) === parseInt(params.id)) {
        return item;
      }
    });
    // const response = await fetch(
    //   `https://fakestoreapi.com/products/${params.id}`
    // );
    // const data = await response.json();
    let arr = [];

    //  arr=arr[...data]
    setTimeout(() => {
      setArr(data);
    }, 300);
  };
  useEffect(() => {
    let isMounted = true;
    if (isMounted) getProduct();
    return () => {
      isMounted = false;
      setArr([]);
    };
  }, []);
  let cartData = useSelector((state) => state.taskReducer.cartData);
  return (
    <>
      {arr.length === 0 ? (
        <div className="center-loader">
          {" "}
          <Loader />
        </div>
      ) : (
        <div className="container container-margin">
          {arr.map((item, index) => {
            let newData = cartData.filter((data, index) => {
              return data.id === item.id;
            });
            return (
              <div key={item.id}>
                <div className="card mb-3" style={{ maxWidth: "580px" }}>
                  <div
                    className="row g-0"
                    style={{ maxWidth: "740px", padding: "20px" }}
                  >
                    <div className="col-md-4">
                      <img
                        src={item.image}
                        className="img-fluid rounded-start"
                        alt="..."
                      />
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">
                          {item.title.substring(0, 20)}
                        </h5>

                        <p className="card-text card-description">
                          {item.description.substring(0, 80)}
                        </p>

                        <p className="card-text">
                          Rating :{" "}
                          <small className="text-muted">
                            {item.rating.rate}
                          </small>
                          <br />
                          Reviews :{" "}
                          <small className="text-muted">
                            {item.rating.count}
                          </small>
                        </p>
                        <h3 className="mb-0 font-weight-semibold">
                          {`Rs. ${item.price}`}
                        </h3>
                      </div>
                    </div>
                  </div>
                </div>
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
            );
          })}
        </div>
      )}
    </>
  );
};

export default Product;
