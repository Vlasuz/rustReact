import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {reducerUserSkins, userSkinAdd, userSkinBought, userSkinSet} from "../../Redux/Reducers/reducerUserSkins";
import axios from "axios";
import {userBalanceAddCoins, userBalanceRemoveCoins} from "../../Redux/Reducers/reducerUserBalance";
import {getCookie} from "../../Hooks/GetCookies";
import GlobalLink from "../../Hooks/GlobalLink";
import Translate from "../../Hooks/Translate";
import AsyncImages from "../../Hooks/AsyncImages";

const ShopItem = ({ data, list }) => {

    const balance = useSelector(state => state.reducerUserBalance.balance)
    const price = data.sale ? (data.price - (data.price * data.sale / 100)).toFixed() : data.price;
    const dispatch = useDispatch();
    const [isBoughtSkin, setIsBoughtSkin] = useState(false)
    const [isEnoughCash, setIsEnoughCash] = useState(true);
    const enable_skin = useSelector(state => state.reducerUserSkins.skin)
    const bought_skin = useSelector(state => state.reducerUserSkins.bought_skins)

    const buyTheClothes = (e) => {
        setIsEnoughCash(true)
        if(balance < price){
            return setTimeout(() => setIsEnoughCash(false), 50)
        }

        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+'/api/fight/shop/buy?skin_id='+data.id).then(res => {
            dispatch(userBalanceRemoveCoins(price))
            dispatch(userSkinBought(data))
            setIsBoughtSkin(true)
        })
    }


    const handleSetSkin = (e) => {
        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.post("https://"+GlobalLink()+'/api/fight/shop/choose?skin_id='+data.id).then(res => {
            dispatch(userSkinSet(data))
        })
    }

    useEffect(() => {
        setIsBoughtSkin(list.owned.some(item => item.id === data.id))
    }, [])


    return (
        <div className={enable_skin?.id === data.id ? "skins__item skins__item_active" : "skins__item"}>
            <div className="item__check">
                <img src="../images/green-check.svg" alt="Check"/>
            </div>
            <h2>
                {data.title}
            </h2>
            <p>
                {data.sub_title}
            </p>
            <div className="item__skin">
                {/*<AsyncImages src={"https://"+GlobalLink()+"/"+data.image} alt={"skin"}/>*/}
                <img src={"https://"+GlobalLink()+"/"+data.image} alt="Skin"/>
            </div>


            <div className="item__buy">
                {!(isBoughtSkin || bought_skin.some(item => item.id === data.id)) ?
                    <button
                        className={ "buy__price" + (isEnoughCash ? "" : ' item__buy_not-enough')}
                        onClick={buyTheClothes}>

                        <img src="../images/header__coins.svg" alt="Skin"/>
                        <span>
                            {price}
                        </span>

                        {
                            data.sale &&
                            <div className="sale">
                                {data.sale}%
                            </div>
                        }
                    </button> :
                    <button
                        className={enable_skin?.id === data.id ? "buy__set" : "buy__buy"}
                        onClick={handleSetSkin}>

                        {
                            enable_skin?.id === data.id ? <span><Translate>skin_current</Translate></span> : <span><Translate>skin_set</Translate></span>
                        }

                    </button>
                }
            </div>
        </div>
    );
};

export default ShopItem;