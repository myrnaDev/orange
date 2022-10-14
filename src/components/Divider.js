import './Divider.css';
import Button from './Button';

function Divider(){
  return (
    <>
      <section className="row-nav clearfix" data-height="600" id="rowdivider">
        <div className="container mwdivider">
          <div className="row">
            <div className="col-xs-12">
              <p className="dividertitle">
                En Orange te entregamos <span>asesoría, presupuestos inmediatos, los mejores
                  precios</span> y <span>tiempos de entrega</span>
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-6 dividerimg">
              <img src="images/divider/divider1.jpg" alt="" />
            </div>
            <div className="col-xs-12 col-md-6 dividerimg">
              <img src="images/divider/divider2.jpg" alt="" />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 center buttonpadding">
            <Button
                url="#"
                iconStyle=""
                iconBg="./images/icons/zoom-icon.png"
                textStyle="orangeBtnIconText"
                text="Ver Nuestro Trabajo"
              />
              <Button
                url="#"
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

export default Divider;