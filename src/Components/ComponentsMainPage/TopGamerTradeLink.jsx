import React, {useState} from 'react';
import PopupAddTradeLink from "../Popups/PopupTradeLink/PopupAddTradeLink";
import PopupSuccessAddedTradeLink from "../Popups/PopupTradeLink/PopupSuccessAddedTradeLink";
import PopupChangeTradeLink from "../Popups/PopupTradeLink/PopupChangeTradeLink";
import {Trans, useTranslation} from "react-i18next";
import OpenPopup from "../../Hooks/OpenPopup";
import {useSelector} from "react-redux";
import {reducerUserData} from "../../Redux/Reducers/reducerUserData";
import Translate from "../../Hooks/Translate";

const TopGamerTradeLink = () => {

    const userData = useSelector(state => state.reducerUserData.data)

    return (
        <>

            <PopupSuccessAddedTradeLink/>
            <PopupAddTradeLink/>

            {userData.trade_link ?

                <div className="top-gamer__trade-link">
                    <PopupChangeTradeLink />

                    <div className="trade-link__block">
                        <h3>
                            <Translate>text_trade_link</Translate>
                        </h3>
                        <button
                            className="trade-link__button"
                            onClick={e => OpenPopup('popup-trade-link-change')}
                        >
                            <Translate>text_change</Translate>
                        </button>
                    </div>
                    <div className="trade-link__check">
                        <img src="../images/active.svg" alt="Photo"/>
                        <span>
                            <Translate>text_trade_link_active</Translate>
                        </span>
                    </div>
                </div> :
                <div className="top-gamer__trade-link top-gamer__trade-link_nonactive">
                    <div className="trade-link__block">
                        <h3>
                            <Translate>text_trade_link</Translate>
                        </h3>
                        <button
                            className="trade-link__button"
                            onClick={e => OpenPopup('popup-trade-link')}
                        >
                            <Translate>text_trade_link_add</Translate>
                        </button>
                    </div>
                    <div className="trade-link__check">
                        <img src="../images/nonactive.svg" alt="Photo"/>
                        <span>
                            <Translate>text_trade_link_non_active</Translate>
                        </span>
                    </div>
                </div>

            }

        </>
    );
};

export default TopGamerTradeLink;