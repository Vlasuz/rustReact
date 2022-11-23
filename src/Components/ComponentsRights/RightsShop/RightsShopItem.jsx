import React from 'react';

const RightsShopItem = (props) => {


    const addProd = function () {
        props.setListToCart(oldArr => [...oldArr, props.listItems])
    }
    const addItem = function (e) {
        let a = false;
        // props.states.setSumCoinsInShop(0)

        if (props.listToCart.length > 0) {

            props.listToCart.map(item => {

                if (item.id === props.listItems.id) {
                    a = true;
                }

            })

            if (a === false) {
                addProd()
                props.states.setSumCoinsInShop(old => old + props.listItems.cost)
            }

        } else {
            addProd()
            props.states.setSumCoinsInShop(old => old + props.listItems.cost)
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
            <div className="item__count"> {props.listItems.count} </div>
            <div className={"item__cool clothes__cool_" + props.listItems.rating}>

            </div>
            <div className="item__photo">
                <img src={props.listItems.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                    {
                        props.listItems.cost
                    }
                </span>
            </div>
        </div>
    );
};

export default RightsShopItem;