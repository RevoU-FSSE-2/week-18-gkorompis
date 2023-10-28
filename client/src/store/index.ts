import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer } from "../reducers";
import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        navigation: navigationReducer
    },
    middleware: [thunk]
})

export default store;