import './Nuestrotrabajo.css';
import Heading from './Heading';
import Filter from './Filter';

function Nuestrotrabajo(){

  return (
    <>
      <section className="row-nav" data-height="600" id="nuestrotrabajo">
        <Heading
          bg="./images/icons/laser-icon.png"
          iconbg="bgcoloraqua"
          border="borderHeadorange"
          bgcolor="bgcolorwhite"
          titlethin="Nuestro"
          title="Trabajo"
          subtitle="Galería fotográfica de diferentes proyectos de quienes han
          confiado en nosotros"
          titlecolor="colorblack"
          subtitlecolor="colorblack"
        />
        <Filter />
      
      </section>
    </>
  );
}

export default Nuestrotrabajo;