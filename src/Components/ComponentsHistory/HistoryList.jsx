import React from 'react';
import HistoryItem from "./HistoryItem";

const HistoryList = () => {

    let moreItems = function (e) {
        if (e.target.closest('ul')) {
            for (let it of e.target.closest('ul').querySelectorAll('li')) {
                it.style.display = 'flex'
            }

            e.target.closest('li').remove()
        }
    }

    let deleteItem = function (e) {

        let th = e.target.closest('.section-history__item')

        // console.log(closestItemClass)
        e.target.closest('.section-history__item').classList.add('section-history__item_deleted')
        setTimeout(function () {
            th.remove()
        }, 300)

    }

    return (
        <div className="section-history__block">

            <HistoryItem />

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
                <button
                    className="item__delete"
                    onClick={e => deleteItem(e)}
                >
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
                        <li
                            className="count"
                            onClick={e => moreItems(e)}
                        >+2</li>
                    </ul>
                </div>
                <div className="item__price">
                    <img src="images/header__coins.svg" alt="Coins"/>
                    <span>3000</span>
                </div>
                <button
                    className="item__delete"
                    onClick={e => deleteItem(e)}
                >
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
                <button
                    className="item__delete"
                    onClick={e => deleteItem(e)}
                >
                    <img src="images/cross.svg" alt="Coins"/>
                </button>
                <div className="item__status item__status_grey">
                    <span>В обработке</span>
                    <img src="images/status-progress.svg" alt="Ico"/>
                </div>
            </div>
        </div>
    );
};

export default HistoryList;