import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Nav from './nav/Nav';
import Banner from './Banner'
import Slider from './catSlider/Slider';

// react-icons
import { FaUser, FaShoppingCart, FaMapMarkerAlt } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import Button from '@mui/material/Button';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import PowerSettingsNewOutlinedIcon from '@mui/icons-material/PowerSettingsNewOutlined';

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const location = useLocation();

  // Check if the current path is the login page
  if (location.pathname === '/login') {
    return null; // Do not render the Navbar
  }

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <>
      <header>
        <div className='links'>
          <Link to='/'>Find Store</Link>
          <Link to='/'>Buying Guides</Link>
          <Link to='/'>Contact Us</Link>
        </div>
      </header>
      <nav className='navbar'>
        <div className='logo'>
          <h1>ByteBazaar</h1>
        </div>

        <div className="search">
          <input type="search" placeholder="What are you looking for?" />
          <span className="icon"><IoIosSearch /></span>
        </div>

        <div className='nav-links'>
          <Link to='/'><Button><FaMapMarkerAlt /> Location</Button></Link>
          <Link to='#'><Button><FaShoppingCart /> Cart</Button> </Link>
          <Button onClick={toggleDropdown}><FaUser /> Account</Button>
        </div>
      </nav>
      {dropdownVisible && (
        <ul className='account-dropdown'>
          <li><Button><PersonOutlineOutlinedIcon />My Account</Button></li>
          <li><Button><LocationSearchingOutlinedIcon /> Order Tracking</Button></li>
          <li><Button><FavoriteBorderOutlinedIcon />My Wishlist</Button></li>
          <li><Button><SettingsOutlinedIcon />Settings</Button></li>
          <li><Button><PowerSettingsNewOutlinedIcon />Sign Out</Button></li>
        </ul>
      )}
    <Nav/>
    <Banner/>
    <Slider/>
    </>
  );
}

export default Navbar;
