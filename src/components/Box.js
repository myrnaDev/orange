import React, { useState } from 'react';
import './Box.css';
import boxPhotos from './boxPhotos';

function Box() {
  const boxPhotosArr = boxPhotos;
  const [isHovered, setisHovered] = useState(false);

  
  function handleMouseEnter() {
    setisHovered(true);
  }
  function handleMouseLeave(index) {
    setisHovered(false);
  }

  return (
    <>
      {boxPhotosArr.map((boxP, index) => {
        const { id, src, category, text } = boxP;
        return (
          <div className={`box ${category}`} key={id}>
            <span className={"boxOverlay" + (isHovered ? " active" : "") } onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <span className="boxContent">
                <span className="boxText">
                  {text}      
                </span>
                <span className="boxIcon">
                  <img src="../images/portfolio/more.png" alt="" />
                </span>
              </span>
            </span>
            <img src={src} alt="" />
          </div>
        );
      })}      
    </>

  )
}

export default Box;