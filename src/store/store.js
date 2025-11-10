import { configureStore } from "@reduxjs/toolkit";
import openLoginReducer from './openLogin'

export const store = configureStore({
    reducer: {
        openLogin: openLoginReducer
    }
})