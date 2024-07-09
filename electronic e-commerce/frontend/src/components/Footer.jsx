import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa';
import './Footer.css';

function Footer() {
    const location = useLocation();

    if (location.pathname === '/login' || location.pathname === '/signup' || location.pathname === '/forgotpassword') {
        return null; // Do not render the Footer
    }

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-section">
                    <h4>Customer Service</h4>
                    <ul>
                        <li><Link to="?">Contact Us</Link></li>
                        <li><Link to="?">FAQ</Link></li>
                        <li><Link to="?">Returns</Link></li>
                        <li><Link to="?">Shipping Info</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>About Us</h4>
                    <ul>
                        <li><Link to="?">Our Story</Link></li>
                        <li><Link to="?">Careers</Link></li>
                        <li><Link to="?">Press</Link></li>
                        <li><Link to="?">Sustainability</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h4>Follow Us</h4>
                    <div className="social-icons">
                        <Link to="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></Link>
                        <Link to="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
                        <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
                        <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer"><FaYoutube /></Link>
                        <Link to="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></Link>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} ByteBazaar. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
