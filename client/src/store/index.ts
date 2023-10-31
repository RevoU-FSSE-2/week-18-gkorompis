import { configureStore } from "@reduxjs/toolkit";
import { navigationReducer, jobsReducer, cacheReducer } from "../reducers";

import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        jobs: jobsReducer,
        cache: cacheReducer
    },
    middleware: [thunk]
})

export default store;