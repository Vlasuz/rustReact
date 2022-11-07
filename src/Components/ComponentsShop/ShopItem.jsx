import React, {useState} from 'react';
import ShopItemTop from "./ShopItemTop";
import ShopItemPhoto from "./ShopItemPhoto";
import ShopItemButton from "./ShopItemButton";
import ShopItemCheck from "./ShopItemCheck";

const ShopItem = () => {

    const [isBought, setIsBought] = useState(false)
    return (
        <div className="skins__item">
            <ShopItemCheck />
            <ShopItemTop />
            <ShopItemPhoto />
            <ShopItemButton isBought={isBought} setIsBought={setIsBought} />
        </div>
    );
};

export default ShopItem;