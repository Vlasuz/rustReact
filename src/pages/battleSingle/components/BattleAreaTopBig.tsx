import React, {useEffect} from 'react'
import CrateBig from "../../../assets/images/CrateBig.svg";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {FightSingleSvgTimer} from "../../fightSingle/components/FightSingleSvgTimer";
import {useFightTimer} from "../../../hooks/fightTimer";

interface IBattleAreaTopBigProps {
    gameStep: any
}

export const BattleAreaTopBig: React.FC<IBattleAreaTopBigProps> = ({gameStep}) => {

    const timer = 5
    const {seconds, milliseconds} = useFightTimer(timer, gameStep)

    return (
        <div className="crate crate__single">
            {gameStep === "start" && <img src={CrateBig} alt=""/>}

            {gameStep === "waiting" &&
                <div className="loading">
                    <LoadingStyled className="load">
                        <div className="line"/>
                        <div className="line"/>
                        <div className="line"/>
                    </LoadingStyled>
                    <p>Ожидание</p>
                </div>
            }

            {gameStep === "prepare" && <FightSingleSvgTimer isFight={false} gameState={gameStep} seconds={+timer}/>}
            {gameStep === "prepare" && <div className="center__running">
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
