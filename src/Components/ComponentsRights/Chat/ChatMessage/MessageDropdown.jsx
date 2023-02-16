import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chatDeleteMessages} from "../../../../Redux/Reducers/reducerChat";

const MessageDropdown = ({openDropdown, messageData}) => {

    let showNotice = function () {
        document.querySelector('.section-right__notice .notice__block-chat').classList.add('notice__item_active')

        setTimeout(function () {
            document.querySelector('.section-right__notice .notice__block-chat').classList.remove('notice__item_active')
        }, 2000)
    }

    const userData = useSelector(state => state.reducerUserData.data)
    const dispatch = useDispatch()

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }


    const handleHide = (e) => {
        dispatch(chatDeleteMessages(messageData.id))
    }
    const handleMuted = (e) => {
        const socket = new WebSocket(`wss://rust.onefut.net/ws/api/chat/`)
        // console.log(messageData.user.id)
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));
            socket.send(JSON.stringify({"type": "mute_user", "data": {"user": messageData.user.id}}));
        })
    }
    const handleBlocked = (e) => {
        const socket = new WebSocket(`wss://rust.onefut.net/ws/api/chat/`)
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));
            socket.send(JSON.stringify({"type": "block_user", "data": {"user": messageData.user.id}}));
        })
    }
    const handleBanned = (e) => {
        const socket = new WebSocket(`wss://rust.onefut.net/ws/api/chat/`)
        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));
            socket.send(JSON.stringify({"type": "ban_user", "data": {"user": messageData.user.id}}));
        })
    }
    const deleteMessage = (e) => {
        const socket = new WebSocket(`wss://rust.onefut.net/ws/api/chat/`)

        socket.addEventListener('open', () => {
            socket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));
            socket.send(JSON.stringify({"type": "delete_message", "data": {"message": messageData.id}}));
        })
    }

    return (
        <ul className={openDropdown ? "item__dropdown item__dropdown_active" : "item__dropdown"}>
            <li>
                <button onClick={handleHide}>Скрыть сообщение</button>
            </li>

            {
                !!Object.keys(userData).length && <>
                    {
                        messageData.user.id !== userData.id ?
                            <li>
                                <button onClick={handleMuted}>Заглушить</button>
                            </li> : ""
                    }
                </>
            }

            {
                !!Object.keys(userData).length && <>
                    {
                        messageData.user.id !== userData.id && (userData.role === 'admin' || userData.role) === 'moder' ?
                            <li>
                                <button onClick={handleBlocked}>Блокировать 1ч</button>
                            </li> : ""
                    }
                </>
            }

            {
                !!Object.keys(userData).length && <>
                    {
                        messageData.user.id !== userData.id && (userData.role === 'admin' || userData.role) === 'moder' ?
                            <li>
                                <button onClick={handleBanned}>Бан чата</button>
                            </li> : ""
                    }
                </>
            }

            {
                !!Object.keys(userData).length && <>
                    {
                        userData.id === messageData.user.id || userData.role === 'admin' || userData.role === 'moder' ?
                            <li className="li__delete">
                                <button onClick={deleteMessage}>Удалить</button>
                            </li> : ""
                    }
                </>
            }

        </ul>
    );
};

export default MessageDropdown;