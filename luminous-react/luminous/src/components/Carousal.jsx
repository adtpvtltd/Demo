import React, { useState } from 'react';
import './Carousel.css';
import StarRing from './image/startfish.jpg';
import Bracelet from './image/platinium-bracelet.jpg';
import Pearl from './image/golden-pearl.jpg';
import CenterImage1 from './image/offerImage1.jpg';
import CenterImage2 from './image/offerImage2.jpg';


const leftProducts = [
  { id: 1, name: 'Star Sheap Gold Ring With Diamond', image: StarRing, description: '$ 240.00' },
  { id: 2, name: 'Platinium Bracelet With Diamond', image: Bracelet, description: '$ 200.00' },
];

const rightProducts = [
  { id: 3, name: 'Golden Pearl Ring Bracelet', image: Pearl, description: '$ 350.00' },
  { id: 4, name: 'Another Product', image: StarRing, description: '$ 400.00' },
];

const ProductCarousel = ({ products }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div className="carousel-container">
      <button className="carousel-button prev" onClick={prevSlide}>‹</button>
      <div className="carousel-wrapper">
        <div className="carousel-slide" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {products.map((product) => (
            <div className="carousel-item" key={product.id}>
              <img src={product.image} alt={product.name} />
              <div className="carousel-caption">
                <h3>{product.name}</h3>
                <p>{product.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-button next" onClick={nextSlide}>›</button>
    </div>
  );
};

const CombinedComponent = () => {
    return (
      <div className="main-container">
        <div className="carousel-section left-carousel">
          <ProductCarousel products={leftProducts} />
        </div>
        <div className="center-images">
          <div className="center-image-container">
            <img src={CenterImage1} alt="Center 1" className="center-image" />
            <div className="center-image-text">Save 60% on Rings</div>
          </div>
          <div className="center-image-container">
            <img src={CenterImage2} alt="Center 2" className="center-image" />
            <div className="center-image-text">Save 40% on Chains</div>
          </div>
        </div>
        <div className="carousel-section right-carousel">
          <ProductCarousel products={rightProducts} />
        </div>
      </div>
    );
  };
  
  export default CombinedComponent;