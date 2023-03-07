import TimerMilliseconds from "../../TimerForAirdrop/TimerMilliseconds";
import {useSelector} from "react-redux";
import React, {useEffect, useState} from "react";
import Translate from "../../../Hooks/Translate";


const RightsAirdropBlock = () => {

    const seconds = useSelector(state => state.reducerAirdropTimerSecond.seconds)
    const step = useSelector(state => state.reducerAirdropStep.step)
    const response = useSelector(state => state.reducerAirdropSocket.response)

    return (
        <div className="airdrop__block">

            <div className={step === "waiting" ? "airdrop__fly" : "airdrop__timer-to-ready"}>
                <div className="fly__top">
                    {
                        step === "waiting" ? <p><Translate>before_fly</Translate>:</p> :
                            step === "ended" || step === 'skipped' ? <p><Translate>select_winner</Translate></p> :
                                step === "prepare" ? <p><Translate>start_in</Translate></p>
                                    : ""
                    }
                    <div className="timer">
                        <div className="min">
                                <span>
                                    {seconds < 0 ? '00' : seconds < 10 ? "0" + seconds : seconds}
                                </span>
                        </div>
                        <TimerMilliseconds/>
                    </div>
                </div>
                <div className="fly__bottom">
                    <div className="fly__timer">
                        <img src="../images/line-for-right.svg" alt="Ico"/>
                        <div className="line">
                            {
                                step === 'waiting' ?
                                    <div className="line_done" style={{width: seconds * 100 / 30 + "%"}}/> :
                                    step === "process" ? <div className="line_done"
                                                              style={{width: -(seconds * 100 / 30) + 100 + "%"}}/> :
                                        ""
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className="airdrop__bank">
                <p>
                    <Translate>in_bank</Translate>
                </p>
                <div className="coins">
                    <img src="../images/header__coins.svg" alt="Ico"/>
                    <span>
                        {response?.airdrop?.bank}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default RightsAirdropBlock;