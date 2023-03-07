import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chatAddMessages, chatAddOnline, chatDeleteMessages} from "../../../Redux/Reducers/reducerChat";
import {Trans, useTranslation} from "react-i18next";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import Translate from "../../../Hooks/Translate";
import MaxLengthForChat from "../../../Hooks/MaxLengthForChat";
import {logger} from "../../../middleware/logger";
import {getCookie} from "../../../Hooks/GetCookies";

const RightsChatTextarea = ({websocket}) => {

    const [textMessage, setTextMessage] = useState('')
    const auth = useSelector(state => state.reducerAuth.auth)
    const dispatch = useDispatch()
    const [error, setError] = useState(false)

    const scrollToBottom = () => {
        let chatBlock = document.querySelector('.section-right__chatting')
        chatBlock.scrollTo({
            top: chatBlock.scrollHeight,
            behavior: "smooth"
        });
    }


    let smilesOpen = function () {
        document.querySelector('.section-right__smiles').classList.toggle('section-right__smiles_active')
    }

    useEffect(() => {
        scrollToBottom()
    }, [textMessage])


    const sendMessage = (e) => {
        e.preventDefault();

        if (auth) {
            websocket.send(JSON.stringify({"type": "auth", "token": `${getCookie('access_token')}`}));
            !!textMessage.length && websocket.send(JSON.stringify({
                "type": "send_message",
                "data": {"message": textMessage}
            }));
            setTextMessage('')
            setError(false)
        } else {
            dispatch(setNotice("auth_for_messages"))
        }

    }

    const handleChange = (e) => {
        setTextMessage(e.target.value)

        setError(e.target.value.length >= 150)
    }

    return (
        <form className="section-right__bottom" onSubmit={sendMessage}>
            <label className="textarea">
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
                <span className={"maxl" + (error ? " maxl_error" : "")}>{textMessage.length}/{MaxLengthForChat()}</span>
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