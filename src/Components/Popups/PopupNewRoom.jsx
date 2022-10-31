import React from 'react';
import PopupCloseCross from "./PopupCloseCross";
import PopupCloseBackground from "./PopupCloseBackground";

const PopupNewRoom = ({dataInfo}) => {

    let switcherLi = function (e) {

        let thisItem = e.target.closest('li')

        for (let i of document.querySelectorAll('.popup-new-room .popup-new-room__switcher li')) {
            i.classList.remove('li_active')
        }
        for (let i of document.querySelectorAll('.popup-new-room .popup__content-item')) {
            i.classList.remove('popup__content-item_active')
        }

        thisItem.classList.add('li_active')

        let arrayOfItems = []
        e.target.closest('.popup-new-room__switcher').querySelectorAll('li').forEach(item => {
            arrayOfItems.push(item)
        })
        let numberOfBlock = arrayOfItems.indexOf(e.target.closest('li'))

        document.querySelectorAll('.popup-new-room .popup__content-item')[numberOfBlock].classList.add('popup__content-item_active')

        if (document.querySelectorAll('.popup-new-room .popup__content-item')[numberOfBlock].classList.contains('popup__content-item-clothes')) {
            document.querySelector('.popup-new-room .popup__content_rht').style.display = 'block';
        } else {
            document.querySelector('.popup-new-room .popup__content_rht').style.display = 'none';
        }

    }



    let changeInput = function (e) {

        if (e.target.value != '' && e.target.value > 0 && e.target.value <= dataInfo.coins ) {
            e.target.closest('form').querySelector('button').removeAttribute('disabled')
        } else {
            e.target.closest('form').querySelector('button').setAttribute('disabled', 'disabled')
        }
    }


    return (
        <div className="popup popup-new-room">
            <PopupCloseBackground/>
            <div className="popup__content">
                <div className="popup__content_lft">
                    <h2>Новая комната</h2>
                    <PopupCloseCross/>
                    <div className="popup-new-room__switcher">
                        <ul>
                            <li
                                className="li_active"
                                onClick={switcherLi}
                            >
                                <a href="#">На валюту</a>
                            </li>
                            <li
                                onClick={switcherLi}
                            >
                                <a href="#">На скины</a>
                            </li>
                        </ul>
                    </div>
                    <div className="popup__content-item popup__content-item_active">
                        <form action="#">
                            <div className="inputs">
                                <div className="inputs__item inputs__item-sum">
                                    <p>Сумма ставки:</p>
                                    <div className="input">
                                        <img src="images/header__coins.svg" alt="Ico"/>
                                        <input
                                            type="text"
                                            placeholder="0"
                                            onChange={changeInput}
                                        />
                                    </div>
                                </div>
                                <div className="inputs__item inputs__item-have">
                                    <p>На балансе:</p>
                                    <div className="input">
                                        <img src="images/header__coins.svg" alt="Ico"/>
                                        <span>
                                            {dataInfo.coins}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button disabled>Создать игру</button>
                        </form>
                    </div>
                    <div className="popup__content-item popup__content-item-clothes">
                        <div className="popup-new-room__zone">
                            <p>Перетащите сюда скины для ставки</p>
                            <ul>

                            </ul>
                        </div>
                        <div className="inputs__item inputs__item-have">
                            <p>Итоговая сумма ставки:</p>
                            <div className="input">
                                <img src="images/header__coins.svg" alt="Ico"/>
                                <span>0</span>
                            </div>
                        </div>
                        <button disabled>Создать игру</button>
                    </div>
                </div>
                <div className="popup__content_rht">
                    <h2>Инвентарь сайта</h2>
                    <PopupCloseCross/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
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
                                <img src="images/green-check-sq.svg" alt="Check"/>
                            </div>
                            <div className="item__photo">
                                <img src="images/skin.png" alt="Photo"/>
                            </div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coin"/>
                                <span>3000</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default PopupNewRoom;