import { createContext, useReducer } from "react";
import CartReducer from "./CartReducer";

const CartContext = createContext({
	products: [],
	addProduct: (product) => {},
	removeProduct: (id) => {},
	clearCart : () => {}
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

	const clearCart = () => {
		dispatch({
			type: "CLEAR_CART"
		})
	}

	const cartValue = { products: cart.products, addProduct, removeProduct, clearCart };

	return (
		<CartContext.Provider value={cartValue}>{children}</CartContext.Provider>
	);
};

export default CartContext;
