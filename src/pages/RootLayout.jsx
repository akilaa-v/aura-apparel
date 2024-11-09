import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cart from "../components/header/Cart";
import Checkout from "../components/header/Checkout";

const RootLayout = () => {
	return (
		<>
			<Header />
            <Outlet/>
			<Footer />
			<Cart />
			<Checkout />
		</>
	);
};

export default RootLayout;
