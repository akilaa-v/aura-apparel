import { useContext, useEffect, useState } from "react";
import "./Product.css";
import CartContext from "../../store/CartContext";
import Button from "../UI/Button";

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
			<div className="product-details-container">
				<div className="product-details">
					<div>{name}</div>
					<div>&#8377; {price}</div>
				</div>
				{!show && <Button onClick={addProductToCart}>Add to Cart</Button>}
				{show && (
					<div className="action-btn-container">
						<Button onClick={removeProductFromCart} classes="action-icon">-</Button>
						<p className="product-qty">{quantity}</p>
						<Button onClick={addProductToCart} classes="action-icon">+</Button>
					</div>
				)}
			</div>
		</li>
	);
};

export default Product;
