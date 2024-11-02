import "./Cart.css"
import cart from "../../assets/cart.svg"
const Cart = () => {

    return (
        <div className="cart-container">
        <img src={cart} className="cart-img"></img>
        <span>(0)</span>
        <button className="sign-out-btn">Sign out</button>
        </div>
    );
    };
    
    export default Cart;