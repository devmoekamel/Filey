import { configureStore } from "@reduxjs/toolkit";
import fileReducer from "./FileSlice";

export const Store = configureStore({
    reducer:{
        file:fileReducer
    }
})