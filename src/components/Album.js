import { useState } from 'react';
import './Album.css';
//import { nav1, nav2 } from './boxAlbums';

function Album(props) {
  //const boxAlbums1 = nav1;
  //const boxAlbums2 = nav2;
  const [opened, setOpened] = useState(false);

  //const handleAlbum = () => setOpened(!opened);
  const closeOverAlbum = () => setOpened(false);

  return (
    <>
      <div>
        <div className={`overAlbum ${props.id}` + (opened ? " opened" : "") } >
          <div className="overAlbum_text">{props.text}</div>
          <div className="closeAlbum" onClick={ closeOverAlbum } >x</div>
        </div>
      </div>     
    </>

  )
}

export default Album;