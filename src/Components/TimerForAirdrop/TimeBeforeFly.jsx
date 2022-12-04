import React from 'react';
import RandomDrop from "./RandomDrop";
import RandomTrajectory from "./RandomTrajectory";

const TimeBeforeFly = (props) => {

    props.states.setShowTimerToFly(true)
    props.states.setIsTrajectoryActive(false)
    setTimeout(() => {
        props.states.setLengthPlaneFly(0)
        props.states.setIsDropDown(false)
    }, 1000)

    document.querySelector('.airdrop-drop-sent')?.remove()
    document.querySelector('.map__points li.sleepers__item_winner')?.remove()

    if (document.querySelector('.map__scale')) document.querySelector('.map__scale').classList.remove('map__scale_hidden')

    // ЛИНИЯ ТАЙМЕРА
    if (document.querySelector('.aside__plane .timer-line__line_done')) document.querySelector('.aside__plane .timer-line__line_done').style.width = props.states.seconds * 100 / 60 + "%"
    if (document.querySelector('.fly__timer .line_done')) document.querySelector('.fly__timer .line_done').style.width = props.states.seconds * 100 / 60 + "%"
    // ЛИНИЯ ТАЙМЕРА

    props.states.setRandomTimerToDrop(Math.ceil(Math.random() * (1100 - 350) + 350))


    if (props.states.seconds < 1) {
        props.states.setSeconds(10)
        props.states.setAirdropStep(prev => prev + 1)
    }

    RandomTrajectory(props)
    RandomDrop(props)
};

export default TimeBeforeFly;