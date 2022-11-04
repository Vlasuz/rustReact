import React from 'react';

const RightsShopBottomFull = ({setIsOpenCart, listToCart}) => {

    const sumCoins = function () {
        let coinssum = 0;
        listToCart.map(coins => {
            coinssum += coins.listItems.cost
        })
        return coinssum
    }

    return (
        <div
            className="postamat__cart postamat__cart_show postamat__cart_full"
            onClick={() => setIsOpenCart(prev => !prev)}
        >
            <span>
                {listToCart.length} предмета
            </span>
            <div className="sum">
                <img src="images/header__coins.svg" alt="Coins"/>
                <span>
                    {sumCoins()}
                </span>
            </div>
        </div>
    );
};

export default RightsShopBottomFull;