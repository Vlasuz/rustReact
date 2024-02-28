import React, {createContext, useContext, useEffect, useRef, useState} from 'react'
import {BattleSingleStyled} from "./BattleSingle.styled";
import {BattleTop} from "../../components/battleTop/BattleTop";

import bgd from './../../assets/images/bgdForBattle.jpg'
import {BattleArea} from "./components/BattleArea";
import {BattleCreate} from "./components/BattleCreate";
import {BattleBottom} from "./components/BattleBottom";
import {NavLink} from "react-router-dom";
import {getApiLink} from "../../functions/getApiLink";
import getCookies from "../../functions/getCookie";
import {useNavigate, useParams} from "react-router";
import { IsJoinToGame } from '../../App';
import {setUserBalance} from "../../redux/toolkitSlice";
import { useDispatch, useSelector } from 'react-redux';
import {userInfo} from "os";
import {IUser} from "../../model";
import axios from "axios";
import {getBearer} from "../../functions/getBearer";
import {ConfettiFireworks} from "../../components/confetti/ConfettiFireworks";

interface IBattleSingleProps {

}

export const GameState: any = createContext(null)
export const GameSocket: any = createContext(null)
export const GameWS: any = createContext(null)

export const BattleSingle: React.FC<IBattleSingleProps> = () => {

    const {battleId} = useParams()

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [webSocket, setWebSocket]: any = useState(null)
    const [gameType, setGameType] = useState<string>("2v2")
    const [gameStep, setGameStep] = useState<string>("start")

    const blockArea: any = useRef(null)

    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    useEffect(() => {

        webSocket?.battle?.status && setGameStep(battleId ? webSocket?.battle?.status : "start")

    }, [webSocket?.battle?.status])

    const gameTypesReverse: any = {
        "two_way": "1v1",
        "three_way": "1v1v1",
        "four_way": "4way",
        "two_v_two": "2v2",
        "two_p": "2p",
        "three_p": "3p",
        "four_p": "4p",
    }

    const {isJoinToGame}: any = useContext(IsJoinToGame)

    const ws: any = useRef(null)

    const connectToSocket = (gameId: string, isAuthor?: boolean) => {

        ws.current = new WebSocket(getApiLink(`ws/api/battle/game/${gameId}/`, true))

        ws.current.onopen = () => {
            isAuthor && getCookies("access_token_rust") && ws.current.send(`{"type":"auth", "token":"${getCookies("access_token_rust")}"}`)
        }
        ws.current.onmessage = (e: any) => {
            const data = JSON.parse(JSON.parse(e.data))

            setGameStep(data?.battle?.status)
            setGameType(gameTypesReverse[data?.battle?.mode])
            setWebSocket(data)
        }
        ws.current.onclose = (e: any) => console.log('close', e)
        ws.current.onerror = (e: any) => console.log('error', e)
    }

    useEffect(() => {
        if (battleId === "create-battle") return;

        battleId && connectToSocket(battleId, isJoinToGame)
    }, [battleId])

    const handleCancelGame = () => {

        const gameId = window.location.href.slice(window.location.href.indexOf('/battle/') + 8)

        if (gameId === "create-battle" && battleId === "create-battle" && !battleId) return;


        getBearer({type: "delete"})
        axios.delete(getApiLink(`api/battle/cancel/?game_id=${battleId !== "create-battle" ? battleId : gameId}`)).then(({data}) => {
            if(data.status === false) return;
            
            dispatch(setUserBalance({sum: true, money: webSocket?.battle?.bet}))

            navigate("/battle")
        }).catch(er => console.log(er))
    }


    const [isYouWin, setIsYouWin] = useState(false)
    

    return (
        <GameWS.Provider value={ws.current}>
            <GameSocket.Provider value={webSocket}>
                <GameState.Provider value={gameStep}>
                    <BattleSingleStyled ref={blockArea}>
                        <BattleTop/>

                        {isYouWin && <ConfettiFireworks/>}

                        <div className="battle-area">
                            {webSocket?.battle?.status === "waiting" && webSocket?.battle?.players?.some((item: any) => item.position === 1 && item.user.id === userData.id) &&
                                <button onClick={handleCancelGame} className="battle-area__back">
                                    <svg width="5" height="9" viewBox="0 0 5 9" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd"
                                              d="M3.29289 1.24687C3.68342 0.856348 4.31658 0.856348 4.70711 1.24687C5.09763 1.6374 5.09763 2.27056 4.70711 2.66109L2.41421 4.95398L4.70711 7.24687C5.09763 7.6374 5.09763 8.27056 4.70711 8.66109C4.31658 9.05161 3.68342 9.05161 3.29289 8.66109L0.292893 5.66109C-0.0976311 5.27056 -0.0976311 4.6374 0.292893 4.24687L3.29289 1.24687Z"
                                              fill="#A2ABC5" fillOpacity="0.5"/>
                                    </svg>
                                    <span>Закрыть</span>
                                </button>}

                            <div className="battle-area__bgd">
                                <img src={bgd} alt="img"/>
                            </div>

                            {battleId === "create-battle" && gameStep === "start" &&
                                <BattleCreate connectToSocket={connectToSocket}
                                              setGameType={setGameType} gameType={gameType}/>}

                            <BattleArea setIsYouWin={setIsYouWin} setGameStep={setGameStep} gameType={gameType}
                                         blockArea={blockArea}/>

                            <BattleBottom gameType={gameType}/>
                        </div>

                    </BattleSingleStyled>
                </GameState.Provider>
            </GameSocket.Provider>
        </GameWS.Provider>
    )
}
