import { useState, useEffect } from "react";

function TimerStats({ duration, onFinished }) {

    const [seconds, setSeconds] = useState(0);

    useEffect(() => {

        const interval = setInterval(() => {
            setSeconds(prev => prev + 1);
        }, 1000);

        return () => clearInterval(interval);

    }, []);

    useEffect(() => {
        if (seconds >= duration) {
            onFinished();
            setSeconds(0);
        }

    }, [seconds, duration, onFinished]);

    return null;
}

export default TimerStats;