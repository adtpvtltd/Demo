// ProductSlider.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './ProductSlider.css'; // Your custom CSS file for styling

const products = [
  { name: 'Mobiles', icon: '📱' },
  { name: 'Air Conditioners', icon: '❄️' },
  { name: 'Televisions', icon: '📺' },
  { name: 'Refrigerators', icon: '🧊' },
  { name: 'Laptops', icon: '💻' },
  { name: 'Headphones & Earphones', icon: '🎧' },
  { name: 'Coolers', icon: '🌬️' },
  { name: 'Home Theatres & Soundbars', icon: '🔊' },
  { name: 'Washing Machines', icon: '🧺' },
  { name: 'Tablets', icon: '📱' },
];

const NextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block',  borderRadius: '50%', right: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block',  borderRadius: '50%', left: '10px', zIndex: 2 }}
      onClick={onClick}
    />
  );
};

const ProductSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <>
    <div className='heading'>
    <h1 >Features Category</h1>
   
    
    <Slider {...settings}>
      {products.map((product, index) => (
    
        
        <div key={index} className="product-slide">
          <div className="icon">{product.icon}</div>
          <div className="name">{product.name}</div>
        </div>
      
      ))}
    </Slider>
    </div>
    </>
  );
};

export default ProductSlider;
