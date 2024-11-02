import "./Product.css";

const Product = ({product}) => {
    const {name, price, img} = product;
	return (
		<div className="product-container">
			<img src={img} className="product-img"></img>
            <div className="product-details">
			<div>{name}</div>
			<div>&#8377; {price}</div>
            </div>
            <button className="add-to-cart-btn">Add to cart</button>
		</div>
	);
};

export default Product;
