import React, {useEffect, useState} from 'react';
import PopupCloseCross from "./PopupCloseCross";
import PopupCloseBackground from "./PopupCloseBackground";
import {Link, redirect, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {fightRoomAdd, fightRoomChange} from "../../Redux/Reducers/reducerFightsRooms";
import {fightRoomData} from "../../Redux/Reducers/reducerFightRoom";
import {setSocket} from "../../Redux/Reducers/reducerFightsSocketCreate";
import {logDOM} from "@testing-library/react";
import {setDuel, setResponse} from "../../Redux/Reducers/reducerFightsResponse";
import {userInventoryAdd, userInventoryRemove} from "../../Redux/actions";
import {setSkin} from "../../Redux/Reducers/reducerFightsSkin";
import {getCookie} from "../../Hooks/GetCookies";
import GlobalLink from "../../Hooks/GlobalLink";
import Translate from "../../Hooks/Translate";
import {setNotice} from "../../Redux/Reducers/reducerNotice";
import {setSound} from "../../Redux/Reducers/reducerSound";
import TradeBanTimer from "../TradeBanTimer";
import {userBalanceRemoveCoins} from "../../Redux/Reducers/reducerUserBalance";

const PopupNewRoom = () => {

    const userInventory = useSelector(state => state.reducerUserInventory.list)
    const [listOnZone, setListOnZone] = useState([])
    const [summaryPrice, setSummaryPrice] = useState(0)
    const [coinsBid, setCoinsBid] = useState(0)
    const [isOpenSelect, setIsOpenSelect] = useState(false)
    const [sortBy, setSortBy] = useState('all')

    const userData = useSelector(state => state.reducerUserData.data)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const balance = useSelector(state => state.reducerUserBalance.balance)
    const settings = useSelector(state => state.reducerSettings.settings);
    const rooms = useSelector(state => state.reducerFightsRooms.rooms)

    useEffect(() => {
        setIsOpenSelect(false)
    }, [sortBy])

    function createGame(e) {
        e.preventDefault();

        if (balance < +coinsBid) {
            dispatch(setNotice("not_enough_money"))
        } else {

            if (rooms.some(item => item?.first_player?.user?.id === userData?.id || item?.second_player?.user?.id === userData?.id)) {
                dispatch(setNotice("already_have_a_game"))
                return
            }

            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post("https://" + GlobalLink() + '/api/fight/room/create', {
                "coins": coinsBid,
                "items": listOnZone.map(item => item.id),
            }).then(res => {

                if(res.data.message === 'not_enable_now') return dispatch((setNotice('not_enable_fight')));

                if(res.data.message === 'small_balance_for_commission') {
                    dispatch(setNotice("not_enough_money"))
                    return null;
                } else {

                    dispatch(userInventoryRemove(listOnZone))
                    dispatch(userBalanceRemoveCoins(coinsBid))

                    const sk = new WebSocket("wss://" + GlobalLink() + '/ws/api/fight/game/' + res.data.id + "/")
                    sk.onopen = function () {
                        sk.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                        dispatch(setSocket(sk))
                    }

                    sk.onmessage = e => {
                        let message = JSON.parse(JSON.parse(e.data))
                        dispatch(setResponse(message))

                        console.log('eee', e)

                        if (message.type === 'player_join_event' && message.data.length === 2) {
                            dispatch(setSound('sound15'))
                        }

                        switch (message.type) {
                            case 'player_join_event':
                                let skin = message.data[0].skin !== null ? message.data[0].skin?.gallery : settings.default_fight_skin?.gallery
                                dispatch(setSkin('me', skin))
                                !window.location.href.includes(res.data.id) && navigate("/fight/" + res.data.id)
                                break;
                        }
                    }

                }

            })

        }

    }

    let switcherLi = function (e) {

        let thisItem = e.target.closest('li')

        for (let i of document.querySelectorAll('.popup-new-room .popup-new-room__switcher li')) {
            i.classList.remove('li_active')
        }
        for (let i of document.querySelectorAll('.popup-new-room .popup__content-item')) {
            i.classList.remove('popup__content-item_active')
        }

        thisItem.classList.add('li_active')

        let arrayOfItems = []
        e.target.closest('.popup-new-room__switcher').querySelectorAll('li').forEach(item => {
            arrayOfItems.push(item)
        })
        let numberOfBlock = arrayOfItems.indexOf(e.target.closest('li'))

        document.querySelectorAll('.popup-new-room .popup__content-item')[numberOfBlock].classList.add('popup__content-item_active')

        if (document.querySelectorAll('.popup-new-room .popup__content-item')[numberOfBlock].classList.contains('popup__content-item-clothes')) {
            document.querySelector('.popup-new-room .popup__content_rht').style.display = 'block';
        } else {
            document.querySelector('.popup-new-room .popup__content_rht').style.display = 'none';
        }

    }

    function checkListLi(container) {

        if (container.querySelectorAll('.popup-new-room__zone ul li').length > 0 && container.querySelector('.popup-new-room__zone p')) {
            container.querySelector('.popup-new-room__zone p').style.display = 'none';
        } else {
            container.querySelector('.popup-new-room__zone p').style.display = 'block';
        }

    }

    function itemZoneDelete(container) {

        container.querySelectorAll('.popup-new-room__zone .li__delete').forEach((del) => {

            del.onclick = function () {
                this.closest('.popup').querySelector('.popup-new-room__list').append(this.closest('li'))
                checkListLi(container)
            }

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


    let closePopup = function (e) {

        setListOnZone([])
        setSummaryPrice(0)
        e.target.closest('.popup').querySelectorAll('.popup-new-room__list li').forEach(item => item.style.display = 'flex')

        document.querySelectorAll('.popup').forEach(function (pp) {
            pp.classList.remove('popup_active')
        })
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
        <div className="popup popup-new-room">

            <div className="popup__bgd" onClick={closePopup}/>

            <div className="popup__content">
                <div className="popup__content_lft">
                    <h2>
                        <Translate>new_room</Translate>
                    </h2>

                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="../images/cross.svg" alt="Close"/>
                    </div>

                    <div className="popup-new-room__switcher">
                        <ul>
                            <li className="li_active" onClick={switcherLi}>
                                <a href="#" onClick={e => e.preventDefault()}>
                                    <Translate>fight_on_coins</Translate>
                                </a>
                            </li>
                            <li onClick={switcherLi}>
                                <a href="#" onClick={e => e.preventDefault()}>
                                    <Translate>fight_on_skins</Translate>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="popup__content-item popup__content-item_active">
                        <form action="#" onSubmit={createGame}>
                            <div className="inputs">
                                <div className="inputs__item inputs__item-sum">
                                    <p>
                                        <Translate>summer_bid</Translate>
                                    </p>
                                    <div className="input">
                                        <img src="../images/header__coins.svg" alt="Ico"/>
                                        <input
                                            type="text"
                                            placeholder="0"
                                            value={coinsBid === 0 ? '' : coinsBid}
                                            onChange={e => setCoinsBid(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="inputs__item inputs__item-have">
                                    <p>
                                        <Translate>on_balance</Translate>
                                    </p>
                                    <div className="input">
                                        <img src="../images/header__coins.svg" alt="Ico"/>
                                        <span>
                                            {Object.keys(userData).length ? balance : 0}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            {
                                <button type={"submit"} disabled={!(coinsBid > 0)}>
                                    <Translate>create_game</Translate>
                                </button>
                            }
                        </form>
                    </div>
                    <form className="popup__content-item popup__content-item-clothes" onSubmit={createGame}>
                        <Link className={"link-to-page"} to={'/fight-waiting'}/>
                        <div className="popup-new-room__zone">
                            {
                                !listOnZone.length && <p><Translate>move_here_item_for_fight</Translate></p>
                            }
                            <ul>
                                {
                                    listOnZone.map(item =>
                                        <li key={item.id} className="popup-new-room__item popup-new-room__item_moved"
                                            onMouseDown={e => itemMove(e, item)}>

                                            <div
                                                className={"item__is-lock" + (item.trade_ban !== null ? " item__is-lock_true" : "")}>
                                                <img src="../images/lock-map.svg" width={'11'} alt=""/>

                                            </div>

                                            <div className="li__delete" onClick={e => itemZoneDelete(e, item)}>
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
                        <div className="inputs__item inputs__item-have inputs__item_skins">
                            <p>
                                <Translate>summary_bet_coins_for_fight</Translate>
                            </p>
                            <div className="input">
                                <img src="../images/header__coins.svg" alt="Ico"/>
                                <span>
                                    {summaryPrice}
                                </span>
                            </div>
                        </div>
                        {
                            !rooms?.some(item => item?.fight_players?.some(player => player.user.id === userData.id)) &&
                            <button type={"submit"} disabled={!listOnZone.length}>
                                <Translate>create_game</Translate>
                            </button>
                        }
                    </form>
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
                                ?.filter(item => sortBy !== "all" ? item.game === sortBy : item)
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

export default PopupNewRoom;