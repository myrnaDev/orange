import React, { useState } from 'react';
import './Box.css';
import BoxPhotos from './BoxPhotos';
import Album from './Album';

function Box() {
  const boxPhotosArr = BoxPhotos;
  const [isHovered, setisHovered] = useState(-1);
  
  function handleMouseEnter(i) {
    setisHovered(i);
  }
  function handleMouseLeave(index) {
    setisHovered(-1);
  }

  // state for Album.js
  const [opened, setOpened] = useState(false);
  const handleAlbum = () => setOpened(!opened);

  return (
    <>
      {boxPhotosArr.map((boxP, i) => {
        const { id, src, category, text } = boxP;
        return (
          <>            
            <div className={`box ${category}` + (opened ? " active" : "") } key={id} onClick={ handleAlbum }>
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
              <Album category={category} text={text}>

              </Album>
            </div>
           
          </>
        );
      })}      
    </>

  )
}

export default Box;