import React, { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearSuccessOrderStatus, getOrderHistory } from "../redux/actions";
import NotifyModal from "./NotifyModal";

const OrderHistory = () => {
  const [notify, setNotify] = useState(false);
  let orderHistory = useSelector((state) => state.taskReducer.orderHistory);
  let isSuccessfulOrder = useSelector(
    (state) => state.taskReducer.successfulOrder
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderHistory());
  }, []);

  useEffect(() => {
    if (isSuccessfulOrder) {
      setNotify(true);
      setTimeout(() => {
        setNotify(false);
      }, 3000);
      dispatch(clearSuccessOrderStatus());
    }
    return () => {
      setNotify(false);
    };
  }, []);

  return (
    <>
      <div className="container container-margin">
        {notify && <NotifyModal message="Order placed Successfully" />}
        {orderHistory.length > 0 ? (
          <h1>{`My Order (${orderHistory.length})`}</h1>
        ) : null}

        {orderHistory !== undefined &&
          orderHistory
            .slice(0)
            .reverse()
            .map((item, index) => {
              return (
                <div key={item.orderId}>
                  <div className="order-history" style={{ padding: "20px" }}>
                    <div
                      style={{
                        border: "1px gray solid",
                        padding: "20px",
                        marginBottom: "10px",
                      }}
                    >
                      <h5>
                        Order Id :{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {item.orderId}
                        </span>
                      </h5>
                      <h5>
                        Order Amount :{" "}
                        <span style={{ fontWeight: "bold" }}>
                          {item.totalMoney}
                        </span>
                      </h5>
                      <h5>
                        Order Date & Time :{" "}
                        <span style={{ fontWeight: "bold" }}>{item.date}</span>
                      </h5>
                    </div>
                    <>
                      {item.products.map((product, index1) => {
                        return (
                          <div
                            className="card order-card mb-3"
                            style={{ maxWidth: "740px" }}
                            key={product.id}
                          >
                            <div className="row">
                              <div
                                className="col-md-12"
                                style={{ marginBottom: "-120px" }}
                              >
                                <img
                                  src={product.image}
                                  className="img-fluid rounded-start"
                                  style={{
                                    height: "100px",
                                    width: "150px",
                                    marginTop: "20px",
                                  }}
                                  alt="..."
                                />

                                <div className="card-body">
                                  <h5 className="card-title">
                                    {product.title}
                                  </h5>
                                  <div
                                    style={
                                      {
                                        // display: "inline-flex",
                                        //marginLeft: "40px",
                                      }
                                    }
                                  >
                                    <h5>{`${product.price} * ${
                                      product.quantity
                                    } = ${
                                      product.price * product.quantity
                                    }`}</h5>
                                  </div>
                                  {/* {product.description !== undefined &&
                                  product.description.length >= 100
                                    ? product.description.substring(0, 100)
                                    : product.description} */}
                                  {/* <p className="card-text">
                                    Rating :{" "}
                                    <small className="text-muted">
                                      {product.rating && product.rating.rate}
                                    </small>
                                    <br />
                                    Reviews :{" "}
                                    <small className="text-muted">
                                      {product.rating && product.rating.count}
                                    </small>
                                  </p> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </>
                  </div>
                  <br />
                  <br />

                  <br />
                  <br />
                </div>
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
