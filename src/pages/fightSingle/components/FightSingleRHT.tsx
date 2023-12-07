import React, {useContext, useEffect, useState} from 'react'
import {FightSingleTop} from "./FightSingleTop";
import personSilhouette from "../../../assets/images/persone-siluete.png";
import greenCheck from "../../../assets/images/red-check.svg";
import {findTheSameElems} from '../../../functions/fingTheSameElems';
import headSil from "../../../assets/images/head-hit.png";
import bodySil from "../../../assets/images/body-hit.png";
import legsSil from "../../../assets/images/legs-hit.png";

import looserIcon from "./../../../assets/images/fight-looser.svg"
import winnerIcon from "../../../assets/images/victory-cup.svg";
import bullet from "../../../assets/images/bullet.svg";
import {WSFight} from "../FightSingle";
import personSSN from "../../../assets/images/persone-ssn.png";
import personNNN from "../../../assets/images/persone-nnn.png";
import personSNN from "../../../assets/images/persone-snn.png";
import personNSN from "../../../assets/images/persone-nsn.png";
import personNSS from "../../../assets/images/persone-nss.png";
import personNNS from "../../../assets/images/persone-nns.png";
import personSNS from "../../../assets/images/persone-sns.png";
import {useSelector} from "react-redux";
import {getApiLink} from "../../../functions/getApiLink";

interface IFightSingleLFTProps {
    opponentPlayer: any,
    gameState: string
    gameData: any
}

export const FightSingleRHT: React.FC<IFightSingleLFTProps> = ({opponentPlayer, gameState, gameData}) => {

    const [suit, setSuit] = useState([false, false, false])
    const [suitType] = useState(["Голова", "Торс", "Ноги"])
    const [isFullSuit, setIsFullSuit] = useState(false)

    const userData = useSelector((state: any) => state.toolkit.user)
    const settings = useSelector((state: any) => state.toolkit.siteSettings)

    const isYour = gameData.fight?.first_player.user.id === userData.id
    const attackFirst = isYour ? gameData.fight?.first_player.attack : gameData.fight?.second_player.attack
    const defenseSecond = !isYour ? gameData.fight?.first_player.defense : gameData.fight?.second_player.defense

    const ws: any = useContext(WSFight)

    const chosenSkin = !isYour ? gameData.fight?.first_player?.user?.chosen_skin : gameData.fight?.second_player?.user?.chosen_skin ?? settings.default_fight_skin

    const suitHead = defenseSecond?.includes('head') ? "x" : "i"
    const suitBody = defenseSecond?.includes('body') ? "x" : "i"
    const suitLegs = defenseSecond?.includes('legs') ? "x" : "i"

    useEffect(() => {
        setIsFullSuit(findTheSameElems(suit, true) === 2)
        if (suit[0] || suit[1] || suit[2]) {
            ws[0].send(JSON.stringify({
                "type": "attack",
                "head": suit[0],
                "body": suit[1],
                "legs": suit[2]
            }))
        }
    }, [suit])

    const [isHoverButtonToSkin, setIsHoverButtonToSkin] = useState(10)

    useEffect(() => {
        if (gameState === "duel") {
            setSuit([false, false, false])
        }
    }, [gameState])

    const isHit = (bodyPart: string) => {
        return attackFirst.includes(bodyPart) && defenseSecond.includes(bodyPart) ? " attacked__bullet_good" : " attacked__bullet_bad"
    }
    const isAttack = (bodyPart: string) => {
        return attackFirst.includes(bodyPart) ? " attacked__bullet_active" : ""
    }

    const isWinner = gameData.fight?.winner?.user?.id !== userData?.id

    return (
        <div className="section-fight__rht">
            <FightSingleTop player={opponentPlayer}/>
            <div className="section-fight__persone section-fight__persone-hit">
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
                    {(gameState === "duel" || gameState === "ended") && <div className="persone__attacked">
                        <div
                            className={"attacked__bullet attacked__bullet-head" + (isHit('head') + (isAttack('head')))}>
                            <img src={bullet} alt="Ico"/>
                            <div className="line"></div>
                        </div>
                        <div
                            className={"attacked__bullet attacked__bullet-body" + (isHit('body') + (isAttack('body')))}>
                            <img src={bullet} alt="Ico"/>
                            <div className="line"></div>
                        </div>
                        <div
                            className={"attacked__bullet attacked__bullet-legs" + (isHit('legs') + (isAttack('legs')))}>
                            <img src={bullet} alt="Ico"/>
                            <div className="line"></div>
                        </div>
                    </div>}
                    <img src={getApiLink(chosenSkin?.gallery[suitHead + suitBody + suitLegs])} className={"persone-img"} alt="Persone"/>
                </div>
            </div>

            {gameState === "waiting" && <div className="section-fight__bottom">
                <div className="section-fight__opponent-info">Нет игрока</div>
            </div>}

            {(gameState === "duel" || gameState === "ended") &&
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div className={"bottom__status" + (gameData.fight?.winner?.user?.id && isWinner ? " bottom__status_winner" : " bottom__status_looser")}>
                        {gameState === "ended" && <img src={isWinner ? winnerIcon : looserIcon} alt={"winner"}/>}
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
