import React, {createContext, useEffect, useRef, useState} from 'react'
import {BattleSingleStyled} from "./BattleSingle.styled";
import {BattleTop} from "../../components/battleTop/BattleTop";

import bgd from './../../assets/images/bgdForBattle.jpg'
import battleAreaBottom from './../../assets/images/battleAreaBottom.svg'
import coin from './../../assets/images/header__coins.svg'
import CrateBig from './../../assets/images/CrateBig.svg'
import swordsDefault from './../../assets/images/swordsDefault.svg'
import swordsOrange from './../../assets/images/swordsOrange.svg'
import peopleDefault from './../../assets/images/peopleDefault.svg'
import peopleBlue from './../../assets/images/peopleBlue.svg'
import boxDefault from './../../assets/images/boxDefault.svg'
import boxGreen from './../../assets/images/boxGreen.svg'
import {useDrag} from "react-use-gesture";
import {animated, useSpring} from '@react-spring/web';
import {CrateItem} from "./components/CrateItem";
import {BattleArea} from "./components/BattleArea";
import {BattleCreate} from "./components/BattleCreate";
import {BattleBottom} from "./components/BattleBottom";
import {IBattleCreate} from "../../model";

interface IBattleSingleProps {

}

export const GameState: any = createContext(null)

export const BattleSingle: React.FC<IBattleSingleProps> = () => {

    const blockArea: any = useRef(null)

    const [gameType, setGameType] = useState<IBattleCreate>({
        type: "team",
        option: "2v2"
    })

    const gameStep: string = "ended"
    // start, waiting, process, ended

    return (
        <GameState.Provider value={gameStep}>
            <BattleSingleStyled ref={blockArea}>
                <BattleTop/>

                <div className="battle-area">
                    <div className="battle-area__bgd">
                        <img src={bgd} alt="img"/>
                    </div>

                    {gameStep === "start" && <BattleCreate setGameType={setGameType} gameType={gameType}/>}

                    <BattleArea gameType={gameType} blockArea={blockArea}/>

                    <BattleBottom gameType={gameType}/>
                </div>
            </BattleSingleStyled>
        </GameState.Provider>
    )
}
