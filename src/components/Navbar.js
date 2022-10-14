import './Navbar.css';

function Navbar() {
  return (
    <>
      <div id="menu-content-wrap">
        <div className="menu-logo">
          <a href="">
            <img src="images/menu/orange-logo.png" alt="" />
          </a>
        </div>
        <nav className="nav">
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

        <div className="menu-smwrapper">
          <div className="menu-instagram menu-sm">
            <a href="">
              <img src="images/menu/menu-instagram.png" alt="" />
            </a>
          </div>
          <div className="menu-youtube menu-sm">
            <a href="">
              <img src="images/menu/menu-youtube.png" alt="" />
            </a>
          </div>
        </div>

        <div className="button_container" id="toggle">
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>

        <div className="overlay" id="overlay">
          <nav className="overlay-menu">
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
              <li className="nav-btn">
                <div className="menu-instagram menu-sm">
                  <a href="">
                    <img src="images/menu/menu-instagram.png" alt="" />
                  </a>
                </div>
                <div className="menu-youtube menu-sm">
                  <a href="">
                    <img src="images/menu/menu-youtube.png" alt="" />
                  </a>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Navbar;