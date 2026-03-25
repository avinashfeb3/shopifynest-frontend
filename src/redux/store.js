import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
  },
});
