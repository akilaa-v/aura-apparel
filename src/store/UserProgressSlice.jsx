import { createSlice } from "@reduxjs/toolkit";
import Checkout from "../components/header/Checkout";

const userprogressSlice = createSlice({
	name: "userProgress",
	initialState: {
		userProgress: "",
	},
	reducers: {
		cart: (state) => {
			state.userProgress = "cart";
		},
		checkout: (state) => {
			state.userProgress = "checkout";
		},
		hide: (state) => {
			state.userProgress = "";
		},
	},
});

export const userProgressActions = userprogressSlice.actions;

export default userprogressSlice;
