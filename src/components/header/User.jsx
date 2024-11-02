import "./User.css";
import carat from "../../assets/carat.svg";

const User = () => {
	return (
		<>
			<div className="user-container">
				<span>Hi, Akilaa</span>
				<img src={carat} alt="" className="carat-icon"/>
			</div>
			{/* <select id="user" name="user">
            <option value="" disabled selected>Hi, Akilaa</option>
				<option value="profile">Profile</option>
				<option value="orders">Orders</option>
				<option value="help">Help</option>
				<option value="terms">Terms & conditions</option>
			</select> */}
		</>
	);
};

export default User;
