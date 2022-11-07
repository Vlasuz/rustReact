import React, {useState} from 'react';
import ShopItem from "./ShopItem";

const ShopList = () => {

    return (
        <div className="skins__block">
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
            <ShopItem/>
        </div>
    );
};

export default ShopList;