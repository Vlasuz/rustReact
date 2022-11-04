import React from 'react';
import {NavLink} from "react-router-dom";
import Timer from "../Timer";

const AsidePlane = (props) => {

    function func () {
        if(document.querySelector('.trajectory'))
            document.querySelector('.trajectory').classList.add('trajectory_active')
    }

    return (
        <NavLink
            to={props.to}
            className={isActive => isActive ? 'aside__plane' : 'aside__plane aside__plane_active'}
        >
            <button
                onClick={e => props.onSwitcherRightsChange('rights-airdrop')}
            >
                <img src="images/plane.svg" alt="Plane" />
                <div className="timer">
                    <div className="min">
                            <span>
                                {
                                    // tickSec > 0 ? tickSec : '00'
                                }
                            </span>
                    </div>
                    <div className="sec">
                        <small className="dot">.</small>
                        <span>
                                {
                                    // tickMilisec > 0 ? tickMilisec : '00'
                                }
                            </span>
                    </div>
                </div>
                <div className="timer-line">
                    <img src="images/timer-line.svg" alt="Line" />
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