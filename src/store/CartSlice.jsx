import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: { products: [], changed: false },
	reducers: {
		addProduct: (state, action) => {
			const existingProductIndex = state.products.findIndex(
				(product) =>
					product.id === action.payload.id &&
					product.size === action.payload.size
			);
			if (existingProductIndex > -1) {
				state.products[existingProductIndex].quantity++;
			} else {
				state.products.push({ ...action.payload, quantity: 1 });
			}
			state.changed = true;
		},
		removeProduct: (state, action) => {
			const existingProductIndex = state.products.findIndex(
				(product) => product.id === action.payload
			);

			if (state.products[existingProductIndex].quantity > 1) {
				state.products[existingProductIndex].quantity--;
			} else {
				state.products.splice(existingProductIndex, 1);
			}
			state.changed = true;
		},
		clearProducts: (state) => {
			state.products = [];
		},
		replaceCart: (state, action) => {
			state.products = action.payload.products;
		},
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;
