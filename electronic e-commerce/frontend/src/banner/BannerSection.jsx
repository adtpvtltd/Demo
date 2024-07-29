import React from 'react';
import './BannerSection.css';
import Img1 from './images/Img1.webp'
import Img2 from './images/Img2.webp'

const BannerSection = () => {
  return (
    <div className="banner-section">
    <h1 style={{color:'white'}}>Our New Favourites</h1>
      <div className="banner-container">
        <div className="banner monsoon-banner">
          <img src={Img1} alt="Monsoon Essentials" />
        </div>
        <div className="banner samsung-banner">
          <img src={Img2} alt="Samsung Galaxy Unpacked" />
        </div>
      </div>
    </div>
  );
};

export default BannerSection;