const CartReducer = (state, action) => {
	
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
		default: {
			return state;
		}
	}
};

export default CartReducer;
