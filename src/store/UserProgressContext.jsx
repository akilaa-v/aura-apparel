import { createContext, useState } from "react";

const UserProgressContext = createContext({
	userProgress: "",
	showCart: () => {},
	hide: () => {},
	showCheckout: () => {},
});

// Implemented all of this using redux. So this file is not being used right now. 
// Keeping this file for reference.

export const UserProgressContextProvider = ({ children }) => {
	const [userProgress, setUserProgress] = useState("");

	const showCart = () => {
		setUserProgress("cart");
	};

	const showCheckout = () => {
		setUserProgress("checkout");
	};

	const hide = () => {
		setUserProgress("");
	};

	const userProgressContextValue = {
		userProgress,
		showCart,
		showCheckout,
		hide,
	};
	return (
		<UserProgressContext.Provider value={userProgressContextValue}>
			{children}
		</UserProgressContext.Provider>
	);
};

export default UserProgressContext;
