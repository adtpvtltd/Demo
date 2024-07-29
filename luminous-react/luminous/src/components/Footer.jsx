import React from 'react';
import { FaFacebookF, FaGooglePlusG, FaTwitter, FaInstagram, FaRss } from 'react-icons/fa';
import './Footer.css';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="newsletter">
        <h2>KNOW IT ALL FIRST!</h2>
        <p>Never Miss Anything From Luminous By Signing Up To Our Newsletter.</p>
        <div className="subscribe">
          <input type="email" placeholder="Enter your email" />
          <button>SUBSCRIBE</button>
        </div>
      </div>
      
      <div className="footer-content">
        <div className="footer-logo">
          <h2>SUNDARAM</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</p>
          <div className="social-icons">
            <FaFacebookF />
            <FaGooglePlusG />
            <FaTwitter />
            <FaInstagram />
            <FaRss />
          </div>
        </div>
        
        <div className="footer-links">
          <h3>MY ACCOUNT</h3>
          <ul>
            <li>Mens</li>
            <li>Womens</li>
            <li>Clothing</li>
            <li>Accessories</li>
            <li>Featured</li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h3>WHY WE CHOOSE</h3>
          <ul>
            <li>Shipping & Return</li>
            <li>Secure Shopping</li>
            <li>Gallery</li>
            <li>Affiliates</li>
            <li>Contacts</li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h3>STORE INFORMATION</h3>
          <ul>
            <li>Luminous Demo Store, Demo Store India 345-659</li>
            <li>Call Us: 123-456-7898</li>
            <li>Email Us: Support@Luminous.Com</li>
            <li>Fax: 123456</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© 2023-24 Luminous powered by Aasakya Digitals</p>
        <div className="payment-icons">
          {/* Add payment icons here */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
