import React, {useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";

const PopupAddCoinsBySkins = () => {

    return (
        <div className="popup popup-add-coins-skins">
            <PopupCloseBackground />
            <div className="popup__content">
                <h2>Инвентарь Steam</h2>
                <p>Выберите скины для пополнения</p>
                <PopupCloseCross />
                <div className="postamat__search">
                    <input type="text" placeholder="Поиск"/>
                    <button>
                        <img src="images/search.svg" alt="Search"/>
                    </button>
                </div>
                <form
                    className="postamat__filter"
                    action="#"
                    onSubmit={e => e.preventDefault()}
                >
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
    );
};

export default PopupAddCoinsBySkins;