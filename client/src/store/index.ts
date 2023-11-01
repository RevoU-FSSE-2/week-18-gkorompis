import { configureStore } from "@reduxjs/toolkit";
import { 
    navigationReducer, 
    jobsReducer, 
    cacheReducer, 
    reloadJobsReducer,
    editingReducer,
    usersReducer
} from "../reducers";

import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        jobs: jobsReducer,
        cache: cacheReducer,
        reloadJobs: reloadJobsReducer,
        editing: editingReducer,
        users: usersReducer
    },
    middleware: [thunk]
})

export default store;