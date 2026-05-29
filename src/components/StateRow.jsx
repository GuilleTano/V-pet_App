import Pip from "./Pip.jsx"

function getColor(index) {
    if (index < 3) return "red";
    if (index < 6) return "yellow";
    return "green";
}

function StatBar({ value }) {

    return (
        <div className="vpet-meter">
            {
                Array.from({ length: 9 }).map((_, index) => (
                    <Pip
                        key={index}
                        color={getColor(index)}
                        active={index < value}
                    />
                ))
            }
        </div>
    );
}

export default StatBar;