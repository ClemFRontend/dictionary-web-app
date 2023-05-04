import { configureStore } from "@reduxjs/toolkit";
import { fontSelectorSlice } from "../features/fontSelectorSlice/fontSelectorSlice";
import { themeSwitcherSlice } from "../features/themeSwitcherSlice/themeSwitcherSlice";

export default configureStore({
    reducer: {
        font: fontSelectorSlice.reducer,
        theme: themeSwitcherSlice.reducer
    }
})