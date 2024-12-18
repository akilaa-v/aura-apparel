import { useEffect, useState } from "react";
import "./AuthForm.css";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../UI/Button";
import useHttp from "../hooks/useHttp";

const requestConfig = {
	headers: {
		"Content-Type": "application/json",
	},
	method: "POST",
};

const AuthForm = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	let [searchParams] = useSearchParams();
	const navigate = useNavigate();
	const mode = searchParams.get("mode") || "login";
	const isLogin = mode === "login";
	const { data, sendRequest, clearData } = useHttp(
		"http://localhost:8080/" + mode,
		requestConfig,
		{}
	);

	console.log(isLogin, mode);

	useEffect(() => {
		if (
			data &&                          // Ensure `data` is not null or undefined
			typeof data === "object" &&      // Ensure `data` is an object
			Object.keys(data).length > 0 &&  // Ensure `data` is not an empty object
			(!data.errors || data.errors.length === 0) // Ensure `data.errors` is null, undefined, or empty
		) {
			navigate("/"); // Navigate to the home page
		}
	}, [data, navigate]);

	// Reset data and error when toggling between login and signup
	useEffect(() => {
		clearData(); // Clear data and error when the mode changes
	}, [mode, clearData]);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
		const authData = Object.fromEntries(formData.entries());
		sendRequest(JSON.stringify(authData), false);

		// Manage the token that we receive back from backend
	};

	return (
		<div className="auth-form-container">
			<h2>{isLogin ? "Login" : "Sign Up"}</h2>
			{data && data.errors && (
				<ul className="error-msg">
					{Object.values(data.errors).map((err) => (
						<li key={err}>{err}</li>
					))}
				</ul>
			)}
			<form onSubmit={handleSubmit} className="auth-form">
				<label htmlFor="e-mail">Email</label>
				<input
					type="email"
					name="email"
					id="e-mail"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					required
				/>

				<label htmlFor="password">Password</label>
				<input
					type="password"
					id="password"
					name="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					required
				/>

				{/* {!isLogin && (
					<>
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
						/>
					</>
				)} */}

				<Button type="submit" classes="auth-form-btn">
					{isLogin ? "Login" : "Sign Up"}{" "}
				</Button>
			</form>
			<p className="toggle-text">
				{isLogin ? "Don't have an account?" : "Already have an account?"}

				<Link to={`/auth/?mode=${isLogin ? "signup" : "login"}`}>
					<Button>{isLogin ? "Sign Up" : "Login"}</Button>
				</Link>
			</p>
		</div>
	);
};

export default AuthForm;
