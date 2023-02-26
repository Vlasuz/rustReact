import React from 'react';
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";
import Translate from "../../Hooks/Translate";

const ShopTop = () => {

    return (
        <div className="skins__top">
            <Link to={"/"} className="skins__back">
                <img src="../images/back.svg" alt="Ico"/>
                <span>
                    <Translate>fights_back_button</Translate>
                </span>
            </Link>
            <h1>
                <Translate>uniq_skins_title</Translate>
            </h1>
        </div>
    );
};

export default ShopTop;