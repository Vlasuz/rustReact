import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {chatAddMessages, chatAddOnline, chatDeleteMessages} from "../../../Redux/Reducers/reducerChat";
import {Trans, useTranslation} from "react-i18next";

const RightsChatTextarea = ({websocket, setIsNoticeActive}) => {
    const {t} = useTranslation();


    const [textMessage, setTextMessage] = useState('')
    const auth = useSelector(state => state.reducerAuth.auth)

    const scrollToBottom = () => {
        let chatBlock = document.querySelector('.section-right__chatting')
        chatBlock.scrollTo({
            top: chatBlock.scrollHeight,
            behavior: "smooth"
        });
    }


    let smilesOpen = function () {
        if (auth) {
            document.querySelector('.section-right__smiles').classList.toggle('section-right__smiles_active')
        } else {
            setIsNoticeActive(true)
            setTimeout(() => {
                setIsNoticeActive(false)
            }, 1000)
        }
    }

    useEffect(() => {
        scrollToBottom()
    }, [textMessage])


    const sendMessage = (e) => {
        e.preventDefault();

        if (auth) {
            !!textMessage.length && websocket.send(JSON.stringify({
                "type": "send_message",
                "data": {"message": textMessage}
            }));
            setTextMessage('')
        } else {
            setIsNoticeActive(true)
            setTimeout(() => {
                setIsNoticeActive(false)
            }, 1000)
        }

    }

    return (
        <form className="section-right__bottom" onSubmit={sendMessage}>
            <label className="textarea">
                {
                    !textMessage.length &&
                    <span className="placeholder-message">
                        <Trans t={t}>chat_message_text</Trans>
                    </span>
                }
                <input
                    maxLength="150"
                    onChange={e => setTextMessage(e.target.value)}
                    value={textMessage}
                    disabled={!auth}
                />
                <span className="maxl">{textMessage.length}/150</span>
            </label>
            <div
                className="smiles"
                onClick={smilesOpen}
            >
                <img src="../images/smile-1.png" alt="Smile"/>
            </div>
            <button className="send">
                <img src="../images/send-message.svg" alt="Ico"/>
            </button>
        </form>
    );
};
export default RightsChatTextarea;