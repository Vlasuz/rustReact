import React, {useEffect, useState} from 'react';
import RightsShopCartItem from "./RightsShopCartItem";
import {useDispatch, useSelector} from "react-redux";
import {shopList, shopListAdd, shopListRemove, userInventoryAdd, userInventoryRemove} from "../../../Redux/actions";
import axios from "axios";
import {userBalanceAddCoins, userBalanceSetCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {Trans, useTranslation} from "react-i18next";
import {getCookie} from "../../../Hooks/GetCookies";
import GlobalLink from "../../../Hooks/GlobalLink";
import Translate from "../../../Hooks/Translate";
import {setSound} from "../../../Redux/Reducers/reducerSound";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";

const RightsShopCart = (props) => {

    const listAdded = useSelector(state => state.reducerShopListAdded)
    const dispatch = useDispatch()
    const balance = useSelector(state => state.reducerUserBalance.balance)

    const buyItemsButton = (e) => {

        if(!!listAdded.list.length && balance < listAdded.summary) {
            dispatch(setNotice("not_enough_money"))
            return null;
        }

        dispatch(userInventoryRemove('all'))
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.get("https://" + GlobalLink() + '/api/items/inventory/').then(res => {
            dispatch(userInventoryAdd(res.data))
        })
        dispatch(shopListRemove('all'))
        dispatch(setSound(''))



        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+'/api/basket/buy').then(res => {

            if(res.data.message === 'nothing_to_buy') {
                dispatch(setNotice(res.data.message))
                axios.get("https://"+GlobalLink()+'/api/items/shop/').then(res => {
                    dispatch(shopList(res.data))
                })
                return null;
            }

            dispatch(userBalanceSetCoins(res.data.balance))
            props.setIsOpenCart(false)
            props.setIsOpenThanks(true)

            dispatch(userInventoryRemove('all'))
            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.get("https://" + GlobalLink() + '/api/items/inventory/').then(res => {
                dispatch(userInventoryAdd(res.data))
            })

            dispatch(setSound('sound5'))

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
                        <button className={"buttons__back"} onClick={buyItemsButton}>
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