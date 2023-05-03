import React, {useEffect, useState} from 'react';
import {useSelector} from "react-redux";
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../../Hooks/Translate";

const RightsShopBottomFull = (props) => {

    const list = useSelector(state => state.reducerShopListAdded)
    const settings = useSelector(state => state.reducerSettings.settings)
    const [commission, setCommission] = useState(0)

    useEffect(() => {
        setCommission(list.summary / 100 * settings.pay_skin_commission)
    }, [list.summary])

    return (
        <div
            className="postamat__cart postamat__cart_show postamat__cart_full"
            onClick={() => props.setIsOpenCart(prev => !prev)}
        >
            <span>
                {list.list.length} <Translate>shop_zone_added</Translate>
            </span>
            <div className="sum">
                <img src="../images/header__coins.svg" alt="Coins"/>
                <span>
                    {(list.summary + commission).toFixed(2)}
                </span>
            </div>
        </div>
    );
};

export default RightsShopBottomFull;