// import {createStore} from "redux";
// import Reducer from "./Reducer";
import {configureStore} from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import userprogressSlice from "./UserProgressSlice";

// This is used when we use redux alone without the redux toolkit. We create the reducer functions (refer Reducer.jsx)
// and pass it to the createStore. when I implemented vanilla redux I used single reducer to manage both the 
// cart and userProgress data.  
// const store = createStore(Reducer);


// This is used for redux toolkit. create slices refer the imports. Add the reducers in configureStore.
const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        userProgress: userprogressSlice.reducer
    }
});

export default store;