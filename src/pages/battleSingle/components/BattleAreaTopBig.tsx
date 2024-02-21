import React, {useContext, useEffect} from 'react'
import CrateBig from "../../../assets/images/CrateBig.svg";
import {LoadingStyled} from "../../../components/loading/loading.styled";
import {FightSingleSvgTimer} from "../../fightSingle/components/FightSingleSvgTimer";
import {useFightTimer} from "../../../hooks/fightTimer";
import {GameSocket} from "../BattleSingle";

interface IBattleAreaTopBigProps {
    gameStep: any
}

export const BattleAreaTopBig: React.FC<IBattleAreaTopBigProps> = ({gameStep}) => {

    const webSocket: any = useContext(GameSocket)
    const timer = webSocket?.timer ? webSocket?.timer : 5
    const {seconds, milliseconds} = useFightTimer(timer, gameStep)

    const millisecondsWithTest = milliseconds < 0 ? 99 + milliseconds : milliseconds

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

            {(!webSocket?.battle?.players[0]?.item?.length && (gameStep === "process" || gameStep === "end")) && <FightSingleSvgTimer isFight={true} gameState={gameStep} seconds={+timer}/>}
            {(!webSocket?.battle?.players[0]?.item?.length && (gameStep === "process" || gameStep === "end")) && <div className="center__running">
                <span>Начало</span>
                <div className="timer">
                    <div className="min">
                        <span>{seconds < 10 ? "0" + seconds : seconds}</span>
                    </div>
                    <div className="sec">
                        <span>.{millisecondsWithTest < 10 ? "0" + millisecondsWithTest : millisecondsWithTest}</span>
                    </div>
                </div>
            </div>}
        </div>
    )
}
