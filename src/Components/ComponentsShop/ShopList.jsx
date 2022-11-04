import React from 'react';
import ShopItem from "./ShopItem";

const ShopList = () => {
    return (
        <div className="skins__block">
            <ShopItem />
            <div className="skins__item">
                <div className="item__check">
                    <img src="images/green-check.svg" alt="Check"/>
                </div>
                <h2>Буренка</h2>
                <p>Новичок</p>
                <div className="item__skin">
                    <img src="images/skin.png" alt="Skin"/>
                </div>
                <div className="item__buy item__buy_bought">
                    <button className="buy__price">
                        <img src="images/header__coins.svg" alt="Skin"/>
                        <span>3000</span>
                        <div className="sale">-50%</div>
                    </button>
                    <button className="buy__buy">
                        <span>Купить</span>
                    </button>
                    <button className="buy__set">
                        <span>Одеть</span>
                    </button>
                </div>
            </div>
            <div className="skins__item">
                <div className="item__check">
                    <img src="images/green-check.svg" alt="Check"/>
                </div>
                <h2>Буренка</h2>
                <p>Новичок</p>
                <div className="item__skin">
                    <img src="images/skin.png" alt="Skin"/>
                </div>
                <div className="item__buy">
                    <button className="buy__price">
                        <img src="images/header__coins.svg" alt="Skin"/>
                        <span>3000</span>
                        <div className="sale">-50%</div>
                    </button>
                    <button className="buy__buy">
                        <span>Купить</span>
                    </button>
                    <button className="buy__set">
                        <span>Одеть</span>
                    </button>
                </div>
            </div>
            <div className="skins__item">
                <div className="item__check">
                    <img src="images/green-check.svg" alt="Check"/>
                </div>
                <h2>Буренка</h2>
                <p>Новичок</p>
                <div className="item__skin">
                    <img src="images/skin.png" alt="Skin"/>
                </div>
                <div className="item__buy item__buy_bought">
                    <button className="buy__price">
                        <img src="images/header__coins.svg" alt="Skin"/>
                        <span>3000</span>
                        <div className="sale">-50%</div>
                    </button>
                    <button className="buy__buy">
                        <span>Купить</span>
                    </button>
                    <button className="buy__set">
                        <span>Одеть</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShopList;