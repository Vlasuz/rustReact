import React from 'react';
import {Link} from "react-router-dom";
import Timer from "../Timer";
import {useState} from "react";

const FightTimer = () => {

    let millisecondNum = 99
    const [time, setTime] = useState(10)
    const [millisec, setMillisec] = useState(millisecondNum)
    const [bol, setBol] = useState(true)

    if (bol) {
        setBol(false)

        let timeillisecond = setInterval(() => {
            setMillisec(prev => prev < 1 ? millisecondNum : prev - 1)
        }, 10)

        let timer = setInterval(() => {
            setTimeout(() => {
                clearInterval(timer)
                clearInterval(timeillisecond)
                setMillisec(0)
                setTime(0)
            }, 10000)

            setTime(prev => prev - 1)
        }, 1000)


        setTimeout(() => {
            document.querySelector('.link-to-hit').click()
        }, 11000)
    }
    return (
        <div className="section-fight__center">
            <div className="center__running">
                <Link className={"link-to-hit"} to={'/fight-finish'}/>
                <span>Начало</span>
                <div className="timer">
                    <div className="min">
                        <span>
                            {time < 10 ? "0" + time : time}
                        </span>
                    </div>
                    <div className="sec">
                        <small className="dot">.</small>
                        <span>
                            {millisec < 10 ? "0" + millisec : millisec}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FightTimer;