import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import axios from "axios";
import {getCookie} from "../../../Hooks/GetCookies";
import GlobalLink from "../../../Hooks/GlobalLink";
import OpenPopup from "../../../Hooks/OpenPopup";
import {useDispatch, useSelector} from "react-redux";
import {reducerOpenPopup, setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import Translate from "../../../Hooks/Translate";
import {logger} from "../../../middleware/logger";
import {storageListDelete, userInventoryRemove} from "../../../Redux/actions";

const PopupOutputSearch = () => {

    const isPopup = useSelector(state => state.reducerOpenPopup)
    const dispatch = useDispatch()
    const isOpen = isPopup.popup === "popup-pull-search";
    const inventory = useSelector(state => state.reducerUserInventory.list)

    const [websocket, setWebsocket] = useState({})

    useEffect(() => {

        if(isOpen && isPopup?.props?.type === "withdraw"){

            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post('https://'+GlobalLink()+'/api/trade/create/withdraw/', inventory.filter(item => item.isCheck).map(item => item.id)).then(res => {

                const socket = new WebSocket("wss://"+GlobalLink()+`/ws/api/trade/withdraw/${res.data.id}/`)

                socket.onopen = () => {
                    socket.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                    setWebsocket(socket)
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
                            // dispatch(userInventoryAdd(isPopup.props.items))
                            break;
                    }
                }
                socket.onerror = () => console.log('error')
                socket.onclose = () => console.log('close')

                dispatch(setOpenPopup("popup-pull", {type: "withdraw", socket, items: inventory.filter(item => item.isCheck).map(item => item)}))

            })

        } else if (isOpen && isPopup?.props?.type === "pay") {

            const socket = new WebSocket("wss://"+GlobalLink()+`/ws/api/trade/pay/${isPopup.props.data.id}/`)

            socket.onopen = () => {
                socket.send(`{"type":"auth", "token":"${getCookie('access_token')}"}`)
                setWebsocket(socket)
            }
            socket.onmessage = (e) => {
                const data = JSON.parse(JSON.parse(e.data))

                if(e.data) {
                    dispatch(setOpenPopup("popup-pull", {data}))
                }

                switch (data?.status) {
                    case "waiting":
                        dispatch(setOpenPopup("popup-trade-waiting", {response: data, type: "pay"}))
                        break;
                    case "success":
                        dispatch(setOpenPopup("popup-trade-good", {response: data, type: "pay"}))
                        // dispatch(userInventoryAdd(isPopup.props.items))
                        break;
                    case "error":
                        dispatch(setOpenPopup("popup-trade-error-cancel", {response: data, type: "pay"}))
                        // dispatch(userInventoryAdd(isPopup.props.items))
                        break;
                }
            }
            socket.onerror = () => console.log('error')
            socket.onclose = () => console.log('close')
        }

    }, [isPopup])

    const handleClosePopup = () => {
        dispatch(setOpenPopup(""))
        websocket.onclose = () => console.log('Close')
    }

    return (
        <div className={"popup popup-pull-search" + (isOpen ? " popup_active" : "")}>
            <div className="popup__bgd" onClick={handleClosePopup} />
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
        </div>
    );
};

export default PopupOutputSearch;