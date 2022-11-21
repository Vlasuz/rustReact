import React, {useState} from 'react';
import RightsShopCart from "./RightsShopCart";
import RightsShopBottomFull from "./RightsShopBottomFull";
import RightsShopBottomEmpty from "./RightsShopBottomEmpty";
import RightsShopList from "./RightsShopList";
import RightsShopTop from "./RightsShopTop";
import RightsItemStorage from "../RightsItemStorage";
import RightsShopItem from "./RightsShopItem";
import RightsFilterForm from "../RightsFilterForm";

const RightsShop = (props) => {

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

    let ratingColor = function (item) {

        switch (item) {
            case 'green':
                return 'clothes__cool_green';
                break;
            case 'red':
                return 'clothes__cool_red';
                break;
            case 'blue':
                return 'clothes__cool_blue';
                break;
            default:
                return 'clothes__cool_grey';
                break;

        }
    }
    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )
    const sortableItem = () => {
        if (sortArray.search && sortArray.filterRadio) {
            return props.dataItems
                .filter(item => item.title.includes(sortArray.search))
                .sort((a, b) => (!sortArray.filterCheckbox) ?
                    ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                    ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
                .map((item, itemNum) =>
                    <RightsShopItem
                        listItems={listItems}
                        setListItems={setListItems}
                        key={itemNum}
                        cools={ratingColor(item.rating)}
                        listItems={item}
                        setIsAddCart={props.setIsAddCart}
                        setListToCart={setListToCart}
                        listToCart={listToCart}
                    />
                )

        } else if (sortArray.filterRadio) {
            return props.dataItems
                .sort((a, b) => (!sortArray.filterCheckbox) ?
                    ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                    ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
                .map((item, itemNum) =>
                    <RightsShopItem
                        listItems={listItems}
                        setListItems={setListItems}
                        key={itemNum}
                        cools={ratingColor(item.rating)}
                        listItems={item}
                        setIsAddCart={props.setIsAddCart}
                        setListToCart={setListToCart}
                        listToCart={listToCart}
                    />
                )
        } else if (sortArray.search) {
            return props.dataItems.filter(item => item.title.includes(sortArray.search)).map((item, itemNum) =>
                <RightsShopItem
                    listItems={listItems}
                    setListItems={setListItems}
                    key={itemNum}
                    cools={ratingColor(item.rating)}
                    listItems={item}
                    setIsAddCart={props.setIsAddCart}
                    setListToCart={setListToCart}
                    listToCart={listToCart}
                />
            )

        } else {
            return props.dataItems.map((item, itemNum) =>
                <RightsShopItem
                    listItems={listItems}
                    setListItems={setListItems}
                    key={itemNum}
                    cools={ratingColor(item.rating)}
                    listItems={item}
                    setIsAddCart={props.setIsAddCart}
                    setListToCart={setListToCart}
                    listToCart={listToCart}
                />
            )
        }
    }

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

                {/*<RightsShopTop/>*/}
                <RightsFilterForm
                    sortArray={sortArray}
                    setSortArray={setSortArray}
                />

                <hr/>


                <div className="postamat__block">

                    {
                        sortableItem()
                    }


                </div>

                {listToCart.length ? <RightsShopBottomFull listToCart={listToCart} setIsOpenCart={setIsOpenCart}/> :
                    <RightsShopBottomEmpty/>}

            </div>
        </>
    );
};

export default RightsShop;