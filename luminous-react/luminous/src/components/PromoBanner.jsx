import React from 'react'
import Banner from './image/img/parallax-banner.jpg'
import './PromoBanner.css' 

function PromoBanner() {
  return (
    <div className='promo-banner'>
      <img src={Banner} alt='2024 Fashion Trends' />
      <div className='banner-text'>
        <h2>2024</h2>
        <h3>FASHION TRENDS</h3>
        <h4>SPECIAL OFFERS</h4>
      </div>
    </div>
  )
}

export default PromoBanner