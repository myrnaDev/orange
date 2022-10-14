import './Equipamiento.css';
import Heading from './Heading';

function Equipamiento(){
  return (
    <>
      <section className="row-nav" data-height="600" id="equipamiento">
        <div className="container-fluid vcenter mwequipamiento">
          <div className="col-xs-12 col-sm-12 col-md-4 equipamientotitle">
            <div className="row">        
              <Heading
                bg="./images/icons/conveyor-icon.png"
                iconbg="bgcoloraqua"
                border="borderHeadorange"
                bgcolor="bgcolorgrayB"
                titlethin=""
                title="Equipamiento"
                subtitle="Contamos con rápidas y potentes máquinas para el
                desarrollo de los proyectos que realizamos"
              />          
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-8">
            <div className="row">
              <div className="equipcontainer equip1">
                <div className="equipimg">
                  <img src="images/equipamiento/equipamiento1.jpg" alt="" />
                </div>
                <div className="equiptext">
                  <blockquote className="quote quoteequip borderaqua">
                    <span className="quoteequiptitle">Una CNC Router</span>
                    área útil 2x3 metros y 20cm de altura
                  </blockquote>
                </div>
              </div>
              <div className="equipcontainer equip2">
                <div className="equipimg">
                  <img src="images/equipamiento/equipamiento2.jpg" alt="" />
                </div>
                <div className="equiptext">
                  <blockquote className="quote quoteequip borderorange">
                    <span className="quoteequiptitle">Una CNC Router</span>
                    área útil 2x3 metros y 20cm de altura
                  </blockquote>
                </div>
              </div>
            </div>
          </div>          
        </div>        
      </section>
    </>
  );
}

export default Equipamiento;