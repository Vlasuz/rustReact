import React from 'react';
import {Trans, useTranslation} from "react-i18next";

const HeaderSupport = () => {
    const {t} = useTranslation();
    return (
        <button className="header__support">
            <img src="images/support.svg" alt="Ico" />
            <span>
                <Trans t={t}>header.headerSupport</Trans>
            </span>
        </button>
    );
};

export default HeaderSupport;