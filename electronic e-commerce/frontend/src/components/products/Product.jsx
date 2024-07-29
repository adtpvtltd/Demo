import React, { useContext } from 'react';
import ReactStars from 'react-rating-stars-component';
import { CartContext } from '../../cart/CartContext';
import './Product.css';

const Product = ({ product }) => {
    const { addToCart } = useContext(CartContext);

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2 className="product-name">{product.name}</h2>
            <ReactStars
                count={5}
                value={product.rating}
                size={24}
                activeColor="#ffd700"
                edit={false}
            />
            <p className="product-price">{product.price}</p>
            <p className="product-discount">{product.discount}</p>
            <button className="product-button" onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    );
};

export default Product;
