import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";

const PopupEntryClothes = (props) => {
    return (
        <div className="popup popup-entry-clothes">
            <PopupCloseBackground />
            <div className="popup__content">
                <div className="popup__content_lft">
                    <h2>Новая комната</h2>
                    <PopupCloseCross />
                    <div className="popup__content-item popup__content-item_active popup__content-item-clothes">
                        <div className="popup-new-room__zone">
                            <p>Перетащите сюда скины для ставки</p>
                            <ul>

                            </ul>
                        </div>
                        <form action="#">
                            <div className="inputs">
                                <div className="inputs__item inputs__item-sum">
                                    <p>Сумма ставки:</p>
                                    <div className="input">
                                        <img src="images/header__coins.svg" alt="Ico" />
                                        <span className="input__sum">0</span>
                                    </div>
                                </div>
                                <div className="inputs__item inputs__item-opp">
                                    <p>Оппонент:</p>
                                    <div className="input">
                                        <div className="input__photo">
                                            <img src="images/user.jpeg" alt="User"/>
                                        </div>
                                        <div className="input__coins">
                                            <img src="images/header__coins.svg" alt="Ico" />
                                            <span>
                                                {props.bid}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button disabled>Внести ставку</button>
                        </form>
                    </div>
                </div>
                <div className="popup__content_rht">
                    <h2>Инвентарь сайта</h2>
                    <PopupCloseCross />
                    <div className="popup-new-room__sort">
                        <span>Сортировка</span>
                        <div className="select">
                            <select>
                                <option>По цене</option>
                                <option>По дате</option>
                            </select>
                        </div>
                    </div>
                    <ul className="popup-new-room__list">
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                        <li className="popup-new-room__item">
                            <div className="clothes__cool clothes__cool_green">

                            </div>
                            <div className="li__delete">
                                <img src="images/cross.svg" alt="Close"/>
                            </div>
                            <div className="item__check">
                                <img src="images/green-check-sq.svg" alt="Check" />
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin" />
                                <span>3000</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PopupEntryClothes;