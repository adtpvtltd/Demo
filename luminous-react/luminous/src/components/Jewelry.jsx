import React from 'react';
import './Jewelry.css';

// Images
import ring from './image/img/ring.jpg';
import pandent from './image/img/pandent.jpg';
import rings from './image/img/rings.jpg';
import chain from './image/img/chain.jpg';
import earings from './image/img/earings.jpg';

function Jewelry() {
  const promoItems = [
    { id: 1, image: ring, discount: 'SAVE 30%', text: 'GOLD' },
    { id: 2, image: pandent, discount: 'SAVE 60%', text: 'PENDANT' },
    { id: 3, image: rings, discount: 'SAVE 30%', text: 'RING' },
    { id: 4, image: chain, discount: 'SAVE 30%', text: 'CHAINS' },
    { id: 5, image: earings, discount: 'SAVE 60%', text: 'EARRINGS' },
  ];

  return (
    <div className="container">
      <div className="row">
        {promoItems.slice(0, 3).map(item => (
          <div key={item.id} className="promo-item">
            <img src={item.image} alt={item.text} />
            <div className="discount">{item.discount}</div>
            <div className="promo-text">{item.text}</div>
          </div>
        ))}
      </div>
      <div className="row">
        {promoItems.slice(3).map(item => (
          <div key={item.id} className="promo-item promo-item-large">
            <img src={item.image} alt={item.text} />
            <div className="discount">{item.discount}</div>
            <div className="promo-text">{item.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Jewelry;
