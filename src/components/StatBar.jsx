import Pip from "./Pip.jsx"

function StatBar({ value }) {

    return (
        <div className="vpet-meter">
            {
                Array.from({ length: 9 }).map((_, index) => (
                    <Pip
                        key={index}
                        className="pip green"
                        active={index < value}
                    />
                ))
            }
        </div>
    );
}

export default StatBar