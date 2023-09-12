import React, { useState } from 'react'
import { IChatItem } from '../../../model'
import userMuted from './../../../assets/images/muted.svg'
import itemMenu from './../../../assets/images/chat-menu.svg'
import { useDispatch } from 'react-redux'
import { removeChatItem } from '../../../redux/toolkitSlice'
import { useToggleModal } from '../../../hooks/toggleModal'

interface IChatItemProps {
    data: IChatItem
}

export const ChatItem: React.FC<IChatItemProps> = ({data}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVanish, setisVanish] = useState(false)
    const [isMuted, setIsMuted] = useState(false)

    const dispatch = useDispatch()

    const handleVanish = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setisVanish(true)
    }
    const handleMuted = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setIsMuted(prev => !prev)
    }
    const handleRemove = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        dispatch(removeChatItem(data))   
    }

    const itemMuted = isMuted ? " chatting__item_muted" : ""
    const itemSystem = data.user.isAdmin ? " chatting__item_system" : ""

    useToggleModal({setState: setIsMenuOpen, block: ['.item__menu', '.item__dropdown']})


    if(isVanish) return null;

    return (
        <div className={"chatting__item" + (itemMuted + itemSystem)}>
            <div className="item__photo">
                <div className="photo">
                    <img src={data.user.photo} alt="User" />
                </div>
                {/* <div className="mark">
                    <img src="img/twitch.svg" alt="Ico" />
                </div> */}
            </div>
            <div className="item__inner">
                <div className="item__top">
                    <h4 className="item__name">
                        {data.user.name}
                    </h4>
                    <div className="item__muted">
                        <img src={userMuted} alt="Menu" />
                    </div>
                    <button className="item__menu" onClick={_ => setIsMenuOpen(prev => !prev)}>
                        <img src={itemMenu} alt="Menu" />
                    </button>
                    <time className="item__time">
                        {data.time}
                    </time>
                </div>
                <div className="item__text">
                    <p>
                        {data.message}
                    </p>
                </div>
                <ul className={"item__dropdown" + (isMenuOpen ? " item__dropdown_active" : "")}>
                    <li>
                        <a onClick={event => handleVanish(event)} href="#">Скрыть сообщение</a>
                    </li>
                    <li>
                        <a onClick={event => handleMuted(event)} href="#">
                            {
                                !isMuted ? "Заглушить" : "Разглушить"
                            }
                        </a>
                    </li>
                    <li>
                        <a href="#">Блокировать 1ч</a>
                    </li>
                    <li>
                        <a href="#">Бан чата</a>
                    </li>
                    <li className="li__delete">
                        <a onClick={event => handleRemove(event)} href="#">Удалить</a>
                    </li>
                </ul>
            </div>
        </div>
    )
}
