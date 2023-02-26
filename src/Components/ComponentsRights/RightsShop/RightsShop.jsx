import React, {useEffect, useState} from 'react';
import RightsShopCart from "./RightsShopCart";
import RightsShopBottomFull from "./RightsShopBottomFull";
import RightsShopBottomEmpty from "./RightsShopBottomEmpty";
import RightsShopItem from "./RightsShopItem";
import RightsFilterForm from "../RightsFilterForm";
import States from "../../../States";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {reducerShopList} from "../../../Redux/Reducers/reducerShopList";
import {shopList} from "../../../Redux/actions";
import {Trans, useTranslation} from "react-i18next";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";

const RightsShop = (props) => {

    const [isOpenCart, setIsOpenCart] = useState(false)
    const [isOpenThanks, setIsOpenThanks] = useState(false)
    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
            rangePrice: 0,
        }
    )

    const dispatch = useDispatch()
    const shopListReducer = useSelector(state => state.reducerShopList.list)
    const shopAddedlist = useSelector(state => state.reducerShopListAdded.list)
    const userData = useSelector(state => state.reducerUserData.data)
    useEffect(() => {

        axios.get("https://" + GlobalLink() + '/api/items/shop/').then(res => {
            dispatch(shopList(res.data))
        })

    }, [])

    useEffect(() => {

        if (!shopAddedlist.length) {
            setIsOpenCart(false)
        }

    }, [shopAddedlist])

    return (
        <>
            <div className={"section-right__cart-bought" + (isOpenThanks ? " section-right__cart-bought_active" : "")}>
                <div className="text">
                    <h3>
                        <span>
                            <Translate>cool</Translate>
                        </span>
                        <div className="img">
                            <img src="../images/green-check.svg" alt="Ico"/>
                        </div>
                    </h3>
                    <p>
                        <Translate>items_bought</Translate>
                    </p>
                </div>
                <button className="cart-bought__close" onClick={e => setIsOpenThanks(false)}>
                    <Translate>close</Translate>
                </button>
            </div>


            {<RightsShopCart
                isOpenCart={isOpenCart}
                setIsOpenCart={setIsOpenCart}
                setIsOpenThanks={setIsOpenThanks}
            />}

            <div className="postamat">

                <RightsFilterForm
                    sortArray={sortArray}
                    setSortArray={setSortArray}
                />

                <hr/>


                <div className="postamat__block">

                    {
                        shopListReducer
                            ?.filter(item => item.title.toLowerCase().includes(sortArray.search.toLowerCase()))
                            ?.filter(item => item.price.value <= sortArray?.rangePrice?.max && item.price.value >= sortArray?.rangePrice?.min)
                            ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                                ((sortArray.filterRadio === "filterPrice") ? a.price.value : a.rarity.color) - ((sortArray.filterRadio) === "filterPrice" ? b.price.value : b.rarity.color) :
                                ((sortArray.filterRadio === "filterPrice") ? b.price.value : b.rarity.color) - ((sortArray.filterRadio) === "filterPrice" ? a.price.value : a.rarity.color))
                            .map(item =>
                                <RightsShopItem
                                    key={item.id}
                                    data={item}
                                />
                            )
                    }


                </div>

                {
                    shopAddedlist.length ?
                        <RightsShopBottomFull setIsOpenCart={setIsOpenCart}/> :
                        <RightsShopBottomEmpty/>
                }


            </div>
        </>
    );
};

export default RightsShop;