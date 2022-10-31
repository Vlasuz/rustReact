import React from 'react';
import PopupNewRoom from "./PopupNewRoom";
import PopupAddCoins from "./PopupAddCoins";

const AllPopups = ({dataInfo}) => {

    let closePopup = function () {
        document.querySelectorAll('.popup').forEach(function (pp) {
            pp.classList.remove('popup_active')
        })
    }

    return (
        <>
            <PopupAddCoins />
            <PopupNewRoom dataInfo={dataInfo} />


            <div className="popup popup-fair-game">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Честная игра</h2>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="popup-fair-game__border">
                        <h3>Данные раунда</h3>
                        <ul>
                            <li>
                                <p>
                                    <span>Джекпот:  </span>235900</p>
                            </li>
                            <li>
                                <p>
                                    <span>Hash:  </span>fb433ac0c175de6ce49105ae6f8b2050bcc7b17deaf41af83a1</p>
                            </li>
                            <li>
                                <p>
                                    <span>Salt:  </span>51df3b21ac453da53820hfcb7m</p>
                            </li>
                        </ul>
                    </div>
                    <p>Перед началом каждой игры <span>случайным образом</span>генерируются (32 случайных символа) и
                        число, на котором закончится игра.</p>
                    <br />
                        <p>Они складываются между собой и хешируются с помощью sha256, после чего этот хэш
                            отображается <span>до того как начнется игра</span>.</p>
                        <br />
                            <p>В конце игры можно увидеть соль, с помощью которой была произведена генерация, и
                                убедиться, что хэш не менялся и все совпадает</p>
                            <button className="popup__close">Проверить игру</button>
                </div>
            </div>

            <div className="popup popup-add-coins-pin-code">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Пин-код <sub>(пин код для удачи 1111 - 1111 - 1111)</sub>
                    </h2>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <form action="#">
                        <label
                            className="popup-add-coins-pin-code__input input-pincode">
                            <span>Пин-код пополнения:</span>
                            <input type="text" placeholder="XXXX - XXXX - XXXX" required minLength="12"/>
                        </label>
                        <button
                            onClick="openPopup('add-coins-pin-code-checking');setTimeout(()=&gt;{openPopupChecking('add-coins-pin-code', 'add-coins-pin-code-success', 'add-coins-pin-code-fail')},2000)"
                            disabled>Применить купон
                        </button>
                    </form>
                </div>
            </div>
            <div className="popup popup-add-coins-balance">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Пополнение баланса</h2>
                    <a className="back" href="#" onClick="openPopup('add-coins')">
                        <img src="images/arr-td.svg" alt="Arr" />
                            <span>Способы оплаты</span>
                    </a>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <ul className="balance__cost">
                        <li>
                            <button>$1</button>
                        </li>
                        <li>
                            <button>$5</button>
                        </li>
                        <li>
                            <button>$10</button>
                        </li>
                        <li>
                            <button>$20</button>
                        </li>
                        <li>
                            <button>$40</button>
                        </li>
                        <li>
                            <button>$60</button>
                        </li>
                    </ul>
                    <div className="balance__sum">
                        <p>Зачисление на баланс:</p>
                        <div className="sum">
                            <img src="images/header__coins.svg" alt="Ico" />
                                <span>800</span>
                        </div>
                    </div>
                    <button onClick="openPopup('add-coins-balance-linking')">Перейти к оплате</button>
                </div>
            </div>
            <div className="popup popup-add-coins-balance-linking">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Пополнение баланса</h2>
                    <p>Перенаправление..</p>
                </div>
            </div>
            <div className="popup popup-add-coins-pin-code-checking">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Пин-код</h2>
                    <div className="checking-code">
                        <span>Проверка кода</span>
                        <div className="load">
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup popup-add-coins-pin-code-success">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Пин-код</h2>
                    <p>Код успешно активирован!</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="code-success">
                        <div className="code-success__item">
                            <span>$10</span>
                        </div>
                        <div className="code-success__center">
                            <img src="images/green-check.svg" alt="Ico"/>
                        </div>
                        <div className="code-success__item">
                            <img src="images/header__coins.svg" alt="Coins" />
                                <span>800</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup popup-add-coins-pin-code-fail">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Пин-код</h2>
                    <p>Код не действителен,
                        <br/>следущая попытка через:</p>
                    <div className="code-fail">
                        <div className="code-fail__timer">5</div>
                    </div>
                </div>
            </div>
            <div className="popup popup-add-coins-skins">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Инвентарь Steam</h2>
                    <p>Выберите скины для пополнения</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="postamat__search">
                        <input type="text" placeholder="Поиск"/>
                            <button>
                                <img src="images/search.svg" alt="Search"/>
                            </button>
                    </div>
                    <form className="postamat__filter" action="#">
                        <input type="radio" checked name="filter" id="filterPrice"/>
                            <label className="filter__item filter__price" htmlFor="filterPrice">
                                <span>По цене</span>
                                <input type="checkbox" name="upDown"/>
                                    <img src="images/filter.svg" alt="filter"/>
                            </label>
                            <input type="radio" name="filter" id="filterCool"/>
                                <label className="filter__item filter__item_active filter__cool"
                                       htmlFor="filterCool">
                                    <span>По раритетности</span>
                                    <input type="checkbox" name="upDown"/>
                                        <img src="images/filter.svg" alt="filter"/>
                                </label>
                    </form>
                    <div className="skins__inner">
                        <div className="skins__block">
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                            <div className="skins__item">
                                <div className="clothes__cool clothes__cool_green">

                                </div>
                                <div className="item__check">
                                    <img src="images/green-check-sq.svg" alt="Photo"/>
                                </div>
                                <div className="item__photo">
                                    <img src="images/skin.png" alt="Photo"/>
                                </div>
                                <div className="item__price">
                                    <img src="images/header__coins.svg" alt="Photo" />
                                        <span>3000</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                        <div className="skins__price">
                            <p>Зачисление на баланс:</p>
                            <div className="price__block">
                                <span>$2.99</span>
                                <div className="ico">
                                    <img src="images/change-arr.svg" alt="Ico"/>
                                </div>
                                <div className="coins">
                                    <img src="images/header__coins.svg" alt="Ico" />
                                        <span>800</span>
                                </div>
                            </div>
                        </div>
                        <div className="skins__button">
                            <button className="grey">
                                <img src="images/reload.svg" alt="ico" />
                                    <span>Обновить</span>
                            </button>
                            <button>
                                <span>Пополнить скинами</span>
                            </button>
                        </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-waiting">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Трейд</h2>
                    <p>Ожидайте предложения от нашего бота:</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="popup-trade__bot">
                        <div className="bot__photo">
                            <img src="images/robot.png" alt="Photo"/>
                        </div>
                        <div className="bot__info">
                            <p>Михоелъ</p>
                            <div className="code">E24fvfns....ukhd742</div>
                        </div>
                    </div>
                    <div className="trade__buttons">
                        <button className="grey">
                            <span>Через браузер</span>
                        </button>
                        <button className="steam">
                            <span>Через Steam</span>
                            <img src="images/steam.svg" alt="Steam"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-hidden">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>
                        <span>Ошибка</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error" />
                            </div>
                    </h2>
                    <p>Ваш инвентарь в steam скрыт,
                        <br/>откройте его у себя в настройках</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="trade__buttons">
                        <button className="grey">
                            <span>Через браузер</span>
                        </button>
                        <button className="steam">
                            <span>Через Steam</span>
                            <img src="images/steam.svg" alt="Steam"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-link">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>
                        <span>Ошибка</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error" />
                            </div>
                    </h2>
                    <p>Вы не добавили трейд-ссылку в профиле</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="trade__buttons">
                        <button className="grey mini">
                            <span>К профилю</span>
                            <img src="images/arr-td.svg" alt="Arr"/>
                        </button>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-error-cancel">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>
                        <span>Ошибка</span>
                        <div className="img">
                            <img src="images/error-red.svg" alt="Error" />
                            </div>
                    </h2>
                    <p>Вы отменили трейд-предложение</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade popup-trade-good">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2 className="green">
                        <span>Отлично</span>
                        <div className="img">
                            <img src="images/green-check.svg" alt="Error" />
                            </div>
                    </h2>
                    <p>Баланс сайта пополнен</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                </div>
            </div>
            <div className="popup popup-pull">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Статус ботов</h2>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="popup-pull__block">
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">
                                    <div className="img">
                                        <img src="images/green-check.svg" alt="Ico"/>
                                    </div>
                                </div>
                                <button className="item__repeat">
                                    <img src="images/reload.svg" alt="Reload" />
                                        <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                            <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">
                                    <div className="load">
                                        <div className="load__line">

                                        </div>
                                        <div className="load__line">

                                        </div>
                                        <div className="load__line">

                                        </div>
                                    </div>
                                </div>
                                <button className="item__repeat">
                                    <img src="images/reload.svg" alt="Reload" />
                                        <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                            <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">
                                    <img src="images/status-error.svg" alt="Fail"/>
                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload" />
                                        <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload" />
                                        <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                            <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload" />
                                        <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                            <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload" />
                                        <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                            <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="popup-pull__item">
                            <div className="item__top">
                                <div className="item__photo">
                                    <img src="images/robot.png" alt="Robot"/>
                                </div>
                                <h3 className="item__name">Бот #6</h3>
                                <div className="item__status">

                                </div>
                                <button className="item__repeat item__repeat_active">
                                    <img src="images/reload.svg" alt="Reload" />
                                        <span>Повторить</span>
                                </button>
                                <button className="item__delete">
                                    <img src="images/cross.svg" alt="Delete"/>
                                </button>
                            </div>
                            <div className="item__bottom">
                                <ul className="item__skins">
                                    <li className="item__skin">
                                        <div className="clothes__cool clothes__cool_green">

                                        </div>
                                        <img src="images/skin.png" alt="Skin"/>
                                            <div className="item__count">2</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr />
                        <div className="popup-pull__buttons">
                            <button className="grey" onClick="openPopup('pull-search')">
                                <span>Через браузер</span>
                            </button>
                            <button className="steam">
                                <span>Через Steam</span>
                                <img src="images/steam.svg" alt="Steam"/>
                            </button>
                        </div>
                </div>
            </div>
            <div className="popup popup-pull-search">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Статус ботов</h2>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="popup-pull-search__text">
                        <p>Подбираем ботов</p>
                        <div className="load">
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                            <div className="load__line">

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade-link">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Трейд-ссылка</h2>
                    <p>Введите вашу трейд-ссылку Steam,
                        <br/>с ней можно пополнять баланс скинами</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <form action="#">
                        <input className="trade-link__input" type="text" required/>
                            <div className="trade-link__buttons">
                                <button
                                    onClick="if(document.querySelector('.popup-trade-link .trade-link__input').value.length &gt; 0) openPopup('trade-link-success')">Сохранить
                                </button>
                                <a href="#">Где ее взять?</a>
                            </div>
                    </form>
                </div>
            </div>
            <div className="popup popup-trade-link-success">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Трейд-ссылка</h2>
                    <p>У вас получилось!</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="success">
                        <div className="success__inner">
                            <img src="images/check-blue.svg" alt="Close" />
                                <span>АКТИВНО</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="popup popup-trade-link-change">
                <div className="popup__bgd" onClick={closePopup}>

                </div>
                <div className="popup__content">
                    <h2>Трейд-ссылка</h2>
                    <p>Введите вашу трейд-ссылку Steam,
                        <br/>с ней можно пополнять баланс скинами</p>
                    <div className="popup__cross popup__close" onClick={closePopup}>
                        <img src="images/cross.svg" alt="Close"/>
                    </div>
                    <div className="input">
                        <input className="trade-link__input" type="text" value="www.Старая трейд-ссылка.gg"/>
                            <img src="images/lock.svg" alt="Ico"/>
                    </div>
                    <div className="trade-link__buttons">
                        <button className="grey" onClick="openPopup('trade-link')">Изменить</button>
                        <a href="#">Где ее взять?</a>
                    </div>
                </div>
            </div>
        </>
);
};

export default AllPopups;