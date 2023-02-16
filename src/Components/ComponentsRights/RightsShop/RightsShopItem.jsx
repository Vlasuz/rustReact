import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {shopListAdd} from "../../../Redux/actions";
import axios from "axios";
import {userBalanceAddCoins} from "../../../Redux/Reducers/reducerUserBalance";

const RightsShopItem = ({ data, seTisAdded }) => {

    const dispatch = useDispatch()
    const listAdded = useSelector(state => state.reducerShopListAdded.list)
    const userData = useSelector(state => state.reducerUserData.data)

    function getCookie(name) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    const addItem = function (e) {
        let sameItems = listAdded.some(item => item.id === data.id)

        if(!sameItems && !!Object.keys(userData).length) {

            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post(`https://rust.onefut.net/api/basket/add?item_id=${data.id}`).then(res => {
                seTisAdded(true)
                dispatch(shopListAdd(res.data))
                setTimeout(() => {
                    seTisAdded(false)
                }, 100)
            })

        }
    }

    return (
        <div
            className="postamat__item"
            onClick={(e) => addItem(e)}
        >
            {!!Object.keys(userData).length && <div className="item__buy">
                <img src="../images/basket.svg" alt="Basket"/>
            </div>}
            {data.count && <div className="item__count"> {data.count} </div>}
            <div className={
                data.rarity.color === "1" ? 'item__cool clothes__cool_green' :
                    data.rarity.color === "2" ? 'item__cool clothes__cool_blue' :
                        data.rarity.color === "3" ? 'item__cool clothes__cool_red' :
                            'item__cool clothes__cool_grey'
            }>

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
        </div>
    );
};

export default RightsShopItem;