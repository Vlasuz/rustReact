import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../../Hooks/Translate";

const RightsShopBottomEmpty = () => {
    return (
        <div className="postamat__cart postamat__cart_show postamat__cart_empty">
            <img src="../images/cart.svg" alt="cart"/>
            <span>
                <Translate>shop_zone</Translate>
            </span>
        </div>
    );
};

export default RightsShopBottomEmpty;