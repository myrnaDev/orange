import React, { useState } from 'react';
import './Box.css';
import boxPhotos from './boxPhotos';

function Box() {
  const boxPhotosArr = boxPhotos;
  const [isHovered, setisHovered] = useState(-1);

  function handleMouseEnter(i) {
    setisHovered(i);
  }
  function handleMouseLeave(index) {
    setisHovered(-1);
  }

  return (
    <>
      {boxPhotosArr.map((boxP, i) => {
        const { id, src, category, text } = boxP;
        return (
          <div className={`box ${category}`} key={id}>
            <span className={"boxOverlay" + (isHovered === i ? " active" : "") } onMouseEnter={()=> handleMouseEnter(i)} onMouseLeave={handleMouseLeave}>
              <span className="boxContent">
                <span className="boxText">
                  {text}      
                </span>
                <span className="boxIcon">
                  <img src="../images/portfolio/more.png" alt="más" />
                </span>
              </span>
            </span>
            <img src={src} alt={text} />
          </div>
        );
      })}      
    </>

  )
}

export default Box;