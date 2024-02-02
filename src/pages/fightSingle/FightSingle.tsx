import React, {createContext, useEffect, useRef, useState} from 'react'
import {FightSingleStyled} from "./FightSingle.styled";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router";
import {getApiLink} from "../../functions/getApiLink";
import getCookie from '../../functions/getCookie';
import {IUser} from "../../model";
import {FightSingleCenter} from "./components/FightSingleCenter";
import {FightSingleRHT} from "./components/FightSingleRHT";
import {FightSingleLFT} from "./components/FightSingleLFT";
import {setSound, setUserBalance} from "../../redux/toolkitSlice";
import {ConfettiFireworks} from "../../components/confetti/ConfettiFireworks";

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
    const dispatch = useDispatch()

    const userData: IUser = useSelector((state: any) => state.toolkit.user)
    const settings = useSelector((state: any) => state.toolkit.siteSettings)

    useEffect(() => {

        if (!Object.keys(userData).length) return;

        ws.current = new WebSocket(getApiLink("ws/api/fight/game/" + fightId + "/", true))

        ws.current.onopen = () => {
            ws.current.send(`{"type":"auth", "token":"${getCookie('access_token_rust')}"}`)
        }

        ws.current.onmessage = (e: any) => {
            const data = JSON.parse(JSON.parse(e.data))

            if (data.type === "defense" || data.type === "attack") return;

                    console.log(data)
            setGameData(data)
            setGameState(data.fight?.game_state ?? "waiting")

            if (data.fight?.game_state === "ended") {
                if (data?.fight?.winner?.user?.id === userData?.id) {
                    dispatch(setSound('sound13'))
                    setIsActiveConfetti(true)
                    setTimeout(() => {
                        setIsActiveConfetti(false)
                    }, 500)

                    if(data?.timer < 0) return;

                    dispatch(setUserBalance({
                        sum: true,
                        money: data?.fight?.winner?.coins * 2 - ((data?.fight?.winner?.coins * 2) * settings.fight_commission / 100)
                    }))
                } else {
                    dispatch(setSound('sound17'))
                }


                ws.current.close()
                setTimeout(() => {
                    // navigate("/")
                }, 5000)
            }

            if (data.type === "player_join_event" && userData?.id) {
                setMainPlayer(userData.id !== data.data[0]?.id ? data.data[0] : data.data[1])
                setOpponentPlayer(userData.id === data.data[0]?.id ? data.data[0] : data.data[1])

                if (data.data.length > 1) dispatch(setSound("sound15"))
            } else if (userData?.id) {
                setMainPlayer(userData.id === data.fight.first_player?.user.id ? data.fight?.first_player : data.fight?.second_player)
                setOpponentPlayer(userData.id !== data.fight.second_player?.user.id ? data.fight?.second_player : data.fight?.first_player)
            }
        }

    }, [ws])


    const [isActiveConfetti, setIsActiveConfetti] = useState(false)

    return (
        <WSFight.Provider value={[ws.current, gameData]}>
            <FightSingleStyled className="section-fight">

                {isActiveConfetti && <ConfettiFireworks timeToEnd={5}/>}

                <FightSingleLFT gameState={gameState} mainPlayer={mainPlayer} gameData={gameData}/>

                <FightSingleCenter gameState={gameState} gameData={gameData}/>

                <FightSingleRHT gameState={gameState} opponentPlayer={opponentPlayer} gameData={gameData}/>
            </FightSingleStyled>
        </WSFight.Provider>
    )
}
