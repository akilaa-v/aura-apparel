import Product from "./Product";
import "./ProductList.css";
import useHttp from "../hooks/useHttp";
import Error from "../UI/Error";

const config = {};
const ProductList = () => {
	const { data: fetchedProducts, loading, error } = useHttp(
		"https://aura-apparel-default-rtdb.europe-west1.firebasedatabase.app/products.json",
		config,
		[]
	);

	if (loading) {
		return <p className="center">Loading the products...</p>;
	}

	if(error) {
		return <Error title="Something went wrong!" message={error}/>
	}

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
