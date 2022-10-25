import './QueHacemos.css';
import Heading from './Heading';
import Blockquote from './Blockquote';
import Button from './Button';
import bghacemos from "./images/bg/bghacemos.jpg"; 

function QueHacemos(){
  return (
    <>
      <section 
        className="row-nav" 
        data-height="600" 
        id="quehacemos" 
        style={{ backgroundImage:`url(${bghacemos})` }}>
          <Heading
            bg="./images/icons/gear-icon.png"
            iconbg="bgcoloraqua"
            border="borderHeadorange"
            bgcolor="bgcolorgrayF"
            titlethin="Qué"
            title="Hacemos"
            subtitle="Servicio de Corte CNC Láser y Router"
            titlecolor="colorblack"
            subtitlecolor="colorblack"
          />          
        <div className="container clearfix mwquehacemos">
          <div className="row">
            <div className="col-xs-12 col-sm-6 hacemosimg">
              <img src="images/quehacemos/quehacemos1.jpg" alt="" />
              <Blockquote blockColor="borderaqua" blockStyle="quotehacemos">
                Servicio de corte, grabado Router y Láser en placas de maderas, acrílicos y otros materiales no metálicos.
              </Blockquote>
            </div>
            <div className="col-xs-12 col-sm-6 hacemosimg">
              <img src="images/quehacemos/quehacemos2.jpg" alt="" />
              <Blockquote blockColor="borderaqua" blockStyle="quotehacemos">
                Mecanizado de relieves en 3D y plásticos técnicos.
              </Blockquote>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 center">
              <Button
                url="#"
                iconStyle="orangeBtnNoIcon"
                textStyle="none"
                text="Router"
              >
              </Button>
              <Button
                url="#"
                iconStyle="orangeBtnNoIcon"
                textStyle="none"
                text="Todos"
              >
              </Button>
            </div>
          </div>

          <div className="row">
            <div className="col-xs-12 center">
              <Button
                url="nuestrotrabajo"
                iconStyle=""
                iconBg="./images/icons/zoom-icon.png"
                textStyle="orangeBtnIconText"
                text="Ver Nuestro Trabajo"
              />
              <Button
                url="contacto"
                iconStyle=""
                iconBg="./images/icons/check-icon.png"
                textStyle="orangeBtnIconText"
                text="Cotiza Aquí"
              />
            </div>
          </div>
        </div>
      </section>      
    </>
  );
}

export default QueHacemos;