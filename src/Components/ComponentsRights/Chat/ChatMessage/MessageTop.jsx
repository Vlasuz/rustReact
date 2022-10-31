import React from 'react';

const MessageTop = () => {
    return (
        <div className="item__top">
            <h4 className="item__name">Система</h4>
            <div className="item__muted">
                <img src="images/muted.svg" alt="Menu"/>
            </div>
            <button className="item__menu">
                <img src="images/chat-menu.svg" alt="Menu"/>
            </button>
            <time className="item__time">12:46</time>
        </div>
    );
};

export default MessageTop;