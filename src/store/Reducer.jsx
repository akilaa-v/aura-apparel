// This reducer is not used in the implementation of this branch since we have made use of redux toolkit
// Keeping this for reference.

const Reducer = (state = { products: [] }, action) => {
	const updatedProducts = [...state.products];

	switch (action.type) {
		case "ADD_PRDCT": {
			const existingProductIndex = state.products.findIndex(
				(product) => product.id === action.product.id
			);
			if (existingProductIndex > -1) {
				const updatedProduct = {
					...state.products[existingProductIndex],
					quantity: state.products[existingProductIndex].quantity + 1,
				};
				updatedProducts[existingProductIndex] = updatedProduct;
			} else {
				updatedProducts.push({ ...action.product, quantity: 1 });
			}

			return { ...state, products: updatedProducts };
		}
		case "REMOVE_PRDCT": {
			const existingProductIndex = state.products.findIndex(
				(product) => product.id === action.id
			);
			if (updatedProducts[existingProductIndex].quantity > 1) {
				const updatedProduct = {
					...state.products[existingProductIndex],
					quantity: state.products[existingProductIndex].quantity - 1,
				};
				updatedProducts[existingProductIndex] = updatedProduct;
			} else {
				updatedProducts.splice(existingProductIndex, 1);
			}

			return { ...state, products: updatedProducts };
		}
		case "CLEAR_CART": {
			return { ...state, products: [] };
		}
		case "cart": {
			return {...state, userProgress: "cart"}
		}
		case "checkout": {
			return {...state, userProgress: "checkout"}
		}
		case "hide": {
			return {...state, userProgress: "hide"}
		}
		default: {
			return state;
		}
	}
};

export default Reducer;