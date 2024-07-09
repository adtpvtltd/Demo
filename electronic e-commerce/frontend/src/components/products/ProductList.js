import React from 'react';
import Product from './Product';
import './ProductList.css'; // Create a CSS file for styling

const ProductList = () => {
    const products = [
        {
            name: 'Redmi 12 5G Jade Black',
            image: 'https://m.media-amazon.com/images/I/71tCOhEigtL._AC_UY218_.jpg', 
            price: '₹12,499.00',
            discount: 'Save ₹1,000.00 with coupon',
            rating: 4.5
        },
        {
            name: 'iQOO Z7 Pro 5G (Blue Lagoon)',
            image: 'https://m.media-amazon.com/images/I/61Id6WJDWqL._AC_UY218_.jpg', 
            price: '₹23,999.00',
            discount: '',
            rating: 4.7 
        },
        {
            name: 'OnePlus Nord CE4 Lite 5G (Super Silver)',
            image: 'https://m.media-amazon.com/images/I/61Io5-ojWUL._AC_UY218_.jpg', 
            price: '₹19,999.00',
            discount: '-5% ₹20,999.00',
            rating:4.0
        },
        {
            name: 'Redmi note 13 pro 5g scarlet red',
            image: 'https://m.media-amazon.com/images/I/71r41+TT2UL._AC_UY218_.jpg', 
            price: '₹26,999.00',
            discount: '',
            rating: 5
        },
        {
            name: 'iQOO Neo9 Pro 5G (Conqueror Black)',
            image: 'https://m.media-amazon.com/images/I/61p6Zeag-7L._AC_UY218_.jpg', 
            price: '₹36,999.00',
            discount: '',
            rating: 4.3
        },
        {
            name: 'One Plus Nord C3 Lite 5G',
            image: 'https://m.media-amazon.com/images/I/41GVgsI2ymL._AC_UF480,480_SR480,480_.jpg', 
            price: '₹36,999.00',
            discount: '',
            rating: 4.3
        },
        {
            name: 'Redmi Note 13 5G',
            image: 'https://m.media-amazon.com/images/I/41ZlnmlOM-L._AC_UF480,480_SR480,480_.jpg', 
            price: '₹36,999.00',
            discount: '',
            rating: 4.3
        },
        {
            name: 'LAVA Yuva 3',
            image: 'https://m.media-amazon.com/images/I/41HcbW3ibOL._AC_UF480,480_SR480,480_.jpg', 
            price: '₹36,999.00',
            discount: '',
            rating: 4.3
        },
        {
            name: 'Redmi 13C 5G (Startrail Green)',
            image: 'https://m.media-amazon.com/images/I/81KFSdWCCEL._SX569_.jpg', 
            price: '₹13,999.00',
            discount: '-25% ₹10,499.00 ',
            rating: 4.3
        },
        {
            name: 'iQOO Neo9 Pro 5G (Firey Red)',
            image: 'https://m.media-amazon.com/images/I/41m-C1HHkIL._AC_UF480,480_SR480,480_.jpg', 
            price: '₹36,999.00',
            discount: '',
            rating: 4.3
        }
    ];

    return (
        <div className="product-list">
            {products.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </div>
    );
};

export default ProductList;
