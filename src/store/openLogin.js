import { createSlice } from "@reduxjs/toolkit";

const openLogin = createSlice({
    name: "openLogin",
    initialState: {
        open: false
    },

    reducers: {
        editOpenLog: (state, action) => {
            state.open = action.payload;
        }
    }
})

export const { editOpenLog } = openLogin.actions

export default openLogin.reducer