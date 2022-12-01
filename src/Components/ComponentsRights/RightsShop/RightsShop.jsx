import React, {useState} from 'react';
import RightsShopCart from "./RightsShopCart";
import RightsShopBottomFull from "./RightsShopBottomFull";
import RightsShopBottomEmpty from "./RightsShopBottomEmpty";
import RightsShopItem from "./RightsShopItem";
import RightsFilterForm from "../RightsFilterForm";
import States from "../../../States";

const RightsShop = (props) => {

    const [listToCart, setListToCart] = useState([])
    const [isOpenCart, setIsOpenCart] = useState(false)

    const states = States();

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
    // const sortableItem = () => {
    //     if (sortArray.search && sortArray.filterRadio) {
    //         return props.states.dataItems
    //             .filter(item => item.title.includes(sortArray.search))
    //             .sort((a, b) => (!sortArray.filterCheckbox) ?
    //                 ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
    //                 ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
    //             .map((item, itemNum) =>
    //                 <RightsShopItem
    //                     listItems={item}
    //                     states={states}
    //                     key={itemNum}
    //                     cools={ratingColor(item.rating)}
    //                     setIsAddCart={states.setIsAddCart}
    //                     setListToCart={setListToCart}
    //                     listToCart={listToCart}
    //                 />
    //             )
    //
    //     } else if (sortArray.filterRadio) {
    //         return props.states.dataItems
    //             .sort((a, b) => (!sortArray.filterCheckbox) ?
    //                 ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
    //                 ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
    //             .map((item, itemNum) =>
    //                 <RightsShopItem
    //                     listItems={item}
    //                     states={states}
    //                     key={itemNum}
    //                     cools={ratingColor(item.rating)}
    //                     setIsAddCart={states.setIsAddCart}
    //                     setListToCart={setListToCart}
    //                     listToCart={listToCart}
    //                 />
    //             )
    //     } else if (sortArray.search) {
    //         return props.states.dataItems.filter(item => item.title.includes(sortArray.search)).map((item, itemNum) =>
    //             <RightsShopItem
    //                 listItems={item}
    //                 states={states}
    //                 key={itemNum}
    //                 cools={ratingColor(item.rating)}
    //                 setIsAddCart={states.setIsAddCart}
    //                 setListToCart={setListToCart}
    //                 listToCart={listToCart}
    //             />
    //         )
    //
    //     } else {
    //         return props.states.dataItems.map((item, itemNum) =>
    //             <RightsShopItem
    //                 listItems={item}
    //                 states={states}
    //                 key={itemNum}
    //                 cools={ratingColor(item.rating)}
    //                 setIsAddCart={states.setIsAddCart}
    //                 setListToCart={setListToCart}
    //                 listToCart={listToCart}
    //             />
    //         )
    //     }
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
                listToCart={listToCart}
                isOpenCart={isOpenCart}
                setIsOpenCart={setIsOpenCart}
                setListToCart={setListToCart}
                states={states}
                globalStates={props.states}
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
                        props.states.dataItems
                            ?.filter(item => item.title.includes(sortArray.search))
                            ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                                ((sortArray.filterRadio === "filterPrice") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice" ? b.cost : b.rarity) :
                                ((sortArray.filterRadio === "filterPrice") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice" ? a.cost : a.rarity))
                            .map((item, itemNum) =>
                                <RightsShopItem
                                    item={item}
                                    states={states}
                                    key={itemNum}
                                    setIsAddCart={states.setIsAddCart}
                                    setListToCart={setListToCart}
                                    listToCart={listToCart}
                                />
                            )
                    }


                </div>

                {listToCart.length ? <RightsShopBottomFull states={states} listToCart={listToCart} setIsOpenCart={setIsOpenCart}/> :
                    <RightsShopBottomEmpty/>}

            </div>
        </>
    );
};

export default RightsShop;