import React, {useEffect, useState} from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import FightItem from "../Components/ComponentsFightPage/FightItem/FightItem";
import Loader from "../Hooks/Loader";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {fightRoomAdd, fightRoomChange, fightRoomRemove, fightRoomSet} from "../Redux/Reducers/reducerFightsRooms";
import {setSkin} from "../Redux/Reducers/reducerFightsSkin";
import {userInventoryAdd} from "../Redux/actions";
import {useTranslation} from "react-i18next";
import GlobalLink from "../Hooks/GlobalLink";

let lobbysocket = new WebSocket("wss://" + GlobalLink() + `/ws/api/fight/lobby/`);
const FightPage = () => {

    const rooms = useSelector(state => state.reducerFightsRooms.rooms)
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        axios.get("https://" + GlobalLink() + '/api/fight/room/list').then(res => {
            dispatch(fightRoomSet(res.data.reverse()))
            setLoading(false)
        })


    }, [])

    lobbysocket.onmessage = (e) => {
        const message = JSON.parse(JSON.parse(e.data))

        switch (message.type) {
            case "new_room":
                dispatch(fightRoomAdd(message.data))
                break;
            case "remove_room":
                axios.get("https://" + GlobalLink() + '/api/fight/room/list').then(res => {
                    dispatch(fightRoomSet(res.data.reverse()))
                    dispatch(setSkin('me', {}))
                })
                break;
            case "change_room":
                dispatch(fightRoomChange(message.data))
                break;
        }
    }


    return (
        <section className="section-shop">

            <FightTop/>

            <div className="section-shop__list-games">
                {
                    !loading ? rooms?.map(item =>
                            <FightItem key={item.id} data={item}/>
                        ) :
                        <div className="waiting-for-list">
                            <Loader/>
                        </div>
                }
            </div>


        </section>
    );
};

export default FightPage;