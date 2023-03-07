import React from 'react';
import {useState} from "react";
import {useDispatch} from "react-redux";
import {storageListToggle, userInventoryCheck} from "../../Redux/actions";

const RightsItemStorage = (props) => {

    const dispatch = useDispatch()

    const handleSelect = () => {
        dispatch(userInventoryCheck(props.item))
        dispatch(storageListToggle(props.item))
    }

    return (
        <li
            className={props.item.isCheck ? "postamat__item postamat__item_active skins__item_active" : "postamat__item"}
            onClick={handleSelect}>
            <div className="item__check">
                <img src="../images/green-check.svg" alt="Check"/>
            </div>
            {props.item.count &&
                <div className="item__count">
                    {props.item.count}
                </div>
            }
            <div className={"item__cool"} style={{background: props.item.rarity.color}}>

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