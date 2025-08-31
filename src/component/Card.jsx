import React from 'react'
import {BrowserRouter}from 'react-router-dom'
const Card = ({ title, price , category, discreption, rating ,image}) => {
  return (
    <div>
    
          <div  className="product-card">
            <img src={image} alt={title} className='product-image' />
            <h2 className="product-name">{title}</h2>
            <p className="product-price">💲{price}</p>
            <p className="product-category">📦 {category}</p>
            <p className="product-discreption">📝{discreption}</p>
            <p className="product-rating">⭐ {rating.rate}</p>
          </div>
      
    </div>
  )
}

export default Card
