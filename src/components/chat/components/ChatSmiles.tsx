import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { getApiLink } from '../../../functions/getApiLink'
import { ISmilesList, ISmilesSticker } from '../../../model'
import { ChatWsContext } from '../../../context/chatWsContext'
import getCookies from "../../../functions/getCookie";
import {setNotice} from "../../../redux/toolkitSlice";
import {useDispatch} from "react-redux";

interface IChatSmilesProps {
    isOpenSmiles: boolean
    setIsOpenSmiles: any
}

export const ChatSmiles: React.FC<IChatSmilesProps> = ({ isOpenSmiles, setIsOpenSmiles }) => {

    const [smileList, setSmileList] = useState<ISmilesList[]>([])
    const [activeSmile, setActiveSmile] = useState<ISmilesList>()
    const wsChat: any = useContext(ChatWsContext)
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(getApiLink('api/chat/stickers/')).then(({ data }) => {
            setSmileList(data)
            setActiveSmile(data[0])
        })
    }, [])

    const handleSendSmile = (item: ISmilesSticker) => {
        setIsOpenSmiles(false)

        if(!getCookies('access_token_rust')) {
            return dispatch(setNotice('forChattingAuth'))
        }

        wsChat.current.send(JSON.stringify({
            "type": "send_message",
            "data": { "message": getApiLink(item.image) }
        }))
    }

    return (
        <>
            <div className={"section-right__smiles" + (isOpenSmiles ? " section-right__smiles_active" : "")}>
                <div className="smiles__inner">
                    <div className="smiles__block">
                        <ul>

                            {
                                smileList.filter((item: ISmilesList) => item.id === activeSmile?.id)[0]?.stickers.map((item: ISmilesSticker) =>
                                    <li key={item.id}>
                                        <button onClick={_ => handleSendSmile(item)}>
                                            <img src={getApiLink(item.image)} alt="Smile" />
                                        </button>
                                    </li>
                                )
                            }

                        </ul>
                    </div>
                </div>
                <div className="smiles__switches">
                    <ul>

                        {
                            smileList.map((item: ISmilesList) =>
                                <li key={item.id} className={item.id === activeSmile?.id ? "li_active" : ""}>
                                    <button onClick={_ => setActiveSmile(item)}>
                                        {item.title}
                                    </button>
                                </li>
                            )
                        }

                    </ul>
                </div>
            </div>
        </>
    )
}
