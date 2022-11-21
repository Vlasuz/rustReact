import React from 'react';
import {useState, useEffect} from "react";

const TimerMilliseconds = () => {

    const [milliseconds, setMilliseconds] = useState(0);
    const deadline = `November, 9, 3000, 12:45:00`;
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        setMilliseconds(Math.floor((time / 10) % 100));
    }

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1);
        return () => clearInterval(interval);
    }, [])


    return (
        <div className="sec">
            <small className="dot">.</small>
            <span>
                {milliseconds < 10 ? "0" + milliseconds : milliseconds}
            </span>
        </div>
    );
};

export default TimerMilliseconds;