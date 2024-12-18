import { Navigate, createBrowserRouter } from "react-router-dom";
import RootLayout from "../pages/RootLayout";
import ProductList from "../components/products/ProductList";
import ProductDetails from "../components/products/ProductDetails";
import ErrorPage from "../pages/ErrorPage";
import AuthForm from "../components/auth/AuthForm";

// Router to define all the paths present in the application.
// This router is then passed to the <RouterProvider router={router} /> in the App.jsx.
const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		// Displays when the path is not found or when generic errors need to be handled.
		errorElement: <ErrorPage />,
		// These children routes come under "/" path. Like this many other routes can have children.
		// eg: "/admin", "/admin/user" (this is the child of "/admin")
		children: [
			// index true mean when the path is "" this element has to be shown
			{ index: true, element: <ProductList /> },
			{ path: "/product-details", element: <ProductDetails /> },
			// {
			// 	path: "/auth",
			// 	element: <Navigate to="/auth?mode=login" replace={true} />,
			// },
			{ path: "/auth", element: <AuthForm/>}
		],
	},
]);

export default router;
