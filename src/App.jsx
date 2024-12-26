import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import sendCartData, { fetchCartData } from "./store/CartActions";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";

let initialLoad = true;

function App() {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	// Fetch the cart data from firebase when the app is refreshed (loaded for the first time)
	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		// We don't want to send the data to firebase when the app is loaded for the first time.
		if (initialLoad) {
			initialLoad = false;
			return;
		} else if (cart.changed) {
			// whenever the cart data is changed then send the cart data to firebase.
			// sendCartData is an action creator written by me.
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

	return <RouterProvider router={router}/>;
}

export default App;
