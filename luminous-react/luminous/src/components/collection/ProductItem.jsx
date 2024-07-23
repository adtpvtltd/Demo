import React from 'react';

function ProductItem({ name, price, image, colors }) {
  return (
    <div className="product-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p className="price">${price.toFixed(2)}</p>
      <div className="color-options">
        {colors.map((color, index) => (
          <span key={index} className={`color ${color}`}></span>
        ))}
      </div>
    </div>
  );
}

export default ProductItem;