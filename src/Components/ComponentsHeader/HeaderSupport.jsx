import React from 'react';
import {Trans, useTranslation} from "react-i18next";
import {Link} from "react-router-dom";
import Translate from "../../Hooks/Translate";

const HeaderSupport = () => {

    return (
        <Link to={"/faq"} className="header__support">
            <img src="../images/support.svg" alt="Ico" />
            <span>
                <Translate>header_support</Translate>
            </span>
        </Link>
    );
};

export default HeaderSupport;