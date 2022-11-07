import React, {useState} from 'react';
import RightsShopCart from "./RightsShopCart";
import RightsShopBottomFull from "./RightsShopBottomFull";
import RightsShopBottomEmpty from "./RightsShopBottomEmpty";
import RightsShopList from "./RightsShopList";
import RightsShopTop from "./RightsShopTop";

const RightsShop = () => {

    const [listToCart, setListToCart] = useState([])
    const [isOpenCart, setIsOpenCart] = useState(false)
    const [listItems, setListItems] = useState([
        {
            id: 1,
            title: "Any item",
            count: 2,
            image: "images/skin.png",
            cost: 3000,
            cool: 'green',
        },
        {
            id: 2,
            title: "Any item",
            count: 1,
            image: "images/skin.png",
            cost: 1000,
            cool: 'red',
        },
        {
            id: 3,
            title: "Any item",
            count: 2,
            image: "images/skin.png",
            cost: 10000,
            cool: 'blue',
        },
    ])

    // document.querySelector('.cart-bought__close').onclick = function () {
    //     document.querySelector('.section-right__cart').classList.remove('section-right__cart_active')
    //     document.querySelector('.section-right__cart-bought').classList.remove('section-right__cart_active')
    // }

    return (
        <>
            <div className="section-right__cart-bought">
                <div className="text">
                    <h3>
                        <span>Отлично</span>
                        <div className="img">
                            <img src="images/green-check.svg" alt="Ico"/>
                        </div>
                    </h3>
                    <p>Предметы куплены</p>
                </div>
                <button className="cart-bought__close">Закрыть</button>
            </div>
            <RightsShopCart
                listItems={listItems}
                listToCart={listToCart}
                isOpenCart={isOpenCart}
                setIsOpenCart={setIsOpenCart}
                setListToCart={setListToCart}
            />

            <div className="postamat">

                <RightsShopTop/>

                <hr/>

                <RightsShopList
                    listItems={listItems}
                    setListToCart={setListToCart}
                    listToCart={listToCart}
                />
                {listToCart.length ? <RightsShopBottomFull listToCart={listToCart} setIsOpenCart={setIsOpenCart}/> : <RightsShopBottomEmpty/>}

            </div>
        </>
    );
};

export default RightsShop;