import ScreenTop from "./ScreenTop.jsx"
import ScreenBottom from "./ScreenBottom.jsx"
import Pet from "./Pet.jsx"

function Screen({value, icon, text}) {

    return (
        <div className="screen">
            <ScreenTop value={value} />
            <Pet />
            <ScreenBottom icon={icon} text={text} />
        </div>
    )
}

export default Screen