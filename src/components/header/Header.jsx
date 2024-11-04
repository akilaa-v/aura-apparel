import "./Header.css";
import User from "./User";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import { useContext } from "react";
import CartContext from "../../store/CartContext";
import UserProgressContext from "../../store/UserProgressContext";
import Button from "../UI/Button";
import Input from "../UI/Input";

const Header = () => {

	const cartContext = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);
	const quantity = cartContext.products.reduce((total, product)=> total + product.quantity, 0)

	const handleShowCart = () => {
		userProgressCtx.showCart();
	}

	return (
		<header className="header-container">
			<img src={logo} alt="website logo" className="website-logo" />
			<form className=".search-form">
            <Input type="text" id="search-bar" placeholder="Search for products"></Input>
        </form>
			<User />
			<div className="cart-container">
				<button className="cart-btn" onClick={handleShowCart}>
					<img src={cart} className="cart-img"></img>
					<span>({quantity})</span>
				</button>
				{/* <button className="sign-out-btn">Sign out</button> */}
				<Button>Sign out</Button>
			</div>
		</header>
	);
};

export default Header;
