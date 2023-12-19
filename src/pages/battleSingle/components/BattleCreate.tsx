import React, {useEffect, useRef, useState} from 'react'
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
import {useNavigate, useParams} from "react-router";
import getCookies from "../../../functions/getCookie";

interface IBattleCreateProps {
    setGameType: any
    gameType: string
    setGameStep: any
    setWebSocket: any
}

interface IGameType {
    [key: string]: string
}

export const BattleCreate:React.FC<IBattleCreateProps> = ({setGameType, gameType, setGameStep, setWebSocket}) => {

    const battleCrates: ICrate[] = useSelector((state: any) => state.toolkit.battleCrates)

    const {battleId} = useParams()

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
    const gameTypesReverse: IGameType = {
        "two_way": "1v1",
        "three_way": "1v1v1",
        "four_way": "4way",
        "two_v_two": "2v2",
        "two_p": "2p",
        "three_p": "3p",
        "four_p": "4p",
    }

    const handleCreateGame = () => {
        const requestData = {
            "mode": gameTypes[gameType],
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
            // setGameStep("waiting")

            connectToSocket(data.id)

            // navigate("/battle/"+data.id)
        })
    }

    useEffect(() => {
        if(!battleId) return;

        connectToSocket(battleId)
    }, [battleId])


    const connectToSocket = (gameId: string) => {
        const ws = new WebSocket(getApiLink(`ws/api/battle/game/${gameId}/`, true))

        ws.onopen = () => {
            getCookies("access_token_rust") && ws.send(`{"type":"auth", "token":"${getCookies("access_token_rust")}"}`)
            console.log('open')
        }
        ws.onmessage = (e: any) => {
            const data = JSON.parse(JSON.parse(e.data))

            console.log('MAIN MESS',data)
            setGameStep(data.battle.status)
            setGameType(gameTypesReverse[data.battle.mode])
            setWebSocket(data)
        }
        ws.onclose = (e: any) => console.log('close', e)
        ws.onerror = (e: any) => console.log('error', e)
    }

    return (
        <div className="battle-area__create">
            <div className="option option-regular">
                <div className="option__top">
                    <div className={"img" + (gameType === "1v1" || gameType === "1v1v1" ||gameType === "4way" ? " img_active" : "")}>
                        <img src={swordsOrange} alt=""/>
                        <img src={swordsDefault} alt=""/>
                    </div>
                    <h3>Regular battle</h3>
                </div>
                <ul>
                    <li className={gameType === "1v1" ? "active" : ""} onClick={_ => setGameType("1v1")}>1v1</li>
                    <li className={gameType === "1v1v1" ? "active" : ""} onClick={_ => setGameType("1v1v1")}>1v1v1</li>
                    <li className={gameType === "4way" ? "active" : ""} onClick={_ => setGameType("4way")}>4-way</li>
                </ul>
            </div>
            <div className="option option-team">
                <div className="option__top">
                    <div className={"img" + (gameType === "2v2" ? " img_active" : "")}>
                        <img src={peopleBlue} alt=""/>
                        <img src={peopleDefault} alt=""/>
                    </div>
                    <h3>Team battle</h3>
                </div>
                <ul>
                    <li className={gameType === "2v2" ? "active" : ""} onClick={_ => setGameType("2v2")}>2v2</li>
                </ul>
            </div>
            <div className="option option-group">
                <div className="option__top">
                    <div className={"img" + (gameType === "2p" || gameType === "3p" || gameType === "4p" ? " img_active" : "")}>
                        <img src={boxGreen} alt=""/>
                        <img src={boxDefault} alt=""/>
                    </div>
                    <h3>Group battle</h3>
                </div>
                <ul>
                    <li className={gameType === "2p" ? "active" : ""} onClick={_ => setGameType("2p")}>2 p</li>
                    <li className={gameType === "3p" ? "active" : ""} onClick={_ => setGameType("3p")}>3 p</li>
                    <li className={gameType === "4p" ? "active" : ""} onClick={_ => setGameType("4p")}>4 p</li>
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
