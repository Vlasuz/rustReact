import React from 'react';
import TopGamerTradeLink from "./TopGamerTradeLink";
import {Trans, useTranslation} from "react-i18next";

const TopGamer = ({tradeLink, setTradeLink}) => {

    const {t} = useTranslation();
    return (
        <div className="top-gamer">
            <div className="top-gamer__vertical">
                <span>
                    <Trans t={t}>mainPage.weeklyGamer</Trans>
                </span>
            </div>
            <div className="top-gamer__info">
                <div className="info__photo">
                    <img src="images/user.jpeg" alt="Photo"/>
                </div>
                <div className="info__block">
                    <h2 className="info__name">Рафаэль Миркович</h2>
                    <a className="info__profile" href="#">
                        <img src="images/steam.svg" alt="Steam"/>
                        <span>
                            <Trans t={t}>mainPage.TextProfile</Trans>
                        </span>
                    </a>
                </div>
            </div>
            <TopGamerTradeLink
                tradeLink={tradeLink}
                setTradeLink={setTradeLink}
            />
        </div>
    );
};

export default TopGamer;