import React, {useEffect, useState} from 'react';
import PopupCloseBackground from "../PopupCloseBackground";
import PopupCloseCross from "../PopupCloseCross";
import PopupAddCoinsBySkinsList from "./PopupAddCoinsBySkins/PopupAddCoinsBySkinsList";
import RightsSortable from "../../ComponentsRights/RightsSortable";
import RightsSortableSecond from "../../ComponentsRights/RightsSortableSecond";
import PopupAddCoinsBySkinsItem from "./PopupAddCoinsBySkins/PopupAddCoinsBySkinsItem";
import RightsItemStorage from "../../ComponentsRights/RightsItemStorage";
import RightsFilterForm from "../../ComponentsRights/RightsFilterForm";
import RightsFilterFormSecond from "../../ComponentsRights/RightsFilterFormSecond";
import {useDispatch, useSelector} from "react-redux";
import {setOpenPopup} from "../../../Redux/Reducers/reducerOpenPopup";
import axios from "axios";
import {getCookie} from "../../../Hooks/GetCookies";
import {logger} from "../../../middleware/logger";
import Translate from "../../../Hooks/Translate";
import GlobalLink from "../../../Hooks/GlobalLink";

const PopupAddCoinsBySkins = () => {

    const isPopup = useSelector(state => state.reducerOpenPopup)
    const dispatch = useDispatch()
    const isOpen = isPopup.popup === "popup-add-coins-skins";
    const [response, setResponse] = useState([])
    const [load, setLoad] = useState(true)
    const [items, setItems] = useState([])
    const [price, setPrice] = useState({
        value: 0,
        steam_price: 0
    })


    useEffect(() => {

        if (isOpen) {
            axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
            axios.get('https://' + GlobalLink() + '/api/trade/inventory/').then(res => {
                setResponse(res.data)
                setLoad(false)
            })
        }

    }, [isOpen])

    const [sortArray, setSortArray] = useState(
        {
            search: '',
            filterRadio: '',
            filterCheckbox: false,
        }
    )

    useEffect(() => {

    }, [])

    const addCoinsFunction = () => {
        axios.defaults.headers.post['Authorization'] = `Bearer ${getCookie("access_token")}`;
        axios.post('https://' + GlobalLink() + '/api/trade/create/pay/', items.map(item => item.id)).then(res => {
            dispatch(setOpenPopup("popup-pull-search", {type: "pay", data: res.data, items}))
        })
    }
    const handleClosePopup = () => {
        dispatch(setOpenPopup(""))
    }
    const handleUpdate = () => {
        setResponse([])
        axios.defaults.headers.get['Authorization'] = `Bearer ${getCookie('access_token')}`;
        axios.get('https://' + GlobalLink() + '/api/trade/inventory/refresh/').then(res => {
            setResponse(res.data)
            setLoad(false)
        })
    }

    const handleSelect = (item) => {
        setItems(prev => {
            if (!prev?.some(itemOld => item.id === itemOld.id)) {
                setPrice({
                    value: price.value + item.price.value,
                    steam_price: +price.steam_price + +item.price.steam_price.toFixed(2)
                })
                return [...prev, item];
            } else {
                const newArray = prev.filter(itemOld => itemOld.id !== item.id)
                setPrice({
                    value: price.value - item.price.value,
                    steam_price: +price.steam_price - +item.price.steam_price.toFixed(2)
                })
                return newArray;
            }
        });

        // setIsCheck(prev => !prev)
    }

    return (
        <div className={"popup popup-add-coins-skins" + (isOpen ? " popup_active" : "")}>
            <div className="popup__bgd" onClick={handleClosePopup}/>
            <div className="popup__content">
                <h2>
                    <Translate>steam_inventory</Translate>
                </h2>
                <p>
                    <Translate>choose_skin_for_payment</Translate>
                </p>

                <div className="popup__cross popup__close" onClick={handleClosePopup}>
                    <img src="../images/cross.svg" alt="Close"/>
                </div>

                <RightsFilterFormSecond
                    sortArray={sortArray}
                    setSortArray={setSortArray}
                />

                <div className="skins__inner">
                    <div className="skins__block">

                        {
                            response
                                ?.filter(item => item?.title?.toLowerCase()?.includes(sortArray?.search?.toLowerCase()))
                                ?.sort((a, b) => (!sortArray.filterCheckbox) ?
                                    ((sortArray.filterRadio === "filterPrice1") ? a.cost : a.rarity) - ((sortArray.filterRadio) === "filterPrice1" ? b.cost : b.rarity) :
                                    ((sortArray.filterRadio === "filterPrice1") ? b.cost : b.rarity) - ((sortArray.filterRadio) === "filterPrice1" ? a.cost : a.rarity))
                                ?.map(item =>
                                    <li
                                        className={items.some(itemOld => itemOld.id === item.id) ? "postamat__item postamat__item_active skins__item_active" : "postamat__item"}
                                        onClick={e => handleSelect(item)}
                                        key={item.id}
                                    >
                                        <div className="item__check">
                                            <img src="../images/green-check.svg" alt="Check"/>
                                        </div>
                                        {item.count &&
                                            <div className="item__count">
                                                {item.count}
                                            </div>
                                        }
                                        <div className="item__cool" style={{background: item.rarity.color}}/>
                                        <div className="item__photo">
                                            <img src={item.image} alt="Skin"/>
                                        </div>
                                        <div className="item__price">
                                            <img src="../images/header__coins.svg" alt="Ico"/>
                                            <span>{item.price.value}</span>
                                        </div>
                                    </li>
                                )
                        }

                    </div>
                </div>
                <hr/>
                <div className="skins__price">
                    <p>
                        <Translate>added_for_balance</Translate>
                    </p>
                    <div className="price__block">
                        <span>
                            ${Math.abs(price.steam_price.toFixed(2)) ? Math.abs(price.steam_price.toFixed(2)) : "0.00"}
                        </span>
                        <div className="ico">
                            <img src="../images/change-arr.svg" alt="Ico"/>
                        </div>
                        <div className="coins">
                            <img src="../images/header__coins.svg" alt="Ico"/>
                            <span>
                                {price.value}
                            </span>
                        </div>
                    </div>
                </div>
                <div className="skins__button">
                    <button className="grey" onClick={handleUpdate}>
                        <img src="../images/reload.svg" alt="ico"/>
                        <span>
                            <Translate>sort_update</Translate>
                        </span>
                    </button>
                    {
                        items.length ?
                            <button onClick={addCoinsFunction}>
                                <span>
                                    <Translate>add_by_skins</Translate>
                                </span>
                            </button>
                            :
                            <button className="grey">
                                <span>
                                    <Translate>add_by_skins</Translate>
                                </span>
                            </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default PopupAddCoinsBySkins;