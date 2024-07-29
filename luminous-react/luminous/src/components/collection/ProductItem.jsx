import React from "react";

function ProductItem({ name, price, images, colors }) {

  return (
    <div className="product-item">
      {images.map((item) => (
        <img src={item.src} alt={name} />
      ))}
      <h3>{name}</h3>
      <p className="price">{`${price}`}</p>
      <div className="color-options">
        {/* {colors.map((color, index) => (
          <span key={index} className={`color ${color}`}></span>
        ))} */}
      </div>
    </div>
  );
}

export default ProductItem;
