import "./Filter.css"
import Box from "./Box";

function Filter(){

  const filterBoxes = (e) => {
    const boxes = document.querySelectorAll(".box");
    let filter = e.target.dataset.filter;
    if (filter === '*') {
      boxes.forEach(box => box.classList.remove('hidden'));
    }  else {
      boxes.forEach(box => {
        box.classList.contains(filter) ? 
        box.classList.remove('hidden') : 
        box.classList.add('hidden');
      });
    };
  };

  return(
    <>
      <div className="container filter">
        <button className="orangeBtn filterBtn" data-filter="*" onClick={filterBoxes}>
          Todos
        </button>
        <button className="orangeBtn filterBtn" data-filter="laser" onClick={filterBoxes}>
          Láser
        </button>
        <button className="orangeBtn filterBtn" data-filter="router" onClick={filterBoxes}>
          Router
        </button>                     
      </div>

      <div className="container">
        <div className="boxGrid">
          <Box />
        </div>
      </div>   
    </>
  )
}

export default Filter;