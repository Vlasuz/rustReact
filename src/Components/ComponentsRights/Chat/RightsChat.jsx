import React, {useCallback, useEffect, useRef} from 'react';
import RightsChatMessage from "./RightsChatMessage";
import RightsChatSmiles from "./RightsChatSmiles";
import RightsChatTextarea from "./RightsChatTextarea";
import RightsChatRules from "./RightsChatRules";
import {useState} from "react";
import RightsChatResources from "./RightsChatResources";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {chatAddMessages, chatAddOnline, chatDeleteMessages} from "../../../Redux/Reducers/reducerChat";
import {setSession} from "../../../Redux/Reducers/reducerSession";
import {logDOM} from "@testing-library/react";
import useWebSocket from "react-use-websocket";


const websocket = new WebSocket(`wss://rust.onefut.net/ws/api/chat/`)
websocket.onopen = () => {
}
const RightsChat = () => {


    const messages = useSelector(state => state.reducerChat.messages)
    const dispatch = useDispatch()
    const userData = useSelector(state => state.reducerUserData.data)
    const [mutedUser, setMutedUser] = useState({})
    const [bannedUser, setBannedUser] = useState(false)
    const [blockedUser, setBlockedUser] = useState(false)
    const [isNoticeActive, setIsNoticeActive] = useState(false)


    useEffect(() => {

        !messages.length && axios.get('https://rust.onefut.net/api/chat/get/?amount=100').then(res => {
            dispatch(chatAddMessages(res.data.reverse()))
        })

    }, [])


    useEffect(() => {
        let chatBlock = document.querySelector('.section-right__chatting')
        chatBlock.scrollTo({
            top: chatBlock.scrollHeight,
            behavior: "smooth"
        });
    }, [messages])

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


    useEffect(() => {
        if (Object.keys(userData).length) {
            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post('https://rust.onefut.net/api/auth/session/').then(res => {
                dispatch(setSession(res.data))
                websocket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));

                setBannedUser(res.data.ban_chat_permanent)
                setBlockedUser(res.data.ban_chat_date?.length)
            })
        }
    }, [userData])


    websocket.onmessage = (e) => {
        let data_value = JSON.parse(JSON.parse(e.data))

        switch (data_value.type) {
            case 'change_online':
                dispatch(chatAddOnline(JSON.parse(JSON.parse(JSON.parse(e.data)).data).online))
                break;
            case 'send_message':
                dispatch(chatAddMessages([data_value.data]))
                break;
            case 'delete_message':
                dispatch(chatDeleteMessages(JSON.parse(JSON.parse(e.data)).data.id))
                break;
            case 'mute_user':
                setMutedUser(data_value.data)
                break;
            case 'ban_user':
                setBannedUser(data_value.data.id === userData.id)
                break;
            case 'block_user':
                setBlockedUser(data_value.data.id === userData.id)
                break;
        }
    }


    return (
        <div className="section-right__chatting">
            <div className="chatting__block">

                {
                    messages.length > 0 && messages.map(mes =>
                        <RightsChatMessage key={mes.id} data={mes} mutedUser={mutedUser}/>
                    )
                }

            </div>
            <RightsChatSmiles websocket={websocket}/>
            <RightsChatRules/>
            <RightsChatResources/>

            {
                bannedUser || blockedUser ?
                    <div className="section-right__notice">
                        <div
                            className={"notice__item notice__block-chat notice__item_active"}>
                            <span>Доступ к чату заблокирован </span>
                            <img src="../images/status-error.svg" alt="Ico"/>
                        </div>
                    </div>
                    : <RightsChatTextarea setIsNoticeActive={setIsNoticeActive} websocket={websocket}/>
            }

            <div className={"section-right__notice" + (isNoticeActive ? " section-right__notice_active" : "")}>
                <div className={"notice__item notice__add-cart" + (isNoticeActive ? " notice__item_active" : "")}><span>Для общения, автооризуйтесь</span>
                    <img src="../images/status-error.svg" alt="Check"/>
                </div>
            </div>
        </div>
    );
};

export default RightsChat;