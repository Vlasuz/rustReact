import React from 'react';
import RightsChatMessage from "./RightsChatMessage";
import RightsChatSmiles from "./RightsChatSmiles";
import RightsChatTextarea from "./RightsChatTextarea";
import {Link} from "react-router-dom";
import RightsChatRules from "./RightsChatRules";
import {useState} from "react";
import RightsChatResources from "./RightsChatResources";

const RightsChat = () => {

    const [messages, setMessages] = useState([
        {
            id: 1,
            date: {
                hour: '10',
                min: '48',
            },
            user: {
                image: 'images/user.jpeg',
                name: 'Михоелъ'
            },
            text: 'Что-то мне не очень везет на сэйв зоны, слишком уж рандомно они себя ведут 12'
        },
        {
            id: 2,
            date: {
                hour: '10',
                min: '49',
            },
            user: {
                image: 'images/user.jpeg',
                name: 'Михоелъ'
            },
            text: 'Что, слишком уж рандомно они себя ведут 12'
        }
    ])

    return (
        <div className="section-right__chatting">
            <div className="chatting__block">
                {
                    messages.map(sms =>
                        <RightsChatMessage key={sms.id} messageInfo={sms}/>
                    )
                }
                {/*<div className="chatting__item">*/}
                {/*    <div className="item__photo">*/}
                {/*        <div className="photo">*/}
                {/*            <img src="images/user.jpeg" alt="User"/>*/}
                {/*        </div>*/}
                {/*        <div className="mark">*/}
                {/*            <img src="images/twitch.svg" alt="Ico"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="item__inner">*/}
                {/*        <div className="item__top">*/}
                {/*            <h4 className="item__name">Система</h4>*/}
                {/*            <div className="item__muted">*/}
                {/*                <img src="images/muted.svg" alt="Menu"/>*/}
                {/*            </div>*/}
                {/*            <button className="item__menu">*/}
                {/*                <img src="images/chat-menu.svg" alt="Menu"/>*/}
                {/*            </button>*/}
                {/*            <time className="item__time">12:46</time>*/}
                {/*        </div>*/}
                {/*        <div className="item__text">*/}
                {/*            <p>Из-за технический работ сайт может функционировать не корректно в ближайший*/}
                {/*                час. Спасибо за понимание!</p>*/}
                {/*        </div>*/}
                {/*        <ul className="item__dropdown">*/}
                {/*            <li><a href="#">Скрыть сообщение</a>*/}
                {/*            </li>*/}
                {/*            /!*onClick="showNotice('block-chat')"*!/*/}
                {/*            <li><a href="#">Заглушить</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Блокировать 1ч</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Бан чата</a>*/}
                {/*            </li>*/}
                {/*            <li className="li__delete"><a href="#">Удалить</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="chatting__item chatting__item_muted">*/}
                {/*    <div className="item__photo">*/}
                {/*        <div className="photo">*/}
                {/*            <img src="images/user.jpeg" alt="User"/>*/}
                {/*        </div>*/}
                {/*        <div className="mark">*/}
                {/*            <img src="images/twitch.svg" alt="Ico"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="item__inner">*/}
                {/*        <div className="item__top">*/}
                {/*            <h4 className="item__name">Система</h4>*/}
                {/*            <div className="item__muted">*/}
                {/*                <img src="images/muted.svg" alt="Menu"/>*/}
                {/*            </div>*/}
                {/*            <button className="item__menu">*/}
                {/*                <img src="images/chat-menu.svg" alt="Menu"/>*/}
                {/*            </button>*/}
                {/*            <time className="item__time">12:46</time>*/}
                {/*        </div>*/}
                {/*        <div className="item__text">*/}
                {/*            <p>Из-за технический работ сайт может функционировать не корректно в ближайший*/}
                {/*                час. Спасибо за понимание!</p>*/}
                {/*        </div>*/}
                {/*        <ul className="item__dropdown">*/}
                {/*            <li><a href="#">Скрыть сообщение</a>*/}
                {/*            </li>*/}
                {/*            /!*onClick="showNotice('block-chat')"*!/*/}
                {/*            <li><a href="#">Заглушить</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Блокировать 1ч</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Бан чата</a>*/}
                {/*            </li>*/}
                {/*            <li className="li__delete"><a href="#">Удалить</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="chatting__item chatting__item_system">*/}
                {/*    <div className="item__photo">*/}
                {/*        <div className="photo">*/}
                {/*            <img src="images/user.jpeg" alt="User"/>*/}
                {/*        </div>*/}
                {/*        <div className="mark">*/}
                {/*            <img src="images/twitch.svg" alt="Ico"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="item__inner">*/}
                {/*        <div className="item__top">*/}
                {/*            <h4 className="item__name">Система</h4>*/}
                {/*            <div className="item__muted">*/}
                {/*                <img src="images/muted.svg" alt="Menu"/>*/}
                {/*            </div>*/}
                {/*            <button className="item__menu">*/}
                {/*                <img src="images/chat-menu.svg" alt="Menu"/>*/}
                {/*            </button>*/}
                {/*            <time className="item__time">12:46</time>*/}
                {/*        </div>*/}
                {/*        <div className="item__text">*/}
                {/*            <p>Из-за технический работ сайт может функционировать не корректно в ближайший*/}
                {/*                час. Спасибо за понимание!</p>*/}
                {/*        </div>*/}
                {/*        <ul className="item__dropdown">*/}
                {/*            <li><a href="#">Скрыть сообщение</a>*/}
                {/*            </li>*/}
                {/*            /!*onClick="showNotice('block-chat')"*!/*/}
                {/*            <li><a href="#">Заглушить</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Блокировать 1ч</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Бан чата</a>*/}
                {/*            </li>*/}
                {/*            <li className="li__delete"><a href="#">Удалить</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<div className="chatting__item">*/}
                {/*    <div className="item__photo">*/}
                {/*        <div className="photo">*/}
                {/*            <img src="images/user.jpeg" alt="User"/>*/}
                {/*        </div>*/}
                {/*        <div className="mark">*/}
                {/*            <img src="images/twitch.svg" alt="Ico"/>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*    <div className="item__inner">*/}
                {/*        <div className="item__top">*/}
                {/*            <h4 className="item__name">Система</h4>*/}
                {/*            <div className="item__muted">*/}
                {/*                <img src="images/muted.svg" alt="Menu"/>*/}
                {/*            </div>*/}
                {/*            <button className="item__menu">*/}
                {/*                <img src="images/chat-menu.svg" alt="Menu"/>*/}
                {/*            </button>*/}
                {/*            <time className="item__time">12:46</time>*/}
                {/*        </div>*/}
                {/*        <div className="item__text">*/}
                {/*            <p>Из-за технический работ сайт может функционировать не корректно в ближайший*/}
                {/*                час. Спасибо за понимание!</p>*/}
                {/*        </div>*/}
                {/*        <ul className="item__dropdown">*/}
                {/*            <li><a href="#">Скрыть сообщение</a>*/}
                {/*            </li>*/}
                {/*            /!*onClick="showNotice('block-chat')"*!/*/}
                {/*            <li><a href="#">Заглушить</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Блокировать 1ч</a>*/}
                {/*            </li>*/}
                {/*            <li><a href="#">Бан чата</a>*/}
                {/*            </li>*/}
                {/*            <li className="li__delete"><a href="#">Удалить</a>*/}
                {/*            </li>*/}
                {/*        </ul>*/}
                {/*    </div>*/}
                {/*</div>*/}

            </div>
            <RightsChatSmiles/>
            <RightsChatRules />
            <RightsChatResources />
            <RightsChatTextarea setMessages={setMessages}/>
        </div>
    );
};

export default RightsChat;