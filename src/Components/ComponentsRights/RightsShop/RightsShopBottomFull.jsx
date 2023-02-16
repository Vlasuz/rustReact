import React from 'react';
import {useSelector} from "react-redux";
import {Trans, useTranslation} from "react-i18next";

const RightsShopBottomFull = (props) => {
    const {t} = useTranslation();

    const list = useSelector(state => state.reducerShopListAdded)

    return (
        <div
            className="postamat__cart postamat__cart_show postamat__cart_full"
            onClick={() => props.setIsOpenCart(prev => !prev)}
        >
            <span>
                {list.list.length} <Trans t={t}>shop_zone_added</Trans>
            </span>
            <div className="sum">
                <img src="../images/header__coins.svg" alt="Coins"/>
                <span>
                    {list.summary}
                </span>
            </div>
        </div>
    );
};

export default RightsShopBottomFull;