import React, {useEffect, useState} from 'react';
import ShopItem from "./ShopItem";
import {useDispatch, useSelector} from "react-redux";
import {reducerShopSkins, skinsShop} from "../../Redux/Reducers/reducerShopSkins";
import axios from "axios";
import {userSkinSet} from "../../Redux/Reducers/reducerUserSkins";
import {getCookie} from "../../Hooks/GetCookies";

const ShopList = () => {

    const list = useSelector(state => state.reducerShopSkins.skins)
    const userData = useSelector(state => state.reducerUserData.data)
    const dispatch = useDispatch()

    useEffect(() => {
        if (Object.keys(userData).length) {
            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.get('https://rust.onefut.net/api/fight/shop/').then(res => {
                dispatch(skinsShop(res.data))
                dispatch(userSkinSet(res.data.chosen))
            })
        }
    }, [userData])


    return (
        <div className="skins__block">

            {
                list.shop?.map(skin => <ShopItem key={skin.id} data={skin} list={list}/>)
            }

        </div>
    );
};

export default ShopList;