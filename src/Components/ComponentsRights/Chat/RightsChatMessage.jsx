import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import MessageDropdown from "./ChatMessage/MessageDropdown";
import axios from "axios";
import {useSelector} from "react-redux";

const RightsChatMessage = ({ data, mutedUser }) => {

    const [openDropdown, setOpenDropdown] = useState(false)
    const session = useSelector(state => state.reducerSession.session)

    return (
        <div className={"chatting__item" + (mutedUser.id === data.user.id || session?.muted_users?.some(item => item.id === data.user.id) ? " chatting__item_muted" : "")}>
            <Link to={session.id !== data.user.id ? "/user/"+data.user.id : "/profile"} className="item__photo">
                <div className="photo">
                    {
                        (data.user.role === 'moder' || data.user.role === 'admin') ?
                            <div className={'system-photo'}></div> :
                            <img src={data.user.avatar} alt={data.user.name}/>
                    }
                </div>
                {/*<div className="mark">*/}
                {/*    <img src="../images/twitch.svg" alt="Ico"/>*/}
                {/*</div>*/}
            </Link>

            <div className="item__inner">
                <div className="item__top">
                    {
                        (data.user.role === 'moder' || data.user.role === 'admin') ?
                            <div className={'item__name'}>Система</div> :
                            <Link to={session.id !== data.user.id ? "/user/"+data.user.id : "/profile"} className="item__name">
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
                            data.text.includes('https://rust.onefut.net/media/stickers') ? <img src={data.text} alt="sticker"/> : data.text
                        }
                    </p>
                </div>
                <MessageDropdown
                    openDropdown={openDropdown}
                    messageData={data}
                />
            </div>
        </div>
    );
};

export default RightsChatMessage;