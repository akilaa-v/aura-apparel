import { useContext, useEffect, useState } from "react";
import "./Product.css";
import CartContext from "../../store/CartContext";

const Product = ({ product }) => {
	const { id, name, price, img } = product;
	const [show, setShow] = useState(false);
	const [quantity, setQuantity] = useState(0);
	const cartContext = useContext(CartContext);
	let updatedQuantity = 0;

	useEffect(() => {
		const index = cartContext.products.findIndex(
			(product) => product.id === id
		);

		if (index > -1) {
			console.log("quantity", cartContext.products[index].quantity);
			updatedQuantity = cartContext.products[index].quantity;
			setQuantity(updatedQuantity);
			setShow(updatedQuantity > 0); // show if quantity is greater than 0
		} else {
			setQuantity(0);
			setShow(false);
		}
	}, [cartContext.products]); // re-run effect when products or index changes

	const addProductToCart = () => {
		cartContext.addProduct(product);
	};

	const removeProductFromCart = () => {
		cartContext.removeProduct(id);
	};

	return (
		<li className="product-container">
			<img src={`http://localhost:3000/${img}`} className="product-img"></img>
			<div className="product-details">
				<div>{name}</div>
				<div>&#8377; {price}</div>
			</div>
			{!show && (
				<button className="add-to-cart-btn" onClick={addProductToCart}>
					Add to cart
				</button>
			)}
			{show && (
				<p className="action-btn-container">
					<button className="action-btn" onClick={removeProductFromCart}>
						-
					</button>
					<span className="product-qty">{quantity}</span>
					<button className="action-btn" onClick={addProductToCart}>
						+
					</button>
				</p>
			)}
		</li>
	);
};

export default Product;
