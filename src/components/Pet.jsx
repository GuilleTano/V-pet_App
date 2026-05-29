import { useState, useEffect } from "react";
import sprite1 from "../assets/images/sprite_1.png";
import sprite2 from "../assets/images/sprite_2.png";

function Pet() {

    const [frame, setFrame] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {

            setFrame(prev =>
                prev === 0 ? 1 : 0
            );

        }, 600);

        return () => clearInterval(interval);

    });

    return (
        <img
            src={frame === 0 ? sprite1 : sprite2}
            alt="Pet"
            className="pet"
        />
    );
}

export default Pet