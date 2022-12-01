import React from 'react';
import {useState} from "react";

const RightsItemStorage = (props) => {

    const clickToSelectInner = (e) => {
        props.clickToSelect(e)
        props.item.isCheck = !props.item.isCheck
    }

    return (
        <li
            className={props.item.isCheck ? "postamat__item postamat__item_active skins__item_active" : "postamat__item"}
            onClick={e => clickToSelectInner(e)}
        >
            <div className="item__check">
                <img src="images/green-check.svg" alt="Check"/>
            </div>
            <div className="item__count">
                {props.item.count}
            </div>
            <div className={
                props.item.rarity === 1 ? 'item__cool clothes__cool_green' :
                    props.item.rarity === 2 ? 'item__cool clothes__cool_blue' :
                        props.item.rarity === 3 ? 'item__cool clothes__cool_red' :
                            'item__cool clothes__cool_grey'
            }>

            </div>
            <div className="item__photo">
                <img src={props.item.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>{props.item.cost}</span>
            </div>
        </li>
    );
};

export default RightsItemStorage;