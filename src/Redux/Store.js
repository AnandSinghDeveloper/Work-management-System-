import { configureStore } from "@reduxjs/toolkit";
import {todoSlice } from "./Slice";

const store = configureStore({
 reducer: todoSlice.reducer,
})

export default store