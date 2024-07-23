import React from 'react';
import ProductItem from './ProductItem';
import './Collection.css';
import Ring from '../image/img/ring-collection.jpg';
import Earring from '../image/img/earing-collection.jpg';
import Bundal from '../image/img/Bangles-collection.jpg';
import Chain from '../image/img/chain-collection.jpg';
import EarringCollection from '../image/img/earing-collection.jpg';
import Bracelet from '../image/img/bracelet-collection.jpg';
import Necklace from '../image/img/gold-necklace.jpg';
import GoldEarring from '../image/img/gold-earrings.jpg';

const products = [
  {
    id: 1,
    name: 'Rose Gold Pearl Ring',
    price: 250.00,
    image: Ring,
    colors: ['rose-gold', 'gold', 'silver']
  },
  {
    id: 2,
    name: 'Rose Gold Rounded Earrings With Diamonds',
    price: 300.00,
    image: Earring,
    colors: ['rose-gold', 'gold', 'silver']
  },
  {
    id: 3,
    name: 'Rose Gold Diamonds Bundal Set',
    price: 320.00,
    image: Bundal,
    colors: ['rose-gold', 'gold', 'silver']
  },
  {
    id: 4,
    name: 'Rose Gold Rounded Flower Pendant With Chain',
    price: 280.30,
    image: Chain,
    colors: ['rose-gold', 'gold', 'silver']
  },
  {
    id: 5,
    name: 'C Shape Rose Gold Earrings',
    price: 280.30,
    image: EarringCollection,
    colors: ['rose-gold', 'gold', 'silver']
  },
  {
    id: 6,
    name: 'Platinum Bracelet Set',
    price: 280.30,
    image: Bracelet,
    colors: ['rose-gold', 'gold', 'silver']
  },
  {
    id: 7,
    name: 'Multilayer Rose Gold Pearl Necklace',
    price: 280.30,
    image: Necklace,
    colors: ['rose-gold', 'gold', 'silver']
  },
  {
    id: 8,
    name: 'Butterfly Shape Rose Gold Earrings',
    price: 280.30,
    image: GoldEarring,
    colors: ['rose-gold', 'gold', 'silver']
  }
];

function TopCollection() {
  return (
    <div className="container">
      <div className="centered-content">
        <h1>TOP COLLECTION</h1>
        <p className="description">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 1500s.
        </p>
      </div>
      
      <div className="product-grid">
        {products.map(product => (
          <ProductItem key={product.id} {...product} />
        ))}
      </div>
    </div>
  );
}

export default TopCollection;
