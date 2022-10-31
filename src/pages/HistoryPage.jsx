import React from 'react';

const HistoryPage = () => {
    return (
        <section className="section-history">
            <div className="section-history__top">
                <button className="section-history__all button_active">
                    <p>Все</p>
                </button>
                <button className="section-history__push">
                    <p>Пополнено</p>
                    <div className="cost">$ 1479<span>,00</span>
                    </div>
                </button>
                <button className="section-history__pull">
                    <p>Выведено с сайта</p>
                    <div className="cost">$ 2618<span>,50</span>
                    </div>
                </button>
            </div>
            <div className="section-history__center">
                <ul className="section-history__switcher">
                    <li>
                        <a href="#">Предметами</a>
                    </li>
                    <li className="li_active">
                        <a href="#">Пин-коды</a>
                    </li>
                </ul>
                <div className="section-history__sort">
                    <span>Сортировка:</span>
                    <div className="select">
                        <select>
                            <option>По цене</option>
                            <option>По дате</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="section-history__block">
                <div className="section-history__item">
                    <div className="item__type item__type_send">
                        <img src="images/arr-send.svg" alt="Send"/>
                    </div>
                    <div className="item__date">18:23<span>12.07.21</span>
                    </div>
                    <div className="item__list">
                        <ul>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                        </ul>
                    </div>
                    <div className="item__price">
                        <img src="images/header__coins.svg" alt="Coins"/>
                            <span>3000</span>
                    </div>
                    <button className="item__delete">
                        <img src="images/cross.svg" alt="Coins"/>
                    </button>
                    <div className="item__status item__status_good">
                        <span>Отправлен</span>
                        <img src="images/green-check.svg" alt="Ico"/>
                    </div>
                </div>
                <div className="section-history__item">
                    <div className="item__type item__type_send">
                        <img src="images/arr-get.svg" alt="Get"/>
                    </div>
                    <div className="item__date">18:23<span>12.07.21</span>
                    </div>
                    <div className="item__list">
                        <ul>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                        </ul>
                    </div>
                    <div className="item__price">
                        <img src="images/header__coins.svg" alt="Coins"/>
                            <span>3000</span>
                    </div>
                    <button className="item__delete">
                        <img src="images/cross.svg" alt="Coins"/>
                    </button>
                    <div className="item__status item__status_good">
                        <span>Получен</span>
                        <img src="images/green-check.svg" alt="Ico"/>
                    </div>
                </div>
                <div className="section-history__item">
                    <div className="item__type item__type_send">
                        <img src="images/arr-get.svg" alt="Get"/>
                    </div>
                    <div className="item__date">18:23<span>12.07.21</span>
                    </div>
                    <div className="item__list">
                        <ul>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li>
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <img src="images/skin.png" alt="Skin"/>
                                    <div className="li__name">
                                        <p>Cucumber Eoka</p>
                                        <b>$32.18</b>
                                    </div>
                            </li>
                            <li className="count">+2</li>
                        </ul>
                    </div>
                    <div className="item__price">
                        <img src="images/header__coins.svg" alt="Coins"/>
                            <span>3000</span>
                    </div>
                    <button className="item__delete">
                        <img src="images/cross.svg" alt="Coins"/>
                    </button>
                    <div className="item__status item__status_grey">
                        <span>Отменен</span>
                        <img src="images/status-error.svg" alt="Ico"/>
                    </div>
                </div>
                <div className="section-history__item">
                    <div className="item__type item__type_send">
                        <img src="images/arr-get.svg" alt="Get"/>
                    </div>
                    <div className="item__date">18:23<span>12.07.21</span>
                    </div>
                    <div className="item__list">
                        <p className="pin">PIN-CODE<span> $5</span>
                        </p>
                    </div>
                    <div className="item__price">
                        <img src="images/header__coins.svg" alt="Coins"/>
                            <span>3000</span>
                    </div>
                    <button className="item__delete">
                        <img src="images/cross.svg" alt="Coins"/>
                    </button>
                    <div className="item__status item__status_grey">
                        <span>В обработке</span>
                        <img src="images/status-progress.svg" alt="Ico"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HistoryPage;