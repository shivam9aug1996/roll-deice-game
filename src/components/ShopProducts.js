import React, { lazy, Suspense } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "../redux/actions";
const AddRemoveCartCounter = lazy(() => import("./AddRemoveCartCounter"));

const ShopProducts = ({ data, cartData }) => {
  const dispatch = useDispatch();
  return (
    <>
      {data.map((item, index) => {
        let newData = cartData.filter((data, index) => {
          return data.id === item.id;
        });
        return (
          <div className="col-md-4 mt-2" key={item.id}>
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
                      width="96"
                      height="350"
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
  );
};

export default ShopProducts;
