import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ChatStyle } from './chat.styled'
import { ChatItem } from './components/ChatItem'
import { chatData } from '../../data/chat'
import { useDispatch, useSelector } from 'react-redux'
import {IChatItem, IPages} from '../../model'
import { ChatForm } from './components/ChatForm'
import { ChatRules } from './components/ChatRules'
import { ChatSmiles } from './components/ChatSmiles'
import { useToggleModal } from '../../hooks/toggleModal'
import { NavLink } from 'react-router-dom'
import { getApiLink } from '../../functions/getApiLink'
import { getWsLink } from '../../functions/getWsLink'
import axios from 'axios'
import getCookies from '../../functions/getCookie'
import { setChatItems } from '../../redux/toolkitSlice'
import { useWsChat } from '../../hooks/wsChat'
import { ChatWsContext } from '../../context/chatWsContext'

interface IChatProps {
    className: string
}

export const Chat: React.FC<IChatProps> = (props) => {

    const chatItems = useSelector((state: any) => state.toolkit.chatItems)
    const [isOpenSmiles, setIsOpenSmiles] = useState(false)
    const [isOpenRules, setIsOpenRules] = useState(false)
    const [isScrollActive, setIsScrollActive] = useState(false)
    const dispatch = useDispatch()
    const { ws } = useWsChat()

    const pages: IPages[] = useSelector((state: any) => state.toolkit.pages)

    useEffect(() => {
        axios.get(getApiLink('api/chat/get/?amount=100')).then(({ data }) => {
            dispatch(setChatItems(data.reverse()))
            setTimeout(() => {
                setIsScrollActive(true)
            }, 500)
        })
    }, [])

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.section-right__item')?.scrollTo(0, 9999999)
        }, 100)
    }, [chatItems])

    useToggleModal({ setState: setIsOpenRules, block: ['.section-right__rules', '.resources__button'] })
    useToggleModal({ setState: setIsOpenSmiles, block: ['.section-right__smiles', '.smiles'] })

    return (
        <ChatWsContext.Provider value={ws}>
            <ChatStyle style={{scrollBehavior: isScrollActive ? "smooth" : "auto"}} className={props.className}>
                <div className="section-right__chatting">
                    <div className="chatting__block">

                        {
                            chatItems.map((item: IChatItem) => <ChatItem key={item.id} data={item} />)
                        }

                    </div>
                    <ChatSmiles isOpenSmiles={isOpenSmiles} setIsOpenSmiles={setIsOpenSmiles} />
                    <ChatRules isOpenRules={isOpenRules} />
                    <div className="chat__bottom">
                        <div className="section-right__resources">
                            <button className="resources__button" onClick={_ => setIsOpenRules(prev => !prev)}>
                                {pages.filter(item => !item.is_main && item)[0]?.ua_title}
                            </button>
                        </div>
                        <ChatForm setIsOpenSmiles={setIsOpenSmiles} />
                    </div>
                </div>
            </ChatStyle>
        </ChatWsContext.Provider>
    )
}
