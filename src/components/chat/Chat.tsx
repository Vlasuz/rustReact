import React, { useEffect, useState } from 'react'
import { ChatStyle } from './chat.styled'
import { ChatItem } from './components/ChatItem'
import { chatData } from '../../data/chat'
import { useSelector } from 'react-redux'
import { IChatItem } from '../../model'
import { ChatForm } from './components/ChatForm'
import { ChatRules } from './components/ChatRules'
import { ChatSmiles } from './components/ChatSmiles'
import { useToggleModal } from '../../hooks/toggleModal'
import { NavLink } from 'react-router-dom'

interface IChatProps {
    className: string
}

export const Chat: React.FC<IChatProps> = (props) => {

    const chatItems = useSelector((state: any) => state.toolkit.chatItems)
    const [isOpenSmiles, setIsOpenSmiles] = useState(false)
    const [isOpenRules, setIsOpenRules] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            document.querySelector('.section-right__item')?.scrollTo(0, 9999999)
        }, 100)
    }, [])

    useToggleModal({setState: setIsOpenRules, block: ['.section-right__rules', '.resources__button']})
    useToggleModal({setState: setIsOpenSmiles, block: ['.section-right__smiles', '.smiles']})

    return (
        <ChatStyle className={props.className}>
            <div className="section-right__chatting">
                <div className="chatting__block">

                    {
                        chatItems.map((item: IChatItem) => <ChatItem key={item.id} data={item} />)
                    }

                </div>
                <ChatSmiles isOpenSmiles={isOpenSmiles} />
                <ChatRules isOpenRules={isOpenRules} />
                <div className="chat__bottom">
                    <div className="section-right__resources">
                        <button className="resources__button" onClick={_ => setIsOpenRules(prev => !prev)}>Правила чата</button>
                        <NavLink to={'/policy'} className="resources__button">Пользовательское соглашение</NavLink>
                    </div>
                    <ChatForm setIsOpenSmiles={setIsOpenSmiles} />
                </div>
            </div>
        </ChatStyle>
    )
}
