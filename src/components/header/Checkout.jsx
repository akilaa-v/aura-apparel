import Input from "../UI/Input";
import Modal from "../UI/Modal";
import "./Checkout.css";
import Button from "../UI/Button";
import useHttp from "../hooks/useHttp";
import Error from "../UI/Error";
import ConfettiContainer from "../UI/Confetti";
import { useDispatch, useSelector } from "react-redux";
import { userProgressActions } from "../../store/UserProgressSlice";
import { cartActions } from "../../store/CartSlice";

const requestConfig = {
	headers: {
		"Content-Type": "application/json",
	},
	method: "POST",
};

const Checkout = () => {
	const products = useSelector((state) => state.cart.products);
	const userProgress = useSelector((state) => state.userProgress.userProgress);
	const dispatch = useDispatch();

	const {
		data,
		error,
		loading: isSending,
		sendRequest,
		clearData,
	} = useHttp(
		"https://aura-apparel-default-rtdb.europe-west1.firebasedatabase.app/order.json",
		requestConfig,
		[]
	);


	const totalPrice = products.reduce(
		(price, product) => price + product.quantity * product.price,
		0
	);
	const handleCloseCheckout = () => {
		dispatch(userProgressActions.hide());
	};

	const handleSubmit = (event) => {
		event.preventDefault(); // Prevent the form from submitting and refreshing the page

		// This creates an object of the FormData which has the key value pairs of the form(event.target).
		const formData = new FormData(event.target);
		// This gets all the key/value pairs from the formdata based on the name(entries) of the input field.
		// Object.fromEntries converts array of key value pairs to an object
		const customerData = Object.fromEntries(formData.entries());

		// Sending this order data to the backend (firebase in our case) to store the data.
		sendRequest(
			JSON.stringify({
				items: products,
				customer: customerData,
				date: new Date().toISOString(),
			})
		);
	};

	// After the order is placed successfully the close button in the modal closes the cart
	// also clears the cart.
	const handleFinish = () => {
		dispatch(userProgressActions.hide());
		dispatch(cartActions.clearProducts());
		// clearing this data in useHttp hook because the next time we get the data it is the same old data.
		clearData();
	};

	let actions = <Button>Place order</Button>;

	if (isSending) {
		actions = <Button disabled={true}>Sending data...</Button>;
	}

	if (
		data !== null &&
		typeof data === "object" &&
		Object.keys(data).length > 0 &&
		!error
	) {
		return (
			<Modal open={userProgress === "checkout"} onClose={handleFinish}>
				<ConfettiContainer />
				<Button onClick={handleFinish} classes="success-btn">
					Close
				</Button>
			</Modal>
		);
	}

	return (
		<Modal open={userProgress === "checkout"} onClose={handleCloseCheckout}>
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
						<Button onClick={handleCloseCheckout}>Close</Button>
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
