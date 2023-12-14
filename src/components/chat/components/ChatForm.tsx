import React, { useContext, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {addChatItem, setNotice} from '../../../redux/toolkitSlice'

import ArrToSend from './../../../assets/images/send-message.svg'
import smile from './../../../assets/images/smile-1.png'
import { useWsChat } from '../../../hooks/wsChat'
import { ChatWsContext } from '../../../context/chatWsContext'
import getCookies from "../../../functions/getCookie";

interface IChatFormProps {
    setIsOpenSmiles: any
}

export const ChatForm: React.FC<IChatFormProps> = ({ setIsOpenSmiles }) => {

    const dispatch = useDispatch()
    const [messageValue, setMessageValue] = useState('')
    const ws: any = useContext(ChatWsContext);

    const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (!messageValue.length) return;

        if(!getCookies('access_token_rust')) {
            return dispatch(setNotice('forChattingAuth'))
        }

        if (ws && ws.current && ws.current.readyState === WebSocket.OPEN) {
            ws.current.send(JSON.stringify({
                "type": "send_message",
                "data": {
                    "message": messageValue
                }
            }));
        }

        setMessageValue('')

        setTimeout(() => {
            document.querySelector('.section-right__item')?.scrollTo(0, 9999999)
        }, 100)
    }

    const checkValueLength = (messageValue.length >= 150 ? " _red" : "")

    return (
        <form onSubmit={handleSendMessage} className="section-right__bottom" action="#">
            <label className="textarea">
                <input maxLength={150} value={messageValue} onChange={event => setMessageValue(event.target.value)} placeholder="Сообщение" />
                <span className={"maxl" + checkValueLength}>{messageValue.length}/150</span>
            </label>
            <div className="smiles" onClick={_ => setIsOpenSmiles((prev: any) => !prev)}>
                <img src={smile} alt="Smile" />
            </div>
            <button type='submit' className="send">
                <img src={ArrToSend} alt="Ico" />
            </button>
        </form>
    )
}
