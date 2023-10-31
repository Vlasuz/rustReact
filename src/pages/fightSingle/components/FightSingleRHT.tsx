import React, {useEffect, useState} from 'react'
import {FightSingleTop} from "./FightSingleTop";
import personSilhouette from "../../../assets/images/persone-siluete.png";
import greenCheck from "../../../assets/images/red-check.svg";
import { findTheSameElems } from '../../../functions/fingTheSameElems';
import headSil from "../../../assets/images/head-hit.png";
import bodySil from "../../../assets/images/body-hit.png";
import legsSil from "../../../assets/images/legs-hit.png";

import looserIcon from "./../../../assets/images/fight-looser.svg"
import winnerIcon from "../../../assets/images/victory-cup.svg";

interface IFightSingleLFTProps {
    opponentPlayer: any,
    gameState: string
}

export const FightSingleRHT: React.FC<IFightSingleLFTProps> = ({opponentPlayer, gameState}) => {

    const [suit, setSuit] = useState([false, false, false])
    const [suitType] = useState(["Голова", "Торс", "Ноги"])
    const [isFullSuit, setIsFullSuit] = useState(false)

    useEffect(() => {
        setIsFullSuit(findTheSameElems(suit, true) === 2)
    }, [suit])

    const [isHoverButtonToSkin, setIsHoverButtonToSkin] = useState(10)

    return (
        <div className="section-fight__rht">
            <FightSingleTop player={opponentPlayer}/>
            <div className="section-fight__persone">
                {gameState === "prepare" && <div className="persone__green">
                    <img className={"head" + (isHoverButtonToSkin === 0 ? " img_hover" : suit[0] ? " img_clicked" : "")}
                         onClick={_ => setSuit(prev => [!isFullSuit && !suit[0] && !prev[0], prev[1], prev[2]])}
                         src={headSil} alt="Photo"
                         width="280"/>
                    <img className={"head" + (isHoverButtonToSkin === 1 ? " img_hover" : suit[1] ? " img_clicked" : "")}
                         onClick={_ => setSuit(prev => [prev[0], !isFullSuit && !suit[1] && !prev[1], prev[2]])}
                         src={bodySil} alt="Photo"
                         width="270"/>
                    <img className={"head" + (isHoverButtonToSkin === 2 ? " img_hover" : suit[2] ? " img_clicked" : "")}
                         onClick={_ => setSuit(prev => [prev[0], prev[1], !isFullSuit && !suit[2] && !prev[2]])}
                         src={legsSil} alt="Photo"
                         width="270"/>
                </div>}
                <div className="persone__start">
                    <img src={personSilhouette} alt="Persone"/>
                </div>
            </div>

            {gameState === "waiting" && <div className="section-fight__bottom">
                <div className="section-fight__opponent-info">Нет игрока</div>
            </div>}

            {(gameState === "duel" || gameState === "ended") && <div className="section-fight__bottom section-fight__bottom_finish">
                <div className="bottom__status bottom__status_looser">
                    {gameState === "ended" && <img src={looserIcon} alt={"Looser"}/>}
                </div>
            </div>}

            {gameState === "prepare" && <div className="section-fight__bottom">
                {!isFullSuit && <div className="bottom__info">
                    <p>Выберите 2 области атаки</p>
                </div>}
                <ul className="section-fight__select-hit">

                    {
                        suitType.map((item: string, index: number) => {

                            const isChange = (prev: any, num: number) => index === num ? !isFullSuit && !suit[num] && !prev[num] : prev[num]
                            const isExtra = isFullSuit && !suit[index]

                            return (
                                <li>
                                    <button
                                        onClick={_ => setSuit(prev => [
                                            isChange(prev, 0),
                                            isChange(prev, 1),
                                            isChange(prev, 2)
                                        ])}
                                        onMouseOver={_ => setIsHoverButtonToSkin(index)}
                                        onMouseOut={_ => setIsHoverButtonToSkin(10)}
                                        className={suit[index] ? " button_active" : isExtra ? " button_hidden" : ""}>

                                        <span>
                                            {item}
                                        </span>

                                        <img src={greenCheck} alt="Ico"/>
                                    </button>
                                </li>
                            )
                        })
                    }

                </ul>
            </div>}

        </div>
    )
}
