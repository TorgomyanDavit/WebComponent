import { configureStore } from "@reduxjs/toolkit";
import aplicationReducers from "../features/aplication/aplicationSlice"



export const store = configureStore({
    reducer:{
        aplication:aplicationReducers
    }
})

