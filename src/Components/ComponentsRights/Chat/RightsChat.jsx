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
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";
import {getCookie} from "../../../Hooks/GetCookies";
import {
    actionBan,
    actionBlock,
    actionMutedAdd,
    actionMutedRemove,
    actionMutedSet
} from "../../../Redux/Reducers/reducerUserChat";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";


const websocket = new WebSocket("wss://"+GlobalLink()+`/ws/api/chat/`)
websocket.onopen = () => {
    websocket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));
}
const RightsChat = () => {

    const messages = useSelector(state => state.reducerChat.messages)
    const dispatch = useDispatch()
    const session = useSelector(state => state.reducerSession.session)
    const userChat = useSelector(state => state.reducerUserChat)

    useEffect(() => {
        !messages.length && axios.get("https://"+GlobalLink()+'/api/chat/get/?amount=100').then(res => {
            dispatch(chatAddMessages(res.data.reverse()))
        })
    }, [])

    useEffect(() => {
        dispatch(actionBan(session?.ban_chat_permanent))
        dispatch(actionBlock(!!session?.ban_chat_date?.length))
        dispatch(actionMutedSet(session?.muted_users))

        let chatBlock = document.querySelector('.section-right__chatting')
        setTimeout(() => {
            chatBlock.scrollTo({
                top: chatBlock.scrollHeight,
                behavior: "smooth"
            });
        }, 10)
    }, [session])


    websocket.onmessage = (e) => {
        let data_value = JSON.parse(JSON.parse(e.data))

        switch (data_value.type) {
            case 'change_online':
                dispatch(chatAddOnline(JSON.parse(JSON.parse(JSON.parse(e.data)).data).online))
                break;
            case 'send_message':
                let chatBlock = document.querySelector('.section-right__chatting')
                dispatch(chatAddMessages([data_value.data]))
                setTimeout(() => {
                    chatBlock.scrollTo({
                        top: chatBlock.scrollHeight,
                        left: 0,
                        behavior: "smooth"
                    });
                }, 10)
                break;
            case 'delete_message':
                dispatch(chatDeleteMessages(JSON.parse(JSON.parse(e.data)).data.id))
                break;
            case 'mute_user':
                dispatch(actionMutedAdd(data_value.data))
                break;
            case 'unmute_user':
                dispatch(actionMutedRemove(data_value.data))
                break;
            case 'ban_user':
                if(data_value.data.id === session.id){
                    dispatch(setNotice("you_are_banned"))
                    dispatch(actionBan(true))
                }
                break;
            case 'unban_user':
                if(data_value.data.id === session.id) dispatch(actionBan(false))
                if(data_value.data.id === session.id) dispatch(actionBlock(false))
                break;
            case 'block_user':
                if(data_value.data.id === session.id){
                    dispatch(setNotice("you_are_banned"))
                    dispatch(actionBlock(true))
                }
                break;
        }
    }


    return (
        <div className="section-right__chatting">
            <div className="chatting__block">

                {
                    messages.length > 0 && messages.map(mes =>
                        <RightsChatMessage key={mes.id} data={mes} websocket={websocket}/>
                    )
                }

            </div>
            <RightsChatSmiles websocket={websocket} userChat={userChat}/>
            <RightsChatRules/>
            <RightsChatResources/>

            <RightsChatTextarea websocket={websocket} userChat={userChat}/>

        </div>
    );
};

export default RightsChat;