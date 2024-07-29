import React from 'react';
import './ServiceBar.css';
import { FaHeadset, FaGift, FaCreditCard } from 'react-icons/fa';
import { MdOutlineLocalShipping } from "react-icons/md";

const ServiceBar = () => {
  return (
    <div className="container">
      <div className="feature">
        <MdOutlineLocalShipping size={40} />
        <h3>Free Shipping</h3>
        <p>Free shipping in whole USA.</p>
      </div>
      <div className="feature">
        <FaHeadset size={40} />
        <h3>24x7 Service</h3>
        <p>Online service, 24/7.</p>
      </div>
      <div className="feature">
        <FaGift size={40} />
        <h3>Festival Offer</h3>
        <p>New Year Special Festival Offer.</p>
      </div>
      <div className="feature">
        <FaCreditCard size={40} />
        <h3>Online Payment</h3>
        <p>Secure online payment.</p>
      </div>
    </div>
  );
};

export default ServiceBar;
