import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import {Link, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {setSocket} from "../../Redux/Reducers/reducerFightsSocketCreate";
import {setResponse} from "../../Redux/Reducers/reducerFightsResponse";
import {userInventoryRemove} from "../../Redux/actions";
import {logDOM} from "@testing-library/react";
import GlobalLink from "../../Hooks/GlobalLink";
import {getCookie} from "../../Hooks/GetCookies";
import Translate from "../../Hooks/Translate";
import {setNotice} from "../../Redux/Reducers/reducerNotice";
import TradeBanTimer from "../TradeBanTimer";
import {userBalanceRemoveCoins} from "../../Redux/Reducers/reducerUserBalance";

const PopupEntryClothes = (props) => {

    const userInventory = useSelector(state => state.reducerUserInventory.list)
    const [summaryPrice, setSummaryPrice] = useState(0)
    const [listOnZone, setListOnZone] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userData = useSelector(state => state.reducerUserData.data)
    const rooms = useSelector(state => state.reducerFightsRooms.rooms)

    const [sortBy, setSortBy] = useState('all')
    const [isOpenSelect, setIsOpenSelect] = useState(false)

    useEffect(() => {
        setIsOpenSelect(false)
    }, [sortBy])

    let changeSort = (e) => {

        e.target.closest('.select').querySelector('.select__head span').innerText = e.target.textContent
        e.target.closest('.select').classList.toggle('select_open')

        document.querySelectorAll('.section-history__item').forEach(item => {
            item.style.position = 'static'
            item.style.zIndex = '1'
            item.classList.remove('section-history__item_deleted')
        })
        // props.setChangeHistoryList({...props.changeHistoryList, switcher_sort: e.target.getAttribute('data-value')})
    }

    let closePopup = function (e) {

        setListOnZone([])
        setSummaryPrice(0)
        e.target.closest('.popup').querySelectorAll('.popup-new-room__list li').forEach(item => item.style.display = 'flex')

        document.querySelectorAll('.popup').forEach(function (pp) {
            pp.classList.remove('popup_active')
        })
    }

    const submitToGame = (e) => {
        e.preventDefault();

        if(rooms.some(item => item?.first_player?.user?.id === userData?.id || item?.second_player?.user?.id === userData?.id)){
            dispatch(setNotice("already_have_a_game"))
            return
        }

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://" + GlobalLink() + `/api/fight/room/join?game_id=${props.data.id}`, {
            "items": listOnZone.map(item => item.id)
        }).then(res => {

            if(res.data.message === 'not_enable_now') return dispatch((setNotice('not_enable_fight')));

            dispatch(userInventoryRemove(listOnZone))

            const sk = new WebSocket("wss://" + GlobalLink() + '/ws/api/fight/game/' + props.data.id + "/")
            sk.onopen = function () {
                sk.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                dispatch(setSocket(sk))
            }
            sk.onmessage = e => {
                let message = JSON.parse(JSON.parse(e.data))

                dispatch(setResponse(message))

            }

            navigate("/fight/" + res.data.id)
        })

    }

    const itemMove = function (event, item) {

        let postItem = event.target.closest('.popup-new-room__item')
        let postItemCopy = postItem.cloneNode(true)
        let currentDroppable = null;

        let shiftX = event.clientX - postItem.getBoundingClientRect().left;
        let shiftY = event.clientY - postItem.getBoundingClientRect().top;


        function onMouseMove(event) {

            postItem.style.display = 'none';
            document.querySelector('body').append(postItemCopy)

            postItemCopy.style.position = 'absolute';
            postItemCopy.style.zIndex = 999;
            moveAt(event.clientX, event.clientY)

            postItemCopy.style.display = 'none';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            postItemCopy.style.display = 'flex';

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.popup-new-room__zone')


            function movedNotInZone() {

                document.onmouseup = function (e) {

                    document.removeEventListener('mousemove', onMouseMove);
                    document.onmouseup = null;

                    postItem.style.display = 'flex';
                    postItemCopy.remove()

                    // ПОМЕНЯТЬ НЕ НА ФЛЕКС, А НА УБАЛЕНИЕ ИЗ СПИСКА В ЗОНЕ

                    // setListOnZone(prev => [...prev.id !== item.id])

                    setListOnZone(prev => prev.filter(itemAll => itemAll.id !== item.id))

                    if (listOnZone.some(itemAll => itemAll.id === item.id)) {
                        setSummaryPrice(prev => prev - item.price.value)
                    }
                }

            }


            if (!currentDroppable) movedNotInZone()

            if (currentDroppable !== droppableBelow) {

                if (currentDroppable) {
                    document.querySelector('.popup-new-room__zone').style.background = 'transparent';
                }

                currentDroppable = droppableBelow;

                if (currentDroppable) {
                    droppableBelow.style.background = '#26293b';
                    document.onmouseup = function (e) {

                        document.removeEventListener('mousemove', onMouseMove);
                        document.onmouseup = null;

                        if (!e.target.closest('.popup-new-room__item_moved')) {
                            postItemCopy.remove()
                            setListOnZone(prev => [...prev, item])
                            setSummaryPrice(prev => prev + item.price.value)
                        } else {
                            postItemCopy.remove()
                            postItem.style.display = 'flex';
                        }

                    }
                }

            }

        }

        function moveAt(pageX, pageY) {

            let coodX = pageX - shiftX;
            let coodY = pageY - shiftY;

            postItemCopy.style.left = coodX + 'px';
            postItemCopy.style.top = coodY + 'px';

        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function (e) {

            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            if (!e.target.closest('.popup-new-room__item_moved')) {

                postItem.style.display = 'none';
                setListOnZone(prev => [...prev, item])
                setSummaryPrice(prev => prev + item.price.value)

            } else {
                postItem.style.display = 'flex';
                // document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"
                // document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"
                // document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"
                // document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"
                // document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"
                // document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"

                // setListOnZone(prev => [...prev.id !== item.id])

                setListOnZone(prev => prev.filter(itemAll => itemAll.id !== item.id))

                if (listOnZone.some(itemAll => itemAll.id === item.id)) {
                    setSummaryPrice(prev => prev - item.price.value)
                }
            }

        }

        postItemCopy.ondragstart = function () {
            return false;
        };

    }


    var weekday = new Array(7);
    weekday[0] = "Mon";
    weekday[1] = "Tues";
    weekday[2] = "Wed";
    weekday[3] = "Thurs";
    weekday[4] = "Fri";
    weekday[5] = "Sat";
    weekday[6] = "Sun";
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    const setTrueTime = (data) => {
        const tradeBan = data.trade_ban;

        const day = tradeBan?.substr(0, 2);
        const month = monthNames[+tradeBan?.substr(3, 2) - 1];
        const year = tradeBan?.substr(6, 4);
        const time = tradeBan?.slice(tradeBan?.indexOf(' ') + 1);

        const getDayNum = new Date(`${month} ${day}, ${year} ${time}`).getDay()
        const weekdayString = weekday[+getDayNum - 1];


        return new Date(`${weekdayString}, ${day} ${month} ${year} ${time}`)
    }

    return (
        <div className={"popup popup-entry-clothes popup-entry-clothes-" + props.data.id}>

            <div className="popup__bgd" onClick={closePopup}/>

            <div className="popup__content">
                <div className="popup__content_lft">
                    <h2>
                        <Translate>new_room</Translate>
                    </h2>

                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="../images/cross.svg" alt="Close"/>
                    </div>

                    <div className="popup__content-item popup__content-item_active popup__content-item-clothes">
                        <div className="popup-new-room__zone">
                            {
                                !listOnZone.length && <p>
                                    <Translate>move_here_item_for_fight</Translate>
                                </p>
                            }
                            <ul>
                                {
                                    listOnZone.map(item =>
                                        <li key={item.id} className="popup-new-room__item popup-new-room__item_moved"
                                            onMouseDown={e => itemMove(e, item)}>

                                            <div className={"item__is-lock" + (item.trade_ban !== null ? " item__is-lock_true" : "")}>
                                                <img src="../images/lock-map.svg" width={'11'} alt=""/>

                                            </div>

                                            <div className="li__delete">
                                                <img src="../images/cross.svg" alt="Close"/>
                                            </div>
                                            <div className="item__check">
                                                <img src="../images/green-check-sq.svg" alt="Check"/>
                                            </div>
                                            <div className="item__photo">
                                                <img src={item.image} alt="Photo"/>
                                            </div>
                                            <div className="item__price">
                                                <img src="../images/header__coins.svg" alt="Coin"/>
                                                <span>
                                                    {item.cost}
                                                </span>
                                            </div>
                                        </li>
                                    )
                                }
                            </ul>
                        </div>
                        <form onSubmit={submitToGame}>
                            <div className="inputs">
                                <div className="inputs__item inputs__item-sum">
                                    <p>
                                        <Translate>summer_bid</Translate>
                                    </p>
                                    <div className="input">
                                        <img src="../images/header__coins.svg" alt="Ico"/>
                                        <span className="input__sum">
                                            {summaryPrice}
                                        </span>
                                    </div>
                                </div>
                                <div className="inputs__item inputs__item-opp">
                                    <p>
                                        <Translate>opponent</Translate>
                                    </p>
                                    <div className="input">
                                        <div className="input__photo">
                                            <img src={props.data.first_player.user.avatar} alt="User"/>
                                        </div>
                                        <div className="input__coins">
                                            <img src="../images/header__coins.svg" alt="Ico"/>
                                            <span>
                                                {props.price}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button disabled={summaryPrice < props.price}>
                                <Translate>place_a_bet</Translate>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="popup__content_rht">
                    <h2>
                        <Translate>inventory_site</Translate>
                    </h2>

                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="../images/cross.svg" alt="Close"/>
                    </div>

                    <div className="popup-new-room__sort">
                        <span>
                            <Translate>sorts</Translate>
                        </span>
                        <div className={"select" + (isOpenSelect ? " select_open" : "")}>
                            <div className="select__head" onClick={e => setIsOpenSelect(prev => !prev)}>
                                <span>
                                    {
                                        sortBy === "730" ? "CSGO" : sortBy === "252490" ? "RUST" : <Translate>all_games</Translate>
                                    }
                                </span>
                            </div>
                            <div className="select__body">
                                <div onClick={e => setSortBy('all')} className="select__item">
                                    <Translate>all_games</Translate>
                                </div>
                                <div onClick={e => setSortBy('730')} className="select__item">
                                    CSGO
                                </div>
                                <div onClick={e => setSortBy('252490')} className="select__item">
                                    RUST
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="popup-new-room__list">
                        {
                            userInventory
                                .filter(item => sortBy !== "all" ? item.game === sortBy : item)
                                ?.filter((item, index) => {
                                    return !listOnZone.some(listItem => {
                                        return listItem.id === item.id
                                    })
                                })
                                .map(item =>
                                    <li key={item.id} data-id={item.id} className="popup-new-room__item"
                                        onMouseDown={e => itemMove(e, item)}>

                                        <div
                                            className={"item__is-lock" + (item.trade_ban !== null ? " item__is-lock_true" : "")}>
                                            <img src="../images/lock-map.svg" width={'11'} alt=""/>
                                            <p>
                                                {item.trade_ban !== null ? <TradeBanTimer time={setTrueTime(item)}/> : ""}
                                            </p>
                                        </div>

                                        <div className="li__delete">
                                            <img src="../images/cross.svg" alt="Close"/>
                                        </div>
                                        <div className="item__check">
                                            <img src="../images/green-check-sq.svg" alt="Check"/>
                                        </div>
                                        <div className="item__photo">
                                            <img src={item.image} alt="Photo"/>
                                        </div>
                                        <div className="item__price">
                                            <img src="../images/header__coins.svg" alt="Coin"/>
                                            <span>
                                            {item.price.value}
                                        </span>
                                        </div>
                                    </li>
                                )
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PopupEntryClothes;