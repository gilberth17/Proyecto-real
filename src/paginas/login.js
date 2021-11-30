import React from 'react'
import {Link} from 'react-router-dom'
import { LoginButton } from './autenticar'

export default function login() {
    return (
        <div>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta charset="utf-8"/>
    <meta name="keywords" content="TRAVEL IN LUXURY AND STYLE..."/>
    <meta name="description" content=""/>
    <meta name="page_type" content="np-template-header-footer-from-plugin"/>
    <title>Login</title>
          <link rel="stylesheet" href="./css/nicepage.css" media="screen" />
          <link rel="stylesheet" href="./css/Login.css" media="screen" />
    <div className="u-body">
  <header className="u-clearfix u-header u-header" id="sec-35db">
    <div className="u-clearfix u-sheet u-sheet-1">
      <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
        <div
          className="menu-collapse"
          style={{
            fontSize: "1rem",
            letterSpacing: 0,
            fontWeight: 700,
            textTransform: "uppercase"
          }}
        >
          <a
            className="u-button-style u-custom-active-border-color u-custom-border u-custom-border-color u-custom-borders u-custom-hover-border-color u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-text-color u-custom-text-hover-color u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
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
                <Link to='/'>HOME</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/login'>Login</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/contact'>Contact</Link>
                </li>
          </ul>
        </div>
        <div className="u-custom-menu u-nav-container-collapse">
          <div className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
            <div className="u-inner-container-layout u-sidenav-overflow">
              <div className="u-menu-close" />
              <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                <li className="u-nav-item">
                <Link to='/'>HOME</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/login'>Login</Link>
                </li>
                <li className="u-nav-item">
                <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="u-black u-menu-overlay u-opacity u-opacity-70" />
        </div>
      </nav>
      <h3 className="u-headline u-text u-text-palette-2-base u-text-1">
        <a href="/">
          Elegant &amp; Fast
          <span style={{ fontStyle: "italic" }} />
        </a>
      </h3>
    </div>
  </header>
  <section
    className="u-align-right u-clearfix u-image u-section-1"
    id="carousel_f6ca"
  >
    <div className="u-clearfix u-sheet u-sheet-1">
      <h2 className="u-text u-text-body-alt-color u-text-1">
        {" "}
        We Will be there in 5 Minutes
      </h2>
      <h1 className="u-color-scheme-u10 u-color-style-multicolor-1 u-custom-font u-font-oswald u-text u-text-palette-2-base u-title u-text-2">
        Login
        <span style={{ fontSize: "2.25rem" }} />
      </h1>
      <div className="u-form u-form-1">
        <form
          action="#"
          method="POST"
          className="u-clearfix u-form-spacing-10 u-form-vertical u-inner-form"
          source="custom"
          name="form"
          style={{ padding: 10 }}
        >
          <div className="u-align-left u-form-group u-form-submit">
            <LoginButton/>
            <input
              type="submit"
              defaultValue="submit"
              className="u-form-control-hidden"
            />
          </div>
          <input type="hidden" defaultValue name="recaptchaResponse" />
        </form>
      </div>
    </div>
  </section>
  <footer className="u-clearfix u-footer u-grey-80" id="sec-9a40">
    <div className="u-clearfix u-sheet u-sheet-1">
      <div className="u-align-left u-social-icons u-spacing-10 u-social-icons-1">
        <a className="u-social-url" title="facebook" target="_blank" href>
          <span className="u-icon u-social-facebook u-social-icon u-icon-1">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 112 112"
              style={{}}
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-542d"
              />
            </svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 112 112"
              x={0}
              y={0}
              id="svg-542d"
            >
              <circle fill="currentColor" cx="56.1" cy="56.1" r={55} />
              <path
                fill="#FFFFFF"
                d="M73.5,31.6h-9.1c-1.4,0-3.6,0.8-3.6,3.9v8.5h12.6L72,58.3H60.8v40.8H43.9V58.3h-8V43.9h8v-9.2
      c0-6.7,3.1-17,17-17h12.5v13.9H73.5z"
              />
            </svg>
          </span>
        </a>
        <a className="u-social-url" title="twitter" target="_blank" href>
          <span className="u-icon u-social-icon u-social-twitter u-icon-2">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 112 112"
              style={{}}
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-c22a"
              />
            </svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 112 112"
              x={0}
              y={0}
              id="svg-c22a"
            >
              <circle
                fill="currentColor"
                className="st0"
                cx="56.1"
                cy="56.1"
                r={55}
              />
              <path
                fill="#FFFFFF"
                d="M83.8,47.3c0,0.6,0,1.2,0,1.7c0,17.7-13.5,38.2-38.2,38.2C38,87.2,31,85,25,81.2c1,0.1,2.1,0.2,3.2,0.2
      c6.3,0,12.1-2.1,16.7-5.7c-5.9-0.1-10.8-4-12.5-9.3c0.8,0.2,1.7,0.2,2.5,0.2c1.2,0,2.4-0.2,3.5-0.5c-6.1-1.2-10.8-6.7-10.8-13.1
      c0-0.1,0-0.1,0-0.2c1.8,1,3.9,1.6,6.1,1.7c-3.6-2.4-6-6.5-6-11.2c0-2.5,0.7-4.8,1.8-6.7c6.6,8.1,16.5,13.5,27.6,14
      c-0.2-1-0.3-2-0.3-3.1c0-7.4,6-13.4,13.4-13.4c3.9,0,7.3,1.6,9.8,4.2c3.1-0.6,5.9-1.7,8.5-3.3c-1,3.1-3.1,5.8-5.9,7.4
      c2.7-0.3,5.3-1,7.7-2.1C88.7,43,86.4,45.4,83.8,47.3z"
              />
            </svg>
          </span>
        </a>
        <a className="u-social-url" title="instagram" target="_blank" href>
          <span className="u-icon u-social-icon u-social-instagram u-icon-3">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 112 112"
              style={{}}
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-2528"
              />
            </svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 112 112"
              x={0}
              y={0}
              id="svg-2528"
            >
              <circle fill="currentColor" cx="56.1" cy="56.1" r={55} />
              <path
                fill="#FFFFFF"
                d="M55.9,38.2c-9.9,0-17.9,8-17.9,17.9C38,66,46,74,55.9,74c9.9,0,17.9-8,17.9-17.9C73.8,46.2,65.8,38.2,55.9,38.2
      z M55.9,66.4c-5.7,0-10.3-4.6-10.3-10.3c-0.1-5.7,4.6-10.3,10.3-10.3c5.7,0,10.3,4.6,10.3,10.3C66.2,61.8,61.6,66.4,55.9,66.4z"
              />
              <path
                fill="#FFFFFF"
                d="M74.3,33.5c-2.3,0-4.2,1.9-4.2,4.2s1.9,4.2,4.2,4.2s4.2-1.9,4.2-4.2S76.6,33.5,74.3,33.5z"
              />
              <path
                fill="#FFFFFF"
                d="M73.1,21.3H38.6c-9.7,0-17.5,7.9-17.5,17.5v34.5c0,9.7,7.9,17.6,17.5,17.6h34.5c9.7,0,17.5-7.9,17.5-17.5V38.8
      C90.6,29.1,82.7,21.3,73.1,21.3z M83,73.3c0,5.5-4.5,9.9-9.9,9.9H38.6c-5.5,0-9.9-4.5-9.9-9.9V38.8c0-5.5,4.5-9.9,9.9-9.9h34.5
      c5.5,0,9.9,4.5,9.9,9.9V73.3z"
              />
            </svg>
          </span>
        </a>
        <a className="u-social-url" title="linkedin" target="_blank" href>
          <span className="u-icon u-social-icon u-social-linkedin u-icon-4">
            <svg
              className="u-svg-link"
              preserveAspectRatio="xMidYMin slice"
              viewBox="0 0 112 112"
              style={{}}
            >
              <use
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xlinkHref="#svg-2ed0"
              />
            </svg>
            <svg
              className="u-svg-content"
              viewBox="0 0 112 112"
              x={0}
              y={0}
              id="svg-2ed0"
            >
              <circle fill="currentColor" cx="56.1" cy="56.1" r={55} />
              <path
                fill="#FFFFFF"
                d="M41.3,83.7H27.9V43.4h13.4V83.7z M34.6,37.9L34.6,37.9c-4.6,0-7.5-3.1-7.5-7c0-4,3-7,7.6-7s7.4,3,7.5,7
      C42.2,34.8,39.2,37.9,34.6,37.9z M89.6,83.7H76.2V62.2c0-5.4-1.9-9.1-6.8-9.1c-3.7,0-5.9,2.5-6.9,4.9c-0.4,0.9-0.4,2.1-0.4,3.3v22.5
      H48.7c0,0,0.2-36.5,0-40.3h13.4v5.7c1.8-2.7,5-6.7,12.1-6.7c8.8,0,15.4,5.8,15.4,18.1V83.7z"
              />
            </svg>
          </span>
        </a>
      </div>
    </div>
  </footer>

</div>

        </div>
    )
}
