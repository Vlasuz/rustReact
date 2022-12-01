import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import {Link} from "react-router-dom";

const HeaderSupport = () => {
    const {t} = useTranslation();
    return (
        <Link to={"/faq"} className="header__support">
            <img src="images/support.svg" alt="Ico" />
            <span>
                <Trans t={t}>header_support</Trans>
            </span>
        </Link>
    );
};

export default HeaderSupport;