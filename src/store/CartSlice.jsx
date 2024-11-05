import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
	name: "cart",
	initialState: { products: [] },
	reducers: {
		addProduct: (state, action) => {
			const existingProductIndex = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
			if (existingProductIndex > -1) {
				state.products[existingProductIndex].quantity++;
			} else {
                console.log("payload product", action.payload)
				state.products.push({...action.payload, quantity: 1});
			}
		},
        removeProduct: () => {
            const existingProductIndex = state.products.findIndex(
				(product) => product.id === action.payload.id
			);
            if (state.products[existingProductIndex].quantity > 1) {
				state.products[existingProductIndex].quantity--;
			} else {
				state.products.splice(existingProductIndex, 1);
			}
        },
        clearProducts: (state) => {
            state.products = [];
        }
	},
});

export const cartActions = cartSlice.actions;
export default cartSlice;