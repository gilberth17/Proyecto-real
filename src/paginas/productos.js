import React from 'react'
import {Link} from 'react-router-dom'
import {LogoutBotton} from './logout'

export default function productos() {
    return (
        <div>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta charset="utf-8"/>
            <meta name="keywords" content="the, Conqueror, of the world, Land Cruiser, services, 10 SRS AIRBAGS, NEW GRILLE AND HOOD DESIGN, 6-SPEED AUTOMATIC, Contact us"/>
            <meta name="description" content=""/>
            <meta name="page_type" content="np-template-header-footer-from-plugin"/>
            <title>Productos</title>
            <link rel="stylesheet" href="css/nicepageI.css" media="screen"/>
            <link rel="stylesheet" href="css/Productos.css" media="screen"/>

            <div className="u-body">
  <header className="u-clearfix u-header u-header" id="sec-6667">
    <div className="u-clearfix u-sheet u-sheet-1">
      <a
        href="https://nicepage.com"
        className="u-image u-logo u-image-1"
        data-image-width={345}
        data-image-height={240}
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
                <LogoutBotton/>
                <Link to='/'></Link>
                </li>

          </ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
        </div>
      </nav>
    </div>
  </header>
  <section className="u-clearfix u-gradient u-section-1" id="carousel_d546">
    <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
      <div className="u-gutter-0 u-layout">
        <div className="u-layout-row">
          <div className="u-size-23-sm u-size-23-xs u-size-31-lg u-size-31-xl u-size-60-md">
            <div className="u-layout-col">
              <div className="u-size-40">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-left-cell u-palette-5-light-3 u-shape-rectangle u-size-60 u-layout-cell-1">
                    <div className="u-container-layout u-container-layout-1">
                      <h1 className="u-align-center u-custom-font u-font-oswald u-text u-text-1">
                        Productos
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div className="u-size-20">
                <div className="u-layout-row">
                  <div className="u-container-style u-layout-cell u-palette-5-dark-3 u-size-60 u-layout-cell-2">
                    <div className="u-container-layout u-container-layout-2">
                      <h2 className="u-text u-text-default u-text-2">
                        Agregar Producto
                      </h2>
                      <div className="u-form u-form-1">
                        <form
                          action="#"
                          method="POST"
                          className="u-clearfix u-form-spacing-17 u-form-vertical u-inner-form"
                          source="custom"
                          name="form"
                          style={{ padding: 10 }}
                        >
                          <div className="u-form-group">
                            <label
                              htmlFor="email-52e8"
                              className="u-form-control-hidden u-label u-label-1"
                            />
                            <input
                              type="text"
                              placeholder="Codigo del producto"
                              id="email-52e8"
                              name="codigo_producto"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-19 u-white u-input-1"
                              required="required"
                            />
                          </div>
                          <div className="u-form-group u-form-name">
                            <label
                              htmlFor="name-52e8"
                              className="u-form-control-hidden u-label u-label-2"
                            />
                            <input
                              type="text"
                              placeholder="Producto"
                              id="name-52e8"
                              name="producto"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-19 u-white u-input-2"
                              required
                            />
                          </div>
                          <div className="u-form-group">
                            <label
                              htmlFor="message-52e8"
                              className="u-form-control-hidden u-label u-label-3"
                            />
                            <input
                              placeholder="Nit proveedor"
                              rows={4}
                              cols={50}
                              id="message-52e8"
                              name="nit_proveedor"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-19 u-white u-input-3"
                              required="required"
                              type="text"
                            />
                          </div>
                          <div className="u-form-group u-form-group-4">
                            <label
                              htmlFor="text-7869"
                              className="u-form-control-hidden u-label u-label-4"
                            />
                            <input
                              type="text"
                              placeholder="Precio de compra"
                              id="text-7869"
                              name="precio_compra"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-19 u-white u-input-4"
                              required="required"
                            />
                          </div>
                          <div className="u-form-group u-form-group-5">
                            <label
                              htmlFor="text-c04d"
                              className="u-form-control-hidden u-label u-label-5"
                            />
                            <input
                              type="text"
                              placeholder="IVA"
                              id="text-c04d"
                              name="iva"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-19 u-white u-input-5"
                              required="required"
                            />
                          </div>
                          <div className="u-form-group u-form-group-6">
                            <label
                              htmlFor="text-9d18"
                              className="u-form-control-hidden u-label u-label-6"
                            />
                            <input
                              type="text"
                              placeholder="Precio de ventas"
                              id="text-9d18"
                              name="precio_venta"
                              className="u-border-1 u-border-grey-30 u-input u-input-rectangle u-radius-19 u-white u-input-6"
                              required="required"
                            />
                          </div>
                          <div className="u-align-center u-form-group u-form-submit">
                            <a
                              href="#"
                              className="u-border-none u-btn u-btn-submit u-button-style u-grey-50 u-hover-palette-5-dark-2 u-btn-1"
                            >
                              Agregar
                            </a>
                            <input
                              type="submit"
                              defaultValue="submit"
                              className="u-form-control-hidden"
                            />
                          </div>
                          <div className="u-form-send-message u-form-send-success">
                            {" "}
                            Gracias! Tu mensaje ha sido enviado.{" "}
                          </div>
                          <div className="u-form-send-error u-form-send-message">
                            {" "}
                            No se puede enviar su mensaje. Por favor, corrija
                            los errores y vuelva a intentarlo.{" "}
                          </div>
                          <input
                            type="hidden"
                            defaultValue
                            name="recaptchaResponse"
                          />
                        </form>
                      </div>
                      <h3 className="u-text u-text-default u-text-3">
                        Codigo de producto
                      </h3>
                      <h3 className="u-text u-text-default u-text-4">
                        Producto
                      </h3>
                      <h3 className="u-text u-text-default u-text-5">
                        Nit Proveedor
                      </h3>
                      <h3 className="u-text u-text-default u-text-6">
                        Precio de Compra
                      </h3>
                      <h3 className="u-text u-text-default u-text-7">
                        IVA (%)
                      </h3>
                      <h3 className="u-text u-text-default u-text-8">
                        Precio de Ventas
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-size-29-lg u-size-29-xl u-size-37-sm u-size-37-xs u-size-60-md">
            <div className="u-layout-col">
              <div
                className="u-align-left u-container-style u-image u-layout-cell u-right-cell u-size-60 u-image-1"
                data-image-width={864}
                data-image-height={1080}
              >
                <div className="u-container-layout u-valign-middle u-container-layout-3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img
      className="u-expanded-width u-image u-image-default u-image-2"
      src="css/images/lamborghini-dark-wallpaper-preview.jpg"
      alt
      data-image-width={728}
      data-image-height={447}
    />
  </section>
</div>




        </div>
    )
}
