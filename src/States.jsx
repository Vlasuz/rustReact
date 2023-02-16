import React, {useState} from "react";

const States = () => {

    const timeSecondForFights = 9;

    const [isTrajectoryActive, setIsTrajectoryActive] = useState(false);
    const [sleeperCost, setSleeperCost] = useState(0);
    const [sleepersCount, setSleepersCount] = useState(0)
    const [showTimerToFly, setShowTimerToFly] = useState(false)
    const [randomTimerToDrop, setRandomTimerToDrop] = useState(0)

    return {

        showTimerToFly,
        setShowTimerToFly,
        isTrajectoryActive,
        setIsTrajectoryActive,
        sleeperCost,
        setSleeperCost,
        sleepersCount,
        setSleepersCount,
        randomTimerToDrop,
        setRandomTimerToDrop,
        timeSecondForFights,
    }

};

export default States;