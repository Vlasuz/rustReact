import React, {useEffect, useState} from 'react'
import {LoadingStyled} from "../../../components/loading/loading.styled";
import fightFinishIcon from "./../../../assets/images/fight-finish-icon.svg"

interface IFightSingleCenterProps {
    gameState: string
    gameData: any
}

export const FightSingleCenter: React.FC<IFightSingleCenterProps> = ({gameState, gameData}) => {

    const defaultMilliseconds = 85
    const defaultSeconds = (+gameData?.timer - 1) ?? 10

    const [milliseconds, setMilliseconds] = useState(defaultMilliseconds)
    const [seconds, setSeconds] = useState(defaultSeconds);
    const [timerActive, setTimerActive] = useState(false);

    React.useEffect(() => {
        if (seconds > 0 && timerActive) {
            setTimeout(setSeconds, 1000, seconds - 1);
        } else {
            if (milliseconds <= 0) {
                setTimerActive(false);
            }
        }
    }, [seconds, timerActive]);

    React.useEffect(() => {
        if (milliseconds > 0 && timerActive) {
            setTimeout(setMilliseconds, 10, +milliseconds - 1);
        } else if (seconds > 0) {
            setMilliseconds(seconds > 0 ? +defaultMilliseconds : 0)
        }
    }, [milliseconds, timerActive, seconds]);

    useEffect(() => {
        if (gameState === "prepare") {
            setTimerActive(true)
            setSeconds(defaultSeconds)
        }
    }, [gameState])

    return (
        <div className="section-fight__center">
            {gameState === "ended" && <div className="center__finish">
                    {/*<svg className="svgTimer" width="110" height="110" viewBox="-1 -1 110 110">*/}
                    {/*    <mask id="msk1">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".1" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk2">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".2" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk3">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".3" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk4">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".4" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk5">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".5" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk6">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".6" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk7">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".7" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk8">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".8" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk9">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity=".9" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <mask id="msk10">*/}
                    {/*        <rect className="maskCircle maskCircle__inner" stroke-opacity="1" rx="20"></rect>*/}
                    {/*    </mask>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk1)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk2)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk3)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk4)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk5)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk6)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk7)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk8)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk9)"></rect>*/}
                    {/*    <rect className="maskCircle" rx="20" mask="url(#msk10)"></rect>*/}
                    {/*</svg>*/}
                    <img src={fightFinishIcon} alt="Ico"/><p>Дуэль</p>
                </div>}

            {gameState === "waiting" && <div className="center__loading">
                <LoadingStyled className="load">
                    <div className="line"/>
                    <div className="line"/>
                    <div className="line"/>
                </LoadingStyled>
                <span>Ожидание</span>
            </div>}

            {gameState === "prepare" && <div className="center__running">
                <span>Начало</span>
                <div className="timer">
                    <div className="min">
                        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                    </div>
                    <div className="sec">
                        <span>.{milliseconds < 10 ? "0" + milliseconds : milliseconds}</span>
                    </div>
                </div>
            </div>}
        </div>
    )
}
