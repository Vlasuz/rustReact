import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import Timer from "../TimerForAirdrop/Timer";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Translate from "../../Hooks/Translate";

const FightTimer = ({ time, setTime }) => {

    const [step, setStep] = useState("")
    const response = useSelector( state => state.reducerFightsResponse.response)
    const [millisec, setMillisec] = useState(99)
    const [load, setLoad] = useState(true)
    const [startFrom, setStartFrom] = useState(useSelector(state => state.reducerFightsResponse.response).timer - 1)


    if (load) {
        setLoad(false)
        setInterval(() => {
            setMillisec(prev => prev < 1 ? 99 : prev - 1)
        }, 10)
    }

    useEffect(() => {

        const ti = setInterval(() => {
            setTime(prev => prev - 1)
        }, 1000)

        if(step === 1 && time < 0){
            // setStep(step + 1)
            // setTime(10)

            // let numOfButton = 0;
            // while (numOfButton < 2) {
            //     document.querySelectorAll('.section-fight__select button:not(button.button_active):not(button.button_disabled)')[numOfButton]?.click()
            //     numOfButton++;
            // }
        } else if (step === 2 && time < 0) {
            // let numOfButton = 0;
            // setTime(0)
            // while (numOfButton < 2) {
            //     document.querySelectorAll('.section-fight__select-hit button:not(button.button_active):not(button.button_disabled)')[numOfButton]?.click()
            //     numOfButton++;
            // }

        }

        return () => clearInterval(ti)
    }, [time])


    useEffect(() => {
        response.timer && setTime(response.timer - 1)

        if(response?.type === 'defense' || response?.fight?.game_state === 'defense') {
            setStep(<Translate>defense</Translate>)
        } else {
            setStep(<Translate>attack</Translate>)
        }
    }, [response])


    return (
        <div className="section-fight__center">
            <div className="center__running">
                <Link className={"link-to-finish"} to={'/fight-finish'}/>
                <span>
                    {step}
                </span>

                {time <= 10 && <div className="timer">
                    <svg className={"svgTimer"} width="110" height="110" viewBox="-1 -1 110 110">

                        <mask id="msk1">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".1" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".9s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk2">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".2" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".8s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk3">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".3" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".7s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk4">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".4" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".6s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk5">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".5" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".5s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk6">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".6" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".4s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk7">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".7" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".3s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk8">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".8" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".2s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk9">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity=".9" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin=".1s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>
                        <mask id="msk10">
                            <rect className="maskCircle maskCircle__inner" strokeOpacity="1" rx="20">
                                <animate
                                    attributeName="stroke-dashoffset"
                                    dur={startFrom + "s"}
                                    begin="0s"
                                    values={`${370 - ((startFrom - 1) * 37)};370`}
                                    repeatCount="indefinite"
                                />
                            </rect>
                        </mask>

                        <rect className="maskCircle" rx="20" mask="url(#msk1)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk2)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk3)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk4)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk5)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk6)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk7)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk8)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk9)"></rect>
                        <rect className="maskCircle" rx="20" mask="url(#msk10)"></rect>

                    </svg>
                    <div className="min">
                        <span>
                            {time < 10 ? "0" + time : time}
                        </span>
                    </div>
                    <div className="sec">
                        <small className="dot">.</small>
                        <span>
                            {time >= 0 && millisec < 10 ? "0" + millisec : millisec}
                        </span>
                    </div>
                </div>}
            </div>
        </div>
    );
};

export default FightTimer;