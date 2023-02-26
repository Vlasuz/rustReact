import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import MessageDropdown from "./ChatMessage/MessageDropdown";
import axios from "axios";
import {useSelector} from "react-redux";
import GlobalLink from "../../../Hooks/GlobalLink";

const RightsChatMessage = ({ data, websocket }) => {

    const [openDropdown, setOpenDropdown] = useState(false)
    const session = useSelector(state => state.reducerSession.session)
    const userChat = useSelector(state => state.reducerUserChat)

    document.addEventListener('click', function (e) {
        if (e.target.closest(".item__dropdown") === null && e.target.closest(".item__menu") === null) {
            setOpenDropdown(false)
        }
    })

    return (
        <div
            className={"chatting__item" + (userChat?.muted_users?.some(item => item?.id === data?.user?.id) ? " chatting__item_muted" : "")}>
            <Link to={session.id !== data.user.id ? "/user/" + data.user.id : "/profile"} className="item__photo">
                <div className="photo">
                    {
                        (data.user.role === 'moder' || data.user.role === 'admin') ?
                            <div className={'system-photo'}></div> :
                            <img src={data.user.avatar} alt={data.user.name}/>
                    }
                </div>
                {
                    data.user.verify === "youtube" ?
                        <div className="mark">
                            <img src="../images/youtube.svg" alt="Ico"/>
                        </div> :
                        data.user.verify === "twitch" ?
                            <div className="mark">
                                <img src="../images/twitch.svg" alt="Ico"/>
                            </div> :
                            data.user.verify === "verified" ?
                                <div className="mark">
                                    <img src="../images/verified.svg" alt="Ico"/>
                                </div> : ""


                }

            </Link>

            <div className="item__inner">
                <div className="item__top">
                    {
                        (data.user.role === 'moder' || data.user.role === 'admin') ?
                            <div className={'item__name'}>Система</div> :
                            <Link to={session.id !== data.user.id ? "/user/" + data.user.id : "/profile"}
                                  className="item__name">
                                {data.user.name}
                            </Link>
                    }
                    <div className="item__muted">
                        <img src="../images/muted.svg" alt="Menu"/>
                    </div>
                    <button
                        className="item__menu"
                        onClick={e => setOpenDropdown(prev => !prev)}
                    >
                        <img src="../images/chat-menu.svg" alt="Menu"/>
                    </button>
                    <time className="item__time">
                        {data.created_at}
                    </time>
                </div>

                <div className="item__text">
                    <p>
                        {
                            data.text.includes("https://"+GlobalLink()+'/media/stickers') ?
                                <img src={data.text} alt="sticker"/> : data.text
                        }
                    </p>
                </div>
                <MessageDropdown
                    openDropdown={openDropdown}
                    messageData={data}
                    websocket={websocket}
                />
            </div>
        </div>
    );
};

export default RightsChatMessage;