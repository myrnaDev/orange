import React, { useState } from 'react';
import './Box.css';
import Modal from './Modal';

function Box({ boxPhotosArr }) {
  const [isHovered, setisHovered] = useState(-1);
  // state for Album.js Modal
  const [opened, setOpened] = useState();

  const handleMouseEnter = (i) => {
    setisHovered(i);
  };

  const handleMouseLeave = (index) => {
    setisHovered(-1);
  };

  const handleAlbum = (box) => {
    console.log('handleAlbum', box);
    setOpened(box);
  };

  const closeOverAlbum = () => setOpened();

  return (
    <div>
      {boxPhotosArr.map((box, i) => (
        <div key={i}>
          <div
            className={
              `box ${box.category} box${box.id}` +
              (opened === i ? ' opentheAlbum' : '')
            }
            key={`box${box.id}`}
            onClick={() => handleAlbum(box)}
          >
            <span
              className={'boxOverlay' + (isHovered === i ? ' active' : '')}
              onMouseEnter={() => handleMouseEnter(i)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="boxContent">
                <span className="boxText">{box.text}</span>
                <span className="boxIcon">
                  <img src="../images/portfolio/more.png" alt="más" />
                </span>
              </span>
            </span>
            <img src={box.src} alt={box.text} />
          </div>
        </div>
      ))}
      {/* Modal Code */}
      {opened && <Modal box={opened} closeOverAlbum={closeOverAlbum} />}
    </div>
  );
}

export default Box;
