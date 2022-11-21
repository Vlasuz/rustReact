import React from 'react';

const RightsShopItem = ({listItems, setListToCart, listToCart}) => {


    const addProd = function () {
        setListToCart(oldArr => [...oldArr, {listItems}])
    }
    const addItem = function (e) {

        let a = false;

        if (listToCart.length > 0) {

            listToCart.map(item => {

                if (item.listItems === listItems) {
                    a = true
                }

            })

            if( a == false ) {
                addProd()
            }

        } else {
            setListToCart(oldArr => [...oldArr, {listItems}])
        }

    }

    return (
        <div
            className="postamat__item"
            onClick={(e) => addItem(e)}
        >
            <div className="item__buy">
                <img src="images/basket.svg" alt="Basket"/>
            </div>
            <div className="item__count"> {listItems.count} </div>
            <div className={"item__cool clothes__cool_" + listItems.rating}>

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