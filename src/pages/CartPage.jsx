import React from 'react';
import './style.css'; // Import CSS file

const CartPage = ({ cart, setCart }) => {
  const handleQuantityChange = (id, delta) => {
    setCart(cart.map(item => item.id === id
      ? { ...item, quantity: Math.max(item.quantity + delta, 1) }
      : item));
  };

  const handleRemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1 className="text-center">Your Cart</h1>
      {cart.length === 0 ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-list">
            {cart.map(item => (
              <div className="cart-item" key={item.id}>
                <div className="cart-item-details">
                  <h3 className="cart-item-title">{item.title}</h3>
                  <p className="cart-item-price">Price: ${item.price.toFixed(2)}</p>
                  <p className="cart-item-quantity">Quantity: {item.quantity}</p>
                  <div className="quantity-controls">
                    <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                    <button className="quantity-btn" onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                  </div>
                </div>
                <p className="cart-item-total">Total: ${(item.price * item.quantity).toFixed(2)}</p>
                <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>Remove from Cart</button>
              </div>
            ))}
          </div>
          <h2 className="total-price">Total Price: ${(totalPrice * 0.9).toFixed(2)} (10% Discount Applied)</h2>
        </>
      )}
    </div>
  );
};

export default CartPage;
