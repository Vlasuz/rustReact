import React from 'react';
import {Trans, useTranslation} from "react-i18next";

const RightsShopBottomEmpty = () => {
    const {t} = useTranslation();

    return (
        <div className="postamat__cart postamat__cart_show postamat__cart_empty">
            <img src="../images/cart.svg" alt="cart"/>
            <span>
                <Trans t={t}>shop_zone</Trans>
            </span>
        </div>
    );
};

export default RightsShopBottomEmpty;