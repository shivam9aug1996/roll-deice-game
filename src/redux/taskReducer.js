const initialState = {
  cartData: [],
  orderHistory: [],
  successfulOrder: false,
};

const taskReducer = (state = initialState, action) => {
  let obj = { ...action.payload };
  let data = state.cartData;
  switch (action.type) {
    case "ADD_TO_CART":
      let arr1 = [];
      if (data.length > 0) {
        let foundVal = {};

        let bolVal = data.every((item) => {
          if (item.id !== action.payload.id) {
            return true;
          } else {
            foundVal = item;
            return false;
          }
        });
        if (bolVal) {
          arr1 = [...state.cartData, { ...obj, quantity: 1 }];
        } else {
          let f = data.map((item) => {
            return item.id === parseInt(action.payload.id)
              ? { ...foundVal, quantity: foundVal.quantity + 1 }
              : item;
          });
          arr1 = f;
        }
      } else {
        arr1 = [{ ...obj, quantity: 1 }];
      }
      localStorage.setItem("cartData", JSON.stringify(arr1));
      return {
        ...state,
        cartData: arr1,
      };
    case "REMOVE_FROM_CART":
      let arr2 = [];
      if (data.length > 0) {
        let foundVal = {};

        let bolVal = data.every((item) => {
          if (item.id !== action.payload.id) {
            return true;
          } else {
            foundVal = item;
            return false;
          }
        });
        if (bolVal) {
          arr2 = [...state.cartData, { ...obj, quantity: 1 }];
        } else {
          let f = data.map((item) => {
            return item.id === parseInt(action.payload.id)
              ? { ...foundVal, quantity: foundVal.quantity - 1 }
              : item;
          });
          arr2 = f;
        }
      }
      let d = arr2.filter((item) => item.quantity > 0);
      localStorage.setItem("cartData", JSON.stringify(d));
      return {
        ...state,
        cartData: d,
      };

    case "GET_CART_DATA":
      return {
        ...state,
        cartData: localStorage.getItem("cartData")
          ? JSON.parse(localStorage.getItem("cartData"))
          : [],
      };
    case "GET_ORDER_HISTORY":
      return {
        ...state,
        orderHistory: localStorage.getItem("orderHistory")
          ? JSON.parse(localStorage.getItem("orderHistory"))
          : [],
      };
    case "PLACE_ORDER":
      let obj1 = {
        products: action.payload.cartData,
        totalMoney: action.payload.totalMoney,
        orderId: action.payload.orderId,
        date: action.payload.date,
      };
      localStorage.setItem(
        "orderHistory",
        JSON.stringify([...state.orderHistory, obj1])
      );
      localStorage.removeItem("cartData");

      return {
        ...state,
        orderHistory: [...state.orderHistory, obj1],
        cartData: [],
        successfulOrder: true,
      };
    case "CLEAR_SUCCESS_ORDER_STATUS":
      return {
        ...state,
        successfulOrder: false,
      };
    default:
      return state;
  }
};

export default taskReducer;
