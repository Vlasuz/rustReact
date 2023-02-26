import React, {useEffect, useState} from 'react';
import RightsShopCartItem from "./RightsShopCartItem";
import {useDispatch, useSelector} from "react-redux";
import {shopList, shopListAdd, shopListRemove, userInventoryAdd} from "../../../Redux/actions";
import axios from "axios";
import {userBalanceAddCoins, userBalanceSetCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {Trans, useTranslation} from "react-i18next";
import {getCookie} from "../../../Hooks/GetCookies";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";

const RightsShopCart = (props) => {

    const listAdded = useSelector(state => state.reducerShopListAdded)
    const dispatch = useDispatch()
    const balance = useSelector(state => state.reducerUserBalance.balance)

    const buyItemsButton = (e) => {
        dispatch(userInventoryAdd(listAdded.list))
        dispatch(shopListRemove('all'))

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+'/api/basket/buy').then(res => {
            dispatch(userBalanceSetCoins(res.data.balance))
            props.setIsOpenCart(false)
            props.setIsOpenThanks(true)


            axios.get("https://"+GlobalLink()+'/api/items/shop/').then(res => {
                dispatch(shopList(res.data))
            })
        })

    }

    useEffect(() => {
        axios.get("https://"+GlobalLink()+'/api/basket/').then(res => dispatch(shopListAdd(res.data)))
    }, [])

    return (
        <div className={props.isOpenCart ? "section-right__cart section-right__cart_active" : "section-right__cart"}>
            <h2>
                <Translate>cart</Translate>
            </h2>
            <div className="cart__list">
                {
                    listAdded.list.map(item =>
                        <RightsShopCartItem
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </div>
            <div className="buttons">
                <button
                    className="buttons__back"
                    onClick={() => props.setIsOpenCart(prev => !prev)}
                >
                    <img src="../images/arr-td.svg" alt="Ico"/>
                    <span>
                        <Translate>back</Translate>
                    </span>
                </button>
                {
                    (!!listAdded.list.length && balance >= listAdded.summary) ?
                        <button
                            className={"buttons__buy"}
                            onClick={buyItemsButton}>
                            <span>
                                <Translate>buy</Translate>
                            </span>
                        </button> :
                        <button className={"buttons__back"} disabled>
                            <span>
                                <Translate>buy</Translate>
                            </span>
                        </button>
                }
            </div>
        </div>
    );
};

export default RightsShopCart;