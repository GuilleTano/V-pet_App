import { useState, useEffect } from 'react';
import Pet from "./components/Pet.jsx";
import ActionButton from "./components/ActionButton.jsx";
import StatBar from './components/StatBar.jsx';
import TimerStats from './components/TimerStats.jsx';
import StatRow from './components/StatRow.jsx';

function App() {

  const [hunger, setHunger] = useState(5);
  const decreaseHunger = () => {
    setHunger(prev => Math.max(prev - 1, 0)); //Math.max() Evita que baje de 0
  }
  const increaseHunger = () => {
    setHunger(prev => Math.min(prev + 1, 9));
  }

  const [fun, setFun] = useState(9);
  const decreaseFun = () => {
    setFun(prev => Math.max(prev - 1, 0));
  }
  const increaseFun = () => {
    setFun(prev => Math.min(prev + 1, 9));
  }

  const [fatigue, setFatigue] = useState(9);
  const decreaseFatigue = () => {
    setFatigue(prev => Math.max(prev - 1, 0));
  }
  const increaseFatigue = () => {
    setFatigue(prev => Math.min(prev + 1, 9));
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
          {/* HAMBRE */}
          <StatRow
            icon="./src/assets/icons/meat.svg"
            value={hunger}
            duration={15}
            onDecrease={decreaseHunger}
            onIncrease={increaseHunger}
          />
          {/* ABURRIMIENTO */}
          <StatRow
            icon="./src/assets/icons/console-controller.svg"
            value={fun}
            duration={5}
            onDecrease={decreaseFun}
            onIncrease={increaseFun}
          />
          {/* FATIGA */}
          <StatRow
            icon="./src/assets/icons/punching-bag.svg"
            value={fatigue}
            duration={35}
            onDecrease={decreaseFatigue}
            onIncrease={increaseFatigue}
          />
        </div>
      </div>
    </div>

  )
}

export default App
