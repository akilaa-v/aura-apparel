import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Cart from "../components/header/Cart";
import Checkout from "../components/header/Checkout";

const RootLayout = () => {
	return (
		<>
			<Header />
			{/* Outlet is given to tell react where the children in the RootLayout.jsx has to be displayed 
			The Header and Footer are displayed in all children pages.
			*/}
            <Outlet/>
			<Footer />
			<Cart />
			<Checkout />
		</>
	);
};

export default RootLayout;
