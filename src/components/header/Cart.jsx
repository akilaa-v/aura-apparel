import "./Cart.css";

import Modal from "../UI/Modal";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "../UI/Button";
import emptyCart from "../../assets/empty-cart.png";

const Cart = () => {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const totalPrice = cartCtx.products.reduce(
		(price, product) => price + product.quantity * product.price,
		0
	);

	const handleCloseCart = () => {
		userProgressCtx.hide();
	};

	const handleShowCheckout = () => {
		userProgressCtx.showCheckout();
	};

	const addProductToCart = (product) => {
		cartCtx.addProduct(product);
	};

	const removeProductFromCart = (id) => {
		cartCtx.removeProduct(id);
	};

	return (
		<Modal
			open={userProgressCtx.userProgress === "cart"}
			onClose={userProgressCtx.userProgress === "cart" ? handleCloseCart : null}
		>
			<h3 className="cart-title">Your cart details</h3>
			<ul className="cart-items">
				{totalPrice === 0 && (
					<div className="empty-cart">
						<img src={emptyCart} alt=""/>
						<p>Your cart is empty!</p>
					</div>
				)}
				{cartCtx.products.map((product) => (
					<li key={product.id} className="cart-item">
						<img
							className="cart-prdct-img"
							src={`http://localhost:3000/${product.img}`}
							alt=""
						/>
						<div>{product.name}</div>
						<span>&#8377;{product.price} </span>
						<p className="action-btn-container">
							<Button
								onClick={() => {
									removeProductFromCart(product.id);
								}}
								classes="action-icon"
							>
								-
							</Button>
							<span className="product-qty">{product.quantity}</span>
							<Button
								onClick={() => {
									addProductToCart(product);
								}}
								classes="action-icon"
							>
								+
							</Button>
						</p>
					</li>
				))}
			</ul>
			<div className="actions-container">
				<h4>Total Price : &#8377;{totalPrice}</h4>
				<div className="action-in-cart">
					<Button onClick={handleCloseCart}>Close</Button>
					{cartCtx.products.length > 0 && (
						<Button onClick={handleShowCheckout}>Checkout</Button>
					)}
				</div>
			</div>
		</Modal>
	);
};

export default Cart;
