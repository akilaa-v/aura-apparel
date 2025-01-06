import "./Header.css";
import User from "./User";
import logo from "../../assets/logo.png";
import cart from "../../assets/cart.svg";
import Button from "../UI/Button";
import Input from "../UI/Input";
import { useDispatch, useSelector } from "react-redux";
import { userProgressActions } from "../../store/UserProgressSlice";
import { Link } from "react-router-dom";

const Header = () => {
	const products = useSelector(state => state.cart.products);
	const dispatch = useDispatch();
	// const userProgressCtx = useContext(UserProgressContext);
	const quantity = products.reduce((total, product)=> total + product.quantity, 0)

	const handleShowCart = () => {
		dispatch(userProgressActions.cart())
	}

	return (
		<header className="header-container">
			<Link to="/aura-apparel"><img src={logo} alt="website logo" className="website-logo" /></Link>
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
