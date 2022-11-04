import React from 'react';

const RightsShopCartItem = ({listItems, listToCart, setListToCart, itemToDelete, setItemToDelete}) => {

    const deleteItem = function (e) {
        let th = e.target.closest('.cart__item')

        // th.classList.add('cart__item_deleted')
        // setTimeout(function () {

        let arr = []
        listToCart.map(it => {
            arr.push(it.listItems)
        })

        setItemToDelete(arr.indexOf(listItems))
        // console.log(arr.indexOf(listItems))
        if( arr.indexOf(listItems) > -1 ){

            setListToCart(listToCart)
        }
        // console.log(listToCart)


        // }, 300)
    }

    return (
        <div className="cart__item">
            <div className="clothes__cool clothes__cool_green">

            </div>
            <div className="item__photo">
                <img src={listItems.image} alt="Ico"/>
            </div>
            <div className="item__info">
                <div className="item__name">
                    {listItems.title}
                </div>
                <div className="item__price">
                    <img src="images/header__coins.svg" alt="Coins"/>
                    <span>
                        {listItems.cost}
                    </span>
                </div>
            </div>
            <div
                className="item__delete"
                onClick={deleteItem}
            >
                <img src="images/cross.svg" alt="Delete"/>
            </div>
        </div>
    );
};

export default RightsShopCartItem;