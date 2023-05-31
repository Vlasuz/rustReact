import React, {useEffect, useState} from 'react';
import {logDOM} from "@testing-library/react";

const TradeBanTimer = ({time, isTradeBan}) => {
    const [finishTime] = useState(time.getTime());
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        let d1 = new Date();
        d1.toUTCString();
        Math.floor(d1.getTime() / 1000)
        let d2 = new Date(d1.getUTCFullYear(), d1.getUTCMonth(), d1.getUTCDate(), d1.getUTCHours(), d1.getUTCMinutes(), d1.getUTCSeconds());
        d2.toUTCString();
        Math.floor(d2.getTime() / 1000)

        const diff = (finishTime - d2) / 1000;
        if (diff < 0) return // время вышло
        setDiff([
            Math.floor(diff / 86400), // дни
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60)
        ])
    }, [tick, finishTime])

    useEffect(() => {
        const timerID = setInterval(() => setTick(!tick), 1000);
        return () => clearInterval(timerID);
    }, [tick])

    if(!isTradeBan || (diffDays <= 0 && diffH <= 0 && diffM <= 0 && diffS <= 0)) {
        return (
            <div className={"item__is-lock"} />
        )
    }

    return (
        <div className={"item__is-lock item__is-lock_true"}>
            <img src="../images/lock-map.svg" width={'11'} alt=""/>
            <p>
                {`${diffDays}:${diffH.toString().padStart(2, '0')}:${diffM.toString().padStart(2, '0')}:${diffS.toString().padStart(2, '0')}`}
            </p>
        </div>
    )
};

export default TradeBanTimer;