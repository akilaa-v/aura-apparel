import React, { useState } from "react";
import "./Accordian.css";

const Accordion = ({ items }) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleToggle = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index)); // Toggle the active index
	};

	return (
		<div className="accordion">
			{items.map((item, index) => (
				<div key={index} className="accordion-item">
					<div className="accordion-title" onClick={() => handleToggle(index)}>
						{item.title}
						<span className="caret">
							{activeIndex === index ? "▼" : "►"} {/* Toggle caret symbol */}
						</span>
					</div>
					{activeIndex === index && (
						<div className="accordion-content">{item.content}</div>
					)}
				</div>
			))}
		</div>
	);
};

export default Accordion;
