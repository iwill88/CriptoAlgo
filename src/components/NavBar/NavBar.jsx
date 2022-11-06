import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export default function NavBar() {

  const {auth} = useAuth();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navStyle">
        <div className="container-fluid">
          <Link to="/">
            <img
              className="imgLogo"
              src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/logo.png?alt=media&token=d071b921-f410-438c-9d5e-b0b3b16e48d8"
              alt="Logo CriptoAlgo"
              
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className=" me-auto mb-2 mb-lg-0 ulNavStyle">
              <Link to="/" className=" active liLinkNav">
                <li> HOME </li>
              </Link>
              <Link to="/precios" className=" active liLinkNav">
                <li> PRECIOS </li>
              </Link>
              <Link to="/ayuda" className=" active liLinkNav">
                <li> AYUDA </li>
              </Link>
            </ul>
            {!auth.length?<>
            <Link to="/register">
              <button className="buttonStyle" type="button">
                Creá tu cuenta
              </button>
            </Link>
            <Link to="/iniciarsesion">
              <button className="buttonStyle" type="button">
                Iniciar Sesión 
              </button>
            </Link>
            </>:<Link to="/plataforma"><button className="btn btn-success buttonPlatform">Ir a la plataforma</button></Link>}
          </div>
        </div>
      </nav>
    </header>
  );
}
