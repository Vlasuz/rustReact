import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chatAddMessages, chatAddOnline, chatDeleteMessages} from "../../../Redux/Reducers/reducerChat";
import {Trans, useTranslation} from "react-i18next";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import Translate from "../../../Hooks/Translate";
import MaxLengthForChat from "../../../Hooks/MaxLengthForChat";
import {logger} from "../../../middleware/logger";
import {getCookie} from "../../../Hooks/GetCookies";

const RightsChatTextarea = ({ websocket, userChat }) => {

    const [textMessage, setTextMessage] = useState('')
    const auth = useSelector(state => state.reducerAuth.auth)
    const dispatch = useDispatch()
    const [error, setError] = useState(false)
    const [emptyInput, setEmptyInput] = useState(false)

    let smilesOpen = function () {
        document.querySelector('.section-right__smiles').classList.toggle('section-right__smiles_active')
    }

    const sendMessage = (e) => {
        e.preventDefault();

        if (auth && !(userChat.ban || userChat.block)) {
            websocket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));

            if(!!textMessage.length) {
                setEmptyInput(false)
                websocket.send(JSON.stringify({
                    "type": "send_message",
                    "data": {"message": textMessage}
                }));
            } else {
                setEmptyInput(true)
            }
            setTextMessage('')
            setError(false)
        } else if(userChat.ban || userChat.block) {
            dispatch(setNotice("you_are_banned"))
        } else {
            dispatch(setNotice("auth_for_messages"))
        }

    }

    const handleChange = (e) => {
        setTextMessage(e.target.value)
        setEmptyInput(false)
        setError(e.target.value.length >= 150)
    }

    return (
        <form className="section-right__bottom" onSubmit={sendMessage}>
            <label className={"textarea" + (emptyInput ? " textarea_empty" : "")}>
                {
                    !textMessage.length &&
                    <span className="placeholder-message">
                        <Translate>chat_message_text</Translate>
                    </span>
                }
                <input
                    maxLength={MaxLengthForChat()}
                    onChange={handleChange}
                    value={textMessage}
                />
                <span className={"maxl" + (error || emptyInput ? " maxl_error" : "")}>{textMessage.length}/{MaxLengthForChat()}</span>
            </label>
            <div
                className="smiles"
                onClick={smilesOpen}>
                <img src="../images/smile-1.png" alt="Smile"/>
            </div>
            <button className="send">
                <img src="../images/send-message.svg" alt="Ico"/>
            </button>
        </form>
    );
};
export default RightsChatTextarea;