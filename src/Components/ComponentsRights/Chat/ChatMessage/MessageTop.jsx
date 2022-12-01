import React from 'react';
import {Link} from "react-router-dom";

const MessageTop = ({messageInfo, setOpenDropdown}) => {

    let openMenu = function (e) {

        setOpenDropdown(prev => !prev)
        // if( e.target.closest('.item__inner').querySelector('.item__dropdown').classList.contains('item__dropdown_active') ){
        //     e.target.closest('.item__inner').querySelector('.item__dropdown').classList.remove('item__dropdown_active')
        //     return;
        // }
        // for (let drp of document.querySelectorAll('.chatting__item .item__dropdown')) {
        //     drp.classList.remove('item__dropdown_active')
        // }
        // e.target.closest('.item__inner').querySelector('.item__dropdown').classList.toggle('item__dropdown_active')


        // if (e.target.closest('.item__inner').querySelector('.item__dropdown').classList.contains('item__dropdown_active')) {
        //     e.target.closest('.item__inner').querySelector('.item__dropdown').classList.remove('item__dropdown_active')
        // } else {
        //
        //     e.target.closest('.item__inner').querySelector('.item__dropdown').classList.add('item__dropdown_active')
        // }

    }


    return (
        <div className="item__top">
            <Link to={'/person'} className="item__name">
                {messageInfo.user?.name}
            </Link>
            <div className="item__muted">
                <img src="images/muted.svg" alt="Menu"/>
            </div>
            <button
                className="item__menu"
                onClick={openMenu}
            >
                <img src="images/chat-menu.svg" alt="Menu"/>
            </button>
            <time className="item__time">
                {messageInfo.date?.hour}:{messageInfo.date?.min}
            </time>
        </div>
    );
};

export default MessageTop;