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
import Loader from "../Hooks/Loader";
import {logger} from "../middleware/logger";

const FightRoom = (props) => {

    // const params = useParams();
    //
    // const dispatch = useDispatch()
    // const rooms = useSelector(state => state.reducerFightsRooms.rooms)
    // const response = useSelector(state => state.reducerFightsResponse.response)
    // const session = useSelector(state => state.reducerSession.session)
    // const settings = useSelector(state => state.reducerSettings.settings);
    //
    // const ws = useRef(null);
    //
    // const [roomData, setRoomData] = useState({})
    // const [isMyGame, setIsMyGame] = useState(false)
    // const [localResponse, setLocalResponse] = useState({})
    //
    // useEffect(() => {
    //
    //     if (!Object.keys(response).length) {
    //         axios.get("https://" + GlobalLink() + '/api/fight/room/list').then(res => {
    //
    //             dispatch(fightRoomSet(res.data.reverse()))
    //             ws.current = new WebSocket("wss://" + GlobalLink() + "/ws/api/fight/game/" + params.id + "/");
    //
    //             ws.current.onopen = () => {
    //                 ws.current.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
    //                 dispatch(setSocket(ws.current))
    //             }
    //
    //             ws.current.onclose = () => console.log("ws closed");
    //             ws.current.onerror = () => console.log("ws error");
    //         })
    //     }
    //
    // }, [ws])
    //
    // useEffect(() => {
    //
    //     if(ws.current){
    //         ws.current.onmessage = (e) => {
    //             let message = JSON.parse(JSON.parse(e.data))
    //             setLocalResponse(message)
    //             dispatch(setResponse(message))
    //
    //             switch(message.type){
    //                 case 'player_join_event':
    //
    //                     let skin1 = message.data[0].skin !== null ? message.data[0].skin?.gallery : settings.default_fight_skin?.gallery
    //                     let skin2 = message?.data[1]?.skin !== null ? message?.data[1]?.skin?.gallery : settings.default_fight_skin?.gallery
    //
    //                     let skin = message.data[0].id === session.id ? skin1 : skin2
    //                     dispatch(setSkin('me', skin))
    //                     break;
    //             }
    //
    //         }
    //     }
    //
    //     setIsMyGame(rooms?.filter(item => item.id === params.id)[0]?.fight_players?.some(item => item.user.id === session.id))
    //     setRoomData(rooms?.filter(item => item.id === params.id))
    //
    // }, [session, rooms, ws])

    // !!!============================================================!!!

    const params = useParams();
    const dispatch = useDispatch();
    const rooms = useSelector(state => state.reducerFightsRooms.rooms)
    const session = useSelector(state => state.reducerSession.session)
    const response = useSelector(state => state.reducerFightsResponse.response)
    const settings = useSelector(state => state.reducerSettings.settings);
    const [isMyGame, setIsMyGame] = useState(false)
    const [roomData, setRoomData] = useState(rooms?.filter(item => item.id === params.id))


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

                console.log("Onmessage", message)

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
        !isMyGame && setIsMyGame(roomData[0]?.fight_players?.some(item => item.user.id === session.id))
    }, [response, session])


    console.log(roomData)
    console.log("response", response)
    console.log("session", session)

    return (
        <div>


            {/*{*/}
            {/*    roomData.length && isMyGame ?*/}
            {/*        <>*/}



                        {(response.type === "player_join_event" && response.data.length === 1) || response.type === "waiting" ?
                            <FightPageWaiting roomData={roomData[0]}/> :
                            response?.fight?.game_state === "defense" || response?.fight?.game_state === "attack" ||
                            response?.type === "defense" || response?.type === "attack" ?
                                <FightPageRunning roomData={roomData[0]} states={props.states}/> :
                                response?.fight?.game_state === "duel" || response?.fight?.game_state === "ended" ?
                                    <FightPageFinish roomData={roomData[0]} states={props.states}/> :
                                    <>
                                        <section className={"loader-on-fight"}>
                                            <Loader></Loader>
                                        </section>
                                    </>
                        }




            {/*        </>*/}
            {/*        :*/}
            {/*        <NotFound/>*/}
            {/*}*/}


        </div>
    );
};

export default FightRoom;