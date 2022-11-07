import React from 'react';

const ShopItemButton = ({setIsBought, isBought}) => {
    return (
        <div className="item__buy">
            {!isBought &&
                <>
                    <button className="buy__price">
                        <img src="images/header__coins.svg" alt="Skin"/>
                        <span>3000</span>
                        <div className="sale">-50%</div>
                    </button>
                    <button
                        className="buy__buy"
                        onClick={() => setIsBought(true)}
                    >
                        <span>Купить</span>
                    </button>
                </>
            }
            {isBought &&
                <button
                    className="buy__set"
                    onClick={e => e.target.closest('.skins__item').classList.toggle('skins__item_active')}
                >
                    <span>Одеть</span>
                </button>
            }
        </div>
    );
};

export default ShopItemButton;