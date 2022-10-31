import React from 'react';

const RightsShop = () => {
    return (
        <>
            <div className="section-right__cart-bought">
                <div className="text">
                    <h3>
                        <span>Отлично</span>
                        <div className="img">
                            <img src="images/green-check.svg" alt="Ico"/>
                        </div>
                    </h3>
                    <p>Предметы куплены</p>
                </div>
                <button className="cart-bought__close">Закрыть</button>
            </div>
            <div className="section-right__cart">
                <h2>Корзина</h2>
                <div className="cart__list">
                    <div className="cart__item">
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Ico"/>
                        </div>
                        <div className="item__info">
                            <div className="item__name">Cucumber Eoka</div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coins"/>
                                <span>180</span>
                            </div>
                        </div>
                        <div className="item__delete">
                            <img src="images/cross.svg" alt="Delete"/>
                        </div>
                    </div>
                    <div className="cart__item">
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Ico"/>
                        </div>
                        <div className="item__info">
                            <div className="item__name">Cucumber Eoka</div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coins"/>
                                <span>180</span>
                            </div>
                        </div>
                        <div className="item__delete">
                            <img src="images/cross.svg" alt="Delete"/>
                        </div>
                    </div>
                    <div className="cart__item">
                        <div className="clothes__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Ico"/>
                        </div>
                        <div className="item__info">
                            <div className="item__name">Cucumber Eoka</div>
                            <div className="item__price">
                                <img src="images/header__coins.svg" alt="Coins"/>
                                <span>180</span>
                            </div>
                        </div>
                        <div className="item__delete">
                            <img src="images/cross.svg" alt="Delete"/>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <button className="buttons__back">
                        <img src="images/arr-td.svg" alt="Ico"/>
                        <span>Назад</span>
                    </button>
                    <button className="buttons__buy">
                        <span>Купить</span>
                    </button>
                </div>
            </div>
            <div className="postamat">
                <div className="postamat__search">
                    <input type="text" placeholder="Поиск"/>
                    <button>
                        <img src="images/search.svg" alt="Search"/>
                    </button>
                </div>
                <div className="postamat__range">
                    <input type="range"/>
                    <div className="range__text">
                        <img src="images/header__coins.svg" alt="Coin"/>
                        <p>84 — 6390</p>
                    </div>
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
                    <button className="filter__reload">
                        <img src="images/reload.svg" alt="filter"/>
                        <span>Обновить</span>
                    </button>
                </form>
                <hr/>
                <div className="postamat__block">
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                    <div className="postamat__item">
                        <div className="item__buy">
                            <img src="images/basket.svg" alt="Basket"/>
                        </div>
                        <div className="item__count">2</div>
                        <div className="item__cool clothes__cool_green">

                        </div>
                        <div className="item__photo">
                            <img src="images/skin.png" alt="Skin"/>
                        </div>
                        <div className="item__price">
                            <img src="images/header__coins.svg" alt="Ico"/>
                            <span>3000</span>
                        </div>
                    </div>
                </div>
                <div className="postamat__cart postamat__cart_empty">
                    <img src="images/cart.svg" alt="cart"/>
                    <span>Корзина пуста</span>
                </div>
                <div className="postamat__cart postamat__cart_show postamat__cart_full">
                    <span>4 предмета</span>
                    <div className="sum">
                        <img src="images/header__coins.svg" alt="Coins"/>
                        <span>3000</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RightsShop;