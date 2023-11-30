import { configureStore } from "@reduxjs/toolkit";
import WishListSlice from "./slices/WishListSlice";
import cartSlice from "./slices/cartSlice";


const  store = configureStore({
    reducer:{
      wishListReducer:WishListSlice,
      cartReducer:cartSlice
    }
})

export default store