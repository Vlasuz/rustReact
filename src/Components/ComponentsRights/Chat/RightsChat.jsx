import React from 'react';
import RightsChatMessage from "./RightsChatMessage";
import RightsChatSmiles from "./RightsChatSmiles";
import RightsChatTextarea from "./RightsChatTextarea";

const RightsChat = () => {
    return (
        <div className="section-right__chatting">
            <div className="chatting__block">
                <div className="chatting__item">
                    <div className="item__photo">
                        <div className="photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="mark">
                            <img src="images/twitch.svg" alt="Ico"/>
                        </div>
                    </div>
                    <div className="item__inner">
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
                        <div className="item__text">
                            <p>Из-за технический работ сайт может функционировать не корректно в ближайший
                                час. Спасибо за понимание!</p>
                        </div>
                        <ul className="item__dropdown">
                            <li><a href="#">Скрыть сообщение</a>
                            </li>
                            {/*onClick="showNotice('block-chat')"*/}
                            <li><a href="#">Заглушить</a>
                            </li>
                            <li><a href="#">Блокировать 1ч</a>
                            </li>
                            <li><a href="#">Бан чата</a>
                            </li>
                            <li className="li__delete"><a href="#">Удалить</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="chatting__item chatting__item_muted">
                    <div className="item__photo">
                        <div className="photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="mark">
                            <img src="images/twitch.svg" alt="Ico"/>
                        </div>
                    </div>
                    <div className="item__inner">
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
                        <div className="item__text">
                            <p>Из-за технический работ сайт может функционировать не корректно в ближайший
                                час. Спасибо за понимание!</p>
                        </div>
                        <ul className="item__dropdown">
                            <li><a href="#">Скрыть сообщение</a>
                            </li>
                            {/*onClick="showNotice('block-chat')"*/}
                            <li><a href="#">Заглушить</a>
                            </li>
                            <li><a href="#">Блокировать 1ч</a>
                            </li>
                            <li><a href="#">Бан чата</a>
                            </li>
                            <li className="li__delete"><a href="#">Удалить</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="chatting__item chatting__item_system">
                    <div className="item__photo">
                        <div className="photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="mark">
                            <img src="images/twitch.svg" alt="Ico"/>
                        </div>
                    </div>
                    <div className="item__inner">
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
                        <div className="item__text">
                            <p>Из-за технический работ сайт может функционировать не корректно в ближайший
                                час. Спасибо за понимание!</p>
                        </div>
                        <ul className="item__dropdown">
                            <li><a href="#">Скрыть сообщение</a>
                            </li>
                            {/*onClick="showNotice('block-chat')"*/}
                            <li><a href="#">Заглушить</a>
                            </li>
                            <li><a href="#">Блокировать 1ч</a>
                            </li>
                            <li><a href="#">Бан чата</a>
                            </li>
                            <li className="li__delete"><a href="#">Удалить</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="chatting__item">
                    <div className="item__photo">
                        <div className="photo">
                            <img src="images/user.jpeg" alt="User"/>
                        </div>
                        <div className="mark">
                            <img src="images/twitch.svg" alt="Ico"/>
                        </div>
                    </div>
                    <div className="item__inner">
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
                        <div className="item__text">
                            <p>Из-за технический работ сайт может функционировать не корректно в ближайший
                                час. Спасибо за понимание!</p>
                        </div>
                        <ul className="item__dropdown">
                            <li><a href="#">Скрыть сообщение</a>
                            </li>
                            {/*onClick="showNotice('block-chat')"*/}
                            <li><a href="#">Заглушить</a>
                            </li>
                            <li><a href="#">Блокировать 1ч</a>
                            </li>
                            <li><a href="#">Бан чата</a>
                            </li>
                            <li className="li__delete"><a href="#">Удалить</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <RightsChatMessage />
            </div>
            <RightsChatSmiles />
            <div className="section-right__rules">
                <div className="rules__block">
                    <h2>Правила чата</h2>
                    <h3>Запрещается:</h3>
                    <p>· Использовать в никнейме название или ссылки ведущие на сторонний сайт</p>
                    <br/>
                    <p>· Рекламировать каналы Youtube / Twitch</p>
                    <br/>
                    <p>· Оскорблять других участников чата / сайта.</p>
                    <br/>
                    <p>· Упоминание платежных реквизитов в целях попрошайничества.</p>
                    <br/>
                    <p>· Распространять URL ссылки и промо-коды (кроме Администрации и
                        Модераторов).</p>
                    <br/>
                    <p>· Спамить сообщения в чат по одному символу.</p>
                    <br/>
                    <p>Любой участник сайта/чата, должен с уважением относится ко
                        всем без исключения участникам.</p>
                </div>
            </div>
            <div className="section-right__resources">
                <button className="resources__button">Правила чата</button>
                <a className="resources__button" href="terms.html">Пользовательское соглашение</a>
            </div>
            <RightsChatTextarea />
        </div>
    );
};

export default RightsChat;