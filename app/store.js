import { configureStore } from "@reduxjs/toolkit";
import { fontSelectorSlice } from "../features/fontSelectorSlice/fontSelectorSlice.jsx";
import { themeSwitcherSlice } from "../features/themeSwitcherSlice/themeSwitcherSlice.jsx";

export default configureStore({
    reducer: {
        font: fontSelectorSlice.reducer,
        theme: themeSwitcherSlice.reducer
    }
})