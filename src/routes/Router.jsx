import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ProductList from "../components/products/ProductList";
import ProductDetails from "../components/products/ProductDetails";
import ErrorPage from "../pages/ErrorPage";

// Router to define all the paths present in the application.
// This router is then passed to the <RouterProvider router={router} /> in the App.jsx.
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		// Displays when the path is not found or when generic errors need to be handled.
		errorElement: <ErrorPage/>,
		// These children routes come under "/" path. Like this many other routes can have children. 
		// eg: "/admin", "/admin/user" (this is the child of "/admin")
		children: [
			{ path: "/", element: <ProductList /> },
			{ path: "/product-details", element: <ProductDetails /> },
		],
	},
]);

export default router;