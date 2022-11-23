import React, {createElement, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Timer from "../Timer";

const AsidePlane = (props) => {

    return (
        <NavLink
            to={props.to}
            className={isActive => isActive ? 'aside__plane' : 'aside__plane aside__plane_active'}
        >
            <button
                onClick={e => props.states.setSwitcherRights('rights-airdrop')}
            >
                <img src="images/plane.svg" alt="Plane"/>
                <Timer states={props.states}/>
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