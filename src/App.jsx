import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Footer from "./components/footer/Footer";
import Cart from "./components/header/Cart";
import Checkout from "./components/header/Checkout";
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { useEffect } from "react";
import sendCartData, { fetchCartData } from "./store/CartActions";

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

	return (
		<>
			<Header />
			<ProductList />
			<Footer />
			<Cart />
			<Checkout />
		</>
	);
}

export default App;
