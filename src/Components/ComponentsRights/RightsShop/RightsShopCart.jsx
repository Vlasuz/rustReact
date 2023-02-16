import React, {useEffect, useState} from 'react';
import RightsShopCartItem from "./RightsShopCartItem";
import {useDispatch, useSelector} from "react-redux";
import {shopList, shopListAdd, shopListRemove, userInventoryAdd} from "../../../Redux/actions";
import axios from "axios";
import {userBalanceAddCoins, userBalanceSetCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {Trans, useTranslation} from "react-i18next";

const RightsShopCart = (props) => {
    const {t} = useTranslation();

    const listAdded = useSelector(state => state.reducerShopListAdded)
    const dispatch = useDispatch()
    const balance = useSelector(state => state.reducerUserBalance.balance)

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const buyItemsButton = (e) => {
        dispatch(userInventoryAdd(listAdded.list))
        dispatch(shopListRemove('all'))

        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post('https://rust.onefut.net/api/basket/buy').then(res => {
            dispatch(userBalanceSetCoins(res.data.balance))
            props.setIsOpenCart(false)
            props.setIsOpenThanks(true)


            axios.get('https://rust.onefut.net/api/items/shop/').then(res => {
                dispatch(shopList(res.data))
            })
        })

    }

    useEffect(() => {
        axios.get('https://rust.onefut.net/api/basket/').then(res => dispatch(shopListAdd(res.data)))
    }, [])

    return (
        <div className={props.isOpenCart ? "section-right__cart section-right__cart_active" : "section-right__cart"}>
            <h2>
                <Trans t={t}>cart</Trans>
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
                        <Trans t={t}>back</Trans>
                    </span>
                </button>
                {
                    (!!listAdded.list.length && balance >= listAdded.summary) ?
                        <button
                            className={"buttons__buy"}
                            onClick={buyItemsButton}>
                            <span>
                                <Trans t={t}>buy</Trans>
                            </span>
                        </button> :
                        <button className={"buttons__back"} disabled>
                            <span>
                                <Trans t={t}>buy</Trans>
                            </span>
                        </button>
                }
            </div>
        </div>
    );
};

export default RightsShopCart;