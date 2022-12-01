import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const ShopList = (props) => {

    return (
        <div className="skins__block">
            <ShopItem states={props.states} />
            <ShopItem states={props.states} />
            <ShopItem states={props.states} />
            <ShopItem states={props.states} />
            <ShopItem states={props.states} />
        </div>
    );
};

export default ShopList;