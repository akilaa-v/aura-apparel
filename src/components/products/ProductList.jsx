import Product from "./Product";
import "./ProductList.css";
import products from "../../assets/product-list"

const ProductList = () => {
	// Need to update the product component to have an iteration based on the api results
	return (
		<section>
			{products.map((product)=>{
				return <Product key={product.id} product={product}/>
			})}
			
		</section>
	);
};

export default ProductList;
