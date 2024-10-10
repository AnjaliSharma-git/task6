import React, { useState, useEffect } from 'react';
import ProductList from '../components/ProductList';

const HomePage = ({ cart, setCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <ProductList products={products} cart={cart} setCart={setCart} />
    </div>
  );
};

export default HomePage;
