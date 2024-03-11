import React, {useContext, useEffect, useState} from 'react'
import plane from "../../../assets/images/plane.svg";
import timer_line from "../../../assets/images/timer-line.svg";
import {NavLink} from "react-router-dom";
import { AirdropSocketContext } from '../../../App';
import {useAirdropTimer} from "../../../hooks/airdropTimer";

interface IAsideAirdropProps {
    handleChangePage: any
}

export const AsideAirdrop:React.FC<IAsideAirdropProps> = ({handleChangePage}) => {

    const airdropWsMessages: any = useContext(AirdropSocketContext)

    const {seconds, milliseconds} = useAirdropTimer(0)

    const fixTimer: any = {
        "waiting": 30,
        "process": 30,
        "drop": 5,
        "ended": 10,
        "prepare": 5,
        "start": 1,
    }

    const handleGoToAirdrop = () => {
        handleChangePage("sound12", {slug: "AIRDROP", title: "Аирдроп"})
    }

    return (
        <NavLink to={"/airdrop"} onClick={handleGoToAirdrop} className={({isActive}) => "aside__plane" + (isActive ? " aside__plane_timeline" : "")}>
            <img src={plane} alt="Plane" />
            <div className="timer">
                <div className="min">
                    <span>
                        {
                            seconds < 10 ? "0"+seconds : seconds
                        }
                    </span>
                </div>
                <div className="sec">
                    <small className="dot">.</small>
                    <span>
                        {
                            milliseconds < 10 ? "0"+milliseconds : milliseconds
                        }
                    </span>
                </div>
            </div>
            <div className="timer-line">
                <img src={timer_line} alt="Line" />
                <div className="timer-line__line">
                    <div className="timer-line__line_done" style={{width: seconds * 100 / fixTimer[airdropWsMessages?.airdrop?.game_state] + "%"}} />
                </div>
            </div>
            <span className="absolute-span">
                    Аирдроп
                </span>
        </NavLink>
    )
}
