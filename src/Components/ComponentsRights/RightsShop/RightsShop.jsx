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

const RightsShop = (props) => {
    const {t} = useTranslation();

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
    const [isAdded, seTisAdded] = useState(false)
    const [isNoticeActive, setIsNoticeActive] = useState(false)

    const dispatch = useDispatch()
    const shopListReducer = useSelector(state => state.reducerShopList.list)
    const shopAddedlist = useSelector(state => state.reducerShopListAdded.list)
    const userData = useSelector(state => state.reducerUserData.data)
    useEffect(() => {

        axios.get('https://rust.onefut.net/api/items/shop/').then(res => {
            dispatch(shopList(res.data))
        })

    }, [])

    useEffect(() => {

        if(isAdded) {
            setIsNoticeActive(true)
            setTimeout(() => {
                setIsNoticeActive(false)
            }, 1000)
        }

    }, [isAdded])

    useEffect(() => {

        if(!shopAddedlist.length) {
            setIsOpenCart(false)
        }

    }, [shopAddedlist])

    return (
        <>
            <div className={"section-right__cart-bought" + (isOpenThanks ? " section-right__cart-bought_active" : "")}>
                <div className="text">
                    <h3>
                        <span>
                            <Trans t={t}>cool</Trans>
                        </span>
                        <div className="img">
                            <img src="../images/green-check.svg" alt="Ico"/>
                        </div>
                    </h3>
                    <p>
                        <Trans t={t}>items_bought</Trans>
                    </p>
                </div>
                <button className="cart-bought__close" onClick={e => setIsOpenThanks(false)}>
                    <Trans t={t}>close</Trans>
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
                            ?.filter(item => item.price.value <= sortArray.rangePrice.max && item.price.value >= sortArray.rangePrice.min)
                            ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                                ((sortArray.filterRadio === "filterPrice") ? a.price.value : a.rarity.color) - ((sortArray.filterRadio) === "filterPrice" ? b.price.value : b.rarity.color) :
                                ((sortArray.filterRadio === "filterPrice") ? b.price.value : b.rarity.color) - ((sortArray.filterRadio) === "filterPrice" ? a.price.value : a.rarity.color))
                            .map(item =>
                                <RightsShopItem
                                    key={item.id}
                                    data={item}
                                    seTisAdded={seTisAdded}
                                />
                            )
                    }


                </div>

                {!!Object.keys(userData).length && <>
                    {
                        shopAddedlist.length ?
                            <RightsShopBottomFull setIsOpenCart={setIsOpenCart}/> :
                            <RightsShopBottomEmpty/>
                    }
                </>}

                <div className={"section-right__notice" + (isNoticeActive ? " section-right__notice_active" : "")}>
                    <div className={"notice__item notice__add-cart" + (isNoticeActive ? " notice__item_active" : "")}>
                        <span>
                            <Trans t={t}>added_to_cart</Trans>
                        </span>
                        <img src="../images/green-check.svg" alt="Check"/>
                    </div>
                </div>


            </div>
        </>
    );
};

export default RightsShop;