import { combineReducers } from "redux";
import counterSlice from "../features/counterSlice";
import buttonSlice from "../features/ButtonSlice";

const rootReducer = combineReducers({
  button: buttonSlice.reducer,
  counter: counterSlice.reducer,
});

export default rootReducer;
