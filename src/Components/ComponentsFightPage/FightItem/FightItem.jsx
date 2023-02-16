import React, {useEffect, useState} from 'react';
import PopupEntryCoins from "../../Popups/PopupEntryCoins";
import PopupEntryClothes from "../../Popups/PopupEntryClothes";
import {NavLink, useParams} from "react-router-dom";
import OpenPopup from "../../../Hooks/OpenPopup";
import {fightRoomAdd, fightRoomChange, fightRoomSet} from "../../../Redux/Reducers/reducerFightsRooms";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {logDOM} from "@testing-library/react";

const FightItem = ({ data }) => {

    const [showItems, setShowItems] = useState(false)
    const [price, setPrice] = useState(0)
    const [load, setLoad] = useState(true)
    const userData = useSelector(state => state.reducerUserData.data)
    const dispatch = useDispatch()

    useEffect(() => {
        load && data.fight_players[0].items.length > 0 ?
            data.fight_players[0].items.forEach(item => setPrice(prev => prev + item.price.value)) :
            setPrice(data.fight_players[0].coins)

        setLoad(false)
    }, [])


    return (
        <>
            {
                data.game_state !== 'ended' &&
                <div
                    className={
                        (data.game_state === "process" ? "list-games__item list-games__item_running" :
                            data.game_state === "ended" ? "list-games__item list-games__item_finish" :
                                "list-games__item") + (showItems ? " list-games__item_active" : "")
                    }>

                    {data.fight_players[0].items.length > 0 ?
                        <PopupEntryClothes data={data} price={price}/> :
                        <PopupEntryCoins data={data}/>}

                    {
                        data.fight_players[0].items.length > 0 ?
                            <div className="item__type item__type_clothes" onClick={() => setShowItems(prev => !prev)}>
                                <img src="../images/clothes.svg" alt="Ico"/>
                            </div> :
                            <div className="item__type item__type_coins">
                                <img src="../images/header__coins.svg" alt="Ico"/>
                            </div>
                    }

                    {
                        data.fight_players[0].items.length > 0 &&
                        <ul className="item__clothes">
                            {
                                data.fight_players[0].items.map(item =>
                                    <li key={item.id}>
                                        <div
                                            className={
                                                item.rarity.color === "3" ? "clothes__cool clothes__cool_red" :
                                                    item.rarity.color === "2" ? "clothes__cool clothes__cool_blue" :
                                                        item.rarity.color === "1" ? "clothes__cool clothes__cool_green" :
                                                            "clothes__cool clothes__cool_grey"}/>
                                        <img src={item.image} alt="Photo"/>
                                    </li>
                                )
                            }
                        </ul>
                    }

                    <NavLink to={userData.id !== data.fight_players[0].user.id ?  "/user/"+data.fight_players[0].user.id : "/profile"} className={data.winner != null && (data.winner.user.id === data.fight_players[0].user.id) ? "item__user" : "item__user item__user_looser"}>
                        <div className="user__photo">
                            <img src={data.fight_players[0].user.avatar} alt="Photo"/>
                        </div>
                        <div className="user__name">
                            {data.fight_players[0].user.name}
                        </div>
                    </NavLink>

                    {
                        <>
                            {
                                data.game_state === "waiting" ?
                                    <button className="item__button"
                                            onClick={e => !!Object.keys(userData).length && (data.fight_players[0].items.length > 0 ?
                                                OpenPopup('popup-entry-clothes-' + data.id) :
                                                OpenPopup('popup-entry-coins-' + data.id))}>
                                        {!!Object.keys(userData).length && <span>Играть за</span>}
                                        <img src="../images/header__coins.svg" alt="Ico"/>
                                        <span>{price}</span>
                                    </button> :
                                    data.game_state === "process" ?
                                        <button className="item__button">
                                            <img src="../images/header__coins.svg" alt="Ico"/>
                                            <span>{price}</span>
                                        </button> :

                                        <button className="item__button">
                                            <div className={
                                                data.winner != null && (data.winner.user.id === data.fight_players[1].user.id) ? "winner" : "looser"
                                            }>
                                                {
                                                    data.winner != null && (data.winner.user.id === data.fight_players[1].user.id) ?
                                                        <>
                                                            <img src="../images/header__coins.svg" alt="Ico"/>
                                                            <span>{
                                                                price
                                                            }</span>
                                                        </> :
                                                        <img src="../images/looser.svg" alt="Ico"/>
                                                }
                                            </div>
                                            <div className={
                                                data.winner != null && (data.winner.user.id === data.fight_players[1].user.id) ? "looser" : "winner"
                                            }>
                                                {
                                                    data.winner != null && (data.winner.user.id === data.fight_players[1].user.id) ?
                                                        <img src="../images/looser.svg" alt="Ico"/> :
                                                        <>
                                                            <img src="../images/header__coins.svg" alt="Ico"/>
                                                            <span>{
                                                                price
                                                            }</span>
                                                        </>
                                                }
                                            </div>
                                        </button>
                            }
                        </>
                    }

                    <div className={
                        data.status === "waiting" ? "item__user item__user_load" : "item__user" + (data.winner != null && (data.winner.user.id === data.fight_players[0].user.id) ? " item__user_looser" : "")
                    }>

                        {
                            data.fight_players[1] ?
                                <NavLink to={userData.id !== data.fight_players[1].user.id ? "/user/"+data.fight_players[1].user.id : "/profile"}>
                                    <div className="user__name">
                                        {data.fight_players[1].user.name}
                                    </div>
                                    <div className="user__photo">
                                        <img src={data.fight_players[1].user.avatar} alt="Photo"/>
                                    </div>
                                </NavLink> :
                                <div className="user__load">
                                    <div className="load">
                                        <div className="load__line">

                                        </div>
                                        <div className="load__line">

                                        </div>
                                        <div className="load__line">

                                        </div>
                                    </div>
                                </div>
                        }

                    </div>

                </div>
            }
        </>
    );
};

export default FightItem;