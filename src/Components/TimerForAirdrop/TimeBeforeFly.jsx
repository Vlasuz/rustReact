import React from 'react';
import RandomDrop from "./RandomDrop";
import {airdropDropIsDown, airdropLengthPlane, airdropStep, airdropTrajectoryPlane} from "../../Redux/actions";

const TimeBeforeFly = (props, seconds, trajectory, plane_length, step, drop_is_down, dispatch) => {

    document.querySelector('.airdrop-drop-sent')?.remove()
    document.querySelector('.map__points li.sleepers__item_winner')?.remove()

    props.states.setShowTimerToFly(true)
    props.states.setIsTrajectoryActive(false)
    setTimeout(() => {
        dispatch(airdropLengthPlane(0))
        dispatch(airdropDropIsDown(''))
    }, 1000)

    if (document.querySelector('.map__scale')) document.querySelector('.map__scale').classList.remove('map__scale_hidden')

    // ЛИНИЯ ТАЙМЕРА
    if (document.querySelector('.aside__plane .timer-line__line_done')) document.querySelector('.aside__plane .timer-line__line_done').style.width = seconds * 100 / 60 + "%"
    if (document.querySelector('.fly__timer .line_done')) document.querySelector('.fly__timer .line_done').style.width = seconds * 100 / 60 + "%"
    // ЛИНИЯ ТАЙМЕРА

    props.states.setRandomTimerToDrop(Math.ceil(Math.random() * (1100 - 350) + 350))

    if (seconds < 1) {
        dispatch(airdropStep(step + 1))

        let max
        if (document.querySelector('.section-map__map')) max = document.querySelector('.section-map__map').clientHeight - 100
        let rand = Math.ceil(Math.random() * (max - 100) + 100)
        if (rand > 0) {
            dispatch(airdropTrajectoryPlane(rand));
        }
    }

    RandomDrop(props, trajectory, drop_is_down)
};

export default TimeBeforeFly;