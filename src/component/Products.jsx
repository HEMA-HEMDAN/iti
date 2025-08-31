import React from 'react'
import Card from './card.jsx'
import { useState,useEffect } from 'react'
const Products = () => {
  const [products, setProducts] = useState([]);

  async function getProducts() {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    setProducts(data);
    console.log(data);
    
    
  }

  useEffect(() => {
    getProducts();
  }, []);


  return (
    <div className="app">
      <h1 className="title">Product List</h1>
      <div className="product-list">
        {products.length > 0 ? (
          products.map((product, index) => (
            <Card key={index} {...product} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  )
}

export default Products

