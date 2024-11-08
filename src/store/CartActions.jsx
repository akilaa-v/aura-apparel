import { cartActions } from "./CartSlice";

const sendCartData = (cart) => {
	return async () => {
		const sendRequest = async () => {
			const response = await fetch(
				"https://aura-apparel-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
				{
					method: "PUT",
					body: JSON.stringify(cart),
				}
			);
			if (response.ok) {
				console.log("Data sent to cart successfully");
			}
		};
		await sendRequest().catch((error) => {
			console.log("Some error occurred ", error);
		});
	};
};

export const fetchCartData = () => {
	return async (dispatch) => {
		const sendRequest = async () => {
			const response = await fetch(
				"https://aura-apparel-default-rtdb.europe-west1.firebasedatabase.app/cart.json"
			);
			if (response.ok) {
				console.log("Data fetched from cart successfully");
			}
			const data = await response.json();
			return data;
		};
		try {
			const data = await sendRequest();
			dispatch(cartActions.replaceCart({
                products: data.products || [],
                changed: data.changed
            })); // Dispatch the action with fetched data
		} catch (error) {
			console.log("Some error occurred while fetching:", error);
		}
	};
};

export default sendCartData;
