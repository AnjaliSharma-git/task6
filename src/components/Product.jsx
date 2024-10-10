import React from 'react';
import './style.css'; 

const Product = ({ product, cart, setCart }) => {
  const isInCart = cart.find(item => item.id === product.id);

  const handleAddToCart = () => {
    if (isInCart) {
      setCart(cart.filter(item => item.id !== product.id));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <button onClick={handleAddToCart}>
        {isInCart ? 'Remove from Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default Product;
