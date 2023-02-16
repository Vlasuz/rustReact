import React from 'react';
import {Link} from "react-router-dom";
import {Trans, useTranslation} from "react-i18next";

const RightsChatResources = () => {
    const {t} = useTranslation();

    let openChatRules = function (e) {
        document.querySelector('.section-right__rules').classList.toggle('section-right__rules_active')
        e.target.classList.toggle('resources__button_active')
    }

    return (
        <div className="section-right__resources">
            <button className="resources__button" onClick={openChatRules}>
                <Trans t={t}>chat_rules</Trans>
            </button>
            <Link to={"policy"} className="resources__button">
                <Trans t={t}>chat_terms_of_use</Trans>
            </Link>
        </div>
    );
};

export default RightsChatResources;