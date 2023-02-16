import React from 'react';
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";

const ShopTop = () => {
    const {t} = useTranslation();

    return (
        <div className="skins__top">
            <Link to={"/"} className="skins__back">
                <img src="../images/back.svg" alt="Ico"/>
                <span>
                    <Trans t={t}>fights_back_button</Trans>
                </span>
            </Link>
            <h1>
                <Trans t={t}>uniq_skins_title</Trans>
            </h1>
        </div>
    );
};

export default ShopTop;