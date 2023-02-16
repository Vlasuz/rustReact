import React, {useEffect} from 'react';
import FightTop from "../Components/ComponentsFightPage/FightTop";
import FightItem from "../Components/ComponentsFightPage/FightItem/FightItem";
import Loader from "../Hooks/Loader";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {fightRoomAdd, fightRoomChange, fightRoomRemove, fightRoomSet} from "../Redux/Reducers/reducerFightsRooms";
import {setSkin} from "../Redux/Reducers/reducerFightsSkin";
import {userInventoryAdd} from "../Redux/actions";
import {useTranslation} from "react-i18next";

let lobbysocket = new WebSocket(`wss://rust.onefut.net/ws/api/fight/lobby/`);
const FightPage = (props) => {

    const rooms = useSelector(state => state.reducerFightsRooms.rooms)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get('https://rust.onefut.net/api/fight/room/list').then(res => {
            dispatch(fightRoomSet(res.data.reverse()))
        })
    }, [])

    lobbysocket.onmessage = (e) => {
        const message = JSON.parse(JSON.parse(e.data))

        switch (message.type) {
            case "new_room":
                dispatch(fightRoomAdd(message.data))
                break;
            case "remove_room":
                axios.get('https://rust.onefut.net/api/fight/room/list').then(res => {
                    dispatch(fightRoomSet(res.data.reverse()))
                    dispatch(setSkin('me', {}))
                    dispatch(userInventoryAdd(message.data.fight_players[0].items))
                })
                break;
            case "change_room":
                dispatch(fightRoomChange(message.data))
                break;
        }
    }


    return (
        <section className="section-shop">

            <FightTop states={props.states}/>

            <div className="section-shop__list-games">
                {
                    !!rooms.length && rooms.map(item =>
                        <FightItem key={item.id} data={item}/>
                    )
                }
            </div>


        </section>
    );
};

export default FightPage;