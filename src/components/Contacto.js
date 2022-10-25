import './Contacto.css';
import Heading from './Heading';
import bgcontacto from "./images/bg/bgcontacto.jpg";
import bgIcon1 from "./images/bg/icon-mail.png"; 
import bgIcon2 from "./images/bg/icon-home.png"; 
import bgIcon3 from "./images/bg/icon-clock.png"; 
import bgIcon4 from "./images/bg/icon-call.png"; 

function Contacto(){
  return (
    <>      
      <section
        className="row-nav clearfix"
        data-height="400"
        id="contacto"
        style={{ backgroundImage:`url(${bgcontacto})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xs-12">
              <Heading
                bg="./images/icons/mail-icon.png"
                iconbg="bgcolorwhite"
                border="borderHeadwhite"
                bgcolor="bgcolororange"
                title="Contacto"
                subtitle="Te responderemos a la brevedad"
                titlecolor="colorwhite"
                subtitlecolor="colorwhite"
              />          
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div id="orangeform">
                <form>
                  <input type="text" id="nombre" name="nombre" placeholder="Nombre" className="form-og input1" />
                  <input type="text" id="email" name="email" placeholder="Email" className="form-og" />
                  <input type="tel" id="telefono" name="telefono" placeholder="Telefono" className="form-og" />
                  <div className="customform">
                    <label className="control radio">
                      <input type="radio" id="radio1" name="radio" />
                      <span className="control-indicator"></span>
                      Boleta
                    </label>
                    <label className="control radio">
                      <input type="radio" id="radio2" name="radio" />
                      <span className="control-indicator"></span>
                      Factura
                    </label>
                  </div>
                  <input type="text" id="rut" name="rut" placeholder="RUT Empresa" className="form-og" />
                  <div className="customform">
                    <label className="file">
                      <input type="file" id="file" />
                      <span className="file-custom"></span>
                    </label>
                  </div>
                  <textarea id="mensaje" name="mensaje"
                    placeholder="Recuerda siempre indicarnos cantidad, tipo de material y grosor."
                    className="form-og"></textarea>
                  <input type="submit" value="Enviar" className="form-og" />
                </form>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6">
              <div className="infocontainer">
                <div className="infocardcontacto whitebgextrawidth">
                  <span className="iconinfocardcontacto icon1" style={{ backgroundImage:`url(${bgIcon1})` }}></span>
                  <span className="infocardcontactotext whitebg">
                    <div><a href="mailto:ventas@orangefd.cl">ventas@orangefd.cl</a></div>
                  </span>
                </div>
                <div className="infocardcontacto">
                  <span className="iconinfocardcontacto icon2" style={{ backgroundImage:`url(${bgIcon2})` }}></span>
                  <span className="infocardcontactotext">
                    <div>Av. Egaña 879, Peñalolén<br /> (Metro Orientales)</div>
                  </span>
                </div>
                <div className="infocardcontacto">
                  <span className="iconinfocardcontacto icon3" style={{ backgroundImage:`url(${bgIcon3})` }}></span>
                  <span className="infocardcontactotext">
                    <div>Horario atención<br /> lunes a viernes <br />09:00 - 18:00 hrs. continuado</div>
                  </span>
                </div>
                <div className="infocardcontacto">
                  <span className="iconinfocardcontacto icon4" style={{ backgroundImage:`url(${bgIcon4})` }}></span>
                  <span className="infocardcontactotext">
                    <div>+ 56 2 2227 01 71</div>
                  </span>
                </div>
              </div>
              <div className="avioncontainer">
                <img src="images/contacto/avion.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>  
    </>
  );
}

export default Contacto;