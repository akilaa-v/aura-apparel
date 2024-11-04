import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";
import "./Confetti.css";

const ConfettiContainer = () => {
	const [showConfetti, setShowConfetti] = useState(false);

	useEffect(() => {
		// Show confetti when the component mounts
		setShowConfetti(true);
		const timer = setTimeout(() => setShowConfetti(false), 5000); // Hide confetti after 3 seconds

		// Clean up the timer when the component unmounts
		return () => clearTimeout(timer);
	}, []); // Empty dependency array to run once on mount

	return (
		<div>
			{/* Confetti component */}
            {showConfetti && <div className="confetti-container">
					<Confetti />
				</div>}
			
			<h1 className="success-text">Order Placed Successfully!</h1>
		</div>
	);
};

export default ConfettiContainer;
