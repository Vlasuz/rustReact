import React from 'react';

const RightsShopItem = ({listItems, setListToCart}) => {
    return (
        <div
            className="postamat__item"
            onClick={() => setListToCart(oldArr => [...oldArr, {listItems}])}
        >
            <div className="item__buy">
                <img src="images/basket.svg" alt="Basket"/>
            </div>
            <div className="item__count">
                {
                    listItems.count
                }
            </div>
            <div className={"item__cool clothes__cool_" + listItems.cool}>

            </div>
            <div className="item__photo">
                <img src={listItems.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                    {
                        listItems.cost
                    }
                </span>
            </div>
        </div>
    );
};

export default RightsShopItem;