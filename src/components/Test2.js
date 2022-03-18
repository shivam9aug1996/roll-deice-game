import React, { lazy, Suspense, useState } from "react";
import { useEffect } from "react";

import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions";

const AddRemoveCartCounter = lazy(() => import("./AddRemoveCartCounter"));
const Image = lazy(() => import("./Image"));
//import "./App.css";

function Test2({ data }) {
  const [width, setWidth] = useState(window.innerWidth);
  const [displayItemValue, setDisplayItemValue] = useState(width > 768 ? 6 : 2);

  const [count, setCount] = useState({
    prev: 0,
    next: displayItemValue,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(data.slice(count.prev, count.next));

  const dispatch = useDispatch();
  let cartData = useSelector((state) => state.taskReducer.cartData);
  const getMoreData = () => {
    if (current.length === data.length) {
      setHasMore(false);
      return;
    }
    setTimeout(() => {
      setCurrent(
        current.concat(
          data.slice(
            count.prev + displayItemValue,
            count.next + displayItemValue
          )
        )
      );
    }, 0);
    setCount((prevState) => ({
      prev: prevState.prev + displayItemValue,
      next: prevState.next + displayItemValue,
    }));
  };
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
    return () => {
      window.removeEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    };
  });

  useEffect(() => {
    let mounted = true;
    if (mounted) {
      if (width < 768) {
        setDisplayItemValue(2);
      } else {
        setDisplayItemValue(6);
      }
    }

    return () => {
      mounted = false;
    };
  }, []);

  return (
    <>
      <InfiniteScroll
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        <div className={width > 768 ? "flex-wrap" : ""}>
          {current &&
            current.map((item, index) => {
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
                          {/* <img
                              src={item.image}
                              className="card-img img-fluid"
                              style={{ height: "200px" }}
                              alt=""
                            ></img> */}
                          <Suspense fallback={<div></div>}>
                            <Image image={item.image} />
                          </Suspense>
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
        </div>
      </InfiniteScroll>
    </>
  );
}
export default Test2;
