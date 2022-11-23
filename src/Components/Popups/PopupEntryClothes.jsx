import React from 'react';
import PopupCloseBackground from "./PopupCloseBackground";
import PopupCloseCross from "./PopupCloseCross";
import {Link} from "react-router-dom";

const PopupEntryClothes = (props) => {


    const submitToGame = (e) => {
        e.preventDefault();

        document.querySelector('.link-to-page-fight').click()
    }


    const sumListItems = function () {
        let sum = 0
        if(document.querySelector('.popup-new-room__zone li')) {
            document.querySelectorAll('.popup-new-room__zone li').forEach((item) => {
                sum += +item.querySelector('.item__price span').innerText
            })

            document.querySelector('.inputs__item-sum .input__sum').closest('.popup-entry-clothes').querySelector('.popup__content-item-clothes button').removeAttribute('disabled')
        } else {
            sum = 0;
            document.querySelector('.popup__content-item-clothes button').setAttribute('disabled', 'disabled')
        }
        document.querySelector('.inputs__item-sum .input__sum').innerHTML = sum;
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
                        <form
                            action="#"
                            onSubmit={e => submitToGame(e)}
                        >
                            <Link className={"link-to-page-fight"} to={'/fight-running'} />
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