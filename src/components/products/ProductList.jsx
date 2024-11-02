import { useEffect, useState } from "react";
import Product from "./Product";
import "./ProductList.css";

const ProductList = () => {
	const [fetchedProducts, setFetchedProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await fetch("http://localhost:3000/products");
			const products = await response.json();
			setFetchedProducts(products);
		};
		fetchProducts();
	}, []);

	// const fetchProducts = async () => {
	// 	const response = await fetch("http:localhost:3000/products");
	// 	const products = await response.json();
	// 	setFetchedProducts(products);
	// };

	// Need to update the product component to have an iteration based on the api results
	return (
		<section>
			{fetchedProducts &&
				fetchedProducts.map((product) => (
					<Product key={product.id} product={product} />
				))}
		</section>
	);
};

export default ProductList;
