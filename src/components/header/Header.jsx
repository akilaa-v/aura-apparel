import Cart from "./Cart";
import SearchBar from "./SearchBar";
import "./Header.css";
import User from "./User";
import logo from "../../assets/201975000.png"
const Header = () => {
	return (
		<header className="header-container">
			{/* <h1 className="website-name">Aura Apparel</h1> */}
			<img src={logo} alt="website logo" className="website-logo" />
			<SearchBar />
			<User/>
			<Cart />
		</header>
	);
};

export default Header;
