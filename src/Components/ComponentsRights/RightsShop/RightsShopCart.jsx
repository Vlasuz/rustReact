import React, {useState} from 'react';
import RightsShopCartItem from "./RightsShopCartItem";
import RightsShopItem from "./RightsShopItem";

const RightsShopCart = ({isOpenCart, setIsOpenCart, listToCart, setListToCart}) => {

    const [itemToDelete, setItemToDelete] = useState(-1)

    // if( itemToDelete > -1 ){
    //     listToCart.splice(itemToDelete, 1)
    // }
    // console.log(listToCart)

    return (
        <div
            className={isOpenCart ? "section-right__cart section-right__cart_active" : "section-right__cart"}
        >
            <h2>Корзина</h2>
            <div className="cart__list">
                {
                    listToCart.map((item, itemNum) =>
                        <RightsShopCartItem
                            idItem={itemNum}
                            key={item.listItems.id}
                            setListToCart={setListToCart}
                            listToCart={listToCart}
                            listItems={item.listItems}
                            itemToDelete={itemToDelete}
                            setItemToDelete={setItemToDelete}
                        />
                    )
                }
            </div>
            <div className="buttons">
                <button
                    className="buttons__back"
                    onClick={() => setIsOpenCart(prev => !prev)}
                >
                    <img src="images/arr-td.svg" alt="Ico"/>
                    <span>Назад</span>
                </button>
                <button className="buttons__buy">
                    <span>Купить</span>
                </button>
            </div>
        </div>
    );
};

export default RightsShopCart;