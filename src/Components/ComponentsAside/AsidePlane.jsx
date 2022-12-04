import React, {createElement, useEffect, useState} from 'react';
import {NavLink} from "react-router-dom";
import Timer from "../TimerForAirdrop/Timer";

const AsidePlane = (props) => {

    const changeRightsBlock = (e) => {

        document.querySelector('.section-right__item')?.classList.remove('section-right__item_show')
        document.querySelector('.section-right__item').classList.add('section-right__item_hidden')

        setTimeout(() => {
            props.states.setSwitcherRights('rights-airdrop')
            document.querySelector('.section-right__switcher').classList.add('section-right__switcher-airdrop')
        }, 300)

        document.querySelectorAll('.aside__list li').forEach(item => {
            item.classList.remove('li_active')
        })
        document.querySelector('.section-right__top .top__item:first-child').click()
        e.target.closest('li')?.classList.add('li_active')
    }

    useEffect(() => {
        document.querySelector('.aside__list li').classList.remove('active')
        if(props.states.switcherRights === "rights-airdrop"){
            document.querySelectorAll('.aside__list li').forEach(item => {
                item.classList.remove('li_active')
            })
        }
        document.querySelector('.section-right__item').classList.remove('section-right__item_hidden')
        document.querySelector('.section-right__item').classList.add('section-right__item_show')
    })

    return (
        <NavLink
            to={props.to}
            className={isActive => isActive ? 'aside__plane' : 'aside__plane aside__plane_active'}
        >
            <button
                onClick={e => changeRightsBlock(e)}
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