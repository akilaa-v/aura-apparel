import "./Cart.css";
import cart from "../../assets/cart.svg";
import { useContext } from "react";
import CartContext from "../../store/CartContext";

const Cart = () => {
	const cartContext = useContext(CartContext);
	const quantity = cartContext.products.reduce((total, product)=> total + product.quantity, 0)
	return (
		<div className="cart-container">
			<img src={cart} className="cart-img"></img>
			<span>({quantity})</span>
			<button className="sign-out-btn">Sign out</button>
		</div>
	);
};

export default Cart;
