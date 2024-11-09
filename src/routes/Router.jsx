import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ProductList from "../components/products/ProductList";
import ProductDetails from "../components/products/ProductDetails";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		errorElement: <ErrorPage/>,
		children: [
			{ path: "/", element: <ProductList /> },
			{ path: "/product-details", element: <ProductDetails /> },
		],
	},
]);

export default router;