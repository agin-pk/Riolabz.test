import { configureStore } from "@reduxjs/toolkit";
import apireducer from "./apislice"


const store = configureStore({
    reducer: {
        api: apireducer
    }
})

export default store;