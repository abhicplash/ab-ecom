import { useSelector } from "react-redux";
import "./Total.css";

const Total = () => {
  const cartItems = useSelector((store) => store.ttb.items);

  let totalQuantity = 0;
  let totalPrice = 0;
  cartItems.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });

  return (
    <div className="total-container">
      <p className="total-title">Order Summary</p>
      <div className="total-row">
        <span className="label">Total Quantity</span>
        <span className="value">{totalQuantity}</span>
      </div>
      <div className="total-row">
        <span className="label">Total Price</span>
        <span className="value">{"$" + totalPrice.toFixed(2)}</span>
      </div>
      <div className="checkout-wrapper">
        <button className="checkout-btn">Go to Checkout</button>
      </div>
    </div>
  );
};

export default Total;
