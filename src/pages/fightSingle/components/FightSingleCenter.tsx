import React, {useContext, useEffect, useState} from 'react'
import {LoadingStyled} from "../../../components/loading/loading.styled";
import fightFinishIcon from "./../../../assets/images/fight-finish-icon.svg"
import {FightSingleSvgTimer} from "./FightSingleSvgTimer";
import {useAirdropTimer} from "../../../hooks/airdropTimer";
import {useFightTimer} from "../../../hooks/fightTimer";
import {WSFight} from "../FightSingle";

interface IFightSingleCenterProps {
    gameState: string
    gameData: any
}

export const FightSingleCenter: React.FC<IFightSingleCenterProps> = ({gameState, gameData}) => {

    const fightWsMessages: any = useContext(WSFight)

    const {seconds, milliseconds} = useFightTimer(fightWsMessages[1]?.timer)

    return (
        <div className="section-fight__center">
            {(gameState === "ended" || gameState === "duel") && <div className="center__finish">
                <img src={fightFinishIcon} alt="Ico"/><p>Дуэль</p>
            </div>}

            {(gameState === "prepare" || gameState === "ended" || gameState === "duel") &&
                <FightSingleSvgTimer gameState={gameState} seconds={+gameData?.timer}/>}

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
