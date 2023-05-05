import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FightPageWaiting from "../Components/ComponentsFightPage/FightArea/FightPageWaiting";
import FightPageRunning from "../Components/ComponentsFightPage/FightArea/FightPageRunning";
import FightPageFinish from "../Components/ComponentsFightPage/FightArea/FightPageFinish";
import {useParams} from "react-router-dom";
import {getCookie} from "../Hooks/GetCookies";
import {reducerFightsSocketCreate, setSocket} from "../Redux/Reducers/reducerFightsSocketCreate";
import {setResponse} from "../Redux/Reducers/reducerFightsResponse";
import {setSkin} from "../Redux/Reducers/reducerFightsSkin";
import axios from "axios";
import {fightRoomSet} from "../Redux/Reducers/reducerFightsRooms";
import GlobalLink from "../Hooks/GlobalLink";
import NotFound from "./NotFound";

const FightRoom = (props) => {

    const params = useParams();

    const dispatch = useDispatch()
    const rooms = useSelector(state => state.reducerFightsRooms.rooms)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const session = useSelector(state => state.reducerSession.session)
    const settings = useSelector(state => state.reducerSettings.settings);

    const ws = useRef(null);

    const [roomData, setRoomData] = useState({})
    const [isMyGame, setIsMyGame] = useState(false)
    const [localResponse, setLocalResponse] = useState({})

    useEffect(() => {

        if (!Object.keys(response).length) {
            axios.get("https://" + GlobalLink() + '/api/fight/room/list').then(res => {

                dispatch(fightRoomSet(res.data.reverse()))
                ws.current = new WebSocket("wss://" + GlobalLink() + "/ws/api/fight/game/" + params.id + "/");

                ws.current.onopen = () => {
                    ws.current.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                    dispatch(setSocket(ws.current))
                }

            })
        }

    }, [ws])

    useEffect(() => {

        if(ws.current){
            ws.current.onmessage = (e) => {
                let message = JSON.parse(JSON.parse(e.data))
                setLocalResponse(message)
                dispatch(setResponse(message))

                switch(message.type){
                    case 'player_join_event':

                        let skin1 = message.data[0].skin !== null ? message.data[0].skin?.gallery : settings.default_fight_skin?.gallery
                        let skin2 = message?.data[1]?.skin !== null ? message?.data[1]?.skin?.gallery : settings.default_fight_skin?.gallery

                        let skin = message.data[0].id === session.id ? skin1 : skin2
                        dispatch(setSkin('me', skin))
                        break;
                }

            }
        }

        setIsMyGame(rooms?.filter(item => item.id === params.id)[0]?.fight_players?.some(item => item.user.id === session.id))
        setRoomData(rooms?.filter(item => item.id === params.id))

    }, [session, rooms, ws])

    return (
        <div>

            {
                (isMyGame && !!Object.keys(response).length) || (isMyGame && !!Object.keys(localResponse).length) ? <>
                        {
                            (response.type === 'game_waiting' || response.type === 'player_join_event' && response.data.length === 1) ||
                            (localResponse.type === 'game_waiting' || localResponse.type === 'player_join_event' && localResponse.data.length === 1) ?
                                <FightPageWaiting roomData={roomData[0]}/> :
                                (response.type === 'duel' || response.type === 'player_exit_event') ||
                                (localResponse.type === 'duel' || localResponse.type === 'player_exit_event') ?
                                    <FightPageFinish roomData={roomData[0]} states={props.states}/> :
                                    <FightPageRunning roomData={roomData[0]} states={props.states}/>
                        }
                    </> :
                    <NotFound/>

            }


        </div>
    );
};

export default FightRoom;