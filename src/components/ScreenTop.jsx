import Pip from "./Pip.jsx"

function ScreenTop({ value }) {

    return (
        <div className="screen-top">
            <img
                src="./src/assets/icons/night-sleep.svg"
                className="screen-icon"
            />
            <div className="screen-bar">
                {
                    Array.from({ length: 9 }).map((_, index) => (
                        <Pip
                            key={index}
                            className="screen-pip"
                            active={index < value}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default ScreenTop