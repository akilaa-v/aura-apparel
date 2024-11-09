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

	useEffect(() => {
		dispatch(fetchCartData());
	}, [dispatch]);

	useEffect(() => {
		if (initialLoad) {
			initialLoad = false;
			return;
		} else if (cart.changed) {
			dispatch(sendCartData(cart));
		}
	}, [cart, dispatch]);

	return <RouterProvider router={router} />;
}

export default App;
