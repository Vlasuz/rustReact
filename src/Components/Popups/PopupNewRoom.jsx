import React from 'react';
import PopupCloseCross from "./PopupCloseCross";
import PopupCloseBackground from "./PopupCloseBackground";
import {Link} from "react-router-dom";

const PopupNewRoom = (props) => {

    function createGame(e) {
        e.preventDefault();
        document.querySelector('.link-to-page').click()
    }

    let changeSort = (e) => {

        e.target.closest('.select').querySelector('.select__head span').innerText = e.target.textContent
        e.target.closest('.select').classList.toggle('select_open')

        document.querySelectorAll('.section-history__item').forEach(item => {
            item.style.position = 'static'
            item.style.zIndex = '1'
            item.classList.remove('section-history__item_deleted')
        })
        props.setChangeHistoryList({...props.changeHistoryList, switcher_sort: e.target.getAttribute('data-value')})
    }

    const sumListItems = function () {
        let sum = 0
        if (document.querySelector('.popup-new-room__zone li')) {
            document.querySelectorAll('.popup-new-room__zone li').forEach((item) => {
                sum += +item.querySelector('.item__price span').innerText
            })

            document.querySelector('.popup__content-item-clothes button').removeAttribute('disabled')
        } else {
            sum = 0;
            document.querySelector('.popup__content-item-clothes button').setAttribute('disabled', 'disabled')
        }
        document.querySelector('.inputs__item_skins span').innerHTML = sum;
    }

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

        if (e.target.value != '' && e.target.value > 0 && e.target.value <= props.states.coins) {
            e.target.closest('form').querySelector('button').removeAttribute('disabled')
        } else {
            e.target.closest('form').querySelector('button').setAttribute('disabled', 'disabled')
        }
    }

    function checkListLi(container) {

        if (container.querySelectorAll('.popup-new-room__zone ul li').length > 0 && container.querySelector('.popup-new-room__zone p')) {
            container.querySelector('.popup-new-room__zone p').style.display = 'none';
        } else {
            container.querySelector('.popup-new-room__zone p').style.display = 'block';
        }

    }

    function itemZoneDelete(container) {

        container.querySelectorAll('.popup-new-room__zone .li__delete').forEach((del) => {

            del.onclick = function () {
                this.closest('.popup').querySelector('.popup-new-room__list').append(this.closest('li'))
                sumListItems()
                checkListLi(container)
            }

        })

    }

    const itemMove = function (event) {

        let postItem = event.target.closest('.popup-new-room__item')
        let currentDroppable = null;

        let shiftX = event.clientX - postItem.getBoundingClientRect().left;
        let shiftY = event.clientY - postItem.getBoundingClientRect().top;


        function onMouseMove(event) {

            document.querySelector('body').append(postItem)

            postItem.style.position = 'absolute';
            postItem.style.zIndex = 999;

            moveAt(event.clientX, event.clientY)

            postItem.style.display = 'none';
            let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
            postItem.style.display = 'flex';

            if (!elemBelow) return;

            let droppableBelow = elemBelow.closest('.popup-new-room__zone')


            function movedNotInZone() {

                document.onmouseup = function (e) {

                    document.removeEventListener('mousemove', onMouseMove);
                    document.onmouseup = null;

                    postItem.style.position = 'relative';
                    postItem.style.left = 'auto';
                    postItem.style.top = 'auto';

                    document.querySelector('.popup-new-room__list').append(postItem)

                    sumListItems()

                    checkListLi(e.target.closest('.popup'))

                }

            }


            if (!currentDroppable) movedNotInZone()

            if (currentDroppable != droppableBelow) {

                if (currentDroppable) {
                    document.querySelector('.popup-new-room__zone').style.background = 'transparent';
                }

                currentDroppable = droppableBelow;

                if (currentDroppable) {
                    droppableBelow.style.background = '#26293b';
                    document.onmouseup = function (e) {


                        document.removeEventListener('mousemove', onMouseMove);
                        document.onmouseup = null;

                        postItem.style.position = 'relative';
                        postItem.style.left = 'auto';
                        postItem.style.top = 'auto';

                        droppableBelow.querySelector('ul').append(postItem)

                        sumListItems()

                        checkListLi(e.target.closest('.popup'))

                    }
                }

            }

        }

        function moveAt(pageX, pageY) {

            let coodX = pageX - shiftX;
            let coodY = pageY - shiftY;

            postItem.style.left = coodX + 'px';
            postItem.style.top = coodY + 'px';

        }

        document.addEventListener('mousemove', onMouseMove);

        document.onmouseup = function (e) {

            document.removeEventListener('mousemove', onMouseMove);
            document.onmouseup = null;

            if (!e.target.closest('.li__delete')) {

                e.target.closest('.popup').querySelector('.popup-new-room__zone ul').append(postItem)
                sumListItems()
                checkListLi(e.target.closest('.popup'))

            }

            itemZoneDelete(e.target.closest('.popup'))

        }

        postItem.ondragstart = function () {
            return false;
        };


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
                                <a href="#" onClick={e => e.preventDefault()}>На валюту</a>
                            </li>
                            <li
                                onClick={switcherLi}
                            >
                                <a href="#" onClick={e => e.preventDefault()}>На скины</a>
                            </li>
                        </ul>
                    </div>
                    <div className="popup__content-item popup__content-item_active">
                        <form
                            action="#"
                            onSubmit={(e) => createGame(e)}
                        >
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
                                            {props.states.coins}
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <button type={"submit"} disabled>Создать игру</button>
                        </form>
                    </div>
                    <form
                        className="popup__content-item popup__content-item-clothes"
                        onSubmit={(e) => createGame(e)}
                    >
                        <Link className={"link-to-page"} to={'/fight-waiting'}/>
                        <div className="popup-new-room__zone">
                            <p>Перетащите сюда скины для ставки</p>
                            <ul>

                            </ul>
                        </div>
                        <div className="inputs__item inputs__item-have inputs__item_skins">
                            <p>Итоговая сумма ставки:</p>
                            <div className="input">
                                <img src="images/header__coins.svg" alt="Ico"/>
                                <span>
                                    0
                                </span>
                            </div>
                        </div>
                        <button type={"submit"} disabled>Создать игру</button>
                    </form>
                </div>
                <div className="popup__content_rht">
                    <h2>Инвентарь сайта</h2>
                    <PopupCloseCross/>
                    <div className="popup-new-room__sort">
                        <span>Сортировка</span>
                        <div
                            className="select"
                            onClick={e => changeSort(e)}
                        >
                            <div className="select__head">
                                <span>По дате</span>
                            </div>
                            <div className="select__body">
                                <div className="select__item">
                                    По цене
                                </div>
                                <div className="select__item">
                                    По дате
                                </div>
                            </div>
                        </div>
                    </div>
                    <ul className="popup-new-room__list">
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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
                        <li
                            className="popup-new-room__item"
                            onMouseDown={(e) => itemMove(e)}
                        >
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