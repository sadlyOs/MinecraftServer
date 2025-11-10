import { createSlice } from "@reduxjs/toolkit";

const openLogin = createSlice({
    name: "openLogin",
    initialState: {
        open: false
    },

    reducers: {
        editOpen: (state, action) => {
            state.open = action.payload;
        }
    }
})

export const { editOpen } = openLogin.actions

export default openLogin.reducer