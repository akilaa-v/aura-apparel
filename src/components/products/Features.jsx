import "./Features.css";
import tick from "../../assets/tick.png";
import delivery from "../../assets/delivery.png";
import security from "../../assets/security.png";
import original from "../../assets/badge.png"

const Features = () => {
	return (
		<div className="features-container">
			<ul>
				<li>
					<img src={original} alt="" />
					<span>100% Original Products</span>
				</li>
				<li>
					<img src={tick} alt="" />
					<span>Free Delivery, Free Returns</span>
				</li>
				<li>
					<img src={delivery} alt="" />
					<span>COD available for orders below ₹5000</span>
				</li>
				<li>
					<img src={security} alt="" />
					<span>
						Secure transactions with hassle free 14 days Exchange and Returns
					</span>
				</li>
			</ul>
		</div>
	);
};

export default Features;
