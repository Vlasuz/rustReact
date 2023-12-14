import React, {useContext, useRef, useState} from 'react'
import {IChatItem, IUser} from '../../../model'
import userMuted from './../../../assets/images/muted.svg'
import itemMenu from './../../../assets/images/chat-menu.svg'
import {useDispatch, useSelector} from 'react-redux'
import {addMutedUsers, removeChatItem, removeMutedUsers} from '../../../redux/toolkitSlice'
import {useToggleModal} from '../../../hooks/toggleModal'
import {ChatWsContext} from '../../../context/chatWsContext'
import getCookies from "../../../functions/getCookie";
import {NavLink} from "react-router-dom";

interface IChatItemProps {
    data: IChatItem
}

export const ChatItem: React.FC<IChatItemProps> = ({data}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isVanish, setisVanish] = useState(false)
    const [cookies] = useState(getCookies('access_token_rust'))
    const ws: any = useContext(ChatWsContext);
    const thisItem: any = useRef(null)
    const mutedUsers = useSelector((state: any) => state.toolkit.mutedUsers)
    const myUser: IUser = useSelector((state: any) => state.toolkit.user)

    const isThisUserMuted = mutedUsers.some((item: IUser) => item.id === data.user.id)
    const itemMuted = isThisUserMuted ? " chatting__item_muted" : ""
    const isAdmin = myUser.role !== "user"
    const itemRole = data.user.role !== "user" ? " chatting__item_system" : ""
    const isItMe = data.user.id === myUser.id

    const dispatch = useDispatch()

    const handleVanish = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()
        setisVanish(true)
    }
    const handleMuted = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()

        if (isThisUserMuted) {
            dispatch(removeMutedUsers(data.user))
            ws.current.send(JSON.stringify({
                "type": "unmute_user",
                "data": {"user": data.user.id}
            }))
        } else {
            dispatch(addMutedUsers(data.user))
            ws.current.send(JSON.stringify({
                "type": "mute_user",
                "data": {"user": data.user.id}
            }))
        }

    }
    const handleDelete = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        event.preventDefault()

        if (ws && ws.current && ws.current.readyState === WebSocket.OPEN) {
            thisItem.current.classList.add('item_deleted')

            setTimeout(() => {
                ws.current.send(JSON.stringify({
                    "type": "delete_message",
                    "data": {"message": data.id}
                }))
            }, 300)
        }
    }

    useToggleModal({setState: setIsMenuOpen, block: ['.item__menu', '.item__dropdown']})


    const isSticker = data.text.includes('stickers') ? <img src={data.text} alt={data.text}/> : data.text


    if (isVanish) return null;

    return (
        <div ref={thisItem} className={"chatting__item" + (itemMuted + itemRole)}>
            <div className="item__photo">
                <NavLink to={'/user/'+data.user.id}>
                <div className="photo">
                    <img src={data.user.avatar} alt="User"/>
                </div>
                </NavLink>
            </div>
            <div className="item__inner">
                <div className="item__top">
                    <NavLink to={'/user/'+data.user.id}>
                        <h4 className="item__name">
                            {data.user.name}
                        </h4>
                    </NavLink>
                    <div className="item__muted">
                        <img src={userMuted} alt="Menu"/>
                    </div>
                    {cookies && <button className="item__menu" onClick={_ => setIsMenuOpen(prev => !prev)}>
                        <img src={itemMenu} alt="Menu"/>
                    </button>}
                    <time className="item__time">
                        {data.created_at}
                    </time>
                </div>
                <div className="item__text">
                    <p>
                        {isSticker}
                    </p>
                </div>
                <ul className={"item__dropdown" + (isMenuOpen ? " item__dropdown_active" : "")}>
                    <li>
                        <a onClick={event => handleVanish(event)} href="#">Скрыть сообщение</a>
                    </li>
                    {!isItMe && <li>
                        <a onClick={event => handleMuted(event)} href="#">
                            {
                                !isThisUserMuted ? "Заглушить" : "Разглушить"
                            }
                        </a>
                    </li>}
                    {isAdmin && !isItMe && <li>
                        <a href="#">Блокировать 1ч</a>
                    </li>}
                    {isAdmin && !isItMe && <li>
                        <a href="#">Бан чата</a>
                    </li>}
                    {(data.user.id === myUser.id || myUser.role !== "user") && <li className="li__delete">
                        <a onClick={event => handleDelete(event)} href="#">Удалить</a>
                    </li>}
                </ul>
            </div>
        </div>
    )
}
