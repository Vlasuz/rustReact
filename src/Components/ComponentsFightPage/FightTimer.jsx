import React from 'react';
import {Link} from "react-router-dom";
import Timer from "../Timer";
import {useState} from "react";

const FightTimer = () => {

    const [time, setTime] = useState(10)
    const [bol, setBol] = useState(true)

    if (bol) {
        setBol(false)

        let timer = setInterval(() => {
            setTime(prev => prev - 1)

            setTimeout(() => {
                // setTime(10)
                clearInterval(timer)
            }, 10000)
        }, 1000)


        setTimeout(() => {
            document.querySelector('.link-to-hit').click()
        }, 10000)
    }
    return (
        <div className="section-fight__center">
            <div className="center__running">
                <Link className={"link-to-hit"} to={'/fight-finish'}/>
                <span>Начало</span>
                <div className="timer">
                    <div className="min">
                        <span>{time}</span>
                    </div>
                    <div className="sec">
                        <small className="dot">.</small>
                        <span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FightTimer;