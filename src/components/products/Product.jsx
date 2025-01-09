import "./Product.css";
import { useNavigate } from "react-router-dom";

const Product = ({ product }) => {
	const { id, name, price, images, tagline } = product;
	const navigate = useNavigate();

	const handleClick = () => {
		navigate("product-details", { state: product });
	};

	return (
		<li className="product-container" onClick={handleClick}>
			<img
				src={
					window.location.hostname === "akilaa-v.github.io"
					  ? `/aura-apparel/${images[0]}`
					  : `/${images[0]}`
				  }
				className="product-img"
			></img>
			<div className="product-details-container">
				<div className="product-details">
					<div>{name}</div>
					<div>&#8377; {price}</div>
				</div>
				<div className="tagline">{tagline}</div>
			</div>
		</li>
	);
};

export default Product;
