import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addToCart,
  clearSuccessOrderStatus,
  removeFromCart,
} from "../redux/actions";
import NotifyModal from "./NotifyModal";

const OrderHistory = () => {
  const [notify, setNotify] = useState(false);
  let orderHistory = useSelector((state) => state.taskReducer.orderHistory);
  let isSuccessfulOrder = useSelector(
    (state) => state.taskReducer.successfulOrder
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccessfulOrder) {
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
      }, 3000);
      dispatch(clearSuccessOrderStatus());
    }
  }, []);

  return (
    <>
      <div className="container" style={{ marginTop: "50px" }}>
        {notify && <NotifyModal message="Order placed Successfully" />}
        {orderHistory.length > 0 ? (
          <h1>{`My Order (${orderHistory.length})`}</h1>
        ) : (
          ""
        )}

        {orderHistory !== undefined &&
          orderHistory
            .slice(0)
            .reverse()
            .map((item, index) => {
              return (
                <>
                  <div className="order-history">
                    <div style={{ border: "1px gray solid" }}>
                      <h6>Order Id : {item.orderId}</h6>
                      <h6>Order Amount : {item.totalMoney}</h6>
                      <h6>Order Date & Time : {item.date}</h6>
                    </div>
                    <>
                      {item.products.map((product, index1) => {
                        return (
                          <>
                            <div
                              className="card order-card mb-3"
                              style={{ maxWidth: "740px" }}
                              key={item.id}
                            >
                              <div className="row">
                                <div className="col-md-12">
                                  <img
                                    src={product.image}
                                    className="img-fluid rounded-start"
                                    style={{ height: "100px", width: "150px" }}
                                    alt="..."
                                  />
                                  <div className="card-body">
                                    <h5 className="card-title">
                                      {product.title}
                                    </h5>
                                    {product.description !== undefined &&
                                    product.description.length >= 100
                                      ? product.description.substring(0, 100)
                                      : product.description}
                                    <p className="card-text">
                                      Rating :{" "}
                                      <small className="text-muted">
                                        {product.rating && product.rating.rate}
                                      </small>
                                      <br />
                                      Reviews :{" "}
                                      <small className="text-muted">
                                        {product.rating && product.rating.count}
                                      </small>
                                      <h5 className="mb-0 font-weight-semibold">
                                        {`Rs. ${product.price}`}
                                      </h5>
                                    </p>

                                    <div
                                      style={{
                                        display: "inline-flex",
                                        marginLeft: "40px",
                                      }}
                                    >
                                      <h3>{`${product.price} * ${
                                        product.quantity
                                      } = ${
                                        product.price * product.quantity
                                      }`}</h3>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        );
                      })}
                    </>
                  </div>
                  <br />
                  <br />
                  <br />
                  <br />
                </>
              );
            })}
        {orderHistory.length === 0 ? (
          <div className="container" style={{ marginTop: "50px" }}>
            <h1>You haven't placed any order yet!</h1>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default OrderHistory;
