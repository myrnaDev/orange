import './Footer.css';

function Footer() {
  return (
    <>
      <section className="row-nav footerorange" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="footerlogo col-xs-12 col-sm-3 col-md-3">
              <div className="footerlogochild">
                <div>
                  <img src="images/footer/orange-footer.png" alt="" />
                </div>
                <div className="footerlogotext">
                  En Orange te entregamos asesoría, presupuestos inmediatos, los mejores precios y tiempos de entrega.
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-9">
              <nav className="menufooterorange">
                <ul>
                  <li className="nav-btn active" data-row-id="quehacemos">
                    <a href="#">Qué Hacemos</a>
                  </li>
                  <li className="nav-btn" data-row-id="nuestrotrabajo">
                    <a href="#">Nuestro Trabajo</a>
                  </li>
                  <li className="nav-btn" data-row-id="equipamiento">
                    <a href="#">Equipamiento</a>
                  </li>
                  <li className="nav-btn" data-row-id="comosubir">
                    <a href="#">Cómo subir tu archivo</a>
                  </li>
                  <li className="nav-btn" data-row-id="contacto">
                    <a href="#">Contacto</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="clearfix"></div>
          <div className="row footerb">
            <div className="col-xs-12 col-sm-12">
              <div className="footersm">
                <div className="footersmchild">
                  <a href="#">
                    <img src="images/footer/footer-instagram.png" alt="Instagram" />
                  </a>
                  <a href="#">
                    <img src="images/footer/footer-youtube.png" alt="Youtube" />
                  </a>
                </div>
              </div>
              <p className="footerbottom">© 2020 Orange Fábrica Digital</p>
            </div>
          </div>
        </div>
        <div className="clearfix"></div>
      </section>      
    </>
  )
}

export default Footer;