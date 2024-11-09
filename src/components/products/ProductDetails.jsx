import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Carousel from "../UI/Carousel";
import "./ProductDetails.css";
import { cartActions } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Accordion from "../UI/Accordian";
import { items } from "../../assets/json/accordian";

const ProductDetails = () => {
	const [selectedSize, setSelectedSize] = useState("");
	const location = useLocation();
	const dispatch = useDispatch();
	const [sizeError, setSizeError] = useState(false);

	const { id, images, sizes, description, price, name } = location.state;

	const handleSizeSelect = (size) => {
		setSelectedSize(size);
		setSizeError(false);
	};

	const addProductToCart = () => {
		if (selectedSize) {
			dispatch(
				cartActions.addProduct({
					id: id + "-" + selectedSize,
					image: images[0],
					size: selectedSize,
					name,
					price,
				})
			);
			setSelectedSize("");
		} else {
			setSizeError(true);
		}
	};
	return (
		<div className="prdct-container">
			<NavLink to="/" className={(isActive) => (isActive ? "" : "back-btn")}>
				Back
			</NavLink>
			<div className="prdct-details">
				<div className="product-images">
					<Carousel images={images} />
				</div>
				<div className="details">
					<div>
						<div className="product-title">{name}</div>
						<div>{description}</div>
						<div className="product-price">&#8377; {price}</div>
						{sizeError && (
							<div className="size-error">Please select a size</div>
						)}
						<div className="size-container">
							<div>
								{[...sizes].map((size) => (
									<Button
										classes="size"
										key={size}
										onClick={() => {
											handleSizeSelect(size);
										}}
									>
										{size}
									</Button>
								))}
							</div>
							<div className="add-to-cart-btn">
								{" "}
								<Button onClick={addProductToCart}>Add to Cart</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="accordian-container">
				<Accordion items={items} />
			</div>
		</div>
	);
};

export default ProductDetails;
