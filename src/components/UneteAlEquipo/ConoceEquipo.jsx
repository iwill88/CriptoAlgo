import React from "react";

export default function ConoceEquipo() {
  return (
    <>
      
      <div className="card mb-3 borderStyle" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4 ">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/Alexander.png?alt=media&token=f6531e11-4cd5-4980-a73e-fbfa593217dd"
              className="img-fluid rounded-start "
              alt="Ale es parte del equipo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Alexander Castañeda </h5>
              <p className="card-text">
              Frontend developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 borderStyle" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/MicaelaAndres.png?alt=media&token=dab44d33-fbf8-4f6c-82b8-d094d3e7a8d9"
              className="img-fluid rounded-start "
              alt="Mica es parte del equipo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Micaela Andrés</h5>
              <p className="card-text">
              Frontend developer
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="card mb-3 borderStyle" style={{ maxWidth: "540px" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/libreria-melquiades-6e32c.appspot.com/o/LarryAguileraa.png?alt=media&token=530df2a2-8237-4772-ad2e-5ab6adaf60c5"
              className="img-fluid rounded-start "
              alt="Larry es parte del equipo"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Larry Aguilera</h5>
              <p className="card-text">
              Backend Java Developer
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
