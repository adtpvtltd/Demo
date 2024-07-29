import React, { useState, useEffect } from 'react';
import './Navbar.css';
import search from './image/search.png';
import setting from './image/setting.png';
import cart from './image/cart.png';

function Navbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const closeNav = () => {
    setIsNavOpen(false);
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.navbar')) {
        closeNav();
        closeSearchModal();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <h2>SUNDARAM</h2>
        </div>
        <ul className={`nav-links ${isNavOpen ? 'nav-open' : ''}`}>
          <li><a href="/">HOME</a></li>
          <li><a href="/">FEATURE</a></li>
          <li><a href="/">SHOP</a></li>
          <li><a href="/">PRODUCT</a></li>
          <li><a href="/">PAGES</a></li>
          <li><a href="/">BLOG</a></li>
        </ul>
        <div className="icons">
          <img src={search} alt="search" onClick={openSearchModal} />
          <img src={setting} alt="setting" />
          <img src={cart} alt="cart" />
          <div className="hamburger" onClick={toggleNav}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>

      {isSearchModalOpen && (
        <div className="search-modal">
          <div className="search-modal-content">
            <h2>Search by Keywords</h2>
            <input type="text" placeholder="Enter keywords..." />
            <button onClick={closeSearchModal}>Close</button>
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;
