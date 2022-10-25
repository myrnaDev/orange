import React,  { useState } from 'react';
import { Link, animateScroll  as scroll } from "react-scroll";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const scrollToTop = () => {
    scroll.scrollToTop(); 
  };

  return (
    <>
      <div id="menu-content-wrap">
        <div className="menu-logo">
          <Link to='/' onClick={ scrollToTop } >
            <img src="images/menu/orange-logo.png" alt="" />
          </Link>
        </div>
        <nav className="nav">
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

        <div className="menu-smwrapper">
          <div className="menu-instagram menu-sm">
            <a href="https://www.instagram.com/orange_fabrica_digital/?hl=es-la" target="_blank" rel="noreferrer">
              <img src="images/menu/menu-instagram.png" alt="" />
            </a>
          </div>
          <div className="menu-youtube menu-sm">
            <a href="https://www.youtube.com/channel/UCXn_nTggt-ItB68i1dKWTiA" target="_blank" rel="noreferrer">
              <img src="images/menu/menu-youtube.png" alt="" />
            </a>
          </div>
        </div>

        <div className={"button_container" + (click ? " active" : "") } id="toggle" onClick={ handleClick }>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bottom"></span>
        </div>

        <div className={"overlay" + (click ? " open" : "") } id="overlay">
          <nav className="overlay-menu">
            <ul>
              <li className="nav-btn active" data-row-id="quehacemos">
                <Link to='#quehacemos' onClick={ closeMobileMenu } >
                  Qué Hacemos
                </Link>
              </li>
              <li className="nav-btn" data-row-id="nuestrotrabajo">
                <Link to='#nuestrotrabajo' onClick={ closeMobileMenu } >
                  Nuestro Trabajo
                </Link>
              </li>
              <li className="nav-btn" data-row-id="equipamiento">
                <Link to='#equipamiento' onClick={ closeMobileMenu } >
                  Equipamiento
                </Link>
              </li>
              <li className="nav-btn" data-row-id="comosubir">
                <Link to='#comosubir' onClick={ closeMobileMenu } >
                  Cómo subir tu archivo
                </Link>
              </li>
              <li className="nav-btn" data-row-id="contacto">
                <Link to='#contacto' onClick={ closeMobileMenu } >
                  Contacto
                </Link>
              </li>
              <li className="nav-btn">
                <div className="menu-instagram menu-sm">
                  <a href="https://www.instagram.com/orange_fabrica_digital/?hl=es-la" target="_blank" rel="noreferrer" onClick={ closeMobileMenu } >
                    <img src="images/menu/menu-instagram.png" alt="" />
                  </a>
                </div>
                <div className="menu-youtube menu-sm">
                  <a href="https://www.youtube.com/channel/UCXn_nTggt-ItB68i1dKWTiA" target="_blank" rel="noreferrer" onClick={ closeMobileMenu } >
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