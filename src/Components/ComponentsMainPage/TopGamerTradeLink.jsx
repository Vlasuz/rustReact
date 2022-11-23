import React, {useState} from 'react';
import PopupAddTradeLink from "../Popups/PopupTradeLink/PopupAddTradeLink";
import PopupSuccessAddedTradeLink from "../Popups/PopupTradeLink/PopupSuccessAddedTradeLink";
import PopupChangeTradeLink from "../Popups/PopupTradeLink/PopupChangeTradeLink";
import {Trans, useTranslation} from "react-i18next";

const TopGamerTradeLink = (props) => {


    let openPopup = function (nextPopup) {
        if (document.querySelector('.popup_active')) {
            document.querySelector('.popup_active').classList.remove('popup_active')
        }
        document.querySelector('.' + nextPopup).classList.add('popup_active')
    }

    const {t} = useTranslation();
    return (
        <>

            <PopupSuccessAddedTradeLink/>
            <PopupAddTradeLink states={props.states}/>

            {props.states.auth &&
                <>
                    {props.states.tradeLink.length > 0 ?

                        <div className="top-gamer__trade-link">
                            <PopupChangeTradeLink tradeLink={props.states.tradeLink}/>
                            <div className="trade-link__block">
                                <h3>
                                    <Trans t={t}>text_trade_link</Trans>
                                </h3>
                                <button
                                    className="trade-link__button"
                                    onClick={() => openPopup('popup-trade-link-change')}
                                >
                                    <Trans t={t}>text_change</Trans>
                                </button>
                            </div>
                            <div className="trade-link__check">
                                <img src="images/active.svg" alt="Photo"/>
                                <span>
                            <Trans t={t}>text_trade_link_active</Trans>
                        </span>
                            </div>
                        </div> :
                        <div className="top-gamer__trade-link top-gamer__trade-link_nonactive">
                            <div className="trade-link__block">
                                <h3>
                                    <Trans t={t}>text_trade_link</Trans>
                                </h3>
                                <button
                                    className="trade-link__button"
                                    onClick={() => openPopup('popup-trade-link')}
                                >
                                    <Trans t={t}>text_trade_link_add</Trans>
                                </button>
                            </div>
                            <div className="trade-link__check">
                                <img src="images/nonactive.svg" alt="Photo"/>
                                <span>
                            <Trans t={t}>text_trade_link_non_active</Trans>
                        </span>
                            </div>
                        </div>

                    }
                </>
            }


        </>
    );
};

export default TopGamerTradeLink;