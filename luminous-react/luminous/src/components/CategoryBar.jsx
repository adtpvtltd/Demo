import React from 'react';
import './CategoryBar.css';
import { ReactComponent as DiamondIcon } from './svg/diamond.svg'; 
import { ReactComponent as RingIcon } from './svg/ring.svg';
import { ReactComponent as NecklaceIcon } from './svg/necklacejewellery.svg';
import { ReactComponent as PiercingIcon } from './svg/earPiercing.svg';
import { ReactComponent as TiaraIcon } from './svg/tiara.svg';


const categories = [
  { icon: <RingIcon  />, label: 'RINGS' },
  { icon: <DiamondIcon  />, label: 'DIAMONDS' },
  { icon: <NecklaceIcon />, label: 'NECKLACES' },
  { icon: <PiercingIcon />, label: 'PIERCINGS' },
  { icon: <TiaraIcon />, label: 'TIARA' },
];

const CategoryBar = () => {
  return (
    <>
    <div className="category-bar">
      {categories.map((category, index) => (
        <div className="category-item" key={index}>
          <div className="category-icon">{category.icon}</div>
          <div className="category-label">{category.label}</div>
        </div>
      ))}
    </div>
  
        </>
  );
};

export default CategoryBar;
