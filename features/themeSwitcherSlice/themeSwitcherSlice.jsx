import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: "light"
}

export const themeSwitcherSlice = createSlice({
    name: "theme",
    initialState: initialState,
    reducers: {
        setTheme: (state, action) => {
            state.value = action.payload
        }
    }
})

export const { setTheme } = themeSwitcherSlice.actions;