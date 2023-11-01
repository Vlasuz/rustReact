import React, {createContext, useEffect, useRef, useState} from 'react'
import {Translate} from '../../components/translate/Translate'
import {FightSingleTop} from "./components/FightSingleTop";
import {FightSingleStyled} from "./FightSingle.styled";

import userPhoto from './../../assets/images/user.jpeg'
import clothesIcon from './../../assets/images/clothes.svg'
import coins from './../../assets/images/header__coins.svg'
import weaponIcon from './../../assets/images/weapon.png'
import personSilhouette from './../../assets/images/persone-siluete.png'
import personNNN from './../../assets/images/persone-nnn.png'
import {Loading} from "../../components/loading/Loading";
import {LoadingStyled} from "../../components/loading/loading.styled";
import {useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {getApiLink} from "../../functions/getApiLink";
import getCookie from '../../functions/getCookie';
import axios from "axios";
import {IFightItem, IUser} from "../../model";
import {FightSingleCenter} from "./components/FightSingleCenter";
import {FightSingleRHT} from "./components/FightSingleRHT";
import {FightSingleLFT} from "./components/FightSingleLFT";

interface IFightSingleProps {

}

export const WSFight: any = createContext(null)

export const FightSingle: React.FC<IFightSingleProps> = () => {

    const {fightId} = useParams()
    const ws: any = useRef(null)
    const [mainPlayer, setMainPlayer] = useState({})
    const [opponentPlayer, setOpponentPlayer] = useState({})

    const [gameData, setGameData] = useState({})
    const [gameState, setGameState] = useState("waiting")
    const navigate = useNavigate()

    const userData: IUser = useSelector((state: any) => state.toolkit.user)

    useEffect(() => {

        if (!Object.keys(userData).length) return;

        ws.current = new WebSocket(getApiLink("ws/api/fight/game/" + fightId + "/", true))

        ws.current.onopen = () => {
            ws.current.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
        }

        ws.current.onmessage = (e: any) => {
            const data = JSON.parse(JSON.parse(e.data))

            console.log(data)

            if(data.type === "defense" || data.type === "attack") return;

            setGameData(data)
            setGameState(data.fight?.game_state ?? "waiting")

            if (data.fight?.game_state === "ended") {
                ws.current.close()
                setTimeout(() => {
                    // navigate("/")
                }, 5000)
            }

            if (data.type === "player_join_event" && userData?.id) {
                setMainPlayer(userData.id !== data.data[0]?.id ? data.data[0] : data.data[1])
                setOpponentPlayer(userData.id === data.data[0]?.id ? data.data[0] : data.data[1])
            } else if (userData?.id) {
                setMainPlayer(userData.id === data.fight.first_player?.user.id ? data.fight?.first_player : data.fight?.second_player)
                setOpponentPlayer(userData.id !== data.fight.second_player?.user.id ? data.fight?.second_player : data.fight?.first_player)
            }
        }

    }, [ws, userData])

    return (
        <WSFight.Provider value={ws.current}>
            <FightSingleStyled className="section-fight">
                <FightSingleLFT gameState={gameState} mainPlayer={mainPlayer} gameData={gameData}/>

                <FightSingleCenter gameState={gameState} gameData={gameData}/>

                <FightSingleRHT gameState={gameState} opponentPlayer={opponentPlayer} gameData={gameData}/>
            </FightSingleStyled>
        </WSFight.Provider>
    )
}
