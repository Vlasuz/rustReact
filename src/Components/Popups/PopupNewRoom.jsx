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

const PopupNewRoom = () => {

    const userInventory = useSelector(state => state.reducerUserInventory.list)
    const [listOnZone, setListOnZone] = useState([])
    const [summaryPrice, setSummaryPrice] = useState(0)
    const [coinsBid, setCoinsBid] = useState(0)
    const [isOpenSelect, setIsOpenSelect] = useState(false)
    const [sortBy, setSortBy] = useState('')

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

        if(rooms.some(item => item?.first_player?.user?.id === userData?.id || item?.second_player?.user?.id === userData?.id)){
            dispatch(setNotice("already_have_a_game"))
            return
        }

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+'/api/fight/room/create', {
            "coins": coinsBid,
            "items": listOnZone.map(item => item.id),
        }).then(res => {

            dispatch(userInventoryRemove(listOnZone))

            console.log("listOnZone", listOnZone)

            const sk = new WebSocket("wss://"+GlobalLink()+'/ws/api/fight/game/' + res.data.id + "/")
            sk.onopen = function () {
                sk.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                dispatch(setSocket(sk))
            }
            sk.onmessage = e => {
                let message = JSON.parse(JSON.parse(e.data))
                dispatch(setResponse(message))

                console.log('New room', message)

                switch(message.type){
                    case 'player_join_event':
                        let skin = message.data[0].skin !== null ? message.data[0].skin?.gallery : settings.default_fight_skin?.gallery
                        dispatch(setSkin('me', skin))
                        !window.location.href.includes(res.data.id) && navigate("/fight/"+res.data.id)
                        break;
                }
            }

        })
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
                    document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"
                    setListOnZone(prev => prev.filter(itemAll => itemAll.id !== item.id))

                    if(listOnZone.some(itemAll => itemAll.id === item.id)){
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

                        if(!e.target.closest('.popup-new-room__item_moved')){
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
                document.querySelector(`.popup-new-room__item[data-id="${item.id}"]`).style.display = "flex"
                setListOnZone(prev => prev.filter(itemAll => itemAll.id !== item.id))

                if(listOnZone.some(itemAll => itemAll.id === item.id)){
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


    return (
        <div className="popup popup-new-room">

            <div className="popup__bgd" onClick={closePopup} />

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
                                        <li key={item.id} className="popup-new-room__item popup-new-room__item_moved" onMouseDown={e => itemMove(e, item)}>

                                            <div className={"clothes__cool"} style={{background: item.rarity.color}} />
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
                                {
                                    sortBy === 'price' ?
                                        <span><Translate>sort_by_price</Translate></span> :
                                        <span><Translate>sort_by_rarity</Translate></span>
                                }
                            </div>
                            <div className="select__body">
                                <div data-select={'price'} onClick={e => setSortBy('price')} className="select__item">
                                    <Translate>sort_by_price</Translate>
                                </div>
                                <div data-select={'rarity'} onClick={e => setSortBy('rarity')} className="select__item">
                                    <Translate>sort_by_rarity</Translate>
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="popup-new-room__list">


                        {
                            userInventory
                                ?.sort((a, b) => {
                                    if(sortBy === 'price') {
                                        return a.price.value - b.price.value
                                    } else if(sortBy === 'rarity') {
                                        return a.rarity.color - b.rarity.color
                                    }
                                })
                                .map(item =>
                                <li key={item.id} data-id={item.id} className="popup-new-room__item" onMouseDown={e => itemMove(e, item)}>
                                    <div className={"clothes__cool"} style={{background: item.rarity.color}} />
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