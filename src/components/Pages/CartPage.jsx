import React from "react";
import Layout from "../Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { addItem, removeItem, decreaseQuantity } from "../../utils/cartSlice";
import Total from "../Layout/Total";
import "./CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((store) => store.ttb.items);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addItem(item));
  };

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  const decreaseQty = (item) => {
    dispatch(decreaseQuantity(item));
  };

  return (
    <Layout>
      <div className="cart-container">
        <div className="cart-items-box">
          {cartItems.length === 0 ? (
            <p className="empty-cart-msg">Your cart is empty.</p>
          ) : (
            cartItems.map((cart) => (
              <div key={cart.id} className="cart-item">
                <div className="cart-img-box">
                  <img src={cart.image} alt={cart.title} />
                </div>

                <div className="cart-details">
                  <p className="cart-title">{cart.title}</p>
                  <p className="cart-price">
                    Price: <strong>${cart.price.toFixed(2)}</strong>
                  </p>

                  <div className="quantity-controls">
                    <button
                      onClick={() => decreaseQty(cart)}
                      className="qty-button"
                    >
                      −
                    </button>
                    <input
                      type="text"
                      value={cart.quantity}
                      readOnly
                      className="qty-input"
                    />
                    <button
                      onClick={() => handleAdd(cart)}
                      className="qty-button"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => handleRemove(cart)}
                  className="remove-btn"
                >
                  ✕
                </button>
              </div>
            ))
          )}
        </div>

        <div className="total-box">
          <Total />
        </div>
      </div>
    </Layout>
  );
};

export default CartPage;
