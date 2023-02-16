import React from 'react';
import {useDispatch} from "react-redux";
import {shopListAdd, shopListRemove} from "../../../Redux/actions";
import axios from "axios";

const RightsShopCartItem = ({ item }) => {

    const dispatch = useDispatch()

    const removeItem = (e) => {
        axios.post(`https://rust.onefut.net/api/basket/remove?item_id=${item.id}`).then(res => {
            dispatch(shopListAdd(res.data))
        })
    }

    return (
        <div className="cart__item">
            <div className="clothes__cool clothes__cool_green">

            </div>
            <div className="item__photo">
                <img src={item.image} alt="Ico"/>
            </div>
            <div className="item__info">
                <div className="item__name">
                    {item.title}
                </div>
                <div className="item__price">
                    <img src="../images/header__coins.svg" alt="Coins"/>
                    <span>
                        {item.price.value}
                    </span>
                </div>
            </div>
            <div
                className="item__delete"
                onClick={(e) => removeItem(e)}>
                <img src="../images/cross.svg" alt="Delete"/>
            </div>
        </div>
    );
};

export default RightsShopCartItem;