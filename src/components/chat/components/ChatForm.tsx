import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addChatItem } from '../../../redux/toolkitSlice'

import ArrToSend from './../../../assets/images/send-message.svg'
import smile from './../../../assets/images/smile-1.png'

interface IChatFormProps {
    setIsOpenSmiles: any
}

export const ChatForm: React.FC<IChatFormProps> = ({setIsOpenSmiles}) => {

    const [messageValue, setMessageValue] = useState('')
    const dispatch = useDispatch()

    const checkValueLength = (messageValue.length >= 150 ? " _red" : "")

    const handleTextMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMessageValue(event.target.value)
    }

    const handleSendMessage = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if(!messageValue.length) return;
        
        dispatch(addChatItem({
            id: new Date().getTime(),
            user: {
                name: 'NULL',
                photo: "NULL",
                link: "NULL",
                isAdmin: false,
            },
            message: messageValue,
            time: new Date().getTime(),
        }))

        setMessageValue('')

        setTimeout(() => {
            document.querySelector('.section-right__item')?.scrollTo(0, 9999999)
        }, 100)
    }

    return (
        <form onSubmit={handleSendMessage} className="section-right__bottom" action="#">
            <label className="textarea">
                <input maxLength={150} value={messageValue} onChange={handleTextMessage} placeholder="Сообщение" />
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
