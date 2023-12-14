import React, {createContext, useEffect, useRef, useState} from 'react'
import {BattleSingleStyled} from "./BattleSingle.styled";
import {BattleTop} from "../../components/battleTop/BattleTop";

import bgd from './../../assets/images/bgdForBattle.jpg'
import {BattleArea} from "./components/BattleArea";
import {BattleCreate} from "./components/BattleCreate";
import {BattleBottom} from "./components/BattleBottom";
import {IBattleCreate, ICrate} from "../../model";
import {NavLink} from "react-router-dom";

interface IBattleSingleProps {

}

export const GameState: any = createContext(null)

export const BattleSingle: React.FC<IBattleSingleProps> = () => {

    const blockArea: any = useRef(null)

    const [gameType, setGameType] = useState<IBattleCreate>({
        type: "team",
        option: "2v2"
    })

    const [gameStep, setGameStep] = useState<string>("start")
    // start, waiting, prepare, process, calculate, ended

    // useEffect(() => {
    //     if(gameStep !== "waiting") return;
    //
    //     setTimeout(() => {
    //         setGameStep("prepare")
    //
    //         setTimeout(() => {
    //             setGameStep("process")
    //         }, 5000)
    //     }, 1000)
    // }, [gameStep])

    return (
        <GameState.Provider value={gameStep}>
            <BattleSingleStyled ref={blockArea}>
                <BattleTop/>

                <div className="battle-area">
                    <NavLink to={"/battle"} className="battle-area__back">
                        <svg width="5" height="9" viewBox="0 0 5 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M3.29289 1.24687C3.68342 0.856348 4.31658 0.856348 4.70711 1.24687C5.09763 1.6374 5.09763 2.27056 4.70711 2.66109L2.41421 4.95398L4.70711 7.24687C5.09763 7.6374 5.09763 8.27056 4.70711 8.66109C4.31658 9.05161 3.68342 9.05161 3.29289 8.66109L0.292893 5.66109C-0.0976311 5.27056 -0.0976311 4.6374 0.292893 4.24687L3.29289 1.24687Z" fill="#A2ABC5" fill-opacity="0.5"/>
                        </svg>
                        <span>Назад</span>
                    </NavLink>

                    <div className="battle-area__bgd">
                        <img src={bgd} alt="img"/>
                    </div>

                    {gameStep === "start" && <BattleCreate setGameStep={setGameStep} setGameType={setGameType} gameType={gameType}/>}

                    <BattleArea setGameStep={setGameStep} gameType={gameType} blockArea={blockArea}/>

                    <BattleBottom gameType={gameType}/>
                </div>
            </BattleSingleStyled>
        </GameState.Provider>
    )
}
