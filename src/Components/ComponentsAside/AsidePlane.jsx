import React, {createElement, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Timer from "../Timer";

const AsidePlane = (props, {setIsAirdropEnd}) => {

    const [timeout, isTimeout] = useState(false)
    const [trajectoryPlane, setTrajectoryPlane] = useState(0)
    const [coodDrop, setCoopDrop] = useState({
        x: 0,
        y: 0
    })

    const randomTrajectoryFly = () => {
        let max = document.querySelector('.section-map__map').clientHeight - 200
        let rand = Math.ceil(Math.random() * (max - 100) + 100)
        setTrajectoryPlane(rand);
        return rand;
    }

    function timeToFly() {
        if (document.querySelector('.trajectory') && timeout) {
            document.querySelector('.trajectory').classList.add('trajectory_active')
            let randomTimoutDrop = Math.ceil(Math.random() * (9000 - 2000) + 2000)
            setTimeout(() => {
                let element = document.querySelector('.section-map .plane')
                let cood    = element.getBoundingClientRect()
                let drop    = document.createElement('div')

                drop.classList.add('airdrop-drop-sent')
                drop.style.top = (trajectoryPlane + 19)+'px';
                drop.style.left = cood.left - 150 +'px';

                setCoopDrop({
                    x: (cood.left - 150),
                    y: (trajectoryPlane + 19)
                })

                document.querySelector('.section-map').classList.add('dropIsDown')
                document.querySelector('.section-map__map').append(drop)
            }, randomTimoutDrop)
        } else if (document.querySelector('.trajectory') && timeout === false) {
            document.querySelector('.trajectory').classList.remove('trajectory_active')
            document.querySelector('.trajectory').style.top = randomTrajectoryFly() + 'px'
        }
    }

    useEffect(() => {
        timeToFly()
    })

    return (
        <NavLink
            to={props.to}
            className={isActive => isActive ? 'aside__plane' : 'aside__plane aside__plane_active'}
        >
            <button
                onClick={e => props.onSwitcherRightsChange('rights-airdrop')}
            >
                <img src="images/plane.svg" alt="Plane"/>
                <Timer
                    timeout={timeout}
                    isTimeout={isTimeout}
                    trajectoryPlane={trajectoryPlane}
                    timer={props.timeToFly}
                    coodDrop={coodDrop}
                    setIsAirdropEnd={setIsAirdropEnd}
                />
                <div className="timer-line">
                    <img src="images/timer-line.svg" alt="Line"/>
                    <div className="timer-line__line">
                        <div className="timer-line__line_done">

                        </div>
                    </div>
                </div>
            </button>
        </NavLink>
    );
};

export default AsidePlane;