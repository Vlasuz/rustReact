import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {storageListToggle, userInventoryCheck} from "../../Redux/actions";
import TradeBanTimer from "../TradeBanTimer";

const RightsItemStorage = (props) => {

    const dispatch = useDispatch()

    const handleSelect = (e) => {
        if(e.target.closest('li')?.querySelector('.item__is-lock_true')) {
            return null;
        }
        dispatch(userInventoryCheck(props.item))
        dispatch(storageListToggle(props.item))
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
            className={props.item.isCheck ? "postamat__item postamat__item_active skins__item_active" : "postamat__item"}
            onClick={handleSelect}
            onMouseDown={handleMouseDown}
        >
            <div className="item__check">
                <img src="../images/green-check.svg" alt="Check"/>
            </div>
            {props.item.count &&
                <div className="item__count">
                    {props.item.count}
                </div>
            }
            <div className={"item__is-lock" + (props.item.trade_ban !== null ? " item__is-lock_true" : "")}>
                <img src="../images/lock-map.svg" width={'11'} alt=""/>
                <p><TradeBanTimer time={new Date('Wed, 5 Oct 2024 00:00:00')}/></p>
            </div>
            <div className="item__photo">
                <img src={props.item.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="../images/header__coins.svg" alt="Ico"/>
                <span>{props.item.price.value}</span>
            </div>
        </li>
    );
};

export default RightsItemStorage;