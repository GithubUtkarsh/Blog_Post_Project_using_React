import {configureStore} from "@reduxjs/toolkit";
import authReducer from "./authSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        // add more slice here for post
    }
});

export default store;
