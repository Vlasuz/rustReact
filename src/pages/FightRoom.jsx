import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FightPageWaiting from "../Components/ComponentsFightPage/FightArea/FightPageWaiting";
import FightPageRunning from "../Components/ComponentsFightPage/FightArea/FightPageRunning";
import FightPageFinish from "../Components/ComponentsFightPage/FightArea/FightPageFinish";
import {useNavigate, useParams} from "react-router-dom";
import {getCookie} from "../Hooks/GetCookies";
import {reducerFightsSocketCreate, setSocket} from "../Redux/Reducers/reducerFightsSocketCreate";
import {setResponse} from "../Redux/Reducers/reducerFightsResponse";
import {setSkin} from "../Redux/Reducers/reducerFightsSkin";
import axios from "axios";
import {fightRoomSet} from "../Redux/Reducers/reducerFightsRooms";
import GlobalLink from "../Hooks/GlobalLink";
import NotFound from "./NotFound";
import Loader from "../Hooks/Loader";
import {logger} from "../middleware/logger";
import {userBalanceAddCoins, userBalanceSetCoins} from "../Redux/Reducers/reducerUserBalance";
import {userInventoryAdd} from "../Redux/actions";
import {setSound} from "../Redux/Reducers/reducerSound";
import "react-jquery-plugin";

const FightRoom = (props) => {

    const params = useParams();
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.reducerFightsRooms.rooms)
    const session = useSelector(state => state.reducerSession.session)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const navigate = useNavigate()
    const settings = useSelector(state => state.reducerSettings.settings);
    const [isMyGame, setIsMyGame] = useState(false)
    const [roomData, setRoomData] = useState(rooms?.filter(item => item.id === params.id))
    const [isSwitch, setIsSwitch] = useState("")


    useEffect(() => {
        setRoomData(rooms?.filter(item => item.id === params.id))
    }, [rooms])

    useEffect(() => {
        if (!Object.keys(response).length) {
            const socket = new WebSocket("wss://" + GlobalLink() + '/ws/api/fight/game/' + params.id + "/")
            socket.onopen = function () {
                socket.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                dispatch(setSocket(socket))
            }
            socket.onmessage = (e) => {
                let message = JSON.parse(JSON.parse(e.data))
                let skin = message?.data && message?.data[0]?.skin !== null ? message?.data[0]?.skin?.gallery : settings.default_fight_skin?.gallery

                if (message.type === 'player_join_event' && message.data.length === 2) {
                    dispatch(setSound('sound15'))
                }

                skin && dispatch(setSkin('me', skin))
                dispatch(setResponse(message))

                if (message.data && message.data.length === 2) {
                    axios.get("https://" + GlobalLink() + '/api/fight/room/list').then(res => {
                        setRoomData(res.data.filter(item => item.id === params.id))
                    })
                }
            }
        }

        !roomData.length && axios.get("https://" + GlobalLink() + '/api/fight/room/list').then(res => {
            setRoomData(res.data.filter(item => item.id === params.id))
        })
    }, [])

    useEffect(() => {
        !isMyGame && setIsMyGame(roomData[0]?.first_player.user.id === session.id || roomData[0]?.second_player.user.id === session.id)
    }, [response, session])


    useEffect(() => {

        if ((response.type === "player_join_event" && response.data.length === 1) || response.type === "waiting") {

            document.querySelector(".section-fight")?.classList.add('section-fight_hide')

            setTimeout(() => {
                document.querySelector(".section-fight")?.classList.remove('section-fight_hide')
                setIsSwitch(<FightPageWaiting roomData={roomData[0]}/>)
                setTimeout(() => {
                    document.querySelector(".section-fight")?.classList.add('section-fight_active')
                }, 100)
            }, 200)

        } else if ((response.type === "player_join_event" && response.data.length === 2) || response.type === "waiting") {

            setIsSwitch(
                <section className={"loader-on-fight"}>
                    <Loader/>
                </section>
            )

        } else if (response?.fight?.game_state === "defense" || response?.fight?.game_state === "attack" || response?.type === "defense" || response?.type === "attack") {

            if ((response.type === "player_join_event") || response.type === "waiting") {
                document.querySelector(".section-fight")?.classList.add('section-fight_hide')
            }

            setTimeout(() => {
                document.querySelector(".section-fight")?.classList.remove('section-fight_hide')
                setIsSwitch(<FightPageRunning roomData={roomData[0]}/>)
                setTimeout(() => {
                    document.querySelector(".section-fight")?.classList.add('section-fight_active')
                }, 100)
            }, 200)

        } else if (response?.fight?.winner !== null && response?.fight?.winner !== undefined) {

            if (response?.fight?.game_state !== "ended" || response?.fight?.game_state !== "defense" || response?.fight?.game_state !== "attack" || response?.type !== "defense" || response?.type !== "attack") {
                document.querySelector(".section-fight")?.classList.add('section-fight_hide')
            }

            setTimeout(() => {
                document.querySelector(".section-fight")?.classList.remove('section-fight_hide')
                setIsSwitch(<FightPageFinish roomData={roomData[0]}/>)
                setTimeout(() => {
                    document.querySelector(".section-fight")?.classList.add('section-fight_active')
                    countCoins(response)
                }, 500)
            }, 200)

        } else if (response?.fight?.game_state === "duel" || response?.fight?.game_state === "ended") {

            if (response?.fight?.game_state !== "ended" || response?.fight?.game_state !== "defense" || response?.fight?.game_state !== "attack" || response?.type !== "defense" || response?.type !== "attack") {
                document.querySelector(".section-fight")?.classList.add('section-fight_hide')
            }

            setTimeout(() => {
                document.querySelector(".section-fight")?.classList.remove('section-fight_hide')
                setIsSwitch(<FightPageFinish roomData={roomData[0]}/>)
                setTimeout(() => {
                    document.querySelector(".section-fight")?.classList.add('section-fight_active')
                }, 100)
            }, 200)

        }


    }, [response])


    const countCoins = (player) => {

        let minusCoinsCount = +document.querySelector('.resources__coins_minus span')?.innerText;
        let plusCoinsCount = +document.querySelector('.resources__coins_plus span')?.innerText;
        let itemsWinnerPerson = player?.fight?.first_player?.user?.id !== session?.id ? player?.fight?.first_player?.items : player?.fight?.second_player?.items

        let coinsCounts = setInterval(function () {

            if (minusCoinsCount === -1) {
                clearInterval(coinsCounts)

                axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
                axios.get("https://" + GlobalLink() + '/api/user/info/').then(res => {
                    dispatch(userBalanceSetCoins(res.data.balance))
                })

            } else if ((document.querySelector('.resources__coins_minus span') && document.querySelector('.resources__coins_plus span')) && (!isNaN(minusCoinsCount) && !isNaN(plusCoinsCount))) {

                document.querySelector('.resources__coins_minus span').innerText = +minusCoinsCount--;
                document.querySelector('.resources__coins_plus span').innerText = +plusCoinsCount++;

                if (!itemsWinnerPerson.length && response?.fight?.winner.user.id === session?.id) {
                    dispatch(userBalanceAddCoins(1))
                }

            }

        }, 2)

    }

    return (
        <div>

            {
                isMyGame ? isSwitch :
                    <NotFound/>
            }


        </div>
    );
};

export default FightRoom;