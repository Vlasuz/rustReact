import React from 'react';
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../Hooks/Translate";

const BalanceHistory = () => {
    return (
        <Link to={"/history"} className="balance__history">
            <img src="../images/clock.svg" alt="Ico" />
            <span>
                <Translate>text_history_balance</Translate>
            </span>
        </Link>
    );
};

export default BalanceHistory;