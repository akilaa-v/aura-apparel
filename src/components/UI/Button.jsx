import { forwardRef } from "react";
import "./Button.css";

const Button = forwardRef(({ children, onClick, classes = "", disabled = false }, ref) => {
	return (
		<button ref={ref} className={`action-btn ${classes}`} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
});

export default Button;
