import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import FightPageWaiting from "../Components/ComponentsFightPage/FightArea/FightPageWaiting";
import FightPageRunning from "../Components/ComponentsFightPage/FightArea/FightPageRunning";
import FightPageFinish from "../Components/ComponentsFightPage/FightArea/FightPageFinish";
import {useParams} from "react-router-dom";
import axios from "axios";
import {fightRoomSet} from "../Redux/Reducers/reducerFightsRooms";
import {logDOM} from "@testing-library/react";
import {setSocket} from "../Redux/Reducers/reducerFightsSocketCreate";
import {setResponse} from "../Redux/Reducers/reducerFightsResponse";
import {setSkin} from "../Redux/Reducers/reducerFightsSkin";
import {getCookie} from "../Hooks/GetCookies";

const FightRoom = (props) => {

    const params = useParams();
    const rooms = useSelector(state => state.reducerFightsRooms.rooms)
    const roomData = rooms.filter(item => item.id === params.id)
    const response = useSelector(state => state.reducerFightsResponse.response)

    return (
        <div>

            {
                (!!roomData.length && !!Object.keys(response).length) && <>
                    {
                        (response.type === 'player_join_event' && response.data.length === 1) ? <FightPageWaiting roomData={roomData[0]}/> :
                            (response.type === 'duel' || response.type === 'player_exit_event') ? <FightPageFinish roomData={roomData[0]} states={props.states}/> :
                                <FightPageRunning roomData={roomData[0]} states={props.states}/>
                    }
                </>
            }


        </div>
    );
};

export default FightRoom;