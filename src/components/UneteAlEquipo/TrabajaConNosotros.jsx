import React from "react";
import ConoceEquipo from "./ConoceEquipo";
import NuestrosValores from "./NuestrosValores";
import { Link } from "react-router-dom";
import "./UneteAlEquipo.css";
export default function UneteAlEquipo() {
  return (
    <>
    
      <div className="m-5">
        <div className="divContainerJob ">
          <div>
            <h2>Trabajá en CriptoAlgo</h2>
            <h4>
              Únete a nosotros y ayúdanos a incrementar la libertad del dinero
            </h4>
            <Link to="/vacantes">
              <button className="buttonStyle">Ver vacantes</button>
            </Link>
          </div>

          <div className="imgLeft ">
            <img
              className="sizeImg"
              src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/trabajaconnosotros.jpg?alt=media&token=4acf00ee-898a-4525-91d4-0d5828c092d8"
              alt="Mujer trabajando"
            />
          </div>
        </div>
        
        <div className="divOurValues">
          <h4>Nuestros valores</h4>
          <p>
            Los valores fundamentales de CriptoAlgo orientan nuestro
            comportamiento, decisiones y acciones, lo que permite que nuestros
            diversos equipos internacionales puedan colaborar de manera
            unificada.
          </p>
        </div>  
          <NuestrosValores />
        
        <div className="marginLeft">
          <h2 className="m-5">Conóce a nuestro equipo</h2>
          <ConoceEquipo />
        </div>
      </div>
    </>
  );
}
