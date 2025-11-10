import { configureStore } from "@reduxjs/toolkit";
import openLoginReducer from './openLogin'
import openRegReducer from './openReg'

export const store = configureStore({
    reducer: {
        openLogin: openLoginReducer,
        openReg: openRegReducer
    }
})