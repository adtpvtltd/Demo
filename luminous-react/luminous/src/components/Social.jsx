// src/Social.js
import React from 'react';
import './Social.css';
import { FaInstagram } from 'react-icons/fa';
import insta1 from './image/insta-1.jpg';
import insta2 from './image/insta-2.jpg';
import insta3 from './image/insta-3.jpg';
import insta4 from './image/insta-4.jpg';
import insta5 from './image/insta-5.jpg';
import insta6 from './image/insta-6.jpg';
import insta7 from './image/insta-7.jpg';

const Social = () => {
    const images = [insta1, insta2, insta3, insta4, insta5, insta6, insta7];
    return (
        <div className="instagram">
            <h2># INSTAGRAM</h2>
            <div className="instagram-gallery">
                {images.map((src, index) => (
                    <div key={index} className="instagram-item">
                        <img src={src} alt={`Instagram ${index + 1}`} />
                        <div className="overlay">
                            <FaInstagram className="instagram-icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Social;