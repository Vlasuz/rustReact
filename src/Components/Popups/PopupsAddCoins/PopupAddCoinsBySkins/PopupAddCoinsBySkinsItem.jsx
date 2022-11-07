import React from 'react';

const PopupAddCoinsBySkinsItem = () => {
    return (
        <div
            className="skins__item"
            onClick={e => e.target.closest('.skins__item').classList.toggle('skins__item_active')}
        >
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
    );
};

export default PopupAddCoinsBySkinsItem;