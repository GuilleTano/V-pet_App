import ActionButton from "./ActionButton.jsx";
import StatBar from './StatBar.jsx';
import TimerStats from './TimerStats.jsx';


function StatRow({icon, value, duration, onDecrease, onIncrease}) {


    return (
        <div className="stat-row">

            <img src={icon} alt="" className="stat-icon"/>

            <TimerStats duration={duration} onFinished={onDecrease} />

            <StatBar value={value} />

            <ActionButton action={onIncrease} />

        </div>

    );

}

export default StatRow