import React from 'react';
import TopGamerTradeLink from "./TopGamerTradeLink";
import {Trans, useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import {reducerAuth} from "../../Redux/Reducers/reducerAuth";
import {reducerUserData} from "../../Redux/Reducers/reducerUserData";

const TopGamer = () => {

    const {t} = useTranslation();
    const userData = useSelector(state => state.reducerUserData?.data)

    return (
        <div className="top-gamer">
            {
                Object.keys(userData).length && <>
                    <div className="top-gamer__vertical">
                        <span>
                            {userData.status ? userData.status : "?????"}
                        </span>
                    </div>
                    <div className="top-gamer__info">
                        <div className="info__photo">
                            <img src={userData.avatar} alt="Photo"/>
                        </div>
                        <div className="info__block">
                            <h2 className="info__name">{userData.name}</h2>
                            <a className="info__profile" target={"_blank"} href={userData.profile}>
                                <img src="../images/steam.svg" alt="Steam"/>
                                <span>
                            <Trans t={t}>text_profile</Trans>
                        </span>
                            </a>
                        </div>
                    </div>
                    <TopGamerTradeLink/>
                </>
            }

        </div>
    );
};

export default TopGamer;