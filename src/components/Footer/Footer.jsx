import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
export const Footer = () => {
    return (
    <div className="container-fluid">
        <div className="row contentFooter">
          <div className="col-md-3 logoFooter ">
            <Link to="/">
              <img src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/logo.png?alt=media&token=d071b921-f410-438c-9d5e-b0b3b16e48d8" alt="Logo CriptoAlgo" />
            </Link>
            
          </div>
          <div className="col-md-6 listFooter">
            <ul className="list ">
                <Link to="/Ayuda" className="text-decoration-none"><li>Ayuda</li></Link> 
                <Link to="/" className="text-decoration-none"><li>Home</li></Link> 
                <Link to="/precios" className="text-decoration-none"><li>Precios</li></Link> 
               <Link to="/TrabajaConNosotros" className="text-decoration-none"><li>Únete al equipo</li></Link> 
               <Link to="/Comisiones" className="text-decoration-none"><li>Comisiones</li></Link>
            </ul>
          </div>
          <div className="col-md-3 socialFooter">
            <div className="pb-4">
              <a href="https://twitter.com/home" target="_blank" rel="noreferrer">
                <img className="twitter" src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/twitter-icono.svg?alt=media&token=ca4688af-c62c-4604-b5c4-af629e0a6183" alt="twitter icono" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noreferrer">
                <img className="facebook" src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/facebook-icono.svg?alt=media&token=7dc9943c-d8eb-4ece-ae40-63845a126a1d" alt="facebook icono" />
              </a>
                
            </div>
            <div className="pb-4">
              <a href="https://youtube.com/" target="_blank" rel="noreferrer">
                <img className="youtube" src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/youtube-icono.svg?alt=media&token=01802c6d-b6dd-4e9b-b119-9eb509881744" alt="youtube icono" />
              </a>
              <a href="https://telegram.org/" target="_blank" rel="noreferrer">
                <img className="telegram"src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/telegram-icono.svg?alt=media&token=56ca7a03-1398-4e22-b00e-167221f1b148" alt="telegram icono" />
              </a>
                
            </div>
            <div>
              <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                <img className="instagram" src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/instagram-icono.svg?alt=media&token=6afe536b-59b9-4562-a2d2-93aecf829c5c" alt="instagram icono" />
              </a>
                
            </div>
          </div>
        </div>
            
            
        <div className="row copyright">
            <div className="col-md-12 py-3">
                Copyright © 2022 CriptoAlgo - Todos los derechos reservados
            </div>
        </div>
    </div>
    );
}

