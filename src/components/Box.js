import React, { useState } from 'react';
import './Box.css';
import boxPhotos from './boxPhotos';

function Box({ boxPhotos }) {
  const [isHovered, setisHovered] = useState(false);
  
  function handleMouseEnter() {
    setisHovered(true);
  }
  function handleMouseLeave() {
    setisHovered(false);
  }

  return (
    <div className="box">
      <span className={"boxOverlay" + (isHovered ? " active" : "") } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <span className="boxContent">
          <span className="boxText">
            {boxPhotos.map((box) => (
              {box}
            ))}         
          </span>
          <span className="boxIcon">
            <img src="../images/portfolio/more.png" alt="" />
          </span>
        </span>
      </span>
      <img src="../images/portfolio/laser_01.jpg" alt="" />
    </div>
  )
}

export default Box;