import Cart from "./Cart";
import SearchBar from "./SearchBar";
import "./NavigationBar.css";
import User from "./User";

const NavigationBar = () => {
	return (
		<header className="header-container">
			<h1 className="website-name">Aura Apparel</h1>
			<SearchBar />
			<User/>
			<Cart />
		</header>
	);
};

export default NavigationBar;
