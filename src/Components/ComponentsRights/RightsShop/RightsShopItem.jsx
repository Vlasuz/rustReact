import React from 'react';

const RightsShopItem = (props) => {


    const addProd = function () {
        props.setListToCart(oldArr => [...oldArr, props.item])
    }
    const addItem = function (e) {
        let a = false;

        if (props.listToCart.length > 0) {

            props.listToCart.map(item => {

                if (item.id === props.item.id) {
                    a = true;
                }

            })

            if (a === false) {
                addProd()
                props.states.setSumCoinsInShop(old => old + props.item.cost)
            }

        } else {
            addProd()
            props.states.setSumCoinsInShop(old => old + props.item.cost)
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
            <div className="item__count"> {props.item.count} </div>
            <div className={
                props.item.rarity === 1 ? 'item__cool clothes__cool_green' :
                    props.item.rarity === 2 ? 'item__cool clothes__cool_blue' :
                        props.item.rarity === 3 ? 'item__cool clothes__cool_red' :
                            'item__cool clothes__cool_grey'
            }>

            </div>
            <div className="item__photo">
                <img src={props.item.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>
                    {
                        props.item.cost
                    }
                </span>
            </div>
        </div>
    );
};

export default RightsShopItem;