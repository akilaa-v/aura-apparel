import "./Button.css";

const Button = ({ children, onClick, classes = "", disabled = false }) => {
	return (
		<button className={`action-btn ${classes}`} onClick={onClick} disabled={disabled}>
			{children}
		</button>
	);
};

export default Button;
