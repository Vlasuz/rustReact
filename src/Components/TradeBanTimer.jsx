import React, {useEffect, useState} from 'react';
import {logDOM} from "@testing-library/react";

const TradeBanTimer = ({ time }) => {
    const [finishTime] = useState(time.getTime());
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);

    useEffect(() => {
        const diff = (finishTime - new Date()) / 1000;
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

    return `${diffH.toString().padStart(2, '0')}:${diffM.toString().padStart(2, '0')}:${diffS.toString().padStart(2, '0')}`
};

export default TradeBanTimer;