import React from 'react';
import ShopItemTop from "./ShopItemTop";
import ShopItemPhoto from "./ShopItemPhoto";
import ShopItemButton from "./ShopItemButton";
import ShopItemCheck from "./ShopItemCheck";

const ShopItem = () => {
    return (
        <div className="skins__item">
            <ShopItemCheck />
            <ShopItemTop />
            <ShopItemPhoto />
            <ShopItemButton />
        </div>
    );
};

export default ShopItem;