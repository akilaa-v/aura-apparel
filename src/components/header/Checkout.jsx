import { createContext, useContext } from "react";
import Input from "../UI/Input";
import Modal from "../UI/Modal";
import "./Checkout.css";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "../UI/Button";
import CartContext from "../../store/CartContext";
import useHttp from "../hooks/useHttp";
import Error from "../UI/Error";
import ConfettiContainer from "../UI/Confetti";

const requestConfig = {
	headers: {
		"Content-Type": "application/json",
	},
	method: "POST",
};

const Checkout = () => {
	const userProgressCtx = useContext(UserProgressContext);
	const cartCtx = useContext(CartContext);

	const {
		data,
		error,
		loading: isSending,
		sendRequest,
		clearData
	} = useHttp("http://localhost:3000/orders", requestConfig, []);

	const totalPrice = cartCtx.products.reduce(
		(price, product) => price + product.quantity * product.price,
		0
	);
	const handleCloseCart = () => {
		userProgressCtx.hide();
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent the form from submitting and refreshing the page

		// This creates an object of the FormData which has the key value pairs of the form(event.target).
		const formData = new FormData(event.target);
		// This gets all the key/value pairs from the formdata based on the name(entries) of the input field.
		const customerData = Object.fromEntries(formData.entries());

		sendRequest(
			JSON.stringify({
				order: {
					items: cartCtx.products,
					customer: customerData,
				},
			})
		);
	};

	const handleFinish = () => {
		userProgressCtx.hide();
		cartCtx.clearCart();
		clearData();
	};

	let actions = <Button>Place order</Button>;

	if (isSending) {
		actions = <Button disabled={true}>Sending data...</Button>;
	}

	console.log(data, error);
	if (
		data !== null &&
		typeof data === "object" &&
		Object.keys(data).length > 0 &&
		!error
	) {
		return (
			<Modal
				open={userProgressCtx.userProgress === "checkout"}
				onClose={handleFinish}
			>
				<ConfettiContainer />
				<Button onClick={handleFinish} classes="success-btn">Close</Button>
			</Modal>
		);
	}

	return (
		<Modal
			open={userProgressCtx.userProgress === "checkout"}
			onClose={handleCloseCart}
		>
			<div className="checkout-title">
				<h2>Checkout</h2>
				<h3> Total Price : &#8377;{totalPrice}</h3>
			</div>
			<form onSubmit={handleSubmit} className="form-container">
				<Input id="name" type="text" label="Name"></Input>
				<Input id="email" type="email" label="Email"></Input>
				<Input id="phone" type="number" label="Phone" minLength="10"></Input>
				<Input id="address" type="text" label="Address"></Input>
				<Input id="street" type="text" label="Street"></Input>
				<Input
					id="pincode"
					type="text"
					pattern="\d{6}"
					maxLength="6"
					label="Pincode"
				></Input>
				{!error ? (
					<div className="checkout-btn-container">
						<Button onClick={handleCloseCart}>Close</Button>
						{actions}
					</div>
				) : (
					<Error title="Something went wrong!" message={error} />
				)}
			</form>
		</Modal>
	);
};

export default Checkout;
