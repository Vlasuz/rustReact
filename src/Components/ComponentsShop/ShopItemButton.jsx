import React from 'react';

const ShopItemButton = () => {
    return (
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
    );
};

export default ShopItemButton;