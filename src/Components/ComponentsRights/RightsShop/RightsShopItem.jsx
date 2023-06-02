import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {shopList, shopListAdd, shopListRemove} from "../../../Redux/actions";
import axios from "axios";
import {userBalanceAddCoins} from "../../../Redux/Reducers/reducerUserBalance";
import {getCookie} from "../../../Hooks/GetCookies";
import {setNotice} from "../../../Redux/Reducers/reducerNotice";
import GlobalLink from "../../../Hooks/GlobalLink";
import TradeBanTimer from "../../TradeBanTimer";

const RightsShopItem = ({data}) => {

    const dispatch = useDispatch()
    const listAdded = useSelector(state => state.reducerShopListAdded.list)
    const userData = useSelector(state => state.reducerUserData.data)
    const [itemAdded, setItemAdded] = useState({})
    let sameItems = listAdded.some(item => item.id === data.id)

    const addItem = function (e) {

        if (!sameItems && !!Object.keys(userData).length) {

            axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.post("https://" + GlobalLink() + `/api/basket/add?item_id=${data.id}`).then(res => {

                if(res.data.message === 'item_not_available') {

                    axios.get("https://" + GlobalLink() + '/api/items/shop/').then(res => {
                        dispatch(shopList(res.data))
                    })
                    dispatch(setNotice(res.data.message))
                    return null;
                }

                dispatch(shopListAdd(res.data))
                setItemAdded(res.data)
            })

        } else {
            axios.post("https://" + GlobalLink() + `/api/basket/remove?item_id=${data.id}`).then(res => {
                dispatch(shopListAdd(res.data))
            })
            // !!Object.keys(userData).length ? dispatch(setNotice("already_added_item")) : dispatch(setNotice("not_added_to_cart"))
        }
    }

    var weekday = new Array(7);
    weekday[0] = "Mon";
    weekday[1] = "Tues";
    weekday[2] = "Wed";
    weekday[3] = "Thurs";
    weekday[4] = "Fri";
    weekday[5] = "Sat";
    weekday[6] = "Sun";
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const setTrueTime = (data) => {
        const tradeBan = data.trade_ban;

        const day = tradeBan?.substr(0, 2);
        const month = monthNames[+tradeBan?.substr(3, 2) - 1];
        const year = tradeBan?.substr(6, 4);
        const time = tradeBan?.slice(tradeBan?.indexOf(' ') + 1);

        const getDayNum = new Date(`${month} ${day}, ${year} ${time}`).getDay()
        const weekdayString = weekday[+getDayNum - 1];


        return new Date(`${weekdayString}, ${day} ${month} ${year} ${time}`)
    }

    return (
        <li
            className={"postamat__item" + (sameItems ? " postamat__item_active" : "")}
            onClick={(e) => addItem(e)}
        >
            <div className="item__check">
                <img src="../images/green-check.svg" alt="Check"/>
            </div>
            {!!Object.keys(userData).length && <div className="item__buy">
                <img src="../images/basket.svg" alt="Basket"/>
            </div>}
            {data.count && <div className="item__count"> {data.count} </div>}
            <TradeBanTimer isTradeBan={data.trade_ban} time={setTrueTime(data)}/>
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