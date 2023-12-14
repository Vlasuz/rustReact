import React, { useEffect, useState } from 'react'
import swordsOrange from "../../../assets/images/swordsOrange.svg";
import swordsDefault from "../../../assets/images/swordsDefault.svg";
import peopleBlue from "../../../assets/images/peopleBlue.svg";
import peopleDefault from "../../../assets/images/peopleDefault.svg";
import boxGreen from "../../../assets/images/boxGreen.svg";
import boxDefault from "../../../assets/images/boxDefault.svg";
import coin from "../../../assets/images/header__coins.svg";
import {IBattleCreate, ICrate} from "../../../model";
import {useSelector} from "react-redux";
import axios from "axios";
import {getApiLink} from "../../../functions/getApiLink";
import {getBearer} from "../../../functions/getBearer";
import {useNavigate} from "react-router";

interface IBattleCreateProps {
    setGameType: any
    gameType: IBattleCreate
    setGameStep: any
}

interface IGameType {
    [key: string]: string
}

export const BattleCreate:React.FC<IBattleCreateProps> = ({setGameType, gameType, setGameStep}) => {

    const battleCrates: ICrate[] = useSelector((state: any) => state.toolkit.battleCrates)

    const navigate = useNavigate()

    const gameTypes: IGameType = {
        "1v1": "two_way",
        "1v1v1": "three_way",
        "4way": "four_way",
        "2v2": "two_v_two",
        "2p": "two_p",
        "3p": "three_p",
        "4p": "four_p",
    }

    const handleCreateGame = () => {
        const requestData = {
            "mode": gameTypes[gameType.option],
            "crates": battleCrates.map((item: any) => {
                return {
                    crate_id: item.crate.id,
                    count: item.count
                }
            })
        }

        getBearer({type: "post"})
        axios.post(getApiLink("api/battle/create/"), requestData).then(({data}) => {
            console.log(data)
            setGameStep("waiting")

            const ws = new WebSocket(getApiLink(`ws/api/battle/game/${data.id}/`, true))

            ws.onopen = () => console.log('open')
            ws.onmessage = (e) => {
                console.log(e.data)
            }
            ws.onerror = (e) => console.log('error', e)

            // navigate("/battle/"+data.id)
        })
    }

    return (
        <div className="battle-area__create">
            <div className="option option-regular">
                <div className="option__top">
                    <div className={"img" + (gameType.type === 'regular' ? " img_active" : "")}>
                        <img src={swordsOrange} alt=""/>
                        <img src={swordsDefault} alt=""/>
                    </div>
                    <h3>Regular battle</h3>
                </div>
                <ul>
                    <li className={gameType.option === "1v1" ? "active" : ""} onClick={_ => setGameType({type: "regular", option: "1v1"})}>1v1</li>
                    <li className={gameType.option === "1v1v1" ? "active" : ""} onClick={_ => setGameType({type: "regular", option: "1v1v1"})}>1v1v1</li>
                    <li className={gameType.option === "4way" ? "active" : ""} onClick={_ => setGameType({type: "regular", option: "4way"})}>4-way</li>
                </ul>
            </div>
            <div className="option option-team">
                <div className="option__top">
                    <div className={"img" + (gameType.type === 'team' ? " img_active" : "")}>
                        <img src={peopleBlue} alt=""/>
                        <img src={peopleDefault} alt=""/>
                    </div>
                    <h3>Team battle</h3>
                </div>
                <ul>
                    <li className={gameType.option === "2v2" ? "active" : ""} onClick={_ => setGameType({type: "team", option: "2v2"})}>2v2</li>
                </ul>
            </div>
            <div className="option option-group">
                <div className="option__top">
                    <div className={"img" + (gameType.type === 'group' ? " img_active" : "")}>
                        <img src={boxGreen} alt=""/>
                        <img src={boxDefault} alt=""/>
                    </div>
                    <h3>Group battle</h3>
                </div>
                <ul>
                    <li className={gameType.option === "2p" ? "active" : ""} onClick={_ => setGameType({type: "group", option: "2p"})}>2 p</li>
                    <li className={gameType.option === "3p" ? "active" : ""} onClick={_ => setGameType({type: "group", option: "3p"})}>3 p</li>
                    <li className={gameType.option === "4p" ? "active" : ""} onClick={_ => setGameType({type: "group", option: "4p"})}>4 p</li>
                </ul>
            </div>

            <button disabled={!battleCrates.length} onClick={handleCreateGame} className="create-game__button">
                <span>Начать игру</span>
                <img src={coin} alt=""/>
                <p>500</p>
            </button>
        </div>
    )
}
