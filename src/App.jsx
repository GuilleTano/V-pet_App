import { useState, useEffect } from 'react';
import Boton from "./components/boton.jsx";
import Pet from "./components/Pet.jsx";
import StatBar from './components/StateRow.jsx';
import TimerStats from './components/TimerStats.jsx';

function App() {

  const [hunger, setHunger] = useState(9);
  const decreaseHunger = () => {
    setHunger(prev => Math.max(prev - 1, 0)); //Math.max() Evita que baje de 0
  }

  const [fun, setFun] = useState(9);
  const decreaseFun = () => {
    setFun(prev => Math.max(prev - 1, 0)); //Math.max() Evita que baje de 0
  }

  const [fatigue, setFatigue] = useState(9);
  const decreaseFatigue = () => {
    setFatigue(prev => Math.max(prev - 1, 0)); //Math.max() Evita que baje de 0
  }

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
                  src="./src/assets/icons/night-sleep.svg"
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
              <Pet />
              {/* PARTE INFERIOR DE LA PANTALLA */}
              <div className="screen-bottom">
                <img src="./src/assets/icons/meat.svg" alt="Meat" className="screen-icon" />
                <span className="screen-text">ALIMENTANDO...</span>
              </div>
            </div>
          </div>
        </div>
        {/* ESTADISTICAS Y BOTONES */}
        <div className="col-5 ps-5 stats-panel">
          {/* COMIDA */}
          <div className="stat-row">
            <img src="./src/assets/icons/meat.svg" alt="Hambre" className="stat-icon" />

            
            <TimerStats duration={10} onFinished={decreaseHunger}/>
            <StatBar value={hunger} />

            <Boton />

          </div>
          {/* ABURRIMIENTO */}
          <div className="stat-row">
            <img
              src="./src/assets/icons/console-controller.svg"
              alt="Hambre"
              className="stat-icon"
            />

            <TimerStats duration={20} onFinished={decreaseFun}/>
            <StatBar value={fun} />

            <Boton />

          </div>
          {/* ENTRENAR */}
          <div className="stat-row">
            <img
              src="./src/assets/icons/punching-bag.svg"
              alt="Hambre"
              className="stat-icon"
            />

            <TimerStats duration={35} onFinished={decreaseFatigue}/>
            <StatBar value={fatigue} />

            <Boton />
            
          </div>
        </div>
      </div>
    </div>

  )
}

export default App
