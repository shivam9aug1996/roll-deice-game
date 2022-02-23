import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";

const AddRemoveCartCounter = ({ item }) => {
  let cartData = useSelector((state) => state.taskReducer.cartData);
  let newData = cartData.filter((data, index) => {
    return data.id === item.id;
  });
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        style={{ marginRight: "5px" }}
        className="btn btn-secondary"
        onClick={() => dispatch(removeFromCart(item))}
      >
        -
      </button>
      {newData.length > 0 && newData[0].quantity}
      <button
        type="button"
        style={{ marginLeft: "5px" }}
        className="btn btn-secondary"
        onClick={() => dispatch(addToCart(item))}
      >
        +
      </button>
    </>
  );
};

export default AddRemoveCartCounter;
