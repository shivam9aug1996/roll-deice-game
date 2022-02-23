import { combineReducers } from "redux";
import taskReducer from "./taskReducer";

const rootReducer = combineReducers({
  taskReducer: taskReducer,
});

export default rootReducer;
