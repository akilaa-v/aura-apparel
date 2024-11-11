import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import Carousel from "../UI/Carousel";
import "./ProductDetails.css";
import { cartActions } from "../../store/CartSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Accordion from "../UI/Accordian";
import { items } from "../../assets/json/accordian";
import leftArrow from "../../assets/left-arrow.png";
import Features from "./Features";

const ProductDetails = () => {
	const [selectedSize, setSelectedSize] = useState("");
	const location = useLocation();
	const dispatch = useDispatch();
	const [sizeError, setSizeError] = useState(false);

	const { id, images, sizes, description, price, title, name } = location.state;

	const handleSizeSelect = (size) => {
		setSelectedSize(size);
		setSizeError(false);
	};

	const addProductToCart = () => {
		// when size is already selected then add to cart.
		if (selectedSize) {
			dispatch(
				cartActions.addProduct({
					// this id is constructed to created a unique id for the different sizes of the same product
					id: id + "-" + selectedSize,
					image: images[0],
					size: selectedSize,
					name,
					price,
				})
			);
			setSelectedSize("");
		} else {
			// else set error flag to true which will inturn enable the error message to be
			// displayed (check the jsx)
			setSizeError(true);
		}
	};
	return (
		<div className="prdct-container">
			{/* This NavLink is different from Link in a way that the className takes a function that automatically
			passes the isActive as argument which tells us if the link is active right now or not. we can use that
			to set the css classes  */}
			<NavLink to="/" className={() => "back-btn"}>
				<img src={leftArrow} alt="" className="left-arrow" />
				<span>Back</span>
			</NavLink>
			<div className="prdct-details">
				<div className="product-images">
					<Carousel images={images} />
				</div>
				<div className="details">
					<div className="product-title">{title}</div>
					<div className="product-price">
						&#8377; {price}{" "}
						<span style={{ fontWeight: 400, fontSize: "13px" }}>
							(Inclusive of tax)
						</span>
					</div>
					<span>Description:</span>
					<div className="description">{description}</div>
					{sizeError && <div className="size-error">Please select a size</div>}
					<div className="size-container">
						<div>
							{[...sizes].map((size) => (
								<Button
									classes={`size ${
										selectedSize === size ? "active-class" : ""
									}`}
									key={size}
									onClick={() => {
										handleSizeSelect(size);
									}}
								>
									{size}
								</Button>
							))}
						</div>
						<Button onClick={addProductToCart}>Add to Cart</Button>
					</div>
					<Features />
				</div>
			</div>
			<div className="accordian-container">
				<Accordion items={items} />
			</div>
		</div>
	);
};

export default ProductDetails;
