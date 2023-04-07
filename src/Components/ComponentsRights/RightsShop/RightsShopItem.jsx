import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {shopListAdd} from "../../../Redux/actions";
import axios from "axios";
import {userBalanceAddCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {getCookie} from "../../../Hooks/GetCookies";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import GlobalLink from "../../../Hooks/GlobalLink";
import TradeBanTimer from "../../TradeBanTimer";

const RightsShopItem = ({ data }) => {

    const dispatch = useDispatch()
    const listAdded = useSelector(state => state.reducerShopListAdded.list)
    const userData = useSelector(state => state.reducerUserData.data)

    const addItem = function (e) {

        if(e.target.closest('li')?.querySelector('.item__is-lock_true')) {
            return null;
        }

        let sameItems = listAdded.some(item => item.id === data.id)

        if(!sameItems && !!Object.keys(userData).length) {

            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post("https://"+GlobalLink()+`/api/basket/add?item_id=${data.id}`).then(res => {
                dispatch(shopListAdd(res.data))
                // dispatch(setNotice("added_to_cart"))
            })

        } else {
            !!Object.keys(userData).length ? dispatch(setNotice("already_added_item")) : dispatch(setNotice("not_added_to_cart"))
        }
    }

    function handleMouseDown(e) {
        if(e.target.closest('li')?.querySelector('.item__is-lock_true')) {
            setTimeout(() => {
                e.target.closest('li').classList.add('item-is-lock')
            }, 50)
            setTimeout(() => {
                e.target.closest('li')?.classList.remove('item-is-lock')
            }, 500)
            return null;
        }
    }

    return (
        <li
            className="postamat__item"
            onMouseDown={handleMouseDown}
            onClick={(e) => addItem(e)}
        >
            {!!Object.keys(userData).length && <div className="item__buy">
                <img src="../images/basket.svg" alt="Basket"/>
            </div>}
            {data.count && <div className="item__count"> {data.count} </div>}
            <div className={"item__is-lock item__is-lock_true"}>
                <img src="../images/lock-map.svg" width={'11'} alt=""/>
                <p><TradeBanTimer time={new Date('Wed, 5 Oct 2024 00:00:00')}/></p>
            </div>
            <div className="item__photo">
                <img src={data.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="../images/header__coins.svg" alt="Ico"/>
                <span>
                    {data.price.value}
                </span>
            </div>
        </li>
    );
};

export default RightsShopItem;