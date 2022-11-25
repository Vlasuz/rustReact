import React from 'react';
import {useState} from "react";

const RightsItemStorage = (props) => {

    let isClassActive = false

    return (
        <li
            className={isClassActive ? "postamat__item postamat__item_active" : "postamat__item"}
            key={props.itemNum}
            onClick={(e) => {
                props.clickToSelectItem(e)
            }}
        >
            <div className="item__check">
                <img src="images/green-check.svg" alt="Check"/>
            </div>
            <div className="item__count">
                {props.count}
            </div>
            <div className={"item__cool " + props.cools}>

            </div>
            <div className="item__photo">
                <img src={props.image} alt="Skin"/>
            </div>
            <div className="item__price">
                <img src="images/header__coins.svg" alt="Ico"/>
                <span>{props.coins}</span>
            </div>
        </li>
    );
};

export default RightsItemStorage;