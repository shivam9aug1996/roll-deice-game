import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addToCart, placeOrder, removeFromCart } from "../redux/actions";

const Cart = () => {
  let cartData = useSelector((state) => state.taskReducer.cartData);
  const dispatch = useDispatch();

  let navigate = useNavigate();
  const totalMoney =
    cartData !== undefined &&
    cartData
      .reduce((acc, curr, index, arr) => {
        return acc + parseFloat(curr.price * curr.quantity);
      }, 0.0)
      .toFixed(2);
  const handleOrder = (cartData, totalMoney) => {
    let obj = {
      cartData,
      totalMoney,
      orderId: new Date().getTime().toString(),
      date: new Date().toLocaleString("en-IN", { hour12: true }),
    };
    dispatch(placeOrder(obj));
    navigate("/order");
  };

  return (
    <div className="container container-margin">
      {cartData.length > 0 ? <h1>{`My Cart (${cartData.length})`}</h1> : ""}
      {cartData.map((item, index) => {
        return (
          <div
            className="card mb-3"
            style={{ maxWidth: "740px", padding: "20px" }}
            key={item.id}
          >
            <div className="row g-0">
              <div className="col-md-4 image-width">
                <img
                  src={item.image}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  {item.description !== undefined &&
                  item.description.length >= 50
                    ? item.description.substring(0, 50)
                    : item.description}

                  <h3 className="mb-0 font-weight-semibold">
                    {`Rs. ${item.price}`}
                  </h3>
                  <br />
                  <button
                    type="button"
                    style={{ marginRight: "5px" }}
                    className="btn btn-secondary"
                    onClick={() => dispatch(removeFromCart(item))}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    type="button"
                    style={{ marginLeft: "5px" }}
                    className="btn btn-secondary"
                    onClick={() => dispatch(addToCart(item))}
                  >
                    +
                  </button>
                  <div style={{ display: "inline-flex", marginLeft: "40px" }}>
                    <h4>{`${item.price} * ${item.quantity} = ${
                      item.price * item.quantity
                    }`}</h4>
                  </div>
                </div>
              </div>
            </div>

            {/* <button type="button" className="btn btn-secondary btn-lg">
                Add to Cart
              </button> */}
          </div>
        );
      })}
      {cartData.length !== 0 ? (
        <div>
          <div>
            <h1>Cart Total : {totalMoney}</h1>
          </div>
          <div>
            <button
              type="button"
              className="btn btn-secondary btn-lg"
              onClick={() => handleOrder(cartData, totalMoney)}
            >
              Place Order
            </button>
          </div>
        </div>
      ) : (
        <div className="container" style={{ marginTop: "50px" }}>
          <h1>Your cart is empty!</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
