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
            <div className={
                props.item.rarity.color === "1" ? 'item__cool clothes__cool_green' :
                    props.item.rarity.color === "2" ? 'item__cool clothes__cool_blue' :
                        props.item.rarity.color === "3" ? 'item__cool clothes__cool_red' :
                            'item__cool clothes__cool_grey'
            }>

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