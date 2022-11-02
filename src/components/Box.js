import React, { useState } from 'react';
import './Box.css';
import BoxPhotos from './BoxPhotos';

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
  const [opened, setOpened] = useState(-1);
  const handleAlbum = (i) => setOpened(i);

  const closeOverAlbum = (indexed) => setOpened(-1);

  return (
    <>
      {boxPhotosArr.map((boxP, i) => {
        const { id, src, category, text, album } = boxP;
        return (          
          <div className={`box ${category} box${id}` + (opened === i ? " opentheAlbum" : "") } key={`box${id}`} onClick={()=> handleAlbum(i) }>
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

            <div className="album" key={`album${id}`}>
              <div className={`overAlbum overAlbum${id}` + (opened === i ? " opened" : "") } >
                <div className="overAlbum_text">{text}</div>
                <div className="overAlbum_photos">{album}</div>
                <div className="closeAlbum" onClick={ closeOverAlbum } >x</div>
              </div>
            </div>

          </div>           
        );
      })}      
    </>

  )
}

export default Box;