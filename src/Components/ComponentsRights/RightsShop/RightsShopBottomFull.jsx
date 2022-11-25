import React from 'react';

const RightsShopBottomFull = (props) => {

    return (
        <div
            className="postamat__cart postamat__cart_show postamat__cart_full"
            onClick={() => props.setIsOpenCart(prev => !prev)}
        >
            <span>
                {props.listToCart.length} предмета
            </span>
            <div className="sum">
                <img src="images/header__coins.svg" alt="Coins"/>
                <span>
                    {props.states.sumCoinsInShop}
                </span>
            </div>
        </div>
    );
};

export default RightsShopBottomFull;