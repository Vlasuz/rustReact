import React, {useState} from 'react';
import RightsShopCartItem from "./RightsShopCartItem";

const RightsShopCart = (props) => {

    const [itemToDelete, setItemToDelete] = useState(-1)


    const buyItemsButton = (e) => {

        // console.log(e.target)
        // console.log(e.target.closest('button'))

        if (props.globalStates.coins >= props.states.sumCoinsInShop) {
            e.target.closest('button').disabled = false;
            e.target.closest('button').classList.add('buttons__buy')
            e.target.closest('button').classList.remove('buttons__back')
            props.globalStates.setCoins(prev => prev - props.states.sumCoinsInShop)
            props.states.setSumCoinsInShop(0)
            props.setListToCart([])
        } else {
            e.target.closest('button').disabled = true;
            e.target.closest('button').classList.remove('buttons__buy')
            e.target.closest('button').classList.add('buttons__back')
        }
    }

    return (
        <div
            className={props.isOpenCart ? "section-right__cart section-right__cart_active" : "section-right__cart"}
        >
            <h2>Корзина</h2>
            <div className="cart__list">
                {
                    props.listToCart.map((item, itemNum) =>
                        <RightsShopCartItem
                            idItem={itemNum}
                            key={item.id}
                            listItems={item}
                            listToCart={props.listToCart}
                            setListToCart={props.setListToCart}
                            itemToDelete={itemToDelete}
                            setItemToDelete={setItemToDelete}
                            setSumCoinsInShop={props.states.setSumCoinsInShop}
                        />
                    )
                }
            </div>
            <div className="buttons">
                <button
                    className="buttons__back"
                    onClick={() => props.setIsOpenCart(prev => !prev)}
                >
                    <img src="images/arr-td.svg" alt="Ico"/>
                    <span>Назад</span>
                </button>
                <button
                    className="buttons__buy"
                    onClick={e => buyItemsButton(e)}
                >
                    <span>Купить</span>
                </button>
            </div>
        </div>
    );
};

export default RightsShopCart;