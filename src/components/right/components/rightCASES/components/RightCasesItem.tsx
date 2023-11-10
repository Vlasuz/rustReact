import React from 'react'
import { IProduct } from '../../../../../model'
import coin from './../../../../../assets/images/header__coins.svg'
import check from './../../../../../assets/images/green-check.svg'
import basket from './../../../../../assets/images/basket.svg'
import { addItemToCart, removeItemFromCart, setNotice } from '../../../../../redux/toolkitSlice'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import { getApiLink } from '../../../../../functions/getApiLink'
import { getBearer } from '../../../../../functions/getBearer'
import getCookies from "../../../../../functions/getCookie";
import {RightItemTradeBan} from "../../rightSHOP/components/RightItemTradeBan";

interface IRightShopItemProps {
    data: IProduct
    searchValue: string
}

export const RightCasesItem: React.FC<IRightShopItemProps> = ({ data, searchValue }) => {

    const dispatch = useDispatch()
    const cart = useSelector((state: any) => state.toolkit.shopCart)

    const handleAddToCart = () => {
        if(!getCookies('access_token')) {
            return dispatch(setNotice('beforeYouNeedAuth'))
        }

        if (cart.some((item: IProduct) => item.id === data.id)) {
            getBearer({ type: 'post' });
            axios.post(getApiLink(`api/basket/remove?item_id=${data.id}`));
            dispatch(removeItemFromCart(data));
        } else {
            getBearer({ type: 'post' });
            axios.post(getApiLink(`api/basket/add?item_id=${data.id}`));
            dispatch(addItemToCart([data]));
            dispatch(setNotice("addedToCart"))
        }
    }


    return (
        <div onClick={handleAddToCart} className={"postamat__item" + (cart.some((item: IProduct) => item.id === data.id) ? " postamat__item_checked" : "")}>
            <div className="item__check">
                <img src={check} alt="Check" />
            </div>
            <div className="item__buy">
                <img src={basket} alt="Basket" />
            </div>
            <div className={"item__cool " + data.rarity.title} style={{ background: data.rarity.color }} />
            <div className="item__title">
                Title of product
            </div>
            <RightItemTradeBan data={data} />
            <div className="item__photo">
                <img src={data.image} alt="Skin" />
            </div>
            <div className="item__price">
                <img src={coin} alt="Ico" />
                <span>
                    {data.price.value}
                </span>
            </div>
        </div>
    )
}
