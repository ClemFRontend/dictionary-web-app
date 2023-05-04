import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "Sans Serif"
}

export const fontSelectorSlice = createSlice({
    name: "font",
    initialState: initialState,
    reducers: {
        setFont: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setFont } = fontSelectorSlice.actions;