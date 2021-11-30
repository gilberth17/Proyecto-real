import React from 'react'
import {Link} from 'react-router-dom'
import {LogoutBotton} from './logout'

export default function inicio() {
    return (
        <div>
            <link rel="stylesheet" href="css/nicepageI.css" media="screen"/>
            <link rel="stylesheet" href="css/inicio.css" media="screen"></link>

            <div className="u-body u-overlap u-overlap-transparent">
  <header className="u-clearfix u-header u-header" id="sec-6667">
    <div className="u-clearfix u-sheet u-sheet-1">
      <a
        href="https://nicepage.com"
        className="u-image u-logo u-image-1"
        data-image-width={60}
        data-image-height={60}
      >
        <img
          src="css/images/logo-pagina.jpg"
          className="u-logo-image u-logo-image-1"
        />
      </a>
      <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
        <div
          className="menu-collapse"
          style={{ fontSize: "1rem", letterSpacing: 0 }}
        >
          <a
            className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
            href="#"
          >
            <svg>
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#menu-hamburger"
              />
            </svg>
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs>
                <symbol
                  id="menu-hamburger"
                  viewBox="0 0 16 16"
                  style={{ width: 16, height: 16 }}
                >
                  <rect y={1} width={16} height={2} />
                  <rect y={7} width={16} height={2} />
                  <rect y={13} width={16} height={2} />
                </symbol>
              </defs>
            </svg>
          </a>
        </div>
        <div className="u-custom-menu u-nav-container">
        <ul className="u-nav u-spacing-30 u-unstyled u-nav-1">
          <li className="u-nav-item">
                <Link to='/inicio'>Inicio</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/productos'>Productos</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/clientes'>Clientes</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/ventas'>Ventas</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/reportes'>Reportes</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/consolidacion'>Consolidación</Link>
                </li>
                <li className="u-nav-item">
                <LogoutBotton/>
                <Link to='/'></Link>
                </li>

          </ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close" />
              <ul className="u-nav u-spacing-30 u-unstyled u-nav-1">
          <li className="u-nav-item">
                <Link to='/inicio'>Inicio</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/productos'>Productos</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/clientes'>Clientes</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/ventas'>Ventas</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/reportes'>Reportes</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/consolidacion'>Consolidación</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/logout'>Logout</Link>
                </li>

          </ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
        </div>
      </nav>
    </div>
  </header>
  <section className="u-align-left u-clearfix u-section-1" id="carousel_81f1">
    <img
      className="u-expanded-width u-image u-image-1"
      src="css/images/zzzmin1.jpg"
    />
    <div className="u-border-11 u-border-palette-2-base u-line u-line-horizontal u-line-1" />
    <h1 className="u-heading-font u-text u-text-palette-5-dark-1 u-title u-text-1">
      Bienvenidos a nuestra tienda
    </h1>
  </section>
  <footer className="u-clearfix u-footer u-grey-80" id="sec-4338">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-align-center u-container-style u-group u-group-1">
      </div>
    </div>
  </footer>
</div>
        </div>
    )
}
