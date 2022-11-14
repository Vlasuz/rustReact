import React from 'react';
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";

const BalanceHistory = () => {

    const {t} = useTranslation();
    return (
        <Link to={"/history"} className="balance__history">
            <img src="images/clock.svg" alt="Ico" />
            <span>
                <Trans t={t}>mainPage.textHistoryBalance</Trans>
            </span>
        </Link>
    );
};

export default BalanceHistory;