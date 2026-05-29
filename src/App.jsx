import { useState } from 'react';
import Boton from "./boton.jsx";
import Pet from "./Pet.jsx";

function App() {


  return (
    <div className="container text-center">
      <div className="row align-items-center">
        {/* JAULA Y PANTALLA*/}
        <div className="col-7">
          <div className="jail p-4">
            <div className="screen">
              {/* PARTE SUPERIOR DE LA PANTALLA */}
              <div className="screen-top">
                <img
                  src="./icons/night-sleep.svg"
                  alt="battery"
                  className="screen-icon"
                />
                <div className="screen-meter">
                  <div className="screen-pip active" />
                  <div className="screen-pip active" />
                  <div className="screen-pip active" />
                  <div className="screen-pip active" />
                  <div className="screen-pip active" />
                  <div className="screen-pip" />
                  <div className="screen-pip" />
                  <div className="screen-pip" />
                  <div className="screen-pip" />
                </div>
              </div>
              <Pet/>
              {/* PARTE INFERIOR DE LA PANTALLA */}
              <div className="screen-bottom">
                <img src="./icons/meat.svg" alt="Meat" className="screen-icon" />
                <span className="screen-text">ALIMENTANDO...</span>
              </div>
            </div>
          </div>
        </div>
        {/* ESTADISTICAS Y BOTONES */}
        <div className="col-5 ps-5 stats-panel">
          {/* COMIDA */}
          <div className="stat-row">
            <img src="./icons/meat.svg" alt="Hambre" className="stat-icon" />
            <div className="vpet-meter">
              <div className="pip red active" />
              <div className="pip red active" />
              <div className="pip red active" />
              <div className="pip yellow " />
              <div className="pip yellow " />
              <div className="pip yellow " />
              <div className="pip green " />
              <div className="pip green " />
              <div className="pip green " />
            </div>
            <Boton />
          </div>
          {/* ABURRIMIENTO */}
          <div className="stat-row">
            <img
              src="./icons/console-controller.svg"
              alt="Hambre"
              className="stat-icon"
            />
            <div className="vpet-meter">
              <div className="pip red active" />
              <div className="pip red active" />
              <div className="pip red active" />
              <div className="pip yellow active" />
              <div className="pip yellow " />
              <div className="pip yellow " />
              <div className="pip green " />
              <div className="pip green " />
              <div className="pip green " />
            </div>
            <Boton />
          </div>
          {/* ENTRENAR */}
          <div className="stat-row">
            <img
              src="./icons/punching-bag.svg"
              alt="Hambre"
              className="stat-icon"
            />
            <div className="vpet-meter">
              <div className="pip red active" />
              <div className="pip red active" />
              <div className="pip red active" />
              <div className="pip yellow active" />
              <div className="pip yellow active" />
              <div className="pip yellow active" />
              <div className="pip green active" />
              <div className="pip green active" />
              <div className="pip green " />
            </div>
            <Boton />
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
