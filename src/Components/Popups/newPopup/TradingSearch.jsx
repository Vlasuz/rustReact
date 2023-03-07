import React, {useEffect, useState} from 'react';
import Translate from "../../../Hooks/Translate";
import PopupCloseCross from "../PopupCloseCross";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {getCookie} from "../../../Hooks/GetCookies";
import GlobalLink from "../../../Hooks/GlobalLink";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import {storageListDelete, userInventoryAdd, userInventoryDelete, userInventoryRemove} from "../../../Redux/actions";
import {logger} from "../../../middleware/logger";

const TradingSearch = () => {

    const isPopup = useSelector(state => state.reducerOpenPopup)
    const dispatch = useDispatch()
    const isOpen = isPopup.popup === "popup-pull-search";
    const inventory = useSelector(state => state.reducerUserInventory.list)

    useEffect(() => {

        if(isOpen && isPopup?.props?.type === "withdraw"){

            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post('https://'+GlobalLink()+'/api/trade/create/withdraw/', inventory.filter(item => item.isCheck).map(item => item.id)).then(res => {

                const socket = new WebSocket("wss://"+GlobalLink()+`/ws/api/trade/withdraw/${res.data.id}/`)

                socket.onopen = () => {
                    socket.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                }
                socket.onmessage = (e) => {
                    const data = JSON.parse(JSON.parse(e.data))

                    if(e.data) {
                        dispatch(setOpenPopup("popup-pull", {socket, items: inventory.filter(item => item.isCheck).map(item => item), data}))
                    }

                    switch (data?.bot?.status) {
                        case "waiting":
                            dispatch(setOpenPopup("popup-trade-waiting", {response: data, type: "withdraw"}))
                            break;
                        case "success":
                            dispatch(setOpenPopup("popup-trade-good", {response: data, type: "withdraw"}))
                            dispatch(storageListDelete())
                            dispatch(userInventoryRemove(inventory.filter(item => item.isCheck)))
                            break;
                        case "error":
                            dispatch(setOpenPopup("popup-trade-error-cancel", {response: data?.bot, type: "withdraw"}))
                    }
                }
                socket.onerror = () => {
                    console.log('TRADE withdraw error')
                }
                socket.onclose = () => {
                    console.log('TRADE withdraw close')
                }

                dispatch(setOpenPopup("popup-pull", {type: "withdraw", socket, items: inventory.filter(item => item.isCheck).map(item => item)}))

            })

        } else if (isOpen && isPopup?.props?.type === "pay") {

            const socket = new WebSocket("wss://"+GlobalLink()+`/ws/api/trade/pay/${isPopup.props.data.id}/`)

            socket.onopen = () => {
                socket.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
            }

            socket.onmessage = (e) => {
                const data = JSON.parse(JSON.parse(e.data))

                if(e.data) {
                    dispatch(setOpenPopup("popup-pull", {data}))
                }

                console.log('data pay', data)

                switch (data?.status) {
                    case "waiting":
                        dispatch(setOpenPopup("popup-trade-waiting", {response: data, type: "pay"}))
                        break;
                    case "success":
                        dispatch(setOpenPopup("popup-trade-good", {response: data, type: "pay"}))
                        dispatch(userInventoryAdd(data?.items))
                        break;
                    case "error":
                        dispatch(setOpenPopup("popup-trade-error-cancel", {response: data, type: "pay"}))
                        break;
                }
            }
            socket.onerror = () => {
                console.log('TRADE pay error')
            }
            socket.onclose = () => {
                console.log('TRADE pay close')
            }
        }

    }, [isPopup])

    return (
        <div className="popup__content">
            <h2>
                <Translate>bots_status</Translate>
            </h2>
            <PopupCloseCross />
            <div className="popup-pull-search__text">
                <p>
                    <Translate>waiting_for_bots</Translate>
                </p>
                <div className="load">
                    <div className="load__line">

                    </div>
                    <div className="load__line">

                    </div>
                    <div className="load__line">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default TradingSearch;