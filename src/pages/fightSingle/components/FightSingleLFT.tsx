import React, {useContext, useEffect, useState} from 'react'
import {FightSingleTop} from "./FightSingleTop";
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {useNavigate, useParams} from "react-router";

import personNNN from "../../../assets/images/persone-nnn.png";
import personSNN from "../../../assets/images/persone-snn.png";
import personSSN from "../../../assets/images/persone-ssn.png";
import personNSN from "../../../assets/images/persone-nsn.png";
import personNSS from "../../../assets/images/persone-nss.png";
import personNNS from "../../../assets/images/persone-nns.png";
import personSNS from "../../../assets/images/persone-sns.png";

import greenCheck from "./../../../assets/images/green-check.svg"
import headSil from "./../../../assets/images/head.png"
import bodySil from "./../../../assets/images/body.png"
import legsSil from "./../../../assets/images/legs.png"

import looserIcon from "./../../../assets/images/fight-looser.svg"
import winnerIcon from "../../../assets/images/victory-cup.svg";

import {findTheSameElems} from "../../../functions/fingTheSameElems";
import {WSFight} from "../FightSingle";
import bullet from "../../../assets/images/bullet.svg";
import {useSelector} from "react-redux";

interface IFightSingleLFTProps {
    mainPlayer: any
    gameState: string
    gameData: any
}

export const FightSingleLFT: React.FC<IFightSingleLFTProps> = ({mainPlayer, gameState, gameData}) => {

    const navigate = useNavigate()
    const ws: any = useContext(WSFight)
    const userData = useSelector((state: any) => state.toolkit.user)
    const {fightId} = useParams()

    const handleExit = () => {
        axios.delete(getApiLink("api/fight/room/cancel?game_id=" + fightId)).then(({data}) => {
            if (data.status) navigate("/")
        }).catch(er => console.log(er))
    }

    const [suit, setSuit] = useState([false, false, false])
    const [suitType] = useState(["Голова", "Торс", "Ноги"])
    const [isFullSuit, setIsFullSuit] = useState(false)

    const isYour = gameData.fight?.first_player.user.id === userData.id
    const attackSecond = !isYour ? gameData.fight?.first_player.attack : gameData.fight?.second_player.attack
    const defenseFirst = isYour ? gameData.fight?.first_player.defense : gameData.fight?.second_player.defense

    const suitHead = (defenseFirst?.includes('head') || suit[0]) ? "S" : "N"
    const suitBody = (defenseFirst?.includes('body') || suit[1]) ? "S" : "N"
    const suitLegs = (defenseFirst?.includes('legs') || suit[2]) ? "S" : "N"

    const suitImage: any = {
        "SSN": personSSN,
        "NNN": personNNN,
        "SNN": personSNN,
        "NSN": personNSN,
        "NSS": personNSS,
        "NNS": personNNS,
        "SNS": personSNS,
    }

    const [isHoverButtonToSkin, setIsHoverButtonToSkin] = useState(10)

    useEffect(() => {
        setIsFullSuit(findTheSameElems(suit, true) === 2)
        if(suit[0]||suit[1]||suit[2]) {
            ws[0].send(JSON.stringify({
                "type": "defense",
                "head": suit[0],
                "body": suit[1],
                "legs": suit[2]
            }))
        }
    }, [suit])

    useEffect(() => {
        if(gameState === "duel") {
            setSuit([false, false, false])
        }
    }, [gameState])

    const isHit = (bodyPart: string) => {
        return attackSecond.includes(bodyPart) && defenseFirst.includes(bodyPart) ? " attacked__bullet_good" : " attacked__bullet_bad"
    }
    const isAttack = (bodyPart: string) => {
        return attackSecond.includes(bodyPart) ? " attacked__bullet_active" : ""
    }

    const isWinner = gameData.fight?.winner?.user?.id === userData?.id

    return (
        <div className="section-fight__lft">
            <FightSingleTop player={mainPlayer}/>
            <div className="section-fight__persone">
                {gameState === "prepare" && <div className="persone__green">
                    <img className={"head" + (isHoverButtonToSkin === 0 ? " img_hover" : "")}
                         onClick={_ => setSuit(prev => [!isFullSuit && !suit[0] && !prev[0], prev[1], prev[2]])}
                         src={headSil} alt="Photo"
                         width="280"/>
                    <img className={"body" + (isHoverButtonToSkin === 1 ? " img_hover" : "")}
                         onClick={_ => setSuit(prev => [prev[0], !isFullSuit && !suit[1] && !prev[1], prev[2]])}
                         src={bodySil} alt="Photo"
                         width="270"/>
                    <img className={"legs" + (isHoverButtonToSkin === 2 ? " img_hover" : "")}
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
                    <img src={suitImage[suitHead + suitBody + suitLegs]} className={"persone-img"} alt="Persone"/>
                </div>
            </div>

            {gameState === "waiting" && <div onClick={handleExit} className="section-fight__bottom">
                <button className="section-fight__cancel">Отменить игру</button>
            </div>}

            {(gameState === "duel" || gameState === "ended") &&
                <div className="section-fight__bottom section-fight__bottom_finish">
                    <div className={"bottom__status" + (isWinner ? " bottom__status_winner" : " bottom__status_looser")}>
                        {gameState === "ended" && <img src={gameData.fight.winner?.user?.id === userData?.id ? winnerIcon : looserIcon} alt={"winner"}/>}
                    </div>
                </div>}

            {gameState === "prepare" && <div className="section-fight__bottom">
                {!isFullSuit && <div className="bottom__info">
                    <p>Выберите 2 области защиты</p>
                </div>}
                <ul className="section-fight__select">

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
