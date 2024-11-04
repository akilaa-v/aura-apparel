import "./Input.css";

const Input = ({ id, label, ...props }) => {
	return (
		<p className="input-container">
			<label htmlFor={id} className="label">{label}</label>
			<input className="input" id={id} name={id} {...props} required />
		</p>
	);
};

export default Input;
