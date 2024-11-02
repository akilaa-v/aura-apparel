import "./Footer.css";
import email from "../../assets/email.png";
import instagram from "../../assets/social.png";
import phone from "../../assets/mobile.png";


const Footer = () => {
	return (
		<footer>
			<div className="footer-container">
				<div className="contact">
					<img src={email}></img>
					<span>aura.apparel@gmail.com</span>
				</div>
				<div className="contact">
					<img src={instagram}></img>
					<span>instagram link</span>
				</div>
				<div className="contact">
					<img src={phone}></img>
					<span>+91 9876543210</span>
				</div>
				
			</div>
		</footer>
	);
};

export default Footer;
