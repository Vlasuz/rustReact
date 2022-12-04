import React from 'react';
import RandomDrop from "./RandomDrop";
import SelectWinner from "./SelectWinner";

const TimeToFly = (props) => {
    if (document.querySelector('.map__scale')) document.querySelector('.map__scale').classList.add('map__scale_hidden')


    // ФУНКЦИЯ ЗАВЕРШЕНИЕ АИРДРОПА
    let airdropFinish = () => {
        if (props.states.setNumSwitch !== undefined) {
            props.states.setNumSwitch(1)
        }
        // if(props.states.setListAirdropsMembers !== undefined){
        //     props.states.setListAirdropsMembers([])
        // }
    }
    // ФУНКЦИЯ ЗАВЕРШЕНИЕ АИРДРОПА


    // УСЛОВИЕ ТАЙМЕРА
    if (props.states.seconds <= 60) { // НАЧАЛО ПОЛЕТА САМОЛЕТА С ОТСЧЕТОМ НА ВЫБРОС ДРОПА

        RandomDrop(props)
        setTimeout(() => {
            props.states.setIsTrajectoryActive(true)
        }, 1000)

        if (!props.states.isDropDown && props.states.randomTimerToDrop < document.querySelector('.section-map .trajectory')?.clientWidth && props.states.randomTimerToDrop > 0) {
            props.states.setIsDropDown(true)
        }

        if (document.querySelector('.trajectory') && props.states.isTrajectoryActive && props.states.trajectoryPlane > 0) {
            document.querySelector('.trajectory').style.top = props.states.trajectoryPlane + 'px'
        }

    }

    if (props.states.seconds === 1) {

        setTimeout(() => {

            // ЗАВЕРШЕНИЕ АИРДРОПА
            airdropFinish()
            // ЗАВЕРШЕНИЕ АИРДРОПА

            props.states.setSeconds(10)
            props.states.setAirdropStep(prev => prev - 1)
        }, 10000)

        setTimeout(() => {
            document.querySelectorAll('.map__points li:not(li.sleepers__item_winner)').forEach(li => li.remove())
        }, 7000)
    }
    // УСЛОВИЕ ТАЙМЕРА


    if (props.states.seconds < 1) {
        props.states.setSeconds(0)

        // ФУНКЦИЯ ВЫБОРА ПОБЕДИТЕЛЯ
        SelectWinner(props)
        // ФУНКЦИЯ ВЫБОРА ПОБЕДИТЕЛЯ
    }


    // УСТАНОВКА ДЛИНЫ ПОЛЕТА В ПРОЦЕНТАХ
    props.states.setLengthPlaneFly(props.states.seconds > 1 ? -((props.states.seconds * 2) - 140) : props.states.lengthPlaneFly)
    // УСТАНОВКА ДЛИНЫ ПОЛЕТА В ПРОЦЕНТАХ

    if (document.querySelector('.aside__plane .timer-line__line_done')) document.querySelector('.aside__plane .timer-line__line_done').style.width = -((props.states.seconds * 100) / 60 - 100) + "%"
    if (document.querySelector('.fly__timer .line_done')) document.querySelector('.fly__timer .line_done').style.width = -((props.states.seconds * 100) / 60 - 100) + "%"
};

export default TimeToFly;