import './Filter.css';
import Box from './Box';
import BoxPhotos from './BoxPhotos';
import { useState } from 'react';

function Filter() {
  const boxPhotosArr = BoxPhotos;
  const [filteredBoxes, setFilteredBoxes] = useState(boxPhotosArr);

  const filterBoxes = (e) => {
    let filter = e.target.dataset.filter;
    if (filter === '*') {
      setFilteredBoxes(boxPhotosArr);
    } else {
      setFilteredBoxes(boxPhotosArr.filter((box) => box.category === filter));
    }
  };

  return (
    <>
      <div className="container filter">
        <button
          className="orangeBtn filterBtn"
          data-filter="*"
          onClick={filterBoxes}
        >
          Todos
        </button>
        <button
          className="orangeBtn filterBtn"
          data-filter="laser"
          onClick={filterBoxes}
        >
          Láser
        </button>
        <button
          className="orangeBtn filterBtn"
          data-filter="router"
          onClick={filterBoxes}
        >
          Router
        </button>
      </div>

      <div className="container">
        <div className="boxGrid">
          <Box boxPhotosArr={filteredBoxes} />
        </div>
      </div>
    </>
  );
}

export default Filter;
