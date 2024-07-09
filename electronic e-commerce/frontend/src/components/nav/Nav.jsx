import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { Button } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Nav() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <div className='nav'>
      <div className='container-fluid'>
        <div className='part1'>
          <Button className='catTab'>
            <GridViewIcon /> &nbsp; Browse All Categories <KeyboardArrowDownIcon />
          </Button>
        </div>
        <div className='part2'>
          <nav>
            <ul className='list list-inline mb-0'>
              <li className='list-inline-item'><Button><Link to="">Home</Link></Button></li>
              <li className='list-inline-item'><Button><Link to="">About</Link></Button></li>
              <li className='list-inline-item'><Button><Link to="">Vendor</Link></Button></li>
              <li className='list-inline-item'><Button><Link to="">Shop</Link></Button></li>
              <li className='list-inline-item'><Button><Link to="">Mega Sale</Link></Button></li>
              <li className='list-inline-item'>
                <Button onClick={toggleDropdown}><Link to="#">Pages</Link></Button>
              </li>
              <li className='list-inline-item'><Button><Link to="/contact">Contact</Link></Button></li>
            </ul>
            {dropdownVisible && (
              <ul className='page-dropdown'>
              <li><Link to='/user'>User</Link></li>
                <li><Link to='/login'>Login</Link></li>
                <li><Link to='/signup'>Register</Link></li>
                <li><Link to='/forgotpassword'>Forgot Password</Link></li>
                <li><Link to='/purchase-guide'>Purchase Guide</Link></li>
                <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
                <li><Link to='/terms-service'>Term & Service</Link></li>
                <li><Link to='/404'>404 page</Link></li>
              </ul>
            )}
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Nav;
