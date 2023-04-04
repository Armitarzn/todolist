import { configureStore } from "@reduxjs/toolkit";
import  user  from "./userinfo";
export const store = configureStore ({
    reducer: {
        userinfo : user,
    }
})