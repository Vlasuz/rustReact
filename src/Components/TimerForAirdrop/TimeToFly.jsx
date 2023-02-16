import React from 'react';
import RandomDrop from "./RandomDrop";
import SelectWinner from "./SelectWinner";
import {
    airdropDropIsDown,
    airdropLengthPlane,
    airdropStep,
    airdropStepRights,
    airdropTimerSeconds
} from "../../Redux/actions";

const TimeToFly = (props, seconds, trajectory, step, drop_is_down, dispatch) => {

    if (document.querySelector('.map__scale')) document.querySelector('.map__scale').classList.add('map__scale_hidden')
    props.states.setShowTimerToFly(false)


    // ФУНКЦИЯ ЗАВЕРШЕНИЕ АИРДРОПА
    let airdropFinish = () => {
        // props.states.setNumSwitch(1)
        dispatch(airdropStepRights(1))

        dispatch(airdropTimerSeconds(60))

        // УДАЛЕНИЕ УЧАСТНИКОВ СОРЕВНОВАНИЯ AIRDROP
        // УДАЛЕНИЕ УЧАСТНИКОВ СОРЕВНОВАНИЯ AIRDROP
        // УДАЛЕНИЕ УЧАСТНИКОВ СОРЕВНОВАНИЯ AIRDROP

    }
    // ФУНКЦИЯ ЗАВЕРШЕНИЕ АИРДРОПА


    // УСЛОВИЕ ТАЙМЕРА
    if (seconds <= 60) { // НАЧАЛО ПОЛЕТА САМОЛЕТА С ОТСЧЕТОМ НА ВЫБРОС ДРОПА

        RandomDrop(props, trajectory, drop_is_down)

        setTimeout(() => {
            props.states.setIsTrajectoryActive(true)
        }, 1000)

        if (!drop_is_down && props.states.randomTimerToDrop < document.querySelector('.section-map .trajectory')?.clientWidth && props.states.randomTimerToDrop > 0) {
            dispatch(airdropDropIsDown('true'))
        }

        if (document.querySelector('.trajectory') && props.states.isTrajectoryActive && trajectory > 0) {
            document.querySelector('.trajectory').style.top = trajectory + 'px'
        }

    }

    if (seconds === 1) {

        setTimeout(() => {

            // ЗАВЕРШЕНИЕ АИРДРОПА
            airdropFinish()
            // ЗАВЕРШЕНИЕ АИРДРОПА

            dispatch(airdropStep(1))

            document.querySelector('.aside__plane .timer').style.opacity = 1
            if (document.querySelector('.airdrop__timer-to-ready .timer')) document.querySelector('.airdrop__timer-to-ready .timer').style.opacity = 1
        }, 13000)

        setTimeout(() => {
            document.querySelectorAll('.map__points li:not(li.sleepers__item_winner)').forEach(li => li.remove())
        }, 7000)


        // ФУНКЦИЯ ВЫБОРА ПОБЕДИТЕЛЯ
        SelectWinner(props)
        // ФУНКЦИЯ ВЫБОРА ПОБЕДИТЕЛЯ
    }
    // УСЛОВИЕ ТАЙМЕРА


    if (seconds < 1) {
        document.querySelector('.aside__plane .timer').style.opacity = 0
        if (document.querySelector('.airdrop__timer-to-ready .timer')) document.querySelector('.airdrop__timer-to-ready .timer').style.opacity = 0
    }


    // УСТАНОВКА ДЛИНЫ ПОЛЕТА В ПРОЦЕНТАХ
    dispatch(airdropLengthPlane(seconds > 1 ? -((seconds * 2) - 140) : props.states.lengthPlaneFly))
    // УСТАНОВКА ДЛИНЫ ПОЛЕТА В ПРОЦЕНТАХ

    if (document.querySelector('.aside__plane .timer-line__line_done')) document.querySelector('.aside__plane .timer-line__line_done').style.width = -((seconds * 100) / 60 - 100) + "%"
    if (document.querySelector('.fly__timer .line_done')) document.querySelector('.fly__timer .line_done').style.width = -((seconds * 100) / 60 - 100) + "%"
};

export default TimeToFly;