import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext({
	products: [],
	addProduct: (product) => {},
	removeProduct: (id) => {},
});

export const CartContextProvider = ({ children }) => {
	const [cart, dispatch] = useReducer(CartReducer, { products: [] });

	const addProduct = (product) => {
		dispatch({
			type: "ADD_PRDCT",
			product,
		});
	};

	const removeProduct = (id) => {
		dispatch({
			type: "REMOVE_PRDCT",
			id,
		});
	};

	const cartValue = { products: cart.products, addProduct, removeProduct };

	return (
		<CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
	);
};

export default CartContext;
