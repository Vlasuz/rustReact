import React from 'react';

const RightsShopCartItem = (props) => {

    const removeItem = (e) => {
        props.setSumCoinsInShop(old => old - +e.target.closest('.cart__item').querySelector('.item__price span').textContent)
        props.listToCart.map(item => {
            let checkItem = item === props.listItems;
            if (checkItem) {
                props.setListToCart(current => current.filter(employee => {
                    return employee.id !== item.id
                }) );
            }
        })
    }

    return (
        <div className="cart__item">
            <div className="clothes__cool clothes__cool_green">

            </div>
            <div className="item__photo">
                <img src={props.listItems.image} alt="Ico"/>
            </div>
            <div className="item__info">
                <div className="item__name">
                    {props.listItems.title}
                </div>
                <div className="item__price">
                    <img src="images/header__coins.svg" alt="Coins"/>
                    <span>
                        {props.listItems.cost}
                    </span>
                </div>
            </div>
            <div
                className="item__delete"
                onClick={(e) => removeItem(e)}
            >
                <img src="images/cross.svg" alt="Delete"/>
            </div>
        </div>
    );
};

export default RightsShopCartItem;