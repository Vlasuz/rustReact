import React, {useContext, useEffect} from 'react'
import lineAirdrop from "../../../../../assets/images/line-for-right.svg";
import coins from "../../../../../assets/images/header__coins.svg";
import {AirdropSocketContext} from "../../../../../App";
import {useAirdropTimer} from "../../../../../hooks/airdropTimer";

interface IAirdropInfoBlockProps {

}

export const AirdropInfoBlock:React.FC<IAirdropInfoBlockProps> = () => {

    const airdropWsMessages: any = useContext(AirdropSocketContext)

    const {seconds, milliseconds} = useAirdropTimer()

    const textBlock: any = {
        "start": "Ожидание игроков",
        "waiting": "До вылета:",
    }

    const fixTimer: any = {
        "waiting": 30,
        "process": 30,
        "drop": 5,
        "ended": 10,
        "prepare": 5,
        "start": 1,
    }

    return (
        <div className="airdrop__block">
            <div className="airdrop__fly">
                <div className="fly__top">
                    <p>
                        {
                            textBlock[airdropWsMessages?.airdrop?.game_state]
                        }
                    </p>
                    <div className="timer">
                        <div className="min">
                            <span>
                                {
                                    seconds < 10 ? "0" + seconds : seconds
                                }
                            </span>
                        </div>
                        <div className="sec">
                            <small className="dot">.</small>
                            <span>
                                {
                                    milliseconds < 10 ? "0" + milliseconds : milliseconds
                                }
                            </span>
                        </div>
                    </div>
                </div>

                {/*.section-right__airdrop .airdrop__timer-to-ready .line_done:after*/}
                <div className={"fly__bottom" + (airdropWsMessages?.airdrop?.game_state === "process" ? " fly__bottom_plane" : "")}>
                    <div className="fly__timer">
                        <img src={lineAirdrop} alt="Ico"/>
                        <div className="line">
                            <div className="line_done" style={{width: airdropWsMessages?.airdrop?.game_state === "process" ? (-(seconds * 100 / fixTimer[airdropWsMessages?.airdrop?.game_state]) + 100) + "%" : (seconds * 100 / fixTimer[airdropWsMessages?.airdrop?.game_state]) + "%"}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="airdrop__bank">
                <p>В банке</p>
                <div className="coins">
                    <img src={coins} alt="Ico"/>
                    <span>
                        {airdropWsMessages?.airdrop?.bank}
                    </span>
                </div>
            </div>
        </div>
    )
}
