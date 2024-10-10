import React from 'react';
import Product from './Product'; 
import './style.css'; 

const ProductList = ({ products, cart, setCart }) => {
  return (
    <div className="container">
      <h1 className="text-center">Products</h1>
      <div className="product-grid">
        {products.map(product => (
          <Product
            key={product.id}
            product={product}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
