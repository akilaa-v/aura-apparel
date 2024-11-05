// import {createStore} from "redux";
// import Reducer from "./Reducer";
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import userprogressSlice from "./UserProgressSlice";

// const store = createStore(Reducer);

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        userProgress: userprogressSlice.reducer
    }
});

export default store;