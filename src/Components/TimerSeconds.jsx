import React from 'react';
import {useEffect} from "react";

const TimerSeconds = (props) => {

    const var_section = document.querySelector('.section-map')
    const var_trajectory = document.querySelector('.trajectory')
    const deadline = `November, 9, 3000, 12:45:00`;


    // УСЛОВИЕ ВЫПАВШЕГО ДРОПА
    if (var_section) {
        document.querySelector('.airdrop-drop-sent') ? var_section.classList.add('dropIsDown') : var_section.classList.remove('dropIsDown')
    }
    // УСЛОВИЕ ВЫПАВШЕГО ДРОПА


    // УСЛОВИЕ АКТИВНОГО ПОЛЕТА САМОЛЕТА
    if (var_trajectory) {
        props.states.isTrajectoryActive ? var_trajectory.classList.add('trajectory_active') : var_trajectory.classList.remove('trajectory_active')
    }
    // УСЛОВИЕ АКТИВНОГО ПОЛЕТА САМОЛЕТА


    // РАНДОМНАЯ ТРАЕКТОРИЯ ПОЛЕТА
    const randomTrajectoryFly = () => {
        let max
        if (document.querySelector('.section-map__map')) max = document.querySelector('.section-map__map').clientHeight - 100
        let rand = Math.ceil(Math.random() * (max - 100) + 100)
        if (props.states.setTrajectoryPlane && rand > 0) props.states.setTrajectoryPlane(rand);
    }
    // РАНДОМНАЯ ТРАЕКТОРИЯ ПОЛЕТА


    // ВЫПАДЕНИЕ ДРОПА
    // console.log(props.states.randomTimerToDrop)
    const randomDropFly = () => {

        // let randomTimoutDrop = Math.ceil(Math.random() * (17000 - 5000) + 5000)
        // console.log(document.querySelector('.section-map .trajectory')?.clientWidth)

        if (props.states.isDropDown && !document.querySelector('.airdrop-drop-sent')) {

            setTimeout(() => {
                selectWinner()
            }, 1500)

            let drop = document.createElement('div')
            drop.classList.add('airdrop-drop-sent');

            if (props.states.trajectoryPlane > 0 && document.querySelector('.section-map__map')) {
                document.querySelector('.section-map__map').append(drop)
                document.querySelector('.airdrop-drop-sent').innerHTML = "<div class='point'></div><div class='line-to-winner'></div>";
                document.querySelector('.airdrop-drop-sent').style.left = props.states.randomTimerToDrop - 250 + 'px';
                document.querySelector('.airdrop-drop-sent').style.top = props.states.trajectoryPlane + 19 + 'px';
            }
        }
    }
    // ВЫПАДЕНИЕ ДРОПА


    // ФУНКЦИЯ ВЫБОРА ПОБЕДИТЕЛЯ
    const selectWinner = () => {
        let allMembersCood = [];
        let dropX = document.querySelector('.airdrop-drop-sent')?.style.left.replace('px', '')
        let dropY = document.querySelector('.airdrop-drop-sent')?.style.top.replace('px', '')
        let leftX = 0;
        let leftY = 0;
        let rightX = 99999;
        let rightY = 99999;
        let currentX = 0;
        let currentY = 0;

        let idOfX = 0
        let numOfX_X = 0
        let numOfX_Y = 0
        let numOfX_sum = 0

        let idOfY = 0
        let numOfY_X = 0
        let numOfY_Y = 0
        let numOfY_sum = 0

        let winnerId = 0;

        document.querySelectorAll('.map__points li').forEach((user, userId) => {
            let userX = +user.style.left.replace('px', '');
            let userY = +user.style.top.replace('px', '');

            allMembersCood.push({
                id: userId,
                x: userX,
                y: userY,
            })

            // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ

            // Х:
            if (userX < dropX && userX > leftX) {
                leftX = userX;
            } else if (userX > dropX && userX < rightX) {
                rightX = userX;
            }
            currentX = dropX - leftX < rightX - dropX ? leftX : rightX

            // Y:
            if (userY < dropY && userY > leftY) {
                leftY = userY;
            } else if (userY > dropY && userY < rightY) {
                rightY = userY;
            }
            currentY = dropY - leftY < rightY - dropY ? leftY : rightY

            // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ

        })

        // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ
        allMembersCood.map(user => {
            if (user.x === currentX) {
                idOfX = user.id;
                numOfX_X = user.x > dropX ? user.x - dropX : dropX - user.x;
                numOfX_Y = user.y > dropY ? user.y - dropY : dropY - user.y;
                numOfX_sum = numOfX_X + numOfX_Y;
            }
            if (user.y === currentY) {
                idOfY = user.id;
                numOfY_X = user.x > dropX ? user.x - dropX : dropX - user.x;
                numOfY_Y = user.y > dropY ? user.y - dropY : dropY - user.y;
                numOfY_sum = numOfY_X + numOfY_Y;
            }

            winnerId = numOfX_sum < numOfY_sum ? idOfX : idOfY;
        })
        // ЛОГИКА ВЫБОРА ПОБЕДИТЕЛЯ


        // ЛОГИКА ДЛЯ ЛИНИИ ОТ ДРОПА К ПОБЕДИТЕЛЮ

        let winnerX = document.querySelectorAll('.map__points li')[winnerId]?.style.left.replace('px', '');
        let winnerY = document.querySelectorAll('.map__points li')[winnerId]?.style.top.replace('px', '');
        let katX;
        let katY;
        let gip;
        let sinA;
        let radian;
        let angle;

        katX = dropX > winnerX ? dropX - winnerX : winnerX - dropX;
        katY = dropY > winnerY ? dropY - winnerY : winnerY - dropY;
        gip = Math.sqrt((katX * katX) + (katY * katY));

        if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = gip + "px";


        sinA = katY / gip
        radian = Math.asin(sinA)
        angle = (radian * 180 / Math.PI);

        if (winnerX < dropX && winnerY < dropY) {
            document.querySelector('.line-to-winner').style.transform = `rotate(-${180 - angle}deg)`;

        } else if (winnerX > dropX && winnerY > dropY) {
            document.querySelector('.line-to-winner').style.transform = `rotate(${90 - angle}deg)`;

        } else if (winnerX > dropX && winnerY < dropY) {
            document.querySelector('.line-to-winner').style.transform = `rotate(-${angle}deg)`;

        } else if (winnerX < dropX && winnerY > dropY) {
            document.querySelector('.line-to-winner').style.transform = `rotate(${180 - angle}deg)`;

        }

        setTimeout(() => {
            document.querySelector('.line-to-winner')?.classList.add('line-to-winner_active')
            document.querySelector('.line-to-winner').style.width = "0px";
            document.querySelector('.line-to-winner').animate([
                {width: '0px'},
                {width: gip+'px'}
            ], {
                duration: 1000,
            })

            if (document.querySelector('.line-to-winner')) document.querySelector('.line-to-winner').style.width = gip + "px";

        }, 500)

        setTimeout(() => {
            document.querySelectorAll('.map__points li')[winnerId]?.classList.add('sleepers__item_winner')
        }, 1000)

        setTimeout(() => {
            document.querySelectorAll('.map__points li:not(li.sleepers__item_winner)').forEach(li => li.remove())
        }, 1500)

        // ЛОГИКА ДЛЯ ЛИНИИ ОТ ДРОПА К ПОБЕДИТЕЛЮ


    }
    // ФУНКЦИЯ ВЫБОРА ПОБЕДИТЕЛЯ


    // ИЗМЕНЕНИЕ ДЛИНЫ ПОЛЕТА
    if (var_trajectory) {
        var_trajectory.style.width = props.states.lengthPlaneFly + "%"
    }
    // ИЗМЕНЕНИЕ ДЛИНЫ ПОЛЕТА


    // ПОЛУЧЕНИЕ РЕАЛЬНОГО ВРЕМЕНИ
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now()
        props.setSeconds(Math.floor((time / 1000) % 60));
    }
    // ПОЛУЧЕНИЕ РЕАЛЬНОГО ВРЕМЕНИ


    useEffect(() => {

        if (new Date().getMinutes() % 2 === 0) {
            // if(new Date().getMinutes()){

            if(document.querySelector('.map__scale')) document.querySelector('.map__scale').classList.add('map__scale_hidden')

            if (props.setShowTimerToFly) props.setShowTimerToFly(false)

            // ФУНКЦИЯ ЗАВЕРШЕНИЕ АИРДРОПА
            let airdropFinish = () => {
                if(props.setNumSwitch !== undefined){
                    props.setNumSwitch(1)
                }
                // if(props.setListAirdropsMembers !== undefined){
                //     props.setListAirdropsMembers([])
                // }
                document.querySelectorAll('.map__points li').forEach(li => li.remove())
                document.querySelectorAll('.airdrop-drop-sent').forEach(drop => drop.remove())

                props.states.setIsTrajectoryActive(false)
                props.states.setLengthPlaneFly(0)
                props.states.setIsDropDown(false)
            }
            // ФУНКЦИЯ ЗАВЕРШЕНИЕ АИРДРОПА


            // УСЛОВИЕ ТАЙМЕРА
            if (props.seconds <= 60) { // НАЧАЛО ПОЛЕТА САМОЛЕТА С ОТСЧЕТОМ НА ВЫБРОС ДРОПА

                randomDropFly()
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

            // console.log(props.states.trajectoryPlane)

            if (props.seconds < 1) {
                // ЗАВЕРШЕНИЕ АИРДРОПА
                airdropFinish()
                // ЗАВЕРШЕНИЕ АИРДРОПА
            }
            // УСЛОВИЕ ТАЙМЕРА


            // УСТАНОВКА ДЛИНЫ ПОЛЕТА В ПРОЦЕНТАХ
            props.states.setLengthPlaneFly(props.seconds > 1 ? -((props.seconds * 2) - 140) : props.states.lengthPlaneFly)
            // УСТАНОВКА ДЛИНЫ ПОЛЕТА В ПРОЦЕНТАХ

            if (document.querySelector('.aside__plane .timer-line__line_done')) document.querySelector('.aside__plane .timer-line__line_done').style.width = -((props.seconds * 100) / 60 - 100) + "%"
            if (document.querySelector('.fly__timer .line_done')) document.querySelector('.fly__timer .line_done').style.width = -((props.seconds * 100) / 60 - 100) + "%"

        } else {
            if (props.setShowTimerToFly) props.setShowTimerToFly(true)
            props.states.setLengthPlaneFly(0)

            if(document.querySelector('.map__scale')) document.querySelector('.map__scale').classList.remove('map__scale_hidden')

            // ЛИНИЯ ТАЙМЕРА
            if (document.querySelector('.aside__plane .timer-line__line_done')) document.querySelector('.aside__plane .timer-line__line_done').style.width = props.seconds * 100 / 60 + "%"
            if (document.querySelector('.fly__timer .line_done')) document.querySelector('.fly__timer .line_done').style.width = props.seconds * 100 / 60 + "%"
            // ЛИНИЯ ТАЙМЕРА

            props.states.setRandomTimerToDrop(Math.ceil(Math.random() * (1100 - 350) + 350))

            randomTrajectoryFly()
            randomDropFly()
        }


        // ПЕРВОНАЧАЛЬНЫЙ ЗАПУСК ТАЙМЕРА
        getTime(deadline)

        // ЛИНИЯ ТАЙМЕРА
        // if(document.querySelector('.aside__plane .timer-line__line_done')) document.querySelector('.aside__plane .timer-line__line_done').style.width = seconds * 100 / 60 + "%"
        // if(document.querySelector('.fly__timer .line_done')) document.querySelector('.fly__timer .line_done').style.width = seconds * 100 / 60 + "%"
        // ЛИНИЯ ТАЙМЕРА

        // ПЕРВОНАЧАЛЬНЫЙ ЗАПУСК ТАЙМЕРА


        const interval = setInterval(() => {
            // ОБНОВЛЕНИЕ ВРЕМЕНИ В СЕКУНДАХ
            getTime(deadline)
            // ОБНОВЛЕНИЕ ВРЕМЕНИ В СЕКУНДАХ

        }, 1000);

        return () => clearInterval(interval);
    }, [props.seconds]);


    return (
        <div className="min">
            <span>
                {props.seconds < 10 ? "0" + props.seconds : props.seconds}
            </span>
        </div>
    );
};

export default TimerSeconds;