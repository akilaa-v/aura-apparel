import "./App.css";
import Footer from "./components/footer/Footer";
import NavigationBar from "./components/header/Header";
import ProductList from "./components/products/ProductList";
import { CartContextProvider } from "./store/CartContext";

function App() {
	return (
		<CartContextProvider>
			<NavigationBar />
			<ProductList />
			<Footer />
		</CartContextProvider>
	);
}

export default App;
