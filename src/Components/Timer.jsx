import React, {useEffect, useState} from 'react';
import {Link, Navigate} from "react-router-dom";

const Timer = (props) => {

    let [isClock, setIsClock] = useState(false)

    function timerMilisec(parentClass, timerSecond) {
        let timeElem = document.querySelector(parentClass + ' .timer'),
            countdown = new Date(),
            responseTime = new Date(Date.now() + (1000 * timerSecond)); // таймер 10 секунд

        function startTime() {
            countdown.setTime(responseTime - Date.now());
            timeElem.innerHTML = '<div class="min"><span>' + ((countdown.getUTCSeconds() < 10) ? ('0' + countdown.getUTCSeconds()) : countdown.getUTCSeconds()) + '</span></div>' +

                '<div class="sec"><span>.' + String(countdown.getUTCMilliseconds())[0] +
                '' + (String(countdown.getUTCMilliseconds())[1] ? String(countdown.getUTCMilliseconds())[1] : '0') +

                '</span></div>';
            if (countdown.getUTCHours() > 0 || countdown.getUTCMinutes() > 0 || countdown.getUTCSeconds() > 0) {
                requestAnimationFrame(startTime);
            } else {
                timeElem.innerHTML = '<div class="min"><span>00</span></div><div class="sec"><span>.00</span></div>';
                props.func()
            }
        }

        requestAnimationFrame(startTime);

    }


    useEffect(() => {
        setIsClock(true)
        timerMilisec(props.parent, props.time);
    }, [isClock])

    return (
        <div className="timer">

            <div className="min"><span>**</span>
            </div>
            <div className="sec">
                <small className="dot">.</small><span>**</span>
            </div>
        </div>
    );
};

export default Timer;