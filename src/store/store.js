import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../../src/components/slice/UserSlice"

const store = configureStore({
    reducer: {
        items: UserSlice
    }
})

export default store