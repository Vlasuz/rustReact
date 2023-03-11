import React, {useEffect, useRef, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import PopupEntryClothes from "../../Popups/PopupEntryClothes";
import PopupEntryCoins from "../../Popups/PopupEntryCoins";
import {NavLink, useNavigate} from "react-router-dom";
import OpenPopup from "../../../Hooks/OpenPopup";
import GlobalLink from "../../../Hooks/GlobalLink";
import {getCookie} from "../../../Hooks/GetCookies";
import {setSocket} from "../../../Redux/Reducers/reducerFightsSocketCreate";
import {setResponse} from "../../../Redux/Reducers/reducerFightsResponse";
import axios from "axios";
import Translate from "../../../Hooks/Translate";
import {setSkin} from "../../../Redux/Reducers/reducerFightsSkin";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";

const FightItem = ({data}) => {

    const [showItems, setShowItems] = useState(false)
    const [price, setPrice] = useState(0)
    const [load, setLoad] = useState(true)
    const settings = useSelector(state => state.reducerSettings.settings);
    const userData = useSelector(state => state.reducerUserData.data)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        load && data.first_player?.items.length > 0 ?
            data.first_player?.items.forEach(item => setPrice(prev => prev + item.price.value)) :
            setPrice(data.first_player?.coins)

        setLoad(false)
    }, [])

    const handleJoin = () => {
        if(!!Object.keys(userData).length){
            (data.first_player?.items.length > 0 ?
                OpenPopup('popup-entry-clothes-' + data.id) :
                OpenPopup('popup-entry-coins-' + data.id))
        } else {
            dispatch(setNotice("auth_for_action"))
        }
    }

    const handleEntry = (id) => {
        navigate('/fight/' + id)
    }

    return (
        <>
            {
                data?.game_state !== 'ended' &&
                <div
                    className={
                        (data?.game_state === "process" ? "list-games__item list-games__item_running" :
                            data?.game_state === "ended" ? "list-games__item list-games__item_finish" :
                                "list-games__item") + (showItems ? " list-games__item_active" : "")
                    }>

                    {data.first_player?.items.length > 0 ?
                        <PopupEntryClothes data={data} price={price}/> :
                        <PopupEntryCoins data={data}/>}

                    {
                        data.first_player?.items.length > 0 ?
                            <div className="item__type item__type_clothes" onClick={() => setShowItems(prev => !prev)}>
                                <img src="../images/clothes.svg" alt="Ico"/>
                            </div> :
                            <div className="item__type item__type_coins">
                                <img src="../images/header__coins.svg" alt="Ico"/>
                            </div>
                    }

                    {
                        data.first_player?.items.length > 0 &&
                        <ul className="item__clothes">
                            {
                                data.first_player?.items.map(item =>
                                    <li key={item.id}>
                                        <div className={"clothes__cool"} style={{background: item.rarity.color}} />
                                        <img src={item.image} alt="Photo"/>
                                    </li>
                                )
                            }
                        </ul>
                    }

                    <NavLink
                        to={userData.id !== data.first_player?.user.id ? "/user/" + data.first_player?.user.id : "/profile"}
                        className={data.winner != null && (data.winner.user.id === data.first_player?.user.id) ? "item__user" : "item__user item__user_looser"}>
                        <div className="user__photo">
                            <img src={data.first_player?.user.avatar} alt="Photo"/>
                        </div>
                        <div className="user__name">
                            {data.first_player?.user.name}
                        </div>
                    </NavLink>

                    {!!Object.keys(userData).length ? <>
                            {
                                !((data?.first_player?.user?.id === userData.id) || (data?.second_player?.user.id === userData.id)) ? <>
                                        {
                                            data.game_state === "waiting" ?
                                                <button className="item__button" onClick={handleJoin}>
                                                    {!!Object.keys(userData).length && <span>
                                                        <Translate>play_for_coins</Translate>
                                                    </span>}
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
                                                            data.winner != null && (data.winner.user.id === data.second_player?.user.id) ? "winner" : "looser"
                                                        }>
                                                            {
                                                                data.winner != null && (data.winner.user.id === data.second_player?.user.id) ?
                                                                    <>
                                                                        <img src="../images/header__coins.svg" alt="Ico"/>
                                                                        <span>{price}</span>
                                                                    </> :
                                                                    <img src="../images/looser.svg" alt="Ico"/>
                                                            }
                                                        </div>
                                                        <div className={
                                                            data.winner != null && (data.winner.user.id === data.second_player?.user.id) ? "looser" : "winner"
                                                        }>
                                                            {
                                                                data.winner != null && (data.winner.user.id === data.second_player?.user.id) ?
                                                                    <img src="../images/looser.svg" alt="Ico"/> :
                                                                    <>
                                                                        <img src="../images/header__coins.svg" alt="Ico"/>
                                                                        <span>{price}</span>
                                                                    </>
                                                            }
                                                        </div>
                                                    </button>
                                        }
                                    </> :
                                    <button className={"item__button"} onClick={e => handleEntry(data.id)}>
                                        <span>
                                            <Translate>entry</Translate>
                                        </span>
                                    </button>

                            }
                        </> :
                        <button className="item__button" onClick={handleJoin}>
                            <img src="../images/header__coins.svg" alt="Ico"/>
                            <span>{price}</span>
                        </button>
                    }

                    <div className={
                        data.status === "waiting" ? "item__user item__user_load" : "item__user" + (data.winner != null && (data.winner.user.id === data.first_player?.user.id) ? " item__user_looser" : "")
                    }>

                        {
                            data.second_player ?
                                <NavLink
                                    to={userData.id !== data.second_player?.user.id ? "/user/" + data.second_player?.user.id : "/profile"}>
                                    <div className="user__name">
                                        {data.second_player?.user.name}
                                    </div>
                                    <div className="user__photo">
                                        <img src={data.second_player?.user.avatar} alt="Photo"/>
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