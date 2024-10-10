import React from 'react';

const CartItem = ({ item, onQuantityChange, setCart }) => {
  const removeItem = () => {
    setCart(cart => cart.filter(cartItem => cartItem.id !== item.id));
  };

  return (
    <div className="cart-item">
      <h2>{item.title}</h2>
      <p>${item.price}</p>
      <div>
        <button onClick={() => onQuantityChange(item.id, -1)} disabled={item.quantity === 1}>
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => onQuantityChange(item.id, 1)}>+</button>
      </div>
      <button onClick={removeItem}>Remove from Cart</button>
      <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
    </div>
  );
};

export default CartItem;
