import { configureStore } from "@reduxjs/toolkit";
import { 
    navigationReducer, 
    jobsReducer, 
    cacheReducer, 
    reloadJobsReducer,
    editingReducer,
    usersReducer,
    sessionProfileReducer
} from "../reducers";

import thunk from "redux-thunk";

const store = configureStore({
    reducer: {
        navigation: navigationReducer,
        jobs: jobsReducer,
        cache: cacheReducer,
        reloadJobs: reloadJobsReducer,
        editing: editingReducer,
        users: usersReducer,
        sessionProfile: sessionProfileReducer
    },
    middleware: [thunk]
})

export default store;