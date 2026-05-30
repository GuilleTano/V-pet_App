import { useState, useEffect } from 'react'
import Pet from "./components/Pet.jsx"
import StatRow from './components/StatRow.jsx'
import Screen from "./components/Screen.jsx"

function App() {
  const [actionMessage, setActionMessage] = useState({ text: "", icon: "" });
  const [isBusy, setIsBusy] = useState(false);

  function displayMessage(text, icon) {
    setIsBusy(true);
    setActionMessage({
      text: text,
      icon: icon
    });
    setTimeout(() => {
      setActionMessage({
        text: "",
        icon: ""
      });
      setIsBusy(false);
    }, 10000);
  }

  const [hunger, setHunger] = useState(5);
  const decreaseHunger = () => {
    setHunger(prev => Math.max(prev - 1, 0)); //Math.max() Evita que baje de 0
  }
  const feedPet = () => {
    if (isBusy) return;
    setHunger(prev => Math.min(prev + 1, 9));
    displayMessage("ALIMENTANDO...", "./src/assets/icons/meat.svg");
  }

  const [fun, setFun] = useState(9);
  const decreaseFun = () => {
    setFun(prev => Math.max(prev - 1, 0));
  }
  const playPet = () => {
    if (isBusy) return;
    setFun(prev => Math.min(prev + 1, 9));
    displayMessage("JUGANDO...", "./src/assets/icons/console-controller.svg");
  }

  const [fatigue, setFatigue] = useState(9);
  const decreaseFatigue = () => {
    setFatigue(prev => Math.max(prev - 1, 0));
  }
  const trainingPet = () => {
    if (isBusy) return;
    setFatigue(prev => Math.min(prev + 1, 9));
    displayMessage("ENTRENANDO...", "./src/assets/icons/punching-bag.svg");
  }

  const energy = Math.floor(
    (hunger + fun + fatigue) / 3
  );

  return (
    <div className="container text-center">
      <div className="row align-items-center">
        {/* JAULA Y PANTALLA*/}
        <div className="col-7">
          <div className="jail p-4">
            <Screen    
            value={energy}
            icon={actionMessage.icon}
            text={actionMessage.text}
            />
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
            onIncrease={feedPet}
          />
          {/* ABURRIMIENTO */}
          <StatRow
            icon="./src/assets/icons/console-controller.svg"
            value={fun}
            duration={5}
            onDecrease={decreaseFun}
            onIncrease={playPet}
          />
          {/* FATIGA */}
          <StatRow
            icon="./src/assets/icons/punching-bag.svg"
            value={fatigue}
            duration={35}
            onDecrease={decreaseFatigue}
            onIncrease={trainingPet}
          />
        </div>
      </div>
    </div>

  )
}

export default App
