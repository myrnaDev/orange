import './Footer.css';
import { Link, animateScroll  as scroll } from "react-scroll";

function Footer() {

  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  return (
    <>
      <section className="row-nav footerorange" id="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="footerlogo col-xs-12 col-sm-3 col-md-3">
              <div className="footerlogochild">
                <Link to='/' onClick={ scrollToTop } >
                  <div>
                    <img src="images/footer/orange-footer.png" alt="" />
                  </div>
                </Link>
                <div className="footerlogotext">
                  En Orange te entregamos asesoría, presupuestos inmediatos, los mejores precios y tiempos de entrega.
                </div>
              </div>
            </div>
            <div className="col-xs-12 col-sm-9 col-md-9">
              <nav className="menufooterorange">
                <ul>
                  <li className="nav-btn active">
                    <Link
                      to='quehacemos'
                      spy={true}
                      smooth='easeInOutQuad'
                      offset={-60}
                      duration={600}
                    >
                      Qué Hacemos
                    </Link>
                  </li>
                  <li className="nav-btn">
                    <Link 
                      to='nuestrotrabajo'
                      spy={true}
                      smooth='easeInOutQuad'
                      offset={-60}
                      duration={600}
                    >
                      Nuestro Trabajo
                    </Link>
                  </li>
                  <li className="nav-btn">
                    <Link 
                      to='equipamiento'
                      spy={true}
                      smooth='easeInOutQuad'
                      offset={-60}
                      duration={600}
                    >
                      Equipamiento
                    </Link>
                  </li>
                  <li className="nav-btn">
                    <Link 
                      to='comosubir'
                      spy={true}
                      smooth='easeInOutQuad'
                      offset={-60}
                      duration={600}
                    >
                      Cómo subir tu archivo
                    </Link>
                  </li>
                  <li className="nav-btn">
                    <Link 
                      to='contacto'
                      spy={true}
                      smooth='easeInOutQuad'
                      offset={-60}
                      duration={600}
                    >
                      Contacto
                    </Link>
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
                <a href="https://www.instagram.com/orange_fabrica_digital/?hl=es-la" target="_blank" rel="noreferrer">
                    <img src="images/footer/footer-instagram.png" alt="Instagram" />
                  </a>
                  <a href="https://www.youtube.com/channel/UCXn_nTggt-ItB68i1dKWTiA" target="_blank" rel="noreferrer">
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