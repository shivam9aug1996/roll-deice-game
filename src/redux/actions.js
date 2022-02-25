export const getCartData = () => {
  return {
    type: "GET_CART_DATA",
  };
};
export const addToCart = (item) => {
  return {
    type: "ADD_TO_CART",
    payload: item,
  };
};
export const removeFromCart = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

export const placeOrder = (item) => {
  return {
    type: "PLACE_ORDER",
    payload: item,
  };
};

export const getOrderHistory = () => {
  return {
    type: "GET_ORDER_HISTORY",
  };
};

export const clearSuccessOrderStatus = () => {
  return {
    type: "CLEAR_SUCCESS_ORDER_STATUS",
  };
};

export const cancelOrder = (item) => {
  return {
    type: "REMOVE_FROM_CART",
    payload: item,
  };
};

// export const updateCommentData = (data) => {
//   return {
//     type: "UPDATE_COMMENT_DATA",
//     payload: data,
//   };
// };

// export const fetchCommentDataRequest = () => {
//   return async (dispatch, getState) => {
//     if (!localStorage.getItem("commentData")) {
//       const data = await fetch("https://jsonplaceholder.typicode.com/comments");
//       const response = await data.json();
//       let color = generateColor();

//       let filteredResponse = response.filter((item, index) => {
//         return index < 10;
//       });
//       let newFilteredResponse = filteredResponse.map((item, index) => {
//         return { ...item, color: color[index] };
//       });
//       localStorage.setItem("commentData", JSON.stringify(newFilteredResponse));
//       //dispatch(setInitialCommentData(newFilteredResponse));
//       dispatch({
//         type: "GET_COMMENT_DATA",
//         payload: newFilteredResponse,
//       });
//     } else {
//       dispatch({
//         type: "GET_COMMENT_DATA",
//         payload: JSON.parse(localStorage.getItem("commentData")),
//       });
//     }
//   };
// };

// const generateColor = () => {
//   let color = [];
//   for (let i = 0; i < 10; i++) {
//     color.push("#" + Math.random().toString(16).substr(-6));
//   }

//   return color;
// };
