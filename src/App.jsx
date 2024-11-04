import "./App.css";
import Footer from "./components/footer/Footer";
import Cart from "./components/header/Cart";
import Checkout from "./components/header/Checkout";
import Header from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { CartContextProvider } from "./store/CartContext";
import { UserProgressContextProvider } from "./store/UserProgressContext";

function App() {
	return (
		<CartContextProvider>
			<UserProgressContextProvider>
				<Header />
				<ProductList />
				<Footer />
				<Cart />
				<Checkout/>
			</UserProgressContextProvider>
		</CartContextProvider>
	);
}

export default App;
