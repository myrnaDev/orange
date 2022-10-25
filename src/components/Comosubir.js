import './Comosubir.css';
import Heading from './Heading';
import Blockquote from './Blockquote';

function Comosubir(){
  return (
    <>      
      <section className="row-nav" data-height="400" id="comosubir">
        <div className="container mwcomosubir">
          <div className="row">
            <div className="col-xs-12">
              <Heading
                bg="./images/icons/fileup-icon.png"
                iconbg="bgcoloraqua"
                border="borderHeadorange"
                bgcolor="bgcolorwhite"
                titlethin="Cómo"
                title="Subir tu Archivo"
                subtitle="Instrucciones para un trabajo eficiente"
                titlecolor="colorblack"
                subtitlecolor="colorblack"
              />          
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 center comos">
              <img src="images/comosubir/01.jpg" alt="" />
              <Blockquote blockColor="borderorange" blockStyle="quotesubir">
                Todas las figuras a grabar o cortar deben venir en escala 1:1 en milímetros.
              </Blockquote>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 center comos">
              <img src="images/comosubir/02.jpg" alt="" />
              <Blockquote blockColor="borderorange" blockStyle="quotesubir">
                Asegurate de que los vectores sean polilíneas y se encuentren cerrados para que la máquina
                los pueda reconocer.
              </Blockquote>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 center comos">
              <img src="images/comosubir/03.jpg" alt="" />
              <Blockquote blockColor="borderorange" blockStyle="quotesubir">
                Debes Indicar claramente qué es, grabado relleno, grabado de líneas y corte. Puedes utilizar colores
                diferentes para cada uno.
              </Blockquote>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-3 col-lg-3 center comos">
              <img src="images/comosubir/04.jpg" alt="" />
              <Blockquote blockColor="borderorange" blockStyle="quotesubir">
                Si hay más de una línea sobre el mismo trazo o puntos repetidos, la máquina lo interpreta como error.
              </Blockquote>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="row">
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center comos">
              <img src="images/comosubir/05.jpg" alt="" />
              <Blockquote blockColor="borderaqua" blockStyle="quotesubir">
                Envíanos tu archivo en:<br />
                - Illustrator (.ai) <br />
                - Autocad (.dwg o .dxf ) <br />
                - Para 3D (.STL)<br />
                - PDF (desde un original en vectores)<br />
              </Blockquote>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center comos">
              <img src="images/comosubir/06.jpg" alt="" />
              <Blockquote blockColor="borderaqua" blockStyle="quotesubir">
                Podemos cortar y grabar en Láser:
                MDF hasta 9 mm, Terciado hasta 6 mm, Acrílicos hasta 15 mm, Cartones, Cueros, Telas, Trovicel, Foam,
                Espumas de alta densidad,
                y otros.
              </Blockquote>
            </div>
            <div className="col-xs-12 col-sm-6 col-md-4 col-lg-4 center comos">
              <img src="images/comosubir/07.jpg" alt="" />
              <Blockquote blockColor="borderaqua" blockStyle="quotesubir">
                Cortamos y Grabamos en Router:
                Terciados, MDF, Enchapados, Melaminas, Aglomerados, Maderas Nativas, Aluminio Compuesto (Alucobond),
                Trovicel, Acrílicos, Corian-Staron, Plásticos Técnicos,
                y otros..
              </Blockquote>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>      
    </>
  );
}

export default Comosubir;