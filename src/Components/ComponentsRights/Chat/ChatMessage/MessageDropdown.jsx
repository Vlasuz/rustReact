import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chatDeleteMessages} from "../../../../Redux/Reducers/reducerChat";
import {getCookie} from "../../../../Hooks/GetCookies";
import Translate from "../../../../Hooks/Translate";
import {actionBan} from "../../../../Redux/Reducers/reducerUserChat";
import {logger} from "../../../../middleware/logger";
import CloseModal from "../../../../Hooks/CloseModal";

const MessageDropdown = ({openDropdown, messageData, websocket}) => {

    const userData = useSelector(state => state.reducerUserData.data)
    const dispatch = useDispatch()

    const mm = useSelector(state => state.reducerUserChat.muted_users)
    const [bannedUser, setBannedUser] = useState(messageData.user.ban_chat_permanent)

    const handleHide = (e) => {
        dispatch(chatDeleteMessages(messageData.id))
    }
    const handleMuted = (e) => {
        websocket.send(JSON.stringify({"type": "mute_user", "data": {"user": messageData.user.id}}));
    }
    const handleBlocked = (e) => {
        websocket.send(JSON.stringify({"type": "block_user", "data": {"user": messageData.user.id}}));
    }
    const handleBanned = (e) => {
        websocket.send(JSON.stringify({"type": "ban_user", "data": {"user": messageData.user.id}}));

        setBannedUser(prev => !prev)
    }
    const deleteMessage = (e) => {
        websocket.send(JSON.stringify({"type": "delete_message", "data": {"message": messageData.id}}));
    }

    const handleUnbanned = (e) => {
        websocket.send(JSON.stringify({"type": "unban_user", "data": {"user": messageData.user.id}}));

        setBannedUser(prev => !prev)
    }
    const handleUnmuted = (e) => {
        websocket.send(JSON.stringify({"type": "unmute_user", "data": {"user": messageData.user.id}}));
    }

    return (
        <ul className={openDropdown ? "item__dropdown item__dropdown_active" : "item__dropdown"}>
            <li>
                <button onClick={handleHide}>
                    <Translate>chat_hide</Translate>
                </button>
            </li>

            {
                !!Object.keys(userData).length && <>
                    {
                        messageData?.user?.id !== userData.id && <li>
                            {!mm?.some(item => item.id === messageData?.user?.id) ?
                                <button onClick={handleMuted}>
                                    <Translate>chat_muted</Translate>
                                </button> :
                                <button onClick={handleUnmuted}>
                                    <Translate>chat_unmuted</Translate>
                                </button>
                            }
                        </li>

                    }
                </>
            }

            {
                !!Object.keys(userData).length && <>
                    {
                        messageData?.user?.id !== userData.id && (userData.role === 'admin' || userData.role === 'moder') ?
                            <li>
                                <button onClick={handleBlocked}>
                                    <Translate>chat_block</Translate>
                                </button>
                            </li> : ""
                    }
                </>
            }

            {
                !!Object.keys(userData).length && <>
                    {
                        (messageData?.user?.id !== userData.id && (userData.role === 'admin' || userData.role === 'moder')) &&
                        <li>
                            {
                                bannedUser ?
                                    <button onClick={handleUnbanned}>
                                        <Translate>chat_unban</Translate>
                                    </button> :
                                    <button onClick={handleBanned}>
                                        <Translate>chat_ban</Translate>
                                    </button>
                            }
                        </li>
                    }
                </>
            }

            {
                !!Object.keys(userData).length && <>
                    {
                        userData.id === messageData.user.id || userData.role === 'admin' || userData.role === 'moder' ?
                            <li className="li__delete">
                                <button onClick={deleteMessage}>
                                    <Translate>delete</Translate>
                                </button>
                            </li> : ""
                    }
                </>
            }

        </ul>
    );
};

export default MessageDropdown;