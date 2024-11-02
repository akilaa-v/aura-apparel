import Cart from "./Cart";
import SearchBar from "./SearchBar";
import "./Header.css";
import User from "./User";

const Header = () => {
	return (
		<header className="header-container">
			<h1 className="website-name">Aura Apparel</h1>
			<SearchBar />
			<User/>
			<Cart />
		</header>
	);
};

export default Header;
