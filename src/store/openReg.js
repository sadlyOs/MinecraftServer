import { createSlice } from "@reduxjs/toolkit";

const openReg = createSlice({
    name: "openReg",
    initialState: {
        open: false
    },

    reducers: {
        editOpenReg: (state, action) => {
            state.open = action.payload;
        }
    }
})

export const { editOpenReg } = openReg.actions

export default openReg.reducer