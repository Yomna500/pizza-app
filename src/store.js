import { configureStore } from "@reduxjs/toolkit";
import userReduser from "./features/user/userSlice";
import CartReducer from "./features/cart/cartSlice";

const store = configureStore({
  reducer: {
    user: userReduser,
    cart: CartReducer,
  },
});

export default store;
