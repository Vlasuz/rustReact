import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import OpenPopup from "../../Hooks/OpenPopup";
import {useSelector} from "react-redux";
import {reducerUserData} from "../../Redux/Reducers/reducerUserData";
import Translate from "../../Hooks/Translate";

const BalanceTop = () => {

    const balance = useSelector(state => state.reducerUserBalance.balance)

    return (
        <div className="balance__top">
            <div className="balance__block">
                <h3>
                    <Translate>text_balance</Translate>
                </h3>
                <div className="balance__coins">
                    <img src="../images/header__coins.svg" alt="Ico"/>
                    <span>
                        {balance}
                    </span>
                </div>
            </div>
            <button className="balance__add" onClick={e => OpenPopup("popup-add-coins")}>
                <span>
                    <Translate>text_add_cash</Translate>
                </span>
                <img src="../images/balance-add.svg" alt="Ico"/>
            </button>
        </div>
    );
};

export default BalanceTop;